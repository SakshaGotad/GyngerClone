'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MarqueeColumnProps {
  slides: string[];
  reverse?: boolean;
  duration?: number;
}

const MarqueeColumn: React.FC<MarqueeColumnProps> = ({
  slides,
  reverse = false,
  duration = 10,
}) => {
  return (
    <motion.div
      className="flex flex-col gap-4"
      animate={{ y: reverse ? ['-100%', '100%'] : ['100%', '-100%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {slides.map((src, i) => (
        <div
          key={i}
          className="bg-white rounded-xl w-32 shadow-md flex items-center justify-center"
        >
          <Image
            src={src}
            alt={`marquee-slide-${i}`}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default MarqueeColumn;
