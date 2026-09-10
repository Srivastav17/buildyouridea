import Reveal from "./Reveal";

interface CaseStudy {
  name: string;
  tagline: string;
  problem: string;
  productThinking: string;
  whatWasBuilt: string[];
  result: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "InZob",
    tagline: "AI-powered business and healthcare engagement platform",
    problem:
      "Businesses and healthcare providers were losing leads and patients to slow, manual follow-up — enquiries came in across channels and nobody had a consistent way to respond, qualify, and stay engaged.",
    productThinking:
      "The product needed to combine conversational AI with real workflow automation, not just a chatbot. That meant defining how AI agents should hand off to humans, how conversations become structured data, and how follow-up should be triggered automatically instead of manually.",
    whatWasBuilt: [
      "AI-powered conversations across web and messaging",
      "AI agents for lead and patient qualification",
      "WhatsApp engagement and automated messaging",
      "CRM workflows for tracking conversations and status",
      "Appointment scheduling and automation",
      "AI-generated insights from conversation data",
      "Automated follow-up sequences",
      "Conversation intelligence and analytics",
    ],
    result:
      "A working platform where AI agents handle first-touch engagement, qualify intent, and automate follow-up — turning scattered conversations into a structured, trackable pipeline.",
  },
  {
    name: "FundReap",
    tagline: "Built from idea to working application",
    problem:
      "The starting point was a raw idea, not a spec — the challenge was figuring out what the product actually needed to do before writing a single line of code.",
    productThinking:
      "Discovery came first: mapping the core user workflow, deciding what belonged in a first version versus later iterations, and choosing an architecture that could support a real SaaS product rather than a throwaway demo.",
    whatWasBuilt: [
      "End-to-end product discovery and scoping",
      "Core user workflows and application UX",
      "SaaS application architecture",
      "Full application development",
      "AI-assisted development to move from concept to working software faster",
    ],
    result:
      "A working application built from a single idea through to a functioning product — demonstrating the same discovery-to-build process used for client projects.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section border-t border-ink-800/60 bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Proof of Work</p>
          <h2 className="h2 mt-3">I don&rsquo;t just talk about products. I build them.</h2>
          <p className="lede">
            Two products built end-to-end — from an undefined problem to working software.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.name} className="card overflow-hidden">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className={`p-8 sm:p-10 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {study.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-400">{study.tagline}</p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                        Product Thinking
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">
                        {study.productThinking}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                        What Was Built
                      </p>
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {study.whatWasBuilt.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                        Resulting Product
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{study.result}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-4 bg-ink-950/60 p-8 sm:p-10 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-ink-700 bg-ink-900 text-center">
                    <p className="px-6 text-xs text-ink-500">
                      Product screenshot / UI mockup for {study.name}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-ink-700 bg-ink-900">
                      <p className="px-3 text-center text-xs text-ink-500">Screenshot</p>
                    </div>
                    <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-ink-700 bg-ink-900">
                      <p className="px-3 text-center text-xs text-ink-500">Demo video</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
