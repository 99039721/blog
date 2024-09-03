import React from "react";
import { Chip } from "@/components/chip";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import { AllPost } from "@/components/AllPost";
<<<<<<< HEAD

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();
  console.log(objResult);
=======
import { Footer } from "@/components/Footer";
>>>>>>> 622b1d31e28990856a2f5bbc86a82f3990cf19f4

  return (
<<<<<<< HEAD
    <>
      <div className="flex items-center flex-col gap-[100px]">
        <Hero />
        <Trending />
        <AllPost posts={objResult} />
      </div>
    </>
=======
    <div className="flex flex-col gap-[100px] items-center">
      <Hero />
      <Trending />
      <AllPost />
    </div>
>>>>>>> 622b1d31e28990856a2f5bbc86a82f3990cf19f4
  );
}
