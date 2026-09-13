import Link from "next/link";
import CtaLink from "./CtaLink";
import Logo from "./Logo";

const navLinks = [
  { label: "/work", href: "/work" },
  { label: "/process", href: "/process" },
  { label: "/about", href: "/about" },
  { label: "/faq", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-ink-400">
              A product studio for people who have an idea but not yet a product.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
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
          <CtaLink href="/start" label="Tell Me Your Idea" location="footer" />
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Builidea.</p>
          <p>Projects are scoped individually. No two ideas are the same.</p>
        </div>
      </div>
    </footer>
  );
}
