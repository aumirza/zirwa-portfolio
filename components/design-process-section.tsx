import type { NextPage } from "next";

const DesignCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <img
        className="h-20 w-20 md:h-28 md:w-28 lg:w-30 lg:h-30 object-fill"
        alt=""
        src={image}
      />
      <div className="relative font-semibold">{title}</div>
    </div>
  );
};

const DesignProcessSection: NextPage = () => {
  return (
    <div className="w-full bg-gainsboro flex flex-col justify-center items-center text-dimgray-500 font-inter gap-5">
      <div className="w-full flex justify-end">
        <div className="flex justify-end items-end gap-3">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Design Process
          </div>
          <div className="bg-goldenrod w-28 h-2" />
        </div>
      </div>

      <div className="flex flex-col text-gray-500 gap-10">
        <div className="w-10/12">
          Starting with empathizing and try to solve a problem user is facing by
          proper defining it and ideating the best possible solutions to create
          the prototypes, Test the prototypes for user feedback so they can be
          improved based on the feedback of the users. Once the prototypes are
          ready, develop the website by working on semantic structure and
          accessibility, validate the codes properly in terms of structure and
          accessibility, and test again for final results.
        </div>
        <div className="flex flex-col items-center justify-start gap-[81px]">
          <div className="w-full grid grid-cols-3 md:grid-cols-5 justify-center items-center  md:gap-y-12 ">
            <DesignCard title="Empathize" image="/layer-11.svg" />
            <DesignCard title="Define" image="/layer-12.svg" />
            <DesignCard title="Ideate" image="/group-154.svg" />
            <DesignCard title="Prototype" image="/group-155.svg" />
            <DesignCard title="User Testing" image="/group-156.svg" />
            {/* <div className="col-span-1"></div> */}
            <DesignCard title="Develop" image="/group-150.svg" />
            <DesignCard title="Code Validation" image="/group-157.svg" />
            <DesignCard title="User Testing" image="/group-156.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;
