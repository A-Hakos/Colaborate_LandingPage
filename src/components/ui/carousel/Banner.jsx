"use client"; //
import React from "react";

// Akan digunakan saat menggunakan swiper
// Impor Komponen Utama
import { Swiper, SwiperSlide } from "swiper/react";

// Impor CSS Dasar Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Impor Modul yang dibutuhkan (Opsional)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <div className="w-full relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="w-full aspect-video md:h-[500px] lg:h-[70vh] relative">
              <img
                src="/banner_awal.png"
                alt="Banner1"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full aspect-video md:h-[500px] lg:h-[70vh] relative">
              <img
                src="/Banner_wil.png"
                alt="Banner2"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full aspect-video md:h-[500px] lg:h-[70vh] relative">
              <img
                src="/banner_testi.png"
                alt="Banner3"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
