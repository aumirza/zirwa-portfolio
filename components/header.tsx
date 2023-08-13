import { NextPage } from "next";
import Nav from "./nav";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div className="w-full h-14 flex flex-col justify-center bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
      <div className="px-10 flex  justify-between  items-center   ">
        <Link href="/">
          <img className="h-6 overflow-hidden" alt="" src="/layer-1.svg" />
        </Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
