"use client";

import React from "react";
import { PiPen, PiUser } from "react-icons/pi";

import MainNav from "@/components/navbar/mainNav";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import MusicLinkComponent from "./musicLink";
import SocialLink from "./socialLink";
import { Button } from "@/components/ui/button";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
const NewTemplate = () => {
  const form = useForm({
    // resolver: zodResolver(),
  });
  const [image, setImage] = React.useState<File | string>("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  function handImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }
  const handleEditImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <main className="overflow-x-hidden">
      <MainNav />
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-2xl mx-auto w-full bg-text p-6 ">
          <Form {...form}>
            <form action="" className="space-y-8 ">
              <div className="max-w-2xl mx-auto w-full bg-text p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold font-sans text-primary mb-5">
                  PERSONAL INFO
                </h3>

                <div className="flex items-center my-8 space-x-3">
                  {image ? (
                    <div className="relative">
                      <Image
                        src={`${image}`}
                        width={50}
                        height={50}
                        alt="artist image"
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <div
                        className="absolute inset-0 cursor-pointer hover:bg-gray-700 opacity-0 hover:opacity-90 flex items-center justify-center rounded-full"
                        onClick={handleEditImage}
                      >
                        <PiPen className="text-white" />
                        <span className="text-black">Edit</span>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={handleEditImage}
                      className="flex h-20 w-20 bg-gray-300 rounded-full items-center justify-center cursor-pointer"
                    >
                      <PiUser size={35} />
                    </div>
                  )}
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handImageChange}
                    ref={fileInputRef}
                  />
                  <Label
                    htmlFor="image"
                    className="block text-sm font-medium cursor-pointer text-gray-700 mb-2 font-sans"
                  >
                    Upload image
                  </Label>
                </div>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="my-4">
                      <FormLabel
                        htmlFor="title"
                        className="text-black font-semibold font-sans "
                      >
                        Title
                      </FormLabel>
                      <FormControl className="mt-1">
                        <Input
                          placeholder="Enter your title (e.g., music title)"
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
                  name="username"
                  render={({ field }) => (
                    <FormItem className="my-4">
                      <FormLabel
                        htmlFor="username"
                        className="text-black font-semibold font-sans "
                      >
                        Username
                      </FormLabel>
                      <FormControl className="mt-1">
                        <Input
                          placeholder="Enter your username (e.g., artist username)"
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
                    <FormItem className="my-4">
                      <FormLabel
                        htmlFor="bio"
                        className="text-black font-semibold font-sans "
                      >
                        Bio
                      </FormLabel>
                      <FormControl className="mt-1">
                        <Textarea
                          placeholder="Write a short bio about yourself"
                          id="bio"
                          {...field}
                          className="py-5 text-black font-normal font-sans"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <MusicLinkComponent />

              <SocialLink />

              <Button className="w-full h-12 font-sans text-lg">Save</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default NewTemplate;
