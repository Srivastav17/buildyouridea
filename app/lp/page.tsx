import type { Metadata } from "next";
import LandingTopBar from "@/components/LandingTopBar";
import LandingHero from "@/components/LandingHero";
import StatRow from "@/components/StatRow";
import LandingProof from "@/components/LandingProof";
import LandingSteps from "@/components/LandingSteps";
import FAQ from "@/components/FAQ";
import LeadFormSection from "@/components/LeadFormSection";
import LandingFooter from "@/components/LandingFooter";
import LandingStickyCta from "@/components/LandingStickyCta";

export const metadata: Metadata = {
  title: "Turn Your Idea Into a Working Product — Builidea",
  description:
    "Bring your SaaS, AI, or automation idea. No technical spec needed, no dev team to hire — get a real, working prototype built end to end.",
  alternates: { canonical: "/lp" },
  robots: { index: false, follow: true },
};

export default function LandingPage() {
  return (
    <>
      <LandingTopBar />
      <main>
        <LandingHero />
        <StatRow />
        <LandingProof />
        <LandingSteps />
        <FAQ />
        <LeadFormSection
          eyebrow="Start Here"
          title="Tell us what you want to build."
          description="Takes about a minute. No technical spec needed, no cost to share your idea — you'll hear back personally."
        />
      </main>
      <LandingFooter />
      <LandingStickyCta />
    </>
  );
}
