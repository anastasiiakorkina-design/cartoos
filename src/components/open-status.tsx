"use client";

import { useEffect, useState } from "react";
import { hoursForDay, dayName } from "@/lib/site";

type Status =
  | { state: "open"; until: string }
  | { state: "closed"; opensAt: string; opensDay?: string };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function computeStatus(): Status {
  // Evaluate in the restaurant's timezone regardless of the visitor's.
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    get("weekday"),
  );
  const now = Number(get("hour")) * 60 + Number(get("minute"));

  const today = hoursForDay(dayIndex);
  if (today && now >= toMinutes(today.open) && now < toMinutes(today.close)) {
    return { state: "open", until: today.close };
  }
  if (today && now < toMinutes(today.open)) {
    return { state: "closed", opensAt: today.open };
  }
  // After close (or no service today): find the next open day.
  for (let i = 1; i <= 7; i++) {
    const next = hoursForDay((dayIndex + i) % 7);
    if (next) {
      return {
        state: "closed",
        opensAt: next.open,
        opensDay: i === 1 ? "tomorrow" : dayName((dayIndex + i) % 7),
      };
    }
  }
  return { state: "closed", opensAt: "12:00" };
}

/** Live "Open now" indicator, computed in Europe/London time. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(computeStatus());
    const t = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(t);
  }, []);

  // Render a stable shell before hydration to avoid mismatch.
  if (!status) {
    return (
      <span className={className} aria-hidden>
        &nbsp;
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          status.state === "open" ? "bg-sage" : "bg-rose"
        }`}
      />
      {status.state === "open"
        ? `Open now — until ${status.until}`
        : `Closed — opens ${status.opensDay ? `${status.opensDay} ` : "today "}at ${status.opensAt}`}
    </span>
  );
}
