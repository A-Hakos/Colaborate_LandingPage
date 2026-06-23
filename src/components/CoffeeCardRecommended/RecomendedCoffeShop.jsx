"use client";

import React, { useState, useEffect } from "react";
import CardGeneral from "../ui/Card/CardGeneral";
import { Link } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { CoffeeShopRecommendations } from "../../constants/CoffeeShopRecommendations";
// import Pagination from "../ui/Pagination/Pagination";
// import { Route, Routes } from "react-router-dom";

export default function RecomendedCoffeShop() {
  const navigate = useNavigate();

  // dibawah ini adalah untuk membuat random data dari CoffeeshopRecommendations.js dan menampilkan 4 data random
  // jadi ketika refresh halaman, data yang ditampilkan akan berbeda-beda dari banyaknya data yang ada di CoffeeShopRecommendations.js
  const [featuredCoffeeshop, setFeaturedCoffeeshop] = useState([]);

  useEffect(() => {
    const shuffledData = [...CoffeeShopRecommendations];

    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    const SelectedData = shuffledData.slice(0, 4);

    setFeaturedCoffeeshop(SelectedData);
  }, []);

  return (
    <>
      <div>
        <img
          src="/RecomendCoffeeShopLogo.png"
          alt="Coffe Shop"
          className="w-8 h-8 inline-block "
        />
        <div className="text-2xl font-bold text-gray-800 inline-block ml-4">
          Recommended Coffee Shop
        </div>
        <div className="flex justify-end text-sm text-gray-500 inline-block ml-2 cursor-pointer">
          <Link
            showAnchorIcon
            className="font-semibold"
            onPress={() => navigate("/explore")}
          >
            Explore More
            <Link.Icon name="arrow-right" className="ml-1" />
          </Link>
        </div>
        {/* Comment sementara */}
        {/* <Pagination
          currentPage={1}
          totalPages={Math.ceil(CoffeeShopRecommendations.length / 4)}
          onPageChange={() => {}}
        /> */}
        <div className="mt-6 flex flex-wrap -mx-4">
          {featuredCoffeeshop.map((shop) => (
            <CardGeneral
              key={shop.id}
              title={shop.title}
              desc={shop.desc}
              content={shop.content}
              location={shop.location.nama}
              rating={shop.rating}
              linkDetail={shop.linkDetail}
              imageUrl={shop.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
