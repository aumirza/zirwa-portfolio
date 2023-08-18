import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const ProjectGoalsSection = () => {
  return (
    <Container fluid className="flex flex-col items-center text-dimgray-500">
      <Container className="py-10 flex flex-col items-start justify-center gap-5">
        <div className="flex flex-col items-start justify-start gap-3">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="flex items-end justify-start gap-2">
              <div className="flex flex-col md:flex-row text-4xl md:text-5xl font-bold  md:gap-2">
                <span>Project</span>
                <span>Goals</span>
              </div>
              <TitleLine />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className="text-black inline-block">
              The primary goal is to inspire individuals to embrace their
              creative potential and explore innovative thinking. By providing
              activities that aim to ignite a spark of creativity within each
              participant.
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col md:flex-row  gap-5 md:gap-20  justify-between  text-dimgray-400">
          <div className="flex flex-col md:w-1/2 gap-2">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <div>
                <b className="text-15xl lg:text-21xl">
                  <p className="m-0">Play is </p>
                  <p className="m-0">important</p>
                </b>
              </div>

              <div className="lg:text-lgi text-black  ">
                <ul className="pl-5">
                  <li className="">
                    It creates a safe space where unconventional ideas can
                    flourish, enabling individuals to explore new perspectives
                    and generate innovative solutions.
                  </li>
                  <li className="">
                    Play allows for experimentation without the fear of failure
                    or judgment. It provides a platform to try out different
                    approaches, take risks, and test ideas.
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <div className="flex flex-col md:w-1/2 gap-2">
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <b className="text-15xl lg:text-21xl">
                21 days countdown to become creative{" "}
              </b>
              <div className="lg:text-lgi   text-black inline-block ">
                The idea that it takes 21 days to develop a habit is a popular
                concept. The significance of 21 days lies in establishing a
                consistent routine and allowing sufficient time for repetition
                and reinforcement of the desired behavior. By committing to a
                behavior for approximately three weeks, individuals can build
                momentum, increase their likelihood of success, and create a
                foundation for long-term habit formation.
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Container>

      <Container fluid className="py-10 md:py-0 bg-dimgray-300 justify-center">
        <ScrollAnimation
          className="flex justify-center"
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <img
            className="w-11/12 md:w-8/12 object-cover"
            alt=""
            src="/paly-1@2x.png"
          />
        </ScrollAnimation>
      </Container>
    </Container>
  );
};

export default ProjectGoalsSection;
