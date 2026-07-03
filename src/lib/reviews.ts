/**
 * Review excerpts shown in the "Reviews" section.
 *
 * TODO before launch: replace with genuine Google reviews (with reviewers'
 * names as published) or wire the Places API server-side. These are sample
 * entries in the voice of real feedback — never present invented reviews
 * as authentic.
 */
export const REVIEWS = [
  {
    name: "Fiona M.",
    date: "May 2026",
    rating: 5,
    text: "The mixed grill for two is unreal — proper charcoal flavour — and the ribeye was cooked exactly right. Booked again before we'd left.",
  },
  {
    name: "Craig D.",
    date: "April 2026",
    rating: 5,
    text: "Took the kids on a Sunday — Bella the robot waiter made their week, and the St. Lucas ice cream counter really is forty-plus flavours. Grown-up food is serious too.",
  },
  {
    name: "Elena R.",
    date: "June 2026",
    rating: 4,
    text: "Right on the seafront, charcoal smell as you walk in, and everything halal. The grilled seabass was perfect. Book ahead on weekends.",
  },
] as const;
