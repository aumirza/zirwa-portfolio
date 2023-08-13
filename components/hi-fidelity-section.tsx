import type { NextPage } from "next";
import ScrollAnimation from "react-animate-on-scroll";

const HiFidelitySection: NextPage = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="grid grid-cols-12 grid-rows-1">
          <div className="hidden md:col-start-1 md:col-end-7 md:row-start-1  sm:flex flex-col items-center justify-start">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <img
                className="relative mt-24  h-56 lg:h-72 object-cover"
                alt=""
                src="/final01-1@2x.png"
              />
              <div className="font-semibold text-gray-100">
                Display of website on different screens
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-span-12 gap-5 md:col-span-6 md:col-start-6 md:col-end-12 md:row-start-1 flex flex-col items-start justify-start  text-gray-300">
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <div className="flex flex-row items-end justify-start gap-2">
                <div className="font-black inline-block ">
                  <div className="text-3xl md:text-4xl">Hi-fidelity</div>
                  <div className="text-4xl md:text-5xl">Prototypes</div>
                </div>
                <div className="bg-goldenrod w-28 h-2" />
              </div>
              <div className="text-sm lg:text-base text-black">
                Hi-fi provides a more polished and realistic representation of
                the final product or design concept and incorporates visual
                elements and detailed graphics, allowing stakeholders and users
                to better visualize and understand the intended look and feel of
                the design and enabling designers to simulate and test the user
                experience more accurately.
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <img className="w-full" alt="" src="/prototypes.gif" />
      </div>
    </div>
  );
};

export default HiFidelitySection;
