"use client";

import React from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { TiHome } from "react-icons/ti";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";

export const ToggleMenu: React.FC = () => {
  return (
    <div>
        
      <ul className="flex flex-col items-end  gap-5 z-10 p-2">
        <li className="flex flex-col items-center">
          <TiHome className="w-7 h-7 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:cursor-pointer" />
          <h1 className="text-[10px] py-1 "> صفحه اصلی</h1>
        </li>
        <li className="flex flex-col items-center ">
          <SiYoutubeshorts className="w-7 h-7 transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:cursor-pointer" />
          <h1 className="text-[10px] px-1 mt-1">ویدیو کوته</h1>
        </li>
        <li className="flex flex-col items-center">
          <MdOutlineSubscriptions className="w-6 h-6 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:cursor-pointer" />
          <h1 className="text-[10px] p-1 ">اشتراک ها </h1>
        </li>
        <li className="flex flex-col items-center px-2">
          <FaRegCircleUser className="w-7 h-6 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:cursor-pointer" />
          <h1 className="text-[10px] p-1">شما</h1>
        </li>
        <li className="flex flex-col items-center px-1">
          <LiaDownloadSolid className="w-6 h-6 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:cursor-pointer" />
          <h1 className="text-[10px] p-1">بارگیری</h1>
        </li>
      </ul>
    </div>
  );
};
