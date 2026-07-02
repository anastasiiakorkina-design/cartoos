"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Plate, type PlateVariant } from "@/components/plate";
import { Reveal, RevealLines } from "@/components/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const EXPERIENCES: {
  index: string;
  title: string;
  note: string;
  detail: string;
  variant: PlateVariant;
  href: string;
}[] = [
  {
    index: "01",
    title: "Charcoal Grill",
    note: "Fire & smoke",
    detail:
      "Whole cuts, sea fish and vegetables cooked over restaurant-grade charcoal — nothing between the flame and the plate.",
    variant: "coals",
    href: "/menu#grill",
  },
  {
    index: "02",
    title: "Premium Steaks",
    note: "Hand-cut, dry-aged",
    detail:
      "Aberdeenshire beef, butchered in-house and rested over embers. Finished with smoked sea salt and olive oil.",
    variant: "steak",
    href: "/menu#steaks",
  },
  {
    index: "03",
    title: "Artisan Desserts",
    note: "Forty flavours, made here",
    detail:
      "An atelier of ice cream — forty artisan flavours churned daily — alongside warm desserts from the stone oven.",
    variant: "dessert",
    href: "/menu#desserts",
  },
];

export function Signatures() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-olive py-28 text-cream md:py-44">
      <div className="mx-auto max-w-[1680px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="type-eyebrow text-sand">Signature Experiences · No. 02</p>
            </Reveal>
            <RevealLines
              as="h2"
              className="type-display mt-8 text-display-lg"
              lines={["Three rituals,", <em key="i" className="text-sand">one flame.</em>]}
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs font-grotesk text-sm font-light leading-relaxed text-cream/60">
              Every table at Cartoos passes through fire. These are the three
              journeys we are known for.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.index}
              initial={reduce ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
            >
              <Link href={exp.href} className="group block">
                <div className="relative overflow-hidden">
                  <div className="transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]">
                    <Plate
                      variant={exp.variant}
                      label={exp.title}
                      className="aspect-[3/4] w-full"
                    />
                  </div>
                  {/* Hover veil with detail */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-7 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <p className="translate-y-4 font-grotesk text-sm font-light leading-relaxed text-cream/85 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                      {exp.detail}
                    </p>
                  </div>
                  <span className="type-eyebrow absolute left-6 top-6 text-cream/70">
                    {exp.index}
                  </span>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-cream/15 pb-6">
                  <div>
                    <h3 className="type-display text-3xl md:text-4xl">
                      {exp.title}
                    </h3>
                    <p className="type-eyebrow mt-3 text-sand/70">{exp.note}</p>
                  </div>
                  <span
                    aria-hidden
                    className="text-xl text-sand transition-transform duration-500 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
