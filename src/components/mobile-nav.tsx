import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import Link from "next/link";

interface MobileNavProps {
  isVisible: boolean;
}

export default function MobileNav({ isVisible }: MobileNavProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className={`${
        isVisible ? "block" : "hidden"
      } w-[83%] sm:w-[70%] h-screen py-16 fixed top-0 right-0 bg-[#16181e] z-30 flex flex-col`}
    >
      <ul className="flex flex-col items-center gap-12">
        <li className="mb-8">
          <Image src="/assets/logo.png" alt="logo" width={130} height={130} />
        </li>

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

      <div className="mt-auto flex items-center justify-center gap-12">
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
    </motion.div>
  );
}
