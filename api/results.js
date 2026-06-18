export default async function handler(req, res) {
  // Allow CORS for local testing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, error: 'Telegram env vars not set in Vercel' });
  }

  const {
    name, pct, correct, total, timeStr, dateStr,
    modeLabel, grade,
    catLines, mistakeLines, slowLines, weakLines,
    streakCount, mistakeCount, slowCount,
  } = req.body;

  const gradeEmoji = pct >= 90 ? '🏆' : pct >= 80 ? '🌟' : pct >= 70 ? '👍' : pct >= 60 ? '📖' : '💪';
  const streakEmoji = streakCount >= 30 ? '🔥🔥🔥' : streakCount >= 7 ? '🔥🔥' : streakCount >= 1 ? '🔥' : '';

  const message = `
${gradeEmoji} *日本語テスト結果*
👤 ${name}　📅 ${dateStr}
${streakEmoji} Streak: ${streakCount} day${streakCount !== 1 ? 's' : ''}

━━━━━━━━━━━━━━━━━
📊 *スコア — Score*
Total: *${correct}/${total} = ${pct}%* (Grade ${grade})
Mode: ${modeLabel} · Time: ${timeStr}

${catLines}

━━━━━━━━━━━━━━━━━
${mistakeCount > 0
  ? `❌ *間違え — Mistakes (${mistakeCount})*\n${mistakeLines}`
  : '✅ *間違えなし！ Perfect score!*'}

━━━━━━━━━━━━━━━━━
${slowCount > 0
  ? `🐢 *時間がかかった (>30s) — ${slowCount} questions*\n${slowLines}`
  : '⚡ *全部速い！ All answered quickly!*'}

━━━━━━━━━━━━━━━━━
📉 *弱いポイント — Weak areas (all-time)*
${weakLines}

━━━━━━━━━━━━━━━━━
${pct >= 85
  ? '🎊 Excellent! Strong performance — push to the next lesson!'
  : pct >= 70
  ? '📖 Good work. Review the mistakes above before the next test.'
  : '📝 Keep practicing! Focus on weak grammar points.'}

_Wrong answers scheduled for review tomorrow via spaced repetition._
`.trim();

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    const data = await tgRes.json();
    if (data.ok) {
      return res.status(200).json({ ok: true });
    } else {
      console.error('Telegram error:', data);
      return res.status(500).json({ ok: false, error: data.description || 'Telegram API error' });
    }
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
