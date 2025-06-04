import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section
      className=" md:min-h-screen  h-[80vh] items-center flex justify-center bg-gradient-to-b from-background/90 via-primary/90 to-accent/90 backdrop-blur-sm
    "
    >
      <div className="text-center">
        <div className="max-w-lg md:max-w-4xl mt-5 mx-auto flex flex-col items-center justify-center text-center">
          <h1 className=" text-5xl md:text-7xl font-bold  tracking-wide font-poppins text-text">
            One Link to Showcase Your Sound
          </h1>
          <p className="py-6 text-text text-base font-sans leading-[32px] font-normal ">
            Your music deserves the spotlight. Share your sound, your story, and
            your socials effortlessly
          </p>
          <Button className="btn btn-primary h-12 font-poppins text-base  w-36 cursor-pointer  text-white font-semibold bg-primary hover:bg-accent transition-all duration-200 ease-in-out">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
