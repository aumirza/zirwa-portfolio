import ScrollAnimation from "react-animate-on-scroll";
import Container from "../container";

const LoFidelitySection1 = () => {
  return (
    <Container className="flex flex-col py-5 md:items-center gap-5">
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="font-semibold text-3xl  text-gray-1100">
          Lo-fidelity prototypes
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
        <img className="w-full" alt="" src="/lofid.png" />
      </ScrollAnimation>
    </Container>
  );
};

export default LoFidelitySection1;
