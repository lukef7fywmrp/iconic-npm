import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import Link from "next/link";
import { MdOutlineIosShare } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";

interface Props {
  library: Library;
}
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

function Library({
  library: { title, description, logo, slug, creator },
}: Props) {
  return (
    <Link href={slug.current}>
      <div className="w-full cursor-pointer rounded-2xl bg-white/5 px-10 py-5 transition duration-500 hover:bg-white/10">
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="group flex items-center space-x-2">
              <div className="gradientBorder rounded-full p-[2.5px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3">
                  {logo && (
                    <Image
                      src={urlFor(logo).url()!}
                      height="100%"
                      width="100%"
                      objectFit="contain"
                    />
                  )}
                </div>
              </div>
              {/* Title */}
              <h1 className="text-center text-xl text-white/90 transition duration-500 group-hover:scale-105 group-hover:text-white/100">
                {title}
              </h1>
            </div>
            {/* Button */}
            <div className="gradientBorder group hidden rounded-full p-[1.5px] text-lg sm:flex">
              <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-[#161616] px-3 py-1 font-normal">
                <span className="from absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 opacity-[0%]"></span>
                <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-fuchsia-700 to-amber-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="relative flex max-w-sm items-center text-left tracking-wide text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Install
                </span>
                <span className="absolute inset-0 rounded-md"></span>
              </button>
            </div>
            {/* Small Screen Button */}
            <button className="flex sm:hidden">
              <MdOutlineIosShare className="text-xl text-white/40 transition duration-500 hover:text-white/90" />
            </button>
          </div>
          {/* Description */}
          <p className="h-full max-h-20 font-inter text-sm text-white/40">
            {description}
          </p>
          {/* Author */}
          <div className="group flex space-x-2 py-2 font-inter text-xs">
            {creator.image && (
              <div className="relative h-7 w-7">
                <Image
                  className="rounded-full"
                  src={
                    creator.image ? urlFor(creator.image).url()! : "/logo.png"
                  }
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            )}
            <button className="text-white/50 duration-500 group-hover:text-white/90">
              {creator.name}
            </button>
          </div>
        </div>
        <div className="space-y flex items-center justify-between pt-5 text-white">
          <button className="flex items-center space-x-2 rounded-full text-xl text-white/50">
            <BiUpvote className="text-white" onClick={handleClick} />
            <p></p>
          </button>
          <div className="rounded-full p-1">
            <MdOutlineIosShare className="text-xl text-white/50" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Library;
