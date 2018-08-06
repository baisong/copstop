var CACHE_NAME = 'copstop-1';
var urlsToCache = [
  '/',
  '/css/copwatch.css',
  '/js/copwatch.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
