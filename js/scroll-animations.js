// Scroll animations for SMOPS 2026

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");

        // Add staggered animation for child elements
        const children = entry.target.querySelectorAll(
          ".glassmorphic-bg, .cosmic-hover"
        );
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add("animate-fade-in");
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

// Navbar scroll behavior
function initNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove("shadow-md");
      navbar.style.transform = "translateY(0)";
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
      navbar.classList.add("shadow-md");
    }

    lastScroll = currentScroll;
  });
}

// Parallax effect for space backgrounds
function initParallaxEffects() {
  document.addEventListener("mousemove", (e) => {
    const parallaxElements = document.querySelectorAll(".parallax-bg");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 20;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Star field parallax effect
  const starField = document.querySelector(".star-bg");
  if (starField) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      starField.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  }
}

// Smooth section transitions
function initSectionTransitions() {
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
        entry.target.style.opacity = "1";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    sectionObserver.observe(section);
  });
}

// Enhanced hover effects for cards
function initCardHoverEffects() {
  const cards = document.querySelectorAll(".glassmorphic-bg");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
  });
}

// Floating elements animation
function initFloatingElements() {
  const floatingElements = document.querySelectorAll(".float-element");
  floatingElements.forEach((element, index) => {
    element.style.animation = `float ${6 + (index % 3)}s ease-in-out infinite`;
    element.style.animationDelay = `${index * 0.2}s`;
  });
}

// Nebula glow effect on scroll
function initNebulaEffects() {
  const nebulaElements = document.querySelectorAll(".nebula-glow");
  window.addEventListener("scroll", () => {
    nebulaElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );

      if (rect.top <= viewHeight && rect.bottom >= 0) {
        const scrollPercent = (viewHeight - rect.top) / viewHeight;
        element.style.opacity = Math.min(scrollPercent, 1);
      }
    });
  });
}

// Export functions for use in main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initScrollAnimations,
    initNavbarScroll,
    initParallaxEffects,
    initSectionTransitions,
    initCardHoverEffects,
    initFloatingElements,
    initNebulaEffects,
  };
}
