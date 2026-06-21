const CACHE_NAME = 'mahym-japanese-v3';

// The core files to save directly to the iPhone
const ASSETS = [
  '/',
  '/index.html',
  '/roadmap.html',
  '/admin.html',
  '/manifest.json'
];

// 1. Install & Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// 2. Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

// 3. The Magic: Stale-While-Revalidate for HTML
self.addEventListener('fetch', event => {
  // Ignore API calls (we handle Upstash caching in index.html)
  if (event.request.url.includes('/api/')) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Fetch fresh data in the background silently
      const fetchPromise = fetch(event.request).then(networkResponse => {
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
        return networkResponse;
      }).catch(() => {}); // Fail silently if offline

      // RETURN INSTANTLY if we have it, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
