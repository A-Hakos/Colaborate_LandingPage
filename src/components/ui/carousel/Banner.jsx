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
      {/* Banner */}
      {/* <div className="w-full h-125 relative">
        <img
          src="/banner.png"
          alt="Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> */}
      {/* Content */}
      {/* <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-7xl ml-5 px-6 text-white"></div>
        </div>
      </div> */}
      <div className="w-full h-[400px] relative">
        <div className="items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <img
                src="/Logo.png"
                alt="Coffee"
                className=" w-full h-[400px] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/banner2.png"
                alt="Banner"
                className=" w-full h-[400px] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/testimoni.png"
                alt="Testi"
                className=" w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
