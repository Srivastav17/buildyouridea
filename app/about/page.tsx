import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "A product studio run by someone who has worked for more than 18 years as a Product Leader and AI Product Builder.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Who's behind Builidea." />
      <About />
      <FinalCTA />
    </>
  );
}
