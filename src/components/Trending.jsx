import React from "react";

const zurag = [
  { name: "/a.png" },
  { name: "/aa.png" },
  { name: "/aaa.png" },
  { name: "/aaaa.png" },
];

export const Trending = () => {
  return (
    <div className="h-[390px] w-[1230px] border flex flex-col gap-[30px] text-[#181A2A] text-[24px]">
      <h3 className="font-bold text-2xl">Trending</h3>
      <div className="h-[320px] w-[293px] flex gap-5">
        {zurag.map((el, index) => {
          return (
            <img
              src={el.name}
              alt=""
              key={index}
              className="h-full w-full object-cover border rounded-xl"
            />
          );
        })}
      </div>
    </div>
  );
};
