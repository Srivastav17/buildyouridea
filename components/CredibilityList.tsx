import Reveal from "./Reveal";

const credentials = [
  {
    title: "18+ years in product",
    description:
      "Nearly two decades leading product across enterprise SaaS, CRM, and customer engagement platforms.",
  },
  {
    title: "18+ years as a Product Leader",
    description: "Product discovery, roadmap strategy, and execution — not just design or code.",
  },
  {
    title: "Enterprise SaaS experience",
    description:
      "Built and shipped products used inside real businesses, not just prototypes for a portfolio.",
  },
  {
    title: "AI Product Builder",
    description:
      "Hands-on with AI-native development — using modern AI tooling to build working software fast.",
  },
  {
    title: "Built products from scratch",
    description:
      "Founded and built InZob and FundReap end-to-end, from problem definition to working application.",
  },
  {
    title: "Direct, no layers",
    description: "No account managers, no handoffs between teams. One point of contact throughout the project.",
  },
];

export default function CredibilityList() {
  return (
    <div className="divide-y divide-ink-800 border-y border-ink-800">
      {credentials.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.04}>
          <div className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="w-8 shrink-0 font-display text-sm text-ink-600">0{i + 1}</span>
            <p className="text-base leading-snug text-white sm:text-lg">
              <span className="font-semibold">{c.title}.</span>{" "}
              <span className="font-normal text-ink-300">{c.description}</span>
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
