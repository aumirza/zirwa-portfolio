import type { NextPage } from "next";

const ArtArchiveSection: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center  font-case-study-2-h2 py-5">
      <div className="">
        <div className="text-lg font-medium">Web Design | Web Development </div>
        <div className="text-5xl font-semibold text-gray-1100">Art Archive</div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="top-0 flex justify-center  absolute">
          <img className="w-8/12" src="/explore.png" alt="" />
        </div>
        <div>
          <img className="w-full" src="/explorebg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ArtArchiveSection;
