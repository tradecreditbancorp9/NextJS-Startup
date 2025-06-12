// "use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

import Video from "@/components/Video";
// import Services from "@/components/Services";
import { Metadata } from "next";
import Emailpopup from "@/components/Emailpopup";
import CurrencyConverter from "@/components/CurrencyConverter";

export const metadata: Metadata = {
  title: "TradeCreditBancorp",
  description: "This is Home for TradeCreditBancorp",
  // other metadata
};

export default function Home() {
  return (
    <>
      
       
            <Emailpopup />
              <ScrollUp />
              <Hero />
              <Features />
              <AboutSectionOne />


      {/*       not required */}
      
      {/* <Video /> */}
      {/* <Brands /> */}

      
      {/* <AboutSectionTwo /> */}
      
      {/*  <Pricing /> */}
     
      
      {/* <CurrencyConverter /> */}
      {/* <Services /> */}
    </>
  );
}
