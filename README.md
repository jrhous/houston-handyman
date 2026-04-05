# Houston We Have A Problem

Family-owned handyman service website for Charlotte County & Sarasota County, Florida. Built with a heavy Apollo-era NASA / mission control aesthetic.

**Live:** [houstonwehaveaproblem.cc](http://houstonwehaveaproblem.cc/)

## Tech Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4** (CSS-based `@theme inline` config)
- **TypeScript**
- **GitHub Pages** (deployed via GitHub Actions)
- **Formsubmit.co** (serverless contact form emails)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services preview, why us, CTA |
| `/services` | 8 mission-patch service cards |
| `/pricing` | Retro console pricing table |
| `/about` | Crew ID badge cards, story, values |
| `/contact` | Booking form + contact sidebar |
| `/gallery` | Placeholder grid (photos coming soon) |

## Design System

- **Theme:** Apollo-era NASA mission control (CRT monitors, amber/green text, scan lines, star field)
- **Fonts:** Orbitron (headings), Space Mono (body/UI)
- **Colors:** Space black, amber (primary), CRT green (secondary), steel blue (borders)
- **Effects:** CRT scan lines, vignette, noise grain, animated star field, glow effects

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Static export to ./out
```

## Deployment

Pushes to `master` auto-deploy via GitHub Actions to GitHub Pages. Custom domain `houstonwehaveaproblem.cc` managed through Cloudflare DNS.

## Contact

- **Phone:** (941) 303-2130
- **Email:** John.H@houstonwehaveaproblem.cc
