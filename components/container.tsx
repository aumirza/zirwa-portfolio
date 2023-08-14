import { FC, PropsWithChildren } from "react";

const screenSize = {
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

const Container: FC<
  PropsWithChildren<{ className?: string; fluid?: boolean; maxW?: "lg" | "xl" }>
> = ({ children, className, fluid, maxW }) => {
  return (
    <div
      className={
        (!fluid ? "w-11/12" : "w-full") +
        " " +
        (maxW ? screenSize[maxW] : screenSize["lg"]) +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Container;
