'use client';

import React from "react";

interface MarqueeLogo {
  uid: string;
  title: string;
  filename: string;
  url: string;
}

interface MarqueeProps {
  logos: MarqueeLogo[];
}

export const Marquee: React.FC<MarqueeProps> = ({ logos }) => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="animate-marquee flex w-max space-x-16">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.uid}-${index}`}
            className="flex items-center justify-center min-w-[140px]"
            title={logo.title}
          >
            <img
              src={logo.url}
              alt={logo.title}
              className="h-15 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: scrollMarquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
