import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardExperiences() {
  return (
    <div>
      <div className="relative overflow-hidden group">
        <Image
          src="/image-4.jpg"
          alt="Gastronomia"
          className="w-full aspect-auto group-hover:scale-105 transition-all duration-300"
          width={200}
          height={200}
        />
      </div>

      <div className="text-start space-y-3 mt-8">
        <h3 className="font-bold tracking-[0.6rem]">GASTRONOMIA</h3>
        <p className="text-xs sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus
          facilisis pellentesque, torquent fringilla porttitor quisque nec risus
          venenatis
        </p>
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
