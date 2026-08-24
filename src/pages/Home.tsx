import Hero from "../components/home/Hero";
import WhatIsQuail from "../components/home/WhatIsQuail";
import HowItWorks from "../components/home/HowItWorks";
import SecurityOverview from "../components/home/SecurityOverview";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <main>
      <Hero />
      <WhatIsQuail />
      <HowItWorks />
      <SecurityOverview />
      <CTA />
    </main>
  );
}

export default Home;