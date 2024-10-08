import React from "react";
import Logo from "../Logo";
import SidebarRoutes from "./SidebarRoutes";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
        <div className="p-5">
          <Link href="/">
            <Logo/>
          </Link>

        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes/>
        </div>
    </div>
  )
};

export default Sidebar;
