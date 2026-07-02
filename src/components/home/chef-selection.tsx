"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plate, type PlateVariant } from "@/components/plate";
import { Reveal, RevealLines } from "@/components/reveal";

const DISHES: {
  name: string;
  origin: string;
  method: string;
  ingredients: string;
  variant: PlateVariant;
}[] = [
  {
    name: "Côte de Boeuf",
    origin: "Aberdeenshire, 28-day aged",
    method: "Rested over dying embers",
    ingredients: "Smoked sea salt · bone marrow butter · charred shallot",
    variant: "steak",
  },
  {
    name: "Whole Sea Bream",
    origin: "North Sea, day-boat catch",
    method: "Charcoal-grilled on the bone",
    ingredients: "Charred lemon · wild oregano · first-press olive oil",
    variant: "coast",
  },
  {
    name: "Ember Vegetables",
    origin: "Walled gardens, Deeside",
    method: "Buried in warm ash",
    ingredients: "Smoked yoghurt · dukkah · herb oil",
    variant: "mezze",
  },
  {
    name: "Stone Oven Flatbread",
    origin: "Milled flour, slow ferment",
    method: "Baked on granite at 380°",
    ingredients: "Za'atar · olive oil · sea salt flakes",
    variant: "stone",
  },
  {
    name: "Pistachio & Smoked Honey",
    origin: "The dessert atelier",
    method: "Churned in small batches",
    ingredients: "Sicilian pistachio · heather honey · burnt cream",
    variant: "dessert",
  },
];

export function ChefSelection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-62%"]);

  return (
    <section className="relative bg-cream">
      {/* Pinned horizontal experience */}
      <div ref={ref} className="relative h-[380vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1680px] px-6 md:px-10">
            <Reveal>
              <p className="type-eyebrow text-bronze">Chef Selection · No. 04</p>
            </Reveal>
            <RevealLines
              as="h2"
              className="type-display mt-6 text-display-md text-charcoal"
              lines={[
                <span key="l">
                  This season, <em className="text-bronze">from the pass.</em>
                </span>,
              ]}
            />
          </div>

          <motion.div
            className="mt-12 flex gap-6 pl-6 md:mt-16 md:gap-10 md:pl-10"
            style={{ x }}
          >
            {DISHES.map((d, i) => (
              <article
                key={d.name}
                className="group w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw] xl:w-[26vw]"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
                    <Plate
                      variant={d.variant}
                      label={d.name}
                      className="aspect-[4/5] w-full"
                    />
                  </div>
                </div>
                <div className="mt-5 border-t border-charcoal/15 pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="type-display text-2xl text-charcoal md:text-3xl">
                      {d.name}
                    </h3>
                    <span className="type-eyebrow text-charcoal/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <dl className="mt-4 space-y-2 font-grotesk text-sm font-light text-charcoal/65">
                    <div className="flex gap-3">
                      <dt className="type-eyebrow w-20 shrink-0 pt-[3px] text-charcoal/40">
                        Origin
                      </dt>
                      <dd>{d.origin}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="type-eyebrow w-20 shrink-0 pt-[3px] text-charcoal/40">
                        Fire
                      </dt>
                      <dd>{d.method}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="type-eyebrow w-20 shrink-0 pt-[3px] text-charcoal/40">
                        With
                      </dt>
                      <dd>{d.ingredients}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
            {/* End card */}
            <div className="flex w-[60vw] shrink-0 items-center justify-center sm:w-[40vw]">
              <a href="/menu" className="link-line type-display text-3xl italic text-bronze md:text-4xl">
                See the full menu →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
