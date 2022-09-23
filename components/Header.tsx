import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/Ai";

function Header() {
  return (
    <header className="flex">
      <div className="z-10 flex h-full w-full justify-between px-10 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex cursor-pointer items-center transition-transform duration-300 ease-out  hover:scale-105">
            <div className="relative h-12 w-12 ">
              <Image src="/logo8.png" objectFit="contain" layout="fill" />
            </div>
            <p className="font-author text-xl tracking-wider text-white/90">
              Iconic
            </p>
          </div>
        </Link>
        {/* Pricing & Sign in */}
        <div className="hidden items-center space-x-6 text-sm text-white/80 sm:flex">
          <Link href="/">
            <p className="headerLink border-2 border-transparent px-3 py-1">
              Pricing
            </p>
          </Link>
          <Link href="/">
            <p className="headerLink border-2 border-transparent px-3 py-1">
              Documentation
            </p>
          </Link>
          <Link href="/login">
            <button className="hover:gradient headerLink border-2 border-transparent px-3 py-1 transition">
              Log in
            </button>
          </Link>
        </div>
        <div className="flex items-center text-white/80 transition duration-200 hover:scale-105 hover:text-white/100 sm:hidden">
          <AiOutlineMenu className="text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
