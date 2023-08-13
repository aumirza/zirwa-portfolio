import type { NextPage } from "next";

const HiFidelitySection1: NextPage = () => {
  return (
    <div className="flex flex-col py-[25px] px-0 box-border items-center gap-5">
      <div className="text-3xl font-semibold">Hi-fidelity prototypes</div>
      <img
        className="w-full object-cover"
        alt=""
        src="/project-3-mockup-1@2x.png"
      />
    </div>
  );
};

export default HiFidelitySection1;
