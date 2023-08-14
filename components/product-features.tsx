import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ProductFeaturesSection = () => {
  return (
    <div className="w-full flex justify-center bg-dimgray-700 py-10 text-white">
      <div className="w-11/12 flex flex-col justify-center gap-5">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="w-full flex flex-row items-end justify-start gap-2">
            <div className="font-black inline-block ">
              <div className="text-3xl md:text-4xl">Product</div>
              <div className="text-4xl md:text-5xl">Features</div>
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </ScrollAnimation>

        <div className="flex flex-col items-start justify-center gap-10 md:gap-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <ScrollAnimation
              className="md:w-1/2"
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              <p className="m-0">
                Home page provides the whole walk through of the website, Easy
                sign up helps the users to registered and also highlights how
                this challenge works.
              </p>
              <ul className="m-0">
                <li className="mb-0">Walkthrough of the website.</li>
                <li className="mb-0">Importance of play in creative process</li>
                <li>Easy sign up</li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <div className="flex flex-col justify-between">
                <div className="relative ml-36 flex  items-center justify-center bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="h-[21rem] lg:h-[24.8rem] object-fit"
                    alt=""
                    src="homepage-1@2x.png"
                  />
                  <img
                    className="absolute top-1 w-[12rem] lg:w-[14rem] h-[23rem] lg:h-[27rem] object-fit"
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className="flex flex-col -mt-64 lg:-mt-72">
                  <img
                    className="w-[10rem] lg:w-[12rem] object-cover"
                    alt=""
                    src="/homepage-2@2x.png"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="flex  flex-col md:flex-row items-center justify-between gap-10 md:-mt-10">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <div className="flex flex-col">
                <div className="relative">
                  <img
                    className="mt-2.5 ml-5 rounded-2xl w-[17rem] lg:w-[20rem] object-cover"
                    alt=""
                    src="/calendar-1@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-0 w-[19.5rem] lg:w-[22.5rem] object-cover"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <div className="relative ml-52 lg:ml-60 -mt-64 lg:-mt-72">
                  <img
                    className="absolute top-0 left-0 w-[11rem] lg:w-[13rem] object-cover"
                    alt=""
                    src="/image-42@2x.png"
                  />
                  <img
                    className="rounded-10xl mt-2.5 lg:mt-3 ml-5 w-[8.5rem]  lg:w-[10rem] object-cover"
                    alt=""
                    src="/screen-shot-20230516-at-919-1@2x.png"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
              className="md:w-1/2"
            >
              A calendar page helps the user to keep track of activities and an
              easy access to all the activity pages from one page.
            </ScrollAnimation>
          </div>
          <div className="flex  flex-col-reverse md:flex-row items-center justify-between gap-10 md:-mt-10">
            <ScrollAnimation
              className="md:w-1/2"
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              A music feature is also incorporated to the website for the users
              who prefer to play music while working. Images are also provided
              to give the visual aid and Hint feature is also available for help
              on each activity page.{" "}
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <div className="flex">
                <div className="flex flex-col gap-5 mt-12 lg:mt-20 -mr-16 lg:-mr-20">
                  <img
                    className="w-[10rem] lg:w-[13rem] object-cover z-10"
                    alt=""
                    src="/screen-shot-20230516-at-904-1@2x.png"
                  />
                  <img
                    className="w-36 lg:w-44 object-cover z-30"
                    alt=""
                    src="/screen-shot-20230516-at-923-1@2x.png"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <img
                    className="w-[10rem] lg:w-[13rem] object-cover"
                    alt=""
                    src="/screen-shot-20230516-at-903-1@2x.png"
                  />
                  <img
                    className="w-36 lg:w-44 object-cover z-20"
                    alt=""
                    src="/screen-shot-20230516-at-907-1@2x.png"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="flex  flex-col md:flex-row  items-center justify-center gap-10 md:-mt-10">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <div className="flex">
                <img
                  className="w-[20rem] lg:w-[28rem] h-auto"
                  alt=""
                  src="/screen-shot-20230518-at-1150-1@2x.png"
                />

                <div className="mt-24 lg:mt-36 -ml-24 lg:-ml-32 ">
                  <img
                    className="w-[8rem] lg:w-[11rem] object-cover"
                    alt=""
                    src="/screen-shot-20230518-at-1145-1@2x.png"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="md:w-1/2"
              animateIn="animate__fadeIn"
              animateOnce={true}
            >
              <div>
                A daily email reminder for the users to provide them a sneak
                peak about the activity and keep them engaged to the countdown
                experience.
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesSection;
