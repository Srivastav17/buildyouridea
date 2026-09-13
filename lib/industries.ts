export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  hasRealWork: boolean;
  builtWith?: {
    project: string;
    description: string;
    whatWasBuilt: string[];
    screenshotSrc?: string;
  };
  opportunities: {
    title: string;
    description: string;
  }[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "AI-assisted patient engagement and follow-up",
    hasRealWork: true,
    builtWith: {
      project: "InZob",
      description:
        "InZob is a real, working platform used for AI-powered business and healthcare engagement — built to solve slow, manual follow-up on patient and lead enquiries coming in across channels.",
      whatWasBuilt: [
        "AI-powered conversations across web and messaging",
        "AI agents for patient and lead qualification",
        "WhatsApp engagement and automated messaging",
        "Appointment scheduling and automation",
        "Automated follow-up sequences",
        "Conversation intelligence and analytics",
        "AI-assisted clinical documentation — patient summaries, prescriptions, and doctor's notes",
      ],
      screenshotSrc: "/screenshots/inzob-clinical.png",
    },
    opportunities: [
      {
        title: "AI intake and triage assistant",
        description:
          "An AI agent that collects symptoms or reason-for-visit before an appointment, structures it for the care team, and flags anything urgent.",
      },
      {
        title: "No-show reduction workflows",
        description:
          "Automated reminder sequences across WhatsApp and SMS, with rescheduling built in, to cut missed-appointment rates.",
      },
      {
        title: "Post-visit follow-up automation",
        description:
          "Automatic check-ins after a visit or procedure, with escalation to staff when a patient reports a problem.",
      },
    ],
  },
  {
    slug: "fintech",
    name: "Fintech",
    tagline: "AI-powered accounts receivable collections",
    hasRealWork: true,
    builtWith: {
      project: "FundReap",
      description:
        "FundReap is a live product that reads a business's real Tally accounting data and turns overdue invoices into a prioritized, AI-guided collection plan — built end-to-end from a single idea.",
      whatWasBuilt: [
        "Tally integration for reading real invoice and payment data",
        "Automated collection plans prioritized by risk",
        "AI-generated insights on which accounts need attention and why",
        "DSO (days sales outstanding) tracking and trends",
        "Automated payment reminders and promise-to-pay tracking",
      ],
      screenshotSrc: "/screenshots/fundreap-dashboard.png",
    },
    opportunities: [
      {
        title: "AI-assisted research and analysis tools",
        description:
          "DiveGrow, a live multi-engine AI-assisted options-trading research platform for NIFTY/BANKNIFTY, is one example — actively running paper trading, no real-money orders placed.",
      },
      {
        title: "Automated onboarding and KYC flows",
        description:
          "Guided, AI-assisted onboarding that reduces drop-off and routes edge cases to a human reviewer instead of hard-blocking users.",
      },
      {
        title: "Customer support and query automation",
        description:
          "An AI agent that handles common account and transaction questions, freeing a support team for the cases that actually need them.",
      },
    ],
  },
  {
    slug: "martech",
    name: "Marketing Tech",
    tagline: "AI content and automation for marketing teams",
    hasRealWork: true,
    builtWith: {
      project: "InZob's marketing automation",
      description:
        "A content engine built for InZob's own marketing — it researches trends, plans a themed content calendar, and drafts branded social posts, with a human reviewing and approving every post before it goes live.",
      whatWasBuilt: [
        "Automated trend research and content calendar planning",
        "AI-generated captions and images from brand guidelines",
        "A human-in-the-loop review and approval dashboard",
        "Scheduled, automated publishing once approved",
      ],
    },
    opportunities: [
      {
        title: "Multi-channel content repurposing",
        description:
          "Turn one piece of content into platform-specific variants automatically, keeping a consistent brand voice across channels.",
      },
      {
        title: "Campaign performance summarization",
        description:
          "An AI layer over existing analytics that turns raw campaign numbers into a plain-language weekly summary for the team.",
      },
      {
        title: "Lead scoring from marketing engagement",
        description:
          "Score and route inbound leads based on how they've engaged with content and messaging, before a sales team ever touches them.",
      },
    ],
  },
  {
    slug: "edtech",
    name: "EdTech",
    tagline: "Where AI-native development could help",
    hasRealWork: false,
    opportunities: [
      {
        title: "AI tutor or doubt-solving assistant",
        description:
          "A conversational assistant scoped to a specific curriculum, answering student questions and flagging topics a student is struggling with.",
      },
      {
        title: "Automated content and assessment generation",
        description:
          "Generate practice questions, summaries, or explanations from existing course material, reviewed by an educator before use.",
      },
      {
        title: "Parent and student engagement workflows",
        description:
          "Automated, personalized progress updates and reminders sent to parents or students across WhatsApp or email.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Where AI-native development could help",
    hasRealWork: false,
    opportunities: [
      {
        title: "Internal tools for production tracking",
        description:
          "A lightweight dashboard that replaces spreadsheets for tracking production runs, quality checks, or inventory movement.",
      },
      {
        title: "AI-assisted quality inspection workflows",
        description:
          "A structured tool for logging and reviewing quality issues, with patterns surfaced automatically instead of buried in reports.",
      },
      {
        title: "Supplier and order communication automation",
        description:
          "Automated status updates and follow-ups with suppliers or buyers, reducing manual coordination over email and calls.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    tagline: "Where AI-native development could help",
    hasRealWork: false,
    opportunities: [
      {
        title: "Delivery status and exception automation",
        description:
          "Automated customer updates on delivery status, with AI handling routine exceptions and escalating the rest to a human.",
      },
      {
        title: "Route and dispatch support tools",
        description:
          "Internal tools that help a dispatch team make faster decisions, without needing a full enterprise logistics platform.",
      },
      {
        title: "AI-assisted customer support for shipments",
        description:
          "A conversational agent that answers \"where is my order\" and similar questions instantly, across WhatsApp or web chat.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Where AI-native development could help",
    hasRealWork: false,
    opportunities: [
      {
        title: "AI lead qualification for property enquiries",
        description:
          "An agent that qualifies inbound property enquiries — budget, timeline, requirements — before they reach a sales team.",
      },
      {
        title: "Automated site-visit scheduling",
        description:
          "Conversational scheduling for property visits across WhatsApp, with automatic reminders and rescheduling.",
      },
      {
        title: "Listing and document automation",
        description:
          "Tools that speed up generating listing descriptions or standard documents from structured property data.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
