"use client";

import React from "react";
import { CoffeeShopRecommendations } from "../../../constants/CoffeeShopRecommendations";
import { Button } from "@heroui/react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = CoffeeShopRecommendations.slice(0, totalPages).map(
    (_, index) => index + 1,
  );

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 rounded ${
            number === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {number}
        </Button>
      ))}
    </div>
  );
}
