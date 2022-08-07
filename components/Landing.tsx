import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div className=" flex justify-center font-author tracking-wide w-full  h-full">
      <img
        className="w-full absolute top-0 -z-10 h-screen blur scale-105"
        src="https://cdn.dribbble.com/users/1770290/screenshots/6158205/bg_75.gif"
        alt=""
      />
      <div className="absolute">
        <h1 className="text-white  text-7xl text-center">ICONICNPM</h1>
        <p className="text-7xl text-center text-white">
          all the libraries you need,Made simple.
        </p>
      </div>
    </div>
  );
}

export default Landing;
