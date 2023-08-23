import Container from "./container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="relative h-40 w-full flex justify-center  font-inter bg-white  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset]">
      <div
        className="absolute -top-5 right-10 md:right-1/2 hover:cursor-pointer"
        onClick={scrollToTop}
      >
        <img
          className="h-10 overflow-hidden max-h-full"
          alt=""
          src="/backtotop.png"
        />
      </div>
      <Container className="text-gray-600  flex h-full gap-10 justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <img className="h-4 md:h-5" alt="" src="/copy.svg" />

            <div className="text-lg md:text-xl font-medium text-center whitespace-nowrap">
              2023 Zirwa Tariq
            </div>
          </div>
          <div className="flex gap-1">
            <a href="http://">
              <img className="h-5 md:h-8" alt="" src="/instagram.png" />
            </a>
            <a href="http://">
              <img className="h-5 md:h-8" alt="" src="/linked-in.png" />
            </a>
            <a href="http://">
              <img className="h-5 md:h-8" alt="" src="/behance.png" />
            </a>
          </div>

          <div className="md:hidden text-lg">Lets Connect</div>

          <div className="hidden md:flex flex-col font-medium">
            <span>Let’s connect and help</span>
            <span>each other grow</span>
          </div>
        </div>
        <div className="flex flex-col text-lg md:text-xl text-black">
          <div className="md:hidden leading-3">Click here to</div>
          <div className="">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Download PDF Resume
            </a>
          </div>
          <div className="">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Contact me
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
