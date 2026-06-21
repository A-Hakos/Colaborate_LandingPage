"use client";
import React from "react";
import RecomendedCoffeShop from "../../components/CoffeeCardRecommended/RecomendedCoffeShop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PopularityCard from "../../components/CoffeeCardRecommended/PopularityCard";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Get Header component */}
        <Header />

        {/* Get Content Component */}
        <main className="flex-grow">
          <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold">Welcome to Our App</h1>
            <p>Content goes here...</p>
            <PopularityCard />
            <RecomendedCoffeShop />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
