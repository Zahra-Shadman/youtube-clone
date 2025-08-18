"use client";
import React from "react";
import Image from "next/image";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { LuMenu } from "react-icons/lu";

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image
          className="rounded-full p-2 "
          src="/avatar.jpg"
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <span className="py-2 px-1 ml-4 rounded-2xl hover:bg-gray-200">
        <GoBell className="w-6 h-6 " />
      </span>
      <div className="px-4 ml-4 bg-gray-100 rounded-3xl hover:bg-gray-200  ">
        <button className="flex  items-center ">
          ایجاد کردن <span className=" mb-1  text-3xl font-light">+</span>
        </button>
      </div>
      <div className="flex items-center hover:bg-gray-200 bg-gray-100 p-2  rounded-full ml-32  ">
        <button>
          <MdKeyboardVoice className="w-6 h-6 " />
        </button>
      </div>
      <form
        className="flex items-center flex-grow  max-w-2xl mx-5"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <button
          type="submit"
          aria-label="Search button"
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold p-1.5 px-5 rounded-l-full focus:outline-none  border-[1px] border-r-0 border-gray-400"
        >
          <CiSearch className="w-6 h-6" />
        </button>
        <input
          type="text"
          placeholder="جستجو"
          className="flex-grow border-[1px] py-2 px-4 border-gray-400 rounded-r-full focus:outline-gray-400 text-right placeholder-gray-400 text-sm"
          aria-label="Search"
        />
      </form>
      <div className="flex items-center gap-2 ml-60">
        <Image src={"/logo.webp"} alt={"logo"} width={130} height={130} />
        <LuMenu className="w-7 h-7" />
      </div>
    </div>
  );
};
