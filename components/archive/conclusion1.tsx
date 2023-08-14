import ScrollAnimation from "react-animate-on-scroll";
import Container from "../container";

const Conclusion1 = () => {
  return (
    <Container className="pb-14">
      <ScrollAnimation
        className="flex flex-col items-center justify-center "
        animateIn="animate__fadeIn"
        animateOnce={true}
      >
        <div className="font-black text-xl">Conclusion</div>
        <div className="">
          The case study of Art Archive highlights the transformative power of
          QR codes in enhancing the user experience of an art-focused website.
          By implementing a web beyond experience, where users can scan QR codes
          associated with artworks to access specific information, Art Archive
          has created a unique and engaging platform for art enthusiasts and
          visitors.
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default Conclusion1;
