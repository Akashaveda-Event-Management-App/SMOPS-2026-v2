// Service Worker for SMOPS-2026
const CACHE_NAME = "smops-2026-v" + Date.now(); // Dynamic cache name for cache busting
const STATIC_CACHE = "smops-static-v1.0.0";
const urlsToCache = [
  "/css/styles.css",
  "/css/tailwind.css",
  "/js/main.js",
  "/js/topic-manager.js",
  "/js/scroll-animations.js",
  "/js/space-scene.js",
  "/js/three-background.js",
  "/js/theme-config.js",
  "/assets/images/favicon.svg",
  "/assets/images/smops-2026_final.png",
  "/assets/images/ISRO-logo.svg",
  "/assets/images/ASI2.png",
  "/manifest.json",
];

// HTML files that should always be fetched fresh
const htmlFiles = [
  "/",
  "/index.html",
  "/call-for-papers.html",
  "/submit-paper.html",
];

// Install event
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Install event
self.addEventListener("install", function (event) {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Fetch event with network-first strategy for HTML files
self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  // Check if it's an HTML file or root path
  const isHtmlFile = htmlFiles.some(
    (path) =>
      requestUrl.pathname === path ||
      requestUrl.pathname.endsWith(".html") ||
      requestUrl.pathname === "/"
  );

  if (isHtmlFile) {
    // Network-first strategy for HTML files - always try to get fresh content
    event.respondWith(
      fetch(event.request)
        .then(function (response) {
          // Clone the response before using it
          const responseClone = response.clone();

          // Store in cache for offline access only
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(function () {
          // If network fails, serve from cache
          return caches.match(event.request);
        })
    );
  } else {
    // Cache-first strategy for static assets (CSS, JS, images)
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(function (response) {
          const responseClone = response.clone();

          caches.open(STATIC_CACHE).then(function (cache) {
            cache.put(event.request, responseClone);
          });

          return response;
        });
      })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener("activate", function (event) {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            // Delete old caches
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
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
