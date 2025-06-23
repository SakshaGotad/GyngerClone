import React from "react";
import Image from "next/image";
import { getData } from "@/lib/getData";
import Lottie3 from "./animations/Lottie3";

const productIcons: Record<string, string> = {
  "Gynger Pay": "https://lottie.host/de64a06e-581a-4d07-b489-428157e15a1f/tgfIQc6Wyk.lottie",
  "Gynger Capital": "https://lottie.host/a023411f-fe7b-423b-b5f3-422a3118f902/T9O572uGb0.lottie",
};

export default async function Products() {
  const response = await getData({
    contentType: "product_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const products = response?.[0]?.products?.gynger_products ?? [];

  return (
    <section className="bg-white py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl font-light max-w-xl text-center lg:text-left">
            Payment solutions purpose-built for the{" "}
            <em className="font-semibold italic">tech industry.</em>
          </h2>
          <a
            href="/finance"
            className="inline-flex items-center text-gray-400 font-medium hover:underline transition text-sm sm:text-base"
          >
            See what I can finance with Gynger
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 relative">
          {products.map((item, index) => (
            <div
              key={item._metadata?.uid || index}
              className="relative bg-gray-50 p-8 sm:p-10 rounded-xl shadow min-h-[500px] flex flex-col lg:flex-row items-center lg:items-start overflow-hidden"
            >
              {/* Background Label */}
              <div className="absolute text-[120px] sm:text-[160px] lg:text-[250px] font-black text-gray-200 -top-12 left-4 pointer-events-none select-none opacity-20 leading-none">
                {item.label}
              </div>

              {/* Left Content */}
              <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left space-y-4">
                <h3 className="text-3xl sm:text-4xl font-light">{item.title}</h3>
                <p className="text-gray-600 text-base sm:text-xl">{item.description}</p>

                {item.cta && (
                  <a
                    href="#"
                    className="inline-flex items-center px-5 py-3 bg-[#f2f2f2] text-black rounded-md hover:bg-[#e7e7e7] transition-colors duration-300 text-sm sm:text-base"
                  >
                    {item.cta}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 15 16"
                    >
                      <path
                        d="M3.125 8H11.875M11.875 8L7.5 3.625M11.875 8L7.5 12.375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Right Image */}
              <div className=" w-[350px] h-[350px] md:w-80 md:h-80 mt-8 lg:mt-0 lg:ml-8 flex-shrink-0 z-10">
                {productIcons[item.title] && (
                  <Lottie3 src={productIcons[item.title]} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
