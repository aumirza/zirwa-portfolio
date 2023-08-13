import ScrollAnimation from "react-animate-on-scroll";

const ConclusionSection = () => {
  return (
    <div className="flex  items-center  justify-center text-gray-300 font-inter">
      <div className="w-11/12 flex flex-col justify-between">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="flex items-end justify-start gap-2">
            <div className="relative font-black text-end text-3xl md:text-4xl">
              Conclusion
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </ScrollAnimation>
        <div className="flex  flex-col md:flex-row items-center justify-between gap-2">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="text-sm lg:text-base">
              By adopting a playful mindset, individuals are encouraged to break
              free from conventional thinking patterns and embrace curiosity,
              experimentation, and risk-taking. Play allows for the freedom to
              explore unconventional ideas, challenge assumptions, and generate
              novel solutions. It promotes a relaxed and open state of mind,
              which is conducive to generating fresh insights and making
              unexpected connections. Having a countdown experience enables the
              users to stay consistent and focused.
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <img
              className="h-52 lg:h-64 object-cover z-[1]"
              alt=""
              src="/animation-2@2x.png"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;
