import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import {useState} from 'react';

// interface Props {
//   posts: Post[];

function Landing() {
  // const [posts, setPosts] = useState<Post[]>([]);

  // Typical react way to fetch data
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setPosts(data);
  //   };

  //   fetchPosts();
  // }, []);

  // console.log(posts);

  return (
    <div>
      {/* Gradient Background */}
      <img
        className="absolute top-0 h-[200vh] w-full"
        src="/gradientbg.png"
        alt=""
      />
      <div className="relative mx-auto flex h-full w-full max-w-[2000px] flex-col items-center justify-center space-y-10 px-8 font-author tracking-wide sm:px-20 lg:flex-row-reverse lg:gap-5">
        {/* Video */}
        <div className="gradientBorder flex w-full space-x-10 overflow-auto rounded-2xl p-[2.5px]">
          <iframe
            className="aspect-video flex-1 rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/DCTuw2P6DCU"
          />
        </div>
        {/* Description */}
        <div className="flex w-full flex-col items-center justify-center space-y-10 text-center lg:items-start lg:text-start">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="max-w-lg text-5xl font-light tracking-wide text-white/90 sm:text-6xl">
              All the libraries you need, made simple
            </h1>
            <h2 className="max-w-lg text-xl tracking-wide text-white/50 sm:text-2xl">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>
          {/* Search */}
          <div className="gradient flex cursor-pointer border-2">
            <div className="flex items-center rounded-l-md pl-3">
              <MagnifyingGlassIcon className="h-6 w-6 flex-shrink-0 text-white/80" />
            </div>
            <input
              type="text"
              placeholder="Search packages"
              className="flex-1 rounded-r-md bg-transparent p-3.5 tracking-wide text-white/80 placeholder-white/80 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
