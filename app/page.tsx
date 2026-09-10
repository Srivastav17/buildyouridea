import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import WhatICanBuild from "@/components/WhatICanBuild";
import WhyDifferent from "@/components/WhyDifferent";
import SampleIdeas from "@/components/SampleIdeas";
import FAQ from "@/components/FAQ";
import LeadFormSection from "@/components/LeadFormSection";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Portfolio />
      <HowItWorks />
      <WhatICanBuild />
      <WhyDifferent />
      <SampleIdeas />
      <FAQ />
      <LeadFormSection />
      <About />
      <FinalCTA />
    </>
  );
}
