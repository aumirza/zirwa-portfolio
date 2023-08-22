import Container from "../container";
import ScrollAnimation from "react-animate-on-scroll";

const ArtArchiveSection = () => {
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
        <div className="top-0 absolute">
          <ScrollAnimation
            className="flex justify-center items-center "
            animateIn="animate__fadeIn"
            animateOnce={true}
          >
            <img className="w-[65vw]" src="/explore.png" alt="" />
          </ScrollAnimation>
        </div>
        <div>
          <img className="w-[100vw]" src="/explorebg.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ArtArchiveSection;
