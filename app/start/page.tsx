import type { Metadata } from "next";
import LeadFormSection from "@/components/LeadFormSection";

export const metadata: Metadata = {
  title: "Tell Me Your Idea",
  description:
    "Describe your idea in your own words — no technical specification needed. Get it reviewed and hear back on next steps.",
};

export default function StartPage() {
  return <LeadFormSection />;
}
