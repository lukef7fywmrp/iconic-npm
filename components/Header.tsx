import Image from "next/image";
import Link from "next/link";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex">
      <div className="z-10 flex h-full w-full justify-between px-10 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex cursor-pointer items-center space-x-2 transition-transform duration-300  ease-out hover:scale-105">
            <div className="relative h-8 w-8">
              <Image
                className="rounded-full"
                src="/logo5.png"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p className="to bg-gradient-to-tr bg-clip-text font-teko text-2xl font-light  text-white/80">
              Iconic
            </p>
          </div>
        </Link>
        {/* Header links and menu */}
        <div className="flex items-center">
          <div className="hidden space-x-6 text-sm text-white/80 sm:flex">
            <Link href="/">
              <p className="headerLink">Pricing</p>
            </Link>
            <Link href="/">
              <p className="headerLink">Documentation</p>
            </Link>
            <Link href="/login">
              <button className="headerLink">Log in</button>
            </Link>
          </div>
          {isOpen ? (
            <VscChromeClose
              className="absolute right-10 z-10 cursor-pointer text-2xl text-white/80 sm:hidden"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <VscMenu
              className="cursor-pointer text-2xl text-white/80 sm:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}

          {isOpen && (
            <div className="justify-cent absolute top-0 left-0 bottom-0 flex w-full flex-col items-start bg-black text-sm text-white/80 sm:hidden">
              <Link href="/">
                <p className="headermenuLink">Pricing</p>
              </Link>
              <Link href="/">
                <p className="headermenuLink">Documentation</p>
              </Link>
              <Link href="/login">
                <p className="headermenuLink">Log in</p>
              </Link>
            </div>
          )}
        </div>
        {/* <div className="flex items-center text-white/80 transition duration-200 hover:scale-105 hover:text-white/100 sm:hidden">
          <AiOutlineMenu className="text-2xl" />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
