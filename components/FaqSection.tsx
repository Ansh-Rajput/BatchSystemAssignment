import React from "react";

const FaqSection = () => {
  return (
    <div className="p-3 space-y-3">
      <div>
        <span className="text-orange-500">FAQ</span>
        <div className="text-3xl font-bold">Frequently Asked Questions</div>
      </div>
      <div className="my-3">
        <div className="flex flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <Review
              i={i}
              message="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
              title="The Best Financial Accounting App Ever!"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ReviewProps {
  i: number;
  title: string;
  message: string;
}
const Review = ({ i, title, message }: ReviewProps) => {
  const backgroundColor = i % 4 === 0 || i % 4 === 3 ? "bg-[#f55]" : "bg-white";
  const textColor = i % 4 === 0 || i % 4 === 3 ? "text-white" : "text-black";
  return (
    <div className={`w-1/2 p-7 rounded-md ${backgroundColor} ${textColor}`}>
      <div className="text-2xl font-bold">{title}</div>
      <div>{message}</div>
    </div>
  );
};

export default FaqSection;
