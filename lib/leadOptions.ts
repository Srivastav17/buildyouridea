export const AUDIENCE_OPTIONS = [
  "Customers",
  "My employees",
  "Businesses",
  "Startup users",
  "Other",
] as const;

export const STAGE_OPTIONS = [
  "Just an idea",
  "I have a rough plan",
  "I have designs",
  "I have an existing product",
  "I need to improve an existing product",
] as const;

export const GOAL_OPTIONS = [
  "Working prototype",
  "MVP",
  "AI feature",
  "Business automation",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
] as const;

export const LEAD_STATUSES = [
  "NEW",
  "REVIEWING",
  "CONTACTED",
  "QUALIFIED",
  "PROPOSAL_SENT",
  "WON",
  "LOST",
] as const;

export const LEAD_STATUS_LABELS: Record<(typeof LEAD_STATUSES)[number], string> = {
  NEW: "New",
  REVIEWING: "Reviewing",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  PROPOSAL_SENT: "Proposal Sent",
  WON: "Won",
  LOST: "Lost",
};
