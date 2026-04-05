# Project Context

## What Is This?

Marketing website for "Houston We Have A Problem," a family-owned handyman service in Charlotte & Sarasota Counties, FL. Apollo-era NASA mission control theme throughout.

## Current State

**Status:** Live at houstonwehaveaproblem.cc
**Repo:** github.com/jrhous/houston-handyman (GitHub Pages)
**Branch:** master (auto-deploys on push)

All 6 pages are built and deployed. Contact form is wired to email via Formsubmit.co. The site is functional but has pending enhancements (see TODO.md).

## Key Architecture

- **Next.js 16** with App Router, static export (`output: "export"`)
- **Tailwind CSS v4** — uses CSS-based `@theme inline` in `globals.css`, NOT `tailwind.config.ts`
- **Fonts:** Orbitron (headings) + Space Mono (body) via `next/font/google`
- **Deployment:** GitHub Actions → GitHub Pages, custom domain via Cloudflare DNS
- **Form handling:** Formsubmit.co (POST to `https://formsubmit.co/ajax/{email}`)

## Important Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | All theme variables, CRT effects, animations, component styles |
| `src/app/layout.tsx` | Root layout (fonts, nav, footer, overlays) |
| `src/components/Navbar.tsx` | Mission control nav with status bar and live clock |
| `src/components/Hero.tsx` | Animated hero with staggered entrance |
| `src/components/BookingForm.tsx` | Contact form → Formsubmit.co → email |
| `src/components/StarField.tsx` | DOM-based animated star background |
| `src/components/CRTOverlay.tsx` | 4-layer CRT screen effect |
| `next.config.ts` | Static export config (no basePath for custom domain) |
| `.github/workflows/deploy.yml` | GitHub Pages deploy pipeline |

## GitHub Auth

- Account: `jrhous`
- Auth method: Personal access token via `gh auth login --with-token`
- Remote URL has token embedded (may need updating if token expires)

## Contacts

- **Owners:** John Houston & Christian Trowbridge
- **Phone:** (941) 303-2130
- **Email:** John.H@houstonwehaveaproblem.cc
