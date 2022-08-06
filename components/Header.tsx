import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="p-4 flex items-center space-x-4">
      <div className="relative h-20 w-20">
        <Image src="https://rb.gy/hdj4dz" layout="fill" objectFit="contain" />
      </div>
      <Link href="/">
        <p className="text-2xl cursor-pointer">Pricing</p>
      </Link>
      {/* Search */}
      <div className="flex bg-gray-100 rounded overflow-hidden flex-1">
        <div className="flex items-center justify-center pl-3">
          <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search packages"
          className="bg-transparent outline-none p-3 flex-1 text-xl placeholder-gray-400"
        />
        <button className="bg-black text-white text-xl px-4">Search</button>
      </div>
      <div>
        <button className="p-2 ">Sign in</button>
        <button className="p-2">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
