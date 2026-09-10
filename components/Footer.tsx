import CtaLink from "./CtaLink";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-display text-lg font-semibold text-white">
              Build<span className="text-accent-400">Your</span>Idea
            </div>
            <p className="mt-2 max-w-sm text-sm text-ink-400">
              Product strategy and AI-native development, from idea to working prototype.
            </p>
          </div>
          <CtaLink href="#idea-form" label="Tell Me Your Idea" location="footer" />
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BuildYourIdea. Built by Gaurav.</p>
          <p>Projects are scoped individually. No two ideas are the same.</p>
        </div>
      </div>
    </footer>
  );
}
