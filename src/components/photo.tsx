import { Plate, type PlateVariant } from "@/components/plate";

/**
 * Photo — a clearly marked placeholder for real restaurant photography.
 *
 * Until the launch shoot is delivered, each slot renders an in-brand
 * generative stand-in (never stock imagery) plus a visible label telling
 * the client exactly which shot belongs there. The full shot list lives
 * in PHOTOGRAPHY.md.
 *
 * To go live: swap the <Plate> for next/image with the delivered asset
 * and set `marked={false}` (or remove the label prop).
 */
export function Photo({
  variant,
  shot,
  alt,
  className = "",
  marked = true,
}: {
  variant: PlateVariant;
  /** Short art direction, e.g. "Ribeye on the pass, natural light" */
  shot: string;
  alt: string;
  className?: string;
  marked?: boolean;
}) {
  return (
    <figure className={`relative ${className}`}>
      <Plate variant={variant} label={alt} className="h-full w-full" />
      {marked && (
        <figcaption className="absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] bg-ink/70 px-2.5 py-1.5 font-grotesk text-[0.6rem] font-medium uppercase tracking-[0.14em] text-cream/75 backdrop-blur-sm">
          Photo placeholder · {shot}
        </figcaption>
      )}
    </figure>
  );
}
