import Navbar from "@/components/navbar";
import React from "react";
import HeroSection from "./hero";
import WhatToDo from "./whatToDo";
import HowItWorks from "./howItWorks";
import CallToAction from "./callToAction";
import Footer from "@/components/footer";

function LandingPageTemplate() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatToDo />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </>
  );
}

export default LandingPageTemplate;
