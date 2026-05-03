"use client";

import React from "react";
import NavLink from "./Navbar/NavLink";
import { menuItem } from "@heroui/theme";
import { Button } from "@heroui/react";

export default function Header() {
  // menu items for the navbar
  const menuItems = ["Home", "Explore", "Guide", "About"];

  return (
    <>
      <div className="p-4 flex flex-row items-center justify-between bg-green-900 text-white">
        <div className="ml-5">Logo Here</div>
        {/* <div> */}
        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-center md:flex-row">
          {/* calling NavLink component */}
          {menuItems.map((item) => (
            <NavLink key={item} label={item} />
          ))}
        </nav>
      </div>
    </>
  );
}
