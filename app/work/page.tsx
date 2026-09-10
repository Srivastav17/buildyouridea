import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatICanBuild from "@/components/WhatICanBuild";
import Portfolio from "@/components/Portfolio";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and capabilities — AI products, SaaS prototypes, and business automation built from idea to working software.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="What gets built here, and what's already shipped."
        description="Real case studies, not a service menu — plus the range of product types this covers."
      />
      <WhatICanBuild />
      <Portfolio />
      <FinalCTA />
    </>
  );
}
