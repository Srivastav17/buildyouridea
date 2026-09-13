export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  tags: string[];
  readingTime: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-turn-a-product-idea-into-a-working-prototype",
    title: "How to Turn a Product Idea Into a Working Prototype (Without Hiring a Team)",
    description:
      "A practical breakdown of what it actually takes to go from an idea in your head to working software — without hiring a product manager, designers, and a dev team first.",
    publishedAt: "2026-09-14",
    tags: ["Product Strategy"],
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Most product ideas die in the gap between \"I know what I want\" and \"I know how to get someone to build it.\" That gap used to require a co-founder who could code, or a budget for a product team you can't yet justify. It doesn't anymore — but only if you approach the first version correctly.",
      },
      { type: "h2", text: "The mistake: treating the first version like the real product" },
      {
        type: "p",
        text: "The instinct is to write a spec that covers every feature you can imagine, then look for someone to build all of it. That's backwards. A first version exists to answer one question: does this solve the problem well enough that someone would actually use it? Everything that doesn't help answer that question is scope you don't need yet.",
      },
      {
        type: "p",
        text: "The projects that actually ship start with a much smaller, sharper question — not \"what's the full product,\" but \"what's the one workflow that has to work end to end for this to be worth anything.\"",
      },
      { type: "h2", text: "What actually needs to happen, in order" },
      {
        type: "list",
        items: [
          "Define the problem precisely — who has it, how they deal with it today, and why that's not good enough.",
          "Cut the idea down to the smallest version that still solves that problem for a real person.",
          "Design the core workflow, not the whole app — the screens and decisions a user actually needs, nothing else.",
          "Build a working prototype against that workflow, not a mockup — something you can click through and actually use.",
          "Get it in front of the people who have the problem before you build anything else.",
        ],
      },
      {
        type: "p",
        text: "Notice that \"build\" is step four, not step one. Most failed first attempts skip straight to building because that feels like progress. It isn't, if you're building the wrong thing precisely.",
      },
      { type: "h2", text: "Why this is faster now, not slower" },
      {
        type: "p",
        text: "AI-native development changes the economics of steps three and four specifically. Turning a defined workflow into working software — the UI, the logic, the data model — takes days instead of the weeks it used to take a small team, because a large part of the implementation work can move at the speed of a single person directing it well, rather than a team coordinating around it.",
      },
      {
        type: "p",
        text: "That doesn't remove the need for steps one and two. If anything it raises the cost of skipping them — it's now easy to build the wrong thing quickly. The product thinking is still the part that determines whether the fast build was worth doing.",
      },
      { type: "h2", text: "What this looks like in practice" },
      {
        type: "p",
        text: "InZob started as a specific, narrow problem: businesses and healthcare providers were losing leads and patients to slow manual follow-up. The first working version wasn't a full CRM — it was the AI conversation and qualification workflow, built end to end, that made the delay disappear. Everything else — the reporting, the clinical documentation, the analytics — came after that core loop was proven.",
      },
      {
        type: "p",
        text: "That's the shape a good first version takes: narrow, real, and usable — not comprehensive.",
      },
    ],
  },
  {
    slug: "what-ai-native-product-development-actually-means",
    title: "What \"AI-Native Product Development\" Actually Means",
    description:
      "The phrase gets used loosely. Here's a concrete definition — and the difference between using AI to write code faster and building products in an AI-native way.",
    publishedAt: "2026-09-14",
    tags: ["Product Strategy", "AI"],
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "\"AI-native\" has become a label people attach to almost anything that touches a large language model somewhere in the stack. That makes it nearly meaningless without a definition, so here's a concrete one: AI-native product development means using AI as the primary way ideas become software, at every stage — not just autocompleting code inside a process that otherwise looks the same as it did five years ago.",
      },
      { type: "h2", text: "Where the label gets misused" },
      {
        type: "p",
        text: "A team that writes a spec, hands it to engineers, and those engineers use an AI coding assistant to type faster is not doing AI-native development. They're doing the same process with a faster keyboard. The bottleneck — coordination between roles, handoffs, waiting for the next person in the chain — hasn't moved.",
      },
      { type: "h2", text: "What actually changes" },
      {
        type: "list",
        items: [
          "Product definition and implementation stop being separate phases done by separate people — the person who understands the problem can go directly to a working prototype.",
          "Iteration cycles shrink from weeks (spec → design → dev → QA → release) to hours, because there's no handoff between the person deciding and the person building.",
          "The cost of trying an approach and being wrong drops enough that you can afford to be wrong a few times before committing — which is a very different way of making product decisions than committing to a roadmap upfront.",
        ],
      },
      { type: "h2", text: "What doesn't change" },
      {
        type: "p",
        text: "Judgment. Knowing which workflow actually matters, what a user will tolerate, where the edge cases that break trust are — none of that comes from the model. AI-native development removes the mechanical distance between deciding and building. It doesn't remove the need to decide well.",
      },
      {
        type: "quote",
        text: "The AI doesn't replace product thinking. It removes almost everything that used to stand between product thinking and a working product.",
      },
      {
        type: "p",
        text: "That's the actual pitch, and it's also the actual constraint: this approach is only as good as the person directing it. A vague idea handed to an AI-native process produces a fast, working version of a vague idea.",
      },
    ],
  },
  {
    slug: "building-inzob-ai-whatsapp-engagement",
    title: "Building InZob: Turning WhatsApp Into an AI Engagement Layer for Healthcare and Local Business",
    description:
      "A case study in how InZob went from a slow, manual follow-up problem to a working AI engagement and appointment platform — and the product decisions that mattered along the way.",
    publishedAt: "2026-09-14",
    tags: ["Case Study", "Healthcare"],
    readingTime: "7 min read",
    content: [
      {
        type: "p",
        text: "InZob is a live, working platform for AI-powered business and healthcare engagement. The problem it solves is unglamorous but expensive: enquiries and patient leads come in across channels — website, WhatsApp, phone — and without a system, they sit unanswered until someone gets around to them. By then, a meaningful share of them are gone.",
      },
      { type: "h2", text: "The problem, precisely" },
      {
        type: "p",
        text: "The obvious fix — \"hire more people to respond faster\" — doesn't scale for a small clinic or business, and a generic chatbot doesn't actually solve it either, because the hard part isn't answering messages. It's qualifying intent, routing the right conversation to the right outcome, and making sure nothing falls through after the first message.",
      },
      { type: "h2", text: "What had to be true for this to work" },
      {
        type: "list",
        items: [
          "Conversations needed to happen where people already are — WhatsApp and web — not a new app nobody would install.",
          "AI agents had to do real qualification, not just answer FAQs — understanding what a lead or patient actually needs before a human gets involved.",
          "Every conversation had to become structured, trackable data — a CRM view, not a disappearing chat log.",
          "Follow-up had to be automatic by default, because manual follow-up was the entire original problem.",
        ],
      },
      { type: "h2", text: "What was built" },
      {
        type: "p",
        text: "The platform combines AI-powered conversations across web and WhatsApp with agents that qualify leads and patients, a CRM layer for tracking conversation status, automated appointment scheduling, and automated follow-up sequences so nothing waits on a person to remember. On the healthcare side specifically, it extends into AI-assisted clinical documentation — patient summaries, prescription templates, and suggested doctor's notes drafted from the conversation, for a clinician to review and finalize.",
      },
      { type: "h2", text: "The product decision that mattered most" },
      {
        type: "p",
        text: "The temptation with a project like this is to build the CRM first, because it feels like the \"real\" product. InZob's actual leverage point was the conversation layer — the AI agent handling first contact well enough that a human only needs to step in for the conversations that actually need one. The CRM and reporting matter, but they're downstream of that first interaction working.",
      },
      {
        type: "p",
        text: "That ordering — solve the highest-leverage workflow first, build the supporting structure around it — is the same pattern worth applying to almost any AI product idea that starts from a real, specific pain point rather than a feature list.",
      },
    ],
  },
  {
    slug: "why-ai-mvps-fail-before-they-start",
    title: "Why Most AI MVPs Fail Before They Start (And How to Scope One That Works)",
    description:
      "The failure mode for AI product ideas is rarely the model. It's usually the scope. Here's how to tell the difference before you spend a dollar building.",
    publishedAt: "2026-09-14",
    tags: ["Product Strategy", "AI"],
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "When an AI MVP fails to gain traction, the postmortem usually blames the model — \"the AI wasn't good enough,\" \"it hallucinated,\" \"users didn't trust it.\" In most cases the model isn't the problem. The scope was decided before anyone tested whether the underlying idea actually needed AI, or needed to do as much as it was asked to do.",
      },
      { type: "h2", text: "Three questions that catch bad scope early" },
      {
        type: "list",
        items: [
          "Does this actually need AI, or does it need automation? If a rules-based workflow would solve it, adding AI adds cost and unpredictability without adding value.",
          "What's the one decision or action this needs to get right, every time, for a user to trust it? Everything else can be rough at first. That one thing can't be.",
          "What happens when the AI is wrong? If there's no graceful fallback — a human review step, a confidence threshold, an easy correction — the product will lose trust the first time it's wrong, and it will be wrong sometimes.",
        ],
      },
      { type: "h2", text: "The scoping trap: building for the demo, not the workflow" },
      {
        type: "p",
        text: "It's easy to build something that looks impressive in a five-minute demo and falls apart the first week someone tries to actually rely on it — because the demo path was hand-picked and the real usage path wasn't. A prototype worth building should be tested against the messiest realistic input you can find, not the cleanest one.",
      },
      { type: "h2", text: "A scoping approach that holds up" },
      {
        type: "p",
        text: "Start from the workflow a real person does today, badly or slowly. Automate or assist the specific step where AI clearly beats the manual alternative — faster, more consistent, or catching things a tired human misses. Leave a visible, easy path for a human to check or override the AI's output until trust is earned. Expand scope only after that narrow version is actually being used, not before.",
      },
      {
        type: "p",
        text: "This is the same discipline that shaped FundReap — an AI collections tool for businesses using Tally. It doesn't try to replace the accountant's judgment. It reads real invoice data, prioritizes which overdue accounts actually need a call today, and surfaces why — leaving the decision and the outreach to a person who trusts the input because they can see the reasoning behind it.",
      },
    ],
  },
  {
    slug: "fundreap-ai-collections-for-tally-users",
    title: "Building FundReap: AI-Powered Collections for Businesses Running on Tally",
    description:
      "How FundReap turns a business's real Tally accounting data into a daily, prioritized collection plan — and why reading real data instead of asking for manual entry was the key decision.",
    publishedAt: "2026-09-14",
    tags: ["Case Study", "Fintech"],
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "A large share of small and mid-sized Indian businesses run their accounting on Tally. Almost none of them have a clear, current view of which customers are falling behind on payments and what to do about it today. Collections tends to be reactive — someone eventually notices an old invoice and makes a call, usually too late to matter.",
      },
      { type: "h2", text: "The decision that shaped everything else" },
      {
        type: "p",
        text: "The obvious approach is to build a tool that asks businesses to enter or upload their receivables data. That fails in practice — it's extra manual work layered on top of a manual-work problem, so adoption stalls. FundReap instead reads a business's real Tally data directly, without ever writing back to it. That single decision is what made daily use realistic instead of aspirational.",
      },
      { type: "h2", text: "What was built" },
      {
        type: "list",
        items: [
          "A Tally integration that reads real invoice and payment data without touching the source system",
          "Automated collection plans that prioritize accounts by actual risk, not just by how overdue they are",
          "AI-generated insight on which accounts need attention today and why, in plain language",
          "DSO (days sales outstanding) tracking and trends over time",
          "Automated payment reminders and promise-to-pay tracking",
        ],
      },
      { type: "h2", text: "Why prioritization matters more than automation" },
      {
        type: "p",
        text: "A generic reminder blast to every overdue account is easy to build and mostly ignored — customers tune out mass reminders quickly. The harder, more valuable problem is telling a business owner which three accounts actually need a personal call this morning, and giving them a reason they can act on. That's an AI-shaped problem: reading patterns across payment history that a manual glance at a spreadsheet won't surface, then presenting the answer as a short, prioritized list instead of a wall of data.",
      },
      { type: "h2", text: "The result" },
      {
        type: "p",
        text: "FundReap is a live, working application today — not a prototype waiting for a pilot customer. It reads a real business's real Tally data and turns it into a daily plan, with the reasoning attached, so the person making the call knows why that account is on the list.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
