"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import { OpenStatus } from "@/components/open-status";
import { CtaButton } from "@/components/button";

const EASE = [0.22, 1, 0.36, 1] as const;

function Stars({ value }: { value: number }) {
  return (
    <span aria-hidden className="tracking-[0.15em] text-copper-bright">
      {"★".repeat(Math.round(value))}
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="grain relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink text-cream">
      {/* Single restrained charcoal glow — brand, not spectacle */}
      <div
        aria-hidden
        className="absolute inset-x-[-10%] bottom-[-12%] h-[60%]"
        style={{
          background:
            "radial-gradient(58% 60% at 50% 100%, rgba(188,122,75,0.34), rgba(154,106,58,0.12) 55%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-12 pt-32 md:px-10 md:pb-16">
        <motion.p
          className="type-eyebrow mb-7 text-copper-bright"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Charcoal grill · {SITE.address.street}, Aberdeen
        </motion.p>

        <h1 className="type-display max-w-5xl text-[clamp(3rem,8.5vw,8rem)]">
          <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
            >
              Mediterranean fire,
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <motion.span
              className="block italic text-sand"
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.28, ease: EASE }}
            >
              crafted in Aberdeen.
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        >
          <div className="max-w-md">
            <p className="font-grotesk text-base font-light leading-relaxed text-cream/70">
              Hand-cut Aberdeenshire steaks, North Sea fish and forty artisan
              ice creams — cooked over live charcoal, seven days a week.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href="#reservations" solid>
                Book a Table
              </CtaButton>
              <CtaButton href="/menu" tone="dark">
                View Menu
              </CtaButton>
            </div>
          </div>

          {/* Trust strip — proof, status, action */}
          <dl className="flex flex-col gap-3 border-l border-cream/15 pl-6 font-grotesk text-sm font-light text-cream/75">
            <div>
              <dt className="sr-only">Google rating</dt>
              <dd>
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line"
                >
                  <Stars value={SITE.rating.value} /> {SITE.rating.value} ·{" "}
                  {SITE.rating.count}+ Google reviews
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
                  Call {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
