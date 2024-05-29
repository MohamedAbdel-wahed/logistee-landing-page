import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-12 md:gap-6">
        <div className="w-full md:w-1/4 flex flex-col gap-6 max-md:items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="app-logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="max-md:text-center self-start mx-auto flex flex-col gap-3">
          <h2 className="text-base sm:text-lg font-medium capitalize">
            address
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="text-sm lg:text-base text-white/50 capitalize">
              Intersection 10 Hudson
              <br /> Yards,
              <br /> 26th Floor, New York, NY <br />
              10001
            </li>
          </ul>
        </div>

        <div className="max-md:text-center self-start mx-auto flex flex-col gap-3">
          <h2 className="text-base sm:text-lg font-medium capitalize">
            reach us
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="text-sm lg:text-base text-white/50 capitalize">
              09 555 5420
            </li>
            <li className="text-sm lg:text-base text-white/50 capitalize">
              info@logistee.com
            </li>
          </ul>
        </div>

        <div className="max-md:text-center self-start mx-auto flex flex-col gap-3">
          <h2 className="text-base sm:text-lg font-medium capitalize">
            quick links
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="#"
                className="text-sm lg:text-base text-white/50 hover:text-white/80 capitalize"
              >
                FAQs
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="text-sm lg:text-base text-white/50 hover:text-white/80 capitalize"
              >
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-2 border-white/30" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-sm:text-center gap-6">
        <span className="text-white/80">&copy; Logistee 2022</span>
        <div className="self-center sm:self-start flex items-center gap-5">
          {["facebook", "instagram", "twiiter", "linkedin"].map(
            (item, index) => (
              <Link
                href="#"
                key={index}
                className="w-fit p-1.5 bg-yellow-300 hover:bg-[#EBD96B]/80 rounded-lg"
              >
                <div className="relative w-6 h-6">
                  <Image
                    fill
                    src={`/assets/${item}.svg`}
                    alt={`${item}-icon`}
                    className=" object-contain"
                  />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
