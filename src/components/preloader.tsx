"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const LETTERS = "CARTOOS".split("");

/**
 * Opening sequence: the wordmark rises letter by letter over glowing
 * charcoal, then the curtain lifts to reveal the site.
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: EASE }}
          aria-hidden
        >
          {/* charcoal glow rising */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-2/3"
            style={{
              background:
                "radial-gradient(60% 55% at 50% 100%, rgba(188,122,75,0.35), rgba(154,106,58,0.12) 55%, transparent 80%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.5 }}
          />
          <div className="relative text-center">
            <div className="type-display flex text-[clamp(3rem,10vw,8rem)] text-cream">
              {LETTERS.map((l, i) => (
                <span key={i} className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + i * 0.06,
                      ease: EASE,
                    }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </div>
            <motion.p
              className="type-eyebrow mt-6 text-copper-bright"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Mediterranean Fire Kitchen
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
