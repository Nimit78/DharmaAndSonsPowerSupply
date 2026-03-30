"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {

  // images
  const desktopImages = ["/banner1.png", "/banner2.png"];

  const [current, setCurrent] = useState(0);

  // auto slider
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % desktopImages.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="w-full relative z-0">

      {/* ================= DESKTOP ================= */}
      <section
        className="hidden md:block relative overflow-hidden h-[80vh] m-4 rounded-2xl z-0"
      >

        {/* background slider */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">

          <div className="relative w-full h-full">

            {desktopImages.map((img, index) => (

              <Image
                key={index}
                src={img}
                alt="Hero Desktop"
                fill
                priority={index === 0}
                className={`object-cover absolute transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />

            ))}

            {/* gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          </div>

        </div>


        {/* content */}
        <div className="container mx-auto px-8 relative z-10 h-full">

          <div className="flex items-center h-full">

            <div className="w-2/5 space-y-6">

              <h1 className="text-5xl font-semibold italic text-white drop-shadow-lg">
                Dharma And Sons Power Supply
              </h1>

              <Link href="test">
                <ButtonContent />
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* ================= MOBILE ================= */}
      <section
        className="block md:hidden relative pt-24 pb-8 h-[75vh] m-2 rounded-xl mt-10 overflow-hidden z-0"
      >

        {/* background slider */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">

          <div className="relative w-full h-full">

            {desktopImages.map((img, index) => (

              <Image
                key={index}
                src={img}
                alt="Hero Mobile"
                fill
                priority={index === 0}
                className={`object-cover absolute transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />

            ))}

            {/* gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

          </div>

        </div>


        {/* content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-end">

          <div className="w-full p-5 space-y-3">

            <h1 className="text-2xl font-semibold italic text-white drop-shadow-lg">
              Powerol is India's No.1 Genset Manufacturer
            </h1>

            <Link href="/test">
              <ButtonContent />
            </Link>

          </div>

        </div>

      </section>

    </div>

  );
};



// button
const ButtonContent = () => (

  <div className="inline-block">

    <div className="group inline-flex items-center gap-3 hover:bg-white hover:text-black rounded-full font-semibold px-6 py-3 pl-5 transition duration-300 bg-[#f37021] text-white cursor-pointer">

      <span className="w-[25px] h-[25px] relative bg-white text-black rounded-full grid place-items-center overflow-hidden group-hover:bg-black group-hover:text-white">

        <svg
          viewBox="0 0 14 15"
          className="w-[10px] h-[10px] transition group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        <svg
          viewBox="0 0 14 15"
          className="w-[10px] h-[10px] absolute -translate-x-[150%] translate-y-[150%] transition delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

      </span>

      Explore Our Products

    </div>

  </div>

);

export default HeroSection;