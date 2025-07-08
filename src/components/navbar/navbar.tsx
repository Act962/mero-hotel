"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { Separator } from "../ui/separator";
import Link from "next/link";

const LINKS = [
  {
    title: "O Mero",
    path: "/",
  },
  {
    title: "Hotel",
    path: "/",
  },
  {
    title: "Lounge",
    path: "/",
  },
  {
    title: "Mero Mar",
    path: "/",
  },
  {
    title: "Experiências",
    path: "/",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const hanldeScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    hanldeScroll();

    window.addEventListener("scroll", hanldeScroll);

    return () => window.removeEventListener("scroll", hanldeScroll);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 px-4 py-5 transition-colors duration-300 text-white",
        isScrolled && "bg-background text-black backdrop-blur"
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <div className="size-4">
            {/* Mobile */}
            <Menu
              className="size-4 md:hidden"
              onClick={() => setOpenMenu(true)}
            />

            {/* Button Desktop */}
            {isScrolled && (
              <Menu
                className="size-4 hidden md:block"
                onClick={() => setOpenMenu(true)}
              />
            )}
          </div>
          <Logo />
          <div className="flex items-center gap-1 group">
            <span className="group-hover:underline underline-offset-3 text-sm font-light">
              PT
            </span>
            |
            <span className="group-hover:underline underline-offset-3 text-sm font-light">
              EN
            </span>
          </div>
        </div>
        {/* Bottom Navbar */}
        {!isScrolled && (
          <div className="hidden md:block mt-6">
            <Separator />

            <div className="flex items-center justify-around mt-4">
              {LINKS.map((link, index) => (
                <Link
                  key={`${link.path}-${index}`}
                  href={link.path}
                  className="uppercase text-sm font-light hover:underline underline-offset-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
