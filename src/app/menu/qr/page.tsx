import type { Metadata } from "next";
import Link from "next/link";
import { MenuQr } from "@/components/menu-qr";
import { PrintTrigger } from "@/components/print-trigger";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "QR Menu Table Cards",
  description:
    "Printable QR code table cards linking to the Cartoos digital menu.",
  robots: { index: false },
};

/**
 * Printable table cards: four per A4 sheet. Staff open this page and hit
 * print — guests scan and land on /menu with scan attribution.
 */
export default function MenuQrPage() {
  return (
    <main id="main" className="min-h-screen bg-cream">
      {/* Screen-only toolbar */}
      <div className="no-print border-b border-charcoal/10 bg-charcoal text-cream">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
          <div>
            <p className="type-display text-xl">QR menu · table cards</p>
            <p className="mt-1 font-grotesk text-xs font-light text-cream/60">
              Print on A4 · cut along the marks · one card per table. Codes
              open {SITE.url}/menu
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/menu" className="link-line type-eyebrow text-cream/70">
              ← Back to menu
            </Link>
            <PrintTrigger />
          </div>
        </div>
      </div>

      {/* Card sheet */}
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 p-8 sm:grid-cols-2 print:max-w-none print:grid-cols-2 print:gap-0 print:p-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center border border-dashed border-charcoal/30 bg-cream px-8 py-10 text-center print:break-inside-avoid"
          >
            <p className="type-display text-3xl text-charcoal">CARTOOS</p>
            <p className="type-eyebrow mt-2 text-claret">{SITE.tagline}</p>
            <div className="mt-7 bg-cream">
              <MenuQr
                dark="#181818"
                className="h-36 w-36 [&_svg]:h-full [&_svg]:w-full"
              />
            </div>
            <p className="type-eyebrow mt-7 text-charcoal/70">
              Scan for the menu
            </p>
            <p className="mt-2 font-grotesk text-xs font-light text-charcoal/50">
              or ask for a printed copy
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
