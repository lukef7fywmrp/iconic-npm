import React from "react";
import Image from "next/image";


interface Props {
  libraryLogo: string;
  libraryName: string;
  libraryDescription: string;
  libraryImage: string;
  libraryAuthor: string;
}

function Library(props: Props) {
  return (
        <div className="flex w-full flex-col justify-center space-y-3 rounded-xl bg-white/5 hover:bg-white/10 transition duration-500 py-5 px-10">
      <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center space-x-2 group">
        <div className="gradientBorder rounded-2xl p-[2.5px]">
          <div className="flex h-16 w-16 items-center rounded-2xl bg-white p-2">
            <Image src={props.libraryLogo} height="100%" width="100%" />
          </div>
        </div>
          {/* Title */}
        <h1 className="text-center text-xl text-white/90 group-hover:text-white/100 transition duration-500 group-hover:scale-105">
          {props.libraryName}
        </h1>
      </div>
         {/* Button */}
        <div className="gradientBorder group p-[2px] text-lg">
          <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-md bg-[#171717] px-3 py-1 font-normal">
            <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gradient-to-tr from-orange-600 to-purple-600 from opacity-[0%]"></span>
            <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-orange-600  to-purple-600 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="relative flex max-w-sm items-center text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white tracking-wide">
              Install
            </span>
            <span className="absolute inset-0 rounded-md "></span>
          </button>
        </div>
      </div>
      {/* Description */}
      <div className="font-inter">
        <p className="text-white/50 text-sm">
          {props.libraryDescription}
        </p>
      </div>
      {/* Author */}
      <div className="group flex space-x-2 py-2 font-inter text-xs">
        <div className="relative h-7 w-7">
          <Image
            className="rounded-full"
            src={props.libraryImage}
            objectFit="contain"
            layout="fill"
          />
        </div>
        <button className="text-[#a6a6a6] duration-500 group-hover:text-white">
          {props.libraryAuthor}
        </button>
      </div>
    </div>
  );
}

export default Library;
