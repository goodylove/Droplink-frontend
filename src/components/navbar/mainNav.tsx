import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

function MainNav() {
  return (
    <nav className="flex justify-between items-center bg-black px-4 md:px-7 py-6 shadow-md">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="text-black"
        />
        <span className="ml-1 text-2xl font-bold font-poppins  text-white ">
          DropLink
        </span>
      </div>
      <ul className="flex  items-center md:space-x-6 space-x-2 ">
        <Image
          src="/images/card.avif"
          alt="card"
          width={30}
          height={30}
          className="rounded-full"
        />
        <MdKeyboardArrowDown className="md:hidden flex" />
        <Button className=" hidden  md:flex bg-accent hidden md:block  h-10 w-28 font-poppins text-white hover:bg-accent cursor-pointer hover:text-white transition duration-300 ease-in-out text-base leading-[24px]  ">
          Logout
        </Button>

        {/* mobile */}
        {/* <PiList size={40} className=" cursor-pointer md:hidden flex" /> */}
      </ul>
    </nav>
  );
}

export default MainNav;
