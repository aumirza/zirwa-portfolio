import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const ConclusionSection = () => {
  return (
    <Container className="flex flex-col md:flex-row  justify-center text-gray-300 gap-5 lg:gap-32">
      <div className="flex flex-col gap-5">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="flex items-end justify-start gap-2">
            <div className="relative font-black text-end text-3xl md:text-4xl">
              Conclusion
            </div>
            <TitleLine />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="text-sm lg:text-base">
            By adopting a playful mindset, individuals are encouraged to break
            free from conventional thinking patterns and embrace curiosity,
            experimentation, and risk-taking. Play allows for the freedom to
            explore unconventional ideas, challenge assumptions, and generate
            novel solutions. It promotes a relaxed and open state of mind, which
            is conducive to generating fresh insights and making unexpected
            connections. Having a countdown experience enables the users to stay
            consistent and focused.
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <img
          className="w-full md:w-auto md:h-56 lg:h-72 object-cover z-[1]"
          alt=""
          src="/animation-2@2x.png"
        />
      </ScrollAnimation>
    </Container>
  );
};

export default ConclusionSection;
