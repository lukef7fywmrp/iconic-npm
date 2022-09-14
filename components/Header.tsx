import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";

function Header() {
  const router = useRouter();

  return (
    <header className="flex">
      <div className="z-10 flex h-full w-full justify-between px-10 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex cursor-pointer items-center space-x-1 transition-transform duration-300 ease-out hover:scale-105">
            <div className="relative h-12 w-12 ">
              <Image src="/logo2.png" objectFit="contain" layout="fill" />
            </div>

            <p className="font-author text-xl tracking-wider text-white">
              Iconic
            </p>
          </div>
        </Link>
        {/* Pricing & Sign in */}
        <div className="flex items-center space-x-6 text-sm text-white/80">
          <Link href="/">
            <p className="headerLink">Pricing</p>
          </Link>
          <Link href="/">
            <p className="headerLink">Documentation</p>
          </Link>
          <Button
            text="Log in"
            onClick={() => router.push("/login")}
            buttonColor="bg-[#1b0026]"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
