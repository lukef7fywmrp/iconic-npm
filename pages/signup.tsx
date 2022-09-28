import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

function Signup() {
  return (
    <div className="flex min-h-screen flex-col bg-[#040009] font-author">
      <Head>
        <title>iconicnpm.com</title>
        <meta name="description" content="Generated by create next app" />
        /wikipedia/commons/a/a7/React-icon.svg
      </Head>
      <Header />
      {/* Gradient Background */}
      <img className="absolute top-0 w-full" src="/gradientbg01.png" alt="" />
      <div className="bg-gradient-to-r from-black via-[#0a0a0a] p-[1px]"></div>
      <main className="z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center space-y-5  ">
        {/* Title */}
        <h1 className="text-4xl text-white">Create your account</h1>
        {/* Buttons */}
        <div className="flex w-full max-w-md space-x-4 px-5 text-white/50 sm:px-0 ">
          <div className="flex w-full justify-center rounded-md bg-white/5 p-3 transition duration-500 hover:bg-white/10">
            <FaGithub className="" />
          </div>
          <div className="flex w-full justify-center rounded-md bg-white/5 p-3 transition duration-500 hover:bg-white/10">
            <FcGoogle className="" />
          </div>
        </div>
        {/* or */}
        <small className="text-lg text-white/40">or</small>
        {/* Email */}
        <div className="max-w w-full max-w-md space-y-5 px-5 sm:px-0 ">
          <div className="">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border-transparent bg-white/5 py-3 px-5 text-white/80 placeholder-white/40 outline-none "
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-lg border-transparent bg-white/5 py-3 px-5 text-white/80 placeholder-white/40 outline-none "
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border-transparent bg-white/5 py-3 px-5 text-white/80 placeholder-white/40 outline-none "
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full rounded-md bg-white/5 py-3 px-5 text-white/80 placeholder-white/40 outline-none"
            />
          </div>
          <div className="flex w-full justify-center rounded-md bg-white/80 py-3 text-black/80 transition duration-500 hover:bg-white/100 hover:text-black/100">
            <h1>Create account</h1>
          </div>
          <Link href="/login">
            <div className="relative">
              <div className="before:gradient group flex items-center justify-center space-x-1 rounded-md border-2 border-white/5 py-3 px-2 transition duration-500 before:rounded-md">
                <h1 className="text-white/40 transition duration-500 group-hover:text-white/100">
                  I already have an account
                </h1>
                <FiChevronRight className="text-white/40 transition duration-500 group-hover:translate-x-2 group-hover:text-white/100" />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Signup;
