import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
      <img
        className="absolute top-0 h-[180vh] w-full"
        src="/gradientbg.png"
        alt=""
      />
      <div className="relative mx-auto flex h-full w-full max-w-[1300px] flex-col items-center justify-center space-y-10 px-16 font-author tracking-wide lg:flex-row-reverse gap-10 lg:px-10">
        {/* Video */}
        <div className="gradientBorder flex w-full space-x-10 overflow-auto rounded-2xl p-[2.5px]">
          <iframe
            className="aspect-video flex-1 rounded-2xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/DCTuw2P6DCU"
          />
        </div>
        {/* Description */}
        <div className="flex w-full flex-col items-center justify-center space-y-10 text-center lg:text-start lg:items-start">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-6xl font-light tracking-wide max-w-lg text-white/90">
              All the libraries you need, made simple
            </h1>
            <h2 className="max-w-lg text-2xl tracking-wide text-white/50">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>
          {/* Search */}
          <div className="gradientBorder p-0.5 rounded-md">
            <div className="flex">
              <div className="flex items-center pl-3 bg-[#171717] rounded-l-md">
                <MagnifyingGlassIcon className="h-6 w-6 flex-shrink-0 text-[#c2c2c2]" />
              </div>
              <input
                type="text"
                placeholder="Search packages"
                className="flex-1  bg-[#171717] p-3.5 tracking-wide text-white placeholder-[#c2c2c2] outline-none rounded-r-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
