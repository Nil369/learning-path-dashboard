"use client";
import React from "react";
import MobileSidebar from "../sidebar/MobileSidebar";
import NavbarRoutes from "../navbar/NavbarRoutes";
import { ModeToggle } from "../modeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  // Access the theme from the useTheme hook
  const { theme } = useTheme();

  // Determine if dark mode is enabled
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`p-4 h-full flex items-center sticky top-0 ${
        isDarkMode ? 'bg-[#020817]' : 'bg-white'
      } shadow-md z-50`}
    >
      <MobileSidebar />
      <NavbarRoutes />
      <div className="ml-5">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
