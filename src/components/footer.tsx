import Link from "next/link";
import { RevealRule } from "@/components/reveal";

const HOURS = [
  ["Monday — Thursday", "12:00 — 22:00"],
  ["Friday — Saturday", "12:00 — 23:00"],
  ["Sunday", "12:30 — 21:30"],
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-ink text-cream">
      <div className="mx-auto max-w-[1680px] px-6 pb-10 pt-24 md:px-10 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-eyebrow text-copper-bright">
              Mediterranean Fire Kitchen
            </p>
            <p className="type-display mt-6 max-w-md text-display-sm text-cream/90">
              The table is set. The fire is lit.
            </p>
            <Link
              href="/#reservations"
              className="link-line type-eyebrow mt-10 inline-block text-cream"
            >
              Book a Table
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="type-eyebrow text-cream/40">Visit</p>
            <address className="mt-6 space-y-1 font-grotesk text-sm font-light not-italic leading-relaxed text-cream/75">
              <p>463 Union Street</p>
              <p>Aberdeen, AB11 6DB</p>
              <p>Scotland</p>
            </address>
            <div className="mt-6 space-y-1 font-grotesk text-sm font-light text-cream/75">
              <p>
                <a href="tel:+441224000000" className="link-line">
                  +44 (0) 1224 000 000
                </a>
              </p>
              <p>
                <a href="mailto:reservations@cartoos.co.uk" className="link-line">
                  reservations@cartoos.co.uk
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="type-eyebrow text-cream/40">Hours</p>
            <ul className="mt-6 space-y-3 font-grotesk text-sm font-light text-cream/75">
              {HOURS.map(([d, h]) => (
                <li key={d}>
                  <span className="block text-cream/45">{d}</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="type-eyebrow text-cream/40">Follow</p>
            <ul className="mt-6 space-y-3 font-grotesk text-sm font-light text-cream/75">
              <li>
                <a
                  href="https://instagram.com/cartoos.aberdeen"
                  target="_blank"
                  rel="noreferrer"
                  className="link-line"
                >
                  Instagram
                </a>
              </li>
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
            </ul>
          </div>
        </div>

        {/* Large wordmark */}
        <div className="mt-24 overflow-hidden md:mt-32">
          <p
            aria-hidden
            className="type-display select-none whitespace-nowrap text-center text-[clamp(4rem,14.5vw,15rem)] leading-none text-cream/[0.14]"
          >
            CARTOOS
          </p>
        </div>

        <RevealRule className="mt-6 w-full text-cream" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 font-grotesk text-xs font-light text-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Cartoos Ltd. Aberdeen, Scotland.</p>
          <p>Charcoal · Stone · Smoke · Sea</p>
        </div>
      </div>
    </footer>
  );
}
