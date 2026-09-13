const stats = [
  { value: "18+", label: "years_in_product" },
  { value: "2", label: "products_built" },
  { value: "0", label: "team_handoffs" },
];

export default function StatRow() {
  return (
    <div className="border-y border-ink-800/60 bg-ink-900/30">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-3 divide-x divide-ink-800/60">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-8 text-center sm:py-10">
            <p className="font-mono text-3xl font-semibold text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-xs text-ink-500 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
