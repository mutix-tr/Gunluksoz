// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.registration.showNotification('SözSanatı', {
    body: 'Günlük söz bildirimleri aktif! Her gün 10:00 ve 14:30’da motivasyon seni bekliyor.',
    icon: '/icon-192.png'
  });
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Bugünün sözü için uygulamayı aç!',
    icon: '/icon-192.png',
    badge: '/icon-96.png',
    vibrate: [100, 50, 100],
    actions: [
      { action: 'open', title: 'Aç' },
      { action: 'close', title: 'Kapat' }
    ]
  };
  event.waitUntil(self.registration.showNotification('Günün Sözü 💬', options));
});

self.addEventListener('notificationclick', (event) => {
  if (event.action === 'open') {
    event.waitUntil(clients.openWindow('/'));
  }
  event.notification.close();
});
