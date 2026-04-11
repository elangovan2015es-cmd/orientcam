/*
  OrientCam — Service Worker
  Version : 1.9
  Date    : 10-Apr-2026
  Cache   : orientcam-v1.9-cache

  AUTO-UPDATE LOGIC:
  - On install: skipWaiting() immediately — no waiting
  - On activate: delete all old caches instantly
  - On fetch: network first for index.html (always fresh)
              cache first for everything else
  - Posts message to client when new SW activates
*/

const CACHE = 'orientcam-v1.9-cache';
const NETWORK_FIRST = ['index.html', './index.html', '/'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['./index.html', './manifest.json']))
  );
  // Skip waiting immediately — don't wait for old SW to die
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => {
        console.log('[OrientCam SW] Deleting old cache:', k);
        return caches.delete(k);
      }))
    ).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    }).then(() => {
      // Tell all open tabs that a new version is active
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({ type: 'SW_UPDATED', version: '1.9' }));
      });
    })
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isIndex = NETWORK_FIRST.some(p => url.pathname.endsWith(p) || url.pathname === '/');

  if (isIndex) {
    // Network first for main page — always get fresh version
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache first for assets
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});

// Listen for SKIP_WAITING from app when user taps update banner
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
