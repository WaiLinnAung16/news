import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import NewsCard from "./NewsCard";

const Content = () => {
  return (
    <section className=" p-5 bg-slate-100/30 backdrop-blur-md rounded-t-xl min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black text-white uppercase">Sport</h1>
        <div className="flex items-center bg-white px-3 rounded-md shadow-md">
          <BiSearchAlt className="text-xl text-slate-700" />
          <input
            type="text"
            className="py-2 pl-3 outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 my-5">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default Content;
