import type { NextPage } from "next";
import ScrollAnimation from "react-animate-on-scroll";

const DesignCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
        <img
          className="h-20 w-20 md:h-28 md:w-28 lg:w-30 lg:h-30 object-fill"
          alt=""
          src={image}
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="relative font-semibold">{title}</div>
      </ScrollAnimation>
    </div>
  );
};

const DesignProcessSection: NextPage = () => {
  return (
    <div className="w-full bg-gainsboro flex flex-col justify-center items-center text-dimgray-500 font-inter gap-5">
      <ScrollAnimation
        className="w-full flex justify-end"
        animateIn="animate__fadeInRight"
        animateOnce={true}
      >
        <div className="flex justify-end items-end gap-3">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Design Process
          </div>
          <div className="bg-goldenrod w-28 h-2" />
        </div>
      </ScrollAnimation>

      <div className="w-11/12 items-center flex flex-col text-gray-500 gap-10">
        <div className="">
          Starting with empathizing and try to solve a problem user is facing by
          proper defining it and ideating the best possible solutions to create
          the prototypes, Test the prototypes for user feedback so they can be
          improved based on the feedback of the users. Once the prototypes are
          ready, develop the website by working on semantic structure and
          accessibility, validate the codes properly in terms of structure and
          accessibility, and test again for final results.
        </div>
        <div className="w-full flex flex-wrap gap-5 justify-center">
          <DesignCard title="Empathize" image="/layer-11.svg" />
          <DesignCard title="Define" image="/layer-12.svg" />
          <DesignCard title="Ideate" image="/group-154.svg" />
          <DesignCard title="Prototype" image="/group-155.svg" />
          <DesignCard title="User Testing" image="/group-156.svg" />
          <DesignCard title="Develop" image="/group-150.svg" />
          <DesignCard title="Code Validation" image="/group-157.svg" />
          <DesignCard title="User Testing" image="/group-156.svg" />
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;
