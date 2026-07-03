"use client";

export function PrintTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-copper bg-copper px-6 py-3 transition-opacity hover:opacity-90"
    >
      <span className="type-eyebrow text-charcoal">Print cards</span>
    </button>
  );
}
