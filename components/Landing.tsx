import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

function Landing() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Typical react way to fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="flex flex-col justify-center font-author tracking-wide w-full h-full landingBg">
      <img
        className="absolute top-0 -z-10 blur h-screen w-full scale-105"
        src="https://cdn.dribbble.com/users/1770290/screenshots/6158205/bg_75.gif"
        alt=""
      />
      <div className="lg:px-20 py-10">
        <p className="text-4xl lg:text-7xl text-center font-medium heading tracking-wide text-white">
          All the libraries you need, Made simple.
        </p>
        {/* Search */}
        <div className="flex bg-black bg-opacity-50 rounded-md flex-1 w-full mx-10">
          <div className="flex items-center pl-3">
            <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search packages"
            className="bg-transparent outline-none flex-1 p-3 text-xl placeholder-gray-400 tracking-wide text-white"
          />
        </div>
        <ul className="max-w-5xl mx-auto gap-4 flex flex-wrap">
          {posts.map((post) => (
            <li
              className="bg-[#26212C] p-4 py-10 rounded-lg flex flex-col items-center"
              key={post.id}
            >
              <div className="bg-white mb-4 w-24 h-24 rounded-xl flex items-center justify-center">
                <img
                  src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
                  alt=""
                  className="object-contain h-20 w-20"
                />
              </div>
              <h4 className="font-medium text-xl text-white">Next JS</h4>
              <p className="text-gray-500 font-medium">
                The React Framework for Production
              </p>
              <button>Get Started</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Landing;
