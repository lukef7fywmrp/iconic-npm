import React from "react";
import Image from "next/image";

interface Props {
  libraryLogo: string;
  libraryName: string;
  libraryDescription: string;
}

function LibraryTop(props: Props) {
  return (
    <div className="bg-white bg-opacity-[.1] rounded-xl py-5 space-y-3 px-10">
      <div className="flex flex-col items-center px-10 space-y-3 font-author">
        <div className="p-[2.5px] bg-gradient-to-tr from-[#50afeb] to-[#cd0789] rounded-3xl overflow-hidden hover:scale-105 transition duration-300">
          <div className=" bg-white rounded-3xl h-24 w-24 flex items-center p-2 ">
            <img src={props.libraryLogo} height="100%" width="100%" />
          </div>
        </div>

        <h1 className="text-white text-center text-2xl ">
          {props.libraryName}
        </h1>
      </div>
      <div className="">
        <p className="text-[#ffffff66] text-sm text-center">
          {props.libraryDescription}
        </p>
      </div>
    </div>
  );
}

export default LibraryTop;
