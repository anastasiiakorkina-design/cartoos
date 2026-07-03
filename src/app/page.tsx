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

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
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
