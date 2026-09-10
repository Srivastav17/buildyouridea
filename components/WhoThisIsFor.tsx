import Reveal from "./Reveal";

const primary = [
  {
    title: "Non-technical founders",
    description: "with a SaaS or AI idea and no engineering team to build it.",
  },
  {
    title: "Startup founders",
    description: "who need a working MVP to test with users or raise on.",
  },
  {
    title: "Business owners",
    description: "who want to automate a manual workflow using AI.",
  },
  {
    title: "Entrepreneurs",
    description: "who have an idea but no product or engineering team yet.",
  },
];

const secondary = [
  "Product teams needing rapid prototypes",
  "Small businesses needing custom AI tools",
  "Agencies needing rapid prototype support",
];

export default function WhoThisIsFor() {
  return (
    <section className="section border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Who This Is For</p>
          <h2 className="h2 mt-3">
            Built for people who see the gap between an idea and a product.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-0 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="divide-y divide-ink-800 border-y border-ink-800">
            {primary.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="w-8 shrink-0 font-display text-sm text-ink-600">
                    0{i + 1}
                  </span>
                  <p className="text-lg leading-snug text-white sm:text-xl">
                    <span className="font-semibold">{item.title}</span>{" "}
                    <span className="font-normal text-ink-300">{item.description}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10 lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              Also working with
            </p>
            <ul className="mt-5 space-y-4">
              {secondary.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
