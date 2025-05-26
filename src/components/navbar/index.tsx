import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="w-full flex   items-center px-4 fixed top-7 z-50">
      <div className="flex justify-between mx-auto items-center w-full px-6 py-5  bg-background border-1 text-white rounded-xl shadow-lg mt-7 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={30} height={30} />
          <span className="ml-1 text-2xl font-bold font-poppins md:text-text text-primary ">
            DropLink
          </span>
        </div>
        <ul className="flex md:space-x-6">
          <Button className="bg-black   font-poppins border-primary border-1 w-24 h-10 text-base  leading-[24px]  hover:bg-accent hover:border-none cursor-pointer hover:text-white transition duration-300 ease-in-out">
            <Link href="/login" className="text-white font-poppins">
              Login
            </Link>
          </Button>
          <Button className="bg-primary hidden md:block  h-10 w-28 font-poppins text-white hover:bg-accent cursor-pointer hover:text-white transition duration-300 ease-in-out text-base leading-[24px]  ">
            <Link href="/register" className="text-white font-poppins">
              Get Started
            </Link>
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
