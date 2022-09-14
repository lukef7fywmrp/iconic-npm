import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// interface Props {
//   posts: Post[];
// }

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
      <div className="relative mx-auto flex h-full w-full max-w-[1300px] flex-col items-center justify-center space-y-10 px-16 py-10 font-author tracking-wide text-white">
        {/* Video */}
        <div className="flex w-full space-x-10 overflow-auto rounded-xl px-[15%]">
          <iframe
            className="aspect-video flex-1 rounded-2xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/DCTuw2P6DCU"
          />
        </div>
        {/* Description */}
        <div className="flex w-full flex-col items-center justify-center space-y-10 text-center">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-6xl font-light tracking-wide">
              All the libraries you need, made simple
            </h1>
            <h2 className="max-w-lg text-2xl tracking-wide text-[#727272]">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>
          {/* Search */}
          <div className="rounded-md bg-gradient-to-tr from-[#50afeb] to-[#cd0789] p-[1px]">
            <div className="flex rounded-md bg-[#1b0026]">
              <div className="flex items-center pl-3">
                <MagnifyingGlassIcon className="h-6 w-6 flex-shrink-0 text-[#c2c2c2]" />
              </div>
              <input
                type="text"
                placeholder="Search packages"
                className="flex-1 rounded-md bg-[#1b0026] p-3.5 tracking-wide text-white placeholder-[#c2c2c2] outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
