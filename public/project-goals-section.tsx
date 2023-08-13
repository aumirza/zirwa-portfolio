import ScrollAnimation from "react-animate-on-scroll";
import Play2 from "../asset/paly-1@2x.png";
import Image from "next/image";

const ProjectGoalsSection = () => {
  return (
    <div className="w-full flex flex-col items-center text-dimgray-500">
      <div className="w-11/12 py-10 flex flex-col items-start justify-center gap-5">
        <div className="flex flex-col items-start justify-start gap-3">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="flex flex-row items-end justify-start gap-2">
              <div className="text-4xl md:text-5xl font-bold">
                Project Goals
              </div>
              <div className="bg-goldenrod w-32 md:w-48 h-1.5" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <div className="text-black inline-block">
              The primary goal is to inspire individuals to embrace their
              creative potential and explore innovative thinking. By providing
              activities that aim to ignite a spark of creativity within each
              participant.
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col sm:flex-row gap-5  justify-between  text-dimgray-400">
          <div className="flex flex-col md:w-1/2 gap-2">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <div>
                <b className="text-15xl lg:text-21xl">
                  <p className="m-0">{`Play is `}</p>
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
      </div>

      <div className="py-10 md:py-0 md:h-screen bg-dimgray-300 flex flex-col items-center w-full justify-center">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <img
            className="h-[20rem] md:h-[32rem] lg:h-[35rem] object-cover z-[0]"
            alt=""
            src="/paly-1@2x.png"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProjectGoalsSection;
