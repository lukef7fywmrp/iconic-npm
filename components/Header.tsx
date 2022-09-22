import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import { AiOutlineMenu } from 'react-icons/Ai';

function Header() {
  const router = useRouter();

  return (
    <header className="flex">
      <div className="z-10 flex h-full w-full justify-between px-10 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex cursor-pointer items-center space-x-1 transition-transform duration-300 ease-out  hover:scale-105">
            <div className="relative h-12 w-12 ">
              <Image src="/logo8.png" objectFit="contain" layout="fill" />
            </div>
            <p className="font-author text-xl tracking-wider bg-gradient-to-tr bg-clip-text from-yellow-400 via-orange-500 to-purple-600 text-transparent">
              Iconic
            </p>
          </div>
        </Link>
        {/* Pricing & Sign in */}
        <div className="items-center space-x-6 text-sm text-white/80 hidden sm:flex">
          <Link href="/">
            <p className="headerLink">Pricing</p>
          </Link>
          <Link href="/">
            <p className="headerLink">Documentation</p>
          </Link>
          <Button
            text="Log in"
            onClick={() => router.push("/login")}
            buttonColor=""
          />
        </div>
        <div className="flex items-center sm:hidden text-white/90">
          <AiOutlineMenu className="text-2xl"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
