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
    text: "The côte de boeuf for two, carved at the table, was the best steak we've had in Aberdeen. Booked again before we'd left.",
  },
  {
    name: "Craig D.",
    date: "April 2026",
    rating: 5,
    text: "Took the kids on a Sunday — the robot waiter made their week and the ice cream counter is genuinely forty-plus flavours. Grown-up food is serious too.",
  },
  {
    name: "Elena R.",
    date: "June 2026",
    rating: 4,
    text: "Beautiful room, charcoal smell as you walk in, service warm without hovering. Sea bream on the bone was perfect. Book ahead on weekends.",
  },
] as const;
