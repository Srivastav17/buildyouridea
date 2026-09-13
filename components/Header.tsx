import Link from "next/link";
import CtaLink from "./CtaLink";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const navLinks = [
  { label: "/work", href: "/work" },
  { label: "/process", href: "/process" },
  { label: "/about", href: "/about" },
  { label: "/faq", href: "/faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/90 backdrop-blur-md">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Builidea home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-ink-400 transition hover:text-accent-400"
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
            <span className="font-mono sm:hidden">Start()</span>
            <span className="font-mono hidden sm:inline">Tell_Me_Your_Idea()</span>
          </CtaLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
