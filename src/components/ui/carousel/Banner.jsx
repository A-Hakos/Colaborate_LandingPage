"use client"; //
import React from "react";

export default function Banner() {
  return (
    <>
      {/* Banner */}
      <div className="w-full h-[500px] relative">
        <img
          src="/banner.png"
          alt="Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start">
          {" "}
          <div className="max-w-7xl ml-5 px-6 text-white">
            <span className="bg-green-700/80 px-4 py-1 rounded-full text-sm">
              Jelajahi rasa, suasana, dan cerita
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Temukan Coffee Shop <br />
              Terbaik di <span className="italic">Jawa Tengah</span>
            </h1>

            <p className="mt-4 text-gray-200 max-w-lg">
              Dari hidden gems sampai cafe dengan view gunung, temukan tempat
              ngopi favoritmu di Jawa Tengah.
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
