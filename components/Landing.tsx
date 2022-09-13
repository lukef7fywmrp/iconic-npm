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
    <div className="flex flex-col max-w-[1300px] mx-auto text-white px-16 items-center justify-center w-full h-full font-author tracking-wide space-y-10 py-10 relative">
      {/* Video */}
      <div className="space-x-10 flex rounded-xl overflow-auto w-full px-[15%]">
        <iframe
          className="flex-1 aspect-video rounded-2xl shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/DCTuw2P6DCU"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col justify-center items-center w-full text-center space-y-10">
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-6xl tracking-wide font-light">
            All the libraries you need, made simple
          </h1>
          <h2 className="text-2xl tracking-wide max-w-lg text-[#727272]">
            First website with over a hundred different libraries with full
            installation guides.
          </h2>
        </div>
        {/* Search */}
        <div className="bg-gradient-to-tr from-[#50afeb] to-[#cd0789] p-[1px] rounded-md">
          <div className="flex bg-[#1b0026] rounded-md">
            <div className="flex items-center pl-3">
              <MagnifyingGlassIcon className="flex-shrink-0 h-6 w-6 text-[#c2c2c2]" />
            </div>
            <input
              type="text"
              placeholder="Search packages"
              className="bg-[#1b0026] outline-none flex-1 p-3.5 placeholder-[#c2c2c2] tracking-wide text-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
