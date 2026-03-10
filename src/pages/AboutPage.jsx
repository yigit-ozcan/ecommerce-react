import React from "react";

function AboutPage() {
  return (
    <>
      <section className="w-full bg-gray-100 px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            {/* Small Label (desktop only) */}
            <span className="hidden md:block text-[20px] font-bold text-slate-600 mb-4">
              ABOUT COMPANY
            </span>

            {/* Title */}
            <h1 className="text-[42px] md:text-[60px] font-bold text-slate-800 leading-tight">
              ABOUT US
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-500 text-[25px] font-semibold leading-relaxed max-w-[300px] md:text-[20px] md:max-w-[480px]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>

            {/* Button */}
            <button className="mt-8 bg-[#23A6F0] text-[20px] text-white font-semibold px-12 py-4 rounded-md hover:opacity-90 transition">
              Get Quote Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end w-full md:w-[55%] md:-mt-16">
            <img
              src="/images/aboutpage/abouthero.png"
              alt="shopping girl"
              className="w-[95%] max-w-[420px] md:w-full md:max-w-[650px]"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
          {/* LEFT SIDE */}
          <div className="flex flex-col max-w-xl text-center md:text-left">
            <span className="text-red-500 text-[20px] md:text-[24px] font-semibold mb-4">
              Problems trying
            </span>

            <h2 className="text-[32px] md:text-[35px] font-bold text-slate-800 leading-snug max-w-[350px] mx-auto md:mx-0 md:max-w-[520px]">
              Met minim Mollie non desert Alamo est sit cliqueey dolor do met
              sent.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-start text-left md:max-w-[520px] md:mt-[52px]">
            <p className="mx-10 text-gray-500 text-[22px] md:text-[20px] md:text-base leading-relaxed font-semibold md:mx-0 md:max-w-full">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-28 md:gap-0 text-center">
          {/* ITEM */}
          <div className="flex flex-col items-center">
            <h3 className="text-[64px] md:text-[56px] font-bold text-slate-800">
              15K
            </h3>
            <p className="text-gray-500 text-[20px] font-semibold mt-2">
              Happy Customers
            </p>
          </div>

          {/* ITEM */}
          <div className="flex flex-col items-center">
            <h3 className="text-[64px] md:text-[56px] font-bold text-slate-800">
              150K
            </h3>
            <p className="text-gray-500 text-[20px] font-semibold mt-2">
              Monthly Visitors
            </p>
          </div>

          {/* ITEM */}
          <div className="flex flex-col items-center">
            <h3 className="text-[64px] md:text-[56px] font-bold text-slate-800">
              15
            </h3>
            <p className="text-gray-500 text-[20px] font-semibold mt-2">
              Countries Worldwide
            </p>
          </div>

          {/* ITEM */}
          <div className="flex flex-col items-center">
            <h3 className="text-[64px] md:text-[56px] font-bold text-slate-800">
              100+
            </h3>
            <p className="text-gray-500 text-[20px] font-semibold mt-2">
              Top Partners
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 px-6 py-24">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="relative w-full max-w-[340px] h-[360px] md:h-auto md:max-w-4xl">
            {/* Image */}
            <img
              src="/images/aboutpage/video.png"
              alt="video preview"
              className="w-full h-full rounded-2xl object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#23A6F0] rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
