import type { NextPage } from "next";

const UserFlowSection1: NextPage = () => {
  return (
    <div className="flex justify-center  text-saddlebrown-200">
      <div className="w-11/12 flex flex-col md:flex-row justify-center gap-20">
        <div className="w-1/2 flex flex-col justify-center gap-5">
          <div className="font-extrabold text-2xl">User Flow</div>
          <div className=" text-black inline-block">
            To create an immersive art exploration experience that goes beyond a
            traditional website. By scanning the QR code associated with an
            artwork, users will not only receive information about the artist
            and the artwork but also gain valuable insights into the specific
            techniques and materials utilized in the creation of that artwork.
          </div>
        </div>
        <div className="">
          <img className="w-96" src="/flow1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserFlowSection1;
