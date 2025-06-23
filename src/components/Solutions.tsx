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
      <div className="max-w-6xl bg-[#042c2d] rounded-3xl mx-auto px-6 sm:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center"
        >
          <h2 className="text-4xl font-light">Find Your Solution</h2>
          <a
            href="#"
            className="bg-[#3c764f] text-black px-6 py-3 rounded-md font-medium shadow hover:bg-gray-100 transition"
          >
            Talk to us
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {cards.map((item, index) => {
            const bullets = extractBullets(item.rich_text_editor);
            return (
              <motion.div
                key={item._metadata?.uid || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration:0.5 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#075152] p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#453] flex items-center justify-center mb-6">
                  {item.avatar?.url && (
                    <Image
                      src={item.avatar.url}
                      alt="Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-inside space-y-2 text-base text-white mb-6">
                  {bullets.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:underline mt-auto"
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
