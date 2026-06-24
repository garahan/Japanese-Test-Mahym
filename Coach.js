/* ============================================================================
   COACH — turns memory math into a daily decision and a human message.
   ----------------------------------------------------------------------------
   The hard problem with a procrastinator isn't scheduling — the engine already
   knows what's due. It's getting her to *start*, and not quit after a missed
   day. So the coach is built on the Fogg Behaviour Model:

        Behaviour happens when  Motivation × Ability × Prompt  all line up.
        B = MAP

   Motivation swings day to day and we can't control it, so the coach leans on
   the two levers we CAN move:
     • Ability — make the ask small. On low-adherence days it prescribes the
       MINIMUM viable session (the 60-second rescue), because a tiny action she
       actually does beats a perfect plan she avoids.
     • Prompt — a well-timed, well-worded nudge (delivered by /api/remind).

   It also refuses to pile on. When lots is overdue, dumping 200 reviews on her
   triggers avoidance; the coach caps the daily dose at a sustainable level and
   feeds her the highest-URGENCY items first, so the limited time she gives is
   spent on the memories closest to being lost.

   Pure + dependency-free. Needs the Memory engine. Returns a plan + a summary
   small enough to sync to the server for a smart nudge.
   ============================================================================ */
(function (root) {
  'use strict';

  const Memory = (typeof require !== 'undefined') ? require('./memory-engine.js')
                 : (root && root.Memory);

  const CFG = {
    WINDOW: 14,          // days over which we measure adherence
    GAP_RETURN: 2,       // missing this many days → "welcome back", shrink the ask
    RESCUE_DOSE: 3,      // the 60-second minimum session size
    DOSE_BY_ADHERENCE: [ // sustainable daily ceiling as habit strengthens
      { upTo: 0.30, dose: 5  },   // shaky habit → keep it tiny
      { upTo: 0.60, dose: 10 },
      { upTo: 0.85, dose: 16 },
      { upTo: 1.01, dose: 22 }    // solid habit → can handle a real session
    ],
    NEW_RATIO: 0.30      // at most this fraction of a session is brand-new items
  };

  const dayKey = (d) => {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };
  const daysBetween = (a, b) => Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);

  // adherence = fraction of the last WINDOW days that were active (any study).
  function adherence(activityLog, today) {
    today = today || dayKey();
    let active = 0;
    for (let i = 0; i < CFG.WINDOW; i++) {
      const d = new Date(today + 'T00:00:00'); d.setDate(d.getDate() - i);
      if (activityLog && activityLog[dayKey(d)]) active++;
    }
    return active / CFG.WINDOW;
  }
  function lastActiveGap(activityLog, today) {
    today = today || dayKey();
    const days = Object.keys(activityLog || {}).filter(k => k <= today).sort();
    if (!days.length) return null;                 // never studied
    const last = days[days.length - 1];
    return last === today ? 0 : daysBetween(last, today);
  }
  function doseFor(a) {
    for (const row of CFG.DOSE_BY_ADHERENCE) if (a <= row.upTo) return row.dose;
    return CFG.DOSE_BY_ADHERENCE[CFG.DOSE_BY_ADHERENCE.length - 1].dose;
  }

  /* --------------------------------------------------------------------------
     planDay(items, ctx)
       items : [{ id, dim, state, isNew }]   state = Memory item state (or null)
       ctx   : { activityLog, momentum, now, name }
     returns a full daily plan + a compact `summary` for the server nudge.
  --------------------------------------------------------------------------- */
  function planDay(items, ctx) {
    ctx = ctx || {};
    const now = ctx.now || Date.now();
    const today = dayKey(new Date(now));
    const name = ctx.name || 'Mahym';

    const seen = items.filter(it => it.state && it.state.attempts);
    const due  = seen.filter(it => Memory.isDue(it.state, now));
    const risk = seen.filter(it => Memory.atRisk(it.state, now));
    const fresh = items.filter(it => !it.state || !it.state.attempts);

    // stage census (for progress display + coach reporting)
    const stages = { new: 0, learning: 0, young: 0, consolidating: 0, mature: 0, mastered: 0 };
    items.forEach(it => { stages[Memory.stageOf(it.state)]++; });

    const a = adherence(ctx.activityLog, today);
    const gap = lastActiveGap(ctx.activityLog, today);
    const returning = gap !== null && gap >= CFG.GAP_RETURN;

    // ---- how much to ask for today (Fogg: protect Ability) ----
    let dose = doseFor(a);
    if (returning) dose = Math.min(dose, CFG.RESCUE_DOSE * 2); // ease back in after a gap
    const rescueMode = a < 0.30 || returning;

    // ---- choose the items: most-urgent due first, then top up with new ----
    const byUrgency = due.slice().sort((x, y) => Memory.urgency(y.state, now) - Memory.urgency(x.state, now));
    const reviewPick = byUrgency.slice(0, dose);
    const room = Math.max(0, dose - reviewPick.length);
    const newAllowance = Math.min(room, Math.ceil(dose * CFG.NEW_RATIO));
    const newPick = fresh.slice(0, newAllowance);

    // the 60-second rescue is always the 3 highest-urgency items (or new if none due)
    const rescue = (byUrgency.length ? byUrgency : fresh).slice(0, CFG.RESCUE_DOSE).map(it => it.id);

    const coach = chooseMessage({
      name, returning, gap, rescueMode,
      due: due.length, risk: risk.length, fresh: fresh.length,
      adherence: a, momentum: ctx.momentum || 0, stages
    });

    return {
      date: today,
      focusDose: dose,
      rescueMode,
      review: reviewPick.map(it => it.id),
      new: newPick.map(it => it.id),
      rescue,
      stages,
      headline: coach.headline,
      message: coach.message,
      principle: coach.principle,
      // compact blob to POST to the server so /api/remind can be specific
      summary: {
        date: today, name,
        due: due.length, atRisk: risk.length,
        adherence: +a.toFixed(2), gap, momentum: ctx.momentum || 0,
        recommended: rescueMode ? CFG.RESCUE_DOSE : dose,
        stages, headline: coach.headline
      }
    };
  }

  /* ---- message selection: a small state machine, each tagged with the
          behaviour-science principle it applies (so the reasoning is legible) -- */
  function chooseMessage(s) {
    const name = s.name;
    if (s.returning) {
      return {
        headline: 'Welcome back',
        message: `No guilt — ${s.gap} days off is nothing. Just do the 3-item rescue to wake the memory up. That's a full win today.`,
        principle: 'Fogg: shrink Ability after a lapse; avoid all-or-nothing abandonment'
      };
    }
    if (s.risk >= 8) {
      return {
        headline: `${s.risk} memories slipping`,
        message: `${s.risk} things are fading toward "forgotten." 3 minutes now catches the ones closest to the edge — that's where reviews pay back most.`,
        principle: 'Loss aversion + spacing effect: rescue items at low retrievability for max stability gain'
      };
    }
    if (s.due === 0 && s.fresh > 0) {
      return {
        headline: 'All caught up ✅',
        message: `Nothing due — memory's healthy. If you've got energy, meet ${Math.min(s.fresh, 3)} new items. If not, today's already a win.`,
        principle: 'Reinforce success; keep new-item load optional to protect motivation'
      };
    }
    if (s.due === 0) {
      return {
        headline: 'All caught up ✅',
        message: `Every memory is above target right now. Rest is part of the schedule — see you tomorrow.`,
        principle: 'Spacing effect: reviewing too early is wasted effort'
      };
    }
    if (s.adherence >= 0.6 && s.momentum >= 30) {
      return {
        headline: 'On a roll 🔥',
        message: `${s.due} due and momentum at ${s.momentum}. Knock out today's set and keep the curve climbing.`,
        principle: 'Reinforce an established routine while motivation is high'
      };
    }
    return {
      headline: `${s.due} ready to review`,
      message: `${s.due} items are at their best review moment today (~${Math.min(s.due, 10)} min). Catching them now is the cheapest they'll ever be.`,
      principle: 'Spacing effect: review at the retrievability edge for efficient, durable memory'
    };
  }

  const Coach = { CFG, adherence, lastActiveGap, doseFor, planDay, chooseMessage, dayKey };
  if (typeof module !== 'undefined' && module.exports) module.exports = Coach;
  if (root) root.Coach = Coach;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
