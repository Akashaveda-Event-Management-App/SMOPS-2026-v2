// Theme configuration for SMOPS 2026
const themeConfig = {
  colors: {
    primary: "#1e40af",
    secondary: "#0f172a",
    space: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    accent: {
      yellow: "#fbbf24",
      blue: "#3b82f6",
      purple: "#8b5cf6",
    },
  },
  animations: {
    "fade-in": "fadeIn 0.6s ease-out forwards",
    "fade-in-up": "fadeInUp 0.8s ease-out forwards",
    "fade-in-down": "fadeInDown 0.8s ease-out forwards",
    "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
    "fade-in-right": "fadeInRight 0.8s ease-out forwards",
    "slide-up": "slideUp 0.6s ease-out forwards",
    "slide-down": "slideDown 0.6s ease-out forwards",
    "scale-in": "scaleIn 0.6s ease-out forwards",
    float: "float 6s ease-in-out infinite",
    "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
    "rotate-slow": "rotateSlow 20s linear infinite",
    "bounce-slow": "bounceSlow 3s ease-in-out infinite",
    shimmer: "shimmer 2s ease-in-out infinite",
    typewriter: "typewriter 3s steps(40) 1s forwards",
    blink: "blink 1s ease-in-out infinite",
  },
  spacing: {
    18: "4.5rem",
    88: "22rem",
    128: "32rem",
  },
  boxShadow: {
    "inner-lg": "inset 0 2px 15px 0 rgba(0, 0, 0, 0.05)",
    glow: "0 0 20px rgba(59, 130, 246, 0.3)",
    "glow-lg": "0 0 40px rgba(59, 130, 246, 0.4)",
    neon: "0 0 5px #3b82f6, 0 0 20px #3b82f6, 0 0 35px #3b82f6",
    "neon-purple": "0 0 5px #8b5cf6, 0 0 20px #8b5cf6, 0 0 35px #8b5cf6",
  },
};

// Apply theme configuration to Tailwind
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        ...themeConfig
      },
    },
  };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = themeConfig;
}
