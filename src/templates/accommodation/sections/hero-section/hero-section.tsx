import React from "react";

export function HeroSection() {
  return (
    <div className="relative h-[80vh] md:h-screen w-full bg-gray-900">
      <video
        src="/Fasano-HoteisLazer_Hor_SemLogo-baixa-1.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      ></video>

      <div>
        <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Bem-vindo ao Fasano
          </h1>
        </div>
      </div>
    </div>
  );
}
