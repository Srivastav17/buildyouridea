const faqs = [
  {
    q: "I only have an idea. Is that enough?",
    a: "Yes. You do not need a detailed technical specification. The first step is understanding the problem and deciding what the first version should do.",
  },
  {
    q: "How much does it cost?",
    a: "Projects are scoped individually based on complexity. The goal is to define the smallest useful version before committing to a larger build.",
  },
  {
    q: "How long does it take?",
    a: "Simple prototypes can move quickly, while more complex products require additional time. Each project receives a clear scope and estimated timeline before work begins.",
  },
  {
    q: "Will I get the source code?",
    a: "Project deliverables and ownership are clearly defined before the project starts.",
  },
  {
    q: "Can you build the MVP after the prototype?",
    a: "Yes. A prototype can be the first step toward a production MVP.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. The goal is to help non-technical founders and business owners translate an idea into a product.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2 mt-3">Common questions.</h2>
        </div>

        <div className="mt-12 divide-y divide-ink-800">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-semibold text-white sm:text-lg">
                  {faq.q}
                </span>
                <span className="shrink-0 text-xl text-ink-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
