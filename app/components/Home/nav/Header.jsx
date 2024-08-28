import Link from "next/link";
import React from "react";
import Logo from "../../Logo";
import { Search } from "./searchBar";

const Header = () => {
  return (
    <header>
      <div className="mx-3 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex md:flex md:items-center md:gap-12">
            <Link href="/">
              <Logo />
            </Link>
            <Search/>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-end gap-6 ml-7 text-md">
                <li>
                  <Link className="hover:border-b-4 border-cyan-500 hover:text-lg hover:font-bold"  href="/"> About </Link>
                </li>

                <li>
                  <Link className="hover:border-b-4 border-cyan-500 hover:text-lg hover:font-bold" href="/"> Careers </Link>
                </li>

                <li>
                  <Link className="hover:border-b-4 border-cyan-500 hover:text-lg hover:font-bold" href="/"> History </Link>
                </li>

                <li>
                  <Link className="hover:border-b-4 border-cyan-500 hover:text-lg hover:font-bold" href="/"> Services </Link>
                </li>

                <li>
                  <Link className="hover:border-b-4 border-cyan-500 hover:text-lg hover:font-bold" href="/"> Projects </Link>
                </li>

                <li>
                  <Link className="hover:border-b-4 border-cyan-500 hover:text-lg hover:font-bold" href="/"> Blog </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-cyan-600 px-5 py-2.5 text-md font-bold text-white shadow"
                  href="/dashboard"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-md font-bold text-cyan-500"
                    href="/dashboard"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
