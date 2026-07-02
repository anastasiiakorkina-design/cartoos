import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Embers } from "@/components/embers";
import { Reveal, RevealLines } from "@/components/reveal";
import { MenuExperience } from "@/components/menu/menu-experience";
import { CtaButton } from "@/components/button";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Charcoal-grilled steaks, North Sea catch, stone-oven breads and forty artisan ice creams. The Cartoos menu, Aberdeen.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-cream">
        {/* Menu masthead */}
        <header className="grain relative overflow-hidden pb-16 pt-40 md:pb-24 md:pt-52">
          <div
            aria-hidden
            className="animate-ember absolute inset-x-[-10%] bottom-[-30%] h-[70%]"
            style={{
              background:
                "radial-gradient(55% 55% at 50% 100%, rgba(188,122,75,0.28), transparent 78%)",
            }}
          />
          <Embers density={18} />
          <div className="relative mx-auto max-w-[1680px] px-6 md:px-10">
            <Reveal>
              <p className="type-eyebrow text-copper-bright">
                The Menu · Changes with the season
              </p>
            </Reveal>
            <RevealLines
              as="h1"
              className="type-display mt-8 text-display-xl"
              lines={["Fire, stone,", <em key="i" className="text-sand">smoke & sea.</em>]}
            />
            <Reveal delay={0.25} className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-md font-grotesk text-base font-light leading-relaxed text-cream/65">
                Six chapters, one grill. Dishes change with the boats and the
                seasons — signatures never leave. Please tell us about
                allergies; the kitchen cooks around them gladly.
              </p>
              <CtaButton href="/#reservations" solid className="shrink-0">
                Book a Table
              </CtaButton>
            </Reveal>
          </div>
        </header>

        <MenuExperience />
      </main>
      <Footer />
    </>
  );
}
