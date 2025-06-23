'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface Lottie3Props {
  src: string;
}

const Lottie3: React.FC<Lottie3Props> = ({ src }) => {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
    />
  );
};

export default Lottie3;
