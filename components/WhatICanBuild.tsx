import { Bot, Layers3, Workflow, Wrench, MessageCircle, Zap } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Bot,
    title: "AI Products",
    description: "AI agents, copilots, intelligent workflows and AI-powered applications.",
  },
  {
    icon: Layers3,
    title: "SaaS Prototypes",
    description: "Turn a SaaS idea into a working product that can be demonstrated and tested.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Replace manual workflows with AI-powered tools and automation.",
  },
  {
    icon: Wrench,
    title: "AI Internal Tools",
    description: "Custom tools for sales, operations, support, analytics and internal teams.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp and Conversational AI",
    description: "AI-powered customer engagement and automated workflows.",
  },
  {
    icon: Zap,
    title: "Rapid Product Prototypes",
    description: "Build and test product ideas before investing heavily in a full engineering team.",
  },
];

export default function WhatICanBuild() {
  return (
    <section id="what-i-build" className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="h2 mt-3">What gets built here.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="card group relative h-full overflow-hidden p-7 transition hover:border-accent-500/50">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/0 blur-2xl transition group-hover:bg-accent-500/20" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-accent-400 transition group-hover:border-accent-500/50 group-hover:bg-accent-500/10">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
