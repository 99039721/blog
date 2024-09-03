"use client";
import React from "react";

export const SinglePost = ({ title, cover, body }) => {
  return (
    <div className="flex flex-wrap gap-x-5 flex-col bg-gray-200">
      <div className="flex flex-col gap-4">
        <div className="text-[#181A2A] text-[36px] w-[800px] h-[80px] leading-[40px]">
          {title}
        </div>
        {/* <div> */}
        {/* className="w-[800px] h-[462px]" */}
        <img src={cover} alt="" className="w-[800px] h-[462px]" />
        {/* </div> */}
        <div className="w-[800px] text-[#3B3C4A] text-[20px]">{body}</div>
      </div>
    </div>
  );
};
