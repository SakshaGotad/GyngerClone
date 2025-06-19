'use client'; // add this if you're using Next.js 13+ App Router (app/ directory)

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = () => {
  return (
    <div className="w-64 h-64">
      <DotLottieReact
        src="https://lottie.host/3aa62029-1963-4312-aa13-5983b3777c0a/nVDqMGhLOT.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LottieAnimation;
