"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Impor CSS Dasar Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ items = [] }) {
  return (
    <div className="w-full relative overflow-hidden group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        speed={1000}
        loop={items.length > 1}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <div className="w-full aspect-video md:h-[500px] lg:h-[70vh] relative">
              <img
                src={item.src}
                alt={item.alt || `Slide ${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
