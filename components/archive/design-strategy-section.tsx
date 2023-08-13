import type { NextPage } from "next";

const DesignStrategyCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <div className="text-center">
      <img
        className="w-[4.5rem] h-[4.5rem] md:h-28 md:w-28"
        alt=""
        src={image}
      />
      <div className="font-semibold">{title}</div>
    </div>
  );
};

const DesignStrategySection: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-bisque py-10">
      <div className="w-10/12 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="text-3xl md:text-5xl font-semibold">
            Design Strategy
          </div>
          <div className="md:text-lg md:text-center">
            Design strategy is a systematic approach that involves several steps
            to create innovative solutions. It follows the principles of design
            thinking and includes empathizing with users, defining the problem,
            ideating solutions, designing prototypes, developing the final
            solution, validating through testing, and iterating based on user
            feedback.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <DesignStrategyCard title="Empathize" image="/group-218.svg" />
          <DesignStrategyCard title="Define" image="/group-219.svg" />
          <DesignStrategyCard title="Ideate" image="/group-223.svg" />
          <DesignStrategyCard title="Design" image="/group-226.svg" />
          <DesignStrategyCard title="Prototype" image="/group-155.svg" />
          <DesignStrategyCard title="Develop" image="/group-150.svg" />
          <DesignStrategyCard title="Code Validation" image="/group-157.svg" />
          <DesignStrategyCard title="User Testing" image="/group-153.svg" />
        </div>
      </div>
    </div>
  );
};

export default DesignStrategySection;
