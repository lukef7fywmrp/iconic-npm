import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="font-inter sticky top-0 w-full z-50 space-x-2 px-5 py-5 max-w-5xl mx-auto">
      <div className="flex lg:flex-row lg:justify-between w-full h-full items-center flex-col justify-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="relative h-8 w-8">
            <Image
              className=""
              src="/iconiclogo.png"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p className="text-white font-medium text-xl tracking-wide bg-gradient-to-bl from-purple-400 to-green-300 text-transparent bg-clip-text font-inter">
            Iconic
          </p>
        </div>
        {/* Pricing & Sign in */}
        <div className="text-white flex text-sm items-center sm:space-x-6 rounded-lg mt-5 mb-5 lg:mt-0 lg:mb-0 ">
          <Link href="/">
            <p className="headerLink">Pricing</p>
          </Link>
          <Link href="/">
            <p className="headerLink">Documentation</p>
          </Link>
          <Link href="/">
            <button className="headerLink">Log in</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
