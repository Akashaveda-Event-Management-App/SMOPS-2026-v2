// Three.js space background for SMOPS 2026
// This file creates an interactive 3D space background using Three.js

class SpaceBackground {
  constructor(containerId = "space-bg") {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.stars = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.init();
  }

  init() {
    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    if (this.container) {
      this.container.appendChild(this.renderer.domElement);
      // Ensure canvas doesn't interfere with clicks
      this.renderer.domElement.style.pointerEvents = "none";
      this.renderer.domElement.style.position = "fixed";
      this.renderer.domElement.style.top = "0";
      this.renderer.domElement.style.left = "0";
      this.renderer.domElement.style.zIndex = "-1";
    }

    // Create stars
    this.createStars();

    // Add event listeners
    this.addEventListeners();

    // Start animation loop
    this.animate();
  }

  createStars() {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.8,
    });

    const positions = [];
    const colors = [];

    for (let i = 0; i < 2000; i++) {
      positions.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
      );

      // Random colors for some variety
      const color = new THREE.Color();
      color.setHSL(
        Math.random() * 0.2 + 0.5,
        0.55,
        Math.random() * 0.25 + 0.75
      );
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    this.stars = new THREE.Points(geometry, material);
    this.scene.add(this.stars);
  }

  addEventListeners() {
    window.addEventListener("resize", () => this.onWindowResize());
    document.addEventListener("mousemove", (event) => this.onMouseMove(event));
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(event) {
    this.mouseX = (event.clientX - window.innerWidth / 2) * 0.0001;
    this.mouseY = (event.clientY - window.innerHeight / 2) * 0.0001;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate stars based on mouse position
    this.stars.rotation.x += this.mouseY * 0.5;
    this.stars.rotation.y += this.mouseX * 0.5;

    // Auto rotation
    this.stars.rotation.z += 0.001;

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.renderer) {
      this.renderer.dispose();
      if (this.container && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
      }
    }
  }
}

// Initialize space background when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Only initialize if Three.js is available
  if (typeof THREE !== "undefined") {
    const spaceBackground = new SpaceBackground();

    // Store reference for cleanup
    window.spaceBackground = spaceBackground;
  }
});

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = SpaceBackground;
}
