// F1 Manager Pro - Service Worker
const CACHE_NAME = 'f1-manager-pro-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './game.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('F1 Manager Pro: Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('F1 Manager Pro: All resources cached');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('F1 Manager Pro: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('F1 Manager Pro: Service worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone response for caching
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Background sync for game saves (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync-save') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Future implementation for syncing game saves
  return Promise.resolve();
}
