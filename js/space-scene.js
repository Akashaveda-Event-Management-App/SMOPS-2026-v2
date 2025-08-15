// Space scene animations and effects for SMOPS 2026

// Video management for space backgrounds
function initVideoManagement() {
  const videos = document.querySelectorAll("video");

  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          if (video.paused) {
            video.play().catch((e) => {
              console.log("Video autoplay failed:", e);
              // Fallback: show poster image
              video.style.display = "none";
              const fallback = video.nextElementSibling;
              if (fallback && fallback.tagName === "IMG") {
                fallback.style.display = "block";
              }
            });
          }
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: "50px",
    }
  );

  videos.forEach((video) => {
    videoObserver.observe(video);

    // Optimize video loading
    video.addEventListener("loadstart", () => {
      video.style.opacity = "0";
    });

    video.addEventListener("canplay", () => {
      video.style.opacity = "1";
    });

    // Handle video errors
    video.addEventListener("error", (e) => {
      console.log("Video error:", e);
      video.style.display = "none";
      const fallback = video.nextElementSibling;
      if (fallback && fallback.tagName === "IMG") {
        fallback.style.display = "block";
      }
    });
  });
}

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("opacity-0");
        img.classList.add("opacity-100");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    img.classList.add("opacity-0", "transition-opacity", "duration-300");
    imageObserver.observe(img);
  });
}

// Create static star field with parallax layers
function createStarField() {
  // Select all star backgrounds except those explicitly marked to skip
  const starFields = document.querySelectorAll(".star-bg:not([data-skip-stars='true'])");
  if (!starFields.length) return;

  starFields.forEach((starField) => {
    // Clear any existing stars
    const existingStars = starField.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());

    // Create stars in different layers for parallax effect
    const totalStars = 100;
    
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      
      // Create three layers of stars with different sizes and opacities
      const layer = Math.floor(Math.random() * 3) + 1;
      let size, opacity;
      
      switch(layer) {
        case 1: // Foreground stars - larger, brighter
          size = Math.random() * 3 + 2; // 2-5px (increased)
          opacity = Math.random() * 0.3 + 0.8; // 0.8-1.0 (brighter)
          star.classList.add('layer-1');
          break;
        case 2: // Mid-ground stars - medium
          size = Math.random() * 2 + 1.5; // 1.5-3.5px (increased)
          opacity = Math.random() * 0.3 + 0.6; // 0.6-0.9 (brighter)
          star.classList.add('layer-2');
          break;
        case 3: // Background stars - smaller, dimmer
          size = Math.random() * 1.5 + 1; // 1-2.5px (increased)
          opacity = Math.random() * 0.3 + 0.4; // 0.4-0.7 (brighter)
          star.classList.add('layer-3');
          break;
      }
      
      star.style.position = "fixed";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.opacity = opacity;
      star.style.boxShadow = `0 0 ${size * 3}px rgba(255, 255, 255, ${opacity * 0.8})`;
      star.style.zIndex = layer + 2;
      // Ensure completely static - no animations
      star.style.animation = "none";
      star.style.transform = "none";
      star.style.transition = "none";

      starField.appendChild(star);
    }
  });
}

// Twinkle animation is now in animations.css

// Static cosmic particles for parallax effect
function initCosmicParticles() {
  const particleContainer = document.createElement("div");
  particleContainer.className = "cosmic-particles";
  particleContainer.style.position = "fixed";
  particleContainer.style.top = "0";
  particleContainer.style.left = "0";
  particleContainer.style.width = "100%";
  particleContainer.style.height = "100vh";
  particleContainer.style.pointerEvents = "none";
  particleContainer.style.zIndex = "1";

  document.body.appendChild(particleContainer);

  // Create fewer, more subtle static particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "cosmic-particle";
    
    const size = Math.random() * 2 + 1;
    const hue = Math.random() * 60 + 200; // Blue to purple range
    
    particle.style.position = "fixed";
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.backgroundColor = `hsl(${hue}, 70%, 70%)`;
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.opacity = Math.random() * 0.3 + 0.1; // Very subtle
    particle.style.boxShadow = `0 0 ${size * 3}px hsla(${hue}, 70%, 70%, 0.3)`;

    particleContainer.appendChild(particle);
  }
}

// Handle page visibility changes for video optimization
function initVisibilityHandling() {
  document.addEventListener("visibilitychange", () => {
    const videos = document.querySelectorAll("video");

    if (document.hidden) {
      videos.forEach((video) => video.pause());
    } else {
      videos.forEach((video) => {
        if (video.getBoundingClientRect().top < window.innerHeight) {
          video.play().catch((e) => console.log("Video play failed:", e));
        }
      });
    }
  });
}

// Initialize all space scene effects
function initSpaceScene() {
  initVideoManagement();
  initLazyLoading();
  createStarField();
  initCosmicParticles();
  initVisibilityHandling();
}

// Export functions for use in main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initVideoManagement,
    initLazyLoading,
    createStarField,
    initCosmicParticles,
    initVisibilityHandling,
    initSpaceScene,
  };
}
