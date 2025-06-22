// import Navbar from '@/components/Navbar'
import AiSection from "@/components/AiSection";
import Blueprint from "@/components/Blueprint";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
// import MarqueeDemo from "@/components/MarqueeDemo";
import MarqueeWrapper from "@/components/Marquee.server";

import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
// import Testimonial from "@/components/Testimonial";
import TestimonialSection from "@/components/Testimonials";

import React from "react";


const page = () => {
  return (
    <>
    <HeroSection/>
     {/* <MarqueeDemo/> */}
    <MarqueeWrapper/>
    <Blueprint/>
    <Products/>
    <Solutions/>
    <AiSection/>
    <TestimonialSection/>
    <CtaSection/>
    </>
  );
};

export default page;
