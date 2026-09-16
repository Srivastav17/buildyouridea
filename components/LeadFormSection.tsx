import LeadForm from "./LeadForm";

interface LeadFormSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function LeadFormSection({
  eyebrow = "Start Here",
  title = "Tell us what you want to build.",
  description = "Describe your idea in your own words. You don't need technical specifications.",
}: LeadFormSectionProps) {
  return (
    <section id="idea-form" className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2 mt-3">{title}</h2>
          <p className="lede mx-auto">{description}</p>
        </div>
        <div className="mt-14">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
