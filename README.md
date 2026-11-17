# 🌍 RemoteRecruit — Global Remote Talent & Hiring Platform

![RemoteRecruit Banner](https://i.ibb.co/ZRkZfvWR/Screenshot-935.png)

## 📖 Project Overview
**RemoteRecruit** is a modern, responsive marketing landing page for a global, fee-free job board connecting employers with remote talent worldwide. Built with **React 19**, **Tailwind CSS 4**, and **Framer Motion**, the platform highlights worldwide job opportunities, custom talent profiles, interactive FAQs, and transparent pricing tiers with smooth scroll-reveal animations.

🔗 **Live Demo:** [Visit RemoteRecruit](https://remote-requite-g3ay.vercel.app/)  
🔗 **Repository:** [GitHub Repo](https://github.com/nasrinnahardisha/remote-requite)

---

## 🛠️ Main Technologies Used

| Layer | Technologies |
| :--- | :--- |
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 (`@theme` tokens) |
| **Routing** | React Router 7 |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

### 💡 Why These Technologies Were Chosen
- **React 19 & Vite 8:** Chosen for ultra-fast development server startup, modern component patterns, and lightweight production builds (~144 KB gzipped JS).
- **Tailwind CSS 4:** Adopted the CSS-first `@theme` configuration to define custom brand colors (`#1E3E85`, `#336DA6`, `#F5A623`) and Poppins typography cleanly without extra config overhead.
- **Framer Motion:** Integrated to build reusable `ScrollReveal` components and smooth micro-interactions that elevate the landing page's visual appeal.
- **React Router 7:** Manages clean client-side navigation, root layouts (`Navbar`, `Footer`, `ScrollToTopButton`), and custom `404 Not Found` handling.

---

## ✨ Key Features
- 🎯 **Conversion-Focused Hero & CTA Sections:** Engaging headline, gradient backdrop, and clear call-to-action flows for both employers and remote talent.
- 🌐 **Comprehensive Landing Page Sections:** Modular sections covering *GlobalReach*, *Actually (Fee-Free Messaging)*, *Custom Profile Showcase*, *ReadyHelp Support*, *Interactive FAQ Accordion*, and *Free vs. Premium Pricing Plans*.
- ✨ **Smooth Scroll Animations:** Custom `ScrollReveal` wrapper powered by Framer Motion for fluid element entrance transitions.
- 🔍 **SEO & Social Meta Ready:** Configured Open Graph (`og:title`, `og:description`, `og:type`) and Twitter card metadata in `index.html`.
- 📱 **Fully Responsive Layout:** Seamless experience across mobile, tablet, and desktop screens with a responsive mobile navigation menu.

---

## 📦 Key Dependencies
- `react` & `react-dom` (`v19`) — Core UI library
- `react-router-dom` (`v7`) — Client-side routing and nested layout management
- `framer-motion` — Declarative scroll animations and UI transitions
- `lucide-react` — Crisp, lightweight vector icon library
- `tailwindcss` & `@tailwindcss/vite` (`v4`) — Next-generation utility-first CSS styling
- `vite` (`v8`) — High-speed frontend build tool

---

## 🧩 Challenges Faced & Solutions

1. **Configuring Custom Design Tokens in Tailwind CSS v4:**
   - *Challenge:* Tailwind CSS 4 replaced traditional `tailwind.config.js` files with a CSS-native configuration model, requiring a new approach for custom brand colors and Google Fonts (`Poppins`).
   - *Solution:* Defined custom color variables and font families directly inside `src/index.css` using the `@theme` directive, ensuring consistent design tokens across all components.

2. **Maintaining Smooth Animations Without Hurting Performance:**
   - *Challenge:* Animating multiple landing page sections simultaneously could cause layout shifts or jank on lower-end mobile devices.
   - *Solution:* Built a reusable `ScrollReveal` component with Framer Motion's viewport triggers (`once: true`) so elements animate smoothly only once when entering the screen.

---

## 📁 Project Structure

```text
remote_recruit/
├── public/              # Static assets (favicon)
├── src/
│   ├── assets/          # Images and SVGs
│   ├── Components/      # Shared UI (ScrollReveal, ScrollToTopButton)
│   ├── Layouts/         # Root layout (Navbar + Footer + Outlet)
│   ├── pages/
│   │   ├── Auth/        # Sign In & Sign Up pages
│   │   ├── Home/        # Landing page sections (Hero, GlobalReach, FAQ, Pricing, etc.)
│   │   └── NotFound.jsx # 404 page
│   ├── routes/          # React Router configuration
│   ├── index.css        # Global styles & Tailwind @theme tokens
│   └── main.jsx         # App entry point
├── index.html           # HTML shell & SEO meta tags
├── vite.config.js
└── package.json
