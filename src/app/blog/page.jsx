import { PostListing } from "@/components/PostListing";
import React from "react";
import { BlogCon } from "@/components/BlogCon";

<<<<<<< HEAD
const BlogListing = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div>
      <PostListing posts={objResult} />
=======
export const Blog = () => {
  return (
    <div>
      <BlogCon />
>>>>>>> 622b1d31e28990856a2f5bbc86a82f3990cf19f4
    </div>
  );
};

export default BlogListing;
