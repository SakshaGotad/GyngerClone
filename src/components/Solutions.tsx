import React from 'react';
import Image from 'next/image';
import { getData } from '@/lib/getData';

// Helper to extract bullet points from rich text HTML
function extractBullets(html: string): string[] {
  const ulMatch = html.match(/<ul>(.*?)<\/ul>/s);
  if (!ulMatch) return [];

  const listItems = ulMatch[1].match(/<li>(.*?)<\/li>/g) || [];
  return listItems.map((li) => li.replace(/<\/?li>/g, '').trim());
}

export default async function Solutions() {
  const response = await getData({
    contentType: "solution_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const cards = response?.[0]?.card_data?.data ?? [];

  return (
    <section className="py-24 text-white">
      <div className="max-w-6xl bg-[#042c2d] min-h-[750px] border-0 rounded-3xl mx-auto p-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 mt-8 flex-wrap gap-6">
          <h2 className="text-4xl font-light">Find Your Solution</h2>
          <a
            href="#"
            className="bg-[#3c764f] text-[#0e0d0d] px-6 py-3 rounded-md font-medium shadow hover:bg-gray-100 transition"
          >
            Talk to us
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, index) => {
            const bullets = extractBullets(item.rich_text_editor);
            return (
              <div
                key={item._metadata?.uid || index}
                className="bg-[#075152] text-[#ffffff] min-h-[400px] p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                {/* Circle Icon */}
                <div className="w-16 h-16 rounded-full bg-[#453] flex items-center justify-center mb-4">
                  {item.avatar?.url && (
                    <Image
                      src={item.avatar.url}
                      alt="Solution Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                  {bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#"
                  className="inline-block text-sm font-medium text-[#fff] hover:underline"
                >
                  Learn more →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
