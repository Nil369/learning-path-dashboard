"use client";
import React from "react";
import { Compass, LayoutDashboard } from "lucide-react";
import { SidebarItem } from "./SideBarItems";

export const guestRoutes = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: Compass,
        label:"Browse",
        href: "/dashboard/search",
    }
];

const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.label}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

export default SidebarRoutes;
