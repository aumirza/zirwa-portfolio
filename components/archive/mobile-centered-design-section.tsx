import ScrollAnimation from "react-animate-on-scroll";
import Container from "../container";

const MobileCenteredDesignSection = () => {
  return (
    <Container
      fluid
      className="flex flex-col py-5 items-center justify-center text-gray-1400"
    >
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <div className="text-center pb-5  text-gray-1100">
          <span className="text-xl md:text-2xl font-semibold">
            What made this web experience
          </span>
          <br />
          <span className="text-2xl md:text-3xl font-bold">
            interesting & user friendly
          </span>
        </div>
      </ScrollAnimation>

      <Container className="flex flex-col text-saddlebrown-200 mt-5 md:mt-0 gap-5 md:gap-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-20">
          <div className="md:w-5/12 lg:w-1/3">
            <ScrollAnimation
              className="flex flex-col gap-2"
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              <div className="font-extrabold">Mobile Centered design </div>
              <div className="text-black">
                Integrating a mobile adaptive website with QR code scanning
                offers numerous conveniences for users.It ensures a seamless and
                optimized mobile experience, allows for easy access and
                engagement without the need for manual typing or searching,
                bridges the gap between offline and online experiences.
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <img className="w-full md:w-[33vw]" src="/centered.png" alt="" />
          </ScrollAnimation>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-20 md:-mt-10">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <img className="w-full md:w-[28vw]" alt="" src="/read-more.png" />
          </ScrollAnimation>

          <div className="md:w-5/12 lg:w-1/3">
            <ScrollAnimation
              className="flex flex-col gap-2"
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <div className="font-extrabold">Read more option </div>
              <div className="text-black">
                The "Read More" option in websites enhances the user experience
                by providing concise content summaries, reducing cognitive load,
                improving scannability, optimizing page performance, catering to
                mobile devices, giving users control over their browsing
                experience, and encouraging interaction and engagement.
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-20 md:-mt-10">
          <div className="md:w-5/12 lg:w-1/3">
            <ScrollAnimation
              className="flex flex-col gap-2"
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              <div className="font-extrabold">Dark Mode</div>
              <div className="">
                Incorporating dark mode into the web experience enhances the
                user experience in several ways. In this case it provides the
                option of customized user experience. For those who prefer to
                have such experiences.
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <img className="w-full md:w-[30vw]" alt="" src="/darkmode.png" />
          </ScrollAnimation>
        </div>
      </Container>
    </Container>
  );
};

export default MobileCenteredDesignSection;
