import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const DesignCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
        <img
          className="h-20 w-20 md:h-28 md:w-28 lg:w-32 lg:h-32 object-fill"
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

const DesignProcessSection = () => {
  return (
    <Container className="bg-gainsboro flex flex-col justify-center items-center text-dimgray-500 font-inter gap-5">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div>
            Starting with empathizing and try to solve a problem user is facing
            by proper defining it and ideating the best possible solutions to
            create the prototypes, Test the prototypes for user feedback so they
            can be improved based on the feedback of the users. Once the
            prototypes are ready, develop the website by working on semantic
            structure and accessibility, validate the codes properly in terms of
            structure and accessibility, and test again for final results.
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="w-full flex md:justify-end"
          animateIn="animate__fadeInRight"
          animateOnce={true}
        >
          <div className="flex md:justify-end items-end gap-2">
            <div className="flex flex-col md:gap-2 md:flex-row text-3xl md:text-4xl lg:text-5xl font-semibold">
              <span>Design </span>
              <span>Process</span>
            </div>
            <TitleLine />
          </div>
        </ScrollAnimation>
      </div>

      <div className="items-center justify-center flex flex-col text-gray-500 gap-10">
        <Container
          fluid
          className="flex flex-wrap gap-5 md:gap-10 lg:gap-28 justify-center"
        >
          <DesignCard title="Empathize" image="/empathize.svg" />
          <DesignCard title="Define" image="/define.svg" />
          <DesignCard title="Ideate" image="/ideate.svg" />
          <DesignCard title="Prototype" image="/prototype.svg" />
          <DesignCard title="User Testing" image="/user-testing.svg" />
          <DesignCard title="Develop" image="/develop.svg" />
          <DesignCard title="Code Validation" image="/code-validation.svg" />
          <DesignCard title="User Testing" image="/user-testing.svg" />
        </Container>
      </div>
    </Container>
  );
};

export default DesignProcessSection;
