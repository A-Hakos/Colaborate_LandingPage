"use Client";

import React from "react";
import CardGeneral from "../ui/Card/CardGeneral";
import { CoffeeShopRecommendations } from "../../constants/CoffeeShopRecommendations";
import Pagination from "../ui/Pagination/Pagination";

export default function RecomendedCoffeShop() {
  const featuredCoffeeshop = CoffeeShopRecommendations.slice(0, 4);

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
        <Pagination
          currentPage={1}
          totalPages={Math.ceil(CoffeeShopRecommendations.length / 4)}
          onPageChange={() => {}}
        />
        <div className="mt-6 flex flex-wrap -mx-4">
          {featuredCoffeeshop.map((shop) => (
            <CardGeneral
              key={shop.id}
              title={shop.title}
              desc={shop.desc}
              content={shop.content}
              location={shop.location}
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
