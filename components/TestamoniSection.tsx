import React from "react";

const TestamoniSection = () => {
  return (
    <div>
      <div className="flex justify-center p-3">
        <div className="text-center">
          <span>TESTIMONIAL</span>
          <div className="text-3xl font-bold">What Our Users Say About Us?</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 hidden md:block">
          <img src="./testamoni/usercircle.png" alt="users" />
        </div>
        <div className="flex items-center p-10 md:w-1/2">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">
              The Best Financial Accounting App Ever!
            </h2>
            <p className="text-gray-400">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
            <div>
              <img src="./testamoni/users.png" alt="users" />
            </div>
            <div>Nick Jonas</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestamoniSection;
