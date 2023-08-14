import Container from "../container";
import ScrollAnimation from "react-animate-on-scroll";

const UserFlowSection1 = () => {
  return (
    <Container className="flex flex-col md:flex-row justify-center gap-20  text-saddlebrown-200">
      <div className="md:w-1/2 flex flex-col justify-center gap-5">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className="font-extrabold text-2xl">User Flow</div>
          <div className=" text-black inline-block">
            To create an immersive art exploration experience that goes beyond a
            traditional website. By scanning the QR code associated with an
            artwork, users will not only receive information about the artist
            and the artwork but also gain valuable insights into the specific
            techniques and materials utilized in the creation of that artwork.
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <img className="w-80 md:w-96" src="/flow1.png" alt="" />
      </ScrollAnimation>
    </Container>
  );
};

export default UserFlowSection1;
