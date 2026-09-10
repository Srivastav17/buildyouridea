import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import WhyDifferent from "@/components/WhyDifferent";
import SampleIdeas from "@/components/SampleIdeas";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How ideas turn into working products here — and why it's different from a freelancer or a traditional agency.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Product thinking, then AI-native development."
        description="Not a freelancer taking requirements. Not a large agency with a long timeline. Here's what's actually different."
      />
      <HowItWorks />
      <WhyDifferent />
      <SampleIdeas />
      <FinalCTA />
    </>
  );
}
