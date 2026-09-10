export default function GlowBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-600/20 blur-[140px]" />
      <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-signal-teal/10 blur-[140px]" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent-500/10 blur-[140px]" />
    </div>
  );
}
