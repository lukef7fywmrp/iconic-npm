import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import iconiclogo from "../public/iconicLogo.png";

function Header() {
  return (
    <header className="font-author w-full z-50 space-x-2 px-5 py-2 bg-black bg-opacity-20">
      <div className="flex lg:flex-row lg:justify-between w-full h-full items-center flex-col justify-center">
        {/* Logo */}
        <div className="relative lg:h-16 lg:w-48 h-16 w-44">
          <Image className="" src={iconiclogo} objectFit="contain" />
        </div>

        {/* Pricing & Sign in */}
        <div className="text-white flex text-lg sm:text-xl items-center sm:space-x-6 rounded-lg mt-5 mb-5 lg:mt-0 lg:mb-0 ">
          <Link href="/">
            <p className="headerLink">Pricing</p>
          </Link>
          <Link href="/">
            <p className="headerLink">Documentation</p>
          </Link>
          <Link href="/">
            <button className="headerLink">Sign in</button>
          </Link>
          <Link href="/">
            <button className="headerLink">Sign up</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
