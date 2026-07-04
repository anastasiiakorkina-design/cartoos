import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The CARTOOS button: a hairline pill whose fill sweeps up on hover.
 * `tone` picks the resting outline/text colour context.
 */
export function CtaButton({
  href,
  children,
  tone = "dark",
  solid = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  solid?: boolean;
  className?: string;
}) {
  const rest = solid
    ? "border-lacquer bg-lacquer text-cream"
    : tone === "dark"
      ? "border-cream/30 text-cream"
      : "border-charcoal/30 text-charcoal";
  const sweep = solid
    ? "bg-cream"
    : tone === "dark"
      ? "bg-cream"
      : "bg-charcoal";
  const hoverText = solid
    ? "group-hover/cta:text-claret"
    : tone === "dark"
      ? "group-hover/cta:text-charcoal"
      : "group-hover/cta:text-cream";

  return (
    <Link
      href={href}
      className={`group/cta relative inline-flex items-center gap-3 overflow-hidden border px-8 py-4 ${rest} ${className}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 translate-y-full ${sweep} transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-y-0`}
      />
      <span
        className={`type-eyebrow relative transition-colors duration-500 ${hoverText}`}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={`relative text-sm transition-all duration-500 ${hoverText} group-hover/cta:translate-x-1`}
      >
        →
      </span>
    </Link>
  );
}
