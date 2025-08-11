// Service Worker for SMOPS-2026 with Force Update
const CACHE_NAME = `smops-2026-v${Date.now()}`; // Dynamic cache name with timestamp
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

// Install event - skip waiting to force immediate update
self.addEventListener('install', function(event) {
  console.log('Service Worker: Installing with cache name:', CACHE_NAME);
  self.skipWaiting(); // Force immediate activation
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('Service Worker: Cache failed', error);
      })
  );
});

// Fetch event - Network first strategy for better cache busting
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Clone the response
        const responseClone = response.clone();
        
        // Cache the response
        caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, responseClone);
          });
        
        return response;
      })
      .catch(function() {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activating with cache name:', CACHE_NAME);
  self.clients.claim(); // Take control of all clients immediately
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
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
