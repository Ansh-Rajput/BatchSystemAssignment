import React from "react";

function FeatureSection() {
  return (
    <div className="p-5 flex relative">
      <img
        src="./featuresection/phone.png"
        alt="phone"
        className="w-[70%] sm:w-[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0  sm:static sm:opacity-100 opacity-20"
      />
      <div className="relative flex items-center">
        <div className="space-y-3 h-fit">
          <div>
            <div className="text-sm text-orange-500">FEATURES</div>
            <h2 className="text-4xl font-bold">Uifry Premium</h2>
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex gap-2">
                <img src="./featuresection/Icon.png" alt="icon" />
                <span className="font-semibold text-lg">
                  Budgeting Intervals
                </span>
              </div>
              <p className="text-gray-400">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <img src="./featuresection/cube-02.png" alt="icon" />
                <span className="font-semibold text-lg">
                  Budgeting Intervals
                </span>
              </div>
              <p className="text-gray-400">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <img src="./featuresection/cube-04.png" alt="icon" />
                <span className="font-semibold text-lg">
                  Budgeting Intervals
                </span>
              </div>
              <p className="text-gray-400">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
