import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Photo } from "@/components/photo";
import { Reveal, RevealLines, RevealRule } from "@/components/reveal";
import { CtaButton } from "@/components/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "The Ember Room — private dining for 8 to 24 guests at Cartoos Aberdeen. Business dinners, celebrations and chef's table experiences.",
  alternates: { canonical: "/private-dining" },
};

const OCCASIONS = [
  {
    title: "The Chef's Table",
    detail:
      "Six seats at the pass, watching the coals work. A tasting journey chosen that morning, poured and plated by the people who made it.",
    meta: "6 guests · evenings",
  },
  {
    title: "The Ember Room",
    detail:
      "Our private room in stone and walnut, warmed by its own hearth. Business dinners, anniversaries and family gatherings up to twenty-four.",
    meta: "8–24 guests · lunch & dinner",
  },
  {
    title: "Whole-Restaurant Takeover",
    detail:
      "The room, the grill and the atelier, yours for the night. Weddings, launches and the parties people talk about for years.",
    meta: "Up to 90 guests · by arrangement",
  },
];

export default function PrivateDiningPage() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-charcoal-warm text-cream">
        <header className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-52">
          <div className="mx-auto max-w-[1680px] px-6 md:px-10">
            <Reveal>
              <p className="type-eyebrow text-rose">Private Dining</p>
            </Reveal>
            <RevealLines
              as="h1"
              className="type-display mt-8 text-display-xl"
              lines={["A room of", <em key="i" className="text-sand">your own.</em>]}
            />
            <Reveal delay={0.25} className="mt-10 max-w-xl">
              <p className="font-grotesk text-base font-light leading-relaxed text-cream/65">
                Behind the main dining room, past the glow of the grill, is a
                quieter kind of evening — private tables set in stone and
                candlelight, with the whole kitchen at their service.
              </p>
            </Reveal>
          </div>
        </header>

        <section className="mx-auto max-w-[1680px] px-6 pb-16 md:px-10">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            <Reveal y={50}>
              <Photo variant="smoke" shot="The Ember Room set for dinner, candlelit" alt="Candlelit private dining room" className="aspect-[3/4] w-full" />
            </Reveal>
            <Reveal y={70} delay={0.1} className="md:mt-16">
              <Photo variant="steak" shot="Côte de boeuf carved tableside" alt="Côte de boeuf carved at the table" className="aspect-[3/4] w-full" />
            </Reveal>
            <Reveal y={50} delay={0.2}>
              <Photo variant="olive" shot="Table detail — olive branches, linen, glassware" alt="Olive branches on the private table" className="aspect-[3/4] w-full" />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1680px] px-6 pb-28 md:px-10 md:pb-40">
          {OCCASIONS.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <article className="group grid gap-4 border-t border-cream/12 py-10 md:grid-cols-12 md:items-baseline md:py-14">
                <span className="type-eyebrow text-cream/35 md:col-span-1">
                  0{i + 1}
                </span>
                <h2 className="type-display text-3xl transition-colors duration-500 group-hover:text-rose md:col-span-4 md:text-4xl">
                  {o.title}
                </h2>
                <p className="max-w-md font-grotesk text-sm font-light leading-relaxed text-cream/60 md:col-span-5">
                  {o.detail}
                </p>
                <p className="type-eyebrow text-sand/70 md:col-span-2 md:text-right">
                  {o.meta}
                </p>
              </article>
            </Reveal>
          ))}
          <RevealRule className="w-full text-cream" />

          <Reveal delay={0.2} className="mt-16 flex flex-col items-start gap-8 md:mt-20 md:flex-row md:items-center md:justify-between">
            <p className="type-display max-w-xl text-display-sm">
              Tell us the occasion —{" "}
              <em className="text-sand">we&rsquo;ll build the evening.</em>
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-6">
              <CtaButton href="/#reservations" solid>
                Enquire Now
              </CtaButton>
              <a
                href={`tel:${SITE.phone}`}
                className="link-line type-eyebrow text-cream"
              >
                or call {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
