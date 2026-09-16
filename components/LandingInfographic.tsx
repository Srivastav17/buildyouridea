import { Fragment } from "react";
import { Lightbulb, ClipboardCheck, Layers, Rocket, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const nodes = [
  {
    icon: Lightbulb,
    title: "Your idea",
    description: "You describe the problem, in your own words.",
  },
  {
    icon: ClipboardCheck,
    title: "Scoped",
    description: "Cut down to the smallest version worth building.",
  },
  {
    icon: Layers,
    title: "Built",
    description: "AI-native development turns it into real software.",
  },
  {
    icon: Rocket,
    title: "Working product",
    description: "You get something real to test with actual users.",
  },
];

export default function LandingInfographic() {
  return (
    <section className="border-t border-ink-800/60 bg-ink-900/30">
      <div className="container-px mx-auto max-w-5xl py-12 sm:py-16">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="eyebrow">What Actually Happens</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            From an idea in your head to a product in your hands.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
          {nodes.map((node, i) => (
            <Fragment key={node.title}>
              <Reveal
                delay={i * 0.08}
                className="flex flex-1 flex-row items-center gap-4 rounded-sm border border-ink-700/60 bg-ink-950/60 p-4 sm:flex-col sm:items-center sm:gap-0 sm:p-6 sm:text-center"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500/10 sm:h-14 sm:w-14">
                  <node.icon className="h-5 w-5 text-accent-400 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white sm:mt-4 sm:text-base">
                    {node.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-400 sm:text-sm">
                    {node.description}
                  </p>
                </div>
              </Reveal>

              {i < nodes.length - 1 && (
                <div className="flex shrink-0 items-center justify-center py-1 sm:py-0">
                  <ArrowRight className="h-5 w-5 rotate-90 text-ink-700 sm:h-5 sm:w-5 sm:rotate-0" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
