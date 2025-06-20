import React from "react";
// import SplineCube from "./SplineCube";

const HeroSection = () => {
  return (
    <section className="relative min-h-200 m-auto flex items-center justify-center bg-[#022C28]">
      {/* 🎬 Background iframe */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="w-[100vw] h-[100vh]  flex items-center justify-center transform origin-center">
         
          {/* <SplineCube/> */}
        </div>
      </div>

      <div className="absolute inset-0 bg-[#022C28]/70 z-10"></div>

      <div className="relative z-10 max-w-2xl text-center space-y-6 pt-28 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Master your <span className="text-cyan-500">Cash Flow</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Flexible payments and embedded financing solutions for buyers and
          sellers of technology.
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

export default HeroSection;
