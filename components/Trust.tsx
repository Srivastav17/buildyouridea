import { Layers, Users, Building2, Bot, Rocket, UserCheck } from "lucide-react";
import Reveal from "./Reveal";

const credentials = [
  {
    icon: Layers,
    title: "18+ years in Product",
    description:
      "Nearly two decades leading product across enterprise SaaS, CRM, and customer engagement platforms.",
  },
  {
    icon: Users,
    title: "Senior Product Management background",
    description:
      "Product discovery, roadmap strategy, and execution — not just design or code.",
  },
  {
    icon: Building2,
    title: "Enterprise SaaS experience",
    description:
      "Built and shipped products used inside real businesses, not just prototypes for a portfolio.",
  },
  {
    icon: Bot,
    title: "AI Product Builder",
    description:
      "Hands-on with AI-native development — using modern AI tooling to build working software fast.",
  },
  {
    icon: Rocket,
    title: "Built products from scratch",
    description:
      "Founded and built InZob and FundReap end-to-end, from problem definition to working application.",
  },
  {
    icon: UserCheck,
    title: "Solo, founder-led",
    description:
      "No account managers, no handoffs. You work directly with the person building your product.",
  },
];

export default function Trust() {
  return (
    <section className="section border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Credibility</p>
          <h2 className="h2 mt-3">Built by a Product Leader who also builds.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card group h-full p-6 transition hover:border-accent-500/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-accent-400 transition group-hover:border-accent-500/50 group-hover:bg-accent-500/10">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
