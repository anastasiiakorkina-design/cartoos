import fs from "node:fs";
import path from "node:path";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/home/hero";
import { MenuHighlights } from "@/components/home/menu-highlights";
import { Story } from "@/components/home/story";
import { Reviews } from "@/components/home/reviews";
import { Visit } from "@/components/home/visit";
import { Reservation } from "@/components/home/reservation";
import { Faq } from "@/components/home/faq";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { SLIDES, type ResolvedSlide } from "@/lib/slides";

/**
 * Slides resolve their imagery at build time: if the file named in the
 * manifest exists under /public, the slideshow uses it; otherwise the
 * slide falls back to its in-brand cinematic stand-in. Drop images in
 * public/slides/ (see PHOTOGRAPHY.md for prompts) and rebuild.
 */
function resolveSlides(): ResolvedSlide[] {
  return SLIDES.map((s) => ({
    ...s,
    src: fs.existsSync(path.join(process.cwd(), "public", s.file))
      ? `/${s.file}`
      : undefined,
  }));
}

export default function HomePage() {
  const slides = resolveSlides();
  return (
    <>
      <Nav />
      <main id="main">
        <Hero slides={slides} />
        <MenuHighlights />
        <Story />
        <Reviews />
        <Visit />
        <Reservation />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
