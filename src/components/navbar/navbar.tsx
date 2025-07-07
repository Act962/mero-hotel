"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Links de navegação
const NAV_LINKS = [
  { href: "/", title: "O Mero" },
  { href: "/hotel", title: "Hotel" },
  { href: "/lounge", title: "Lounge" },
  { href: "/mero-mar", title: "Mero Mar" },
  { href: "/experiencias", title: "Experiência" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Acompanha o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Verifica o estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 z-50 bg-transparent">
      <div className={"w-full max-w-7xl mx-auto space-y-4 mt-8"}>
        {/* Topo com menu, nome e idiomas */}
        <div
          className={cn(
            "flex items-center justify-between w-full transition-all",
            isScrolled && "hidden"
          )}
        >
          <Menu className="size-4" />

          <span className="text-lg font-semibold">Mero Hotel</span>

          <div className="flex items-center gap-2 text-sm">
            <span>PT</span>
            <Separator orientation="vertical" />
            <span>EN</span>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex items-center justify-between gap-4 text-sm font-medium">
          {NAV_LINKS.map(({ href, title }) => (
            <Link
              key={href}
              href={href}
              className="hover:underline transition-colors"
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
