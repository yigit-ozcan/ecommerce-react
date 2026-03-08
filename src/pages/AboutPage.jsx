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
    </>
  );
}

export default AboutPage;
