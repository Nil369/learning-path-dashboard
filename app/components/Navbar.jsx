import React from "react";
import MobileSidebar from "./MobileSidebar";
import NavbarRoutes from "./NavbarRoutes";
import { ModeToggle } from "./modeToggle";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm">
        <MobileSidebar/> 
        <NavbarRoutes/> 
        <ModeToggle/>
    </div>
  );
};

export default Navbar;
