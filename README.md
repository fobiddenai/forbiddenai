# Forbidden AI

Studio site for [forbiddenai.in](https://forbiddenai.in) — software, consulting, and AI. Built in India, shipped worldwide.

> *"We keep the useful parts. The rest stays forbidden."*

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Observability**: [@vercel/analytics](https://vercel.com/analytics) & [@vercel/speed-insights](https://vercel.com/speed-insights)
- **Hosting**: [Vercel](https://vercel.com/)

---

## Project Structure

```
forbiddenai/
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About page
│   ├── approach/         # Process and approach page
│   ├── contact/          # Inquiries and contact page
│   ├── services/         # Practice offerings page
│   ├── globals.css       # Tailwind CSS v4 imports & theme variables
│   ├── layout.tsx        # Root layout with fonts, metadata, and analytics
│   └── page.tsx          # Homepage
├── components/           # Reusable UI components
│   ├── PageIntro.tsx     # Page headers, intro frames, and metadata tags
│   ├── SectionRule.tsx   # Subtle horizontal dividers
│   ├── SiteFooter.tsx    # Site-wide navigation footer
│   ├── SiteHeader.tsx    # Sticky blurred header with brand wordmark
│   ├── SlashMark.tsx     # Brand prohibition watermark SVG
│   └── Wordmark.tsx      # Optimized Next.js brand logo
├── lib/
│   └── site.ts           # Single source of truth for copy, navigation, & meta
└── public/
    └── logos/            # Brand marks and vector assets
```

---

## Getting Started

### Prerequisites

- Node.js (v18.17+ or later)
- npm / pnpm / yarn

### Installation

```bash
npm install
```

### Development

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized static production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npx tsc --noEmit
```

---

## Content & Copy

All site text, service descriptions, navigation links, and company metadata are centralized in [`lib/site.ts`](lib/site.ts). To update copy or add navigation items, modify the exported structures in that file.

---

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com/):
- **Automatic Image Optimization**: Logo and assets are served in modern formats (AVIF/WebP) via edge CDN.
- **Core Web Vitals Monitoring**: Vercel Speed Insights and Analytics track real-world performance out of the box.
