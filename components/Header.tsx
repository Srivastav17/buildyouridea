import Link from "next/link";
import CtaLink from "./CtaLink";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-md">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-white">
          Build<span className="text-accent-400">Your</span>Idea
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CtaLink
            href="/start"
            label="Tell Me Your Idea"
            location="header"
            className="!px-3.5 !py-2 !text-xs sm:!px-5 sm:!py-2.5 sm:!text-sm"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Tell Me Your Idea</span>
          </CtaLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
