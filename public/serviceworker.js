var staticCacheName = "pwa-v44";
//total2
var filesToCache = [
    '/',
    '/css/app.css',
    // '/pages/offline.html',
    '/css/bundle.css?version=18',
    '/js/app.js?version=18',
    '/js/vendor.bundle.js',
    '/js/app.bundle.js',
    '/images/7stones/limoo-teb/limoo-teb4.jpg',
    '/images/7stones/jaban-project-main.jpg',
    '/images/7stones/savil-project.jpg',
    '/images/7stones/niavaran-project.jpg',
    '/images/7stones/yas2-project.jpg',
    '/images/icons/icon-72x72.png',
    '/images/icons/icon-96x96.png',
    '/images/icons/icon-128x128.png',
    '/images/icons/icon-144x144.png',
    '/images/icons/icon-152x152.png',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-384x384.png',
    '/images/icons/icon-512x512.png',
];

// Cache on install2
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    // .filter(cacheName => (cacheName.startsWith("pwa-")))
                    // .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
//destroy234
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                // return caches.match('/pages/offline.html');
            })
    )
});
