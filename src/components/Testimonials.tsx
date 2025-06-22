'use client'

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    quote: 'The savings and cash flow benefits allow us to focus on building Lovd instead of over-budgeting for SaaS.',
    name: 'Noah Elion',
    role: 'CEO & Founder',
    image: '/image copy.png',
    link: '#'
  },
  {
    quote: 'Gynger helped us scale operations faster with minimal financial friction.',
    name: 'Jane Doe',
    role: 'COO at TechX',
    image: '/image copy.png',
    link: '#'
  },
  {
    quote: 'With Gynger, our procurement process has never been smoother and more cost-effective.',
    name: 'Alex Smith',
    role: 'VP Finance, ScaleUp Inc.',
    image: '/image copy.png',
    link: '#'
  }
];

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24 bg-white text-[#040720]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left */}
        <div className="flex flex-col justify-between max-w-md">
          <h2 className="text-5xl font-light leading-tight mb-8">
            Gynger is driving<br />
            success<br />
            across industries
          </h2>
          <div className="flex gap-4 mt-10">
            <button ref={prevRef} className="bg-[#f0f5f5] rounded-full w-16 h-16 flex items-center justify-center text-2xl text-[#040720] hover:bg-[#e6eeee] transition">
              ←
            </button>
            <button ref={nextRef} className="bg-[#f0f5f5] rounded-full w-16 h-16 flex items-center justify-center text-2xl text-[#040720] hover:bg-[#e6eeee] transition">
              →
            </button>
          </div>
        </div>

        {/* Right: Swiper */}
        <div className="max-w-xl w-full">
          <Swiper
            modules={[Navigation, A11y]}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onBeforeInit={(swiper) => {
              // Bind navigation buttons before Swiper mounts
              // (important for React refs)
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;
              }
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-light leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <a href={t.link} className="text-[#3c764f] font-medium hover:underline inline-flex items-center gap-1">
                    Read full story →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
