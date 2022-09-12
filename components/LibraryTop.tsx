import React from "react";
import Image from "next/image";

interface Props {
  libraryLogo: string;
  libraryName: string;
  libraryDescription: string;
  libraryImage: string;
  libraryAuthor: string;
}

function LibraryTop(props: Props) {
  return (
    <div className="bg-white bg-opacity-[.1] rounded-xl py-5 space-y-3 px-10 flex justify-center items-center flex-col w-full">
      <div className="flex flex-col items-center px-10 space-y-3 font-author">
        <div className="p-[2.5px] bg-gradient-to-tr from-[#50afeb] to-[#cd0789] rounded-3xl overflow-hidden hover:scale-105 transition duration-300">
          <div className="bg-white rounded-3xl h-24 w-24 flex items-center p-2 ">
            <img src={props.libraryLogo} height="100%" width="100%" />
          </div>
        </div>
        {/* Title */}
        <h1 className="text-white text-center text-2xl ">
          {props.libraryName}
        </h1>
      </div>
      {/* Description */}
      <div className="">
        <p className="text-[#ffffff66] text-sm text-center w-56 h-16">
          {props.libraryDescription}
        </p>
      </div>
      {/* Author */}
      <div className="flex space-x-2 font-inter text-xs py-2">
        <div className="relative h-7 w-7">
          <Image
            className="rounded-full"
            src={props.libraryImage}
            objectFit="contain"
            layout="fill"
          />
        </div>
        <button className="text-[#a6a6a6]">{props.libraryAuthor}</button>
      </div>
      {/* Button */}
      <div className="py-5">
        <div className="bg-gradient-to-tr from-[#50afeb] to-[#cd0789] p-[2px] rounded-md group font-author text-lg">
          <button className="bg-[#1a1a1a] text-white px-2 group-hover:bg-white group-hover:text-black transition duration-200 rounded-md tracking-wide">
            Install Libraries
          </button>
        </div>
      </div>
    </div>
  );
}

export default LibraryTop;
