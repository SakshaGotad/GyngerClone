'use client'; // add this if you're using Next.js 13+ App Router (app/ directory)

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({ url }: { url: string }) => {
  return (
    <div className="w-64 h-64">
      <DotLottieReact
     src={url}  autoplay  loop
    />
    </div>
  );
};

export default LottieAnimation;
