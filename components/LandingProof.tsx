import ProductPreview from "./ProductPreview";
import Reveal from "./Reveal";

const items = [
  {
    name: "InZob",
    tagline: "AI-powered business and healthcare engagement platform",
    palette: "teal" as const,
    screenshotSrc: "/screenshots/inzob-clinical.png",
  },
  {
    name: "FundReap",
    tagline: "AI-powered accounts receivable collections for Tally users",
    palette: "violet" as const,
    screenshotSrc: "/screenshots/fundreap-dashboard.png",
  },
];

export default function LandingProof() {
  return (
    <section id="proof" className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-5xl">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Proof of Work</p>
          <h2 className="h2 mt-3">Real products, built end to end.</h2>
          <p className="lede">
            Not mockups, not slide decks — working software, built the same way your idea would
            be.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div className="card block h-full overflow-hidden p-5">
                <ProductPreview
                  name={item.name}
                  palette={item.palette}
                  screenshotSrc={item.screenshotSrc}
                />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-ink-300">{item.tagline}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
