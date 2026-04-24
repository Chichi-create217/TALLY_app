const CACHE_NAME = "tally-cache-v1";

const urlsToCache = [
  "/TALLY_app/",
  "/TALLY_app/index.html",
  "/TALLY_app/style.css",
  "/TALLY_app/script.js"
];

// Install: save files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch: serve from cache if offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
