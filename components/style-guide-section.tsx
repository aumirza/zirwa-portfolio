import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const StyleGuideSection = () => {
  return (
    <Container
      fluid
      className="flex flex-col items-center justify-center gap-5"
    >
      <Container className="flex flex-col-reverse md:flex-row items-start justify-start gap-5 md:gap-28">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="">
            A style guide is a set of guidelines and standards that define the
            visual and functional elements of a digital design. It serves as a
            reference for designers, developers, and stakeholders, helps
            maintain brand consistency, and serves as a communication tool among
            the designers and developers.
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <div className="flex flex-row flex-grow items-end justify-start gap-2 text-21xl text-gray-300">
            <div className="flex font-semibold md:gap-2 flex-col md:flex-row text-3xl md:text-4xl">
              <span>Style </span>
              <span>Guide</span>
            </div>
            <TitleLine />
          </div>
        </ScrollAnimation>
      </Container>
      <Container fluid>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
          <img className="w-full" alt="" src="/style-guide.png" />
        </ScrollAnimation>
      </Container>
    </Container>
  );
};

export default StyleGuideSection;
