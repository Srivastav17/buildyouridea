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
              BuildYourIdea is a product studio for founders and businesses who have an idea but
              not yet a product. It&rsquo;s run by a Senior Product Manager and AI Product Builder
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
          </div>
          <div className="mt-8">
            <CtaLink href="/start" label="Tell Me Your Idea" location="about" />
          </div>
        </div>

        <div className="mt-16">
          <CredibilityList />
        </div>
      </div>
    </section>
  );
}
