import { SITE } from "@/lib/site";
import { OpenStatus } from "@/components/open-status";
import { Reveal, RevealLines } from "@/components/reveal";

export function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="bg-cream py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="type-eyebrow text-bronze">Find us</p>
        </Reveal>
        <RevealLines
          as="h2"
          className="type-display mt-5 text-display-md text-charcoal"
          lines={[
            <span key="l" id="visit-heading">
              {SITE.address.street}, <em className="text-bronze">Aberdeen.</em>
            </span>,
          ]}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Map */}
          <Reveal className="min-h-[320px]">
            <div className="relative h-full min-h-[320px] overflow-hidden border border-charcoal/15">
              <iframe
                title={`Map showing ${SITE.name}, ${SITE.address.street}, ${SITE.address.city}`}
                src={SITE.mapsEmbedUrl}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "grayscale(0.9) contrast(1.02)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="link-line type-eyebrow mt-4 inline-block text-charcoal"
            >
              Get directions →
            </a>
          </Reveal>

          {/* Hours + contact */}
          <div className="grid gap-10 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <h3 className="type-eyebrow text-charcoal/50">Opening hours</h3>
              <p className="mt-4 font-grotesk text-sm font-medium text-charcoal">
                <OpenStatus />
              </p>
              <ul className="mt-5 space-y-4 font-grotesk text-sm font-light text-charcoal/75">
                {SITE.hours.map((h) => (
                  <li key={h.label}>
                    <span className="block text-charcoal/45">{h.label}</span>
                    {h.open} — {h.close}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-grotesk text-xs font-light text-charcoal/45">
                Kitchen closes 45 minutes before the room.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <h3 className="type-eyebrow text-charcoal/50">Contact</h3>
              <address className="mt-4 space-y-1 font-grotesk text-sm font-light not-italic leading-relaxed text-charcoal/75">
                <p>{SITE.address.street}</p>
                <p>
                  {SITE.address.city}, {SITE.address.postcode}
                </p>
              </address>
              <div className="mt-5 space-y-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="block border border-charcoal/25 px-5 py-3.5 text-center transition-colors duration-300 hover:border-bronze"
                >
                  <span className="type-eyebrow text-charcoal">
                    Call {SITE.phoneDisplay}
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-line block break-all font-grotesk text-sm font-light text-charcoal/75"
                >
                  {SITE.email}
                </a>
              </div>
              <p className="mt-5 font-grotesk text-xs font-light leading-relaxed text-charcoal/45">
                Two minutes from Union Square; on-street parking after 18:00
                and NCP Chapel Street nearby.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
