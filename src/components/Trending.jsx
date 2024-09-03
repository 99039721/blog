import React from "react";
import { Chip } from "./Chip";

const zurag = [
  { name: "/1.png" },
  { name: "/2.png" },
  { name: "/3.png" },
  { name: "/4.png" },
];

export const Trending = () => {
  return (
<<<<<<< HEAD
    <div className="h-[390px] w-[1230px] border flex flex-col gap-[30px] text-[#181A2A] text-[24px] ">
      <h3 className="font-bold text-2xl">Trending</h3>
      <div className="h-full w-full object-cover flex gap-5">
        {zurag.map((el, index) => {
          return (
            <div key={index} className="relative  h-[320px] w-[289px]">
=======
<<<<<<< HEAD
    <div className="h-[390px] w-[1230px] border flex flex-col gap-[30px] text-[#181A2A] text-[24px] ">
=======
    <div className="h-[390px] w-[1230px] border flex flex-col gap-[30px] text-[#181A2A] text-[24px] relative">
>>>>>>> fe68997d2d5267232e81f258d452f6c433a9e68c
      <h3 className="font-bold text-2xl">Trending</h3>
      <div className="flex gap-5">
        {zurag.map((el, index) => {
          return (
<<<<<<< HEAD
            <div key={index} className="relative h-[320px] w-[293px]">
              <img
                src={el.name}
                alt=""
                className="h-full w-full object-cover border rounded-xl"
              />
              <div className="w-[230px] h-[120px] text-[18px] text-[white] absolute bottom-[28px] left-[28.5px]">
                <Chip />
                <p key={index} className="mt-4">
=======
            <div>
>>>>>>> 622b1d31e28990856a2f5bbc86a82f3990cf19f4
              <img
                src={el.name}
                alt=""
                className="w-full h-full border rounded-xl"
              />
              <div className="w-[230px] h-[120px] text-[18px] text-[white] absolute bottom-[28px] left-[28.5px]">
                <Chip />
                <p className="mt-4">
>>>>>>> fe68997d2d5267232e81f258d452f6c433a9e68c
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
