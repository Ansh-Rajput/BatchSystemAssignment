import React from "react";
import { RiPlayCircleLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="p-3 flex relative">
      <div className="felx-1 space-y-3">
        <h1
          className="text-5xl font-bold bg-[url('
        ./herosection/bg_gradiant.png')]"
        >
          Make The Best Financial Decisions
        </h1>
        <p className="text-gray-400">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex justify-start items-center text-lg">
          <button className="p-3 bg-black text-white rounded-md px-8">
            Get Started→
          </button>
          <button className="flex gap-2 items-center p-3 bg-white text-black rounded-sm px-8">
            <RiPlayCircleLine className="text-4xl" />
            <span>Watch Now</span>
          </button>
        </div>
        <img
          src="./herosection/brochure.png"
          alt="brochure"
          className="w-[100%] p-1"
        />
      </div>
      <img
        src="./herosection/phone.jpg"
        alt="phone"
        className="h-[100vw] flex-1 absolute sm:static sm:h-[50vw] opacity-5 sm:opacity-100"
      />
    </div>
  );
};

export default HeroSection;
