/* ============================================================
   CORE ENGINE — Japanese Mastery System
   Loaded by index.html and roadmap.html.
   Pure-ish: defines functions/objects, no DOM work at load time
   (so it can also be sanity-checked in Node).
   ============================================================ */
(function (root) {
  'use strict';

  // ---- storage (browser localStorage, or in-memory for tests) ----
  const mem = {};
  const store = (typeof localStorage !== 'undefined') ? localStorage : {
    getItem: k => (k in mem ? mem[k] : null),
    setItem: (k, v) => { mem[k] = String(v); },
    removeItem: k => { delete mem[k]; }
  };
  const DB = {
    get(k) { try { return JSON.parse(store.getItem('mnn_' + k)); } catch (e) { return null; } },
    set(k, v) { store.setItem('mnn_' + k, JSON.stringify(v)); }
  };

  // ---- tunable dials (see blueprint Appendix) ----
  const DIALS = {
    I_TARGET: 30,                 // interval (days) that counts as "mastered"
    TAU: 21,                      // forgetting time-constant for accuracy decay
    SRS_LADDER: [1, 3, 7, 14, 30, 90],
    MISS_RESET: 1,
    MOMENTUM_DECAY: 0.85,
    PROJECTION_WINDOW: 14,
    WEIGHTS: { vocab: 0.25, grammar: 0.25, reading: 0.20, listening: 0.20, kanji: 0.10 },
    UNLOCK: { mastery: 80, retention: 70 }
  };
  const DIMS = ['vocab', 'grammar', 'reading', 'listening', 'kanji'];

  // ---- date helpers (timezone-safe local key) ----
  function dateKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function daysBetween(aKey, bKey) {
    const a = new Date(aKey + 'T00:00:00'), b = new Date(bKey + 'T00:00:00');
    return Math.round((b - a) / 86400000);
  }

  // ---- haptics + shuffle (the "juice", preserved) ----
  function haptic(type) {
    if (typeof navigator === 'undefined' || !navigator.vibrate) return;
    try {
      ({ light: () => navigator.vibrate(15),
         success: () => navigator.vibrate([15, 30, 20]),
         error: () => navigator.vibrate([40, 50, 40]),
         heavy: () => navigator.vibrate(40),
         celebrate: () => navigator.vibrate([30, 50, 30, 50, 40, 40, 80]) }[type] || (() => {}))();
    } catch (e) {}
  }
  function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // ============================================================
  // CONTENT — flatten Lesson Packs into per-dimension item pools
  // ============================================================
  let PACKS = [];
  const ITEMS = { vocab: [], grammar: [], kanji: [], reading: [], listening: [], question: [] };
  const BY_ID = {};

  function indexContent(packs) {
    PACKS = packs || [];
    for (const d of Object.keys(ITEMS)) ITEMS[d] = [];
    for (const k in BY_ID) delete BY_ID[k];

    for (const p of PACKS) {
      const meta = { level: p.level, module: p.module, moduleLabel: p.moduleLabel, lesson: p.lesson, lessonLabel: p.lessonLabel };
      (p.vocabulary || []).forEach(v => add({ ...v, dim: 'vocab', ...meta }));
      (p.grammar || []).forEach(g => add({ ...g, dim: 'grammar', ...meta }));
      (p.kanji || []).forEach(k => add({ ...k, dim: 'kanji', ...meta }));
      (p.listening || []).forEach(l => add({ ...l, dim: 'listening', ...meta }));
      // standalone questions feed the quiz pool, tagged by their own dim
      (p.questions || []).forEach(q => { const it = { ...q, ...meta }; ITEMS.question.push(it); BY_ID[it.id] = it; });
      // reading passage is an item; its comprehension questions also feed the quiz pool (dim=reading)
      if (p.reading) {
        add({ ...p.reading, dim: 'reading', ...meta });
        (p.reading.questions || []).forEach(rq => {
          const it = { id: rq.id, dim: 'reading', type: 'comprehension', s: rq.q, a: '読解 — comprehension', o: rq.o, c: rq.c, exp: rq.exp, parent: p.reading.id, ...meta };
          ITEMS.question.push(it); BY_ID[it.id] = it;
        });
      }
      // listening items double as quiz questions
      (p.listening || []).forEach(l => {
        const it = { id: 'lq_' + l.id, dim: 'listening', type: 'listening', audioText: l.audioText, s: '🎧 ' + (l.a || 'Listen and choose'), a: 'Tap ▶ to listen', o: l.o, c: l.c, exp: l.exp, parent: l.id, ...meta };
        ITEMS.question.push(it); BY_ID[it.id] = it;
      });
    }
    function add(it) { ITEMS[it.dim].push(it); BY_ID[it.id] = it; }
  }

  // load order: instant from cache → fallback seed → background API refresh
  async function loadContent(onReady) {
    const cached = DB.get('cache_packs');
    if (cached && cached.length) { indexContent(cached); if (onReady) onReady('cache'); }
    else if (root.SEED_CONTENT) { indexContent(root.SEED_CONTENT); if (onReady) onReady('seed'); }

    try {
      const r = await fetch('/api/content?type=lessons');
      const j = await r.json();
      const packs = (j && j.data) || [];
      if (packs.length) { indexContent(packs); DB.set('cache_packs', packs); if (onReady) onReady('api'); }
    } catch (e) {
      if (!PACKS.length && root.SEED_CONTENT) { indexContent(root.SEED_CONTENT); DB.set('cache_packs', root.SEED_CONTENT); if (onReady) onReady('seed'); }
    }
  }

  // ============================================================
  // UNIFIED SRS  (every answer — quiz, flashcard, listening, reading — rates the linked item)
  // quality: 1 again · 2 hard · 3 good · 4 easy
  // ============================================================
  function getSRS() { return DB.get('srs') || {}; }
  function saveSRS(s) { DB.set('srs', s); }
  function itemState(id) {
    const s = getSRS();
    return s[id] || { interval: 0, reps: 0, ease: 2.5, last: 0, lastKey: null, next: 0, attempts: 0, correct: 0, peak: 0 };
  }
  function rate(id, quality) {
    const s = getSRS(); const c = itemState(id);
    c.attempts++;
    if (quality >= 3) {
      c.correct++;
      c.interval = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
      // snap to the readable ladder when close
      const ladder = DIALS.SRS_LADDER;
      const snapped = ladder.find(x => x >= c.interval); if (snapped && c.reps >= 1) c.interval = snapped;
      c.reps++;
      c.ease = Math.max(1.3, c.ease + (0.1 - (4 - quality) * (0.08 + (4 - quality) * 0.02)));
    } else {
      c.interval = DIALS.MISS_RESET; c.reps = 0;
      if (quality === 2) c.ease = Math.max(1.3, c.ease - 0.15);
    }
    c.last = Date.now(); c.lastKey = dateKey();
    c.next = Date.now() + c.interval * 86400000;
    c.peak = Math.max(c.peak, 1 - Math.exp(-c.reps / 2.5));
    s[id] = c; saveSRS(s);
    return c;
  }
  function isDue(id) { const c = itemState(id); return c.attempts > 0 && c.next <= Date.now(); }
  function dueQuestions(limit) {
    const due = ITEMS.question.filter(q => isDue(q.id));
    return shuffle(due).slice(0, limit || 999);
  }

  // ============================================================
  // MASTERY MATH (coverage-aware) — see blueprint §3.1
  // ============================================================
  function itemMastery(id) {
    const c = itemState(id);
    if (!c.reps || !c.last) return 0;                         // never learned → 0
    // strength grows with successful repetitions (Learn→Recall→Use→Master),
    // ~0.33 after 1 good rep, ~0.70 after 3, ~0.86 after 5
    const strength = 1 - Math.exp(-c.reps / 2.5);
    const daysSince = (Date.now() - c.last) / 86400000;
    const decay = Math.exp(-daysSince / Math.max(c.interval, 1));
    return strength * decay;
  }
  // The pool for a dimension must be exactly the ids that actually get RATED,
  // or coverage math silently caps the bar below 100%.
  //  • vocab / grammar / kanji are rated at the item level (flashcards rate the
  //    base item; linked quiz questions rate it too via q.linksTo). Pool = items.
  //  • reading / listening are rated at the QUESTION level (comprehension and
  //    audio questions rate their own id; the passage/audio item itself is never
  //    rated). Pool = those questions — never the un-rated base items, which
  //    would otherwise be dead weight pinning reading ≤75% and listening ≤50%.
  function poolForDim(dim) {
    if (dim === 'reading' || dim === 'listening') {
      return ITEMS.question.filter(i => i.dim === dim).map(i => i.id);
    }
    // vocab / grammar / kanji: base items (rated via flashcards + linked quizzes).
    // ALSO include any standalone question of this dim that has no linksTo — it
    // is rated by its own id, so it must be in the pool or it counts for nothing.
    const base = (ITEMS[dim] || []).map(i => i.id);
    const orphan = ITEMS.question.filter(i => i.dim === dim && !i.linksTo).map(i => i.id);
    return Array.from(new Set([...base, ...orphan]));
  }
  function dimMastery(dim) {
    const pool = poolForDim(dim);
    if (!pool.length) return null;
    const sum = pool.reduce((s, id) => s + itemMastery(id), 0);
    return Math.round((sum / pool.length) * 100);
  }
  function overallMastery() {
    let total = 0, wsum = 0;
    for (const d of DIMS) {
      const m = dimMastery(d);
      if (m === null) continue;
      total += DIALS.WEIGHTS[d] * m; wsum += DIALS.WEIGHTS[d];
    }
    return wsum ? Math.round(total / wsum) : 0;
  }
  // Retention: of what you ever learned, how much survives  (current / peak)
  function retention() {
    const s = getSRS(); const ids = Object.keys(s).filter(id => s[id].reps > 0);
    if (!ids.length) return null;
    let cur = 0, peak = 0;
    ids.forEach(id => { cur += itemMastery(id); peak += Math.max(s[id].peak, 0.0001); });
    return peak ? Math.round((cur / peak) * 100) : null;
  }

  // ============================================================
  // GROWTH SNAPSHOTS + heatmap data
  // ============================================================
  function snapshots() { return DB.get('mastery_snaps') || {}; }
  function snapshotToday() {
    const snaps = snapshots(); const k = dateKey();
    snaps[k] = overallMastery(); DB.set('mastery_snaps', snaps); return snaps;
  }
  function growthToday() {
    const snaps = snapshots(); const today = dateKey();
    if (snaps[today] == null) return 0;
    // compare to the most recent PRIOR active day (snapshots only exist on days
    // studied), so a gap day before today doesn't force this to read 0.
    const prior = Object.keys(snaps).filter(k => k < today).sort();
    if (!prior.length) return 0;
    return +(snaps[today] - snaps[prior[prior.length - 1]]).toFixed(1);
  }
  function growthRate() { // avg daily Overall growth across the window (active days)
    const snaps = snapshots(); const keys = Object.keys(snaps).sort();
    if (keys.length < 2) return 0.1;
    const recent = keys.slice(-DIALS.PROJECTION_WINDOW);
    let deltas = [];
    for (let i = 1; i < recent.length; i++) { const d = snaps[recent[i]] - snaps[recent[i - 1]]; if (d > 0) deltas.push(d); }
    if (!deltas.length) return 0.1;
    return Math.max(0.05, deltas.reduce((a, b) => a + b, 0) / deltas.length);
  }
  function daysToReady(targetMastery) {
    const gap = (targetMastery || DIALS.UNLOCK.mastery) - overallMastery();
    if (gap <= 0) return 0;
    return Math.ceil(gap / growthRate());
  }

  // ============================================================
  // ACTIVITY LOG (drives the study heatmap)
  // ============================================================
  function activityLog() { return DB.get('activity_log') || {}; }
  function logActivity(units, minutes) {
    const log = activityLog(); const k = dateKey();
    const e = log[k] || { items: 0, minutes: 0 };
    e.items += units || 0; e.minutes += minutes || 0; log[k] = e;
    DB.set('activity_log', log);
  }

  // ============================================================
  // MOMENTUM (replaces streak — gentle decay, never resets to 0)
  // ============================================================
  function getMomentum() {
    const m = DB.get('momentum') || { value: 0, lastDate: null };
    const today = dateKey();
    if (m.lastDate && m.lastDate !== today) {
      const gap = Math.max(0, daysBetween(m.lastDate, today));
      if (gap > 0) { m.value = Math.round(m.value * Math.pow(DIALS.MOMENTUM_DECAY, gap)); }
    }
    return m;
  }
  function bumpMomentum(gain) {
    const m = getMomentum(); const today = dateKey();
    m.value = Math.min(100, m.value + (gain || 8));
    m.lastDate = today; DB.set('momentum', m); return m.value;
  }

  // ============================================================
  // SMART DAILY MISSION  (deterministic — blueprint keystone)
  // ============================================================
  function weakestDim() {
    let worst = null, worstVal = 999;
    for (const d of DIMS) { const m = dimMastery(d); if (m !== null && m < worstVal) { worstVal = m; worst = d; } }
    return worst || 'reading';
  }
  function unseen(dim) {
    return (ITEMS[dim] || []).filter(i => itemState(i.id).attempts === 0);
  }
  function pickStory() {
    const stories = ITEMS.reading;
    if (!stories.length) return null;
    // The passage item itself is never rated, so judge recency by the most
    // recent answer among its own comprehension questions → rotate fairly.
    const lastTouch = (st) => ITEMS.question
      .filter(q => q.parent === st.id)
      .reduce((mx, q) => Math.max(mx, itemState(q.id).last || 0), 0);
    return stories.slice().sort((a, b) => lastTouch(a) - lastTouch(b))[0];
  }
  function buildMission() {
    const focus = weakestDim();
    // weakness attack: surface due reviews from the focus dimension first
    const allDue = dueQuestions(99);
    const due = [...allDue.filter(q => q.dim === focus), ...allDue.filter(q => q.dim !== focus)].slice(0, 12);
    // new chunk: a few unseen vocab + grammar (sentence-first)
    const newVocab = unseen('vocab').slice(0, 2);
    const newGrammar = unseen('grammar').slice(0, 1);
    // weakness attack: if kanji is the weak spot, teach a couple of new ones too
    const newKanji = focus === 'kanji' ? unseen('kanji').slice(0, 2) : [];
    const story = pickStory();
    // recall: 5 questions, skewed toward the focus dimension
    const focusQs = shuffle(ITEMS.question.filter(q => q.dim === focus));
    const otherQs = shuffle(ITEMS.question.filter(q => q.dim !== focus));
    const recall = [...focusQs.slice(0, 3), ...otherQs.slice(0, 2)].slice(0, 5);
    const estMin = 5 + (newVocab.length + newGrammar.length + newKanji.length) * 2 + 8 + 3 + recall.length;
    return { focus, due, newVocab, newGrammar, newKanji, story, recall, estMin };
  }

  // ---- expose ----
  root.Core = {
    DB, DIALS, DIMS, dateKey, daysBetween, haptic, shuffle,
    loadContent, indexContent, PACKS: () => PACKS, ITEMS, BY_ID,
    rate, itemState, isDue, dueQuestions, getSRS,
    itemMastery, dimMastery, overallMastery, retention,
    snapshotToday, growthToday, growthRate, daysToReady, snapshots,
    activityLog, logActivity,
    getMomentum, bumpMomentum,
    weakestDim, buildMission, pickStory
  };
})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) module.exports = (typeof window !== 'undefined' ? window : globalThis).Core;
