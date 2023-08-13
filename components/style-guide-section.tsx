import ScrollAnimation from "react-animate-on-scroll";

const StyleGuideSection = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <div className="py-10 flex flex-col-reverse md:flex-row items-start justify-start gap-10">
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
            <div className="block whitespace-nowrap text-3xl md:text-4xl">
              Style Guide
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <img className="w-full" alt="" src="/style-guide.png" />
      </ScrollAnimation>
    </div>
  );
};

export default StyleGuideSection;
