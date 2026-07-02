"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Embers } from "@/components/embers";
import { Reveal, RevealLines, RevealRule } from "@/components/reveal";

function Stat({
  value,
  suffix,
  label,
  detail,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  detail: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2.2, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = String(value);
      return;
    }
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v));
    });
  }, [spring, reduce, value]);

  return (
    <Reveal delay={delay} className="border-t border-cream/15 pt-8">
      <p className="type-display text-6xl text-cream md:text-7xl">
        <span ref={ref}>0</span>
        <span className="text-copper-bright">{suffix}</span>
      </p>
      <p className="type-eyebrow mt-4 text-sand/80">{label}</p>
      <p className="mt-3 max-w-[16rem] font-grotesk text-sm font-light leading-relaxed text-cream/55">
        {detail}
      </p>
    </Reveal>
  );
}

export function FireExperience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="grain relative overflow-hidden bg-ink py-32 text-cream md:py-48"
    >
      {/* Live charcoal bed */}
      <motion.div aria-hidden className="absolute inset-0" style={{ y: glowY }}>
        <div
          className="animate-ember absolute inset-x-[-15%] bottom-[-20%] h-[75%]"
          style={{
            background:
              "radial-gradient(55% 55% at 50% 100%, rgba(188,122,75,0.34), rgba(154,106,58,0.12) 55%, transparent 80%)",
          }}
        />
        <div className="animate-drift absolute left-[15%] top-[10%] h-[45%] w-[38%] rounded-full bg-smoke opacity-[0.06] blur-3xl" />
      </motion.div>
      <Embers density={30} />

      <div className="relative mx-auto max-w-[1680px] px-6 md:px-10">
        <Reveal>
          <p className="type-eyebrow text-copper-bright">
            The Fire Experience · No. 03
          </p>
        </Reveal>
        <RevealLines
          as="h2"
          className="type-display mt-8 max-w-5xl text-display-lg"
          lines={[
            "Charcoal at 400 degrees.",
            <span key="l2">
              Patience at <em className="text-sand">every one of them.</em>
            </span>,
          ]}
        />
        <Reveal delay={0.25} className="mt-10 max-w-xl">
          <p className="font-grotesk text-base font-light leading-relaxed text-cream/65">
            The grill is the only appliance we brag about. Everything else is
            craft — ingredients chosen that morning, steaks cut by hand, ice
            cream churned in small batches, and a service team (with one very
            polite robot for the little ones) that treats dinner as theatre.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
          <Stat
            value={400}
            suffix="°"
            label="Over live charcoal"
            detail="Real embers, raked by hand through service. No gas, no shortcuts."
            delay={0}
          />
          <Stat
            value={28}
            suffix=" days"
            label="Dry-aged beef"
            detail="Aberdeenshire cuts, butchered and aged in-house before they meet the fire."
            delay={0.1}
          />
          <Stat
            value={40}
            suffix="+"
            label="Artisan ice creams"
            detail="Churned daily in our dessert atelier — pistachio to smoked honey."
            delay={0.2}
          />
          <Stat
            value={1}
            suffix=""
            label="Robot maître d'"
            detail="Our gentle host on wheels, delighting younger guests while the kitchen works the coals."
            delay={0.3}
          />
        </div>

        <RevealRule className="mt-24 w-full text-cream" delay={0.2} />
        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
          {["Fresh ingredients", "Hand-cut steaks", "Stone oven", "Family theatre"].map(
            (t) => (
              <span key={t} className="type-eyebrow text-cream/45">
                {t}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}
