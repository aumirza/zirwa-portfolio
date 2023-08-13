import type { NextPage } from "next";
import ScrollAnimation from "react-animate-on-scroll";

const AccessibilitySection: NextPage = () => {
  return (
    <div className="w-11/12 flex flex-col md:flex-row items-center justify-center ">
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
        <div className="flex flex-col items-center">
          <div className="">
            <img
              className="h-[20rem] lg:h-[28rem] object-cover"
              alt=""
              src="/screen-shot-20230516-at-733-1@2x.png"
            />
          </div>
          <div className="-mt-40 ml-44 lg:-mt-44 lg:ml-48">
            <img
              className="lg:h-80 h-52 object-cover"
              alt=""
              src="/screen-shot-20230516-at-745-1@2x.png"
            />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="flex flex-col items-start justify-start gap-10">
          <div className="flex flex-row items-end justify-start gap-2">
            <div className="text-3xl md:text-4xl   font-semibold">
              Accessibility{" "}
            </div>
            <div className="bg-goldenrod  w-24 md:w-28 h-2" />
          </div>
          <div className="text-sm md:text-base">
            Accessibility includes not only the outward depiction but also what
            is going on behind the scenes. Proper tags and structure are
            employed to deliver a more efficient experience to screen readers,
            and these concerns also lead to design modifications. To improve the
            user experience for screen readers.
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default AccessibilitySection;
