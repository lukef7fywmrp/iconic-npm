import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Landing() {
  return (
    <div>
      {/* Gradient Background */}
      <img
        className="absolute top-0 h-[120vh] w-full lg:h-[100vh]"
        src="/gradientbg01.png"
        alt=""
      />
      <div className="relative mx-auto flex h-full w-full max-w-[2000px] flex-col items-center justify-center space-y-10 px-8 font-author tracking-wide sm:px-20 lg:flex-row-reverse lg:gap-5 xl:px-40">
        {/* Video */}
        <div className="flex w-full space-x-10 overflow-auto rounded-3xl bg-white/10 p-1">
          <iframe
            className="aspect-video flex-1 rounded-[20px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/DCTuw2P6DCU"
          />
        </div>
        {/* Description */}
        <div className="flex w-full flex-col items-center justify-center space-y-10 text-center lg:items-start lg:text-start">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="max-w-lg font-author text-5xl font-light  text-white/90 sm:text-6xl">
              All the libraries you need, made simple
            </h1>
            <h2 className="max-w-lg text-xl text-white/40 sm:text-2xl">
              First website with over a hundred different libraries with full
              installation guides.
            </h2>
          </div>
          {/* Search */}
          <div className="rounded-xl border border-white/10">
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
      </div>
    </div>
  );
}

export default Landing;
