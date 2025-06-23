"use client";

import React from "react";
import { motion } from "framer-motion";
import GyngerPayVisual from "../components/ui/GyngerPayVisual"; // This will be a React component
import Image from "next/image";

interface Product {
  _metadata?: { uid: string };
  label: string;
  title: string;
  description: string;
  cta?: string;
}

const productAssets: Record<string, React.ReactNode> = {
  "Gynger Pay": <GyngerPayVisual />,
  "Gynger Capital": (
    <Image
      src="/image copy 4.png" // Upload this asset to `public/`
      alt="Gynger Capital"
      width={350}
      height={220}
      className="rounded-xl shadow-md"
    />
  ),
};

export default function ProductsClient({ products }: { products: Product[] }) {
  return (
    <section className="bg-white py-20 sm:py-24 relative">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-light max-w-xl text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Payment solutions purpose-built for the{" "}
            <em className="font-semibold italic">tech industry.</em>
          </motion.h2>

          <motion.a
            href="/finance"
            className="inline-flex items-center text-gray-400 font-medium hover:underline transition text-sm sm:text-base"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See what I can finance with Gynger
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 relative">
          {products.map((item, index) => (
            <motion.div
              key={item._metadata?.uid || index}
              className="relative bg-gray-50 p-8 sm:p-10 rounded-xl shadow min-h-[500px] flex flex-col lg:flex-row items-center lg:items-start overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Huge background text */}
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={{
                  rest: { color: "#e5e7eb" },
                  hover: { color: "#0f766e" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute text-[120px] sm:text-[160px] lg:text-[250px] font-black -top-12 left-4 pointer-events-none select-none opacity-20 leading-none"
              >
                {item.label}
              </motion.div>

              {/* Left Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between h-full relative z-10 text-center lg:text-left">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-light">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-xl">
                    {item.description}
                  </p>
                </div>

                {item.cta && (
                  <a
                    href="#"
                    className="mt-[200px] inline-flex items-center justify-center px-5 py-3 bg-[#f2f2f2] text-black rounded-md hover:bg-[#e7e7e7] transition-colors duration-300 text-sm sm:text-base w-full max-w-[220px]"
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

              {/* Right Visual */}
              <div className="w-[350px] h-auto mt-8 lg:mt-0 lg:ml-16 flex items-center justify-center flex-shrink-0 z-10">
                {productAssets[item.title] || null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
