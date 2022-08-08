import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div className="flex justify-center font-author tracking-wide w-full h-full landingBg">
      <img
        className="absolute top-0 -z-10 blur h-screen w-full scale-105"
        src="https://cdn.dribbble.com/users/1770290/screenshots/6158205/bg_75.gif"
        alt=""
      />
      <div className="px-20">
        <p className="text-7xl text-center font-medium heading tracking-wide text-white">
          All the libraries you need, Made simple.
        </p>
      </div>
    </div>
  );
}

export default Landing;
