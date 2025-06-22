'use client'; // add this if you're using Next.js 13+ App Router (app/ directory)

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = () => {
  return (
    <div className="w-64 h-64">
      <DotLottieReact
      src="https://lottie.host/4db99841-8804-4018-a688-d0fa83fcd714/1vsvbp1R9K.lottie"
      loop
      autoplay
    />
    </div>
  );
};

export default LottieAnimation;
