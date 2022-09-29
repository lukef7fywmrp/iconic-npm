import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  librarytopLogo: string;
  librarytopName: string;
  librarytopDescription: string;
  librarytopImage: string;
  librarytopAuthor: string;
  librarytopLink: string;
}

function LibraryTop(props: Props) {
  return (
    <Link href={props.librarytopLink}>
      <div className="flex w-full flex-col items-center justify-center space-y-3 rounded-2xl bg-white/5 py-5 px-10 transition duration-500 hover:bg-white/10">
        <div className="group flex flex-col items-center space-y-3 px-10 font-author">
          <div className="relative ">
            <div className="before:gradient flex h-24 w-24 items-center rounded-full bg-white p-3  before:rounded-full before:border-[2.5px]">
              <Image src={props.librarytopLogo} height="100%" width="100%" />
            </div>
          </div>
          {/* Title */}
          <h1 className="text-center text-2xl text-white/90 duration-500 group-hover:scale-105  group-hover:text-white/100">
            {props.librarytopName}
          </h1>
        </div>
        {/* Description */}
        <p className="h-16 w-56 text-center font-inter text-sm text-white/40">
          {props.librarytopDescription}
        </p>
        {/* Author */}
        <div className="group flex space-x-2 py-2 pb-5 font-inter text-xs">
          <div className="relative h-7 w-7">
            <Image
              className="rounded-full"
              src={props.librarytopImage}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <button className="text-white/60 duration-500 group-hover:text-white/90">
            {props.librarytopAuthor}
          </button>
        </div>
        {/* Button */}
        <div className="relative">
          <div className="before:gradient group p-0.5 font-author text-lg before:rounded-full">
            <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-1 font-normal">
              <span className="h-34 absolute left-0 top-0 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gradient-to-tr from-purple-500 to-orange-500 opacity-[0%]"></span>
              <span className="absolute top-0 left-0 -mt-1 h-44 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-purple-500 to-orange-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
              <span className="relative flex w-full items-center text-left text-white transition-colors duration-200 ease-in-out ">
                Explore More
              </span>
              <span className="absolute inset-0 rounded-md "></span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LibraryTop;
