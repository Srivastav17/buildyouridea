const columns = [
  {
    title: "Traditional Freelancer",
    steps: ["You provide requirements", "They write code"],
    muted: true,
  },
  {
    title: "Traditional Agency",
    steps: ["Long discovery", "Large team", "Long timeline", "High cost"],
    muted: true,
  },
  {
    title: "This Product Studio",
    steps: [
      "Idea",
      "Product thinking",
      "Define what matters",
      "Build the smallest useful version",
      "Test",
      "Iterate",
    ],
    muted: false,
  },
];

export default function WhyDifferent() {
  return (
    <section className="section border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Why This Is Different</p>
          <h2 className="h2 mt-3">More than development.</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`card p-7 ${
                col.muted ? "opacity-70" : "border-accent-500/50 ring-1 ring-accent-500/20"
              }`}
            >
              <h3
                className={`font-display text-lg font-semibold ${
                  col.muted ? "text-ink-300" : "text-white"
                }`}
              >
                {col.title}
              </h3>
              <ol className="mt-5 space-y-3">
                {col.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-ink-300">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                        col.muted
                          ? "bg-ink-800 text-ink-500"
                          : "bg-accent-500/20 text-accent-300"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-display text-xl font-semibold text-white sm:text-2xl">
          Product thinking + AI-native development.
        </p>
      </div>
    </section>
  );
}
