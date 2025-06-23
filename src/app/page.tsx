// import Navbar from '@/components/Navbar'
import AiSection from "@/components/AiSection";

import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/servercomponent/Herosection.server";

// import MarqueeDemo from "@/components/MarqueeDemo";
import MarqueeWrapper from "@/components/Marquee.server";

import Products from "@/components/Products";
// import Solutions from "@/components/Solutions";
// import Testimonial from "@/components/Testimonial";
import TestimonialSection from "@/components/Testimonials";

import React from "react";
// import SolutionsClient from "@/components/Solutions";
import SolutionsServer from "@/components/servercomponent/SolutionServer";
import BlueprintServer from "@/components/servercomponent/BluePrintServer";


const page = () => {
  return (
    <>
   <HeroSection/>
     {/* <MarqueeDemo/> */}
    <MarqueeWrapper/>
    <BlueprintServer/>
    <Products/>
    <SolutionsServer/>
    <AiSection/>
    <TestimonialSection/>
    <CtaSection/>
    </>
  );
};

export default page;
