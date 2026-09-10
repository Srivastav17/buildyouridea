import CtaLink from "./CtaLink";

const ideas = [
  "An AI sales agent that qualifies leads.",
  "An AI tool that processes business documents.",
  "A SaaS product for managing a specific business workflow.",
  "A WhatsApp AI assistant for customer enquiries.",
  "An internal AI tool that automates repetitive operations.",
  "An AI-powered dashboard that turns data into insights.",
];

export default function SampleIdeas() {
  return (
    <section className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Inspiration</p>
          <h2 className="h2 mt-3">What could you build?</h2>
          <p className="lede">
            These are examples, not a menu. Every project is scoped individually around your
            specific idea.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <div
              key={idea}
              className="card flex items-start gap-3 p-6 text-sm font-medium leading-relaxed text-ink-200"
            >
              <span className="mt-1 text-accent-400">&rarr;</span>
              {idea}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CtaLink href="#idea-form" label="Tell Me Your Idea" location="sample-ideas" />
        </div>
      </div>
    </section>
  );
}
