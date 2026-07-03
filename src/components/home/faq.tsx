import { SITE } from "@/lib/site";
import { Reveal, RevealLines } from "@/components/reveal";

const FAQS = [
  {
    q: "Do I need to book?",
    a: "Walk-ins are welcome when we have space, but evenings and weekends usually sell out — booking is strongly recommended. Tables of up to 8 need no deposit; for larger groups call us or see Private Dining.",
  },
  {
    q: "Is Cartoos family-friendly?",
    a: "Very. We have high chairs, a children's menu from the grill, forty-plus artisan ice cream flavours, and a robot host who delivers desserts to younger guests. Ask for the family area when booking.",
  },
  {
    q: "Can you cater for dietary requirements?",
    a: "Yes — much of the menu is naturally gluten-free and we mark vegetarian, vegan and nut-containing dishes. Tell us about allergies when booking and the kitchen will cook around them.",
  },
  {
    q: "Is there a dress code?",
    a: "Smart casual. Come as you are for lunch; most guests dress up a little for dinner.",
  },
  {
    q: "Where can I park?",
    a: `On-street parking on ${SITE.address.street} is free after 18:00, and NCP Chapel Street is a three-minute walk. Union Square car park is about ten minutes on foot.`,
  },
  {
    q: "Can I order Cartoos at home?",
    a: "Yes — collection and delivery run through our partners during opening hours. Use the Order Online links or call us for collection.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="bg-cream py-20 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-3">
        <div>
          <Reveal>
            <p className="type-eyebrow text-bronze">Good to know</p>
          </Reveal>
          <RevealLines
            as="h2"
            className="type-display mt-5 text-display-sm text-charcoal"
            lines={[
              <span key="l" id="faq-heading">
                Questions, <em className="text-bronze">answered.</em>
              </span>,
            ]}
          />
          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-xs font-grotesk text-sm font-light leading-relaxed text-charcoal/60">
              Anything else? Call{" "}
              <a href={`tel:${SITE.phone}`} className="link-line text-charcoal">
                {SITE.phoneDisplay}
              </a>{" "}
              — a person always answers during opening hours.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-2">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group border-b border-charcoal/15">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="type-display text-xl text-charcoal transition-colors duration-300 group-hover:text-bronze md:text-2xl">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden
                    className="type-display shrink-0 text-2xl text-bronze transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 font-grotesk text-sm font-light leading-relaxed text-charcoal/70">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
