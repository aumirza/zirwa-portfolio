import type { NextPage } from "next";

const StyleGuideSection: NextPage = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-start">
        <div className="py-10 flex flex-col-reverse md:flex-row items-start justify-start gap-10">
          <div className="">
            A style guide is a set of guidelines and standards that define the
            visual and functional elements of a digital design. It serves as a
            reference for designers, developers, and stakeholders, helps
            maintain brand consistency, and serves as a communication tool among
            the designers and developers.
          </div>
          <div className="flex flex-row flex-grow items-end justify-start gap-2 text-21xl text-gray-300">
            <div className="block whitespace-nowrap text-3xl md:text-4xl">
              Style Guide
            </div>
            <div className="bg-goldenrod w-28 h-2" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <img
            className="w-1/2 h-[26rem] lg:h-[32rem] object-cover"
            alt=""
            src="/screen-shot-20230516-at-758-1@2x.png"
          />
          <img
            className="w-1/2 h-[26rem] lg:h-[32rem]  object-cover"
            alt=""
            src="/screen-shot-20230516-at-758-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default StyleGuideSection;
