function ShopPage() {
  const categories = [
    "/images/shoppage/shop1.png",
    "/images/shoppage/shop2.png",
    "/images/shoppage/shop3.png",
    "/images/shoppage/shop4.png",
    "/images/shoppage/shop5.jpg",
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
          <h1 className="text-[48px] font-bold text-[#252B42] text-center md:text-left">
            Shop
          </h1>

          <div className="flex justify-center md:justify-end gap-2 text-[14px] mt-15 md:mt-0 text-[#737373]">
            <span className="text-[#252B42] text-[24px] font-semibold">
              Home
            </span>
            <span className="text-[24px]">&gt;</span>
            <span className="text-[24px]">Shop</span>
          </div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          {categories.map((image, index) => (
            <div
              key={index}
              className="relative w-full md:w-1/5 overflow-hidden"
            >
              <img
                src={image}
                alt="shop category"
                className="w-full h-auto md:h-[260px] object-cover"
              />

              {/* OVERLAY TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold">
                <span className="text-[28px] md:text-[20px]">CLOTHS</span>
                <span className="text-[24px] md:text-[18px] mt-5">5 Items</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
