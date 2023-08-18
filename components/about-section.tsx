import ScrollAnimation from "react-animate-on-scroll";
import Container from "./container";
import TitleLine from "./title-line";

const Card = ({ title, children }: { title: string; children: any }) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <div className="rounded-smi text-lg box-border w-36 h-36  lg:w-40 lg:h-40 flex flex-col  items-center py-2 md:py-5 border-[2px] border-solid border-gray-400">
        <b className="">{title}</b>
        <div className="font-medium w-full md:p-1 text-sm lg:text-base">
          {children}
        </div>
      </div>
    </ScrollAnimation>
  );
};

const AboutSection = () => {
  return (
    <Container className="flex justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-5 md:gap-8">
          <Card title="Role">
            <ul>
              <li>Designer</li>
              <li>Developer </li>
            </ul>
          </Card>

          <Card title="Audience">
            <ul>
              <li>Anyone who’s looking for a way to be more creative.</li>
            </ul>
          </Card>

          <Card title="Timeline">
            <ul>
              <li>12 weeks to design and develop.</li>
            </ul>
          </Card>

          <Card title="Tools">
            <ul>
              <li>Figma</li>
              <li>HTML/ CSS/ JavaScript</li>
            </ul>
          </Card>
        </div>
        <div className="md:w-1/2 flex flex-col items-start justify-start  text-dimgray-500">
          <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
            <div className="flex flex-row items-end justify-start mb-5">
              <div className="relative font-black inline-block ">
                <p className="text-3xl md:text-4xl lg:text-5xl m-0">About</p>
                <p className="text-4xl md:text-5xl lg:text-6xl m-0">
                  the Project
                </p>
              </div>
              <TitleLine />
            </div>
          </ScrollAnimation>
          <div className="relative md:text-lgi text-black">
            <ScrollAnimation
              delay={1}
              animateIn="animate__backInRight"
              animateOnce={true}
            >
              The desire to be more creative has become a universal aspiration.
              People from all walks of life, whether artists, professionals, or
              entrepreneurs, recognize the value of creativity in
              problem-solving, self-expression, and personal growth.
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
