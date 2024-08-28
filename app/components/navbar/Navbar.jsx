"use client";
import React from "react";
import MobileSidebar from "../sidebar/MobileSidebar";
import NavbarRoutes from "../navbar/NavbarRoutes";
import { ModeToggle } from "../modeToggle";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm">

      <MobileSidebar />
      <NavbarRoutes />
      <div className="ml-5">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
