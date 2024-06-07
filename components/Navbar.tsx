import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex justify-between items-center">
        <div className="lgo pr-5">
          <img src="./herosection/Group.png" alt="Logo" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <a href="/" className="text-orange-500">
            Home
          </a>
          <a href="/">About Us</a>
          <a href="/">Pricing</a>
          <a href="/">features</a>
        </div>
      </div>
      <button className="p-3 bg-black text-white rounded-sm px-8">
        Download
      </button>
    </div>
  );
};

export default Navbar;
