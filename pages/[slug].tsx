import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { RiArrowUpSFill } from "react-icons/ri";

interface Props {
  library: Library;
}

function LibraryPage({ library }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-[#040009] font-author">
      <Head>
        <title>
          {library.title} | {library.creator.name}
        </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        <img
          className="absolute top-0 h-[60vh] w-full"
          src="/gradientbg01.png"
          alt=""
        />
        <div className="relative py-10">
          <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:px-36">
            <div className="flex flex-col items-center justify-center lg:flex-row  lg:gap-4">
              <div className="gradientBorder my-2 rounded-3xl p-0.5">
                <div className="h-24 w-24 rounded-3xl bg-white p-2">
                  <Image
                    src={urlFor(library.logo).url()!}
                    height="100%"
                    width="100%"
                    objectFit="contain"
                  />
                </div>
              </div>
              {/* Title */}
              <div className="flex flex-col items-center space-y-2 lg:items-baseline">
                <h1 className="text-2xl tracking-wide text-white/90 ">
                  {library.title}
                </h1>
                <p className="flex w-full items-center justify-center font-inter text-sm text-white/40">
                  The React Framework for Production
                </p>
                {/* Author */}
                <div className="flex flex-row items-center space-x-4">
                  <div className="relative flex items-center justify-center space-x-5 font-inter text-xs ">
                    <div className="group flex items-center space-x-2">
                      <div className="relative h-7 w-7">
                        <Image
                          className="rounded-full"
                          src="/guillermo.png"
                          height={100}
                          width={100}
                        />
                      </div>
                      <button className="text-white/60 duration-500 group-hover:text-white/90">
                        Guillermo Rauch
                      </button>
                    </div>
                  </div>
                  <div className="h-6 border-[0.5px] border-white/20"></div>
                  {/* Upvotes */}
                  <button className="flex items-center rounded-md border border-white/20">
                    <div className="rounded-l-[7px] px-2 text-2xl text-white/50 transition duration-300 hover:bg-white/10 hover:text-white/90">
                      <RiArrowUpSFill />
                    </div>
                    <p className="border-l border-white/20 py-1 px-3 text-white/90">
                      150
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="group flex justify-center rounded-lg border border-white/10 text-lg">
              <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-lg bg-white/5 px-10 py-1">
                <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-fuchsia-700 to-amber-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="relative text-white/90  duration-200 ease-in-out group-hover:text-white">
                  Share
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LibraryPage;

// Which pages exist
export const getStaticPaths = async () => {
  const query = groq`
        *[_type == "library"]{
             _id,
            slug {
    current
  }
}
    `;

  const libraries = await sanityClient.fetch(query);

  const paths = libraries.map((library: Library) => ({
    params: {
      slug: library.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// Populate the data into the pages which exist and only prebuild them
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const query = `*[_type == "library" && slug.current == $slug][0]{
 _id,
slug,
title,
description,
logo,
creator -> {
    name,
    slug,
    image
},
documentation
}`;

  const library = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!library) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      library,
    },
    revalidate: 60, // after 60 seconds, it'll update the old cached version
  };
};
