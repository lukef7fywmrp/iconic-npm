import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import iconiclogo from "../public/iconiclogo.png";
function Header() {
  return (
    <header className=" space-x-4 py-2 font-author tracking-wide">
      <div
        className="relative flex justify-center 
        w-full h-14 my-2"
      >
        <Image
          className=""
          src={iconiclogo}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex">
        <Link href="/">
          <p className="text-2xl text-white px-4 cursor-pointer">Pricing</p>
        </Link>
        {/* Search */}
        <div className="flex bg-gray-100 rounded overflow-hidden flex-1 px-5 ">
          <div className="flex items-center justify-center pl-3">
            <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search packages"
            className="bg-transparent outline-none p-3 flex-1 text-xl placeholder-gray-400"
          />
          <button className="bg-gray-100 text-black text-xl px-4">
            Search
          </button>
        </div>
        <div className="text-white px-4">
          <button className="p-2 ">Sign in</button>
          <button className="p-2">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
