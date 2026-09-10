import { Sparkles, ArrowRight } from "lucide-react";
import CtaLink from "./CtaLink";

const flow = [
  "IDEA",
  "PRODUCT STRATEGY",
  "UX & WORKFLOWS",
  "WORKING PROTOTYPE",
  "MVP",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid-fade">
      <div className="bg-noise absolute inset-0 opacity-40" />
      <div className="container-px relative mx-auto grid max-w-7xl gap-16 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-32">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/80 px-4 py-1.5 text-xs font-medium text-ink-300">
            <Sparkles className="h-3.5 w-3.5 text-accent-400" />
            AI-native product development, product-studio rigor
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have an idea? Let&rsquo;s turn it into a{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-signal-teal bg-clip-text text-transparent">
              working product.
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-ink-300 sm:text-xl">
            From idea &rarr; product strategy &rarr; working prototype.
          </p>
          <p className="lede">
            You don&rsquo;t need to hire a full product and engineering team to test your idea.
            Bring your SaaS, AI, or automation idea and this studio will help define the product
            and build a working prototype.
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
          <div className="card relative w-full max-w-sm animate-float p-6 sm:p-8">
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-accent-500/30 to-transparent opacity-40 blur-sm" />
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              From idea to product
            </p>
            <ol className="space-y-0">
              {flow.map((step, i) => (
                <li key={step} className="relative pl-8">
                  {i < flow.length - 1 && (
                    <span className="absolute left-[11px] top-7 h-[calc(100%-4px)] w-px bg-gradient-to-b from-accent-500/60 to-ink-700" />
                  )}
                  <span
                    className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold ${
                      i === flow.length - 1
                        ? "border-accent-400 bg-accent-500 text-white shadow-[0_0_16px_rgba(124,92,255,0.6)]"
                        : "border-ink-600 bg-ink-800 text-ink-300"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p
                    className={`pb-8 text-sm font-semibold tracking-wide ${
                      i === flow.length - 1 ? "text-white" : "text-ink-200"
                    }`}
                  >
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
