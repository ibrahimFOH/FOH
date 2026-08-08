/* Stagepulse – güncel içerik öncelikli offline cache */
const CACHE = 'stagepulse-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/i18n.js',
  '/favicon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() =>
        caches.match('/index.html').then(r => r || caches.match('/'))
      )
    );
    return;
  }

  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches
            .open(CACHE)
            .then(cache => cache.put(e.request, clone))
            .catch(err => console.warn('Cache update failed:', err));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(
          r =>
            r ||
            caches.match('/').then(
              homeCache =>
                homeCache ||
                new Response('Offline', {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                })
            )
        )
      )
  );
});
