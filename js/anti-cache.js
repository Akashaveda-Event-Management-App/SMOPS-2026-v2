// Anti-Cache Script for SMOPS-2026
// This script forces browsers to fetch fresh content

(function() {
    'use strict';
    
    const CACHE_BUSTER_KEY = 'smops_cache_version';
    const CURRENT_VERSION = Date.now().toString();
    
    // Check if we need to clear cache
    const lastVersion = localStorage.getItem(CACHE_BUSTER_KEY);
    
    if (lastVersion !== CURRENT_VERSION) {
        console.log('🚀 SMOPS-2026: Clearing cache for fresh content');
        
        // Clear localStorage
        localStorage.clear();
        
        // Clear sessionStorage
        sessionStorage.clear();
        
        // Clear service worker cache
        if ('serviceWorker' in navigator && 'caches' in window) {
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        console.log('Deleting cache:', cacheName);
                        return caches.delete(cacheName);
                    })
                );
            }).then(function() {
                console.log('✅ All caches cleared');
                // Update service worker
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                        registration.update();
                    }
                });
            });
        }
        
        // Store new version
        localStorage.setItem(CACHE_BUSTER_KEY, CURRENT_VERSION);
        
        // Force reload if this is not the first visit
        if (lastVersion !== null) {
            console.log('🔄 Reloading page with fresh content');
            setTimeout(() => {
                window.location.reload(true);
            }, 500);
        }
    }
    
    // Add cache busting to all dynamic script and style loads
    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function(child) {
        if (child.tagName === 'SCRIPT' && child.src) {
            const url = new URL(child.src);
            url.searchParams.set('v', CURRENT_VERSION);
            child.src = url.toString();
        } else if (child.tagName === 'LINK' && child.href && child.rel === 'stylesheet') {
            const url = new URL(child.href);
            url.searchParams.set('v', CURRENT_VERSION);
            child.href = url.toString();
        }
        return originalAppendChild.call(this, child);
    };
    
    console.log('✅ SMOPS-2026: Anti-cache system initialized');
})();
