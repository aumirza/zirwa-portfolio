import type { NextPage } from "next";

const LoFidelitySection1: NextPage = () => {
  return (
    <div className="w-full flex flex-col py-5 items-center gap-5">
      <div className="font-semibold text-3xl">Lo-fidelity prototypes</div>
      <div className="">
        <img className="w-full" alt="" src="/lofid.png" />
      </div>
    </div>
  );
};

export default LoFidelitySection1;
