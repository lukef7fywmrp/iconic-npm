import React from "react";

interface Props {
  posts: Post[];
}

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

function Library({ posts }: Props) {
  return (
    <ul className="max-w-5xl mx-auto gap-8 grid md:grid-cols-2 px-10 grid-cols-1 ">
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
          <button className="libraryButton">Get Started</button>
        </li>
      ))}
    </ul>
  );
}

export default Library;
