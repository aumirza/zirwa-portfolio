import ScrollAnimation from "react-animate-on-scroll";

const LoFidelitySection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col-reverse md:flex-row md:items-end justify-start py-10 gap-10">
        <ScrollAnimation
          className="flex justify-end"
          animateIn="animate__fadeInLeft"
          animateOnce={true}
        >
          <div className="w-10/12">
            Lo-fi prototypes can be created rapidly and involve simple materials
            like paper, sketches, or digital wireframes, which allows designers
            to iterate and test ideas without investing significant time or
            resources upfront.
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <div className="flex items-end justify-start gap-3 font-semibold text-gray-300">
            <div className="font-black inline-block ">
              <div className="text-3xl md:text-4xl">Lo-fidelity</div>
              <div className="text-4xl md:text-5xl">Prototypes</div>
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </ScrollAnimation>
      </div>
      <div className="">
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
          <img
            className="w-full max-w-5xl object-cover"
            alt=""
            src="/lofid.png"
          />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="flex flex-col p-2.5 items-start justify-start">
            <img
              className="w-full max-w-5xl object-cover"
              alt=""
              src="/screen-shot-20230516-at-641-1@2x.png"
            />
          </div>
          <div className="text-base text-gray-100">
            Exploration of different interactions on paper and digital interface
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default LoFidelitySection;
