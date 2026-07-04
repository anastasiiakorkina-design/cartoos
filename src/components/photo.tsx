import Image from "next/image";
import { Plate, type PlateVariant } from "@/components/plate";

/**
 * Photo — a real image when one exists, otherwise a clearly marked
 * placeholder for restaurant photography.
 *
 * Pass `src` (a file under /public) to render the actual image. Without
 * it, the slot renders an in-brand generative stand-in (never stock)
 * plus a visible label telling the client exactly which shot belongs
 * there. The full shot list lives in PHOTOGRAPHY.md.
 */
export function Photo({
  variant,
  shot,
  alt,
  className = "",
  marked = true,
  src,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  variant: PlateVariant;
  /** Short art direction, e.g. "Ribeye on the pass, natural light" */
  shot: string;
  alt: string;
  className?: string;
  marked?: boolean;
  /** Path under /public to a real image, e.g. "/slides/02-ribeye.jpg" */
  src?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <figure className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </figure>
    );
  }

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
