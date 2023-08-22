import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";

const ProductFeaturesSection = () => {
  return (
    <Container
      fluid
      className="flex justify-center bg-dimgray-700 py-10 text-white"
    >
      <Container className="flex flex-col justify-center gap-5">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="w-full flex flex-row items-end justify-start gap-2">
            <div className="flex flex-col md:flex-row font-black md:gap-2">
              <div className="text-3xl md:text-4xl">Product</div>
              <div className="text-4xl ">Features</div>
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </ScrollAnimation>

        <div className="flex flex-col items-start justify-center gap-5 md:gap-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5  ">
            <ScrollAnimation
              className="md:w-1/3"
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              <p className="text-xl md:hidden mb-0">1</p>
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
              <img src="/features1.png" className="w-full md:w-[30vw]" alt="" />
            </ScrollAnimation>
          </div>
          <div className="flex  flex-col-reverse md:flex-row items-center justify-between gap-5 md:-mt-10">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <img className="w-full md:w-[35vw]" alt="" src="/features2.png" />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
              className="md:w-1/3"
            >
              <p className="text-xl md:hidden mb-0">2</p>
              <p>
                A calendar page helps the user to keep track of activities and
                an easy access to all the activity pages from one page.
              </p>
            </ScrollAnimation>
          </div>
          <div className="flex  flex-col md:flex-row items-center justify-between gap-5 md:-mt-10">
            <ScrollAnimation
              className="md:w-1/3"
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              <p className="text-xl md:hidden mb-0">3</p>

              <p>
                A music feature is also incorporated to the website for the
                users who prefer to play music while working. Images are also
                provided to give the visual aid and Hint feature is also
                available for help on each activity page.{" "}
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <img src="/features3.png" className="w-full md:w-[30vw]" alt="" />
            </ScrollAnimation>
          </div>
          <div className="flex  flex-col-reverse md:flex-row  items-center justify-between gap-5 md:-mt-10">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <img src="/features4.png" className="w-full md:w-[40vw]" alt="" />
            </ScrollAnimation>
            <ScrollAnimation
              className="md:w-1/3"
              animateIn="animate__fadeIn"
              animateOnce={true}
            >
              <p className="text-xl md:hidden mb-0">4</p>

              <div>
                A daily email reminder for the users to provide them a sneak
                peak about the activity and keep them engaged to the countdown
                experience.
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ProductFeaturesSection;
