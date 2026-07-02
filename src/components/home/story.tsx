import { Plate } from "@/components/plate";
import { Reveal, RevealLines, RevealRule } from "@/components/reveal";

export function Story() {
  return (
    <section id="story" className="relative bg-cream py-28 md:py-44">
      <div className="mx-auto max-w-[1680px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Editorial column */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <Reveal>
                <p className="type-eyebrow text-bronze">Our Story · No. 01</p>
              </Reveal>
              <RevealLines
                as="h2"
                className="type-display mt-8 text-display-lg text-charcoal"
                lines={[
                  "Fire is the",
                  "oldest recipe",
                  <em key="i" className="text-bronze">
                    we know.
                  </em>,
                ]}
              />
            </div>
            <Reveal delay={0.2} className="mt-14 max-w-md lg:mt-0">
              <p className="font-grotesk text-base font-light leading-relaxed text-charcoal/70">
                Before ovens, before kitchens, there was charcoal — and the
                patience to cook over it. At Cartoos we keep that ritual alive:
                whole cuts over glowing embers, vegetables blistered in their
                own sweetness, bread pulled from the stone still breathing
                smoke.
              </p>
              <p className="mt-6 font-grotesk text-base font-light leading-relaxed text-charcoal/70">
                Our kitchen carries the Mediterranean north — olive oil and
                sea salt, charred lemon and wild herbs — and marries it with
                the best of Scotland: hand-cut Aberdeenshire beef, North Sea
                catch, dairy from the hills an hour from our door.
              </p>
              <RevealRule className="mt-10 w-24 text-charcoal" />
              <p className="type-eyebrow mt-6 text-charcoal/50">
                Union Street, Aberdeen
              </p>
            </Reveal>
          </div>

          {/* Imagery — offset editorial pair */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <Reveal className="col-span-8" y={60}>
                <Plate
                  variant="coals"
                  label="Charcoal embers glowing in the grill"
                  className="aspect-[4/5] w-full"
                />
                <p className="type-eyebrow mt-4 text-charcoal/45">
                  The hearth — lit at dawn, raked by hand
                </p>
              </Reveal>
              <Reveal className="col-span-4 mt-20 md:mt-32" y={90} delay={0.15}>
                <Plate
                  variant="olive"
                  label="Olive branches in soft Mediterranean light"
                  className="aspect-[3/4] w-full"
                />
                <p className="type-eyebrow mt-4 text-charcoal/45">
                  Olive · lemon · thyme
                </p>
              </Reveal>
            </div>
            {/* Floating quote */}
            <Reveal
              delay={0.3}
              className="pointer-events-none absolute -bottom-10 right-0 hidden max-w-xs bg-olive p-8 text-cream lg:block"
            >
              <p className="type-display text-2xl italic leading-snug">
                “Everything worth tasting takes time over fire.”
              </p>
              <p className="type-eyebrow mt-5 text-sand/80">The Kitchen</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
