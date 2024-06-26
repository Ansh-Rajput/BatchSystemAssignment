import React from "react";

const AdvantageSection = () => {
  return (
    <div className="p-3 space-y-7">
      <div className="flex relative">
        <div className="flex items-center sm:w-1/2">
          <div className="space-y-3">
            <div>
              <div className="text-sm text-orange-500">ADVANTAGES</div>
              <div className="text-4xl font-bold">Why Choose Uifry?</div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="./advantagesection/bell.png"
                alt="bell"
                className="h-[50%]"
              />
              <span className="font-semibold text-2xl">
                Clever Notifications
              </span>
            </div>
            <div className="text-gray-400">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 w-[50%] sm:w-[70%] absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0  sm:static sm:opacity-100 opacity-20">
          <img src="./advantagesection/phone.png" alt="phone" className="" />
        </div>
      </div>

      <div className="flex relative">
        <div className="w-1/2 flex items-center justify-center flex-1 sm:w-[70%] absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0  sm:static sm:opacity-100 opacity-20">
          <img src="./advantagesection/phone2.png" alt="phone2" className="" />
        </div>
        <div className="sm:w-1/2 flex items-center">
          <div className="space-y-3">
            <div className="flex gap-2">
              <img src="./advantagesection/icon.png" alt="icon" />
              <span className="font-semibold text-2xl">Fully Customizable</span>
            </div>
            <p className="text-gray-400">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
