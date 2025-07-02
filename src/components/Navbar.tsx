import { Menu } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

const links = [
  {
    href: "/",
    title: "O Mero",
  },
  {
    href: "/",
    title: "Hotel",
  },
  {
    href: "/",
    title: "Lounge",
  },
  {
    href: "/",
    title: "Mero Mar",
  },
  {
    href: "/",
    title: "Experiência",
  },
];

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 right-0 left-0 px-4">
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto space-y-4 mt-8">
        <div className="w-full flex items-center justify-between">
          <Menu className="size-4" />

          <span>Mero Hotel</span>

          <div>
            <div className="flex items-center gap-2">
              <span>PT</span>
              <Separator orientation="vertical" />
              <span>EN</span>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
