import React from "react";
import Image from "next/image";

interface Props {
  libraryLogo: string;
  libraryName: string;
  libraryDescription: string;
}

function LibraryTop(props: Props) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-[.1] rounded-xl py-10 mx-8 px-10">
      <div className="">
        <div className="bg-gray-700 rounded-2xl p-5">
          <img className="w-15" src={props.libraryLogo} />
        </div>
        <div className="w-44">
          <h1 className="text-white text-center text-3xl">
            {props.libraryName}
          </h1>
          <p className="text-gray-600 ">{props.libraryDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default LibraryTop;
