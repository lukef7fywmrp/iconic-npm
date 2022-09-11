import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="font-inter sticky flex">
      <div className="flex w-full h-full justify-between px-10 py-5">
        {/* Logo */}
        <div className="flex items-center space-x-1 transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="relative w-8 h-8 ">
            <Image src="/iconiclogo.png" objectFit="contain" layout="fill" />
          </div>

          <p className="text-white text-3xl tracking-wide font-author bg-gradient-to-r from-[#50afeb] to-[#cd0789] text-transparent bg-clip-text">
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
              <button className=" bg-[#010410] px-4 py-1 rounded-md">
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
