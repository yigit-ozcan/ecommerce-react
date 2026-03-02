import ProductCard from "../components/ProductCard";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function HomePage() {
  const slides = [
    {
      image: "/images/hero1.jpg",
      subtitle: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      textColor: "text-white",
      buttonColor: "bg-[#2DC071]",
      bgMobile: "bg-[position:30%_center]",
      bgDesktop: "md:bg-[position:78%_35%]",
    },
    {
      image: "/images/hero2.jpg",
      subtitle: "LIMITED EDITION",
      title: "FRESH STYLE",
      description:
        "Elevate your wardrobe with bold colors and statement pieces that define your personality.",
      textColor: "text-[#252B42]",
      buttonColor: "bg-[#23A6F0]",
      bgMobile: "bg-[position:30%_center]",
      bgDesktop: "md:bg-[position:22%_20%]",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className={`
              relative w-full
              h-[720px] md:h-[850px]
              bg-cover
              ${slide.bgMobile}
              ${slide.bgDesktop}
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
                <p className="tracking-[3px] text-[18px] md:text-[20px] font-bold">
                  {slide.subtitle}
                </p>

                <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.05] whitespace-nowrap">
                  {slide.title}
                </h1>

                <p className="text-[24px] md:text-[24px] leading-[1.6] max-w-[320px] md:max-w-[520px] whitespace-pre-line">
                  {slide.description}
                </p>

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

              {/* ARROWS (AYNEN KALDI) */}
              <button className="custom-prev absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition">
                <ChevronLeft size={50} strokeWidth={2} />
              </button>

              <button className="custom-next absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition">
                <ChevronRight size={50} strokeWidth={2} />
              </button>
            </section>
          </SwiperSlide>
        ))}

        {/* DESKTOP SLIDE INDICATOR (Aynı Stil, Ama Swiper ile Çalışır) */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-4 z-10">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <section className="w-full bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#252B42]">
              EDITOR’S PICK
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#737373] mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Content */}
          <div
            className="
      flex flex-col gap-6
      md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6
    "
          >
            {/* MEN */}
            <div className="relative w-full md:col-span-2 md:row-span-2">
              <img
                src="/images/men.jpg"
                alt="Men"
                className="w-full h-[700px] md:h-[600px] object-cover object-top md:object-center"
              />
              <div className="absolute bottom-6 left-1/3 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white px-25 py-4 font-bold text-[25px] md:px-18 md:py-3 md:text-[18px]">
                MEN
              </div>
            </div>

            {/* WOMEN */}
            <div className="relative w-full md:col-span-1 md:row-span-2">
              <img
                src="/images/women.jpg"
                alt="Women"
                className="w-full h-[700px] md:h-[600px] object-cover object-top md:object-center"
              />
              <div className="absolute bottom-6 left-1/3 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white px-12 py-4 font-bold text-[25px] md:px-10 md:py-3 md:text-[18px]">
                WOMEN
              </div>
            </div>

            {/* ACCESSORIES */}
            <div className="relative w-full md:col-span-1 md:row-span-1">
              <img
                src="/images/accessories.jpg"
                alt="Accessories"
                className="w-full h-[370px] md:h-[280px] object-cover object-center"
              />
              <div className="absolute bottom-6 left-1/4 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white px-10 py-4 font-bold text-[25px] md:px-10 md:py-3 md:text-[18px]">
                ACCESSORIES
              </div>
            </div>

            {/* KIDS */}
            <div className="relative w-full md:col-span-1 md:row-span-1">
              <img
                src="/images/kids.jpg"
                alt="Kids"
                className="w-full h-[370px] md:h-[280px] object-cover object-center"
              />
              <div className="absolute bottom-6 left-1/5 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white px-17 py-4 font-bold text-[25px] md:px-12 md:py-3 md:text-[18px]">
                KIDS
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-35 md:py-24">
        <div className="max-w-[1200px] mx-auto px-12 md:px-6">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#737373] text-[28px] font-semibold md:text-[16px]">
              Featured Products
            </p>

            <h2 className="text-[36px] md:text-[28px] font-bold text-[#252B42] mt-2 leading-tight">
              <span className="block md:inline md:mr-2">BESTSELLER</span>
              <span className="block md:inline">PRODUCTS</span>
            </h2>

            <p className="text-[#737373] text-[18px] md:text-[16px] mt-2 leading-relaxed font-semibold">
              <span className="block md:inline md:mr-1">
                Problems trying to resolve the
              </span>
              <span className="block md:inline">conflict between</span>
            </p>
          </div>

          {/* Grid */}
          <div
            className="
                grid grid-cols-1 gap-12
                md:grid-cols-4 md:gap-8
                "
          >
            <ProductCard
              image="/images/product1.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product2.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product3.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product4.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product5.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product6.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product7.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />

            <ProductCard
              image="/images/product8.jpg"
              title="Graphic Design"
              department="English Department"
              oldPrice="16.48"
              newPrice="6.48"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
