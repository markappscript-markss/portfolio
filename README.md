# Mark Poticar — Portfolio

An interactive, 3D-driven personal portfolio built with Next.js, Three.js, and GSAP. Designed as an immersive digital space featuring custom WebGL shaders, interactive 3D device models, seamless page transitions, and smooth motion graphics.

Live site: [markappscript.dev](https://markappscript.dev)

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Core Library**: [React 19](https://react.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) (WebGL, custom geometries, procedural shaders)
- **Animations**: [GSAP](https://greensock.com/gsap/) (Timelines, scroll/drag mechanics, easing curves)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Assets**: Optimized WebP imagery and WebM video streams

---

## Key Features

- **3D Hero Environment**: Interactive Three.js canvas featuring floating mesh particles, mouse-reactive lighting, and real-time reflections.
- **Interactive 3D Device Showcases**:
  - **MacBook Pro**: Dynamic lid opening/closing physics with screen texture rendering.
  - **3D Tablet**: Multi-surface interactive rotation showing project views and UI transitions.
  - **3D iPhone**: Exploded view architecture rendered directly in WebGL.
- **Layered Work Overlays**: Fluid, gesture-ready case studies with deep-dive technical breakdowns and live demo links.
- **Curated Work Archive**: Paginated work index with responsive row scaling and hover dynamics.
- **Paper Tear Entrance**: Cinematic loading screen transition with procedural SVG tearing animations.
- **SEO & Performance Engineered**:
  - Server-side rendered (SSR) markup
  - Schema.org Person JSON-LD structured data
  - Automated `robots.txt` and `sitemap.xml` generation
  - Comprehensive Open Graph and Twitter Card metadata
  - Strict WebP and WebM asset pipeline with lazy loading

---

## Project Structure

```text
├── app/
│   ├── globals.css          # Core stylesheets and utility keyframes
│   ├── layout.tsx           # Root layout, metadata, fonts, analytics, and schema
│   ├── not-found.tsx        # Custom 404 error page
│   ├── page.tsx             # Main canvas, views, and overlay orchestration
│   ├── robots.ts            # Dynamic robots.txt generation
│   └── sitemap.ts           # Dynamic sitemap.xml generation
├── components/
│   ├── AboutOverlay.tsx     # Fullscreen biography and capabilities
│   ├── FinalOverlay.tsx     # Contact section and social links
│   ├── Header.tsx           # Floating navigation header with magnetic interactions
│   ├── HeroScene3D.tsx      # Main Three.js 3D landing scene
│   ├── MacBookOpening.tsx   # Three.js animated MacBook model
│   ├── MacBookVideo.tsx     # 3D laptop viewport video presentation
│   ├── Phone3D.tsx          # 3D interactive mobile presentation
│   ├── TabletOutline3D.tsx  # Interactive 3D tablet model
│   ├── TabletReveal.tsx     # 3D tablet transition reveal sequence
│   ├── WorkArchive.tsx      # Paginated project archive catalog
│   ├── WorkOverlay.tsx      # Case Study 1: Portfolio Reloaded
│   ├── WorkOverlay2.tsx     # Case Study 2: Leave Management System
│   ├── WorkOverlay3.tsx     # Case Study 3: AI Video and Static Ads
│   ├── animations/          # Loading screen, magnetic triggers, smooth scroll
│   └── iPhone3DScene.tsx    # 3D exploded phone visualization
└── public/
    ├── images/              # Optimized WebP assets and UI captures
    ├── macbook/             # Device screen assets
    ├── tablet/              # Tablet visual assets
    └── videos/              # Video demonstrations and process captures
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/markappscript-markss/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To build the application for production:

```bash
npm run build
npm run start
```
