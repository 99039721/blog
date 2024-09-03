import React from "react";
import { Chip } from "@/components/chip";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import { AllPost } from "@/components/AllPost";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();
  console.log(objResult);

  return (
    <>
      <div className="flex items-center flex-col gap-[100px]">
        <Hero />
        <Trending />
        <AllPost posts={objResult} />
      </div>
    </>
  );
}
