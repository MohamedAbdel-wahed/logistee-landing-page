"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "@/components/mobile-nav";

export default function Navbar() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <nav className="w-full py-6 flex items-center justify-between font-medium text-white">
      <Link href="/">
        <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
      </Link>

      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="hover:text-yellow-500 capitalize duration-150"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {isMobileNavVisible && (
        <>
          <button
            className="w-full h-full fixed inset-0 bg-black/50 z-20"
            onClick={() => setMobileNavVisible(false)}
          ></button>

          <MobileNav isVisible={isMobileNavVisible} />
        </>
      )}

      <div className="hidden lg:flex items-center gap-8">
        <Link
          href="#"
          className="hover:text-yellow-500 outline-none tracking-wide capitalize"
        >
          sign in
        </Link>
        <Link
          href="#"
          className="px-4 py-2.5 text-sm font-bold bg-yellow-500 hover:bg-transparent border-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 outline-none tracking-wide uppercase"
        >
          sign up free
        </Link>
      </div>

      <button
        onClick={() => setMobileNavVisible(true)}
        className="inline-flex lg:hidden p-2 border border-transparent hover:border-white rounded-lg duration-150"
      >
        <Image src="/assets/menu.svg" alt="menu-icon" width={30} height={30} />
      </button>
    </nav>
  );
}
