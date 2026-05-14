"use client"; //
import React from "react";
import Carousel from "../ui/Carousel/Carousel";

export default function Banner() {
  // Data gambar didefinisikan di sini
  const bannerData = [
    { src: "/banner_awal.png", alt: "Banner Utama" },
    { src: "/Banner_wil.png", alt: "Banner Wilayah" },
    { src: "/banner_testi.png", alt: "Banner Testimoni" },
  ];

  return (
    <section className="w-full">
      {/* Panggil komponen Carousel dan kirimkan datanya melalui props 'items' */}

      <Carousel items={bannerData} />
    </section>
  );
}
