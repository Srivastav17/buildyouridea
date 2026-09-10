const palettes: Record<string, { from: string; to: string; dot: string }> = {
  violet: { from: "#7c5cff", to: "#2a1f6b", dot: "#ac96fb" },
  teal: { from: "#3fe0c5", to: "#134c47", dot: "#8ef5e2" },
  amber: { from: "#ffb545", to: "#5c3a12", dot: "#ffd699" },
  rose: { from: "#ff6b9d", to: "#5c1f38", dot: "#ffb3cd" },
};

interface ProductPreviewProps {
  name: string;
  label?: string;
  palette?: keyof typeof palettes;
  className?: string;
}

/**
 * Stylized abstract "product shot" used until real screenshots are dropped
 * in — a window-chrome silhouette over a brand-tinted gradient, not a bare
 * placeholder box.
 */
export default function ProductPreview({
  name,
  label = "Product preview",
  palette = "violet",
  className = "",
}: ProductPreviewProps) {
  const colors = palettes[palette];

  return (
    <div
      className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-ink-700/60 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.from}33 0%, ${colors.to}55 60%, #08090c 100%)`,
      }}
    >
      <div className="bg-noise absolute inset-0 opacity-30" />
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `${colors.from}55` }}
      />
      <div
        className="absolute -bottom-14 -left-10 h-44 w-44 rounded-full blur-3xl"
        style={{ background: `${colors.to}66` }}
      />

      <div className="relative w-[82%] overflow-hidden rounded-lg border border-white/10 bg-ink-950/60 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2 p-4">
          <div className="h-2 w-1/3 rounded-full" style={{ backgroundColor: `${colors.dot}55` }} />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 rounded-md" style={{ backgroundColor: `${colors.from}22` }} />
            <div className="h-10 rounded-md" style={{ backgroundColor: `${colors.from}33` }} />
            <div className="h-10 rounded-md" style={{ backgroundColor: `${colors.dot}22` }} />
          </div>
          <div className="h-2 w-2/3 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/5" />
        </div>
      </div>

      <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-300 backdrop-blur-sm">
        {label} — {name}
      </span>
    </div>
  );
}
