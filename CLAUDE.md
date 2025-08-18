# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for MPChat, a service that combines secure messaging with virtual/physical payment cards. The site is designed as a static export for deployment on Cloudflare Pages using React 19 and TypeScript.

## Key Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (uses next/core-web-vitals and next/typescript configs)

### Deployment
- `npm run export` - Build static site for Cloudflare Pages (same as `npm run build`)
- `npm run deploy` - Build and deploy to production on Cloudflare Pages
- `npm run deploy:preview` - Build and deploy to preview environment
- `npm run pages:dev` - Local preview of exported build using Wrangler

### Manual Deployment
```bash
# Build and deploy manually
npm run export
wrangler pages deploy out
```

## Architecture

### Project Structure
- **`src/app/`** - Next.js App Router pages (TSX files)
  - `page.tsx` - Home page
  - `layout.tsx` - Root layout with metadata
  - `globals.css` - Global styles and custom animations
  - `card/` - Card-related pages with shared layout
  - `news/` - News pages with detail subdirectories
  - `about/`, `privacy/`, etc. - Static content pages
- **`src/components/`** - Reusable React components
  - `Header.tsx` - Main navigation with mobile menu
  - `Layout.tsx` - Page layout wrapper with back-to-top
  - `Footer.tsx` - Site footer
  - `card/Footer.tsx` - Card-specific footer
- **`public/`** - Static assets (images, fonts, documents)
- **`out/`** - Built static files (generated during export)

### Technology Stack
- **Next.js 15** with App Router and static export
- **React 19** with TypeScript 5
- **Tailwind CSS 4** with PostCSS plugin
- **Custom fonts**: Redotpay and RedotpayBold (loaded from `/fonts/`)
- **Client-side navigation** with trailing slashes enabled

### Key Patterns
- **Static Export**: Configured for Cloudflare Pages hosting
- **Responsive Design**: Mobile-first with `md:` breakpoints
- **Custom Animations**: Scroll-triggered animations in `globals.css`
- **Image Optimization**: Disabled for static export compatibility
- **Client Components**: Use `'use client'` directive for interactivity

### Routing Structure
- `/` - Home page
- `/card/` - Card overview with shared layout
- `/card/personal/` - Personal card information
- `/card/corporate/` - Business card information  
- `/news/` - News listing page
- `/news/detail/[1-6]/` - Individual news articles
- `/about/`, `/privacy/`, `/program-terms/`, `/user-agreement/` - Static pages

## Deployment Configuration

### Cloudflare Pages Setup
- **Build Command**: `npm run export` (static export)
- **Output Directory**: `out/`
- **Environment**: Production and preview environments in `wrangler.toml`

### Static Asset Optimization
- **Caching Headers**: Configured in `_headers` for assets and HTML
- **Security Headers**: X-Frame-Options, Content-Type-Options, etc.
- **SPA Fallback**: `_redirects` handles client-side routing

### Environment Variables (.env.local)
```bash
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
NEXT_PUBLIC_SITE_URL=https://mpchat-webside.pages.dev
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Development Workflow

### Code Quality
- **ESLint**: Flat config with Next.js and TypeScript rules
- **TypeScript**: Strict mode enabled with Next.js types
- **Code Style**: Follow existing patterns in components

### Component Architecture
- **Header Component**: Client-side navigation with `usePathname` for active states
- **Layout Components**: Wrap pages with consistent structure
- **Responsive Patterns**: Mobile menu toggles, responsive classes

### Asset Management
- **Images**: Use Next.js `Image` component with `unoptimized: true`
- **Static Files**: Place in `public/` directory
- **Fonts**: Custom fonts loaded from `/fonts/` directory

## Important Notes

- **Static Export Only**: No server-side features (API routes, SSR)
- **Chinese Locale**: Root layout uses `lang="zh-CN"`
- **Build Output**: Always use `out/` directory for deployments
- **Mobile-First**: Design and develop with mobile users as priority