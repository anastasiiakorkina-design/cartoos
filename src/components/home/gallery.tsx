"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Plate, type PlateVariant } from "@/components/plate";
import { Reveal, RevealLines } from "@/components/reveal";

type Item = {
  variant: PlateVariant;
  caption: string;
  ratio: string;
};

const COLUMNS: Item[][] = [
  [
    { variant: "coals", caption: "The hearth, mid-service", ratio: "aspect-[3/4]" },
    { variant: "coast", caption: "North Sea, five miles east", ratio: "aspect-[4/3]" },
    { variant: "dessert", caption: "Pistachio, churned at four", ratio: "aspect-square" },
  ],
  [
    { variant: "smoke", caption: "Smoke over the pass", ratio: "aspect-[4/5]" },
    { variant: "steak", caption: "Côte de boeuf, resting", ratio: "aspect-[3/4]" },
    { variant: "olive", caption: "Olive & thyme, the doorway", ratio: "aspect-[4/3]" },
  ],
  [
    { variant: "stone", caption: "Flatbread on granite", ratio: "aspect-square" },
    { variant: "mezze", caption: "Ember vegetables", ratio: "aspect-[3/4]" },
    { variant: "coals", caption: "Last coals of the night", ratio: "aspect-[4/3]" },
  ],
];

function Column({
  items,
  progress,
  speed,
  className = "",
}: {
  items: Item[];
  progress: MotionValue<number>;
  speed: number;
  className?: string;
}) {
  const y = useTransform(progress, [0, 1], [speed * 60, speed * -60]);
  return (
    <motion.div className={`flex flex-col gap-4 md:gap-6 ${className}`} style={{ y }}>
      {items.map((item) => (
        <figure key={item.caption} className="group relative overflow-hidden">
          <div className="transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
            <Plate variant={item.variant} label={item.caption} className={`${item.ratio} w-full`} />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/80 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="type-eyebrow translate-y-2 text-cream transition-transform duration-500 group-hover:translate-y-0">
              {item.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="gallery" ref={ref} className="relative overflow-hidden bg-cream pb-28 pt-8 md:pb-44">
      <div className="mx-auto max-w-[1680px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="type-eyebrow text-bronze">Gallery · No. 05</p>
            </Reveal>
            <RevealLines
              as="h2"
              className="type-display mt-6 text-display-md text-charcoal"
              lines={[
                <span key="l">
                  Nights at <em className="text-bronze">Cartoos.</em>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs font-grotesk text-sm font-light leading-relaxed text-charcoal/60">
              Fire, stone, smoke and sea — the textures of an evening on Union
              Street.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-3 md:gap-6">
          <Column items={COLUMNS[0]} progress={scrollYProgress} speed={0.6} />
          <Column items={COLUMNS[1]} progress={scrollYProgress} speed={1.4} className="mt-12 md:mt-20" />
          <Column
            items={COLUMNS[2]}
            progress={scrollYProgress}
            speed={0.9}
            className="col-span-2 grid grid-cols-2 gap-4 md:col-span-1 md:mt-8 md:flex md:gap-6"
          />
        </div>
      </div>
    </section>
  );
}
