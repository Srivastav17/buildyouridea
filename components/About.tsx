import Image from "next/image";
import CtaLink from "./CtaLink";
import CredibilityList from "./CredibilityList";

export default function About() {
  return (
    <section className="section border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">About the Studio</p>
          <h2 className="h2 mt-3">A product studio focused on getting to working software.</h2>
          <div className="lede space-y-4 max-w-2xl text-ink-300">
            <p>
              Builidea is a product studio for founders and businesses who have an idea but
              not yet a product. It&rsquo;s led by a Senior Product Manager and AI Product Builder
              with 18+ years of experience across SaaS, CRM, customer engagement and product
              platforms — including building InZob and FundReap from scratch.
            </p>
            <p>
              The studio works differently from a typical development agency: start with the
              problem, define what&rsquo;s actually worth building, then use AI-native development
              to rapidly turn that into a working product.
            </p>
            <p>
              The goal is simple — help founders and businesses move from &ldquo;I have an
              idea&rdquo; to &ldquo;Here is a working product.&rdquo;
            </p>
            <p className="text-sm text-ink-500">Builidea is part of India Fashion World.</p>
          </div>
          <div className="mt-8">
            <CtaLink href="/start" label="Tell Me Your Idea" location="about" />
          </div>
        </div>

        <div className="mt-16">
          <CredibilityList />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-ink-700/60">
            <Image
              src="/team/builidea-team.png"
              alt="The Builidea team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">The Team</p>
            <h2 className="h2 mt-3">More than one person, working as one team.</h2>
            <p className="lede">
              Every project is led end-to-end by the same Senior Product Manager and AI Product
              Builder, backed by a team of developers, designers, and industry experts who bring
              in specific technical depth and domain knowledge as a project needs it — so nothing
              gets stuck waiting on a single skill set.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Developers for implementation depth beyond AI-native scaffolding",
                "Designers for interfaces that hold up under real, daily use",
                "Industry experts who know the domain-specific edge cases",
                "One point of contact throughout, regardless of who's involved",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
