import React from "react";
import Image from "next/image";

interface Props {
  libraryLogo: string;
  libraryName: string;
  libraryDescription: string;
}

function LibraryTop(props: Props) {
  return (
    <div className=" text-white px-10 ">
      <div className="flex flex-col justify-center items-center bg-[#1e1e1e] rounded-xl py-5 space-y-2 w-full px-20">
        <div className="relative w-3/5 h-2/5">
          <Image src={props.libraryLogo} objectFit="contain" layout="fill" />
        </div>
        <h1 className="text-white">{props.libraryName}</h1>
        <p className="text-gray-600">{props.libraryDescription}</p>
      </div>
    </div>
  );
}

export default LibraryTop;
