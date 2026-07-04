"use client";

export function PrintTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-lacquer bg-lacquer px-6 py-3 transition-opacity hover:opacity-90"
    >
      <span className="type-eyebrow text-cream">Print cards</span>
    </button>
  );
}
