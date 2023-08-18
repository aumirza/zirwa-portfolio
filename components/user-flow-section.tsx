import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const UserFlowSection = () => {
  return (
    <Container className="flex flex-col items-center justify-center gap-5">
      <ScrollAnimation
        className="w-full"
        animateIn="animate__fadeInLeft"
        animateOnce={true}
      >
        <div className="flex flex-row items-end justify-start gap-2">
          <div className="flex flex-col md:flex-row md:gap-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-dimgray-500 ">
            <span>User</span>
            <span>Flow</span>
          </div>
          <TitleLine />
        </div>
      </ScrollAnimation>
      <Container fluid>
        <ScrollAnimation
          className=" flex flex-col items-center "
          animateIn="animate__fadeInUp"
          animateOnce={true}
        >
          <img className="w-11/12 max-w-4xl" alt="" src="flow.png" />
          <div className="text-base font-semibold text-gray-100 ">
            User flow of the website, to have an idea about how the user is
            going to interact on the website
          </div>
        </ScrollAnimation>
      </Container>
    </Container>
  );
};

export default UserFlowSection;
