/**
 * Plate — generative cinematic imagery.
 *
 * Each variant is an art-directed composition of blurred light, colour and
 * texture in the CARTOOS palette: charcoal grounds, copper heat, olive and
 * sage, warm stone. Rendered as pure SVG so every "photograph" ships with
 * the page — no external assets, no layout shift, always in brand.
 */

import { useId } from "react";

type Shape = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill: string;
  opacity: number;
  blur: "s" | "m" | "l";
  rotate?: number;
};

type PlateSpec = {
  from: string;
  to: string;
  angle?: number;
  shapes: Shape[];
};

export type PlateVariant = keyof typeof PLATES;

const PLATES = {
  /* Glowing coals — the heart of the kitchen */
  coals: {
    from: "#0e0d0c",
    to: "#241a13",
    shapes: [
      { cx: 30, cy: 78, rx: 16, ry: 12, fill: "#bc7a4b", opacity: 0.75, blur: "l" },
      { cx: 58, cy: 88, rx: 20, ry: 13, fill: "#d99a68", opacity: 0.6, blur: "l" },
      { cx: 76, cy: 74, rx: 10, ry: 8, fill: "#9a6a3a", opacity: 0.8, blur: "m" },
      { cx: 44, cy: 82, rx: 4, ry: 3, fill: "#f0b07a", opacity: 0.9, blur: "s" },
      { cx: 66, cy: 90, rx: 3, ry: 2.5, fill: "#ffd9ae", opacity: 0.85, blur: "s" },
      { cx: 24, cy: 88, rx: 3, ry: 2, fill: "#e8a76f", opacity: 0.8, blur: "s" },
      { cx: 50, cy: 30, rx: 42, ry: 26, fill: "#a8a49b", opacity: 0.08, blur: "l" },
    ],
  },
  /* Dry-aged beef, seared — warm marbling on dark slate */
  steak: {
    from: "#141210",
    to: "#2a201a",
    angle: 160,
    shapes: [
      { cx: 52, cy: 62, rx: 30, ry: 20, fill: "#6d4426", opacity: 0.85, blur: "m", rotate: -12 },
      { cx: 48, cy: 58, rx: 22, ry: 13, fill: "#9a6a3a", opacity: 0.75, blur: "m", rotate: -12 },
      { cx: 43, cy: 54, rx: 12, ry: 6, fill: "#d9c9b5", opacity: 0.4, blur: "m", rotate: -14 },
      { cx: 62, cy: 70, rx: 6, ry: 3.5, fill: "#e8a76f", opacity: 0.65, blur: "s", rotate: -10 },
      { cx: 78, cy: 24, rx: 18, ry: 14, fill: "#bc7a4b", opacity: 0.25, blur: "l" },
      { cx: 20, cy: 90, rx: 16, ry: 8, fill: "#30362f", opacity: 0.6, blur: "l" },
    ],
  },
  /* Olive grove — sage light through leaves */
  olive: {
    from: "#22271f",
    to: "#39402f",
    angle: 20,
    shapes: [
      { cx: 68, cy: 28, rx: 24, ry: 18, fill: "#8a9278", opacity: 0.55, blur: "l" },
      { cx: 30, cy: 46, rx: 18, ry: 7, fill: "#8a9278", opacity: 0.5, blur: "m", rotate: -28 },
      { cx: 44, cy: 66, rx: 14, ry: 5, fill: "#a8ad93", opacity: 0.4, blur: "m", rotate: 18 },
      { cx: 60, cy: 84, rx: 20, ry: 8, fill: "#262b25", opacity: 0.7, blur: "m", rotate: -8 },
      { cx: 78, cy: 60, rx: 5, ry: 3.5, fill: "#d9c9b5", opacity: 0.5, blur: "s", rotate: 30 },
      { cx: 22, cy: 20, rx: 4, ry: 3, fill: "#f6f2ea", opacity: 0.35, blur: "s" },
    ],
  },
  /* North Sea dusk — haze over cold water, warm horizon */
  coast: {
    from: "#191d1c",
    to: "#333b38",
    angle: 0,
    shapes: [
      { cx: 50, cy: 44, rx: 60, ry: 3, fill: "#d9c9b5", opacity: 0.35, blur: "m" },
      { cx: 50, cy: 40, rx: 60, ry: 10, fill: "#bc7a4b", opacity: 0.22, blur: "l" },
      { cx: 30, cy: 62, rx: 40, ry: 4, fill: "#8a9278", opacity: 0.25, blur: "m" },
      { cx: 70, cy: 78, rx: 46, ry: 6, fill: "#a8a49b", opacity: 0.18, blur: "l" },
      { cx: 50, cy: 16, rx: 50, ry: 16, fill: "#101010", opacity: 0.5, blur: "l" },
    ],
  },
  /* Artisan gelato — soft cream and pistachio light */
  dessert: {
    from: "#1c1917",
    to: "#2e2822",
    angle: 130,
    shapes: [
      { cx: 44, cy: 50, rx: 18, ry: 16, fill: "#f6f2ea", opacity: 0.5, blur: "m" },
      { cx: 60, cy: 62, rx: 14, ry: 12, fill: "#d9c9b5", opacity: 0.55, blur: "m" },
      { cx: 36, cy: 66, rx: 12, ry: 10, fill: "#a8ad93", opacity: 0.45, blur: "m" },
      { cx: 52, cy: 84, rx: 24, ry: 8, fill: "#9a6a3a", opacity: 0.35, blur: "l" },
      { cx: 70, cy: 30, rx: 10, ry: 8, fill: "#bc7a4b", opacity: 0.3, blur: "l" },
      { cx: 48, cy: 44, rx: 3, ry: 2.5, fill: "#ffffff", opacity: 0.5, blur: "s" },
    ],
  },
  /* Warm stone & bread — bakery light */
  stone: {
    from: "#211d18",
    to: "#3a3129",
    angle: 145,
    shapes: [
      { cx: 46, cy: 58, rx: 26, ry: 18, fill: "#d9c9b5", opacity: 0.4, blur: "l" },
      { cx: 40, cy: 52, rx: 14, ry: 9, fill: "#e9dcc8", opacity: 0.35, blur: "m", rotate: -10 },
      { cx: 70, cy: 80, rx: 20, ry: 10, fill: "#9a6a3a", opacity: 0.35, blur: "l" },
      { cx: 76, cy: 26, rx: 12, ry: 9, fill: "#bc7a4b", opacity: 0.3, blur: "l" },
      { cx: 24, cy: 84, rx: 10, ry: 5, fill: "#181818", opacity: 0.55, blur: "m" },
    ],
  },
  /* Fresh herbs & flame-licked vegetables */
  mezze: {
    from: "#1b1c17",
    to: "#2f3226",
    angle: 30,
    shapes: [
      { cx: 34, cy: 40, rx: 16, ry: 12, fill: "#8a9278", opacity: 0.55, blur: "m" },
      { cx: 62, cy: 58, rx: 18, ry: 12, fill: "#9a6a3a", opacity: 0.55, blur: "m", rotate: 20 },
      { cx: 50, cy: 80, rx: 22, ry: 10, fill: "#bc7a4b", opacity: 0.4, blur: "l" },
      { cx: 74, cy: 30, rx: 7, ry: 5, fill: "#d99a68", opacity: 0.6, blur: "s" },
      { cx: 26, cy: 68, rx: 5, ry: 4, fill: "#d9c9b5", opacity: 0.45, blur: "s" },
    ],
  },
  /* Smoke against black — the signature texture */
  smoke: {
    from: "#101010",
    to: "#1f1e1c",
    angle: 200,
    shapes: [
      { cx: 42, cy: 66, rx: 24, ry: 40, fill: "#a8a49b", opacity: 0.14, blur: "l", rotate: 16 },
      { cx: 58, cy: 36, rx: 18, ry: 30, fill: "#d9c9b5", opacity: 0.1, blur: "l", rotate: -18 },
      { cx: 50, cy: 92, rx: 20, ry: 10, fill: "#bc7a4b", opacity: 0.3, blur: "l" },
      { cx: 46, cy: 96, rx: 5, ry: 3, fill: "#e8a76f", opacity: 0.55, blur: "m" },
    ],
  },
} satisfies Record<string, PlateSpec>;

export function Plate({
  variant,
  className = "",
  drift = true,
  label,
}: {
  variant: PlateVariant;
  className?: string;
  drift?: boolean;
  label?: string;
}) {
  const spec: PlateSpec = PLATES[variant];
  const id = `plate-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  const angle = spec.angle ?? 180;
  const rad = ((angle - 90) * Math.PI) / 180;
  const x2 = 50 + Math.cos(rad) * 50;
  const y2 = 50 + Math.sin(rad) * 50;

  return (
    <div
      className={`grain relative overflow-hidden bg-charcoal ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="50" y1="0" x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={spec.from} />
            <stop offset="100%" stopColor={spec.to} />
          </linearGradient>
          <radialGradient id={`${id}-vig`} cx="50%" cy="42%" r="75%">
            <stop offset="55%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
          </radialGradient>
          <filter id={`${id}-s`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
          <filter id={`${id}-m`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4.5" />
          </filter>
          <filter id={`${id}-l`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <rect width="100" height="100" fill={`url(#${id}-bg)`} />
        <g className={drift ? "animate-drift-slow" : undefined} style={{ transformOrigin: "50% 50%" }}>
          {spec.shapes.map((s, i) => (
            <ellipse
              key={i}
              cx={s.cx}
              cy={s.cy}
              rx={s.rx}
              ry={s.ry}
              fill={s.fill}
              opacity={s.opacity}
              filter={`url(#${id}-${s.blur})`}
              transform={s.rotate ? `rotate(${s.rotate} ${s.cx} ${s.cy})` : undefined}
            />
          ))}
        </g>
        <rect width="100" height="100" fill={`url(#${id}-vig)`} />
      </svg>
    </div>
  );
}
