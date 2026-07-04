"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise reveal on scroll, once. */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Headline reveal: each line rises out of a mask, staggered.
 * Visibility is observed on the (unclipped) heading element itself —
 * the masked children sit outside the viewport rect until they animate,
 * so they can never trigger their own IntersectionObserver.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Comp = Tag as "h2";

  return (
    <Comp ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.16em] -mb-[0.16em]">
          <motion.span
            className={`block will-change-transform ${lineClassName ?? ""}`}
            initial={reduce ? false : { y: "110%" }}
            animate={reduce ? undefined : inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.12,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

/** Hairline rule that draws itself in. */
export function RevealRule({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} aria-hidden className={`h-px ${className}`}>
      <motion.div
        className="h-full w-full origin-left bg-current opacity-20"
        initial={reduce ? false : { scaleX: 0 }}
        animate={reduce ? undefined : inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      />
    </div>
  );
}
