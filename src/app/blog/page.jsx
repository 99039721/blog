import { PostListing } from "@/components/PostListing";
import React from "react";
import { BlogCon } from "@/components/BlogCon";

const BlogListing = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div>
      <PostListing posts={objResult} />
    </div>
  );
};

export default BlogListing;
