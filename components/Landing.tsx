import { SearchIcon } from "@heroicons/react/outline";

interface Props {
  posts: Post[];
}

function Landing({ posts }: Props) {
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

  console.log(posts);

  return (
    <div className="flex flex-col justify-center font-author tracking-wide w-full h-full items-center">
      <div className="flex flex-col lg:flex-row text-white px-16 py-20 items-center justify-center w-full h-full">
        <div className="flex flex-col justify-center items-center space-y-5 w-full text-center lg:text-start lg:items-baseline">
          <div className="space-y-5">
            <h1 className="text-6xl tracking-wide">
              All the libraries you need, made simple.
            </h1>
            <h2 className="text-lg tracking-wide lg:w-4/5">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>

          {/* Search */}
          <div className="flex bg-[#242323]  rounded-md w-4/5">
            <div className="flex items-center pl-3">
              <SearchIcon className="flex-shrink-0 h-6 w-6 text-[#c2c2c2]" />
            </div>
            <input
              type="text"
              placeholder="Search packages"
              className="bg-transparent outline-none flex-1 p-3 text-xl placeholder-[#c2c2c2] tracking-wide text-white "
            />
          </div>
        </div>
        <div className="relative w-3/5 h-4/5 mt-10">
          <img className="" src="https://bit.ly/3bJnZ5z" alt="" />
          <div className="absolute top-0 flex items-center justify-center h-full w-full ">
            <button className="landingvidButton">hi</button>
          </div>
        </div>
      </div>
      {/* <ul className="max-w-5xl mx-auto gap-8 grid grid-cols-3">
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
      </ul> */}
    </div>
  );
}

export default Landing;
