import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";

const HeroSection = () => {
  return (
    <Container className="md:min-h-[calc(100vh-3.5rem)] py-10 md:py-0 bg-gainsboro  flex flex-col md:flex-row  items-center justify-center gap-5  font-inter ">
      <div className="flex flex-col px-5 items-center justify-start">
        <ScrollAnimation animateIn="animate__headShake" animateOnce={true}>
          <img
            className="h-[18rem] md:h-[26rem] object-cover"
            alt=""
            src="/play1-1@2x.png"
          />
        </ScrollAnimation>
        <div className="font-semibold text-base text-gray-100">
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            Two mobiles with two different interaction screens from website
          </ScrollAnimation>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col items-start justify-start gap-4 md:gap-2 text-lgi text-dimgray-500">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="font-medium">
            Figma Prototype | Web Design | Web Development
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="flex md:flex-col items-end md:items-start"
          animateIn="animate__fadeInRight"
          animateOnce={true}
        >
          <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl">
            <b>Play your way </b>

            <span className="text-4xl md:text-5xl lg:text-6xl font-black">
              to Creativity
            </span>
          </div>
          <div className="bg-goldenrod w-28 h-1.5" />
        </ScrollAnimation>

        <ScrollAnimation
          className="flex flex-col gap-1"
          animateIn="animate__fadeInUp"
          animateOnce={true}
        >
          <div className="text-sm sm:text-base md:leading-[130%] ">
            There are many people who believe that creativity is either innate
            or not a talent that can be learned. But if there’s a way to be
            learn to be creative.{" "}
          </div>

          <div className="text-smi font-medium md:text-base">
            Figma Prototype :
            <a
              className=""
              href={`https://www.figma.com/file/U6xKFaY8Isn9oe18h9UZIx/countdown-experience-Final?type=design&node-id=0%3A1&t=rqED9v91bIcnB5C7-1`}
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                Play your way to creativity- functional prototype
              </span>
            </a>
          </div>
          <div className="text-smi font-medium  md:text-base ">
            {`Final Website : `}
            <a
              className=""
              href="https://zirwatariq.github.io/project-2-repository-/"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                Play your way to creativity- functional website
              </span>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
};

export default HeroSection;
