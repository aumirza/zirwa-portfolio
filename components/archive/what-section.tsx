import type { NextPage } from "next";

const WhatCard = ({
  title,
  children,
  className,
}: {
  title: string;
  children: any;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      <div className="font-bold text-xl">{title}</div>
      <div className="text-black ">{children}</div>
    </div>
  );
};

const WhatSection: NextPage = () => {
  return (
    <div className="flex flex-col items-center  text-gray-1400 font-case-study-2-h2">
      <div className="w-10/12 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-start gap-3">
          <div className="text-4xl font-bold">What is Art Archive?</div>
          <div className="text-lg leading-6  text-black text-center">
            The concept behind Art Archive is to bridge the gap between the
            physical and digital realms of art. By incorporating QR codes into
            art displays, visitors can effortlessly access a wealth of
            information, enhancing their understanding and engagement with each
            piece.
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <WhatCard title="Project Statement">
            <p>
              In today's art world, there is a significant lack of accessible
              and comprehensive information about artworks, hindering
              individuals' ability to fully engage with and appreciate artistic
              creations.
            </p>
          </WhatCard>
          <WhatCard title="Project Objectives">
            <ul>
              <li>
                The platform should provide a seamless and engaging experience
                for users scanning QR codes and accessing artwork information.
              </li>
              <li>
                The information should cover the artist, artwork ,techniques and
                links to learn about the techniques and the materials.
              </li>
            </ul>
          </WhatCard>
          <WhatCard
            className="row-start-3 md:row-start-1 md:col-start-3"
            title="My Role"
          >
            <ul>
              <li>Research</li>
              <li>Designer</li>
              <li>Illustrator</li>
              <li>Developer</li>
            </ul>
          </WhatCard>
          <WhatCard title="Project Goals">
            <p>
              To create an immersive art exploration experience that goes beyond
              a traditional website. By scanning the QR code associated with an
              artwork, users will not only receive information about the artist
              and the artwork but also gain valuable insights into the specific
              techniques and materials utilized in the creation of that artwork.
            </p>
          </WhatCard>
          <WhatCard title="Target Audience">
            <p className="m-0">
              <span className="font-medium font-case-study-2-h2">
                Primary Audience:
              </span>
              <span> Students at SUNY Oswego.</span>
            </p>
            <p className="m-0">
              <span className="font-medium font-case-study-2-h2">
                Secondary Audience:
              </span>
              <span> Anyone who’s coming to SUNY Oswego.</span>
            </p>
          </WhatCard>
          <WhatCard title="Tools">
            <ul>
              <li>Figma </li>
              <li>Illustrator </li>
              <li>Photoshop</li>
              <li>HTML/CSS/JavaScript</li>
            </ul>
          </WhatCard>
        </div>
      </div>
      <div className="">
        <img className="w-full object-cover" alt="" src="/ot130012-1@2x.png" />
      </div>
    </div>
  );
};

export default WhatSection;
