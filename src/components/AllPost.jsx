"use client";

import Link from "next/link";
import { Chip } from "./Chip";
import { useState } from "react";

export const AllPost = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(9);
  const loadMorePost = () => {
    setVisiblePosts((prevVisible) => prevVisible + 9);
  };

  return (
    <div className="w-[1216px] h-[1585px] overflow-auto gap-5 bg-gray-300">
      <div className="w-[1216px] h-[85px] flex flex-col gap-8">
        <h3 className="font-bold text-2xl text-[#181A2A] w-[184px] h-[28px] ">
          All Blog Post
        </h3>
        <div className="flex flex-row w-[1216px] h-[30px] gap-[30px]">
          <div className="w-[360px] h-[25px] gap-5 flex flex-row text-[#495057]">
            <p>All</p>
            <p>Design</p>
            <p>Travel</p>
            <p>Fashin</p>
            <p>Technology</p>
            <p>Branding</p>
          </div>
          <div className="w-[826px] h-[25px] flex flex-col items-end text-[#495057]">
            View All
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 ">
        {posts
          .slice(0, visiblePosts)
          .map(({ id, cover_image, title, tag_list, published_at }, index) => {
            return (
              <Link href={`/list/${id}`} className="w-[392px]">
                <div
                  key={index}
                  className="flex flex-col gap-4 border rounded-xl w-[392px] h-[476px] mt-5"
                >
                  <div className="w-[360px] h-[188px] p-2 gap-5">
                    <img
                      src={cover_image}
                      alt="{title}"
                      className="w-[360px] h-[240px]"
                    />
                    <div> {tag_list[0]} </div>
                    <Chip />
                    <div className="text-lg font-semibold text-[#181A2A]">
                      {title}
                    </div>
                    <div className="text-base font-semibold text-[#97989F] w-[320px] h-9 flex items-center justify-between">
                      {published_at}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center text-center items-center">
          <button
            onClick={loadMorePost}
            className="border-1 border-[#696A75] w-[123px] h-12 rounded-md p-3 text-base font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
