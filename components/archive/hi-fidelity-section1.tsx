import ScrollAnimation from "react-animate-on-scroll";
import Container from "../container";

const HiFidelitySection1 = () => {
  return (
    <Container
      fluid
      className="flex flex-col py-[25px] px-0 box-border items-center gap-5"
    >
      <Container className="flex justify-center">
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <div className="text-3xl font-semibold">Hi-fidelity prototypes</div>
        </ScrollAnimation>
      </Container>

      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
        <img
          className="w-full object-cover"
          alt=""
          src="/project-3-mockup-1@2x.png"
        />
      </ScrollAnimation>
    </Container>
  );
};

export default HiFidelitySection1;
