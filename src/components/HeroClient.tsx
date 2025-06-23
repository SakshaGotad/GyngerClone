import { getData } from "@/lib/getData";
import React from "react";
import SplineCube from "./SplineCube";
import { Typewriter } from "./ui/typewriter";

interface HeroEntry {
  uid: string;
  hero_heading: string;
  hero_description: string;
}

export default async function HeroSection() {
  const response = await getData({
    contentType: "hero_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const data: HeroEntry | undefined = response?.[0];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#022C28] overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <SplineCube />
        </div>
      </div>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#022C28]/70 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-3xl text-center space-y-6 pt-24 sm:pt-28 md:pt-32 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {data?.hero_heading.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-white">
            {data?.hero_heading.split(" ").slice(-2).join(" ")}
          </span>{" "}
          <Typewriter
            text={[
              "with flexible financing.",
              "without slowing growth.",
              "like never before.",
              "using smarter payment solutions.",
            ]}
            speed={70}
            className="text-[#91e84f]"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          {data?.hero_description}
        </p>

        {/* Input with embedded button */}
        <div className="w-full flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full px-4 pr-36 py-4 rounded-md border border-[#0f3d3b] bg-[#0a302b] text-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 -translate-y-1/2 px-4 py-2 bg-[#4aed88] text-white rounded-md hover:bg-green-500 transition text-sm sm:text-base"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
