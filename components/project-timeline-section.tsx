import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";

interface TimelineCardProps {
  week: number[];
  title: string;
  odd?: boolean;
  hideArrow?: boolean;
  texts: string[];
}

const TimelineCard = ({
  week,
  title,
  odd,
  texts,
  hideArrow,
}: TimelineCardProps) => {
  return (
    <div className="relative  flex justify-center w-48 lg:w-56 h-56 lg:h-64">
      <ScrollAnimation
        animateIn={"animate__fadeIn" + (odd ? "Up" : "Down")}
        animateOnce={true}
        delay={100}
        className="z-20"
      >
        <div className="p-10  z-20 h-full w-full flex flex-col gap-2 box-border items-center justify-center  bg-[url(/timeline-card-bg.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="mt-5 font-semibold">Week {week.join(", ")}</div>
          <b className="text-dimgray-800 text-sm">{title}</b>
          <div className="text-sm leading-4 font-inherit inline-block ">
            <ul className="m-0 pl-2">
              {texts.map((text, index) => {
                return (
                  <li key={index + text.substring(0, 5)} className="mb-0">
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      <div
        className={
          "hidden absolute md:block bg-dimgray-100 z-10 h-40 w-3 " +
          (odd ? "top-1/2" : "bottom-1/2")
        }
      />
      {!hideArrow ? (
        <ScrollAnimation
          animateIn={"animate__fadeIn" + (odd ? "Up" : "Down")}
          animateOnce={true}
          className={
            "absolute md:hidden top-1/2 z-10 " +
            (odd ? "-left-16" : "-right-16 -scale-x-100")
          }
          //  -scale-x-100
        >
          <div className="bg-dimgray-100 z-10 h-3 w-16"></div>
          <div className="bg-dimgray-100 z-10 h-40 w-3"></div>
        </ScrollAnimation>
      ) : null}
    </div>
  );
};

const timelineData = [
  {
    week: [1],
    title: "Identify problem",
    texts: ["Identify the problem.", "Come up with best possible solution."],
  },
  {
    week: [2, 3],
    title: "Strategies to benefit users",
    texts: [
      "Planning how to implement the best solutions for better user experience.",
    ],
  },
  {
    week: [4, 5],
    title: "Work on prototypes",
    texts: ["Work on lo-fi prototypes.", "Work on Hi-fi prototypes."],
  },
  {
    week: [6, 7],
    title: "Finalize and test prototypes",
    texts: [
      "Finalize the prototypes and test for the user experience and functionality.",
    ],
  },
  {
    week: [8, 9, 10],
    title: "User feedback, semantic code",
    texts: ["Ask for feedback.", "Build a semantic structure to develop."],
  },
  {
    week: [11, 12],
    title: "Develop and validate codes.",
    texts: ["Develop the website.", "Validate the codes."],
  },
];

const ProjectTimelineSection = () => {
  return (
    <Container
      fluid
      className="relative  flex flex-col justify-center  gap-10 text-dimgray-500"
    >
      <Container className="mx-auto">
        <ScrollAnimation
          className="flex"
          animateIn="animate__fadeInLeft"
          animateOnce={true}
        >
          <div className="flex items-end justify-start gap-2 font-bold">
            <div className="font-black text-3xl  md:text-3xl lg:text-5xl ">
              Project Timeline
            </div>
            <div className="bg-goldenrod w-36 md:w-48 h-1.5" />
          </div>
        </ScrollAnimation>

        <div className="flex flex-row-reverse justify-center md:hidden">
          <div className="flex flex-col gap-48 -ml-10">
            {
              // only odd
              timelineData
                .filter((_, index) => index % 2 === 0)
                .map((data, index) => {
                  return <TimelineCard key={index} {...data} odd={true} />;
                })
            }
          </div>
          <div className="flex flex-col mt-52 gap-48">
            {
              // only even
              timelineData
                .filter((_, index) => index % 2 === 1)
                .map((data, index) => {
                  return (
                    <TimelineCard
                      hideArrow={index === 2}
                      key={index}
                      {...data}
                      odd={false}
                    />
                  );
                })
            }
          </div>
        </div>
      </Container>
      <div className="relative hidden md:flex justify-center">
        <Container className="grid grid-cols-10 grid-rows-2 gap-y-24 lg:gap-y-16">
          {timelineData.map((data, index) => {
            return (
              <>
                {index !== 0 && index === timelineData.length / 2 ? (
                  <>
                    <div className="col-span-1" key={index} />
                    <div className="col-span-1" key={index} />
                  </>
                ) : null}
                <div className="col-span-3" key={data.week.join(" ")}>
                  <TimelineCard
                    key={index}
                    {...data}
                    odd={index < timelineData.length / 2}
                  />
                </div>
              </>
            );
          })}
        </Container>
        <ScrollAnimation
          className="absolute top-1/2 bg-dimgray-100 h-3 w-full "
          animateIn="animate__fadeIn"
          animateOnce={true}
        ></ScrollAnimation>
      </div>
    </Container>
  );
};

export default ProjectTimelineSection;
