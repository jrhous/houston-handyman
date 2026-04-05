# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- Full multi-page Next.js 16 website with Apollo-era NASA theme
- Home page with animated hero, service previews, stats dashboard, CTA banner
- Services page with 8 mission-patch style service cards
- Pricing page with retro console pricing table and job size tiers
- About page with crew ID badge cards, business story, and mission parameters
- Contact page with booking form and contact sidebar panels
- Gallery page with placeholder grid (photos coming soon)
- Navbar with mission control status bar, live clock, route codes, signal bars
- Footer with status strip, logo, nav links, contact info
- CRT overlay effects (scan lines, vignette, noise grain, flicker)
- Animated star field background (3 depth layers, nebula patches, shooting stars)
- Retro panel system with gradient backgrounds and corner brackets
- Physical tactile button styles with 3D shadows and LED indicators
- Terminal-style form inputs with green text and `>` prompt placeholders
- Staggered page entrance animations
- Status LED indicators (green/amber)
- GitHub Actions workflow for GitHub Pages deployment
- Custom domain support (houstonwehaveaproblem.cc)
- Contact form email delivery via Formsubmit.co to John.H@houstonwehaveaproblem.cc
- Honeypot spam protection on contact form
- Email displayed in contact page sidebar and footer

### Fixed
- Text contrast improved (white-dim opacity raised from 0.7 to 0.82)
- Route code text changed from steel-blue to white for readability
- Removed basePath for custom domain (was breaking CSS/JS asset loading)
