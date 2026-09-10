import CtaLink from "./CtaLink";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#how-it-works" },
  { label: "What I Build", href: "#what-i-build" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-md">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Build<span className="text-accent-400">Your</span>Idea
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <CtaLink
          href="#idea-form"
          label="Tell Me Your Idea"
          location="header"
          className="!px-5 !py-2.5 !text-sm"
        />
      </div>
    </header>
  );
}
