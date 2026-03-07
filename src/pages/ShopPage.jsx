import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { LayoutGrid, List } from "lucide-react";

function ShopPage() {
  const categories = [
    "/images/shoppage/shop1.png",
    "/images/shoppage/shop2.png",
    "/images/shoppage/shop3.png",
    "/images/shoppage/shop4.png",
    "/images/shoppage/shop5.jpg",
  ];

  const products = [
    "/images/shoppage/product1.jpg",
    "/images/shoppage/product2.jpg",
    "/images/shoppage/product3.jpg",
    "/images/shoppage/product4.jpg",
    "/images/shoppage/product5.jpg",
    "/images/shoppage/product6.jpg",
    "/images/shoppage/product7.jpg",
    "/images/shoppage/product8.jpg",
    "/images/shoppage/product9.jpg",
    "/images/shoppage/product10.jpg",
    "/images/shoppage/product11.jpg",
    "/images/shoppage/product12.jpg",
  ];

  const [page, setPage] = useState(1);

  const mobileProducts = products.slice((page - 1) * 4, page * 4);

  const desktopProducts = [
    ...products.slice((page - 1) * 4),
    ...products.slice(0, (page - 1) * 4),
  ];

  return (
    <>
      {/* CATEGORY SECTION */}

      <section className="w-full bg-[#FAFAFA] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
            <h1 className="text-[48px] font-bold text-[#252B42] text-center md:text-left">
              Shop
            </h1>

            <div className="flex justify-center md:justify-end gap-2 text-[#737373] mt-6 md:mt-0">
              <span className="text-[#252B42] font-semibold">Home</span>
              <span>&gt;</span>
              <span>Shop</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            {categories.map((image, index) => (
              <div key={index} className="relative w-full md:w-1/5">
                <img
                  src={image}
                  className="w-full md:h-[260px] object-cover"
                  alt="shop category"
                />

                <div className="absolute inset-0">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-[32px] md:text-[24px]">
                    CLOTHS
                  </span>

                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 text-white font-semibold text-[20px] md:text-[16px] whitespace-nowrap">
                    5 Items
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-12 md:px-6">
          {/* TOP BAR */}

          <div className="flex flex-col md:flex-row md:justify-between items-center mb-12 gap-6 relative">
            <p className="text-[#737373] text-[20px] md:text-[16px] font-semibold">
              Showing all 12 results
            </p>

            <div className="flex flex-col gap-4">
              {/* VIEWS */}
              <div className="flex items-center justify-center gap-3 w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:w-auto">
                <span className="text-[#737373] text-[18px] font-semibold">
                  Views:
                </span>

                <button className="border border-[#DDDDDD] p-4 rounded-md">
                  <LayoutGrid size={18} />
                </button>

                <button className="border border-[#DDDDDD] p-4 rounded-md">
                  <List size={18} />
                </button>
              </div>

              {/* FILTER */}
              <div className="flex gap-4">
                <select className="border border-[#DDDDDD] px-6 py-3 text-[16px] text-[#737373] rounded-md">
                  <option>Popularity</option>
                </select>

                <button className="bg-[#23A6F0] text-white px-8 py-3 text-[16px] font-semibold rounded-md">
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE PRODUCTS */}

          <div className="flex flex-col gap-12 md:hidden">
            {mobileProducts.map((image, index) => (
              <ProductCard
                key={index}
                image={image}
                title="Graphic Design"
                department="English Department"
                oldPrice="16.48"
                newPrice="6.48"
              />
            ))}
          </div>

          {/* DESKTOP PRODUCTS */}

          <div className="hidden md:flex md:flex-row md:flex-wrap md:gap-8">
            {desktopProducts.map((image, index) => (
              <div key={index} className="md:w-[calc(25%-1.5rem)]">
                <ProductCard
                  image={image}
                  title="Graphic Design"
                  department="English Department"
                  oldPrice="16.48"
                  newPrice="6.48"
                />
              </div>
            ))}
          </div>

          {/* PAGINATION */}

          <div className="flex justify-center mt-16">
            <div className="flex border border-[#E6E6E6] rounded-md shadow-sm overflow-hidden text-[16px]">
              {/* FIRST */}

              <button
                onClick={() => setPage(1)}
                className={`px-8 py-6 border-r font-semibold ${
                  page === 1 ? "text-[#BDBDBD]" : "text-[#23A6F0]"
                }`}
              >
                First
              </button>

              {/* 1 */}

              <button
                onClick={() => setPage(1)}
                className={`px-6 py-6 border-r font-semibold ${
                  page === 1 ? "bg-[#23A6F0] text-white" : "text-[#23A6F0]"
                }`}
              >
                1
              </button>

              {/* 2 */}

              <button
                onClick={() => setPage(2)}
                className={`px-6 py-6 border-r font-semibold ${
                  page === 2 ? "bg-[#23A6F0] text-white" : "text-[#23A6F0]"
                }`}
              >
                2
              </button>

              {/* 3 */}

              <button
                onClick={() => setPage(3)}
                className={`px-6 py-6 border-r font-semibold ${
                  page === 3 ? "bg-[#23A6F0] text-white" : "text-[#23A6F0]"
                }`}
              >
                3
              </button>

              {/* NEXT */}

              <button
                onClick={() => setPage(page === 3 ? 1 : page + 1)}
                className={`px-8 py-6 font-semibold ${
                  page === 3 ? "text-[#BDBDBD]" : "text-[#23A6F0]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center gap-20 md:flex-row md:justify-between md:gap-8 opacity-70">
            <img
              src="/images/shoppage/logo1.png"
              alt="Hooli"
              className="h-12 md:h-14 object-contain"
            />

            <img
              src="/images/shoppage/logo2.png"
              alt="Lyft"
              className="h-16 md:h-14 object-contain"
            />

            <img
              src="/images/shoppage/logo3.png"
              alt="Brand"
              className="h-20 md:h-14 object-contain"
            />

            <img
              src="/images/shoppage/logo4.png"
              alt="Stripe"
              className="h-14 md:h-14 object-contain"
            />

            <img
              src="/images/shoppage/logo5.png"
              alt="AWS"
              className="h-18 md:h-14 object-contain"
            />

            <img
              src="/images/shoppage/logo6.png"
              alt="Reddit"
              className="h-20 md:h-14 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;
