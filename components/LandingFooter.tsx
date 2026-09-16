export default function LandingFooter() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950">
      <div className="container-px mx-auto max-w-5xl py-8 text-center text-xs text-ink-500">
        <p>© {new Date().getFullYear()} Builidea, part of India Fashion World.</p>
        <p className="mt-1">Projects are scoped individually. No two ideas are the same.</p>
      </div>
    </footer>
  );
}
