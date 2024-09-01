import React from "react";
import { Chip } from "@/components/chip";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import { AllPost } from "@/components/AllPost";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-[100px] items-center">
      <Hero />
      <Trending />
      <AllPost />
    </div>
  );
};

export default Home;
