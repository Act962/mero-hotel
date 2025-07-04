import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CardGroup {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function CardGroup() {
  return (
    <div className="text-start flex flex-col gap-4">
      <h3 className=" text-lg  md:text-xl font-normal tracking-[0.6rem]">
        MERO HOTEL
      </h3>

      <div className="relative overflow-hidden group">
        <Image
          src="/image-3.jpg"
          alt="Mero Hotel"
          className="h-60 sm:h-72 md:h-96 w-full object-cover group-hover:scale-105 transition-all duration-300"
          width={600}
          height={600}
        />
        {/* <div className="absolute w-full bottom-0 h-0 z-20 bg-gradient-to-t from-black/20 to-transparent group-hover:h-[50%] transition-all duration-300" /> */}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs sm:text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus
          facilisis pellentesque, torquent fringilla porttitor quisque nec risus
          venenatis
        </p>

        <Separator />
        <Link
          href="/"
          className="uppercase underline underline-offset-3 hover:text-gray-300"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
