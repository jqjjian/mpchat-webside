# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for MPChat, a service that combines secure messaging with virtual/physical payment cards. The site is designed as a static export for deployment on Cloudflare Pages.

## Key Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Deployment
- `npm run export` - Build static site for Cloudflare Pages
- `npm run deploy` - Deploy to production on Cloudflare Pages
- `npm run deploy:preview` - Deploy to preview environment
- `npm run pages:dev` - Local preview of exported build

### Manual Deployment
```bash
# Build and deploy manually
npm run export
wrangler pages deploy out
```

## Architecture

### File Structure
- `src/app/` - Next.js app router pages
- `src/components/` - Shared React components
- `src/app/card/` - Card-specific pages (personal/business)
- `public/` - Static assets
- `out/` - Built static files (generated during export)

### Key Components
- `Header.tsx` - Navigation header with responsive menu
- `Layout.tsx` - Main layout with back-to-top button
- `Footer.tsx` - Site footer with contact options
- `src/components/card/Footer.tsx` - Card-specific footer

### Styling
- Tailwind CSS with custom configurations
- Custom animations for scroll-triggered elements
- Responsive design for mobile and desktop
- Custom fonts (Redotpay and RedotpayBold)

### Routing
- `/` - Home page
- `/card/personal` - Personal card information
- `/card/corporate` - Business card information

## Deployment Process

The site is configured for Cloudflare Pages deployment:

1. Build with `next build` (static export)
2. Output to `out/` directory
3. Deploy using Wrangler CLI or GitHub Actions

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
- `CLOUDFLARE_API_TOKEN` - For deployment
- `CLOUDFLARE_ACCOUNT_ID` - For deployment
- `NEXT_PUBLIC_SITE_URL` - Site URL
- `NEXT_PUBLIC_API_URL` - API endpoint

### GitHub Actions
- Automatic deployment on push to `main` branch
- Preview deployments for pull requests

## Configuration Files

- `next.config.js` - Next.js configuration with static export settings
- `wrangler.toml` - Cloudflare Wrangler configuration
- `_headers` - Security and caching headers
- `_redirects` - SPA routing fallback
- `deploy.sh` - Manual deployment script