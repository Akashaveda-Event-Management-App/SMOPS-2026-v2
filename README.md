# SMOPS-2026 Conference Website

International Conference on Spacecraft Mission Operations - 2026

## Project Structure

```
smops-2026/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main stylesheet with custom animations
│   └── tailwind.css       # Tailwind CSS configuration
├── js/
│   ├── main.js            # Core functionality and initialization
│   ├── scroll-animations.js # Scroll and animation effects
│   ├── space-scene.js     # Space background and video management
│   ├── three-background.js # Three.js 3D background (optional)
│   └── theme-config.js    # Tailwind theme configuration
├── assets/
│   ├── images/            # Logo and images
│   └── gifs/              # GIF animations
├── videos/                # Background videos
├── src/
│   └── pages/             # Additional pages
└── package.json           # Dependencies and scripts
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Space Theme**: Animated space backgrounds with video support
- **Modern Animations**: Custom CSS animations and scroll effects
- **Performance Optimized**: Lazy loading, video management, and optimized assets
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Modular JavaScript**: Separated concerns with individual JS modules

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom animations and modern styling
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: ES6+ features, no external dependencies
- **Three.js**: 3D graphics for space background (optional)
- **Vite**: Build tool and development server

## Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## File Organization

### CSS Files
- `styles.css`: Main stylesheet with custom animations and space theme
- `tailwind.css`: Tailwind CSS configuration with custom components

### JavaScript Files
- `main.js`: Core functionality, mobile menu, countdown timer, and initialization
- `scroll-animations.js`: Scroll-based animations and parallax effects
- `space-scene.js`: Video management and space-themed visual effects
- `three-background.js`: Three.js 3D background (requires Three.js library)
- `theme-config.js`: Tailwind theme configuration and color scheme

### Assets
- `images/`: Logos, icons, and static images
- `gifs/`: Animated GIFs as fallbacks for videos
- `videos/`: Background videos for sections

## Key Features

### Animations
- Fade in/out effects
- Slide animations
- Parallax scrolling
- Floating elements
- Glow effects
- Typewriter animation

### Interactive Elements
- Mobile-responsive navigation
- Dropdown menus
- Accordion sections
- Smooth scrolling
- Video background management

### Performance
- Lazy loading for images
- Video optimization
- Intersection Observer for animations
- Debounced scroll events

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for the SMOPS-2026 conference. All rights reserved.

## Contact

For questions about the website, contact the SMOPS-2026 organizing committee.