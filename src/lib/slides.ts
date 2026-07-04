import type { PlateVariant } from "@/components/plate";

/**
 * Hero slideshow manifest.
 *
 * Each slide names an image file under /public — drop a high-quality
 * photograph (or AI-generated image) at that exact path and rebuild:
 * the slideshow picks it up automatically (the page checks the file at
 * build time). Until a file exists, the slide renders its in-brand
 * cinematic stand-in. Generation prompts for each slide live in
 * PHOTOGRAPHY.md.
 *
 * Recommended size: 2000×1250 or larger, landscape, JPG quality ~80.
 */

export type Slide = {
  id: string;
  /** Image path under /public (no leading slash) */
  file: string;
  dish: string;
  price: string;
  note: string;
  href: string;
  variant: PlateVariant;
  alt: string;
};

export type ResolvedSlide = Slide & { src?: string };

export const SLIDES: Slide[] = [
  {
    id: "mixed-grill",
    file: "slides/01-mixed-grill.jpg",
    dish: "Mixed Grill for Two",
    price: "£59.95",
    note: "Shish, kofta, wings, chops & ribs over live charcoal",
    href: "/menu#grill",
    variant: "coals",
    alt: "Mixed grill platter for two over glowing charcoal, smoke rising",
  },
  {
    id: "ribeye",
    file: "slides/02-ribeye.jpg",
    dish: "Ribeye, 12oz",
    price: "£29.95",
    note: "Succulent, marbled and matured",
    href: "/menu#steaks",
    variant: "steak",
    alt: "Charcoal-grilled ribeye steak sliced on a dark stone board",
  },
  {
    id: "giotto-tower",
    file: "slides/03-giotto-tower.jpg",
    dish: "Giotto Tower",
    price: "£18.95",
    note: "Our stacked signature burger, with onion rings",
    href: "/menu#steaks",
    variant: "stone",
    alt: "The Giotto Tower stacked beef burger with onion rings",
  },
  {
    id: "seabass",
    file: "slides/04-seabass.jpg",
    dish: "Charcoal Grilled Seabass",
    price: "£21.45",
    note: "Whole, on the bone, straight off the fire",
    href: "/menu#seafood",
    variant: "coast",
    alt: "Whole charcoal-grilled seabass with charred lemon on stone",
  },
  {
    id: "ice-cream",
    file: "slides/05-ice-cream.jpg",
    dish: "I Love Ice Cream",
    price: "40+ flavours",
    note: "Award-winning St. Lucas of Edinburgh, waffles & sundaes",
    href: "/menu#desserts",
    variant: "dessert",
    alt: "Scoops of artisan ice cream with a golden waffle, dark backdrop",
  },
];
