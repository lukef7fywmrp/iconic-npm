import { GetServerSideProps } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Library from "../components/Library";
import LibraryTop from "../components/LibraryTop";
import { fetchLibraries } from "../utils/fetchLibraries";
import { fetchLibrariesTop } from "../utils/fetchLibrariesTop";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  librariesTop: Library[];
  libraries: Library[];
}

const Home = ({ librariesTop, libraries }: Props) => {
  console.log(librariesTop);
  return (
    <div className="relative min-h-screen w-full overflow-y-hidden">
      <Head>
        <title>Iconic</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <div className="my-20 lg:my-32">
        <Landing />
      </div>
      {/* Top Library */}
      <section className="relative flex-col py-20 font-author">
        <div className="space-y-5 pb-14 text-center text-white">
          <h1 className="text-5xl lg:text-6xl">Explore</h1>
          <p className="text-xl text-white/40 lg:text-2xl">
            Most used libraries in today's production
          </p>
        </div>
        <div className="px-5 text-white/40 lg:px-20 xl:px-40 ">
          <h1 className="text-2xl text-white/90 lg:text-3xl">Featured</h1>
          <p className="text-lg lg:text-xl">
            Browse the library you need and get started
          </p>
        </div>
        <div className="flex gap-5 overflow-scroll px-5 pt-5 pb-10 lg:mx-0 lg:px-20 xl:px-40">
          {librariesTop.map((library) => (
            <LibraryTop key={library._id} library={library} />
          ))}
        </div>
      </section>
      {/* Library */}
      <section className="relative px-5 font-author lg:px-20 xl:px-40">
        <div className="mb-8 hidden justify-end md:flex">
          <div className="w-full max-w-xs rounded-xl border border-white/10">
            <div className="flex cursor-pointer items-center rounded-[10px] bg-white/5 pl-3">
              <MagnifyingGlassIcon className="h-6 w-6 flex-shrink-0 text-white/50 focus:text-white" />
              <input
                type="text"
                placeholder="Search packages"
                className="relative flex-1 bg-transparent p-3.5 tracking-wide text-white/80 placeholder-white/50 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl text-white">Libraries</h1>
            <p className=" text-white/40 lg:text-lg">
              Explore the library and discover the incredible work of our
              community
            </p>
          </div>
        </div>
        <div className="grid gap-3 pb-10 pt-5 md:grid-cols-2">
          {libraries.map((library) => (
            <Library key={library._id} library={library} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const librariesTop = await fetchLibrariesTop();
  const libraries = await fetchLibraries();

  return {
    props: {
      librariesTop,
      libraries,
    },
  };
};
