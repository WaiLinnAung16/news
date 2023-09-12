import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoHeadset } from "react-icons/io5";
const SideMenu = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="bg-slate-100/30 backdrop-blur-md w-2/5 rounded-xl h-[300px] p-5 flex flex-col gap-3 sticky top-5">
      <div className="flex items-center bg-white px-3 rounded-md shadow-md">
        <BiSearchAlt className="text-xl text-slate-700" />
        <input
          type="text"
          className="py-2 pl-3 outline-none"
          placeholder="Search..."
        />
      </div>
      <div>
        <div
          onClick={handleDropDown}
          onBlur={handleDropDown}
          className={`text-xl backdrop-blur-md rounded-md px-3 transition-all duration-300 overflow-hidden ${
            dropDown
              ? "h-full bg-white text-black"
              : "h-[36px] bg-slate-100/10 text-white "
          }`}
        >
          <div className="flex justify-between items-center  py-1">
            <h1 className="font-bold ">Categories</h1>
            <IoIosArrowUp
              className={`transition-transform duration-300 ${
                dropDown ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div className="flex flex-wrap gap-2 my-2">
            <div className="flex items-center gap-2 text-sm font-semibold rounded py-1 px-3 bg-slate-300">
              <MdOutlineSportsSoccer /> Sport
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold rounded py-1 px-3 bg-slate-300">
              <IoHeadset /> Music
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
