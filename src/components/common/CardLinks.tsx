import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";

interface CardLinksProps {
  data: { name: string; link: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ name: string; link: string }[]>
  >;
}

function CardLinks({ data, setData }: CardLinksProps) {
  return (
    <div className="flex flex-col space-y-4 mt-3">
      {data.map((link, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md   space-x-5 "
        >
          <div className="text-black font-sans text-sm flex items-center gap-2">
            <Image
              className="inline-block  rounded-full"
              src={`https://logo.clearbit.com/${link.name}.com`}
              alt="Spotify"
              width={70}
              height={70}
            />
            <p className="font-semibold text-text">{link.link} </p>
          </div>
          <Button
            // variant="destructive"
            className="bg-black cursor-pointer"
            size="icon"
            onClick={() => {
              const updatedLinks = data.filter((_, i) => i !== index);
              setData(updatedLinks);
            }}
          >
            <span className="sr-only">Remove Link</span>
            <IoClose />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default CardLinks;
