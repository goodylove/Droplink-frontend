"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useUserContext } from "@/context/userContext";

function MainNav() {
  const ref = React.useRef<HTMLElement>(null);
  const [showLogout, setShowLogout] = useState(false);
  const { handleLogout } = useUserContext();
  const toggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <nav
      ref={ref}
      className="flex justify-between items-center bg-black px-4 md:px-7 py-6 shadow-md relative"
    >
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="text-black"
        />
        <span className="ml-1 text-2xl font-bold font-poppins text-white">
          DropLink
        </span>
      </div>
      <div className="flex items-center md:space-x-6 space-x-2">
        <Image
          src="/images/card.avif"
          alt="card"
          width={30}
          height={30}
          className="rounded-full"
        />
        <MdKeyboardArrowDown
          className="md:hidden flex cursor-pointer text-white"
          onClick={toggleLogout}
        />
        <Button
          onClick={handleLogout}
          className={`bg-accent h-8 w-18 font-poppins text-white hover:bg-accent cursor-pointer hover:text-white transition duration-300 ease-in-out text-sm leading-[24px] ${
            showLogout
              ? "absolute top-22 duration-300  transition  right-4 md:static "
              : "hidden md:flex"
          }`}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default MainNav;
