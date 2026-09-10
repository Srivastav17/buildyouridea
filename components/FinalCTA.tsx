import CtaLink from "./CtaLink";

export default function FinalCTA() {
  return (
    <section className="section relative overflow-hidden border-t border-ink-800/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(124,92,255,0.18),transparent)]" />
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Your idea doesn&rsquo;t need to stay in your head.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
          Tell me what you want to build. I&rsquo;ll review the idea and help determine what the
          first version should look like.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaLink href="/start" label="TELL ME YOUR IDEA" location="final-cta" />
        </div>
      </div>
    </section>
  );
}
