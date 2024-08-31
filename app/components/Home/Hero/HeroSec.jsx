import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

const HeroSec = () => {
  return (
    <section className="body-font">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-4 py-24 items-center">
        {/* Text and Buttons Section */}
        <div className="flex flex-col md:w-1/2 md:items-start md:text-left text-center mb-16 md:mb-0">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight">
            First Education Theme
            <br className="hidden lg:inline-block" />
            <span className="text-blue-700 ml-3 md:ml-0">For Marketplace</span>
          </h1>

          <p className="mb-8 text-base md:text-lg leading-relaxed">
            This will be the best place for anyone to sell courses online, with all the necessary eCommerce features. This is EduNexus - A Learning Path Dashboard.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Link href="/dashboard">
              <Button variant="blue" className="w-full md:w-auto px-20 py-6 text-md">
                Get Started
              <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
              <lord-icon
                  src="https://cdn.lordicon.com/iagdobvi.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  class="h-7 ml-2"
                  >
              </lord-icon>

              </Button>
            </Link>

            <Link href="/courses">
              <Button variant="outline" className="w-full md:w-auto px-20 py-6 text-md">
                View Courses
              <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
              <lord-icon
                  src="https://cdn.lordicon.com/vfczflna.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#919294,secondary:#30c9e8"
                  class="h-7 ml-2"
                  >
              </lord-icon>

              </Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:w-1/2 w-full">
          <Image
            height={500}
            width={500}
            src="/heroImg.jpg"
            alt="hero Img"
            className="h-auto max-w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
