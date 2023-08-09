const Card = ({ title, children }: { title: string; children: any }) => {
  return (
    <div className="rounded-smi text-lgi box-border w-36 h-36 md:w-40 md:h-40  lg:w-44 lg:h-44  flex flex-col  items-center py-2 md:py-5 border-[2px] border-solid border-gray-400">
      <b className="">{title}</b>
      <div className="font-medium w-full md:p-1 text-sm lg:text-base">
        {children}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-gainsboro w-full flex flex-col md:flex-row items-center justify-center  gap-5 ">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <Card title="Role">
          <ul>
            <li>Designer</li>
            <li>Developer </li>
          </ul>
        </Card>

        <Card title="Audience">
          <ul>
            <li>Anyone who’s looking for a way to be more creative.</li>
          </ul>
        </Card>

        <Card title="Timeline">
          <ul>
            <li>12 weeks to design and develop.</li>
          </ul>
        </Card>

        <Card title="Tools">
          <ul>
            <li>Figma</li>
            <li>HTML/ CSS/ JavaScript</li>
          </ul>
        </Card>
      </div>
      <div className="md:w-1/2 flex flex-col items-start justify-start  text-dimgray-500">
        <div className="flex flex-row items-end justify-start mb-5">
          <div className="relative font-black inline-block ">
            <p className="text-3xl md:text-4xl lg:text-5xl m-0">About</p>
            <p className="text-4xl md:text-5xl lg:text-6xl m-0">the Project</p>
          </div>
          <div className="bg-goldenrod w-28 h-1.5" />
        </div>
        <div className="relative md:text-lgi leading-[130%] text-black inline-block ">
          The desire to be more creative has become a universal aspiration.
          People from all walks of life, whether artists, professionals, or
          entrepreneurs, recognize the value of creativity in problem-solving,
          self-expression, and personal growth.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
