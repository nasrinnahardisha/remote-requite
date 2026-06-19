# RemoteRecruit

Marketing landing page for *RemoteRecruit* — a global, fee-free job board connecting employers and remote talent worldwide.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion |
| Icons | Lucide React |

## Prerequisites

- *Node.js* 18 or later (20+ recommended)
- *npm* 9 or later

## Getting Started

bash
# Install dependencies
npm install

# Start development server
npm run dev


Open the URL shown in the terminal (default: http://localhost:5173).

## Available Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start Vite dev server with hot reload |
| npm run build | Production build to dist/ |
| npm run preview | Serve the production build locally |
| npm run lint | Run ESLint across the project |

## Project Structure


remote_recruit/
├── public/              # Static assets (favicon)
├── src/
│   ├── assets/          # Images and SVGs
│   ├── Components/      # Shared UI (ScrollReveal, ScrollToTopButton)
│   ├── Layouts/         # Root layout (Navbar + Footer + Outlet)
│   ├── pages/
│   │   ├── Auth/        # Sign In & Sign Up pages
│   │   ├── Home/        # Landing page sections
│   │   └── NotFound.jsx
│   ├── routes/          # React Router configuration
│   ├── index.css        # Global styles & Tailwind theme
│   └── main.jsx         # App entry point
├── index.html           # HTML shell & SEO meta tags
├── vite.config.js
├── eslint.config.js
└── package.json


## Pages & Routes

| Route | Page | Status |
|-------|------|--------|
| / | Home (landing page) | Active |
| * | 404 Not Found | Active |
| /signin | Sign In | Page exists — *not wired in router* |
| /signup | Sign Up | Page exists — *not wired in router* |

The Navbar links to /signin and /signup, but those routes are not registered in src/routes/router.jsx yet. Until they are added, those links show the 404 page.

## Landing Page Sections

The home page (src/pages/Home/Home.jsx) includes:

1. *Hero* — headline, CTA, gradient background
2. *GlobalReach* — worldwide job opportunities
3. *Actually* — fee-free messaging
4. *Custom* — custom profile showcase
5. *ReadyHelp* — support CTA with background image
6. *FAQ* — accordion with common questions
7. *Pricing* — Free and Premium plans

Shared layout: *Navbar* (desktop + mobile menu), *Footer, **ScrollToTopButton*.

## Design Tokens

Custom colors and typography are defined in src/index.css via Tailwind @theme:

- Primary: #1E3E85, #336DA6
- Accent: #F5A623
- Font: Poppins (loaded via Google Fonts in index.html)

## SEO

index.html includes:

- Page title and meta description
- Open Graph tags (og:title, og:description, og:type)
- Twitter card meta tags

## Build Output

A successful production build produces roughly:

- ~444 KB JavaScript (gzipped ~144 KB)
- ~41 KB CSS (gzipped ~9 KB)
- Optimized PNG/SVG assets in dist/assets/

Run npm run build to verify before deployment.

## Known Issues

| Priority | Issue | Location |
|----------|-------|----------|
| High | /signin and /signup routes missing from router | src/routes/router.jsx |
| Medium | FAQ contact link uses Link to="mailto:..." instead of <a href="mailto:..."> | src/pages/Home/Faq.jsx |
| Medium | Footer RR logo Link missing to="/" | src/pages/Home/Shared/Footer/Footer.jsx |
| Medium | Unused skills array | src/pages/Home/Custom.jsx |
| Low | Image alt text mismatches section content | Actually.jsx, Custom.jsx |
| Low | Premium pricing CTA points to / instead of /signup | src/pages/Home/Pricing.jsx |
| Low | Typography breakpoints in index.css — tablet h2 is smaller than mobile | src/index.css |
| Low | ESLint may report errors from .vite/ cache; add to globalIgnores if needed | eslint.config.js |

## Deployment
