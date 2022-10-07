import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import Link from "next/link";
import { MdOutlineIosShare } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";
import { RiArrowUpSFill } from "react-icons/ri";

interface Props {
  library: Library;
}

function Library({
  library: { title, description, logo, slug, creator },
}: Props) {
  return (
    <Link href={slug.current}>
      <div className=" w-full cursor-pointer rounded-2xl border border-white/5 bg-white/5 px-10 py-5 transition duration-500 hover:bg-white/10">
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="group flex items-center space-x-2">
              <div className="gradientBorder rounded-2xl p-[2.5px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3">
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
            <div className="group hidden rounded-lg border border-white/20 text-lg sm:flex">
              <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-lg  px-3 py-1">
                <span className="from absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 opacity-[0%]"></span>
                <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-fuchsia-700 to-amber-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="relative flex max-w-sm items-center text-left font-author text-white transition-colors duration-200 ease-in-out group-hover:text-white">
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
          <div className="flex items-center justify-between py-2 font-inter text-xs">
            <div className="group flex items-center space-x-2">
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
            <button className="flex items-center rounded-md border border-white/20 ">
              <div className="rounded-l-[7px] px-1 text-2xl text-white/50 transition duration-300 hover:bg-white/10 hover:text-white/90">
                <RiArrowUpSFill />
              </div>
              <p className="border-l border-white/20 py-1 px-2 text-white/90">
                150
              </p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Library;
