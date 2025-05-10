import HowItWorksCard from "@/components/common/howItWorksCard";
import { howItWorks } from "@/constants/data";
import React from "react";

function HowItWorks() {
  return (
    <section className="py-30 bg-background border-t ">
      <div className="container mx-auto px-6 text-center space-y-10">
        <h2 className="text-3xl font-bold text-white  font-sans py-7">
          Set Up in 3 Simple Steps
        </h2>
        <div className="grid gap-10 md:grid-cols-3 ">
          {howItWorks.map((item, index) => {
            return <HowItWorksCard key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
