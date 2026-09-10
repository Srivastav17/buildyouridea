import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductPreview from "./ProductPreview";
import Reveal from "./Reveal";

const items = [
  {
    name: "InZob",
    tagline: "AI-powered business and healthcare engagement platform",
    palette: "teal" as const,
  },
  {
    name: "FundReap",
    tagline: "Built from idea to working application",
    palette: "violet" as const,
  },
];

export default function PortfolioTeaser() {
  return (
    <section id="portfolio" className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Proof of Work</p>
            <h2 className="h2 mt-3">I don&rsquo;t just talk about products. I build them.</h2>
          </Reveal>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-accent-300"
          >
            See the full case studies
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <Link href="/work" className="card group block h-full overflow-hidden p-5">
                <ProductPreview name={item.name} palette={item.palette} />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-ink-300">{item.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
