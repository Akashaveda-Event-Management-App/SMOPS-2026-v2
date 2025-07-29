// Service Worker for SMOPS-2026
const CACHE_NAME = 'smops-2026-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/call-for-papers.html',
  '/submit-paper.html',
  '/css/styles.css',
  '/css/tailwind.css',
  '/js/main.js',
  '/js/topic-manager.js',
  '/js/scroll-animations.js',
  '/js/space-scene.js',
  '/js/three-background.js',
  '/js/theme-config.js',
  '/assets/images/favicon.svg',
  '/assets/images/smops-2026_final.png',
  '/assets/images/ISRO-logo.svg',
  '/assets/images/ASI2.png',
  '/manifest.json'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle offline form submissions here
  console.log('Background sync triggered');
}

// Push notification handling
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'New update from SMOPS-2026',
    icon: '/assets/images/favicon-192.png',
    badge: '/assets/images/favicon-96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore Conference',
        icon: '/assets/images/favicon-32x32.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/images/favicon-32x32.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('SMOPS-2026', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', function(event) {
  console.log('Notification click received.');

  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
