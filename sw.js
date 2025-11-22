// sw.js
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Cache istekleri (opsiyonel)
});
