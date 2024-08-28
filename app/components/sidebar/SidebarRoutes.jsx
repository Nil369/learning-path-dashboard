"use client";
import React from "react";
import { Compass, LayoutDashboard,LayoutList,ChartSpline } from "lucide-react";
import { SidebarItem } from "./SideBarItems";
import { usePathname } from "next/navigation";

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

export const teacherRoutes = [
    {
        icon: LayoutList,
        label: "Courses",
        href: "/dashboard/teacher/courses",
    },
    {
        icon: ChartSpline,
        label:"Analytics",
        href: "/dashboard/teacher/analytics",
    }
];

const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacher = pathname?.includes("/dashboard/teacher")
    const routes = isTeacher? teacherRoutes :guestRoutes;

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
