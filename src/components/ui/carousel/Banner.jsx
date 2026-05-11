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
            <div className="w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/4] max-h-[550px]">
              <img
                src="/Logo.png" // ganti foto
                alt="Coffee"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/4] max-h-[550px]">
              <img
                src="/banner2.png" // ganti foto
                alt="Banner"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/4] max-h-[550px]">
              <img
                src="/testimoni.png"
                alt="Testi"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
