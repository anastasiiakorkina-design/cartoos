# CARTOOS — Grill House & Desserts

Production-focused website for Cartoos Aberdeen: a fully halal
Turkish-Mediterranean charcoal grill on the beach Esplanade (3-9 Esplanade,
AB24 5NS), open 09:00–22:00 seven days — breakfast through to St. Lucas
ice cream. Editorial design in the spirit of HIDE London / The Ivy, built
so every section either builds trust, showcases food, answers a question,
or drives a booking.

## What's here

**Conversion surface**
- Reservation flow: validated form → `POST /api/reservations` → reference +
  confirmation state, with phone fallback throughout
- Sticky mobile Call / Book bar (hides while the form is on screen)
- Click-to-call everywhere (`tel:`), live "Open now / opens at" status
  computed in Europe/London time
- Order-online strip with delivery partner links
- Google Maps embed + directions link, opening hours, parking answers
- Google-style reviews section + rating in the hero trust strip
- FAQ accordion (native `<details>`) with FAQPage structured data

**QR menu (new)**
- `src/components/menu-qr.tsx` — server-rendered QR SVG linking to
  `/menu?src=qr` (scan attribution), zero client JS
- `/menu/qr` — printable A4 sheet of four table cards (print styles
  included); QR also appears in the footer
- Menu deep links (`/menu#steaks`) and hash changes select the right
  category

**Menu experience**
- The restaurant's real menu (~150 dishes) in ten chapters with
  subsections, animated switching, vegetarian/vegan filtering, the
  restaurant's published allergen codes on every dish, signature markers
  and price leaders

**SEO & accessibility**
- Restaurant JSON-LD (hours, geo, rating, ReserveAction), FAQPage JSON-LD,
  canonical URLs, sitemap, robots
- Skip link, visible focus states, labelled forms, `aria-pressed`
  filters, `prefers-reduced-motion` support, WCAG AA-minded contrast

**Photography**
- Real images pending: every slot renders a clearly labelled placeholder
  (in-brand generative art, never stock). Shot list: `PHOTOGRAPHY.md`.

## Launch checklist

Search the codebase for `TODO` — remaining placeholders live in
`src/lib/site.ts` (email, exact map pin, social handles, delivery partner
URLs, review figures) and `src/lib/reviews.ts` (replace sample reviews
with genuine Google reviews or a Places API integration). Address, phone
and opening hours are the restaurant's real details. Wire
`src/app/api/reservations/route.ts` to the booking system or an inbox at
the marked integration point. Then shoot and drop in photography per
`PHOTOGRAPHY.md`.

Set `NEXT_PUBLIC_SITE_URL` if deploying somewhere other than
`https://www.cartoosaberdeen.co.uk` (QR codes and canonical URLs derive
from it).

## Design system

- **Type**: Fraunces (display — warm, characterful serif, optical sizing +
  soft axis) with Archivo for labels and body
- **Colour**: Cartoos' signature red leads — crimson `#C8102E` for CTAs,
  deep crimson `#9D1428` on light grounds, dark wine `#43070F` section,
  rose `#EE6C63` on dark — over charcoal/ink and warm cream, with
  copper-gold as fine detail

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion
(restrained) · Lenis · `qrcode`. All pages static except the reservations
API route.

```bash
npm install
npm run dev    # develop
npm run build  # production build
npm run start  # serve
```
