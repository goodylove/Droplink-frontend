import React from "react";
import { LoginForm } from "./loginForm";
import Image from "next/image";
import Link from "next/link";

function LoginTemplate() {
  return (
    <div className=" h-screen bg-background   overflow-hidden py-10">
      <Link href="/" className="flex  w-full ml-12 items-center cursor-pointer">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <span className="ml-1 text-2xl font-bold font-poppins md:text-text text-primary ">
          DropLink
        </span>
      </Link>
      <div className="flex flex-col items-center justify-center h-10/12  mt-12">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg  shadow-2xl border ">
          <h2 className="mb-6 text-2xl font-bold text-center text-primary font-sans">
            Login
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginTemplate;
