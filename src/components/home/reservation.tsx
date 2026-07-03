"use client";

import { useMemo, useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { Reveal, RevealLines } from "@/components/reveal";

const TIMES = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
];

const fieldClass =
  "w-full border border-cream/20 bg-transparent px-4 py-3.5 font-grotesk text-base font-light text-cream outline-none transition-colors duration-300 placeholder:text-cream/35 focus:border-copper-bright [color-scheme:dark]";
const labelClass =
  "type-eyebrow mb-2 block text-cream/60";

export function Reservation() {
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "error"; message: string }
    | { kind: "done"; reference: string; date: string; time: string; guests: string }
  >({ kind: "idle" });

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus({ kind: "error", message: json.error ?? "Something went wrong." });
        return;
      }
      setStatus({
        kind: "done",
        reference: json.reference,
        date: data.date,
        time: data.time,
        guests: data.guests,
      });
    } catch {
      setStatus({
        kind: "error",
        message: `We couldn't send your request. Please call us on ${SITE.phoneDisplay}.`,
      });
    }
  }

  return (
    <section
      id="reservations"
      aria-labelledby="reservations-heading"
      className="grain relative overflow-hidden bg-ink py-24 text-cream md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-x-[-10%] bottom-[-15%] h-[55%]"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 100%, rgba(188,122,75,0.22), transparent 78%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="type-eyebrow text-copper-bright">Reservations</p>
          </Reveal>
          <RevealLines
            as="h2"
            className="type-display mt-6 text-display-md"
            lines={["Book your table", <em key="i" className="text-sand">by the fire.</em>]}
          />
          <Reveal delay={0.15} className="mt-8 max-w-md">
            <p className="font-grotesk text-base font-light leading-relaxed text-cream/65">
              Requests are confirmed within the hour during opening times.
              Prefer to speak to someone, or booking for more than twelve?
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-6 inline-flex items-center gap-3 border border-cream/25 px-6 py-3.5 transition-colors duration-300 hover:border-copper-bright"
            >
              <span className="type-eyebrow text-cream">
                Call {SITE.phoneDisplay}
              </span>
            </a>
            <ul className="mt-8 space-y-2 font-grotesk text-sm font-light text-cream/50">
              <li>· No deposit for tables up to 8</li>
              <li>· Private dining &amp; large groups — see Private Dining</li>
              <li>· High chairs and the robot host on request</li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          {status.kind === "done" ? (
            <div
              role="status"
              className="flex h-full flex-col justify-center border border-copper/50 p-8 md:p-12"
            >
              <p className="type-eyebrow text-copper-bright">Request received</p>
              <p className="type-display mt-4 text-3xl md:text-4xl">
                {status.date} at {status.time}, {status.guests}{" "}
                {Number(status.guests) === 1 ? "guest" : "guests"}.
              </p>
              <p className="mt-6 max-w-md font-grotesk text-sm font-light leading-relaxed text-cream/65">
                Your reference is{" "}
                <strong className="font-medium text-sand">{status.reference}</strong>.
                We&rsquo;ll confirm by phone within the hour during opening
                times. Need to change anything? Call{" "}
                <a href={`tel:${SITE.phone}`} className="link-line text-cream">
                  {SITE.phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate={false} aria-describedby={status.kind === "error" ? "reservation-error" : undefined}>
              <h3 id="reservations-heading" className="sr-only">
                Reservation request form
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="res-name">
                    Name
                  </label>
                  <input
                    id="res-name" name="name" type="text" required
                    minLength={2} autoComplete="name"
                    className={fieldClass} placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="res-phone">
                    Phone
                  </label>
                  <input
                    id="res-phone" name="phone" type="tel" required
                    autoComplete="tel" pattern="[+()\d\s-]{7,20}"
                    className={fieldClass} placeholder="For confirmation"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="res-email">
                    Email <span className="normal-case tracking-normal text-cream/35">(optional)</span>
                  </label>
                  <input
                    id="res-email" name="email" type="email"
                    autoComplete="email" className={fieldClass}
                    placeholder="For a written confirmation"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="res-date">
                    Date
                  </label>
                  <input
                    id="res-date" name="date" type="date" required
                    min={today} className={fieldClass}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="res-time">
                      Time
                    </label>
                    <select id="res-time" name="time" required className={fieldClass} defaultValue="19:00">
                      {TIMES.map((t) => (
                        <option key={t} value={t} className="bg-ink">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="res-guests">
                      Guests
                    </label>
                    <select id="res-guests" name="guests" required className={fieldClass} defaultValue="2">
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-ink">
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="res-occasion">
                    Occasion <span className="normal-case tracking-normal text-cream/35">(optional)</span>
                  </label>
                  <input
                    id="res-occasion" name="occasion" type="text" maxLength={200}
                    className={fieldClass}
                    placeholder="Birthday, anniversary, business…"
                  />
                </div>
              </div>

              {status.kind === "error" && (
                <p
                  id="reservation-error"
                  role="alert"
                  className="mt-5 border-l-2 border-copper-bright pl-4 font-grotesk text-sm text-copper-bright"
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={status.kind === "submitting"}
                className="group relative mt-8 w-full overflow-hidden border border-copper bg-copper px-8 py-5 disabled:opacity-60 sm:w-auto"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 translate-y-full bg-cream transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                />
                <span className="type-eyebrow relative text-charcoal">
                  {status.kind === "submitting" ? "Sending…" : "Request Reservation"}
                </span>
              </button>
              <p className="mt-4 font-grotesk text-xs font-light text-cream/40">
                No card required. We only use your details to manage the booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
