'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#d9e1e3]">
      <div className="max-w-6xl mx-auto bg-white flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-3xl shadow-lg relative overflow-hidden min-h-[700px]">
        
        {/* Left: Text + Input */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Ready to learn more?
          </h1>

          <div className="w-full relative max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 pr-36 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78bcd4] transition"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#0f3b4c] hover:bg-[#1d2d32] text-white px-5 py-2 rounded-lg font-semibold transition">
              Get in touch
            </button>
          </div>
        </motion.div>

        {/* Right: Image + Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:flex md:w-1/2 justify-end relative mt-10 md:mt-0"
        >
          <div className="relative">
            <Image
              src="/67e2ec6ff072b4bc5eab6f4a_gynger-card (1).avif"
              alt="CTA Visual"
              width={400}
              height={300}
              className="rounded-2xl object-cover z-10"
            />
            <div className="absolute bottom-[-70px] left-[-100px] z-20">
              <Image
                src="/image copy 3.png"
                alt="Overlay badge"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA and divider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-6 left-0 w-full px-4 sm:px-8"
        >
          <div className="w-full h-[6px] bg-[#b7b1bb] mb-6 rounded-full" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base sm:text-lg text-center sm:text-left text-gray-800">
              Over <strong>$100 million</strong> in contracts closed
            </p>
            <button className="group flex items-center gap-2 text-gray-600 px-6 py-3 rounded-full text-base sm:text-lg font-semibold transition duration-300">
              Explore More
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
