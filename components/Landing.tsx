import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {useState} from 'react';

// interface Props {
//   posts: Post[];

function Landing() {
   const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
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
      <img
        className="absolute top-0 h-[180vh] w-full"
        src="/gradientbg.png"
        alt=""
      />
      <div className="relative mx-auto flex h-full w-full max-w-[2000px] flex-col items-center justify-center space-y-10 px-8 font-author lg:gap-5 tracking-wide lg:flex-row-reverse sm:px-20">
        {/* Video */}
        <div className="gradientBorder flex space-x-10 overflow-auto rounded-2xl p-[2.5px] w-full">
          <iframe
            className="aspect-video flex-1 rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/DCTuw2P6DCU"
          />
        </div>
        {/* Description */}
        <div className="flex w-full flex-col items-center justify-center space-y-10 text-center lg:text-start lg:items-start">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-5xl sm:text-6xl font-light tracking-wide max-w-lg text-white/90">
              All the libraries you need, made simple
            </h1>
            <h2 className="max-w-lg text-xl sm:text-2xl tracking-wide text-white/50">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>
          {/* Search */}
          <div className="gradient p-0.5 rounded-md">
            <div className="flex">
              <div className="flex items-center pl-3 rounded-l-md">
                <MagnifyingGlassIcon className="h-6 w-6 flex-shrink-0 text-white/90" />
              </div>
              <input
                type="text"
                placeholder="Search packages"
                className="flex-1 p-3.5 tracking-wide text-white bg-transparent placeholder-white/90 outline-none rounded-r-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
