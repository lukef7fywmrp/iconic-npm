import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Library from "../components/Library";
import LibraryTop from "../components/LibraryTop";

interface Props {
  posts: Post[];
}

// const Login = async() => {
//   if (!user) return

//    await signInWithGoogle().then(() => {
//     console.log("signed in");

//     // Redirect to the home page
//     Router.push("/");
//   }).catch((error) => {
//     console.log(error);
//   });
// }

const Home = ({ posts }: Props) => {
  return (
    <div className="w-full overflow-y-hidden relative min-h-screen">
      <Head>
        <title>iconicnpm.com</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Landing />
      <section className="overflow-scroll flex flex-col my-20 space-y-12">
        <h1 className="text-white text-5xl text-center font-">
          Full installation guides for
        </h1>
        <div className="flex">
          <LibraryTop
            libraryLogo="/nextjs.png"
            libraryName="Next.js"
            libraryDescription="The React Framework for Production The React Framework for Production"
          />
          <LibraryTop
            libraryLogo="/nextjs.png"
            libraryName="Next.js"
            libraryDescription="The React Framework for Production  The React Framework for Production"
          />
          <LibraryTop
            libraryLogo="/nextjs.png"
            libraryName="Next.js"
            libraryDescription="The React Framework for Production  The React Framework for Production"
          />
          <LibraryTop
            libraryLogo="/nextjs.png"
            libraryName="Next.js"
            libraryDescription="The React Framework for Production  The React Framework for Production"
          />
        </div>
      </section>

      <section className="pb-24">
        <h1 className="text-white text-5xl text-center font-semibold">
          Try it out yourself
        </h1>
        <div></div>
      </section>
    </div>
  );
};

export default Home;

// Server Side Rendering (SSR) - fetch data from the server - optimizes the page load time and removes loading
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data: Post[] = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
