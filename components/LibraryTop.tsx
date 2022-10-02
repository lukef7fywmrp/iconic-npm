import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity";

interface Props {
  library: Library;
}

function LibraryTop({
  library: { title, description, logo, slug, creator },
}: Props) {
  return (
    <Link href={slug.current}>
      <div className="flex w-full cursor-pointer flex-col items-center justify-center space-y-3 rounded-2xl bg-white/5 py-5 px-10 transition duration-500 hover:bg-white/10">
        <div className="group flex flex-col items-center space-y-3 px-10 font-author">
          <div className="gradientBorder rounded-full p-[2.5px]">
            <div className="flex h-24 w-24 items-center rounded-full bg-white p-3">
              <Image
                src={urlFor(logo).url()!}
                height="100%"
                width="100%"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Title */}
          <h1 className="text-center text-2xl text-white/90 duration-500 group-hover:scale-105  group-hover:text-white/100">
            {title}
          </h1>
        </div>
        {/* Description */}
        <p className="h-16 w-56 text-center font-inter text-sm text-white/40">
          {description}
        </p>
        {/* Author */}
        <div className="group flex space-x-2 py-2 pb-5 font-inter text-xs">
          <div className="relative h-7 w-7">
            <Image
              className="rounded-full"
              src={urlFor(creator.image).url()!}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <button className="text-white/60 duration-500 group-hover:text-white/90">
            {creator.name}
          </button>
        </div>
        {/* Button */}
        <div className="gradientBorder rounded-full p-0.5">
          <div className="rounded-full bg-[#101010] font-author text-lg">
            <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-1 font-normal">
              <span className="h-34 absolute left-0 top-0 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gradient-to-tr from-purple-500 to-orange-500 opacity-[0%]"></span>
              <span className="absolute top-0 left-0 -mt-1 h-44 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-purple-500 to-orange-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
              <span className="relative flex w-full items-center text-left text-white transition-colors duration-200 ease-in-out ">
                Explore More
              </span>
              <span className="absolute inset-0 rounded-md "></span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LibraryTop;
