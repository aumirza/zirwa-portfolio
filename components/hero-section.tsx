import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const HeroSection = () => {
  return (
    <Container className="md:min-h-[calc(100vh-3.5rem)]  flex flex-col md:flex-row-reverse justify-between md:items-center gap-5">
      <div className="flex flex-col px-5 items-center justify-center">
        <ScrollAnimation animateIn="animate__headShake" animateOnce={true}>
          <img
            className="h-[18rem] md:h-[26rem] lg:h-[30rem] object-cover"
            alt=""
            src="/play1-1@2x.png"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
          <div className="font-semibold text-base text-gray-100 text-center">
            Two mobiles with two different interaction screens from website
          </div>
        </ScrollAnimation>
      </div>

      <div className="md:w-1/2 flex flex-col gap-4 md:gap-2 text-dimgray-500">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="font-medium">
            Figma Prototype | Web Design | Web Development
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="flex  items-end gap-1"
          animateIn="animate__fadeInRight"
          animateOnce={true}
        >
          <div className="flex flex-col text-2xl md:text-3xl">
            <b>Play your way </b>

            <span className="text-3xl md:text-4xl lg:text-5xl font-black">
              to Creativity
            </span>
          </div>
          <TitleLine />
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
