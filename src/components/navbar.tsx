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
              className="hover:text-orange-400 capitalize duration-150"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {isMobileNavVisible && <MobileNav isVisible={isMobileNavVisible} />}

      <div className="hidden sm:flex items-center gap-8">
        <Link
          href="#"
          className="hover:text-orange-400 outline-none tracking-wide capitalize"
        >
          sign in
        </Link>
        <Link
          href="#"
          className="px-4 py-2.5 bg-orange-400/80 hover:bg-transparent border-2 border-transparent hover:border-orange-400 hover:text-orange-400 outline-none tracking-wide uppercase"
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
