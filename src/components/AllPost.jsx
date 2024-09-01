"use client";

import Link from "next/link";

export const AllPost = ({ posts = [] }) => {
  return (
    <div className="flex flex-wrap gap-8 bg-green-500">
      {posts.map(
        ({ id, cover_image, title, tag_list, published_at }, index) => {
          return (
            <Link href={`/list/${id}`} key={id} className="w-[280px]">
              <div className="flex flex-col gap-4 ">
                <img src={cover_image} alt="" />
                <div> {tag_list[0]} </div>
                <div>{title}</div>
                <div>{published_at}</div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
};
