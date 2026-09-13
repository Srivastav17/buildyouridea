import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FinalCTA from "@/components/FinalCTA";
import { industries } from "@/lib/industries";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Where Builidea has built real AI products, and where AI-native product development could help across healthcare, fintech, martech, edtech, manufacturing, logistics, and real estate.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Real work in some industries. Real opportunity in all of them."
        description="Only healthcare, fintech, and martech have a shipped project behind them so far — the rest are shown as honest opportunity, not invented case studies."
      />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card group flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-lg font-semibold text-white">
                      {industry.name}
                    </h2>
                    {industry.hasRealWork && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent-400">
                        shipped
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{industry.tagline}</p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent-400">
                  {industry.hasRealWork ? "See what was built" : "See the opportunity"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
