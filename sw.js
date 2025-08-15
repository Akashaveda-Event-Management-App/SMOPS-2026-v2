// Service Worker for SMOPS-2026 (stable versioned caches)
const APP_VERSION = "1.0.2";
const RUNTIME_CACHE = `smops-runtime-v${APP_VERSION}`;
const STATIC_CACHE = `smops-static-v${APP_VERSION}`;
const urlsToCache = [
  "/css/styles.css",
  "/js/main.js",
  "/js/topic-manager.js",
  "/js/scroll-animations.js",
  "/js/space-scene.js",
  "/js/theme-config.js",
  "/assets/images/favicon.svg",
  "/assets/images/smops-2026_final.webp",
  "/assets/images/smops-2026_final.png",
  "/assets/images/ISRO-logo.svg",
  "/assets/images/ASI2.png",
  "/assets/images/inspacelogo.png",
  "/manifest.json",
];

// HTML files that should always be fetched fresh
const htmlFiles = [
  "/",
  "/index.html",
  "/call-for-papers.html",
  "/submit-paper.html",
];

// Install event (cache static assets)
self.addEventListener("install", (event) => {
  console.log("[SW] Installing v", APP_VERSION);
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      const failures = [];
      await Promise.all(
        urlsToCache.map(async (url) => {
          try {
            const resp = await fetch(url, { cache: "no-cache" });
            if (!resp.ok) throw new Error("HTTP " + resp.status);
            await cache.put(url, resp.clone());
          } catch (e) {
            failures.push({ url, error: e.message });
          }
        })
      );
      if (failures.length) {
        console.warn(
          "[SW] Some precache assets failed (continuing):",
          failures
        );
      } else {
        console.log("[SW] All precache assets stored.");
      }
    })()
  );
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
        .then((response) => {
          const clone = response.clone();
          caches
            .open(RUNTIME_CACHE)
            .then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first strategy for static assets (CSS, JS, images)
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(function (response) {
          const clone = response.clone();
          caches
            .open(STATIC_CACHE)
            .then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating v", APP_VERSION);
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (![STATIC_CACHE, RUNTIME_CACHE].includes(key)) {
              console.log("[SW] Deleting old cache", key);
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Background sync for offline form submissions
self.addEventListener("sync", function (event) {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle offline form submissions here
  console.log("Background sync triggered");
}

// Push notification handling
self.addEventListener("push", function (event) {
  const options = {
    body: event.data ? event.data.text() : "New update from SMOPS-2026",
    icon: "/assets/images/favicon-192.png",
    badge: "/assets/images/favicon-96.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Explore Conference",
        icon: "/assets/images/favicon-32x32.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/assets/images/favicon-32x32.png",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("SMOPS-2026", options));
});

// Notification click handling
self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");

  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"));
  }
});
