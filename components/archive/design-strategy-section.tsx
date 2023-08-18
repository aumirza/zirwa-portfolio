import type { NextPage } from "next";
import Container from "../container";
import ScrollAnimation from "react-animate-on-scroll";

const DesignStrategyCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="text-center">
      <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
        <img
          className="w-[4.5rem] h-[4.5rem] md:h-32 md:w-32"
          alt=""
          src={image}
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="font-semibold">{title}</div>
      </ScrollAnimation>
    </div>
  );
};

const DesignStrategySection: NextPage = () => {
  return (
    <Container fluid className="flex flex-col items-center bg-bisque py-10">
      <Container className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center justify-start gap-5">
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <div className="text-3xl md:text-5xl font-semibold">
              Design Strategy
            </div>
          </ScrollAnimation>

          <div className="md:text-lg md:text-center">
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              Design strategy is a systematic approach that involves several
              steps to create innovative solutions. It follows the principles of
              design thinking and includes empathizing with users, defining the
              problem, ideating solutions, designing prototypes, developing the
              final solution, validating through testing, and iterating based on
              user feedback.
            </ScrollAnimation>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-20">
          <DesignStrategyCard title="Empathize" image="/group-218.svg" />
          <DesignStrategyCard title="Define" image="/group-219.svg" />
          <DesignStrategyCard title="Ideate" image="/group-223.svg" />
          <DesignStrategyCard title="Design" image="/group-226.svg" />
          <DesignStrategyCard title="Prototype" image="/group-155.svg" />
          <DesignStrategyCard title="Develop" image="/group-150.svg" />
          <DesignStrategyCard title="Code Validation" image="/group-157.svg" />
          <DesignStrategyCard title="User Testing" image="/group-153.svg" />
        </div>
      </Container>
    </Container>
  );
};

export default DesignStrategySection;
