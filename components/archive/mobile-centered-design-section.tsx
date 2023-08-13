import type { NextPage } from "next";

const MobileCenteredDesignSection: NextPage = () => {
  return (
    <div className="flex flex-col py-5 items-center justify-center text-gray-1400">
      <div className="text-center">
        <span className="font-medium ">What made this web experience</span>
        <br />
        <span className="text-xl font-semibold">
          interesting & user friendly
        </span>
      </div>
      <div className="w-11/12 flex flex-col text-saddlebrown-200 mt-5 md:mt-0 gap-5 md:gap-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
          <div className="flex flex-col gap-2">
            <div className="font-extrabold">Mobile Centered design </div>
            <div className="text-black">
              Integrating a mobile adaptive website with QR code scanning offers
              numerous conveniences for users.It ensures a seamless and
              optimized mobile experience, allows for easy access and engagement
              without the need for manual typing or searching, bridges the gap
              between offline and online experiences.
            </div>
          </div>
          <div className="">
            <img className="w-96" src="/centered.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-20 md:-mt-10">
          <img
            className="object-cover w-80"
            alt=""
            src="/screenshot20230701at411-1@2x.png"
          />
          <div className="flex flex-col gap-2">
            <div className="font-extrabold">Read more option </div>
            <div className="text-black">
              The "Read More" option in websites enhances the user experience by
              providing concise content summaries, reducing cognitive load,
              improving scannability, optimizing page performance, catering to
              mobile devices, giving users control over their browsing
              experience, and encouraging interaction and engagement.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 md:-mt-10">
          <div className="flex flex-col gap-2">
            <div className="font-extrabold">Dark Mode</div>
            <div className="">
              Incorporating dark mode into the web experience enhances the user
              experience in several ways. In this case it provides the option of
              customized user experience. For those who prefer to have such
              experiences.
            </div>
          </div>
          <div className="">
            <img
              className="object-cover w-[20rem]"
              alt=""
              src="/darkmode.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCenteredDesignSection;
