import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const LoFidelitySection = () => {
  return (
    <Container fluid className="flex flex-col items-center">
      <Container className="flex flex-col-reverse md:flex-row justify-between  py-10 gap-10">
        <ScrollAnimation
          className="flex justify-end"
          animateIn="animate__fadeInLeft"
          animateOnce={true}
        >
          <div className="max-w-xl text-lg">
            Lo-fi prototypes can be created rapidly and involve simple materials
            like paper, sketches, or digital wireframes, which allows designers
            to iterate and test ideas without investing significant time or
            resources upfront.
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <div className="flex items-end justify-start gap-3 font-semibold text-gray-300">
            <div className="flex flex-col md:gap-1  font-black">
              <div className="text-3xl md:text-4xl whitespace-nowrap">
                <span>Lo-fidelity</span>
              </div>
              <div className="text-4xl">Prototypes</div>
            </div>
            <TitleLine />
          </div>
        </ScrollAnimation>
      </Container>
      <Container fluid>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <img className="w-full object-cover" alt="" src="/lofid.png" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="flex flex-col p-2.5 items-start justify-start">
              <img className="w-full  object-cover" alt="" src="/lo-fid2.png" />
            </div>
            <Container className="text-base text-gray-100 text-center">
              Exploration of different interactions on paper and digital
              interface
            </Container>
          </div>
        </ScrollAnimation>
      </Container>
    </Container>
  );
};

export default LoFidelitySection;
