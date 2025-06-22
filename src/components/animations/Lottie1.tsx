'use client'
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie1 = ({ url }: { url: string }) => {
  return (
   <>
   <Player src={url}  autoplay  loop/>
   </>
  )
}

export default Lottie1
