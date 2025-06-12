// Main JavaScript file for SMOPS 2025 website

// Mobile menu functionality
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const body = document.body;
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        body.style.overflow = 'hidden';
    } else {
        menu.classList.add('hidden');
        body.style.overflow = '';
    }
}

// Submenu toggle for mobile
function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    event.stopPropagation();
    
    const submenu = document.getElementById(submenuId);
    const toggle = event.currentTarget.querySelector('.submenu-toggle');
    
    if (submenu.classList.contains('active')) {
        submenu.classList.remove('active');
        toggle.classList.remove('active');
    } else {
        // Close other submenus
        document.querySelectorAll('.mobile-submenu.active').forEach(menu => {
            menu.classList.remove('active');
        });
        document.querySelectorAll('.submenu-toggle.active').forEach(toggle => {
            toggle.classList.remove('active');
        });
        
        submenu.classList.add('active');
        toggle.classList.add('active');
    }
}

// Accordion functionality
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Navbar scroll behavior
function initNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('shadow-md');
            navbar.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.classList.add('shadow-md');
        }
        
        lastScroll = currentScroll;
    });
}

// Countdown timer
function initCountdown() {
    function updateCountdown() {
        const conferenceDate = new Date('2025-05-28T00:00:00+05:30'); // IST timezone
        const now = new Date();
        const diff = conferenceDate - now;

        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = `
                <div class="flex items-center space-x-4">
                    <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-glow"></span>
                    <span class="text-xl font-bold">Conference has started!</span>
                </div>`;
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update individual elements if they exist
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days.toString().padStart(3, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.glassmorphic-bg, .cosmic-hover');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fade-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Video management
function initVideoManagement() {
    const videos = document.querySelectorAll('video');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            
            if (entry.isIntersecting) {
                if (video.paused) {
                    video.play().catch(e => {
                        console.log('Video autoplay failed:', e);
                        // Fallback: show poster image
                        video.style.display = 'none';
                        const fallback = video.nextElementSibling;
                        if (fallback && fallback.tagName === 'IMG') {
                            fallback.style.display = 'block';
                        }
                    });
                }
            } else {
                video.pause();
            }
        });
    }, { 
        threshold: 0.25,
        rootMargin: '50px'
    });

    videos.forEach(video => {
        videoObserver.observe(video);
        
        // Optimize video loading
        video.addEventListener('loadstart', () => {
            video.style.opacity = '0';
        });
        
        video.addEventListener('canplay', () => {
            video.style.opacity = '1';
        });
        
        // Handle video errors
        video.addEventListener('error', (e) => {
            console.log('Video error:', e);
            video.style.display = 'none';
            const fallback = video.nextElementSibling;
            if (fallback && fallback.tagName === 'IMG') {
                fallback.style.display = 'block';
            }
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        imageObserver.observe(img);
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(console.log);
            getFID(console.log);
            getFCP(console.log);
            getLCP(console.log);
            getTTFB(console.log);
        });
    }
    
    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    });
}

// Error handling
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // Could send to analytics service
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // Could send to analytics service
    });
}

// Accessibility improvements
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#overview';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for dropdowns
    document.querySelectorAll('.group').forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('div[class*="absolute"]');
        
        if (button && menu) {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    menu.classList.toggle('opacity-0');
                    menu.classList.toggle('invisible');
                }
            });
        }
    });
    
    // Focus management for mobile menu
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }
}

// Space theme animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for space backgrounds
    document.addEventListener('mousemove', (e) => {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Smooth section transitions
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.float-element');
    floatingElements.forEach((element, index) => {
        element.style.animation = `float ${6 + index % 3}s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.glassmorphic-bg');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Star field parallax effect
    const starField = document.querySelector('.star-bg');
    if (starField) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            starField.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

    // Nebula glow effect on scroll
    const nebulaElements = document.querySelectorAll('.nebula-glow');
    window.addEventListener('scroll', () => {
        nebulaElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            
            if (rect.top <= viewHeight && rect.bottom >= 0) {
                const scrollPercent = (viewHeight - rect.top) / viewHeight;
                element.style.opacity = Math.min(scrollPercent, 1);
            }
        });
    });
});

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initNavbarScroll();
    initCountdown();
    initScrollAnimations();
    initVideoManagement();
    initLazyLoading();
    initAccessibility();
    initErrorHandling();
    
    // Initialize performance monitoring in production
    if (window.location.hostname !== 'localhost') {
        initPerformanceMonitoring();
    }
    
    // Add loading complete class
    document.body.classList.add('loaded');
    
    console.log('SMOPS 2025 website initialized successfully');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    const videos = document.querySelectorAll('video');
    
    if (document.hidden) {
        videos.forEach(video => video.pause());
    } else {
        videos.forEach(video => {
            if (video.getBoundingClientRect().top < window.innerHeight) {
                video.play().catch(e => console.log('Video play failed:', e));
            }
        });
    }
});

// Export functions for external use
window.SMOPS = {
    toggleMobileMenu,
    toggleSubmenu,
    toggleAccordion
};