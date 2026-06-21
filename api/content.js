const UPSTASH_URL = process.env.KV_REST_API_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

async function redis(command, ...args) {
  const body = JSON.stringify([command, ...args]);
  const res = await fetch(`${UPSTASH_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body,
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

async function redisGet(key) {
  const val = await redis('GET', key);
  if (!val) return null;
  return typeof val === 'string' ? JSON.parse(val) : val;
}

async function redisSet(key, value) {
  await redis('SET', key, JSON.stringify(value));
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.status(500).json({ ok: false, error: 'Upstash env vars not configured' });
  }

  try {
    // GET — read data (Publicly accessible for the student dashboard)
    if (req.method === 'GET') {
      const type = req.query.type || 'questions';
      const validTypes = ['questions', 'flashcards', 'lessons'];
      if (!validTypes.includes(type)) {
        return res.status(400).json({ ok: false, error: 'Invalid type' });
      }
      const data = await redisGet(type) || [];
      res.setHeader('Cache-Control', 'public, max-age=30, stale-while-revalidate=300');
      return res.status(200).json({ ok: true, data });
    }

    // POST — write data (Strictly protected by Admin Password)
    if (req.method === 'POST') {
      const providedPassword = req.headers['x-admin-password'];
      
      // Security Check
      if (!ADMIN_PASSWORD || providedPassword !== ADMIN_PASSWORD) {
        return res.status(401).json({ ok: false, error: 'Unauthorized: Invalid or missing admin password.' });
      }

      const { type, action, item } = req.body;
      const validTypes = ['questions', 'flashcards', 'lessons'];
      if (!validTypes.includes(type)) {
        return res.status(400).json({ ok: false, error: 'Invalid type' });
      }

      let items = await redisGet(type) || [];

      if (action === 'add') {
        if (!item.id) {
          const prefix = type === 'questions' ? 'q' : type === 'flashcards' ? 'f' : 'l';
          item.id = prefix + Date.now();
        }
        items.push(item);
      } else if (action === 'update') {
        const idx = items.findIndex(i => i.id === item.id);
        if (idx === -1) return res.status(404).json({ ok: false, error: 'Item not found' });
        items[idx] = item;
      } else if (action === 'delete') {
        items = items.filter(i => i.id !== item.id);
      } else if (action === 'bulk_add') {
        const newItems = req.body.items || [];
        for (const ni of newItems) {
          if (!ni.id) {
            const prefix = type === 'questions' ? 'q' : type === 'flashcards' ? 'f' : 'l';
            ni.id = prefix + Date.now() + Math.random().toString(36).substr(2, 5);
          }
          if (!items.find(i => i.id === ni.id)) {
            items.push(ni);
          }
        }
      } else {
        return res.status(400).json({ ok: false, error: 'Invalid action' });
      }

      await redisSet(type, items);
      return res.status(200).json({ ok: true, count: items.length });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (err) {
    console.error('Content API error:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
