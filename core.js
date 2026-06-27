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
    // Robustness: content saved via the admin / generate API carries module/lesson
    // labels (e.g. 'L25') but often no numeric lessonNum (or a string one). The lesson
    // UI keys off a numeric lessonNum, so coerce/derive it for every pack.
    for (const p of PACKS) {
      let ln = p.lessonNum;
      if (ln == null || ln === '' || isNaN(+ln)) {
        const m = String(p.lesson || p.module || p.lessonLabel || p.moduleLabel || p.title || '').match(/\d+/);
        ln = m ? parseInt(m[0], 10) : null;
      } else { ln = +ln; }
      if (ln != null) p.lessonNum = ln; else delete p.lessonNum;
    }
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
      if (packs.length) {
        indexContent(packs);
        // If the server content has no readable lessons but the bundled seed does,
        // keep the seed so the lesson screen is never empty.
        if (!lessonNums().length && root.SEED_CONTENT) {
          indexContent(root.SEED_CONTENT);
          DB.set('cache_packs', root.SEED_CONTENT);
        } else {
          DB.set('cache_packs', packs);
        }
        if (onReady) onReady('api');
      }
    } catch (e) {
      if (!PACKS.length && root.SEED_CONTENT) { indexContent(root.SEED_CONTENT); DB.set('cache_packs', root.SEED_CONTENT); if (onReady) onReady('seed'); }
    }
  }

  // ============================================================
  // UNIFIED SRS  (every answer — quiz, flashcard, listening, reading — rates the linked item)
  // quality: 1 again · 2 hard · 3 good · 4 easy
  // ============================================================
  // The scheduler now delegates to the FSRS-style Memory engine (memory-engine.js).
  // Every item carries Stability (S), Difficulty (D), Retrievability (R). Reviews
  // are timed to the ~90% recall edge — the spacing-effect sweet spot. The old
  // SM-2 ladder (ease/interval snapping) has been retired.
  function MEM() {
    if (!root.Memory) throw new Error('memory-engine.js must load before core.js');
    return root.Memory;
  }
  function getSRS() { return DB.get('srs') || {}; }
  function saveSRS(s) { DB.set('srs', s); }
  function itemState(id) {
    const s = getSRS();
    return s[id] || { S: 0, D: 0, reps: 0, lapses: 0, last: 0, lastKey: null, next: 0, attempts: 0, correct: 0 };
  }
  // quality / grade: 1 again · 2 hard · 3 good · 4 easy
  function rate(id, grade) {
    const s = getSRS();
    const next = MEM().review(s[id] || null, grade);
    next.lastKey = dateKey();
    s[id] = next; saveSRS(s);
    return next;
  }
  function isDue(id) { return MEM().isDue(getSRS()[id]); }
  function dueQuestions(limit) {
    const due = ITEMS.question.filter(q => isDue(q.id));
    return shuffle(due).slice(0, limit || 999);
  }

  // ============================================================
  // MASTERY MATH (coverage-aware) — see blueprint §3.1
  // ============================================================
  // Item mastery = durability: how close this memory is to being ~2-month-durable.
  // Driven by Stability (S) from the Memory engine — 0 when never learned, 1.0 once
  // the memory reaches the "mastered" stage (S ≥ MASTERED_S). It only climbs with
  // successful reviews and dips on a lapse, so the progress bar doesn't oscillate
  // day-to-day the way raw recall does. (Live recall is reported as retention, below.)
  function itemMastery(id) {
    const c = itemState(id);
    if (!c.attempts || !c.S) return 0;                        // never studied → 0
    return Math.min(1, c.S / MEM().CFG.MASTERED_S);
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
  // Retention: right now, of everything she has learned, how much can she still
  // recall? = mean current Retrievability (R) across items with ≥1 rep. This is the
  // live "is my memory healthy today" number — it dips as reviews fall due and snaps
  // back up when she clears them.
  function retention() {
    const s = getSRS(); const ids = Object.keys(s).filter(id => s[id].attempts > 0);
    if (!ids.length) return null;
    const M = MEM();
    const sum = ids.reduce((acc, id) => acc + M.currentR(s[id]), 0);
    return Math.round((sum / ids.length) * 100);
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
  // ---- Coach: ask the behaviour engine how big today's session should be ----
  // Assembles every learnable item with its memory state, then lets Coach.planDay
  // (Fogg B=MAP) decide the dose and the message. Returns null if Coach not loaded.
  function coachItems() {
    const s = getSRS();
    const out = [];
    for (const d of ['vocab', 'grammar', 'kanji']) {
      (ITEMS[d] || []).forEach(it => out.push({ id: it.id, dim: d, state: s[it.id] || null }));
    }
    ITEMS.question.filter(q => q.dim === 'reading' || q.dim === 'listening')
      .forEach(q => out.push({ id: q.id, dim: q.dim, state: s[q.id] || null }));
    return out;
  }
  function coachPlan() {
    if (!root.Coach) return null;
    return root.Coach.planDay(coachItems(), {
      activityLog: activityLog(),
      momentum: getMomentum().value
    });
  }

  function buildMission() {
    const focus = weakestDim();
    const plan = coachPlan();                       // Coach decides today's dose + message
    const rescueMode = !!(plan && plan.rescueMode);
    const dose = plan ? plan.focusDose : 12;
    const reviewCap = rescueMode ? Math.max(3, Math.round(dose * 0.7)) : dose;

    // weakness attack: surface due reviews from the focus dimension first, capped to the dose
    const allDue = dueQuestions(99);
    const due = [...allDue.filter(q => q.dim === focus), ...allDue.filter(q => q.dim !== focus)].slice(0, reviewCap);

    // new chunk: scaled down on shaky days so a low-motivation session stays tiny
    const newBudget = rescueMode ? 1 : 3;
    const newVocab = unseen('vocab').slice(0, Math.min(2, newBudget));
    const newGrammar = unseen('grammar').slice(0, Math.max(0, newBudget - newVocab.length));
    const newKanji = (focus === 'kanji' && !rescueMode) ? unseen('kanji').slice(0, 2) : [];

    const story = pickStory();
    // recall: skewed toward the focus dimension
    const focusQs = shuffle(ITEMS.question.filter(q => q.dim === focus));
    const otherQs = shuffle(ITEMS.question.filter(q => q.dim !== focus));
    const recall = [...focusQs.slice(0, 3), ...otherQs.slice(0, 2)].slice(0, 5);
    const estMin = 5 + (newVocab.length + newGrammar.length + newKanji.length) * 2 + 8 + 3 + recall.length;
    return {
      focus, due, newVocab, newGrammar, newKanji, story, recall, estMin,
      coach: plan ? { headline: plan.headline, message: plan.message, rescueMode } : null,
      rescue: plan ? plan.rescue : []
    };
  }

  // ============================================================
  // LESSON PROGRESS — track 5 steps per MnN lesson
  // Steps: 'vocab' | 'grammar' | 'reading' | 'quiz' | 'write'
  // ============================================================
  const LESSON_STEPS = ['vocab','grammar','reading','quiz','write'];

  function getLessonByNum(n) {
    return PACKS.find(p => p.lessonNum === n) || null;
  }
  function getLessonProgress(n) {
    return DB.get('lp_' + n) || { steps: [] };
  }
  function markLessonStep(n, step) {
    const p = getLessonProgress(n);
    if (!p.steps.includes(step)) p.steps.push(step);
    if (LESSON_STEPS.every(s => p.steps.includes(s))) {
      p.completedAt = dateKey();
      seedLessonIntoDrills(n);
    }
    DB.set('lp_' + n, p);
    logActivity(1, 3);
    bumpMomentum(5);
  }
  function isLessonComplete(n) {
    const p = getLessonProgress(n);
    return LESSON_STEPS.every(s => p.steps.includes(s));
  }
  function lessonNums() {
    return PACKS.map(p => p.lessonNum).filter(Boolean).sort((a, b) => a - b);
  }
  function isLessonUnlocked(n) {
    const nums = lessonNums();
    if (!nums.length || n <= nums[0]) return true;        // first available lesson is always open
    const prev = nums.filter(x => x < n).pop();            // previous EXISTING lesson
    return prev == null ? true : isLessonComplete(prev);
  }

  // Which lesson a content item belongs to, and how hard that lesson is.
  function lessonOf(item) {
    if (!item) return null;
    return PACKS.find(p =>
      (item.lesson && p.lesson === item.lesson) ||
      (item.module && p.module === item.module) ||
      (item.lessonNum && p.lessonNum === item.lessonNum)) || null;
  }
  function difficultyOf(item) {
    if (item && item.difficulty) return item.difficulty;   // explicit per-item difficulty wins
    const p = lessonOf(item);
    return (p && p.difficulty) || 'medium';
  }

  // ============================================================
  // DRILL ENGINE — standalone SRS flashcard system
  // Separate from quiz SRS so drills can be both directions
  // Grades: 1=again 2=hard 3=good 4=easy
  // ============================================================
  const DRILL_DAILY_CAP = 50;

  function drillGet(cardId) {
    try { return JSON.parse(store.getItem('mnn_d_' + cardId)); } catch(e) { return null; }
  }
  function drillSet(cardId, data) {
    store.setItem('mnn_d_' + cardId, JSON.stringify(data));
  }
  function drillIsDue(cardId) {
    const r = drillGet(cardId);
    if (!r) return true; // new card
    return MEM().isDue(r);
  }
  function rateDrill(cardId, grade) {
    const next = MEM().review(drillGet(cardId), grade);   // 1 again·2 hard·3 good·4 easy
    next.lastReviewed = dateKey();
    drillSet(cardId, next);
    logActivity(1, 1); bumpMomentum(2);
  }

  function getDrillPool() {
    const pool = [];
    for (const pack of PACKS) {
      if (!pack.lessonNum || !isLessonComplete(pack.lessonNum)) continue;
      (pack.vocabulary  || []).forEach(v => {
        pool.push({ id:'jpen_'+v.id, type:'vocab-jpen', item:v, lesson:pack.lessonNum, pack });
        pool.push({ id:'enjp_'+v.id, type:'vocab-enjp', item:v, lesson:pack.lessonNum, pack });
      });
      (pack.grammar || []).forEach(g => {
        pool.push({ id:'gram_'+g.id, type:'grammar', item:g, lesson:pack.lessonNum, pack });
      });
      (pack.kanji   || []).forEach(k => {
        pool.push({ id:'kan_'+k.id, type:'kanji', item:k, lesson:pack.lessonNum, pack });
      });
    }
    return pool;
  }

  function seedLessonIntoDrills(n) {
    // Mark all cards for this lesson as "seeded" so they appear in the pool.
    // Actual SRS records are created lazily on first rating.
    DB.set('drill_seeded_'+n, true);
  }

  function getDrillDue(cap) {
    cap = cap || DRILL_DAILY_CAP;
    const M = MEM();
    const pool = getDrillPool();
    const dueCards = [], newCards = [];
    for (const card of pool) {
      const rec = drillGet(card.id);
      if (!rec) { newCards.push(card); continue; }
      if (M.isDue(rec)) dueCards.push(card);
    }
    // most-urgent (closest to being forgotten) first
    dueCards.sort((a, b) => M.urgency(drillGet(b.id)) - M.urgency(drillGet(a.id)));
    const result = dueCards.slice(0, cap);
    const remaining = Math.max(0, cap - result.length);
    result.push(...shuffle(newCards).slice(0, remaining));
    return result;
  }

  function getDrillDueCount() { return getDrillDue().length; }

  function getDrillStats() {
    const pool = getDrillPool();
    const M = MEM();
    let due = 0, total = pool.length, rSum = 0, ratedCount = 0;
    for (const card of pool) {
      const rec = drillGet(card.id);
      if (!rec) { due++; continue; }
      if (M.isDue(rec)) due++;
      if (rec.reps > 0) { rSum += M.currentR(rec); ratedCount++; }
    }
    return { due, total, retention: ratedCount ? Math.round((rSum / ratedCount) * 100) : null };
  }

  // Streak: consecutive days with any lesson step or drill card rated
  function getStreak() {
    const log = activityLog();
    const keys = Object.keys(log).sort().reverse();
    if (!keys.length) return 0;
    let streak = 0, cursor = new Date();
    for (const k of keys) {
      const kDate = new Date(k + 'T00:00:00');
      const diff = Math.round((new Date(dateKey()+'T00:00:00') - kDate) / 86400000);
      if (diff === streak) streak++;
      else break;
    }
    return streak;
  }

  // Previous lesson questions for interleaving in quiz step
  function getPrevLessonQuestions(lessonNum, n) {
    const qs = [];
    for (const pack of PACKS) {
      if (!pack.lessonNum || pack.lessonNum >= lessonNum || !isLessonComplete(pack.lessonNum)) continue;
      qs.push(...(pack.questions || []));
    }
    return shuffle(qs).slice(0, n || 2);
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
    weakestDim, buildMission, pickStory, coachPlan,
    // lesson system
    LESSON_STEPS, getLessonByNum, getLessonProgress, markLessonStep,
    isLessonComplete, isLessonUnlocked, lessonNums, lessonOf, difficultyOf,
    // drill engine
    getDrillPool, getDrillDue, getDrillDueCount, getDrillStats,
    rateDrill, drillGet,
    getPrevLessonQuestions, getStreak
  };
})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) module.exports = (typeof window !== 'undefined' ? window : globalThis).Core;
