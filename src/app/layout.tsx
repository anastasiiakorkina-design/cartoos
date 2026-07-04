import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE, dayName } from "@/lib/site";

/**
 * Typography: Fraunces — a warm, characterful display serif whose soft
 * "old-style" curves suit a grill house that is also a dessert parlour —
 * with Archivo doing the quiet work of labels and body. Optical sizing
 * keeps it crisp from masthead to menu line.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-serif-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Cartoos Grill House & Desserts — Aberdeen Beach | Book a Table",
    template: "%s — Cartoos Aberdeen",
  },
  description:
    "Halal charcoal grill on Aberdeen's beach Esplanade — steaks, Turkish-Mediterranean mezze, breakfast from 9am and 40+ award-winning St. Lucas ice creams. Book a table or order online.",
  keywords: [
    "Cartoos Aberdeen",
    "halal restaurant Aberdeen",
    "restaurant Aberdeen beach",
    "charcoal grill Aberdeen",
    "steak restaurant Aberdeen",
    "Turkish restaurant Aberdeen",
    "Mediterranean restaurant Aberdeen",
    "breakfast Aberdeen",
    "ice cream Aberdeen",
    "family restaurant Aberdeen",
    "book a table Aberdeen",
  ],
  openGraph: {
    title: "Cartoos Grill House & Desserts — Aberdeen Beach",
    description:
      "Halal charcoal grill on the Esplanade — steaks, shish and kofta, breakfast from 9am, and 40+ award-winning ice creams. Book a table.",
    locale: "en_GB",
    type: "website",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartoos Aberdeen — Halal Charcoal Grill on the Beach",
    description:
      "Book a table: charcoal-grilled steaks, Turkish-Mediterranean mezze and 40+ ice cream flavours on Aberdeen's seafront.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#181818",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE.url}#restaurant`,
  name: SITE.name,
  alternateName: `${SITE.name} ${SITE.tagline}`,
  url: SITE.url,
  servesCuisine: [
    "Turkish",
    "Mediterranean",
    "Halal",
    "Steakhouse",
    "Breakfast",
  ],
  priceRange: "££",
  telephone: SITE.phone,
  email: SITE.email,
  menu: `${SITE.url}/menu`,
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: "Scotland",
    postalCode: SITE.address.postcode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMap: SITE.mapsUrl,
  sameAs: [SITE.instagram, SITE.facebook],
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => dayName(d)),
    opens: h.open,
    closes: h.close,
  })),
  // TODO: keep in sync with the live Google Business Profile figures.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/#reservations`,
      inLanguage: "en-GB",
    },
    result: { "@type": "FoodEstablishmentReservation" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${archivo.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
