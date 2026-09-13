import Image from "next/image";
import { MapPin, Luggage, ArrowRight } from "lucide-react";

const palettes: Record<string, { from: string; to: string; dot: string }> = {
  violet: { from: "#7c5cff", to: "#2a1f6b", dot: "#ac96fb" },
  teal: { from: "#3fe0c5", to: "#134c47", dot: "#8ef5e2" },
  amber: { from: "#ffb545", to: "#5c3a12", dot: "#ffd699" },
  rose: { from: "#ff6b9d", to: "#5c1f38", dot: "#ffb3cd" },
  cyan: { from: "#38bdf8", to: "#0c3a52", dot: "#a5e8ff" },
  crimson: { from: "#f5455c", to: "#4a1018", dot: "#ffb3bd" },
};

interface ProductPreviewProps {
  name: string;
  label?: string;
  palette?: keyof typeof palettes;
  className?: string;
  screenshotSrc?: string;
  mock?: "luggage";
}

/**
 * Stylized abstract "product shot" used until real screenshots are dropped
 * in — a window-chrome silhouette over a brand-tinted gradient, not a bare
 * placeholder box. Pass `screenshotSrc` to show a real screenshot instead.
 */
export default function ProductPreview({
  name,
  label = "Product preview",
  palette = "violet",
  className = "",
  screenshotSrc,
  mock,
}: ProductPreviewProps) {
  const colors = palettes[palette];

  if (screenshotSrc) {
    return (
      <div
        className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-sm border border-ink-700/60 bg-ink-950 ${className}`}
      >
        <Image
          src={screenshotSrc}
          alt={`${name} — ${label}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  if (mock === "luggage") {
    return (
      <div
        className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-sm border border-ink-700/60 ${className}`}
        style={{
          background: `linear-gradient(135deg, ${colors.from}33 0%, ${colors.to}55 60%, #0b0d10 100%)`,
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

        <div className="relative w-[82%] overflow-hidden rounded-sm border border-white/10 bg-ink-950/70 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-white/40">
              Book a pickup
            </span>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center gap-2.5 rounded-sm border border-white/10 bg-white/5 px-3 py-2.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: colors.dot }} />
              <div className="space-y-1">
                <div className="text-[9px] uppercase tracking-wider text-white/30">Pickup from</div>
                <div className="h-1.5 w-28 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-sm border border-white/10 bg-white/5 px-3 py-2.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: colors.from }} />
              <div className="space-y-1">
                <div className="text-[9px] uppercase tracking-wider text-white/30">Deliver to</div>
                <div className="h-1.5 w-20 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-sm border border-white/10 bg-white/5 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <Luggage className="h-3.5 w-3.5" style={{ color: colors.dot }} />
                <span className="text-[10px] text-white/50">2 bags</span>
              </div>
              <div className="h-1.5 w-14 rounded-full bg-white/20" />
            </div>
            <div
              className="flex items-center justify-center gap-1.5 rounded-sm py-2 text-[10px] font-semibold uppercase tracking-wider text-ink-950"
              style={{ backgroundColor: colors.from }}
            >
              Book Pickup
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>

        <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-300 backdrop-blur-sm">
          {label} — {name}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-sm border border-ink-700/60 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.from}33 0%, ${colors.to}55 60%, #0b0d10 100%)`,
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

      <div className="relative w-[82%] overflow-hidden rounded-sm border border-white/10 bg-ink-950/60 shadow-2xl backdrop-blur-sm">
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
