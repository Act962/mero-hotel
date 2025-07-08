import React from "react";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function CallToBook() {
  return (
    <div className="fixed bottom-0 text-white w-full h-16 bg-[#4C4C4C] flex items-center justify-between px-4 z-50">
      {/* Descktop */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto items-center justify-between gap-4">
        <h3 className="font-light tracking-[2px] text-sm whitespace-nowrap">
          RESERVE SUA ESTADA
        </h3>
        <div className="flex-1 max-w-md w-full flex items-center justify-between">
          <Popover>
            <PopoverTrigger className="flex items-center gap-2">
              <span className="uppercase text-sm font-light">
                Check-in Check-out
              </span>
              <ArrowDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent align="start">
              <div>
                <span>Lista de items</span>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger className="flex items-center gap-2">
              <span className="uppercase text-sm font-light">
                Check-in Check-out
              </span>
              <ArrowDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent align="start">
              <div>
                <span>Lista de items</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Button variant="primary" className="whitespace-nowrap">
          Reservar
        </Button>
      </div>
      {/* Mobile */}
      <div className="md:hidden w-full flex items-center justify-center gap-3">
        <h3 className="font-light tracking-[2px] text-sm">
          RESERVE SUA ESTADA
        </h3>
        <ArrowUp className="size-4 animate-bounce" />
      </div>
    </div>
  );
}
