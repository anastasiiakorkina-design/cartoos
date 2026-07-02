"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Embers } from "@/components/embers";
import { CtaButton } from "@/components/button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yType = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Mouse-driven depth
  const mx = useSpring(0, { stiffness: 40, damping: 16 });
  const my = useSpring(0, { stiffness: 40, damping: 16 });
  const glowX = useTransform(mx, (v) => v * 22);
  const glowY = useTransform(my, (v) => v * 14);
  const typeX = useTransform(mx, (v) => v * -8);
  const typeY = useTransform(my, (v) => v * -5);

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-cream"
    >
      {/* Charcoal glow bed */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ y: yGlow, x: glowX, translateY: glowY }}
      >
        <div
          className="animate-ember absolute inset-x-[-10%] bottom-[-12%] h-[70%]"
          style={{
            background:
              "radial-gradient(58% 60% at 50% 100%, rgba(188,122,75,0.42), rgba(154,106,58,0.16) 52%, transparent 78%)",
          }}
        />
        <div
          className="absolute inset-x-[10%] bottom-[-6%] h-[38%]"
          style={{
            background:
              "radial-gradient(45% 55% at 50% 100%, rgba(217,154,104,0.28), transparent 72%)",
          }}
        />
        {/* Drifting smoke veils */}
        <div
          className="animate-drift absolute left-[8%] top-[18%] h-[55%] w-[45%] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "#d9c9b5" }}
        />
        <div
          className="animate-drift-slow absolute right-[4%] top-[30%] h-[50%] w-[40%] rounded-full opacity-[0.05] blur-3xl"
          style={{ background: "#a8a49b" }}
        />
      </motion.div>

      <Embers density={34} />

      {/* Composition */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1680px] px-6 pb-14 pt-36 md:px-10 md:pb-20"
        style={{ opacity: fade, y: yType }}
      >
        <motion.p
          className="type-eyebrow mb-8 text-copper-bright md:mb-12"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Aberdeen · Est. on charcoal
        </motion.p>

        <motion.h1
          className="type-display text-display-xl"
          style={reduce ? undefined : { x: typeX, y: typeY }}
        >
          {["Mediterranean", "Fire."].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, delay: 2.3 + i * 0.14, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <motion.span
              className="block italic text-sand"
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, delay: 2.58, ease: EASE }}
            >
              Crafted in Aberdeen.
            </motion.span>
          </span>
        </motion.h1>

        <motion.div
          className="mt-12 flex flex-col items-start justify-between gap-10 md:mt-16 md:flex-row md:items-end"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: EASE }}
        >
          <p className="max-w-sm font-grotesk text-base font-light leading-relaxed text-cream/70">
            A premium charcoal grill where Mediterranean flavours meet modern
            European elegance — steak, smoke and sea, in the heart of the
            Granite City.
          </p>
          <div className="flex flex-wrap gap-4">
            <CtaButton href="/#reservations" solid>
              Book a Table
            </CtaButton>
            <CtaButton href="/menu" tone="dark">
              Explore Menu
            </CtaButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
        style={{ opacity: fade }}
      >
        <div className="h-14 w-px overflow-hidden bg-cream/15">
          <motion.div
            className="h-1/2 w-full bg-copper-bright"
            animate={reduce ? undefined : { y: ["-100%", "220%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
