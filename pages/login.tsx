import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { FaGithub, FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { FIREBASE_ERRORS } from "../constants";
import { useRouter } from "next/router";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [user] = useAuthState(auth);
  const [formError, setFormError] = useState("");
  const [signInWithEmailAndPassword, _, loading, authError] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const subscription = true;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError) setFormError("");
    if (!form.email.includes("@")) {
      return setFormError("Please enter a valid email");
    }
    // Valid form inputs
    signInWithEmailAndPassword(form.email, form.password);
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user && subscription) {
      router.push("/dashboard");
    } else if (user) {
      router.push("/");
    }
  }, [user, subscription]);

  return (
    <div className="flex min-h-screen flex-col bg-[#040009] font-author">
      <Head>
        <title>Login | Iconic</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      {/* Gradient Background */}
      <img
        className="h-] absolute top-0 w-full"
        src="/gradientbg01.png"
        alt=""
      />
      <div className="bg-gradient-to-r from-black via-[#0a0a0a] p-[1px]"></div>
      <main className="z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center space-y-5  ">
        {/* Title */}
        <h1 className="text-4xl text-white">Sign in</h1>
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
        <form
          className="max-w w-full max-w-md space-y-5 px-5 sm:px-0 "
          onSubmit={onSubmit}
        >
          <div className="">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border-transparent bg-white/5 py-3 px-5 text-white/80 placeholder-white/40  outline-none focus:ring-1 focus:ring-purple-600
              focus:invalid:ring-pink-600"
              onChange={onChange}
            />
          </div>
          <div className="">
            <input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full rounded-md bg-white/5 py-3 px-5 text-white/80 placeholder-white/40 outline-none"
              onChange={onChange}
            />
          </div>
          <p className="text-red-500">
            {formError ||
              FIREBASE_ERRORS[
                authError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </p>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-white/80 py-3 text-black/80 transition duration-500 hover:bg-white/100 hover:text-black/100"
          >
            {loading ? (
              <FaSpinner className="animate-spin text-xl" />
            ) : (
              "Log In"
            )}
          </button>
          <Link href="/signup">
            <button className="before:gradient group relative flex w-full items-center justify-center space-x-1 rounded-md border-2 border-white/5 py-3 px-2 transition duration-500 before:rounded-md">
              <h1 className="text-white/40 transition duration-500 group-hover:text-white/100">
                Don't have an account? Sign up
              </h1>
              <FiChevronRight className="text-white/40 transition duration-500 group-hover:translate-x-2 group-hover:text-white/100" />
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Login;
