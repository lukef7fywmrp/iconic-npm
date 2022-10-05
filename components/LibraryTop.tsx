import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity";
import { BiUpArrow } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";

interface Props {
  library: Library;
}

function LibraryTop({
  library: { title, description, logo, slug, creator },
}: Props) {
  return (
    <Link href={slug.current}>
      <div className="w-full cursor-pointer rounded-2xl bg-white/5 py-5 px-10 transition duration-500 hover:bg-white/10">
        <div className="flex flex-col items-center justify-center space-y-3 ">
          <div className="group flex flex-col items-center space-y-3 px-10 font-author">
            <div className="gradientBorder rounded-3xl p-[2.5px]">
              <div className="flex h-24 w-24 items-center rounded-3xl bg-white p-2">
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
          <p className="h-10 w-56 text-center font-inter text-sm text-white/40">
            {description}
          </p>
          {/* Author */}
          <div className="flex space-x-5  py-2 pb-5 font-inter text-xs">
            <div className="group flex items-center space-x-2">
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
            <button className="flex items-center rounded-lg border border-white/20">
              <RiArrowUpSFill className="mx-1 text-2xl text-white/50 transition duration-300 hover:text-white/90" />
              <p className="border-l border-white/20 py-1 px-2 text-white/90">
                150
              </p>
            </button>
          </div>
          {/* Button */}
          <div className="group rounded-lg border border-white/20 text-lg">
            <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-lg  px-3 py-1">
              <span className="from absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 opacity-[0%]"></span>
              <span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gradient-to-tr from-fuchsia-700 to-amber-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
              <span className="relative flex max-w-sm items-center text-left font-author text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Explore More
              </span>
              <span className="absolute inset-0 rounded-md"></span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LibraryTop;
