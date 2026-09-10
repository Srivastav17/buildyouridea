import LeadForm from "./LeadForm";

export default function LeadFormSection() {
  return (
    <section id="idea-form" className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Start Here</p>
          <h2 className="h2 mt-3">Tell us what you want to build.</h2>
          <p className="lede mx-auto">
            Describe your idea in your own words. You don&rsquo;t need technical specifications.
          </p>
        </div>
        <div className="mt-14">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
