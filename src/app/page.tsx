// import Navbar from '@/components/Navbar'
import AiSection from "@/components/AiSection";

import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/servercomponent/Herosection.server";

// import MarqueeDemo from "@/components/MarqueeDemo";
import MarqueeWrapper from "@/components/Marquee.server";



// import TestimonialSection from "@/components/Testimonials";

import React from "react";
// import SolutionsClient from "@/components/Solutions";
import SolutionsServer from "@/components/servercomponent/SolutionServer";
import BlueprintServer from "@/components/servercomponent/BluePrintServer";
import ProductsServer from "@/components/servercomponent/ProductServer";
import TestimonialServer from "@/components/servercomponent/TestimonialServer";


const page = () => {
  return (
    <>
   <HeroSection/>
     {/* <MarqueeDemo/> */}
    <MarqueeWrapper/>
    <BlueprintServer/>
    <ProductsServer/>
    <SolutionsServer/>
    <AiSection/>
    <TestimonialServer/>
    <CtaSection/>
    </>
  );
};

export default page;
