# SMOPS-2026 Website Summary

## 1. Website Purpose
SMOPS-2026 is the official conference website for the International Conference on Spacecraft Mission Operations, scheduled for April 8-10, 2026 in Bengaluru, India.

The site is designed to:
- Present event information, speakers, committees, and program details.
- Collect registrations for conference and workshop participation.
- Guide participants on travel and logistics.
- Publish call-for-papers content and submission guidance.
- Showcase sponsors, supporters, and collaboration ecosystem.

## 2. Primary Audience
- Space and aerospace professionals
- Researchers and academicians
- Students and early-career engineers
- Industry participants and sponsors
- International delegates and invited speakers

## 3. Information Architecture
### Core landing and navigation
- Home page with section-based navigation and quick links.
- Dedicated pages for registration, call for papers, schedules, and travel.

### Main navigation themes
- About conference
- Topics and timeline
- Speakers and committees
- Registration and paper information
- Sponsorship and supporters
- Venue, travel, and contact

## 4. Page-Wise Content Summary

### Home page
File: index.html

The home page acts as a full portal with rich, sectioned content:
- Hero section with event identity and call-to-action buttons.
- Conference overview and thematic focus.
- Topic tracks for mission operations and related domains.
- Event timeline and schedule highlights.
- Featured speakers grid, including dynamic ordering support and placeholders for missing profile data.
- Organizing and advisory committee details.
- Registration section with flow entry points.
- Paper section with submission guidance references.
- Accommodation, sponsorship, sponsors list, supporters, about, and contact sections.

### Registration page
File: registration.html

Registration guidance and redirect flow:
- Conference and workshop registration status blocks.
- Registration process and checklist.
- User guidance for portal-based registration.
- Transition path to form and payment pages.

### Call for papers page
File: call-for-papers.html

Research submission content:
- Submission status messaging (currently indicating closed state).
- Paper preparation and template references.
- Submission workflow steps through conference portal.
- Important dates and publication context.


### Conference schedule page
File: conference-schedule.html

Program schedule presentation:
- Day-wise table layout for conference agenda.
- Session slots, topics, and speaker details.
- Responsive horizontal-scroll schedule table for small screens.

### Workshop schedule page
File: workshop-schedule.html

Workshop agenda presentation:
- Structured schedule table for workshop day.
- Time, topic, and speaker aligned format.
- Mobile-friendly table scrolling behavior.

### Travel page
File: travel.html

Participant logistics and city guidance:
- Venue access and travel support information.
- Connectivity and accommodation guidance.
- Bengaluru exploration and visitor context.

## 5. Content Blocks and Functional Highlights
- Structured section navigation with anchored in-page links.
- Speaker and committee visibility with profile cards.
- Responsive visual storytelling with gradients, star backgrounds, and glassmorphism.
- Registration and payment onboarding journey.
- Sponsor branding display via dedicated logo assets.

## 6. Design and UX Characteristics
- Space-themed visual identity throughout.
- High-contrast dark palette and gradient accents.
- Animated backgrounds and micro-motion cues.
- Mobile-aware layout choices for large tabular schedule content.
- CTA-driven flow from home page to registration and details pages.

## 7. Technical Implementation Summary

### Stack
- Static multi-page HTML website.
- Tailwind CSS driven styling with generated stylesheet output.
- Vanilla JavaScript for interactions and dynamic behavior.

### Tooling and scripts
From package.json:
- Local static server for development and preview.
- Tailwind CSS watch and minified build pipeline.
- Parallel run support for CSS watch plus server.

### Notable dependencies
- three (for interactive visuals)
- tailwindcss
- http-server
- npm-run-all

## 8. PWA, Performance, and Caching

### Manifest
File: manifest.json
- App metadata for installable web app behavior.
- Standalone display mode, icon declarations, and theme colors.

### Service Worker
File: sw.js
- Versioned static and runtime caches.
- Network-first strategy for HTML routes.
- Cache-first strategy for static assets.
- Old cache cleanup during activation.
- Background sync and push notification handlers included.

## 9. SEO and Discoverability

### Robots
File: robots.txt
- Global allow policy with selective disallow paths.
- Sitemap declaration included.

### Sitemap
File: sitemap.xml
- Includes root, call-for-papers, and submit-paper URLs.

### Meta and structured content
- Home and key pages include descriptive metadata for search and social sharing.

## 10. Asset Organization
- Images, speaker photos, and sponsor logos in assets/images.
- Speaker images maintained under assets/images/Speakers.
- Sponsor logos under assets/images/sponsors_logo.
- CSS assets in css and JavaScript modules in js.

## 11. Deployment and Hosting
File: amplify.yml
- AWS Amplify build spec present.
- Dependency install and build steps defined.
- Full artifact publish pattern configured.

## 12. Current Content Status Notes
- submit-paper.html currently contains no content and may need implementation or redirect behavior.
- Speaker system supports placeholders where profile data or photos are not available.
- Schedule and registration pathways are implemented as separate pages and section links.

## 13. End-to-End User Journey Snapshot
1. Visitor lands on home page and discovers event overview.
2. Visitor reviews speakers, committees, and timeline.
3. Visitor checks conference or workshop schedule pages.
4. Visitor reads registration guidance and proceeds to forms.
5. Visitor completes payment through dedicated payment pages.
6. Visitor can use travel page for logistics planning.
7. Visitor or author checks call-for-papers information and submission status.

## 14. Executive Summary
SMOPS-2026 is a content-rich, conference-focused static website with strong visual branding, clear registration pathways, and dedicated pages for program, travel, and publication workflows. It combines SEO and PWA support with responsive design patterns and modular page-level architecture suitable for conference communications and participant onboarding.