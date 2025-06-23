'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Testimonial = {
  name: string;
  position: string;
  quote: string;
};

export default function TestimonialClient({ testimonials }: { testimonials: Testimonial[] }) {
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
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;
              }
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            {(testimonials || []).map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.position}</p>
                  </div>
                  <p className="text-2xl font-light leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
