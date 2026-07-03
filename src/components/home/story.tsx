import { Photo } from "@/components/photo";
import { Reveal, RevealLines } from "@/components/reveal";

const PROOF = [
  {
    stat: "100%",
    label: "Halal kitchen",
    detail:
      "Everything on the menu is halal — from the charcoal grill to the turkey bacon at breakfast.",
  },
  {
    stat: "40+",
    label: "Award-winning flavours",
    detail:
      "Ice cream from St. Lucas of Edinburgh — one of the best in Scotland, served all day.",
  },
  {
    stat: "7 days",
    label: "09:00 — 22:00",
    detail:
      "Breakfast, lunch, dinner and dessert — the grill runs from morning until night.",
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
                Cartoos brings Turkish and Mediterranean fire to Aberdeen&rsquo;s
                seafront — shish and kofta over live charcoal, matured Scotch
                steaks, and a welcome built for everyone at the table.
              </p>
              <p className="mt-4 font-grotesk text-base font-light leading-relaxed text-cream/70">
                Families get something extra: Bella, our robot host, delivers
                desserts to younger guests — and the ice cream counter carries
                over forty award-winning flavours from St. Lucas of Edinburgh,
                alongside fresh waffles, crepes, sizzling brownies and
                milkshakes.
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
                shot="Bella the robot host delivering dessert to a family table"
                alt="Bella, the Cartoos robot host, serving guests"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
