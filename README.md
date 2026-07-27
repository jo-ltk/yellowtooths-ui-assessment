# PARFS

An editorial fragrance storefront built with Next.js. Soft product storytelling, scroll-driven motion, and a clean shopping flow for browsing, wishlist, and cart.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- React 19 & TypeScript
- Tailwind CSS
- GSAP + Lenis (smooth scroll & section reveals)
- Framer Motion (UI motion)
- Base UI / shadcn components

## Features

- Full-bleed hero with auto-advancing slides
- Editorial homepage sections (collections, product grids, lifestyle stories)
- Cart and wishlist with toast feedback
- Smooth scrolling and scroll-triggered reveals

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint               |

## Project structure

```
app/           # Routes (home, cart, wishlist)
components/    # Page sections, UI, and motion helpers
context/       # Cart and wishlist state
lib/           # Shared utilities
public/        # Static images and assets
```

## Design notes

Typography pairs Cormorant Garamond (display) with Geist (UI). Spacing, type scale, and component patterns are documented in [`DESIGN_PATTERNS.md`](./DESIGN_PATTERNS.md).
