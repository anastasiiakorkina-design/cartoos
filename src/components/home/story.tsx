import { Photo } from "@/components/photo";
import { Reveal, RevealLines } from "@/components/reveal";

const PROOF = [
  {
    stat: "400°",
    label: "Live charcoal",
    detail: "Real embers raked by hand through every service — no gas, no shortcuts.",
  },
  {
    stat: "28 days",
    label: "Dry-aged in-house",
    detail: "Aberdeenshire beef, butchered and aged on site before it meets the fire.",
  },
  {
    stat: "40+",
    label: "Artisan ice creams",
    detail: "Churned daily in our dessert atelier — plus a robot host the kids adore.",
  },
];

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="bg-olive py-20 text-cream md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="type-eyebrow text-sand">Why Cartoos</p>
            </Reveal>
            <RevealLines
              as="h2"
              className="type-display mt-5 text-display-md"
              lines={[
                <span key="a" id="story-heading">
                  Fire is the oldest
                </span>,
                <em key="b" className="text-sand">
                  recipe we know.
                </em>,
              ]}
            />
            <Reveal delay={0.15} className="mt-8 max-w-lg">
              <p className="font-grotesk text-base font-light leading-relaxed text-cream/70">
                Cartoos brings the Mediterranean north — olive oil, charred
                lemon, wild herbs — and cooks it with the best of Scotland
                over live charcoal. A dining room for birthdays and business
                dinners; a dessert counter and a robot host for the family
                table.
              </p>
            </Reveal>

            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              {PROOF.map((p, i) => (
                <Reveal key={p.label} delay={0.1 + i * 0.08}>
                  <div className="border-t border-cream/20 pt-5">
                    <dt className="sr-only">{p.label}</dt>
                    <dd>
                      <p className="type-display text-4xl text-cream">
                        {p.stat}
                      </p>
                      <p className="type-eyebrow mt-2 text-sand/80">{p.label}</p>
                      <p className="mt-2 font-grotesk text-xs font-light leading-relaxed text-cream/55">
                        {p.detail}
                      </p>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Reveal y={40} className="mt-10">
              <Photo
                variant="coals"
                shot="The open grill mid-service, embers glowing"
                alt="The charcoal grill at Cartoos"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
            <Reveal y={60} delay={0.1}>
              <Photo
                variant="smoke"
                shot="Dining room at dusk, candlelit tables"
                alt="The Cartoos dining room"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
