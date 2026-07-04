/**
 * Single source of truth for business details.
 *
 * ⚠️ LAUNCH CHECKLIST — values marked TODO are placeholders and must be
 * replaced/confirmed before going live.
 */

export const SITE = {
  name: "Cartoos",
  tagline: "Grill House & Desserts",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cartoosaberdeen.co.uk",

  phone: "+441224589132",
  phoneDisplay: "01224 589132",
  email: "info@cartoosaberdeen.co.uk", // TODO: confirm

  address: {
    street: "3-9 Esplanade",
    city: "Aberdeen",
    postcode: "AB24 5NS",
    country: "GB",
  },
  // Beach Esplanade, Aberdeen seafront. TODO: confirm exact pin from the
  // Google Business Profile.
  geo: { lat: 57.1565, lng: -2.0795 },

  instagram: "https://www.instagram.com/cartoosaberdeen/",
  facebook: "https://www.facebook.com/CartoosAberdeen/",

  // Google links derive from the Business Profile — swap the query for the
  // profile's canonical URLs when available.
  mapsQuery: "Cartoos, 3-9 Esplanade, Aberdeen AB24 5NS",
  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery)}`;
  },
  get mapsEmbedUrl() {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&output=embed`;
  },
  get reviewsUrl() {
    return this.mapsUrl;
  },

  // TODO: replace with the restaurant's live outlet URLs
  ordering: [
    { label: "Deliveroo", href: "https://deliveroo.co.uk" },
    { label: "Just Eat", href: "https://www.just-eat.co.uk" },
  ],

  /** Weekly hours. `days`: 0 = Sunday … 6 = Saturday. 24h "HH:MM". */
  hours: [
    {
      label: "Monday — Sunday",
      days: [0, 1, 2, 3, 4, 5, 6],
      open: "09:00",
      close: "22:00",
    },
  ],

  /**
   * Review snapshot shown on the site and in structured data.
   * TODO: sync with the live Google Business Profile figures (or wire up
   * the Places API server-side) before launch — these are sample values.
   */
  rating: { value: 4.8, count: 312 },
} as const;

export type HoursRow = (typeof SITE.hours)[number];

export function hoursForDay(day: number): HoursRow | undefined {
  return SITE.hours.find((h) => (h.days as readonly number[]).includes(day));
}

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function dayName(day: number) {
  return DAY_NAMES[day];
}
