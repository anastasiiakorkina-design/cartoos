# CARTOOS — Mediterranean Fire Kitchen

A luxury brand transformation for Cartoos Aberdeen: a premium charcoal grill
experience where Mediterranean flavours meet modern European elegance.
Editorial typography, cinematic motion, and a fully self-contained visual
system — closer to a Michelin-inspired grill house than a takeaway.

## Brand system

| Token | Value | Role |
| --- | --- | --- |
| Deep Olive | `#30362F` | Grounding green, signature sections |
| Warm Cream | `#F6F2EA` | Editorial canvas |
| Charcoal Black | `#181818` | Cinematic grounds |
| Burnt Bronze | `#9A6A3A` | Serif accents, warmth |
| Copper | `#BC7A4B` | The accent — buttons, embers, heat |
| Soft Sand | `#D9C9B5` | Italic display lines, captions |
| Muted Sage | `#8A9278` | Olive-grove tones |

**Typography** — Instrument Serif (editorial display, in the spirit of
Canela / PP Editorial New), Inter Tight (grotesk eyebrows and body detail),
Instrument Sans (body). Massive clamp-based display scale, 0.32em-tracked
uppercase eyebrows.

**Imagery** — every "photograph" is generative: art-directed SVG
compositions of blurred light and colour in the brand palette
(`src/components/plate.tsx`), layered with film grain and a live ember
canvas (`src/components/embers.tsx`). No stock photography, no external
assets, zero layout shift.

## Experience

- Opening sequence: wordmark rises over glowing charcoal, curtain lifts
- Hero with mouse-driven depth, drifting smoke, rising embers
- Editorial story section, magazine split layout
- Three signature experiences with masked hover reveals
- The Fire Experience: animated statistics over a live charcoal bed
- Chef Selection: pinned horizontal scroll with origin/fire/ingredient cards
- Gallery: parallax masonry columns with hover captions
- Testimonials, luxury reservation form with copper detailing
- Interactive menu (`/menu`) — six chapters, category filtering, deep links
- Private dining (`/private-dining`) — chef's table, Ember Room, takeovers

## Stack

Next.js 15 (App Router, fully static) · TypeScript · Tailwind CSS 4 ·
Framer Motion · Lenis smooth scrolling. JSON-LD restaurant schema, OpenGraph
metadata, sitemap and robots included. All motion respects
`prefers-reduced-motion`.

## Development

```bash
npm install
npm run dev    # develop
npm run build  # production build (static)
npm run start  # serve production build
```
