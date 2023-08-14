import Link from "next/link";

import { useState } from "react";

const NavItem = ({
  text,
  link,
  subNav,
}: {
  text: string;
  link: string;
  subNav?: any;
}) => {
  const NavLink = ({
    text,
    link,
    className,
  }: {
    text: string;
    link: string;
    className?: string;
  }) => {
    return (
      <Link
        className={
          "text-white md:text-dimgray-600 no-underline border-b-2 hover:border-dimgray-100 pb-2 " +
          className
        }
        href={link}
      >
        <b>{text}</b>
      </Link>
    );
  };
  return (
    <div className="flex gap-3 md:gap-1 md:items-center group">
      <NavLink className="text-xl" text={text} link={link} />
      {subNav && (
        <div className="relative ">
          <div className="flex flex-col md:flex-row justify-center md:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="md:absolute hidden group-hover:flex w-48 flex-col md:bg-white md:shadow-sm md:rounded-md gap-2 p-5">
            {subNav.map((item: any) => {
              return (
                <div
                  className={
                    subNav.length > 1 ? "border-b-2 border-slate-600 pb-2" : ""
                  }
                  key={item.text}
                >
                  <NavLink text={item.text} link={item.link} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const NavItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Work",
    link: "/work",
    subNav: [
      {
        text: "Ui/Ux Design",
        link: "/ui-ux",
      },
      {
        text: "Print Design",
        link: "/print-design",
      },
      {
        text: "Motion Graphics",
        link: "/motion-graphics",
      },
    ],
  },
  {
    text: "About",
    link: "/about",
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
          "md:hidden text-white fixed h-full w-full top-0 left-0 z-20 transform transition-all  duration-700 " +
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
