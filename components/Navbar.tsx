import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 flex-col md:flex-row">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="lgo pr-5">
          <img src="./herosection/Group.png" alt="Logo" />
        </div>
        <div className="flex justify-between items-center gap-4 w-[100%] sm:w-[80%] lg:w-auto p-5">
          <a href="/" className="text-orange-500">
            Home
          </a>
          <a href="/">About Us</a>
          <a href="/">Pricing</a>
          <a href="/">features</a>
        </div>
      </div>
      <button className="p-3 hidden md:block bg-black text-white rounded-sm px-11">
        Download
      </button>
    </div>
  );
};

export default Navbar;
