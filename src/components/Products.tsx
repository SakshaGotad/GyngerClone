import React from "react";
import Image from "next/image"; // If using Next.js
import FeatureCard from "./FeatureCard";


const solutions = [
  {
    title: "Gynger Pay",
    description:
      "Extend flexible payment offers to your customers while getting paid up front.",
    cta: "Explore Gynger Pay",
    icon: <FeatureCard/>,
    bgLabel: "Pay",
    link: "/gynger-pay",
  },
  {
    title: "Gynger Capital",
    description:
      "Access fast, non-dilutive capital with Gynger Capital's embedded AP and AR financing solutions.",
    cta: "Explore Capital",
    icon: '/image.png',
    bgLabel: "Capital",
    link: "/capital-ap",
  },
];

const Products = () => {
  return (
    <section className="bg-white py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline + CTA */}
        <div className="flex justify-between items-center mb-16 flex-wrap gap-4">
          <h2 className="text-4xl font-light max-w-xl">
            Payment solutions purpose-built for the{" "}
            <em className="font-semibold italic">tech industry.</em>
          </h2>
          <a
            href="/finance"
            className="  inline-flex items-center  text-gray-400 font-medium hover:underline transition"
          >
            See what I can finance with Gynger
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 relative">
          {solutions.map((item, index) => (
           <div
           key={index}
           className="relative bg-gray-50 p-10 rounded-xl shadow  min-h-[550px] flex items-center overflow-hidden"
         >
           {/* Background Label */}
           <div className="absolute text-[300px] font-[50] text-gray-300  -top-35 left-6 pointer-events-none select-none opacity-30">
             {item.bgLabel}
           </div>
         
           {/* Flex Container */}
           <div className="flex flex-row justify-between items-center w-full gap-6">
             {/* Left Content */}
             <div className=" relative w-1/2  flex-col ">
                <div className="absolute -top-50">
                <h3 className="text-5xl font-thin mb-2">{item.title}</h3>
                </div>
               <div className="absolute top-30">
               <p className="text-gray-600 text-2xl mb-4">{item.description}</p>
               <a
                 href={item.link}
                 className="inline-flex items-center px-5 py-3 bg-[#f2f2f2] text-black rounded-md  hover:bg-[#e7e7e7] transition-colors duration-300"

               >
                 {item.cta}
                 <svg
                   className="ml-2 w-4 h-4"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   viewBox="0 0 15 16"
                 >
                   <path
                     d="M3.125 8H11.875M11.875 8L7.5 3.625M11.875 8L7.5 12.375"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
               </a>

               </div>
               
             </div>
         
             {/* Right Icon/Image */}
             <div className="flex-shrink-0 ">
               {/* <Image
                 src={item.icon}
                 alt={item.title}
                 width={400}
                 height={400}
                 className="object-contain"
               /> */}
               {item.icon}
             </div>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
