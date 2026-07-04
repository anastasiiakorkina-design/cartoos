"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import type { ResolvedSlide } from "@/lib/slides";
import { OpenStatus } from "@/components/open-status";
import { CtaButton } from "@/components/button";
import { Plate } from "@/components/plate";

const EASE = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 6500;

function Stars({ value }: { value: number }) {
  return (
    <span aria-hidden className="tracking-[0.15em] text-rose">
      {"★".repeat(Math.round(value))}
    </span>
  );
}

export function Hero({ slides }: { slides: ResolvedSlide[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);
  const count = slides.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  // Autoplay — off entirely under prefers-reduced-motion.
  useEffect(() => {
    if (reduce || paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearInterval(t);
  }, [reduce, paused, count]);

  // Keyboard navigation while the hero has focus.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const slide = slides[index];

  return (
    <section
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Signature dishes from the Cartoos kitchen"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-cream outline-none"
    >
      {/* ——— Slide media ——— */}
      <div aria-hidden className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Ken Burns drift restarts each time the slide becomes active */}
            <div
              key={i === index ? `active-${index}` : `idle-${i}`}
              className={`h-full w-full ${
                !reduce && i === index ? "animate-kenburns" : ""
              }`}
            >
              {s.src ? (
                <Image
                  src={s.src}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <Plate variant={s.variant} className="h-full w-full" drift={false} />
              )}
            </div>
          </div>
        ))}
        {/* Scrims: keep type luxurious and legible over any image */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
        {/* Ember bed in Cartoos red */}
        <div
          className="absolute inset-x-[-10%] bottom-[-12%] h-[50%]"
          style={{
            background:
              "radial-gradient(58% 60% at 50% 100%, rgba(200,16,46,0.28), rgba(111,29,27,0.12) 55%, transparent 80%)",
          }}
        />
      </div>

      {/* ——— Composition ——— */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-32 md:px-10 md:pb-14">
        <motion.p
          className="type-eyebrow mb-7 text-rose"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Charcoal grill · Halal · {SITE.address.street}, Aberdeen Beach
        </motion.p>

        <h1 className="type-display max-w-5xl text-[clamp(2.8rem,7.5vw,7rem)]">
          <span className="block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.16em] -mb-[0.16em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
            >
              Mediterranean fire,
            </motion.span>
          </span>
          <span className="block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.16em] -mb-[0.16em]">
            <motion.span
              className="block italic text-rose"
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.28, ease: EASE }}
            >
              crafted in Aberdeen.
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-9 flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        >
          <div className="max-w-md">
            <div className="flex flex-wrap gap-4">
              <CtaButton href="#reservations" solid>
                Book a Table
              </CtaButton>
              <CtaButton href="/menu" tone="dark">
                View Menu
              </CtaButton>
            </div>
            <dl className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-grotesk text-sm font-light text-cream/75">
              <div>
                <dt className="sr-only">Google rating</dt>
                <dd>
                  <a href={SITE.reviewsUrl} target="_blank" rel="noreferrer" className="link-line">
                    <Stars value={SITE.rating.value} /> {SITE.rating.value}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Opening status</dt>
                <dd>
                  <OpenStatus />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={`tel:${SITE.phone}`} className="link-line">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* ——— Slide caption & controls ——— */}
          <div className="w-full max-w-sm lg:text-right">
            <div aria-live="polite" aria-atomic="true">
              <motion.div
                key={slide.id}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <p className="type-eyebrow text-cream/50">
                  From the kitchen · {String(index + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </p>
                <Link
                  href={slide.href}
                  className="group mt-3 block"
                  aria-label={`${slide.dish}, ${slide.price} — view on menu`}
                >
                  <span className="type-display text-3xl text-cream transition-colors duration-300 group-hover:text-rose md:text-4xl">
                    {slide.dish}
                  </span>
                  <span className="type-display ml-3 text-2xl italic text-rose md:text-3xl">
                    {slide.price}
                  </span>
                </Link>
                <p className="mt-2 font-grotesk text-sm font-light text-cream/60">
                  {slide.note}
                </p>
              </motion.div>
            </div>

            {/* Progress bars + arrows */}
            <div className="mt-6 flex items-center gap-4 lg:justify-end">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous dish"
                className="flex h-10 w-10 items-center justify-center border border-cream/25 text-cream/70 transition-colors duration-300 hover:border-rose hover:text-cream"
              >
                ←
              </button>
              <div className="flex items-center gap-2" aria-hidden>
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    tabIndex={-1}
                    onClick={() => setIndex(i)}
                    className="group/bar relative h-6 w-9 cursor-pointer"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cream/25 transition-colors duration-300 group-hover/bar:bg-cream/50" />
                    {i === index && (
                      <span
                        key={`fill-${index}`}
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 origin-left bg-lacquer"
                        style={
                          reduce
                            ? undefined
                            : {
                                animation: `slide-progress ${SLIDE_MS}ms linear forwards`,
                                animationPlayState: paused ? "paused" : "running",
                              }
                        }
                      />
                    )}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next dish"
                className="flex h-10 w-10 items-center justify-center border border-cream/25 text-cream/70 transition-colors duration-300 hover:border-rose hover:text-cream"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
