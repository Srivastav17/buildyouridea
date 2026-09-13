import { useId } from "react";

interface LogoProps {
  showWordmark?: boolean;
  className?: string;
}

/**
 * Mark: a lightbulb (idea) with a small neural-network pattern traced inside
 * the glass (AI / intelligence) and screw-base ridges for readability as a
 * bulb at a glance, rather than an abstract icon.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="6" y1="58" x2="58" y2="4">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#3FE0C5" />
        </linearGradient>
      </defs>

      {/* Bulb glass */}
      <path
        d="M32 6C21.5 6 13.5 14.2 13.5 24.3c0 7 3.9 11.6 7.2 15.5 2 2.4 3.6 4.3 4 6.4h14.6c.4-2.1 2-4 4-6.4 3.3-3.9 7.2-8.5 7.2-15.5C50.5 14.2 42.5 6 32 6Z"
        fill={`url(#${gradientId})`}
      />

      {/* Neck + screw base */}
      <rect x="24.8" y="48.5" width="14.4" height="4.2" rx="1.4" fill={`url(#${gradientId})`} />
      <rect x="25.8" y="53.7" width="12.4" height="3.6" rx="1.4" fill={`url(#${gradientId})`} />
      <rect x="27" y="58.2" width="10" height="3" rx="1.5" fill={`url(#${gradientId})`} />

      {/* Neural-network trace inside the glass */}
      <g stroke="white" strokeOpacity="0.9" strokeWidth="1.4" strokeLinecap="round">
        <line x1="24" y1="30" x2="32" y2="22" />
        <line x1="32" y1="22" x2="40" y2="28" />
        <line x1="32" y1="22" x2="32" y2="34" />
        <line x1="24" y1="30" x2="32" y2="34" />
        <line x1="40" y1="28" x2="32" y2="34" />
      </g>
      <circle cx="32" cy="22" r="2.6" fill="white" />
      <circle cx="24" cy="30" r="2.2" fill="white" fillOpacity="0.9" />
      <circle cx="40" cy="28" r="2.2" fill="white" fillOpacity="0.9" />
      <circle cx="32" cy="34" r="2.4" fill="white" />
    </svg>
  );
}

export default function Logo({ showWordmark = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          Build<span className="text-accent-400">ia</span>
        </span>
      )}
    </span>
  );
}
