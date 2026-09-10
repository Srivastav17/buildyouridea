import CtaLink from "./CtaLink";

export default function About() {
  return (
    <section className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="mx-auto w-full max-w-xs">
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-ink-700 bg-ink-900">
              <p className="px-6 text-center text-xs text-ink-500">
                Professional photo of Gaurav
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">About the Founder</p>
            <h2 className="h2 mt-3">Hi, I&rsquo;m Gaurav.</h2>
            <div className="lede space-y-4 max-w-2xl text-ink-300">
              <p>
                I&rsquo;m a Senior Product Manager and AI Product Builder with 18+ years of
                experience working on SaaS, CRM, customer engagement and product platforms.
              </p>
              <p>
                I build products differently from a traditional development agency. I start with
                the problem, define what is worth building, and then use AI-native development to
                rapidly turn that into a working product.
              </p>
              <p>
                I&rsquo;ve also built products from scratch, including{" "}
                <span className="font-semibold text-white">InZob</span> and{" "}
                <span className="font-semibold text-white">FundReap</span>.
              </p>
              <p>
                My goal is simple: help founders and businesses move from &ldquo;I have an
                idea&rdquo; to &ldquo;Here is a working product.&rdquo;
              </p>
            </div>
            <div className="mt-8">
              <CtaLink href="#idea-form" label="Tell Me Your Idea" location="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
