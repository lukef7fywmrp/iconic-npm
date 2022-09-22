import React from "react";
import Image from "next/image";

interface Props {
  librarytopLogo: string;
  librarytopName: string;
  librarytopDescription: string;
  librarytopImage: string;
  librarytopAuthor: string;
}

function LibraryTop(props: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 rounded-xl bg-white/5 hover:bg-white/10 transition duration-500 py-5 px-10">
      <div className="flex flex-col items-center space-y-3 px-10 font-author group">
        <div className="gradientBorder rounded-3xl p-[2.5px]">
          <div className="flex h-24 w-24 first-letter:items-center rounded-3xl bg-white p-2 ">
            <Image
             src={props.librarytopLogo} height="100%" width="100%"/>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-center text-2xl text-white/90 duration-500 group-hover:scale-105  group-hover:text-white/100">
          {props.librarytopName}
        </h1>
      </div>
      {/* Description */}
      <div className="">
        <p className="h-16 w-56 text-center font-inter text-sm text-white/40">
          {props.librarytopDescription}
        </p>
      </div>
      {/* Author */}
      <div className="group flex space-x-2 py-2 font-inter text-xs">
        <div className="relative h-7 w-7">
          <Image
            className="rounded-full"
            src={props.librarytopImage}
            objectFit="contain"
            layout="fill"
          />
        </div>
        <button className="text-[#a6a6a6] duration-500 group-hover:text-white">
          {props.librarytopAuthor}
        </button>
      </div>
      {/* Button */}
      <div className="py-5">
        <div className="gradientBorder group p-[2px] text-lg">
          <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-md bg-[#171717] px-3 py-1 font-normal">
            <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gradient-to-tr from-orange-600  to-purple-600 from opacity-[0%]"></span>
            <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-orange-600  to-purple-600 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="relative flex w-full items-center text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white tracking-wide">
              Install Library
            </span>
            <span className="absolute inset-0 rounded-md "></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LibraryTop;
