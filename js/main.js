// Main JavaScript file for SMOPS 2026 website

// Import configuration and modules (if using ES6 modules)
// import themeConfig from './theme-config.js';
// import { initScrollAnimations, initNavbarScroll, initParallaxEffects } from './scroll-animations.js';
// import { initSpaceScene } from './space-scene.js';

// Enhanced mobile menu toggle with better animations
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const content = menu.querySelector(".mobile-menu-content");

  if (menu.classList.contains("hidden")) {
    // Show the menu
    menu.classList.remove("hidden");
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      content.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
    });
  } else {
    // Animate and then hide
    content.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";

    setTimeout(() => {
      menu.classList.add("hidden");
      content.style.transition = "";
    }, 400);
  }
}

// Submenu toggle for mobile
function toggleSubmenu(event, submenuId) {
  event.preventDefault();
  event.stopPropagation();

  const submenu = document.getElementById(submenuId);
  const toggle = event.currentTarget.querySelector(".submenu-toggle");

  if (submenu.classList.contains("active")) {
    submenu.classList.remove("active");
    toggle.classList.remove("active");
  } else {
    // Close other submenus
    document.querySelectorAll(".mobile-submenu.active").forEach((menu) => {
      menu.classList.remove("active");
    });
    document.querySelectorAll(".submenu-toggle.active").forEach((toggle) => {
      toggle.classList.remove("active");
    });

    submenu.classList.add("active");
    toggle.classList.add("active");
  }
}

// Enhanced accordion functionality with smooth animations
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById("icon-" + id);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    content.style.maxHeight = "0";
    content.style.opacity = "0";

    requestAnimationFrame(() => {
      content.style.transition = "max-height 0.4s ease, opacity 0.3s ease";
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
    });

    icon.classList.add("rotate-180");
  } else {
    content.style.maxHeight = "0";
    content.style.opacity = "0";

    setTimeout(() => {
      content.classList.add("hidden");
      content.style.transition = "";
      content.style.maxHeight = "";
    }, 400);

    icon.classList.remove("rotate-180");
  }
}

// Enhanced smooth scroll for navigation links
function initSmoothScroll() {
  // Smooth scroll disabled intentionally to fix unintended partial scroll on button clicks.
  // If smooth scrolling is needed for specific anchors later, implement opt-in here.
}

// Navbar scroll behavior (simplified version for main.js)
function initNavbarScroll() {
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove("shadow-md");
    } else {
      navbar.classList.add("shadow-md");
    }

    // Keep navbar always visible (sticky)
    navbar.style.transform = "translateY(0)";
  });
}

// Countdown timer showing conference date with current status based on important dates
function initCountdown() {
  // Get the current status based on important dates
  function getCurrentStatus() {
    const now = new Date();

    // Main event date - April 8, 2026 (IST)
    const conferenceStart = new Date("2026-04-08T00:00:00+05:30");

    // Important dates for the conference
    const abstractSubmissionOpens = new Date("2025-07-30T00:00:00+05:30");
    const abstractSubmissionDeadline = new Date("2025-10-25T00:00:00+05:30");
    const acceptanceNotification = new Date("2025-11-10T00:00:00+05:30");
    const finalPaperSubmissionStart = new Date("2025-11-20T00:00:00+05:30");
    const finalPaperSubmissionEnd = new Date("2025-12-20T00:00:00+05:30");
    const earlyBirdRegistrationOpens = new Date("2025-12-20T00:00:00+05:30");
    const earlyBirdRegistrationEnds = new Date("2026-01-30T00:00:00+05:30");
    const registrationDeadline = new Date("2026-03-01T00:00:00+05:30");

    // Check if conference has started
    if (now >= conferenceStart) {
      return {
        phase: "conference",
        message: "Conference is Live!",
        color: "green",
        targetDate: null,
        targetEvent: null,
        registrationStatus: "closed",
        currentStatus: "Conference is Live",
      };
    } else if (now >= registrationDeadline) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "red",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "closed",
        currentStatus: "Registration Closed",
      };
    } else if (now >= earlyBirdRegistrationEnds) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "yellow",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "regular",
        currentStatus: "Regular Registration Open",
      };
    } else if (now >= earlyBirdRegistrationOpens) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "blue",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "early-bird",
        currentStatus: "Early Bird Registration Open",
      };
    } else if (now >= finalPaperSubmissionStart) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "orange",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "coming-soon",
        currentStatus: "Paper Submission Phase",
      };
    } else if (now >= acceptanceNotification) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "green",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "coming-soon",
        currentStatus: "Acceptance Notification Sent",
      };
    } else if (now >= abstractSubmissionDeadline) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "pink",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "coming-soon",
        currentStatus: "Abstract Review Phase",
      };
    } else if (now >= abstractSubmissionOpens) {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "purple",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "coming-soon",
        currentStatus: "Abstract Submission Open",
      };
    } else {
      return {
        phase: "countdown",
        message: "Countdown to SMOPS 2026",
        color: "blue",
        targetDate: conferenceStart,
        targetEvent: "Conference Start",
        registrationStatus: "coming-soon",
        currentStatus: "Upcoming Conference",
      };
    }
  }

  function updateStatusIndicator(status) {
    // Get status indicator in the hero section below countdown
    const statusIndicator = document.querySelector(
      ".inline-flex.items-center.space-x-3.px-6.py-3.rounded-full.backdrop-blur-xl"
    );

    if (statusIndicator) {
      // Set color based on current status
      let statusColor;

      switch (status.color) {
        case "green":
          statusColor =
            "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 text-green-200";
          break;
        case "yellow":
          statusColor =
            "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 text-yellow-200";
          break;
        case "orange":
          statusColor =
            "bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/50 text-orange-200";
          break;
        case "red":
          statusColor =
            "bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/50 text-red-200";
          break;
        case "purple":
          statusColor =
            "bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-400/50 text-purple-200";
          break;
        case "pink":
          statusColor =
            "bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 border border-pink-400/50 text-pink-200";
          break;
        default:
          statusColor =
            "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 text-blue-200";
      }

      statusIndicator.className = `inline-flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-xl ${statusColor} transition-all duration-300`;

      // Update the dot color based on status color
      const dot = statusIndicator.querySelector("div");
      if (dot) {
        dot.className = `w-2 h-2 ${
          status.color === "green"
            ? "bg-green-400"
            : status.color === "yellow"
            ? "bg-yellow-400"
            : status.color === "orange"
            ? "bg-orange-400"
            : status.color === "red"
            ? "bg-red-400"
            : status.color === "purple"
            ? "bg-purple-400"
            : status.color === "pink"
            ? "bg-pink-400"
            : "bg-blue-400"
        } rounded-full animate-pulse`;
      }

      // Update the status message
      const statusSpan = statusIndicator.querySelector("span");
      if (statusSpan) {
        statusSpan.textContent = `• ${status.currentStatus}`;
      }
    }

    // Update the "Counting down to" message
    const countdownMessage = document.querySelector(
      ".text-xs.sm\\:text-sm.text-white\\/70 span"
    );
    if (countdownMessage) {
      countdownMessage.textContent = "Conference Start (April 8, 2026)";
    }
  }

  function updateCountdown() {
    const status = getCurrentStatus();
    const now = new Date();

    // Always target the main conference date
    const eventDate = new Date("2026-04-08T00:00:00+05:30");
    const diff = eventDate - now;

    if (diff <= 0) {
      const countdownElement = document.getElementById("countdown");
      if (countdownElement) {
        countdownElement.innerHTML = `
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span class="text-lg font-bold">SMOPS 2026 is Live!</span>
          </div>`;
      }
      updateStatusIndicator(status);
      updateStatusDisplay(status);
      return;
    }

    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update countdown display elements
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.textContent = days.toString().padStart(3, "0");
    if (hoursElement)
      hoursElement.textContent = hours.toString().padStart(2, "0");
    if (minutesElement)
      minutesElement.textContent = minutes.toString().padStart(2, "0");
    if (secondsElement)
      secondsElement.textContent = seconds.toString().padStart(2, "0");

    updateStatusIndicator(status);
    updateStatusDisplay(status);
  }

  function updateStatusDisplay(status) {
    // Now this function only updates the header status and registration button
    const countdownMessage = document.querySelector(
      ".text-xs.sm\\:text-sm .font-semibold.text-white\\/90"
    );

    // Display countdown message with conference date
    if (countdownMessage) {
      countdownMessage.textContent = "April 8, 2026 (IST)";
    }

    // Update hero registration button based on registration status
    updateHeroRegistrationButton(status.registrationStatus);
  }

  function getRegistrationButton(registrationStatus) {
    switch (registrationStatus) {
      case "coming-soon":
        return `
          <button class="px-6 py-3 bg-gray-600/30 border border-gray-500/50 text-gray-300 rounded-full text-sm cursor-not-allowed opacity-70">
            Registration Coming Soon
          </button>
        `;

      case "early-bird":
        return `
          <a href="#Registration" class="px-6 py-3 bg-blue-600/30 border border-blue-500/50 text-blue-200 rounded-full text-sm hover:bg-blue-600/50 transition-all duration-300">
            Early Bird Registration
          </a>
        `;

      case "regular":
        return `
          <a href="#Registration" class="px-6 py-3 bg-yellow-600/30 border border-yellow-500/50 text-yellow-200 rounded-full text-sm hover:bg-yellow-600/50 transition-all duration-300">
            Register Now
          </a>
        `;

      case "closed":
        return `
          <button class="px-6 py-3 bg-red-600/30 border border-red-500/50 text-red-200 rounded-full text-sm cursor-not-allowed opacity-70">
            Registration Closed
          </button>
        `;

      default:
        return "";
    }
  }

  function updateHeroRegistrationButton(registrationStatus) {
    const heroButtonContainer = document.getElementById(
      "hero-registration-button"
    );
    if (!heroButtonContainer) return;

    switch (registrationStatus) {
      case "coming-soon":
        heroButtonContainer.innerHTML = `
          <div class="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 rounded-full blur opacity-75"></div>
          <button class="relative px-8 py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 text-gray-300 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 flex items-center space-x-3 cursor-not-allowed opacity-70">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Registration Coming Soon</span>
          </button>
        `;
        break;

      case "early-bird":
        heroButtonContainer.innerHTML = `
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100"></div>
          <a href="#Registration" class="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 flex items-center space-x-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Early Bird Registration</span>
          </a>
        `;
        break;

      case "regular":
        heroButtonContainer.innerHTML = `
          <div class="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-full blur opacity-75 group-hover:opacity-100"></div>
          <a href="#Registration" class="relative px-8 py-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 flex items-center space-x-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Register Now</span>
          </a>
        `;
        break;

      case "active":
        heroButtonContainer.innerHTML = `
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100"></div>
          <a href="#Registration" class="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 flex items-center space-x-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Register Now</span>
          </a>
        `;
        break;

      case "closed":
        heroButtonContainer.innerHTML = `
          <div class="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-full blur opacity-75"></div>
          <button class="relative px-8 py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-red-200 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 flex items-center space-x-3 cursor-not-allowed opacity-70">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Registration Closed</span>
          </button>
        `;
        break;
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Enhanced Intersection Observer for better animation performance
function initAnimationObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const animationObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";

        // Add stagger effect for child elements
        const children = entry.target.querySelectorAll(
          '[style*="animation-delay"]'
        );
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.animationPlayState = "running";
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('[class*="animate-"]').forEach(function (element) {
    element.style.animationPlayState = "paused";
    animationObserver.observe(element);
  });
}

// Enhanced video lazy loading with performance optimization
function initVideoLazyLoading() {
  const videoObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        const video = entry.target;
        if (entry.isIntersecting && video.paused) {
          video.play().catch(console.error);
        } else if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll("video").forEach(function (video) {
    // Preload video metadata
    video.preload = "metadata";
    videoObserver.observe(video);
  });
}

// Performance optimization: Debounce resize events
function initResizeHandler() {
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      // Recalculate any position-dependent animations
      // This can be expanded based on needs
    }, 250);
  });
}

// Add keyboard navigation for accessibility
function initKeyboardNavigation() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        toggleMobileMenu();
      }
    }
  });
}

// Enhanced loading performance
function initDOMEnhancements() {
  // Remove any initial loading states
  document.body.classList.add("loaded");

  // Initialize all components
  initCountdown();
  initAnimationObserver();
  initVideoLazyLoading();
  initResizeHandler();
  initKeyboardNavigation();

  // Add progressive enhancement for accordion max-height
  document.querySelectorAll('[id^="topic"]').forEach((topic) => {
    topic.style.transition = "max-height 0.4s ease, opacity 0.3s ease";
  });
}

// Accessibility improvements
function initAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement("a");
  skipLink.href = "#overview";
  skipLink.textContent = "Skip to main content";
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Keyboard navigation for dropdowns
  document.querySelectorAll(".group").forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector('div[class*="absolute"]');

    if (button && menu) {
      button.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          menu.classList.toggle("opacity-0");
          menu.classList.toggle("invisible");
        }
      });
    }
  });

  // Focus management for mobile menu
  const mobileMenuButton = document.querySelector(
    '[aria-controls="mobile-menu"]'
  );
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isExpanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
    });
  }
}

// Error handling
function initErrorHandling() {
  window.addEventListener("error", (e) => {
    console.error("JavaScript error:", e.error);
    // Could send to analytics service
  });

  window.addEventListener("unhandledrejection", (e) => {
    console.error("Unhandled promise rejection:", e.reason);
    // Could send to analytics service
  });
}

// Performance monitoring
function initPerformanceMonitoring() {
  // Modern navigation timing (guards against negatives / legacy API)
  if ("performance" in window) {
    window.addEventListener("load", function () {
      let navEntry = performance.getEntriesByType("navigation")[0];
      // Safari < 15 fallback
      if (!navEntry && performance.timing) {
        const t = performance.timing;
        // Guard if values are 0 (still being populated)
        if (t.loadEventEnd === 0) {
          // defer a tick
          setTimeout(() => {
            const t2 = performance.timing;
            const legacyLoad = Math.max(
              0,
              t2.loadEventEnd - t2.navigationStart
            );
            console.log(`Page load (legacy timing): ${legacyLoad}ms`);
          }, 0);
        } else {
          const legacyLoad = Math.max(0, t.loadEventEnd - t.navigationStart);
          console.log(`Page load (legacy timing): ${legacyLoad}ms`);
        }
      }
      if (navEntry) {
        const total = Math.max(0, navEntry.loadEventEnd - navEntry.startTime);
        console.log(`Page load (navigation entry): ${total}ms`);
        const domInteractive = Math.max(
          0,
          navEntry.domInteractive - navEntry.startTime
        );
        console.log(`DOM interactive: ${domInteractive}ms`);
      }
    });
  }

  // Core Web Vitals (optional – can be removed in production if size sensitive)
  // Dynamically import only if connection is good.
  if (
    navigator.connection
      ? navigator.connection.effectiveType !== "slow-2g"
      : true
  ) {
    try {
      import("https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js")
        .then(() => {
          if (window.webVitals) {
            const { getCLS, getFID, getFCP, getLCP, getTTFB } =
              window.webVitals;
            [getCLS, getFID, getFCP, getLCP, getTTFB].forEach((fn) =>
              fn((m) => console.log("[WebVital]", m.name, m.value))
            );
          }
        })
        .catch(() => {
          /* ignore */
        });
    } catch (e) {
      /* noop */
    }
  }
}

// Enhanced mobile menu toggle with better animations
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const content = menu.querySelector(".mobile-menu-content");

  if (menu.classList.contains("hidden")) {
    // Show the menu
    menu.classList.remove("hidden");
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
      content.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
    });
  } else {
    // Animate and then hide
    content.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";

    setTimeout(() => {
      menu.classList.add("hidden");
      content.style.transition = "";
    }, 400);
  }
}

// Enhanced responsive utilities and mobile optimizations
function initResponsiveEnhancements() {
  // Viewport height fix for mobile browsers
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  // Initial set and update on resize
  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);

  // Touch device detection
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  // Add touch-specific classes
  if (isTouchDevice()) {
    document.body.classList.add("touch-device");
  } else {
    document.body.classList.add("no-touch");
  }

  // Responsive breakpoint detection
  function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1920) return "xl";
    return "2xl";
  }

  // Update breakpoint class on body
  function updateBreakpointClass() {
    const currentBreakpoint = getCurrentBreakpoint();
    document.body.className = document.body.className.replace(
      /breakpoint-\w+/g,
      ""
    );
    document.body.classList.add(`breakpoint-${currentBreakpoint}`);
  }

  // Initial set and update on resize
  updateBreakpointClass();
  window.addEventListener("resize", updateBreakpointClass);

  // Mobile menu enhancements
  function enhanceMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu) return;

    // Prevent body scroll when menu is open
    const toggleBodyScroll = (disable) => {
      if (disable) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    };

    // Enhanced mobile menu toggle
    window.toggleMobileMenu = function () {
      const isHidden = mobileMenu.classList.contains("hidden");

      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        toggleBodyScroll(true);

        // Animate menu items
        const menuItems = mobileMenu.querySelectorAll(".mobile-menu-item");
        menuItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
          item.classList.add("animate-fade-in-up");
        });
      } else {
        mobileMenu.classList.add("hidden");
        toggleBodyScroll(false);
      }
    };

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (
        !mobileMenu.contains(e.target) &&
        !e.target.closest('[data-toggle="mobile-menu"]')
      ) {
        if (!mobileMenu.classList.contains("hidden")) {
          window.toggleMobileMenu();
        }
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        window.toggleMobileMenu();
      }
    });
  }

  enhanceMobileMenu();
}

// Enhanced orientation change handler
function handleOrientationChange() {
  // Delay to allow for proper viewport calculation
  setTimeout(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Trigger resize event for other components
    window.dispatchEvent(new Event("resize"));
  }, 100);
}

// Listen for orientation changes
window.addEventListener("orientationchange", handleOrientationChange);

// Enhanced table responsiveness
function initResponsiveTables() {
  const tables = document.querySelectorAll("table");

  tables.forEach((table) => {
    // Wrap table in responsive container if not already wrapped
    if (!table.parentElement.classList.contains("table-responsive-wrapper")) {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive-wrapper overflow-x-auto";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }

    // Add responsive classes
    table.classList.add("table-responsive");

    // Mobile table optimization
    if (window.innerWidth < 768) {
      table.classList.add("table-mobile");

      // Add mobile headers for better readability
      const headers = Array.from(table.querySelectorAll("th")).map(
        (th) => th.textContent
      );
      const rows = table.querySelectorAll("tbody tr");

      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        cells.forEach((cell, index) => {
          if (headers[index]) {
            cell.setAttribute("data-label", headers[index]);
          }
        });
      });
    }
  });
}

// Enhanced image lazy loading with responsive support
function initResponsiveImages() {
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          const srcset = img.getAttribute("data-srcset");

          if (src) img.src = src;
          if (srcset) img.srcset = srcset;

          img.classList.remove("lazy");
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Enhanced form responsiveness
function initResponsiveForms() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    // Add responsive classes
    form.classList.add("form-responsive");

    // Enhance form inputs
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.classList.add("input-responsive");

      // Add focus enhancement
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("input-focused");
      });

      input.addEventListener("blur", () => {
        input.parentElement.classList.remove("input-focused");
      });
    });
  });
}

// Enhanced video responsiveness
function initResponsiveVideos() {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    // Add responsive classes
    video.classList.add("video-responsive");

    // Optimize for mobile
    if (window.innerWidth < 768) {
      video.preload = "metadata";
      video.muted = true;

      // Reduce quality for mobile if multiple sources
      const sources = video.querySelectorAll("source");
      sources.forEach((source) => {
        const src = source.getAttribute("src");
        if (src && src.includes("high-quality")) {
          source.setAttribute("src", src.replace("high-quality", "mobile"));
        }
      });
    }
  });
}

// Enhanced scroll behavior for mobile
function initMobileScrollEnhancements() {
  if (window.innerWidth < 768) {
    // Add momentum scrolling for iOS
    document.body.style.webkitOverflowScrolling = "touch";

    // Optimize scroll events
    let scrollTimeout;
    let isScrolling = false;

    window.addEventListener(
      "scroll",
      () => {
        if (!isScrolling) {
          isScrolling = true;
          document.body.classList.add("scrolling");
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          document.body.classList.remove("scrolling");
        }, 150);
      },
      { passive: true }
    );
  }
}

// Enhanced countdown timer responsiveness
function initResponsiveCountdown() {
  const countdownElements = document.querySelectorAll("[data-countdown]");

  countdownElements.forEach((element) => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) {
        element.classList.add("countdown-mobile");
      } else if (width < 768) {
        element.classList.add("countdown-tablet");
      } else {
        element.classList.add("countdown-desktop");
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
  });
}

// Enhanced accessibility for mobile
function initMobileAccessibility() {
  // Focus management
  const focusableElements = document.querySelectorAll(
    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  // Removed automatic scrollIntoView on focus to prevent unwanted page shifting when clicking buttons.

  // Enhanced touch targets
  const touchTargets = document.querySelectorAll("button, a, input");
  touchTargets.forEach((target) => {
    const rect = target.getBoundingClientRect();
    if (rect.height < 44 || rect.width < 44) {
      target.style.minHeight = "44px";
      target.style.minWidth = "44px";
      target.style.display = "inline-flex";
      target.style.alignItems = "center";
      target.style.justifyContent = "center";
    }
  });
}

// Initialize all responsive enhancements
function initAllResponsiveFeatures() {
  initResponsiveEnhancements();
  initResponsiveTables();
  initResponsiveImages();
  initResponsiveForms();
  initResponsiveVideos();
  initMobileScrollEnhancements();
  initResponsiveCountdown();
  initMobileAccessibility();
}

// Scroll to Top Button Functionality
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (!scrollToTopBtn) return;

  // Show/hide button based on scroll position
  function toggleScrollToTopButton() {
    const scrollThreshold = 300; // Show button after scrolling 300px
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }

  // Add pulse animation when button first appears
  let hasAddedPulse = false;
  function addPulseAnimation() {
    if (!hasAddedPulse && scrollToTopBtn.classList.contains("show")) {
      scrollToTopBtn.classList.add("pulse");
      hasAddedPulse = true;

      // Remove pulse after 3 seconds
      setTimeout(() => {
        scrollToTopBtn.classList.remove("pulse");
      }, 3000);
    }
  }

  // Throttle scroll events for better performance
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        toggleScrollToTopButton();
        addPulseAnimation();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Initial check
  toggleScrollToTopButton();
}

// Smooth scroll to top function
function scrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Add loading state
  if (scrollToTopBtn) {
    scrollToTopBtn.style.pointerEvents = "none";
    scrollToTopBtn.style.opacity = "0.7";
  }

  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Reset button state after scroll
  setTimeout(() => {
    if (scrollToTopBtn) {
      scrollToTopBtn.style.pointerEvents = "auto";
      scrollToTopBtn.style.opacity = "1";
    }
  }, 500);
}

// Fix CTA button click behavior
function fixCTAButtons() {
  // Ensure all external links work properly
  document
    .querySelectorAll('a[href$=".html"], a[href*=".html"]')
    .forEach((link) => {
      // Remove any existing conflicting event listeners
      link.removeEventListener("click", arguments.callee);

      // Add a high-priority click handler
      link.addEventListener(
        "click",
        function (e) {
          const href = this.getAttribute("href");
          if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("javascript:")
          ) {
            // Prevent any interference from other handlers
            e.stopImmediatePropagation();
            e.stopPropagation();

            // Immediate navigation
            window.location.href = href;
            return false;
          }
        },
        { capture: true, passive: false }
      );

      // Ensure proper styling
      link.style.pointerEvents = "auto";
      link.style.zIndex = "10";
      link.style.position = "relative";
    });
}

function startSmopsApp() {
  try {
    // Initialize responsive features first
    initAllResponsiveFeatures();

    // Core functionality
    // initSmoothScroll disabled (removed unwanted auto scrolling)
    initNavbarScroll();
    initDOMEnhancements(); // calls initCountdown internally
    initAccessibility();
    initErrorHandling();
    initScrollToTop();
    fixCTAButtons();

    // Lazy-load optional visual effects after initial paint
    const loadOptionalEffects = () => {
      // Dynamically import scroll animations & space scene only if user scrolls or after idle
      const importEffects = () => {
        if (window.__effectsLoaded) return;
        window.__effectsLoaded = true;
        // Attempt dynamic imports (will be separate requests if modules exist)
        const promises = [];
        // Legacy non-module scripts: fall back to injecting script tags
        const injectScript = (src) => {
          return new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = src + '?v=' + (window.ASSET_VERSION||'');
            s.defer = true;
            s.onload = resolve;
            s.onerror = resolve; // fail silently
            document.head.appendChild(s);
          });
        };
        promises.push(injectScript('js/scroll-animations.js'));
        // Only load space scene if a non-skipped star-bg needs dynamic stars
        if (document.querySelector('.star-bg:not([data-skip-stars="true"])')) {
          promises.push(injectScript('js/space-scene.js'));
        }
        Promise.all(promises).then(() => {
          try {
            if (typeof initScrollAnimations === 'function') {
              initScrollAnimations();
              initParallaxEffects && initParallaxEffects();
              initSectionTransitions && initSectionTransitions();
              initCardHoverEffects && initCardHoverEffects();
              initFloatingElements && initFloatingElements();
              initNebulaEffects && initNebulaEffects();
            }
            if (typeof initSpaceScene === 'function') {
              initSpaceScene();
            }
          } catch(e){
            console.warn('Optional effects failed', e);
          }
        });
      };
      // Load after first user interaction or idle
      ['scroll','mousemove','touchstart'].forEach(evt => {
        window.addEventListener(evt, importEffects, { once: true, passive: true });
      });
      if ('requestIdleCallback' in window) {
        requestIdleCallback(importEffects, { timeout: 4000 });
      } else {
        setTimeout(importEffects, 3000);
      }
    };
    loadOptionalEffects();

    if (window.location.hostname !== "localhost") {
      initPerformanceMonitoring();
    }

    document.body.classList.add("loaded");

    // Safeguard: ensure countdown numbers not stuck at defaults
    const daysEl = document.getElementById("days");
    if (
      typeof initCountdown === "function" &&
      daysEl &&
      /^0+$/.test(daysEl.textContent.trim())
    ) {
      try {
        initCountdown();
      } catch (e) {
        console.warn("Countdown fallback init failed", e);
      }
    }

    console.log("SMOPS 2026 website initialized successfully (startSmopsApp)");
  } catch (e) {
    console.error("Initialization error:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startSmopsApp, { once: true });
} else {
  // DOM already parsed (e.g., script injected dynamically after load)
  startSmopsApp();
}

// Export functions for external use
window.SMOPS = {
  toggleMobileMenu,
  toggleSubmenu,
  toggleAccordion,
};
