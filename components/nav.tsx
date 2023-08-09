import Link from "next/link";

import { useState } from "react";

const NavItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link className="text-xl" href={link}>
      <b>{text}</b>
    </Link>
  );
  // return (
  //   <div className="flex flex-row items-center justify-end">
  //     <div className="flex-1 relative h-[31px]">
  //       <b className="absolute top-[0%] left-[0%]">{`Work `}</b>
  //     </div>
  //     <div className="relative w-[13px] h-[31px] text-black">
  //       <b className=" [transform:_rotate(-180deg)] [transform-origin:0_0]">^</b>
  //     </div>
  //   </div>
  // );
};

const NavItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Work",
    link: "/work",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const NavList = ({ className }: { className?: string }) => {
  return (
    <div className={"flex flex-col md:flex-row gap-5 " + className}>
      {NavItems.map((item) => {
        return <NavItem key={item.text} {...item} />;
      })}
    </div>
  );
};

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const navToggleHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={navToggleHandler}
        className="w-8 h-8 text-black md:hidden text-2xl text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div
        className={
          "md:hidden text-white fixed h-full w-full top-0 left-0 transform transition-all  duration-700 " +
          (showNav ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div
          className={
            "bg-goldenrod w-full h-full fixed left-0 top-0 " +
            (showNav
              ? "translate-x-0  duration-500 ease-out"
              : "-translate-x-full  duration-1000 ease-in")
          }
        ></div>
        <div
          className={
            "bg-dimgray-300  w-full h-full fixed top-0 left-0 " +
            (showNav
              ? "translate-x-0  duration-700 ease-out"
              : "-translate-x-full duration-700 ease-in")
          }
        ></div>
        <div
          className={
            "bg-gray-300 h-full w-full z-20 flex justify-center items-center " +
            (showNav
              ? "translate-x-0  duration-1000 ease-out"
              : "-translate-x-full duration-500 ease-in")
          }
        >
          <div className="fixed right-5 top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-3xl text-primary"
              onClick={navToggleHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <NavList className="text-lg font-semibold text-[white!important]" />
        </div>
      </div>

      <NavList className="hidden md:flex" />
    </div>
  );
};

export default Nav;
