"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  MENU,
  type DietaryTag,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menu-data";
import { Photo } from "@/components/photo";

const EASE = [0.22, 1, 0.36, 1] as const;

const DIET_FILTERS: { id: DietaryTag | "all"; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "V", label: "Vegetarian" },
  { id: "VG", label: "Vegan" },
];

const ALLERGEN_KEY =
  "Allergens: C celery · CR crustaceans · E egg · F fish · G gluten · L lupin · M milk · MO molluscs · MU mustard · N nuts · SO soya · SU sulphites";

const CATEGORY_SRC: Record<string, string> = {
  grill: "/slides/01-mixed-grill.jpg",
  steaks: "/slides/02-ribeye.jpg",
  seafood: "/slides/04-seabass.jpg",
  desserts: "/slides/05-ice-cream.jpg",
};

const CATEGORY_SHOTS: Record<string, string> = {
  breakfast: "Full English on the pass, morning light",
  starters: "Mezze spread overhead — hummus, boreks, olives",
  grill: "Shish and kofta over open coals, smoke",
  steaks: "Ribeye on the grill bars / Giotto Tower stacked",
  seafood: "Whole seabass, charred lemon, on stone",
  mains: "Lamb casserole in the pan, steam rising",
  kids: "Bella the robot host arriving at a family table",
  desserts: "St. Lucas ice cream counter, forty flavours in view",
  drinks: "Milkshakes and fresh juices on the bar",
  sides: "Peri chips and sides, overhead",
};

function ItemRow({
  item,
  index,
  reduce,
}: {
  item: MenuItem;
  index: number;
  reduce: boolean | null;
}) {
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 + Math.min(index, 8) * 0.04, ease: EASE }}
      className="group border-b border-cream/12 py-5 md:py-6"
    >
      <div className="flex items-baseline justify-between gap-5">
        <h4 className="type-display text-xl text-cream transition-colors duration-300 group-hover:text-rose md:text-2xl">
          {item.name}
        </h4>
        <span
          aria-hidden
          className="hidden h-px grow bg-cream/10 transition-colors duration-500 group-hover:bg-lacquer/50 sm:block"
        />
        <p className="type-display shrink-0 text-lg text-sand md:text-xl">
          £{item.price}
        </p>
      </div>
      {item.description && (
        <p className="mt-2 max-w-lg font-grotesk text-sm font-light leading-relaxed text-cream/55">
          {item.description}
        </p>
      )}
      {(item.signature || item.tags?.length || item.allergens?.length) && (
        <p className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          {item.signature && (
            <span className="type-eyebrow text-rose/85">Signature</span>
          )}
          {item.tags?.map((t) => (
            <span key={t} className="type-eyebrow text-sage">
              {t === "V" ? "Vegetarian" : "Vegan"}
            </span>
          ))}
          {item.allergens && item.allergens.length > 0 && (
            <span className="font-grotesk text-[0.65rem] font-light uppercase tracking-[0.18em] text-cream/35">
              {item.allergens.join(" · ")}
            </span>
          )}
        </p>
      )}
    </motion.li>
  );
}

export function MenuExperience() {
  const [active, setActive] = useState(MENU[0].id);
  const [diet, setDiet] = useState<DietaryTag | "all">("all");
  const reduce = useReducedMotion();
  const category: MenuCategory =
    MENU.find((c) => c.id === active) ?? MENU[0];

  // Deep links from the homepage and QR cards: /menu#grill etc.
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && MENU.some((c) => c.id === hash)) setActive(hash);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const sections = useMemo(
    () =>
      category.sections
        .map((s) => ({
          ...s,
          items:
            diet === "all"
              ? s.items
              : s.items.filter((i) => i.tags?.includes(diet)),
        }))
        .filter((s) => s.items.length > 0),
    [category, diet],
  );

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-36">
      {/* Category navigation */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[64px] z-30 -mx-6 border-b border-cream/12 bg-ink/92 px-6 backdrop-blur-md md:top-[76px] md:-mx-10 md:px-10"
      >
        <div className="flex gap-7 overflow-x-auto py-4 [scrollbar-width:none] md:gap-9 [&::-webkit-scrollbar]:hidden">
          {MENU.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-current={c.id === active}
              className={`type-eyebrow relative shrink-0 pb-1 transition-colors duration-300 ${
                c.id === active
                  ? "text-rose"
                  : "text-cream/45 hover:text-cream/80"
              }`}
            >
              {c.label}
              {c.id === active && (
                <motion.span
                  layoutId="menu-underline"
                  className="absolute inset-x-0 -bottom-[17px] h-px bg-rose"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Dietary filter */}
      <div
        role="group"
        aria-label="Dietary filter"
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        {DIET_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setDiet(f.id)}
            aria-pressed={diet === f.id}
            className={`border px-4 py-2 font-grotesk text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              diet === f.id
                ? "border-lacquer bg-lacquer text-cream"
                : "border-cream/20 text-cream/55 hover:border-cream/45 hover:text-cream/85"
            }`}
          >
            {f.label}
          </button>
        ))}
        <p className="ml-auto hidden font-grotesk text-xs font-light text-cream/40 md:block">
          Fully halal · Allergies? Tell us when booking — the kitchen cooks
          around them.
        </p>
      </div>

      {/* Category body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -14 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-10"
        >
          {/* Category portrait */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-44">
              <Photo
                variant={category.variant}
                shot={CATEGORY_SHOTS[category.id] ?? category.label}
                alt={category.label}
                src={CATEGORY_SRC[category.id]}
                sizes="(max-width: 1024px) 0px, 40vw"
                className="aspect-[4/5] w-full max-lg:hidden"
              />
              <h2 className="type-display mt-0 text-display-sm text-cream lg:mt-8">
                {category.label}
              </h2>
              <p className="mt-4 max-w-md font-grotesk text-sm font-light leading-relaxed text-cream/60">
                {category.intro}
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="lg:col-span-7 lg:pt-1">
            {sections.length === 0 ? (
              <p className="border border-cream/15 p-8 font-grotesk text-sm font-light text-cream/60">
                Nothing in this chapter matches that filter — but the kitchen
                can adapt most dishes. Ask when booking.
              </p>
            ) : (
              sections.map((section, si) => (
                <section key={section.title ?? si} className={si > 0 ? "mt-12" : ""}>
                  {section.title && (
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="type-eyebrow text-rose">
                        {section.title}
                      </h3>
                      {section.note && (
                        <p className="font-grotesk text-xs font-light text-cream/40">
                          {section.note}
                        </p>
                      )}
                    </div>
                  )}
                  <ul className={section.title ? "mt-2" : ""}>
                    {section.items.map((item, i) => (
                      <ItemRow key={item.name} item={item} index={i} reduce={reduce} />
                    ))}
                  </ul>
                </section>
              ))
            )}
            <p className="mt-6 font-grotesk text-xs font-light leading-relaxed text-cream/40">
              {ALLERGEN_KEY}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
