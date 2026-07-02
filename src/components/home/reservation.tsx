"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Embers } from "@/components/embers";
import { Reveal, RevealLines } from "@/components/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const inputClass =
  "peer w-full border-b border-cream/20 bg-transparent pb-3 pt-6 font-grotesk text-base font-light text-cream outline-none transition-colors duration-500 placeholder:text-transparent focus:border-copper-bright";
const labelClass =
  "type-eyebrow pointer-events-none absolute left-0 top-6 text-cream/45 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.55rem] peer-focus:text-copper-bright peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.55rem]";

function Field({
  id,
  label,
  type = "text",
  ...rest
}: {
  id: string;
  label: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className={inputClass}
        {...rest}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}

export function Reservation() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="reservations"
      className="grain relative overflow-hidden bg-ink py-28 text-cream md:py-44"
    >
      <div
        aria-hidden
        className="animate-ember absolute inset-x-[-10%] bottom-[-15%] h-[60%]"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 100%, rgba(188,122,75,0.3), rgba(154,106,58,0.1) 55%, transparent 80%)",
        }}
      />
      <Embers density={20} />

      <div className="relative mx-auto grid max-w-[1680px] gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="type-eyebrow text-copper-bright">Reservations · No. 07</p>
          </Reveal>
          <RevealLines
            as="h2"
            className="type-display mt-8 text-display-lg"
            lines={["Your table", <em key="i" className="text-sand">by the fire.</em>]}
          />
          <Reveal delay={0.2} className="mt-10 max-w-md">
            <p className="font-grotesk text-base font-light leading-relaxed text-cream/65">
              Birthdays, date nights, business dinners, long Sunday
              afternoons — tell us the occasion and we will set the room
              around it. For parties of eight or more, ask about the private
              dining room.
            </p>
            <div className="mt-10 space-y-2 font-grotesk text-sm font-light text-cream/60">
              <p>
                <span className="type-eyebrow mr-4 text-cream/40">Phone</span>
                <a className="link-line" href="tel:+441224000000">
                  +44 (0) 1224 000 000
                </a>
              </p>
              <p>
                <span className="type-eyebrow mr-4 text-cream/40">Email</span>
                <a className="link-line" href="mailto:reservations@cartoos.co.uk">
                  reservations@cartoos.co.uk
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {sent ? (
            <motion.div
              className="flex h-full flex-col items-start justify-center border border-copper/40 p-10 md:p-14"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="type-display text-4xl italic text-sand">
                Consider it held.
              </p>
              <p className="mt-6 max-w-sm font-grotesk text-sm font-light leading-relaxed text-cream/65">
                Thank you — our team will confirm your table within the hour
                during opening times. We look forward to cooking for you.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
            >
              <Field id="name" label="Full name" autoComplete="name" required />
              <Field
                id="phone"
                label="Phone"
                type="tel"
                autoComplete="tel"
                required
              />
              <Field id="date" label="Date" type="date" required />
              <div className="grid grid-cols-2 gap-8">
                <Field id="time" label="Time" type="time" required />
                <Field
                  id="guests"
                  label="Guests"
                  type="number"
                  min={1}
                  max={20}
                  required
                />
              </div>
              <div className="relative sm:col-span-2">
                <input
                  id="occasion"
                  name="occasion"
                  type="text"
                  placeholder="Occasion (optional)"
                  className={inputClass}
                />
                <label htmlFor="occasion" className={labelClass}>
                  Occasion — birthday, business, date night…
                </label>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group relative mt-4 w-full overflow-hidden border border-copper bg-copper/95 px-8 py-5 sm:w-auto"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-y-full bg-cream transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  />
                  <span className="type-eyebrow relative text-charcoal">
                    Request Reservation
                  </span>
                </button>
                <p className="mt-5 font-grotesk text-xs font-light text-cream/40">
                  No card required. Tables of 8+ are confirmed by phone.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
