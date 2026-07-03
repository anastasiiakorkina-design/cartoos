import Link from "next/link";
import { SITE } from "@/lib/site";
import { Photo } from "@/components/photo";
import { Reveal, RevealLines } from "@/components/reveal";
import { CtaButton } from "@/components/button";
import type { PlateVariant } from "@/components/plate";

const HIGHLIGHTS: {
  name: string;
  price: string;
  detail: string;
  variant: PlateVariant;
  shot: string;
  href: string;
}[] = [
  {
    name: "Ribeye, 12oz",
    price: "£36",
    detail: "28-day dry-aged Aberdeenshire beef, bone-marrow butter",
    variant: "steak",
    shot: "Ribeye resting over embers, side light",
    href: "/menu#steaks",
  },
  {
    name: "Whole Sea Bream",
    price: "£24",
    detail: "Day-boat catch, charred lemon, wild oregano oil",
    variant: "coast",
    shot: "Whole bream on the grill bars, smoke visible",
    href: "/menu#sea",
  },
  {
    name: "Lamb Chops, Wild Thyme",
    price: "£26",
    detail: "Scottish lamb over charcoal, smoked sea salt",
    variant: "coals",
    shot: "Lamb chops plated on stone, macro",
    href: "/menu#grill",
  },
  {
    name: "Artisan Gelato",
    price: "£8",
    detail: "Three scoops from today's forty flavours, churned daily",
    variant: "dessert",
    shot: "Gelato counter, three scoops close-up",
    href: "/menu#desserts",
  },
];

export function MenuHighlights() {
  return (
    <section aria-labelledby="highlights-heading" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="type-eyebrow text-bronze">From the fire</p>
            </Reveal>
            <RevealLines
              as="h2"
              className="type-display mt-5 text-display-md text-charcoal"
              lines={[
                <span key="l" id="highlights-heading">
                  What we&rsquo;re <em className="text-bronze">known for.</em>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.1}>
            <Link href="/menu" className="link-line type-eyebrow text-charcoal">
              See the full menu →
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.08} className="h-full">
              <li className="group h-full">
                <Link href={h.href} className="block h-full">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                      <Photo
                        variant={h.variant}
                        shot={h.shot}
                        alt={h.name}
                        className="aspect-[4/5] w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-charcoal/15 pb-4">
                    <h3 className="type-display text-2xl text-charcoal transition-colors duration-300 group-hover:text-bronze">
                      {h.name}
                    </h3>
                    <p className="type-display text-xl text-bronze">{h.price}</p>
                  </div>
                  <p className="mt-3 font-grotesk text-sm font-light leading-relaxed text-charcoal/60">
                    {h.detail}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Order strip — delivery & collection */}
        <Reveal delay={0.15}>
          <div
            id="order"
            className="mt-16 flex scroll-mt-28 flex-col items-start justify-between gap-6 border border-charcoal/15 p-7 md:mt-20 md:flex-row md:items-center md:p-9"
          >
            <div>
              <h3 className="type-display text-2xl text-charcoal md:text-3xl">
                Cartoos at home
              </h3>
              <p className="mt-2 max-w-md font-grotesk text-sm font-light text-charcoal/60">
                The charcoal menu, delivered or ready for collection.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {SITE.ordering.map((o) => (
                <a
                  key={o.label}
                  href={o.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/order relative overflow-hidden border border-charcoal/30 px-7 py-4"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-y-full bg-charcoal transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/order:translate-y-0"
                  />
                  <span className="type-eyebrow relative text-charcoal transition-colors duration-500 group-hover/order:text-cream">
                    Order on {o.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
