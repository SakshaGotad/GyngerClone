// import Navbar from '@/components/Navbar'
import AiSection from "@/components/AiSection";
import Blueprint from "@/components/Blueprint";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";

import React from "react";


const page = () => {
  return (
    <>
    <HeroSection/>
    <MarqueeDemo/>
    <Blueprint/>
    <Products/>
    <Solutions/>
    <AiSection/>
    <CtaSection/>
    </>
  );
};

export default page;
