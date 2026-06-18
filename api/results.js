export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, error: 'Telegram credentials not configured' });
  }

  const {
    name, pct, correct, total, timeStr, dateStr,
    kanjiScore, vocabScore,
    mistakeList, slowList,
    mistakeCount, slowCount
  } = req.body;

  const grade = pct >= 90 ? 'S' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'D';
  const emoji = pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '💪';

  const message = `
${emoji} *日本語テスト結果 — ${name}*
📅 ${dateStr}

━━━━━━━━━━━━━━
📊 *スコア (Score)*
Total: *${correct}/${total} (${pct}%)* — Grade ${grade}
漢字:  ${kanjiScore}
語彙:  ${vocabScore}
⏱ Time: ${timeStr}

━━━━━━━━━━━━━━
${mistakeCount > 0 ? `❌ *間違え (Mistakes) — ${mistakeCount} questions*\n${mistakeList}` : '✅ *間違えなし！No mistakes!*'}

━━━━━━━━━━━━━━
${slowCount > 0 ? `🐢 *時間がかかった問題 — ${slowCount} slow questions*\n${slowList}` : '⚡ *All answers fast!*'}

━━━━━━━━━━━━━━
${pct >= 80
  ? '🎊 Excellent work! Ready for next lessons.'
  : pct >= 60
  ? '📖 Good effort. Review the mistakes above.'
  : '📝 Keep practicing! Focus on the mistakes above.'}
`.trim();

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    const tgData = await tgRes.json();

    if (tgData.ok) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(500).json({ ok: false, error: tgData.description || 'Telegram error' });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
