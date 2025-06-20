import React from "react";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="py-24  bg-[#d9e1e3]">
      <div className="max-w-6xl mx-auto h-[700px] bg-white flex flex-col md:flex-row items-center justify-between p-10 rounded-3xl shadow-lg relative overflow-hidden">
        {/* Left side: Text and form */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-normal text-gray-900 leading-tight">
            Ready to learn more?
          </h1>
          <div className="w-full relative max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 pr-36 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78bcd4] transition"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#0f3b4c] hover:bg-[#1d2d32] text-white px-5 py-2 rounded-lg font-semibold transition">
              Get in touch
            </button>
          </div>
        </div>

        {/* Right side: Image with overlay */}
        <div className="hidden md:flex md:w-1/2 justify-end relative">
          {/* Card image with overlay container */}
          <div className="relative">
            <Image
              src="/67e2ec6ff072b4bc5eab6f4a_gynger-card (1).avif"
              alt="CTA Visual"
              width={400}
              height={300}
              className="rounded-2xl object-cover z-10"
            />

            {/* Overlay badge */}
            <div className="absolute bottom-[-70px] left-[-100px] z-30">
              <Image
                src="/image copy 3.png"
                alt="Overlay badge"
                width={400}
                height={300}
                className="object-contain "
              />
            </div>
          </div>
        </div>

        {/* Horizontal line and CTA button inside container */}
        <div className="absolute bottom-10 left-0 w-full flex flex-col items-center px-10">
          {/* Divider line */}
          <div className="w-full h-[10px] bg-[#b7b1bb] mb-6" />

          {/* CTA button */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-10">
            <p className="text-lg text-gray-800 text-center md:text-left">
              Over <strong>$100 million</strong> in contracts closed
            </p>

            <button className="group flex items-center gap-2  text-gray-600 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
              Explore More
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
