import type { NextPage } from "next";

const VisualDesignSection: NextPage = () => {
  return (
    <div className="w-full  text-21xl text-gray-300 py-10">
      <div className="flex flex-col box-border items-center justify-center gap-5">
        <div className="self-stretch flex flex-row items-end justify-start gap-1">
          <div className="font-semibold text-3xl md:text-4xl">
            Visual Design
          </div>
          <div className="bg-goldenrod w-28 h-2" />
        </div>

        <div className="flex justify-center">
          <img className="w-[18rem]" alt="" src="/visual-design.png" />
        </div>

        {/* <div className="relative w-full text-lgi text-dimgray-600">
          <div className="flex justify-center">
            <img
              className="absolute ml-20  lg:-ml-32 z-0 w-[300px] h-[525px] object-cover"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className="rounded-t-10xl z-10 ml-20 lg:-ml-32 rounded-b-none mt-6 w-[236px] h-[870px] object-cover"
              alt=""
              src="/activity-page-1@2x.png"
            />
          </div>

          <img
            className="absolute top-[44.64px] left-[505px] w-[110px] h-[14.73px]"
            alt=""
            src="/arrow-3.svg"
          />
          <img
            className="absolute top-[101.64px] left-[166px] w-[110px] h-[14.73px]"
            alt=""
            src="/arrow-4.svg"
          />
          <img
            className="absolute top-[503.64px] left-[230px] w-[110px] h-[14.73px]"
            alt=""
            src="/arrow-4.svg"
          />
          <img
            className="absolute top-[710.64px] left-[166px] w-[110px] h-[14.73px]"
            alt=""
            src="/arrow-4.svg"
          />
          <img
            className="absolute top-[792.64px] left-[194px] w-[82px] h-[14.73px]"
            alt=""
            src="/arrow-8.svg"
          />
          <img
            className="absolute top-[812.64px] left-[503px] w-[82px] h-[14.73px]"
            alt=""
            src="/arrow-9.svg"
          />
          <img
            className="absolute top-[601.64px] left-[469px] w-[110px] h-[14.73px]"
            alt=""
            src="/arrow-3.svg"
          />
          <img
            className="absolute top-[90px] left-[498px] w-[87.36px] h-[78px]"
            alt=""
            src="/vector-2.svg"
          />
          <img
            className="absolute top-[72px] left-[532px] w-[85.86px] h-[19.5px]"
            alt=""
            src="/vector-3.svg"
          />
          <img
            className="absolute top-[72px] left-[472px] w-[61.5px] h-[10.5px]"
            alt=""
            src="/vector-4.svg"
          />
          <div className="absolute top-[40px] left-[633px] font-semibold">
            Hamburger Menu
          </div>
          <div className="absolute top-[97px] left-[14px] font-semibold">{`Breadcrumbs `}</div>
          <div className="absolute top-[488px] left-[71px] font-semibold">
            <p className="m-0">{`Start button to `}</p>
            <p className="m-0">set the timer</p>
          </div>
          <div className="absolute top-[693px] left-[12px] font-semibold inline-block w-[145px] h-[49px]">
            <p className="m-0">{`Hint to perform `}</p>
            <p className="m-0">the task</p>
          </div>
          <div className="absolute top-[91px] left-[615px] font-semibold">
            <p className="m-0">Calendar icon to take you</p>
            <p className="m-0">{`to calendar page `}</p>
          </div>
          <div className="absolute top-[168px] left-[570px] font-semibold">
            Music icon to set the music
          </div>
          <div className="absolute top-[591px] left-[606px] font-semibold">
            <p className="m-0">Image to provide the visual</p>
            <p className="m-0">aid to content</p>
          </div>
          <div className="absolute top-[797px] left-[606px] font-semibold">
            Back to top button
          </div>
          <div className="absolute top-[785px] left-[0px] font-semibold">
            <p className="m-0">{`Back to calendar `}</p>
            <p className="m-0">{`page `}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VisualDesignSection;
