"use client";

import React from "react";
import { menuItem } from "@heroui/theme";
import { Button } from "@heroui/react";
import NavLink from "../ui/NavLink/NavLink";
import Home from "../../Pages/Home/Home";

export default function Navbar() {
  // menu items for the navbar
  // const menuItems = ["Home", "Explore", "Guide", "About"];

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="p-1.5 flex flex-row items-center justify-between bg-green-900 text-white shadow-md">
          <div className="ml-5 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/Logo.png"
                alt="Logo"
                className="w-36 h-36 inline-block"
              />
            </a>
          </div>
          <nav className="mr-60 flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-center md:flex-row">
            {/* calling NavLink component */}
            {/* {menuItems.map((item) => (
              <NavLink key={item} label={item} href={<Home />} />
            ))} */}
            <NavLink label="Home" href="/" />
            <NavLink label="Explore" href="/explore" />
            <NavLink label="Guide" href="/guide" />
            <NavLink label="About" href="/about" />
          </nav>
        </div>
      </header>
    </>
  );
}
