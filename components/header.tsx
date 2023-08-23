import Nav from "./nav";
import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="w-full h-14 flex flex-col justify-center items-center bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
      <Container className="flex justify-between  items-center">
        <Link href="/">
          <img className="h-6 overflow-hidden" alt="" src="/logo.svg" />
        </Link>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
