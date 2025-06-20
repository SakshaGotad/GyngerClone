'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides1 = ['/image.png', '/image.png', '/image.png'];
const slides2 = ['/image.png', '/image.png', '/image.png'];
const slides3 = ['/image.png', '/image.png', '/image.png'];

const AiSection = () => {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-6xl h-[1000px] mx-auto  flex flex-col gap-8 items-start bg-amber-200">
       
       <div className='maz-w-6xl mx-auto items-center justify-center font-light text-5xl'>
        <h1>Convenience, powered by AI </h1>
       </div>

       <div className='max-w-6xl flex flex-row items-center justify-center gap-4'>
        {/* Right Card with Placeholder Image */}
        <div className="bg-white rounded-xl  h-[700px] ">
          <div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Placeholder Image</span>
          </div>
          <div className="mt-6 space-y-2 text-center">
            <h3 className="text-xl font-semibold">No-code integrations</h3>
            <p className="text-gray-600 text-sm">
              Gynger embeds seamlessly into your existing workflows through turn-key integrations with your accounting system, bank, and or CRM.
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
            >
              Explore integrations →
            </a>
          </div>
        </div>


        {/* Left Card with Marquees */}
        <div className="bg-white rounded-xl  shadow  h-[700px]">
          
          <div className="grid grid-cols-3 gap-2 h-[500px] bg-gray-200 items-center justify-center w-full  overflow-hidden">
            {/* Marquee 1 */}
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              {slides1.map((src, i) => (
                <Image key={i} src={src} alt={`slide1-${i}`} width={200} height={200} className="object-contain" />
              ))}
            </motion.div>

            {/* Marquee 2 (reverse) */}
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              {slides2.map((src, i) => (
                <Image key={i} src={src} alt={`slide2-${i}`}  width={200} height={200} className="object-contain" />
              ))}
            </motion.div>

            {/* Marquee 3 */}
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              {slides3.map((src, i) => (
                <Image key={i} src={src} alt={`slide3-${i}`}  width={200} height={200} className="object-contain" />
              ))}
            </motion.div>
          </div>
              
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Fast approvals</h3>
            <p className="text-gray-600 text-sm">
              Get next-day approval for non-dilutive payment solutions with AI-powered data integrations and pre-qualification.
            </p>
          </div>

        </div>
        </div>
        
      </div>
    </section>
  );
};

export default AiSection;
