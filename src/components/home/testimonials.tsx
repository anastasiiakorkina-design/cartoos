"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const QUOTES = [
  {
    text: "The closest Aberdeen gets to a Michelin room — and the steak was the best I've had north of London.",
    name: "Fiona M.",
    context: "Anniversary dinner",
  },
  {
    text: "Forty ice cream flavours and a robot that made my daughter's year. Somehow it all still feels elegant.",
    name: "Craig & family",
    context: "Sunday lunch",
  },
  {
    text: "We book Cartoos for every client dinner now. The room, the fire, the service — it does the talking for us.",
    name: "Elena R.",
    context: "Business dining",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const quote = QUOTES[index];

  return (
    <section className="relative bg-olive-deep py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <Reveal>
          <p className="type-eyebrow text-sand">Word of Mouth · No. 06</p>
        </Reveal>

        <div aria-hidden className="type-display mt-10 select-none text-8xl leading-none text-copper/60 md:text-9xl">
          “
        </div>

        <div className="relative mt-2 min-h-[12rem] md:min-h-[10rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="type-display mx-auto max-w-3xl text-2xl leading-snug md:text-4xl">
                {quote.text}
              </p>
              <footer className="mt-8">
                <p className="type-eyebrow text-cream/80">{quote.name}</p>
                <p className="type-eyebrow mt-2 text-cream/40">{quote.context}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              type="button"
              aria-label={`Show quote ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-px w-12 transition-all duration-500 ${
                i === index ? "bg-copper-bright" : "bg-cream/25 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
