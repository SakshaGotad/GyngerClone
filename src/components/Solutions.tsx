'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function extractBullets(html: string): string[] {
  const ulMatch = html.match(/<ul>(.*?)<\/ul>/s);
  if (!ulMatch) return [];
  const listItems = ulMatch[1].match(/<li>(.*?)<\/li>/g) || [];
  return listItems.map((li) => li.replace(/<\/?li>/g, '').trim());
}

export default function SolutionsClient({ cards }: { cards: any[] }) {
  return (
    <section className="py-24 text-white">
      <div className="max-w-7xl mx-auto bg-[#042c2d] rounded-3xl px-6 sm:px-12 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col p-8 md:flex-row justify-between items-center mb-12 text-center md:text-left"
        >
          <h2 className="text-6xl font-light">Find your solution</h2>
          <a
            href="#"
            className="bg-gradient-to-r from-[#b0f3c4] to-[#6de59b] text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Talk to us
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 items-end">
          {cards.map((item, index) => {
            const bullets = extractBullets(item.rich_text_editor).slice(0, 3); // Limit bullets
            return (
              <motion.div
                key={item._metadata?.uid || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#074240] p-6 rounded-2xl h-[420px] flex flex-col items-center text-center self-end"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#0a302b] shadow-lg">
                  {item.avatar?.url && (
                    <Image
                      src={item.avatar.url}
                      alt="Avatar"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>

                {/* Title */}
                <p className="text-sm uppercase tracking-wide text-[#b2ebe4] font-semibold mb-3">
                  {item.title}
                </p>

                {/* Bullet Points */}
                <ul className="text-white text-sm space-y-2 mb-6">
                  {bullets.map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-left leading-snug">
                      <span className="text-green-400">✔</span>
                      <span className="line-clamp-2">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="text-sm font-medium text-[#aaf0c7] hover:underline mt-auto"
                >
                  Learn more →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
