"use client";
import { Chip } from "./chip";

export const Hero = () => {
  return (
    <div className="w-[1216px] h-[651] mt-[100px] relative">
      <img src="Image.png" alt="" srcset="" />

      <div className="border rounded-xl bg-[#FFFFFF] border-[#E8E8EA] absolute bottom-[64px] left-[11px] p-10">
        <div className="h-[124px] w-[518px] flex flex-col gap-4">
          <Chip />
          <p className="text-[#181A2A] text-4xl font-semibold">
            Grid system for better <br /> Design User Interface
          </p>
        </div>
        <div className="text-[#97989F] text-4 mt-6">August 20, 2022</div>
      </div>

      <div className="flex flex-row justify-end gap-[9px] mt-[11px]">
        <button className="w-10 h-10 border flex justify-center items-center rounded-md">
          <img src="Icon.png" alt="" srcset="" />
        </button>
        <button className="w-10 h-10 border flex justify-center items-center rounded-md">
          <img src="Icon (1).png" alt="" srcset="" />
        </button>
      </div>
    </div>
  );
};
