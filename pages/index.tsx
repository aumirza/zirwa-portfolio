import type { NextPage } from "next";
import ProjectGoalsSection from "../components/project-goals-section";
import ConclusionSection from "../components/conclusion-section";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import DesignProcessSection from "../components/design-process-section";
import UserFlowSection from "../components/user-flow-section";
import LoFidelitySection from "../components/lo-fidelity-section";
import HiFidelitySection from "../components/hi-fidelity-section";
import AccessibilitySection from "../components/accessibility-section";
import StyleGuideSection from "../components/style-guide-section";
import VisualDesignSection from "../components/visual-design-section";
import ProjectTimelineSection from "../components/project-timeline-section";
import ProductFeaturesSection from "../components/product-features";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center my-5 mx-auto bg-white text-gray-400 ">
      <div className="w-11/12 flex flex-col gap-10">
        <HeroSection />
        <AboutSection />
        <ProjectGoalsSection />
        <ProjectTimelineSection />
        <DesignProcessSection />
        <UserFlowSection />
        <LoFidelitySection />
        <HiFidelitySection />
        <AccessibilitySection />
        <StyleGuideSection />
        <VisualDesignSection />
      </div>
      <ProductFeaturesSection />
      <div className="w-11/12">
        <ConclusionSection />
      </div>
    </main>
  );
};

export default Home;
