import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const AccessibilitySection = () => {
  return (
    <Container className="flex flex-col-reverse md:flex-row gap-5 md:gap-20">
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
        <img className="w-full md:w-[35vw]" alt="" src="/accessibility.png" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex flex-row items-end justify-start gap-2">
            <div className="text-3xl md:text-4xl   font-semibold">
              Accessibility
            </div>
            <TitleLine />
          </div>
          <div className="text-sm md:text-base">
            Accessibility includes not only the outward depiction but also what
            is going on behind the scenes. Proper tags and structure are
            employed to deliver a more efficient experience to screen readers,
            and these concerns also lead to design modifications. To improve the
            user experience for screen readers.
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default AccessibilitySection;
