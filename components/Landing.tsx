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
    <div className="flex flex-col justify-center font-author tracking-wide w-full h-full items-center">
      <div className="flex flex-col max-w-[1300px] mx-auto text-white px-16 items-center justify-center w-full h-full">
        {/* Video */}
        <div className="space-x-10 flex rounded-xl overflow-auto p-8 w-full">
          <iframe
            className="flex-1 aspect-video rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/DCTuw2P6DCU"
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-10 w-full text-center">
          <div className="space-y-3 flex flex-col justify-center items-center">
            <h1 className="text-6xl tracking-wide">
              All the libraries you need, made simple
            </h1>
            <h2 className="text-2xl tracking-wide max-w-lg text-[#727272]">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>
          {/* Search */}
          <div className="flex bg-white/10 rounded-md max-w-lg w-full">
            <div className="flex items-center pl-3">
              <MagnifyingGlassIcon className="flex-shrink-0 h-6 w-6 text-[#c2c2c2]" />
            </div>
            <input
              type="text"
              placeholder="Search packages"
              className="bg-transparent outline-none flex-1 p-3.5 placeholder-[#c2c2c2] tracking-wide text-white "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
