import { Chip } from "@/components/chip";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <Trending />
    </div>
  );
};

export default Home;
