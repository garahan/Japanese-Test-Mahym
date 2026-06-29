// sw.js — offline-first service worker.
// Strategy: stale-while-revalidate for app shell (instant load, silent refresh).
// API calls (/api/*) always go to the network and are never cached.
// Google Fonts are cached separately (cache-first) so the app renders offline.

const CACHE = 'mahym-jp-v15';
const FONT_CACHE = 'mahym-fonts-v1';   // stable across app updates so fonts persist

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
      Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Google Fonts (CSS + font files) — cache-first so the UI keeps its fonts offline.
  if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONT_CACHE).then(async (cache) => {
        const cached = await cache.match(e.request);
        if (cached) return cached;
        try {
          const res = await fetch(e.request);
          // status 200 (CSS, CORS) or opaque (font files, no-cors) are both cacheable
          if (res && (res.status === 200 || res.type === 'opaque')) cache.put(e.request, res.clone());
          return res;
        } catch (err) {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  // Never cache API or other cross-origin (TTS voices, etc.) — go straight to network.
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
      if (cached) { network; return cached; }
      const fresh = await network;
      if (fresh) return fresh;
      if (e.request.mode === 'navigate') {
        return (await cache.match('/index.html')) || (await cache.match('/'));
      }
      return Response.error();
    })
  );
});
