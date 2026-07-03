# Portfolio — Tsvetelina Shopova (2D Concept Artist)

## Original problem statement
Portfolio site for a 2D concept artist targeting a Riot Games internship. Real content sourced from https://www.artstation.com/tsvetelina (username: tsvetelina). All copy, artist bio, and project data provided by the artist.

## User personas
- Recruiters / Art Directors at Riot Games (and adjacent studios)
- Casual visitors browsing the artist's work

## Architecture
- Static React portfolio — no backend integrations required
- Default FastAPI `/api/` and `/api/status` endpoints are untouched
- Static data lives in `/app/frontend/src/data/portfolio.js`
- Shadcn `Dialog` used for project detail view; `Sonner` for the copy-email toast

## Sections (top to bottom)
1. Hero — collage background from ArtStation, artist name in Impact, "2D Concept Artist" subtitle
2. About Me — artist bio (student at Hazne University, Creative Media & Game Technology)
3. Internship Direction — two cards: Artistic Mindset + Growth & Goals
4. Portfolio — 4 real ArtStation projects (Kai'sa Blood Moon skin concept with 4-image gallery, Tarot Cards, James McAvoy portrait, Ulquiorra traditional concept art) — each opens a dialog with verbatim descriptions and full image galleries
5. Skills — two panels (Software & Programmes / Creative Focus) with chip-style pills in Impact font
6. Contact — copy-to-clipboard email, mailto, ArtStation, Instagram
7. Footer — copyright line

## Design decisions locked in with user
- Display font: **Impact** (system font with Anton fallback) — uppercase, condensed
- Body font: Outfit
- Accent color: #C8AA6E (soft gold)
- Dark background: #050505
- Nav order: About Me · Internship · Portfolio · Skills · Contact
- Contact email: Tsveti2508@gmail.com
- All year labels removed; all "01/02/03/04" numbering removed

## Verified via testing_agent
- iteration_1: initial verification (had 2 blockers: image field mismatch, marquee testid)
- iteration_2: same blockers reproduced — subsequently fixed (renamed p.image → p.cover; marquees removed by user request)
- iteration_3: anchor navigation fully working after id renames + scroll-margin-top:90px
- iteration_4: Kai'sa dialog gallery — all 4 real ArtStation images rendering (naturalWidth=1920), captions attached, external ArtStation link intact

## What's been implemented (final)
- Full portfolio site with 6 sections
- All 4 real ArtStation projects with proper multi-image galleries and verbatim descriptions
- Kai'sa gallery: 4 real ArtStation image URLs (main + E form, gold acrylic note, basic outline, colour progress) with detailed custom captions provided by the artist
- Impact font applied to all display headings and skill chips
- Real ArtStation collage as hero background
- Contact section wired with Tsveti2508@gmail.com and copy-to-clipboard toast

## Prioritized backlog
- P1: Add CV/resume PDF download button in Contact
- P1: Open Graph / social preview metadata (og:image, og:title, og:description) for shareable links
- P2: Resend-powered contact form (integration required)
- P2: Filter tabs on the Portfolio grid (Character / Skin / Illustration / Traditional)
- P3: Case-study long-form pages per project
- P3: Framer Motion staggered reveals on scroll

## Next tasks
- (User indicated they are happy with the current state.)
- Optional shipping tasks above whenever they want to iterate further.
