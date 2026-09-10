import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about scope, cost, timelines, and how projects work.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Common questions." />
      <FAQ />
      <FinalCTA />
    </>
  );
}
