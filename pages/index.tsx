import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Library from "../components/Library";
import LibraryTop from "../components/LibraryTop";
import Footer from "../components/Footer";

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
    <div className="relative min-h-screen w-full overflow-y-hidden">
      <Head>
        <title>iconicnpm.com</title>
        <meta name="description" content="Generated by create next app" />
        /wikipedia/commons/a/a7/React-icon.svg
      </Head>
      <Header />
      <div className="my-20 lg:my-32">
      <Landing/>
      </div>
      {/* Top Library */}
      <section className="relative flex-col tracking-wide py-20 font-author">
        <div className="space-y-2 text-center font-author text-white/90">
          <h1 className="text-6xl">Explore</h1>
          <p className="text-2xl text-white/50">
            Most used libraries in today's production
          </p>
        </div>
        <div className="flex gap-8 overflow-scroll pt-10 pb-10 px-5 lg:px-20 xl:px-40">
          <LibraryTop
            librarytopLogo="/react.png"
            librarytopName="React.js"
            librarytopDescription="A JavaScript library for building user interfaces"
            librarytopImage="/jordan.png"
            librarytopAuthor="Jordan Walke"
          />
          <LibraryTop
            librarytopLogo="/nextjs.png"
            librarytopName="Next.js"
            librarytopDescription="The React Framework for Production"
            librarytopImage="/guillermo.png"
            librarytopAuthor="Guillermo Rauch"

          />
          <LibraryTop
            librarytopLogo="/tailwind.png"
            librarytopName="Tailwind.css"
            librarytopDescription="Rapidly build modern websites without ever leaving your HTML."
            librarytopImage="/adamwathan.jpeg"
            librarytopAuthor="Adam Wathan"
          />
        </div>
      </section>
      {/* Library */}
      <section className="py-20 px-5 lg:px-20 xl:px-40 tracking-wide relative font-author">
        <div>
        <h1 className="text-4xl text-white/90">
          Libraries
        </h1>
        <p className="text-lg text-white/50 ">Explore the library and discover the incredible work of our community</p>
        </div>
        <div className="gap-3 grid md:grid-cols-2 pb-10 pt-5 ">
        <Library 
            libraryLogo="/firebase.png"
            libraryName="Firebase"
            libraryDescription="Firebase is an app development platform that helps you build and grow apps and games users love. "
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            <Library 
            libraryLogo="/redux.png"
            libraryName="Redux"
            libraryDescription="Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            <Library 
            libraryLogo="/tailwind.png"
            libraryName="Tailwind.css"
            libraryDescription="Rapidly build modern websites without ever leaving your HTML."
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            <Library 
            libraryLogo="/tailwind.png"
            libraryName="Tailwind.css"
            libraryDescription="Rapidly build modern websites without ever leaving your HTML."
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
             <Library 
            libraryLogo="/firebase.png"
            libraryName="Firebase"
            libraryDescription="Firebase is an app development platform that helps you build and grow apps and games users love. "
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            <Library 
            libraryLogo="/redux.png"
            libraryName="Redux"
            libraryDescription="Rapidly build modern websites without ever leaving your HTML."
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
             <Library 
            libraryLogo="/firebase.png"
            libraryName="Firebase"
            libraryDescription="Firebase is an app development platform that helps you build and grow apps and games users love. "
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            <Library 
            libraryLogo="/redux.png"
            libraryName="Redux"
            libraryDescription="Rapidly build modern websites without ever leaving your HTML."
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
             <Library 
            libraryLogo="/firebase.png"
            libraryName="Firebase"
            libraryDescription="Firebase is an app development platform that helps you build and grow apps and games users love. "
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            <Library 
            libraryLogo="/redux.png"
            libraryName="Redux"
            libraryDescription="Rapidly build modern websites without ever leaving your HTML."
            libraryImage="/adamwathan.jpeg"
            libraryAuthor="Adam Wathan"/>
            </div>
      </section>
      <Footer />
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
