import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Instrument_Sans,
  Inter_Tight,
} from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cartoos.co.uk"),
  title: {
    default: "CARTOOS — Mediterranean Fire Kitchen | Aberdeen",
    template: "%s — CARTOOS Aberdeen",
  },
  description:
    "Mediterranean fire, crafted in Aberdeen. Charcoal-grilled steaks, coastal flavours and forty artisan ice creams — a premium grill house on Union Street.",
  keywords: [
    "Cartoos",
    "Aberdeen restaurant",
    "charcoal grill Aberdeen",
    "Mediterranean restaurant Aberdeen",
    "premium steakhouse Scotland",
    "private dining Aberdeen",
  ],
  openGraph: {
    title: "CARTOOS — Mediterranean Fire Kitchen",
    description:
      "A premium charcoal grill experience where Mediterranean flavours meet modern European elegance. Aberdeen, Scotland.",
    locale: "en_GB",
    type: "website",
    siteName: "CARTOOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "CARTOOS — Mediterranean Fire Kitchen",
    description: "Mediterranean fire, crafted in Aberdeen.",
  },
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
  name: "Cartoos",
  alternateName: "Cartoos Mediterranean Fire Kitchen",
  servesCuisine: ["Mediterranean", "Charcoal Grill", "Steakhouse"],
  priceRange: "£££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "463 Union Street",
    addressLocality: "Aberdeen",
    addressRegion: "Scotland",
    postalCode: "AB11 6DB",
    addressCountry: "GB",
  },
  telephone: "+44 1224 000 000",
  acceptsReservations: "True",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${interTight.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <div aria-hidden className="grain-page" />
      </body>
    </html>
  );
}
