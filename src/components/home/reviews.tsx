import { SITE } from "@/lib/site";
import { REVIEWS } from "@/lib/reviews";
import { Reveal, RevealLines } from "@/components/reveal";

function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span
      aria-label={`${value} out of 5 stars`}
      className={`tracking-[0.18em] text-copper-bright ${className}`}
    >
      {"★".repeat(value)}
      <span className="text-cream/20">{"★".repeat(5 - value)}</span>
    </span>
  );
}

export function Reviews() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="bg-olive-deep py-20 text-cream md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="type-eyebrow text-sand">Reviews</p>
            </Reveal>
            <RevealLines
              as="h2"
              className="type-display mt-5 text-display-md"
              lines={[
                <span key="l" id="reviews-heading">
                  {SITE.rating.value} on <em className="text-sand">Google.</em>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.1} className="md:text-right">
            <p aria-hidden className="text-xl">
              <Stars value={5} />
            </p>
            <p className="mt-2 font-grotesk text-sm font-light text-cream/60">
              {SITE.rating.count}+ reviews ·{" "}
              <a
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="link-line text-cream"
              >
                Read them all on Google
              </a>
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08} className="h-full">
              <li className="flex h-full flex-col justify-between border border-cream/15 p-7">
                <blockquote>
                  <Stars value={r.rating} className="text-sm" />
                  <p className="mt-4 font-grotesk text-[0.95rem] font-light leading-relaxed text-cream/80">
                    “{r.text}”
                  </p>
                </blockquote>
                <footer className="mt-6 flex items-baseline justify-between">
                  <p className="type-eyebrow text-cream/70">{r.name}</p>
                  <p className="font-grotesk text-xs font-light text-cream/40">
                    {r.date}
                  </p>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
