"use client";

import React from "react";
import { motion } from "framer-motion";
import LottieAnimation from "./Lottieanimation";

interface Animation {
  title: string;
  href: string;
}

interface CardData {
  card_title: string;
  card_description: string;
  svg_animation: Animation;
  _metadata: {
    uid: string;
  };
}

export default function BlueprintClient({
  cards,
  sectionTitle,
}: {
  cards: CardData[];
  sectionTitle: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="relative mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center sm:text-left text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {sectionTitle.split("lasting")[0]}
            <span className="italic text-cyan-600">lasting</span> growth
          </motion.h2>

          <motion.button
            className="group absolute right-0 bottom-0 inline-flex items-center text-gray-500 font-medium hover:text-gray-900 transition text-sm sm:text-base"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Talk to us
            <svg
              className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card._metadata.uid}
              className="bg-[#f3efef] rounded-2xl p-6 flex flex-col items-center lg:items-start text-center lg:text-left min-h-[520px] transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20 , boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"}} // 👈 Card moves down 10px when hovered
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-2">
                {card.card_title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mt-6">
                {card.card_description}
              </p>
              <div className="w-full mt-auto pt-6 flex justify-center">
                <LottieAnimation url={card.svg_animation.href} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
