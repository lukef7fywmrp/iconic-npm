import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

function Login() {
  const [validEmail, setvalidEmail] = useState(true);
  const validEmailClass =
    "bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600 my-2 w-full";
  const invalidEmailClass =
    "bg-white rounded border border-gray-300 p-3 focus:border border-red-600 my-2 w-full";
  return (
    <div className="flex min-h-screen flex-col bg-[#050005] font-author">
      <Head>
        <title>iconicnpm.com</title>
        <meta name="description" content="Generated by create next app" />
        /wikipedia/commons/a/a7/React-icon.svg
      </Head>
      <Header />
      <div className="bg-gradient-to-r from-black via-[#0a0a0a] p-[1px]"></div>
      <main className="z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center space-y-5  ">
        {/* Title */}
        <h1 className="text-4xl text-white">Sign in</h1>
        {/* Buttons */}
        <div className="flex w-8/12 space-x-4 text-white/50 md:w-5/12">
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
        <div className="w-8/12 space-y-5 md:w-5/12">
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="validEmail? focus:gradient w-full rounded-md  border-2 border-white/5 bg-white/5 py-3 px-2 text-white/80 placeholder-white/40 outline-none focus:relative"
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full rounded-md bg-white/5 py-3 px-2 text-white/80 placeholder-white/40 outline-none"
            />
          </div>
          <div className="flex w-full justify-center rounded-md bg-white/80 py-3 text-black/80 transition duration-500 hover:bg-white/100 hover:text-black/100">
            <h1>Log in</h1>
          </div>
          <Link href="/signup">
            <div className="relative">
              <div className="hover:before:gradient  group flex items-center justify-center space-x-1 rounded-md border-2 border-white/5 py-3 px-2 transition duration-500">
                <h1 className="text-white/40  group-hover:text-white/100">
                  Don't have an account? Sign up
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

export default Login;
