import React from "react";
import logo from "../assets/opaqueDark.svg";
import { BiHome, BiNews } from "react-icons/bi";
import Marquee from "react-fast-marquee";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoHeadset } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <div className="flex">
        <h1 className="w-[150px] py-1 px-2 bg-red-700 text-white">
          Breaking News
        </h1>
        <Marquee className=" bg-white" gradient gradientWidth={40}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          possimus earum commodi nostrum perferendis quod quos sit, dolores
          animi delectus nemo officia, itaque illum distinctio vitae. Velit
          adipisci deserunt earum!
        </Marquee>
      </div>
      <nav className="w-full bg-slate-100/70 backdrop-blur-md p-3 px-8">
        <div className="flex justify-between items-center max-w-[1300px] mx-auto">
          <img src={logo} alt="opaque logo" className="h-[55px]" />
          <ul className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <BiHome />
              Home
            </div>

            <div className="flex items-center gap-2 ">
              <IoHeadset /> Music
            </div>
            <div className="flex items-center gap-2 px-4 py-1 bg-white rounded-md shadow-md">
              <MdOutlineSportsSoccer /> Sport
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
