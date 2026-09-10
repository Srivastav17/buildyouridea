import CtaLink from "./CtaLink";

const steps = [
  {
    n: "01",
    title: "Tell Me Your Idea",
    description: "Describe the problem you want to solve and who it is for.",
  },
  {
    n: "02",
    title: "Scope the Product",
    description: "I review the idea and define the smallest version worth building.",
  },
  {
    n: "03",
    title: "Build the Prototype",
    description: "Product workflows, UX, AI capabilities and the working application are built.",
  },
  {
    n: "04",
    title: "Test and Launch",
    description:
      "You receive a working prototype that you can test with users, customers, or investors.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Process</p>
          <h2 className="h2 mt-3">From idea to working product in four steps.</h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="card p-6">
              <span className="font-display text-4xl font-semibold text-ink-700">{step.n}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-ink-700/60 bg-ink-900/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-300">
            Every project is scoped individually based on the idea&rsquo;s complexity — timelines
            and effort vary, and there&rsquo;s no promise that every idea can be built in a fixed
            number of days.
          </p>
          <CtaLink href="#idea-form" label="Tell Me Your Idea" location="how-it-works" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
