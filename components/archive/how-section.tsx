import ScrollAnimation from "react-animate-on-scroll";

const HowSection = () => {
  return (
    <div className="flex flex-col items-center ">
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <div className="relative text-xl font-bold text-gray-1200">
          How this works
        </div>
      </ScrollAnimation>
      <div className="w-11/12 flex flex-col items-center justify-center mt-5 md:mt-0 gap-5 md:gap-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="flex flex-col gap-2">
              <div className="font-extrabold text-saddlebrown-200">
                Scan the QR code{" "}
              </div>
              <div className="text-black">
                <p className="m-0">
                  Scanning a QR code is an essential component of the user
                  experience, providing convenience, seamless transitions
                  between offline and online worlds, access to additional
                  information or services, interactive and personalized
                  experiences, and smooth interactions.
                </p>
                <p className="m-0">
                  User will scan the QR code provided with the artworks that
                  leads to the webpage for that artwork.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <img
              className="object-cover w-64"
              alt=""
              src="/artarchive-1@2x.png"
            />
          </ScrollAnimation>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-10">
          <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
            <img
              className="object-cover w-96"
              alt=""
              src="/second-project-1@2x.png"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <div className="flex flex-col gap-2">
              <div className="font-extrabold inline-block">
                Provide accurate and concise information
              </div>
              <div className="text-lgi leading-[130%] text-black inline-block">
                By offering concise and accurate information accompanied by
                visuals, users can better understand the content and navigate
                through the webpage with ease. This approach ensures that users
                have a comprehensive understanding of each artwork and can delve
                deeper into the provided information, resulting in a more
                engaging and satisfying user experience.
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default HowSection;
