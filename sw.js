// sw.js — offline-first service worker.
// Strategy: stale-while-revalidate for app shell (instant load, silent refresh).
// API calls (/api/*) always go to the network and are never cached.

const CACHE = 'mahym-jp-v5';

const ASSETS = [
  '/',
  '/index.html',
  '/roadmap.html',
  '/admin.html',
  '/core.js',
  '/memory-engine.js',
  '/Coach.js',
  '/seed-data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  '/favicon.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Never cache API or cross-origin (TTS voices, etc.) — go straight to network.
  if (url.pathname.startsWith('/api/') || url.origin !== location.origin) {
    return; // default browser handling
  }
  if (e.request.method !== 'GET') return;

  // Stale-while-revalidate: serve cache instantly, update in the background.
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      const network = fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => null);
      // Cache hit → serve it now, let the network update run in the background.
      if (cached) { network; return cached; }
      const fresh = await network;
      if (fresh) return fresh;
      // Offline page navigation with nothing cached → fall back to the app shell.
      if (e.request.mode === 'navigate') {
        return (await cache.match('/index.html')) || (await cache.match('/'));
      }
      return Response.error();
    })
  );
});
