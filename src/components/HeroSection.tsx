import { getData } from "@/lib/getData";
import React from "react";
// import SplineCube from "./SplineCube";

 interface HeroEntry {
  uid: string;
  hero_heading: string;
  hero_description: string;
}

export default async function HeroSection () {
  const response =  await getData({
    contentType:"hero_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  })
  // console.log(response);
  const data: HeroEntry | undefined = response?.[0];


  return (
    <section className="relative min-h-200 m-auto flex items-center justify-center bg-[#022C28]">
   
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      <div className="w-[100vw] h-[100vh]  flex items-center justify-center transform origin-center">
        {/* <SplineCube /> */}
      </div>
    </div>

    <div className="absolute inset-0 bg-[#022C28]/70 z-10"></div>

    <div className="relative z-10 max-w-2xl text-center space-y-6 pt-28 text-white">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {data.hero_heading.split(" ").slice(0, -2).join(" ")}{" "}
        <span className="text-cyan-500">
          {data.hero_heading.split(" ").slice(-2).join(" ")}
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300">
        {data.hero_description}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your work email"
          className="px-4 py-2 w-full sm:w-80 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition">
          Get in touch
        </button>
      </div>
    </div>
  </section>
  );
};


