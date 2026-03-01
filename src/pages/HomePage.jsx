import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero1.jpg",
      subtitle: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      textColor: "text-white",
      buttonColor: "bg-[#2DC071]",
    },
    {
      image: "/images/hero2.jpg",
      subtitle: "LIMITED EDITION",
      title: "FRESH STYLE",
      description:
        "Elevate your wardrobe with bold colors and statement pieces that define your personality.",
      textColor: "text-[#252B42]",
      buttonColor: "bg-[#23A6F0]",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[currentSlide];

  return (
    <section
      className={`
        relative w-full
        h-[720px] md:h-[850px]
        bg-cover
        ${
          currentSlide === 0
            ? "bg-[position:30%_center] md:bg-[position:78%_35%]"
            : "bg-[position:30%_center] md:bg-[position:22%_20%]"
        }
        flex items-center md:justify-start justify-center
        transition-all duration-500
      `}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* CONTENT */}
      <div
        className={`
            flex flex-col
            items-center text-center
            px-8 gap-8
            md:items-start md:text-left
            md:max-w-[1200px] md:w-full
            md:ml-[200px]
            ${slide.textColor}
        `}
      >
        {/* Subtitle */}
        <p className="tracking-[3px] text-[18px] md:text-[20px] font-bold">
          {slide.subtitle}
        </p>

        {/* Title */}
        <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.05] whitespace-nowrap">
          {slide.title}
        </h1>

        {/* Description */}
        <p className="text-[24px] md:text-[24px] leading-[1.6] max-w-[320px] md:max-w-[520px] whitespace-pre-line">
          {slide.description}
        </p>

        {/* Button */}
        <button
          className={`${slide.buttonColor}
            px-14 py-5
            md:px-14 md:py-5
            rounded-md
            font-bold
            text-[28px] md:text-[22px]
            text-white`}
        >
          SHOP NOW
        </button>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition"
      >
        <ChevronLeft size={50} strokeWidth={2} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition"
      >
        <ChevronRight size={50} strokeWidth={2} />
      </button>

      {/* DESKTOP SLIDE INDICATOR */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-[4px] w-[60px] transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
