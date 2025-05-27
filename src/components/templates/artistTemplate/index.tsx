import MainNav from "@/components/navbar/mainNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ArtistTemplate = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <MainNav />

      <div className="w-full flex flex-col mx-auto justify-center items-center mt-20 h-full text-center px-4">
        <div className="bg-white md:p-8 p-4 rounded-lg shadow-lg max-w-md">
          <h2 className="text-3xl font-bold text-primary mb-4 font-sans">
            Hi Goody 👋
          </h2>
          <p className="text-gray-700 text-lg mb-6 font-sans">
            Welcome to DropLink! Your music deserves the spotlight. Share your
            sound, your story, and your socials effortlessly.
          </p>
          <Button className="bg-accent cursor-pointer h-12 w-full   font-sans text-white hover:bg-accent/90 transition duration-300 ease-in-out text-base leading-[24px] flex items-center justify-center">
            <Link href="/artist/new">Create Your Link</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ArtistTemplate;
