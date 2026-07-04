"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { OpenStatus } from "@/components/open-status";

const EASE = [0.22, 1, 0.36, 1] as const;

const LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Order Online", href: "/#order" },
  { label: "Private Dining", href: "/private-dining" },
  { label: "Find Us", href: "/#visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="type-display relative z-50 text-2xl tracking-wide text-cream"
            onClick={() => setOpen(false)}
          >
            CARTOOS
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="link-line type-eyebrow text-cream/80 transition-colors duration-300 hover:text-cream"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="link-line type-eyebrow text-cream/80 transition-colors duration-300 hover:text-cream"
            >
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/#reservations"
              className="group relative overflow-hidden border border-lacquer px-6 py-3"
            >
              <span
                aria-hidden
                className="absolute inset-0 translate-y-full bg-lacquer transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
              />
              <span className="type-eyebrow relative text-rose transition-colors duration-500 group-hover:text-cream">
                Book a Table
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-7 bg-cream transition-transform duration-500 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-7 bg-cream transition-transform duration-500 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-14 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav className="relative flex flex-col gap-1" aria-label="Mobile">
              {[
                ...LINKS,
                { label: "Reservations", href: "/#reservations" },
              ].map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="type-display block py-2.5 text-4xl text-cream"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <a
                  href={`tel:${SITE.phone}`}
                  onClick={() => setOpen(false)}
                  className="block bg-lacquer px-6 py-4 text-center"
                >
                  <span className="type-eyebrow text-cream">
                    Call {SITE.phoneDisplay}
                  </span>
                </a>
                <p className="type-eyebrow text-cream/50">
                  <OpenStatus /> · {SITE.address.street}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
