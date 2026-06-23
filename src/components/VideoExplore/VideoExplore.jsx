"use client";

// import { Button } from "@heroui/react";
import React from "react";

export default function VideoExplore() {
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          pointer-events-none
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/public/videoExplore.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

        <div className="relative z-20 text-center text-white px-6 max-w-2xl flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
            COFFEE TIME ?
          </h1>
          <p className="text-sm md:text-lg text-gray-200 drop-shadow">
            Let's find a place to get some coffee !!!
          </p>

          {/* Tombol Aksi menggunakan Hero UI */}
          {/* <Button
            color="primary"
            radius="full"
            size="lg"
            className="font-semibold shadow-lg mt-2"
          >
            Cari Coffee Shop
          </Button> */}
        </div>
      </div>
    </>
  );
}
