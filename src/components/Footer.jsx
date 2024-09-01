"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-[495px] w-[1920px] bg-[#F6F6F7] flex flex-col items-center ">
      <div className="h-[236px] w-[1215px] flex items-right gap-[20px] mt-[64px]">
        <div className="h-[236px] w-[289px]">
          <h1 className="leading-7 text-[18px] font-semibold"> About </h1>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
          <br />
          <br />
          Email : info@jstemplate.net
          <br />
          Phone : 880 123 456 789
        </div>
        <div className="h-[88px] w-[521px] gap-2 text-[#3B3C4A] flex flex-col px-[229.5px]">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="h-[16px] w-[144px] flex">
          <p>Vector</p>
          <p>Vector</p>
          <p>Vector</p>
          <p>Vector</p>
        </div>
      </div>

      <div className="h-[95px] w-[1216px] border border-[#DCDDDF] py-[32px] gap-[64px] flex items-center justify-end mb-[75px]">
        <div className="flex flex-col justify-center h-[54px] w-[231px] gap-[10px]">
          <img src="/Logo.png" alt="" className="w-[158px] h-9" />
          <p>© All Rights Reserved.</p>
        </div>
        <div className="h-[24px] w-[921px] gap-4 text-[#3B3C4A] text-[16px] font-normal flex justify-end">
          <div>Terms of Use</div>
          <div>|</div>
          <div>Privacy Policy</div>
          <div>|</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
