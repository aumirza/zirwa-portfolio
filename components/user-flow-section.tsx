import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const UserFlowSection = () => {
  return (
    <div className="w-11/12 flex flex-col items-center justify-center gap-5">
      <div className="w-full flex flex-row items-end justify-start gap-2">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dimgray-500 ">
            User Flow
          </div>
          <div className="bg-goldenrod w-28 h-2" />
        </ScrollAnimation>
      </div>
      <div className="w-full">
        <ScrollAnimation
          className=" flex flex-col items-center "
          animateIn="animate__fadeInUp"
          animateOnce={true}
        >
          <img className="w-96" alt="" src="flow.png" />
          <div className="text-base font-semibold text-gray-100 ">
            User flow of the website, to have an idea about how the user is
            going to interact on the website
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default UserFlowSection;
