import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { LayoutGrid, List } from "lucide-react";
import products from "../data/products"; // ✅ EKLENDİ

function ShopPage() {
  const categories = [
    "/images/shoppage/shop1.png",
    "/images/shoppage/shop2.png",
    "/images/shoppage/shop3.png",
    "/images/shoppage/shop4.png",
    "/images/shoppage/shop5.jpg",
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
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-12 gap-6 relative">
            <p className="text-[#737373] text-[20px] md:text-[16px] font-semibold">
              Showing all 12 results
            </p>

            <div className="flex flex-col gap-4">
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

          {/* MOBILE */}
          <div className="flex flex-col gap-12 md:hidden">
            {mobileProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex md:flex-row md:flex-wrap md:gap-8">
            {desktopProducts.map((product) => (
              <div key={product.id} className="md:w-[calc(25%-1.5rem)]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;
