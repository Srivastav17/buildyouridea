import { useId } from "react";

interface LogoProps {
  showWordmark?: boolean;
  className?: string;
}

/**
 * Mark: three ascending bars (product momentum / idea-to-product growth)
 * with a node-and-orbit accent on the tallest bar (AI / intelligence signal).
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="32" x2="32" y2="0">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#3FE0C5" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${gradientId})`} />
      <rect x="7" y="17" width="4.5" height="8" rx="1.25" fill="white" fillOpacity="0.95" />
      <rect x="13.75" y="12.5" width="4.5" height="12.5" rx="1.25" fill="white" fillOpacity="0.95" />
      <rect x="20.5" y="8" width="4.5" height="17" rx="1.25" fill="white" />
      <circle cx="22.75" cy="6.2" r="2.1" fill="white" />
      <circle
        cx="22.75"
        cy="6.2"
        r="4"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1"
        fill="none"
      />
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
