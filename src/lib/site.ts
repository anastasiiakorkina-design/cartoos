/**
 * Single source of truth for business details.
 *
 * ⚠️ LAUNCH CHECKLIST — values marked TODO are placeholders and must be
 * replaced with the restaurant's real details before going live.
 */

export const SITE = {
  name: "Cartoos",
  tagline: "Mediterranean Fire Kitchen",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cartoos.co.uk",

  // TODO: confirm the restaurant's real phone number
  phone: "+441224000000",
  phoneDisplay: "01224 000 000",
  email: "reservations@cartoos.co.uk", // TODO: confirm

  address: {
    street: "463 Union Street", // TODO: confirm street number
    city: "Aberdeen",
    postcode: "AB11 6DA",
    country: "GB",
  },
  // TODO: confirm exact coordinates from Google Business Profile
  geo: { lat: 57.1436, lng: -2.1178 },

  instagram: "https://instagram.com/cartoos.aberdeen", // TODO: confirm handle

  // Google links derive from the Business Profile — swap the query for the
  // profile's canonical URLs when available.
  mapsQuery: "Cartoos, 463 Union Street, Aberdeen",
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
    { label: "Monday — Thursday", days: [1, 2, 3, 4], open: "12:00", close: "22:00" },
    { label: "Friday — Saturday", days: [5, 6], open: "12:00", close: "23:00" },
    { label: "Sunday", days: [0], open: "12:30", close: "21:30" },
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
