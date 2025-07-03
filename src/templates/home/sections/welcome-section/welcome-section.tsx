import React from "react";

export function WelcomeSection() {
  return (
    <div className="w-full h-[26rem] flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col gap-10 max-w-4xl text-center">
        <h1 className="text-xl sm:text-3xl font-semibold tracking-[0.8rem]">
          BEM - VINDO
        </h1>
        <p className="text-sm">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
