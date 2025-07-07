import React from "react";
import { Button } from "../ui/button";

export function CallToBook() {
  return (
    <div className="fixed bottom-0 text-white w-full h-14 bg-[#4C4C4C] flex items-center justify-between px-4">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <h3>Reserve sua estada</h3>
        <Button variant="primary" className="">
          Reservar
        </Button>
      </div>
    </div>
  );
}
