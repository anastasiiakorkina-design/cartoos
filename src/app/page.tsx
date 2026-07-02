import { Preloader } from "@/components/preloader";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/home/hero";
import { Story } from "@/components/home/story";
import { Signatures } from "@/components/home/signatures";
import { FireExperience } from "@/components/home/fire-experience";
import { ChefSelection } from "@/components/home/chef-selection";
import { Gallery } from "@/components/home/gallery";
import { Testimonials } from "@/components/home/testimonials";
import { Reservation } from "@/components/home/reservation";
import { Footer } from "@/components/footer";

function Marquee() {
  const words = [
    "Charcoal",
    "Stone",
    "Smoke",
    "Sea",
    "Olive",
    "Fire",
    "Bronze",
    "Salt",
  ];
  const strip = [...words, ...words];
  return (
    <div aria-hidden className="overflow-hidden border-y border-charcoal/10 bg-cream py-5">
      <div className="animate-marquee flex w-max items-center">
        {strip.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="type-display px-6 text-2xl italic text-charcoal/50 md:text-3xl">
              {w}
            </span>
            <span className="text-bronze/60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Marquee />
        <Signatures />
        <FireExperience />
        <ChefSelection />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
