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
          <nav class="md:ml-auto md:mr-auto flex flex-wrap gap-x-3 items-center text-sm justify-center ">
            <Link
              className="flex flex-wrap  hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/"
            >

              {/* <Home className="h-4"/> */}

              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/laqlvddb.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#919294,secondary:#30c9e8"
                  class="h-4"
                  >
              </lord-icon>


              Home
            </Link>
            <Link
              className="flex flex-wrap hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/courses"
            >
              {/* <LibraryBig className="h-4" /> */}
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/lenjvibx.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#919294,secondary:#30c9e8"
                  class="h-4"
                  >
              </lord-icon>
              Courses
            </Link>

            <Link
              className="flex flex-wrap hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/pricing"
            >
              {/* <CreditCard className="h-4"/> */}
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/wyqtxzeh.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#919294,secondary:#30c9e8"
                  class="h-4"
                  >
              </lord-icon>
              Pricing
            </Link>
            <Link
              className="flex flex-wrap hover:border-b-4 border-cyan-500 hover:text-md hover:font-bold"
              href="/"
            >
              {/* <GraduationCap className="h-4"/> */}
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/gkgkfbzm.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#919294,secondary:#30c9e8"
                  class="h-4"
                  >
              </lord-icon>
              Become Instructor
            </Link>

            <div>

            <Link href="/sign-up">
                <Button size="sm" variant="ghost" className="mr-2">
                <DoorOpen className="h-4"/>
                  Register
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button size="sm" variant="blue">
                {/* <Image width={20} height={20} src="/user.gif" className=""/> */}
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/bgebyztw.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  class="h-4"
                  >
              </lord-icon>
                  Login
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
