# Yellowtooths Design System & Patterns

This document defines the core typography, spacing, and component patterns for the Yellowtooths interview storefront (**PARFS** — a fragrance brand experience). Use these standards when creating new pages or components to ensure a consistent, editorial, luxury aesthetic.

## 1. Typography Scale

Pair an expressive **serif display** for brand and headlines with a light **sans-serif** for UI chrome (nav labels, search, icon affordances). Prefer next/font loading (e.g. Cormorant Garamond or Libre Baskerville for display; something refined and light for UI). Avoid Inter, Roboto, Arial, and generic system stacks for brand-facing type.

| Element | Mobile Class | Desktop Class | Additional Classes | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Wordmark** | `text-2xl` | `text-3xl` | `font-serif`, `tracking-[0.15em]`, `text-gray-900` | Centered nav logo (`PARFS`) |
| **Hero Headline (h1)** | `text-3xl` | `text-7xl` (`sm:text-5xl`, `md:text-6xl`) | `font-serif`, `font-thin`, `leading-[1.05]`, `tracking-tight`, `text-gray-900` | Stacked editorial lines over hero media |
| **Section Heading (h2)** | `text-2xl` | `text-4xl` | `font-serif`, `font-light`, `leading-[1.1]`, `tracking-tight`, `text-gray-900` | Collection or story section titles |
| **Body (Standard)** | `text-sm` | `text-base` | `font-light`, `leading-relaxed`, `text-gray-600` | Supporting copy under headlines |
| **Nav / UI Label** | `text-sm` | `text-sm` | `font-light`, `text-gray-700` | Search label, menu items, utility text |
| **Text Link CTA** | `text-[10px]` | `text-xs` | `font-light`, `uppercase`, `tracking-[0.2em]`, `border-b`, `border-gray-900`, `pb-1`, `text-gray-900` | Underlined collection / shop links |
| **Product Title (h3)** | `text-lg` | `text-xl` | `font-serif`, `font-light`, `tracking-tight`, `text-gray-900` | Fragrance name in product grids |
| **Price / Meta** | `text-xs` | `text-sm` | `font-light`, `tracking-wide`, `text-gray-500` | Price, size, note family |

## 2. Spacing Scale

### Section Layout
- **Page Canvas**: `min-h-screen bg-white`
- **Hero Outer Padding**: `px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8`
- **Nav Horizontal Padding**: `px-6 py-5 sm:px-8 lg:px-10`
- **Max Container Width**: `max-w-[1400px]` (centered with `mx-auto`)
- **Standard Section Vertical Padding**: `py-16 md:py-24`
- **Spacious Section Vertical Padding**: `py-20 md:py-28`

### Gaps & Margins
- **Nav Icon Cluster Gap**: `gap-6`
- **Hero Text Block Top Offset**: `pt-6 sm:pt-8 md:pt-10 lg:pt-14`
- **Hero Text Horizontal Inset**: `px-5 sm:px-8 md:px-10 lg:px-14`
- **Headline → CTA Gap**: `mt-5 sm:mt-7 md:mt-8`
- **Small Content Gap**: `gap-2` / `gap-3` (slider ticks, tight meta rows)
- **Product Grid Gap**: `gap-6 md:gap-8 lg:gap-10`
- **Hero Frame Radius**: `rounded-2xl`
- **Hero Heights**: `h-[480px] sm:h-[560px] lg:h-[640px]`

## 3. Component Patterns

### Navbar
Three-zone bar: utilities left, brand center, commerce right. Keep stroke icons thin (`strokeWidth={1.5}`) and avoid filled icon treatments.

```tsx
<nav className="relative w-full bg-white border-b border-gray-100">
  <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
    {/* Left: menu + search */}
    <div className="flex items-center gap-6">{/* ... */}</div>

    {/* Center: wordmark */}
    <div className="absolute left-1/2 -translate-x-1/2">
      <span className="font-serif text-2xl tracking-[0.15em] text-gray-900 sm:text-3xl">
        PARFS
      </span>
    </div>

    {/* Right: bag + account */}
    <div className="flex items-center gap-6">{/* ... */}</div>
  </div>
</nav>
```

### Hero Frame
Dominant media plane inside the max-width container. Overlay copy sits top-left; do not add badges, chips, or floating promo stickers on the image.

```tsx
<section className="relative mx-auto max-w-[1400px] px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
  <div className="relative h-[480px] overflow-hidden rounded-2xl bg-sky-200 sm:h-[560px] lg:h-[640px]">
    <Image
      src="/hero.png"
      alt="Model holding a perfume bottle"
      fill
      priority
      className="object-cover object-right"
      sizes="100vw"
    />
    {/* headline + text CTA + slider indicators */}
  </div>
</section>
```

### Text Link CTA
Primary conversion pattern for collection discovery. Prefer an underlined uppercase link over solid pill buttons in the hero and editorial sections.

```tsx
<a
  href="/collections"
  className="inline-block border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
>
  All Collection
</a>
```

### Hero Slider Indicators
Minimal tick marks for carousel position. Active tick is longer and darker.

```tsx
<div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 sm:left-10 lg:left-14">
  <span className="h-[2px] w-4 bg-gray-500/70" />
  <span className="h-[2px] w-4 bg-gray-500/70" />
  <span className="h-[2px] w-10 bg-gray-900" />
</div>
```

### Motion
Keep motion restrained and editorial — presence and hierarchy, not decoration noise. Prefer 2–3 intentional moments per viewport (e.g. headline fade-up, CTA underline draw, soft hero ken-burns or slide crossfade).

```tsx
// Example: headline entrance
<h1 className="font-serif font-thin tracking-tight text-gray-900 animate-in fade-in slide-in-from-bottom-2 duration-700">
  FRAGRANCE
  <br />
  BECOMES
  <br />
  MEMORY
</h1>
```

## 4. Color Palette Tokens

Drawn from the PARFS hero photography (sky studio backdrop, cream apparel, gold jewelry, ink typography).

- **Page Canvas**: `bg-white`
- **Hero Fallback / Atmosphere**: `bg-sky-200` (sky studio blue)
- **Primary Ink**: `text-gray-900` / `#111827`
- **Secondary Text**: `text-gray-600` / `text-gray-700`
- **Muted Meta**: `text-gray-500` / `bg-gray-500/70` (inactive slider ticks)
- **Hairline Borders**: `border-gray-100` (nav), `border-gray-900` (CTA underline)
- **Warm Neutral (product / apparel context)**: cream / beige ≈ `#E5D9C3`
- **Luxury Accent (jewelry / bottle hardware)**: hammered gold ≈ `#C5A46A` — use sparingly for accents, never as a full-page theme
- **Highlight**: crisp white for product glass and high-key highlights

Avoid purple-on-white themes, glow effects, rounded-full pill clusters, and multi-layer shadows. The look is clean studio luxury, not neon tech or heavy editorial newspaper grids.

## 5. Commerce & Collection Architecture

Yellowtooths / PARFS is a fragrance discovery storefront. Navigation and CTAs should funnel shoppers into collections and product detail flows rather than one-off mailto or isolated forms.

### Global CTA Strategy
Do not invent one-off destination links for each marketing block. Route shop / explore actions through the collection and product routes, and pass context when useful for analytics or merchandising.

**Format**: `href="/collections/[slug]?source=[Page_Name]"` or `href="/products/[handle]?source=[Page_Name]"`

**Examples**:
- Homepage hero: `<a href="/collections/all?source=Homepage Hero">All Collection</a>`
- Featured scent block: `<a href="/products/amber-memory?source=Featured Story">Discover</a>`
- Nav bag: links to `/cart`; account links to `/account`

### Storefront Information Architecture
1. **Nav utilities**: Menu (browse), Search (find), Bag (purchase path), Account (identity).
2. **Hero**: One brand signal (`PARFS` in nav), one stacked headline, one text CTA, one dominant image, optional slider ticks.
3. **Downstream sections** (when added): one job per section — e.g. a single collection story, a product grid, or a scent-notes narrative. Do not pack stats, schedules, or promo chips into the first viewport.
4. **Imagery**: Prefer real product / campaign photography (`/public/hero.png` pattern). Decorative gradients alone are not a substitute for the visual idea.

### Content Tone
Headlines should feel like fragrance campaign copy — short, poetic, and memorable (`FRAGRANCE BECOMES MEMORY`). Supporting sentences stay brief. Brand name in the nav is a primary identity signal; section headlines should not overpower `PARFS`.
