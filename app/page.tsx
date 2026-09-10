import Hero from "@/components/Hero";
import StatRow from "@/components/StatRow";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatRow />
      <WhoThisIsFor />
      <PortfolioTeaser />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
