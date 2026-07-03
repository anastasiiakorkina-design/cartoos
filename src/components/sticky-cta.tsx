"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Mobile-only sticky action bar: the two conversions that matter,
 * always one thumb away. Hides while the reservation form is on screen.
 */
export function StickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("reservations");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream/15 bg-ink/95 backdrop-blur-md transition-transform duration-500 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        href={`tel:${SITE.phone}`}
        className="flex items-center justify-center gap-2 py-4"
      >
        <span className="type-eyebrow text-cream">Call us</span>
      </a>
      <a
        href="/#reservations"
        className="flex items-center justify-center gap-2 bg-copper py-4"
      >
        <span className="type-eyebrow text-charcoal">Book a Table</span>
      </a>
    </div>
  );
}
