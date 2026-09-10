import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "A product studio run by a Senior Product Manager and AI Product Builder with 18+ years of experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Who's behind BuildYourIdea." />
      <About />
      <FinalCTA />
    </>
  );
}
