"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <header className="flex flex-row justify-start gap-[10px] w-[1917px] h-[100px] py-[32px] px-[350px] border">
      <div className="flex flex-row gap-[118px] w-[1130px] h-[36px] text-gray-400 ">
        <img src="/Logo.png" alt="" className="w-[158px] h-9" />
        <div className="flex justify-center gap-10 my-[6px]">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-row relative items-center text-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="w-[166px] h-9 bg-gray-300 p-[5px] rounded-md"
          />
          <CiSearch className="text-gray-400 absolute left-[150px] " />
        </div>
      </div>
    </header>
  );
};
