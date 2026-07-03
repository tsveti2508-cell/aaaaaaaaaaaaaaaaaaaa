# Portfolio — Tsvetelina (2D Concept Artist)

## Original problem statement
User asked to build a portfolio site. Iterated on preferences:
- Subject: 2D concept artist targeting a Riot Games internship (artist: Tsvetelina)
- Content sourced from https://www.artstation.com/tsvetelina
- Style: bold & creative, dark theme with gold (#C8AA6E) accent
- Sections: Hero + About + Projects + Skills + Contact
- Display font: **Impact** (uppercase, condensed)
- Hero background: user-supplied ArtStation collage photograph

## Architecture
- Frontend only — no backend integrations required
- FastAPI backend is untouched (default `/api/` + `/api/status` still work)
- Static data lives in `/app/frontend/src/data/portfolio.js`
- Sonner used for the "Email copied" toast; Shadcn `Dialog` used for project detail view
- react-fast-marquee installed but no longer used (marquees removed per user request)

## User personas
- **Recruiters / Art Directors at Riot Games** — need to scan work quickly, see range (character, skin concept, illustration, traditional), and reach out
- **Casual visitors** — should feel the artist's personality and portfolio quality

## Core requirements (static)
- All 4 ArtStation projects with verbatim descriptions and multi-image gallery in dialog
- Hero uses artist's own painting collage as background
- Impact font for all display headings; Outfit for body
- Contact block: copy email, mailto, ArtStation + Instagram links
- Responsive: mobile hamburger menu

## What's been implemented (2026-12)
- Hero with real ArtStation collage background + Impact "TSVETELINA" title
- About with grayscale->color avatar hover, bio, meta grid
- Projects bento grid with 4 real ArtStation projects (Blood Moon Kai'sa, Tarot Cards, James McAvoy portrait, Ulquiorra/Bleach)
- Project dialog shows full multi-image ArtStation gallery + verbatim description
- Skills section with disciplines list + tools grid (no marquees per user request)
- Contact section with copy-to-clipboard email + social links (ArtStation, Instagram, Email)
- Sticky glass-blur nav with mobile menu
- Sonner toast integration
- All interactive elements have `data-testid` attributes

## Prioritized backlog
- **P1**: Add resume/CV download link (recruiter conversion boost)
- **P1**: SEO metadata (OG image, description) for shareable links
- **P2**: Contact form backed by Resend for direct inquiries (integration required)
- **P2**: Filter tabs on projects grid (Character / Skin / Traditional / Illustration)
- **P3**: Case-study long-form pages for individual projects
- **P3**: Motion polish — Framer Motion staggered reveals on scroll

## Next tasks
1. Ship as-is / gather user feedback
2. Optional: add Resend contact form
3. Optional: replace placeholder email `hello@tsvetelina.art` with real address
