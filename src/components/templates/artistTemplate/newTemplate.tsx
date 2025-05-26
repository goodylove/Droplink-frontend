"use client";

import React from "react";
// import { PiPen, PiUser } from "react-icons/pi";

import MainNav from "@/components/navbar/mainNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
const NewTemplate = () => {
  const form = useForm({
    // resolver: zodResolver(),
  });
  // const [image, setImage] = React.useState<File | string>("");
  // const fileInputRef = React.useRef<HTMLInputElement>(null);

  // function handImageChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setImage(URL.createObjectURL(file));
  //   }
  // }
  // const handleImageClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };
  return (
    <>
      <MainNav />
      <main className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-2xl mx-auto w-full bg-text p-6 rounded-lg shadow-md">
          <Form {...form}>
            <form action="" className="space-y-5">
              <h3 className="text-3xl font-semibold font-sans text-primary mb-5">
                Personal Info
              </h3>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="title"
                      className="text-black font-semibold font-sans "
                    >
                      Title
                    </FormLabel>
                    <FormControl className="mt-3">
                      <Input
                        placeholder="Enter your title here"
                        id="title"
                        {...field}
                        className="py-5 text-black font-normal font-sans"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="bio"
                      className="text-black font-semibold font-sans "
                    >
                      Bio
                    </FormLabel>
                    <FormControl className="mt-3">
                      <Input
                        placeholder="Enter your bio here"
                        id="bio"
                        {...field}
                        className="py-5 text-black font-normal font-sans"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </main>
    </>
  );
};

export default NewTemplate;
