import Link from "next/link";
import React from "react";
import { MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  const data = [];
  return (
    <div className="p-3 flex md:justify-between gap-3 md:gap-0 flex-col md:flex-row">
      <div className="space-y-3 ">
        <img src="./herosection/Group.png" alt="logo" />
        <div className="flex gap-2 items-center ">
          <MdMail color="#f55" size={30} /> <span>Help@Frybix.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <MdPhone color="#f55" size={30} /> <span>Help@Frybix.com</span>
        </div>
      </div>

      <div className="space-y-3 ">
        <h2 className="text-4xl font-bold">Links</h2>
        <div className="flex flex-col space-y-3">
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Home
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              About Us
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Bookings
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-3 ">
        <h2 className="text-4xl font-bold">Legal</h2>
        <div className="flex flex-col space-y-3">
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Terms of Use
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-3 ">
        <h2 className="text-4xl font-bold">Product</h2>
        <div className="flex flex-col space-y-3">
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Take Tour
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Live Chat
            </Link>
          </div>
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Reviews
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-3 ">
        <h2 className="text-4xl font-bold">Newsletter</h2>
        <div className="flex flex-col space-y-3">
          <div>
            <Link className="hover:text-[#f55]" href={"/"}>
              Stay Up To Date
            </Link>
          </div>
          <div className="flex">
            <input type="text" placeholder="Your email" />
            <button className="text-white p-3 bg-black rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
