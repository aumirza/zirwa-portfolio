import type { NextPage } from "next";
import ScrollAnimation from "react-animate-on-scroll";

const VisualDesignSection: NextPage = () => {
  return (
    <div className="md:w-11/12 text-21xl text-gray-300 py-10">
      <div className="flex flex-col box-border items-center justify-center gap-5">
        <ScrollAnimation
          className="w-full"
          animateIn="animate__fadeInLeft"
          animateOnce={true}
        >
          <div className="flex flex-row items-end justify-start gap-1">
            <div className="font-semibold text-3xl md:text-4xl">
              Visual Design
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </ScrollAnimation>

        <div className="flex justify-center">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <img src="visual-design.png" alt="" className="w-full" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default VisualDesignSection;
