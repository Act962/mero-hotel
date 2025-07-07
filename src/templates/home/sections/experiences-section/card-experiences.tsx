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
          className="w-full object-cover  group-hover:scale-110 transition-transform duration-300"
          width={200}
          height={200}
        />
      </div>

      <div className="text-start space-y-3 mt-8">
        <h3 className="font-medium text-xl tracking-[0.6rem]">GASTRONOMIA</h3>
        <p className="text-xs sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus
          facilisis pellentesque, torquent fringilla porttitor quisque nec risus
          venenatis
        </p>
        <Link
          href="/"
          className="uppercase underline underline-offset-3 hover:text-gray-500"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
