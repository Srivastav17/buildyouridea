import { LogoMark } from "./Logo";

export default function LandingTopBar() {
  return (
    <div className="border-b border-ink-800/80 bg-ink-950/95 backdrop-blur-md">
      <div className="container-px mx-auto flex h-16 max-w-5xl items-center justify-between">
        <span className="inline-flex items-center gap-2.5">
          <LogoMark className="h-7 w-7 shrink-0" />
          <span className="font-mono text-base font-semibold lowercase tracking-tight text-white">
            builidea
          </span>
        </span>
        <a
          href="#idea-form"
          className="font-mono text-xs text-accent-400 transition hover:text-accent-300 sm:text-sm"
        >
          Tell_Me_Your_Idea() &rarr;
        </a>
      </div>
    </div>
  );
}
