// 'use client';
import React from 'react';
// import Image from 'next/image';
import { getData } from '@/lib/getData';
import MarqueeColumn from '../components/ui/AiMarquee'; // path may vary
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
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-6xl h-[1000px] mx-auto flex flex-col gap-8 justify-baseline">
        <div className="maz-w-6xl mx-auto mb-7 items-center justify-center font-light text-5xl">
          <h1>Convenience, powered by AI</h1>
        </div>

        <div className="max-w-6xl flex flex-row items-center justify-center gap-4">
          {/* Left Card (Image + Text) */}
          <div className="bg-white w-1/2 h-[700px]">
            <div className="w-full h-[500px] bg-gray-200 rounded-[30px] flex items-center justify-center">
              {/* <Image
                src="/image-placeholder.png" // <-- manually set
                alt="Left Card Visual"
                width={300}
                height={300}
              /> */}
              <Lottie2/>
                
            </div>
            <div className="mt-10 space-y-2 text-center">
              <h3 className="text-3xl font-normal">{leftCard?.title}</h3>
              <p className="text-gray-600 font-light text-xl">{leftCard?.description}</p>
            </div>
          </div>

          {/* Right Card (Marquee + Text) */}
          <div className="bg-white rounded-xl w-1/2 h-[700px]">
            <div className="grid grid-cols-3 gap-2 h-[500px] bg-gray-200 items-center justify-center rounded-[30px] w-full overflow-hidden">
              <MarqueeColumn slides={slides1} duration={8} />
              <MarqueeColumn slides={slides2} duration={10} reverse />
              <MarqueeColumn slides={slides3} duration={12} />
            </div>
            <div className="space-y-2 text-center mt-10">
              <h3 className="text-3xl font-normal">{rightCard?.title}</h3>
              <p className="text-gray-600 text-xl">{rightCard?.description}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end">
          <a
            href="#"
            className="mr-[180px] bg-[#d4d4d4] px-4 py-2 rounded hover:bg-[#e1e1e1] transition"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
