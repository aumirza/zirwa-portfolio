import { FC, PropsWithChildren } from "react";

const screenSize = {
  lg: "max-w-5xl",
  xl: "max-w-8xl",
};

const Container: FC<
  PropsWithChildren<{ className?: string; fluid?: boolean; maxW?: "lg" | "xl" }>
> = ({ children, className, fluid, maxW }) => {
  return (
    <div
      className={
        "overflow-hidden " +
        (!fluid ? "w-11/12 lg:w-10/12" : "w-full") +
        " " +
        (maxW ? screenSize[maxW] : screenSize["xl"]) +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Container;
