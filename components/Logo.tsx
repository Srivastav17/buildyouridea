interface LogoProps {
  showWordmark?: boolean;
  className?: string;
}

/**
 * Mark: three ascending build-stages (rising blocks), the tallest crowned
 * by a plain idea-spark — literal "build" (construction, rising) fused
 * with "idea" (the spark) as one silhouette.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="8" y="42" width="14" height="16" rx="3" fill="#F5A623" />
      <rect x="25" y="30" width="14" height="28" rx="3" fill="#F5A623" />
      <rect x="42" y="16" width="14" height="42" rx="3" fill="#F5A623" />
      <path d="M49 2 L52 9 L59 12 L52 15 L49 22 L46 15 L39 12 L46 9 Z" fill="#F5A623" />
    </svg>
  );
}

export default function Logo({ showWordmark = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      {showWordmark && (
        <span className="font-mono text-base font-semibold lowercase tracking-tight text-white">
          builidea
        </span>
      )}
    </span>
  );
}
