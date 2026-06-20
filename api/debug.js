export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const UPSTASH_URL = process.env.KV_REST_API_URL;
  const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN;

  const debug = {
    timestamp: new Date().toISOString(),
    upstash_url_set: !!UPSTASH_URL,
    upstash_token_set: !!UPSTASH_TOKEN,
    env_vars_ready: !!UPSTASH_URL && !!UPSTASH_TOKEN,
    message: ''
  };

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    debug.message = '❌ Environment variables not configured on Vercel';
    return res.status(500).json(debug);
  }

  try {
    // Test Redis connection
    const testRes = await fetch(`${UPSTASH_URL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(['GET', 'questions']),
    });

    const testData = await testRes.json();

    debug.redis_status = testData.error ? '❌ Connection failed' : '✅ Connected';
    debug.redis_error = testData.error || null;
    debug.questions_count = testData.result ? (Array.isArray(JSON.parse(testData.result)) ? JSON.parse(testData.result).length : 0) : 0;

    if (testData.error) {
      debug.message = `Redis error: ${testData.error}`;
    } else if (debug.questions_count === 0) {
      debug.message = '⚠️ Questions exist but is empty. Run /api/seed?secret=seed_nihongo_2024';
    } else {
      debug.message = `✅ All systems GO! Found ${debug.questions_count} questions in Redis`;
    }

    return res.status(200).json(debug);
  } catch (err) {
    debug.message = `🔴 Error: ${err.message}`;
    return res.status(500).json(debug);
  }
}
