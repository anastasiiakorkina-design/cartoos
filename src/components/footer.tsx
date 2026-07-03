import Link from "next/link";
import { SITE } from "@/lib/site";
import { MenuQr } from "@/components/menu-qr";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-20 md:px-10 md:pb-10 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="type-display text-3xl">CARTOOS</p>
            <p className="type-eyebrow mt-3 text-copper-bright">
              {SITE.tagline}
            </p>
            <Link
              href="/#reservations"
              className="link-line type-eyebrow mt-8 inline-block text-cream"
            >
              Book a Table
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="type-eyebrow text-cream/40">Visit</p>
            <address className="mt-5 space-y-1 font-grotesk text-sm font-light not-italic leading-relaxed text-cream/75">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.city}, {SITE.address.postcode}
              </p>
            </address>
            <div className="mt-4 space-y-1 font-grotesk text-sm font-light text-cream/75">
              <p>
                <a href={`tel:${SITE.phone}`} className="link-line">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="link-line">
                  {SITE.email}
                </a>
              </p>
              <p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line"
                >
                  Get directions
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="type-eyebrow text-cream/40">Hours</p>
            <ul className="mt-5 space-y-3 font-grotesk text-sm font-light text-cream/75">
              {SITE.hours.map((h) => (
                <li key={h.label}>
                  <span className="block text-cream/45">{h.label}</span>
                  {h.open} — {h.close}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="type-eyebrow text-cream/40">Explore</p>
            <ul className="mt-5 space-y-3 font-grotesk text-sm font-light text-cream/75">
              <li>
                <Link href="/menu" className="link-line">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/private-dining" className="link-line">
                  Private Dining
                </Link>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* QR menu */}
          <div className="lg:col-span-2">
            <p className="type-eyebrow text-cream/40">Menu on your phone</p>
            <div className="mt-5 inline-block bg-cream p-3">
              <MenuQr className="h-24 w-24 [&_svg]:h-full [&_svg]:w-full" />
            </div>
            <p className="mt-3 max-w-[12rem] font-grotesk text-xs font-light leading-relaxed text-cream/50">
              Scan to browse the menu.{" "}
              <Link href="/menu/qr" className="link-line text-cream/75">
                Printable table cards →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-3 font-grotesk text-xs font-light text-cream/40 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} {SITE.name}. {SITE.address.street},{" "}
              {SITE.address.city} {SITE.address.postcode}.
            </p>
            <p>Fully halal · Charcoal · Smoke · Sea</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
