import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex">
      <img className="absolute w-full h-[180vh]" src="/gradientbg.png" alt="" />
      <div className="flex w-full h-full justify-between px-10 py-3 z-0">
        {/* Logo */}
        <div className="flex items-center space-x-1 transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="relative w-12 h-12 ">
            <Image src="/logo6.png" objectFit="contain" layout="fill" />
          </div>

          <p className="text-white text-xl tracking-wider font-author">
            Iconic
          </p>
        </div>
        {/* Pricing & Sign in */}
        <div className="flex items-center text-sm space-x-6 text-white/80">
          <Link href="/">
            <p className="headerLink">Pricing</p>
          </Link>
          <Link href="/">
            <p className="headerLink">Documentation</p>
          </Link>
          <Link href="/">
            <div className="bg-gradient-to-tr from-[#50afeb] to-[#cd0789] p-[1px] rounded-md headerLink">
              <button className="bg-[#1b0026] px-4 py-1 rounded-md">
                Sign up
              </button>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
