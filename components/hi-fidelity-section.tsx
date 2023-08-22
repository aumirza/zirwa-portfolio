import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const HiFidelitySection = () => {
  return (
    <Container className="flex flex-col items-center justify-center gap-5">
      <div className="grid grid-cols-12 grid-rows-1">
        <div className="hidden md:col-start-1 md:col-end-7 md:row-start-1  sm:flex flex-col items-center justify-start">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <img
              className="relative w-[38vw] object-cover"
              alt=""
              src="/final01-1@2x.png"
            />
            <div className="font-semibold text-gray-100">
              Display of website on different screens
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-6 md:col-end-12 md:row-start-1   text-gray-300">
          <ScrollAnimation
            className="flex flex-col gap-5"
            animateIn="animate__fadeInRight"
            animateOnce={true}
          >
            <div className="flex flex-row items-end justify-start gap-2">
              <div className="flex flex-col md:flex-row md:gap-1 font-black">
                <div className="text-3xl md:text-4xl whitespace-nowrap">
                  Hi-fidelity
                </div>
                <div className="text-4xl ">Prototypes</div>
              </div>
              <TitleLine />
            </div>
            <div className="text-sm lg:text-base text-black">
              Hi-fi provides a more polished and realistic representation of the
              final product or design concept and incorporates visual elements
              and detailed graphics, allowing stakeholders and users to better
              visualize and understand the intended look and feel of the design
              and enabling designers to simulate and test the user experience
              more accurately.
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <img className="w-full max-w-4xl pb-10" alt="" src="/prototypes.gif" />
    </Container>
  );
};

export default HiFidelitySection;
