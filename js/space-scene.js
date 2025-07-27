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

// Create animated star field
function createStarField() {
  const starField = document.querySelector(".star-bg");
  if (!starField) return;

  // Create stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.position = "absolute";
    star.style.width = Math.random() * 3 + 1 + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = "white";
    star.style.borderRadius = "50%";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${
      Math.random() * 3 + 2
    }s ease-in-out infinite alternate`;

    starField.appendChild(star);
  }
}

// Twinkle animation for stars
function addTwinkleAnimation() {
  const style = document.createElement("style");
  style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.3; transform: scale(1); }
        }
    `;
  document.head.appendChild(style);
}

// Cosmic particle effects
function initCosmicParticles() {
  const particleContainer = document.createElement("div");
  particleContainer.className = "cosmic-particles";
  particleContainer.style.position = "fixed";
  particleContainer.style.top = "0";
  particleContainer.style.left = "0";
  particleContainer.style.width = "100%";
  particleContainer.style.height = "100%";
  particleContainer.style.pointerEvents = "none";
  particleContainer.style.zIndex = "1";

  document.body.appendChild(particleContainer);

  // Create particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "cosmic-particle";
    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.backgroundColor = `hsl(${
      Math.random() * 60 + 200
    }, 70%, 70%)`;
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      Math.random() * 20 + 10
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + "s";

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
  addTwinkleAnimation();
  initCosmicParticles();
  initVisibilityHandling();
}

// Export functions for use in main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initVideoManagement,
    initLazyLoading,
    createStarField,
    addTwinkleAnimation,
    initCosmicParticles,
    initVisibilityHandling,
    initSpaceScene,
  };
}
