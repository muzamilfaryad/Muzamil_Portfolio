self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification!',
    icon: '/logo.png',
    badge: '/logo.png',
  };
  event.waitUntil(
    self.registration.showNotification('Muzamil Portfolio', options)
  );
});