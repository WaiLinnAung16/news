import React from "react";
import imgCard from "../assets/inthepit.jpg";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const NewsCard = () => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav("/news/detail")}
      className="col-span-4 cursor-pointer relative bg-white rounded-md h-[450px] overflow-hidden group transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
    >
      <div className="absolute top-0 -right-16 flex items-center gap-2 p-2 overflow-hidden text-xl font-semibold rounded-bl-md bg-slate-100 shadow-md self-start transition-all group-hover:right-0">
        <MdOutlineSportsSoccer />
        <h1>Sport</h1>
      </div>
      <img
        src={imgCard}
        alt="Image Card"
        className=" w-full h-1/2 object-cover"
      />
      <div className="flex flex-col gap-5 p-3 h-1/2">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Blog title</h1>
          <div className="flex items-center text-sm font-bold text-gray-700">
            <span>Sep 12</span>
            <BsDot className="text-xl" />
            <span>2m read time</span>
          </div>
          <p className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo
            veniam
          </p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 self-end text-white px-5 py-1 rounded-lg">
          Read more <HiMiniArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
