import { ArrowRight } from "lucide-react";
import CtaLink from "./CtaLink";

const pipeline = [
  { n: "01", label: "idea", dots: "................." },
  { n: "02", label: "product_strategy", dots: "....." },
  { n: "03", label: "ux_workflows", dots: "........." },
  { n: "04", label: "working_prototype", dots: "...." },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid-fade">
      <div className="container-px relative mx-auto grid max-w-7xl gap-16 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-32">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-sm border border-accent-500/40 bg-ink-900/60 px-4 py-1.5 font-mono text-xs text-accent-400">
            // backed_by: 18+ years of product experience
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have an idea? Let&rsquo;s turn it into a{" "}
            <span className="text-accent-400">working product.</span>
          </h1>
          <p className="mt-4 font-mono text-lg text-ink-200 sm:text-xl">
            &gt; No product team to hire. No engineers to find. Just a working prototype.
          </p>
          <p className="lede">
            Bring your SaaS, AI, or automation idea. This studio defines what&rsquo;s actually
            worth building, then uses AI-native development to turn it into working software fast.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaLink href="/start" label="Tell Me Your Idea" location="hero">
              Tell Me Your Idea
              <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink
              href="/work"
              label="See What's Been Built"
              location="hero"
              variant="secondary"
            />
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-sm border border-ink-700 bg-ink-900/80">
            <div className="border-b border-ink-700 px-4 py-2.5 font-mono text-xs text-ink-500">
              pipeline.log
            </div>
            <div className="flex flex-col gap-3.5 p-5 font-mono text-[13px]">
              {pipeline.map((step) => (
                <div key={step.n} className="flex text-ink-400">
                  <span>
                    [{step.n}] {step.label}
                  </span>
                  <span className="mx-1 flex-1 overflow-hidden text-ink-700">{step.dots}</span>
                  <span className="text-accent-400">done</span>
                </div>
              ))}
              <div className="flex font-semibold text-white">
                <span>[05] mvp</span>
                <span className="mx-1 flex-1 overflow-hidden text-ink-700">.................</span>
                <span className="inline-block h-[1em] w-3 bg-accent-400 align-middle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
