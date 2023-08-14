import type { NextPage } from "next";
import Container from "../container";
import ScrollAnimation from "react-animate-on-scroll";

const ArtArchiveSection: NextPage = () => {
  return (
    <Container
      fluid
      className="flex flex-col items-center  font-case-study-2-h2 py-5"
    >
      <div className="">
        <div className="text-lg font-medium">Web Design | Web Development </div>
        <div className="text-5xl font-semibold text-gray-1100">Art Archive</div>
      </div>

      <div className="relative flex justify-center items-center">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="top-0 flex justify-center items-center  absolute">
            <img className="w-8/12" src="/explore.png" alt="" />
          </div>
        </ScrollAnimation>
        <div>
          <img className="w-full max-w-5xl" src="/explorebg.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ArtArchiveSection;
