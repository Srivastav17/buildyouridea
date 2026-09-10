import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatICanBuild from "@/components/WhatICanBuild";
import Portfolio from "@/components/Portfolio";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and capabilities — AI products, SaaS prototypes, and business automation built from idea to working software.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="What I can build, and what's already been built."
        description="Real case studies, not a service menu — plus the range of product types this covers."
      />
      <WhatICanBuild />
      <Portfolio />
      <FinalCTA />
    </>
  );
}
