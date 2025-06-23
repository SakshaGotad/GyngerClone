import React from 'react';
import { getData } from '@/lib/getData';
import MarqueeColumn from '../components/ui/AiMarquee';
import Lottie2 from './animations/Lottie2';

const slides1 = ['/image.png', '/image.png', '/image.png'];
const slides2 = ['/image.png', '/image.png', '/image.png'];
const slides3 = ['/image.png', '/image.png', '/image.png'];

export default async function AiSection() {
  const response = await getData({
    contentType: 'convenience_ai_section',
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const cards = response?.[0]?.ca_data?.data ?? [];
  const rightCard = cards[0];
  const leftCard = cards[1];

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12">
        {/* Section Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center">
          Convenience, powered by <span className="italic">AI</span>
        </h1>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Card */}
          <div className="bg-white w-full lg:w-1/2 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-[30px] flex items-center justify-center">
              <Lottie2 />
            </div>
            <div className="mt-6 text-center space-y-2 px-4">
              <h3 className="text-2xl sm:text-3xl font-normal">{leftCard?.title}</h3>
              <p className="text-gray-600 text-base sm:text-lg font-light">
                {leftCard?.description}
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white w-full lg:w-1/2 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-[30px] overflow-hidden grid grid-cols-3 gap-2">
              <MarqueeColumn slides={slides1} duration={8} />
              <MarqueeColumn slides={slides2} duration={10} reverse />
              <MarqueeColumn slides={slides3} duration={12} />
            </div>
            <div className="mt-6 text-center space-y-2 px-4">
              <h3 className="text-2xl sm:text-3xl font-normal">{rightCard?.title}</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                {rightCard?.description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center lg:justify-end">
          <a
            href="#"
            className="bg-[#d4d4d4] px-5 py-2 rounded hover:bg-[#e1e1e1] transition text-sm sm:text-base"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
