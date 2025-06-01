"use client";

import MainNav from "@/components/navbar/mainNav";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import React from "react";

const ArtistTemplate = () => {
  const { user, isLoading, isError } = useUserContext();
  console.log("User data:", user);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Error loading user data.</p>
      </div>
    );
  }
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
