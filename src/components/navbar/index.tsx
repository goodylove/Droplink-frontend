"use client";

import React from "react";
// import { Button } from "../ui/button";
import Link from "next/link";
import { useUserContext } from "@/context/userContext";
function Navbar() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <nav className="w-full flex   items-center px-4 fixed top-7 z-50">
      <div className="w-full justify-between flex  items-center">
        <p className="ml-4 text-4xl font-bold font-poppins md:text-text text-primary ">
          DropLink
        </p>
        {/* <div>
          {user ? (
            <ul className="flex items-center space-x-5">
              <li> Welcome Back {user?.name}</li>
              <li>
                <Link
                  href={"/artist"}
                  className=" p-2 bg-white text-black rounded-md"
                >
                  Manage your Music
                </Link>
              </li>
            </ul>
          ) : (
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
          )}
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
