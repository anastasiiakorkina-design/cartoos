import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal, RevealLines } from "@/components/reveal";
import { MenuExperience } from "@/components/menu/menu-experience";
import { CtaButton } from "@/components/button";
import { StickyCta } from "@/components/sticky-cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu — Charcoal Grill, Steaks, Seafood & Gelato",
  description:
    "The Cartoos menu: charcoal-grilled Aberdeenshire steaks, North Sea fish, stone-oven dishes and 40+ artisan ice creams. Vegetarian, vegan and gluten-free marked.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-ink text-cream">
        <header className="grain relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-44">
          <div
            aria-hidden
            className="absolute inset-x-[-10%] bottom-[-40%] h-[70%]"
            style={{
              background:
                "radial-gradient(55% 55% at 50% 100%, rgba(188,122,75,0.24), transparent 78%)",
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="type-eyebrow text-copper-bright">
                The menu · changes with the season
              </p>
            </Reveal>
            <RevealLines
              as="h1"
              className="type-display mt-6 text-display-lg"
              lines={[
                "Fire, stone,",
                <em key="i" className="text-sand">
                  smoke &amp; sea.
                </em>,
              ]}
            />
            <Reveal
              delay={0.2}
              className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <p className="max-w-md font-grotesk text-base font-light leading-relaxed text-cream/65">
                Six chapters, one grill. At the restaurant? This is the same
                menu behind the QR code on your table.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaButton href="/#reservations" solid className="shrink-0">
                  Book a Table
                </CtaButton>
                <CtaButton href="/#order" tone="dark" className="shrink-0">
                  Order Online
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </header>

        <MenuExperience />

        {/* Bottom conversion band */}
        <section className="border-t border-cream/10">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-10">
            <p className="type-display max-w-xl text-2xl md:text-3xl">
              Seen enough? <em className="text-sand">The fire&rsquo;s already lit.</em>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <CtaButton href="/#reservations" solid>
                Book a Table
              </CtaButton>
              <a
                href={`tel:${SITE.phone}`}
                className="link-line type-eyebrow text-cream"
              >
                or call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
