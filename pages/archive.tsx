import type { NextPage } from "next";
import ArtArchiveSection from "../components/archive/art-archive-section";
import WhatSection from "../components/archive/what-section";
import UserFlowSection1 from "../components/archive/user-flow-section1";
import LoFidelitySection1 from "../components/archive/lo-fidelity-section1";
import DesignStrategySection from "../components/archive/design-strategy-section";
import HiFidelitySection1 from "../components/archive/hi-fidelity-section1";
import Conclusion1 from "../components/archive/conclusion1";
import MobileCenteredDesignSection from "../components/archive/mobile-centered-design-section";
import HowSection from "../components/archive/how-section";

const ArtArhive: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center w-full  gap-10">
      <ArtArchiveSection />
      <WhatSection />
      <DesignStrategySection />
      <UserFlowSection1 />
      <LoFidelitySection1 />
      <HiFidelitySection1 />
      <MobileCenteredDesignSection />
      <HowSection />
      <Conclusion1 />
    </div>
  );
};

export default ArtArhive;
