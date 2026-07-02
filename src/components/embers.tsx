"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
};

/**
 * Embers — slow copper sparks rising from the charcoal.
 * Renders on a canvas sized to its parent; pauses off-screen and
 * disables itself entirely under prefers-reduced-motion.
 */
export function Embers({
  density = 26,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let running = true;
    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const embers: Ember[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (initial = false): Ember => {
      const maxLife = 260 + Math.random() * 300;
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 10,
        r: 0.6 + Math.random() * 1.7,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -(0.18 + Math.random() * 0.5),
        life: initial ? Math.random() * maxLife : 0,
        maxLife,
        hue: 22 + Math.random() * 14,
      };
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    for (let i = 0; i < density; i++) embers.push(spawn(true));

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running) frame = requestAnimationFrame(tick);
    });
    io.observe(canvas);

    let t = 0;
    const tick = () => {
      if (!running) return;
      t += 1;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.life += 1;
        e.x += e.vx + Math.sin((t + i * 40) / 90) * 0.16;
        e.y += e.vy;
        if (e.life > e.maxLife || e.y < -12) {
          embers[i] = spawn();
          continue;
        }
        const phase = e.life / e.maxLife;
        const alpha =
          phase < 0.15
            ? phase / 0.15
            : phase > 0.7
              ? 1 - (phase - 0.7) / 0.3
              : 1;
        const flicker = 0.7 + 0.3 * Math.sin((t + i * 17) / 6);
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${e.hue}, 68%, ${58 + flicker * 10}%, ${alpha * 0.55 * flicker})`;
        ctx.fill();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      io.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
