import type { NextPage } from "next";

const UserFlowSection: NextPage = () => {
  return (
    <div className="bg-gainsboro w-full flex flex-col   items-center justify-center gap-5">
      <div className="w-full flex flex-row items-end justify-start gap-2">
        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dimgray-500 ">
          User Flow
        </div>
        <div className="bg-goldenrod w-28 h-2" />
      </div>
      <div className="w-full flex flex-col items-center ">
        <img
          className="w-10/12 object-cover"
          alt=""
          src="/countdown-experience-final-1@2x.png"
        />
        <div className="text-base font-semibold text-gray-100 ">
          User flow of the website, to have an idea about how the user is going
          to interact on the website
        </div>
      </div>
    </div>
  );
};

export default UserFlowSection;
