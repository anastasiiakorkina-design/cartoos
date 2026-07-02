"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MENU } from "@/lib/menu-data";
import { Plate } from "@/components/plate";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MenuExperience() {
  const [active, setActive] = useState(MENU[0].id);
  const reduce = useReducedMotion();
  const category = MENU.find((c) => c.id === active) ?? MENU[0];

  // Deep links from the homepage: /menu#steaks etc.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && MENU.some((c) => c.id === hash)) setActive(hash);
  }, []);

  return (
    <div className="mx-auto max-w-[1680px] px-6 pb-28 md:px-10 md:pb-44">
      {/* Category navigation */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[72px] z-30 -mx-6 border-b border-cream/12 bg-ink/90 px-6 backdrop-blur-md md:top-[84px] md:-mx-10 md:px-10"
      >
        <div className="flex gap-7 overflow-x-auto py-5 [scrollbar-width:none] md:gap-10 [&::-webkit-scrollbar]:hidden">
          {MENU.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-current={c.id === active}
              className={`type-eyebrow relative shrink-0 pb-1 transition-colors duration-400 ${
                c.id === active ? "text-copper-bright" : "text-cream/45 hover:text-cream/80"
              }`}
            >
              {c.label}
              {c.id === active && (
                <motion.span
                  layoutId="menu-underline"
                  className="absolute inset-x-0 -bottom-[21px] h-px bg-copper-bright"
                  transition={{ duration: 0.5, ease: EASE }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Category body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-10"
        >
          {/* Category portrait */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-44">
              <Plate
                variant={category.variant}
                label={category.label}
                className="aspect-[4/5] w-full max-lg:max-h-[46vh]"
              />
              <h2 className="type-display mt-8 text-display-sm text-cream">
                {category.label}
              </h2>
              <p className="mt-4 max-w-md font-grotesk text-sm font-light leading-relaxed text-cream/60">
                {category.intro}
              </p>
            </div>
          </div>

          {/* Items */}
          <ul className="lg:col-span-7 lg:pt-2">
            {category.items.map((item, i) => (
              <motion.li
                key={item.name}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: EASE }}
                className="group border-b border-cream/12 py-7 first:pt-0 md:py-8"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="type-display text-2xl text-cream transition-colors duration-400 group-hover:text-copper-bright md:text-3xl">
                    {item.name}
                    {item.signature && (
                      <span
                        className="type-eyebrow ml-4 align-middle text-copper-bright/80"
                        title="Cartoos signature"
                      >
                        Signature
                      </span>
                    )}
                  </h3>
                  <span
                    aria-hidden
                    className="hidden h-px grow bg-cream/10 transition-colors duration-500 group-hover:bg-copper/40 sm:block"
                  />
                  <p className="type-display shrink-0 text-xl text-sand md:text-2xl">
                    {item.price === "M/P" ? "M/P" : `£${item.price}`}
                  </p>
                </div>
                <p className="mt-3 max-w-lg font-grotesk text-sm font-light leading-relaxed text-cream/55">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
