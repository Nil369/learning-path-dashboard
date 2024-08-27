"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacher = pathname?.startsWith("/dashboard/teacher");
  const isPlayer = pathname?.includes("/dashboard/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacher || isPlayer ? (
        <Link href="/dashboard">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/dashboard/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
