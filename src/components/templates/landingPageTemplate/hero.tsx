import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section
      className="md:min-h-screen h-[80vh] flex items-center justify-center 
             bg-[url('/images/dropbg.png')] bg-contain bg-center bg-no-repeat 
             bg-primary bg-blend-overlay"
    >
      <div>
        <div className="text-center">
          <div className="max-w-lg md:max-w-4xl mt-5 mx-auto flex flex-col items-center justify-center text-center">
            <h1 className=" text-5xl md:text-7xl font-bold  tracking-wide font-poppins text-text">
              One Link to Showcase Your Sound
            </h1>
            <p className="py-6 text-text text-xl font-sans  leading-[32px] font-normal ">
              Your music deserves the spotlight. Share your sound, your story,
              and your socials effortlessly
            </p>
            <Button className="btn btn-primary h-12 font-poppins text-lg  w-36 cursor-pointer  rounded-3xl text-white font-semibold bg-primary hover:bg-accent transition-all duration-200 ease-in-out">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
