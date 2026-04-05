# Technical Decisions

## 1. Tailwind CSS v4 (CSS-based config)

**Decision:** Use `@theme inline` in `globals.css` instead of `tailwind.config.ts`
**Reason:** Next.js 16 ships with Tailwind v4 which uses CSS-based configuration. The old JS config file approach is deprecated.
**Impact:** All custom colors, fonts, and theme tokens are defined in `src/app/globals.css`.

## 2. Static Export (no server)

**Decision:** Use `output: "export"` for fully static site
**Reason:** GitHub Pages only serves static files. No server-side rendering or API routes.
**Impact:** No API routes, no server components with data fetching, images must be `unoptimized: true`.

## 3. No basePath

**Decision:** Removed `basePath: "/houston-handyman"` from next.config.ts
**Reason:** Custom domain (houstonwehaveaproblem.cc) serves from root. basePath was causing all CSS/JS assets to 404.
**Impact:** Site works at domain root. If ever moved back to `jrhous.github.io/houston-handyman`, basePath would need to be re-added.

## 4. Formsubmit.co for form emails

**Decision:** Use Formsubmit.co free tier for contact form → email delivery
**Reason:** Static site can't run server code. Formsubmit requires no account setup — just POST to their endpoint with the target email. Includes honeypot spam protection.
**Impact:** Free tier has submission limits. First submission requires email confirmation click.

## 5. DOM-based star field (no canvas)

**Decision:** Generate stars as positioned `<div>` elements instead of `<canvas>`
**Reason:** Simpler implementation, works with CSS animations, no canvas API complexity.
**Impact:** May be less performant with many stars but fine for the ~150 stars used.

## 6. Route codes in navbar

**Decision:** Changed route codes from `text-steel-blue` to `text-white/50`
**Reason:** User reported steel-blue text was unreadable against the dark background (too low contrast).

## 7. GitHub account: jrhous

**Decision:** Deploy to `jrhous` GitHub account
**Reason:** User confirmed jrhous is the correct account after initial confusion.
