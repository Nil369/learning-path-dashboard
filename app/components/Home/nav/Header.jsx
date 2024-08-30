import Link from "next/link";
import React from "react";
import Logo from "../../Logo";
import { Search } from "./searchBar";
import Image from "next/image";
import { CreditCard, DoorOpen, GraduationCap, Home, LibraryBig } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeaderNav = () => {
  return (
    <>
      <header class=" body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Logo />
          </Link>
          <div className="ml-7 mr-2 mb-4 ">
            <Search />
          </div>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap gap-x-3 items-center text-xs justify-center ">
            <Link
              className="flex flex-wrap gap-x-2 hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/"
            >

              <Home className="h-4"/>

              Home
            </Link>
            <Link
              className="flex flex-wrap gap-x-2 hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/courses"
            >
              <LibraryBig className="h-4" />
              Courses
            </Link>

            <Link
              className="flex flex-wrap gap-x-2 hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/pricing"
            >
              <CreditCard className="h-4"/>
              Pricing
            </Link>
            <Link
              className="flex flex-wrap gap-x-2 hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/"
            >
              <GraduationCap className="h-4"/>
              Become Instructor
            </Link>

            <div>
              <Link href="/dashboard">
                <Button size="sm" variant="cyan">
                <Image width={20} height={20} src="/user.gif" className=""/>
                  Login
                </Button>

              </Link>
              <Link href="/sign-up">
                <Button size="sm" variant="ghost">
                <DoorOpen className="h-4"/>
                  Register
                </Button>
              </Link>
            </div>

          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
