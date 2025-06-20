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
      <div className="max-w-6xl h-[1000px] mx-auto  flex flex-col gap-8 justify-baseline">
       
       <div className='maz-w-6xl mx-auto  mb-7 items-center justify-center font-light text-5xl'>
        <h1>Convenience, powered by AI </h1>
       </div>

       <div className='max-w-6xl flex flex-row items-center justify-center gap-4'>
        {/* Right Card with Placeholder Image */}
        <div className="bg-white  w-1/2 h-[700px] ">
          <div className="w-full h-[500px] bg-gray-200 rounded-[30px] flex items-center justify-center">
            <span className="text-gray-500">Placeholder Image</span>
          </div>
          <div className="mt-10 space-y-2 text-center">
            <h3 className="text-3xl font-normal">No-code integrations</h3>
            <p className="text-gray-600 font-light text-xl">
              Gynger embeds seamlessly into your existing workflows through turn-key integrations with your accounting system, bank, and or CRM.
            </p>
           
          </div>
        </div>


        {/* Left Card with Marquees */}
        <div className="bg-white rounded-xl  w-1/2 h-[700px]">
          
          <div className="grid grid-cols-3 gap-2 h-[500px] bg-gray-200 items-center justify-center rounded-[30px] w-full  overflow-hidden">
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
              
          <div className="space-y-2 text-center mt-10">
            <h3 className="text-3xl font-normal">Fast approvals</h3>
            <p className="text-gray-600 text-xl">
              Get next-day approval for non-dilutive payment solutions with AI-powered data integrations and pre-qualification.
            </p>
          </div>

        </div>

        
        </div>

        <div className='flex justify-end items-end  '>
         <a href="" className='mr-[180px] bg-[#d4d4d4]   px-4 py-2 rounded   hover:bg-[#e1e1e1] transition'>
          Explore Now 
         </a>
        </div>
        
      </div>
    </section>
  );
};

export default AiSection;
