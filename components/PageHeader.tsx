interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-grid-fade border-b border-ink-800/60">
      <div className="bg-noise absolute inset-0 opacity-30" />
      <div className="container-px relative mx-auto max-w-7xl py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h2 mt-3">{title}</h1>
        {description && <p className="lede">{description}</p>}
      </div>
    </section>
  );
}
