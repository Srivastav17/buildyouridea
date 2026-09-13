import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaLink from "@/components/CtaLink";
import FinalCTA from "@/components/FinalCTA";
import ProductPreview from "@/components/ProductPreview";
import JsonLd from "@/components/JsonLd";
import { industries, getIndustry } from "@/lib/industries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const title = `AI Product Development for ${industry.name}`;
  const description = industry.hasRealWork
    ? `${industry.builtWith?.description} Real work built for ${industry.name.toLowerCase()}.`
    : `Where AI-native product development could help in ${industry.name.toLowerCase()} — example opportunities, not a claimed project.`;
  return {
    title,
    description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Industries", item: `${siteUrl}/industries` },
            {
              "@type": "ListItem",
              position: 3,
              name: industry.name,
              item: `${siteUrl}/industries/${industry.slug}`,
            },
          ],
        }}
      />
      <PageHeader
        eyebrow={`Industries / ${industry.name}`}
        title={industry.tagline}
      />

      {industry.hasRealWork && industry.builtWith && (
        <section className="section border-b border-ink-800/60">
          <div className="container-px mx-auto max-w-7xl">
            <p className="eyebrow">What Was Built</p>
            <h2 className="h2 mt-3">{industry.builtWith.project}</h2>
            <p className="lede">{industry.builtWith.description}</p>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {industry.builtWith.whatWasBuilt.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <ProductPreview
                name={industry.builtWith.project}
                palette="teal"
                screenshotSrc={industry.builtWith.screenshotSrc}
              />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow">{industry.hasRealWork ? "Also Possible" : "The Opportunity"}</p>
          <h2 className="h2 mt-3">
            {industry.hasRealWork
              ? `More that could be built for ${industry.name.toLowerCase()}.`
              : `What could be built for ${industry.name.toLowerCase()}.`}
          </h2>
          {!industry.hasRealWork && (
            <p className="lede">
              These are examples of the kind of AI product work that fits this industry — not a
              claim that it&rsquo;s already been built. Every project starts from your specific
              idea and gets scoped individually.
            </p>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.opportunities.map((opp) => (
              <div key={opp.title} className="card p-6">
                <h3 className="font-display text-base font-semibold text-white">{opp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{opp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CtaLink
              href="/start"
              label="Tell Me Your Idea"
              location={`industry-${industry.slug}`}
            />
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
