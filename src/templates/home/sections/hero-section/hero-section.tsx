import React from "react";

export function HeroSection() {
  return (
    <div className="h-[80vh] md:h-screen w-full bg-gray-900">
      <video
        src="/Fasano-HoteisLazer_Hor_SemLogo-baixa-1.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
}
