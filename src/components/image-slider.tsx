"use client";

import { sliderItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
  };

  if (currentIndex > sliderItems.length - 3) {
    setCurrentIndex(0);
  }

  return (
    <div className="mt-10 flex flex-col gap-6">
      <div className="self-end mx-20 flex items-center gap-6">
        <button
          disabled={currentIndex === 0}
          className="px-5 md:px-6 py-3 md:py-4 bg-zinc-300 hover:text-white hover:bg-yellow-500 outline-none rounded-lg duration-150 disabled:text-black/40 disabled:hover:bg-zinc-300"
          onClick={handlePrev}
        >
          <IoIosArrowBack className="text-xl sm:text-3xl" />
        </button>
        <button
          className="px-5 md:px-6 py-3 md:py-4 bg-zinc-300 hover:text-white hover:bg-yellow-500 outline-none rounded-lg duration-150"
          onClick={handleNext}
        >
          <IoIosArrowForward className="text-xl sm:text-3xl" />
        </button>
      </div>

      <Link href="#" className="mt-2">
        <div className="w-full">
          <div className="relative">
            <div className="flex space-x-4 overflow-hidden">
              {sliderItems
                .slice(currentIndex, currentIndex + 3)
                .map((item, index) => (
                  <div
                    key={index}
                    className="relative flex-none w-11/12 sm:w-1/2 md:w-5/12 xl:w-1/3 bg-white rounded-lg shadow-md"
                  >
                    <div className="relative w-full h-[30rem] sm:h-[40rem]  rounded-sm overflow-hidden">
                      <Image
                        fill
                        className="object-cover mb-4"
                        src={item.image}
                        alt="Card"
                      />
                    </div>

                    <div className="group flex flex-col justify-end gap-5 p-8 absolute inset-0 bg-black/20 z-20">
                      <h2 className="text-white sm:text-2xl text-3xl font-bold capitalize">
                        {item.title}
                      </h2>
                      <span className="underline hidden group-hover:inline-flex text-yellow-500 font-bold text-lg uppercase">
                        discover all
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
