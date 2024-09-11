const CACHE_NAME = 'login-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/logo.png',
  '/manifest.json',
  '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
