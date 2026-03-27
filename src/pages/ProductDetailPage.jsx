import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { Heart, ShoppingCart, Eye } from "lucide-react";

function ProductDetailPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);

  if (!product) return <div>Not found</div>;

  return (
    <section className="w-full bg-[#FAFAFA] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT */}
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={product.images[currentImage]}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="flex gap-4 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrentImage(i)}
                  className="w-20 h-20 object-cover cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-[24px] font-semibold">{product.title}</h1>

            <div className="flex gap-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span>10 Reviews</span>
            </div>

            <h2 className="text-[28px] font-bold">${product.newPrice}</h2>

            <p>
              Availability : <span className="text-[#23A6F0]">In Stock</span>
            </p>

            <p>{product.description}</p>

            <div className="flex gap-3">
              <span className="w-6 h-6 bg-blue-500 rounded-full" />
              <span className="w-6 h-6 bg-green-500 rounded-full" />
              <span className="w-6 h-6 bg-orange-500 rounded-full" />
              <span className="w-6 h-6 bg-black rounded-full" />
            </div>

            <div className="flex gap-4 mt-4">
              <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md">
                Select Options
              </button>

              <button className="border p-3 rounded-full">
                <Heart size={18} />
              </button>

              <button className="border p-3 rounded-full">
                <ShoppingCart size={18} />
              </button>

              <button className="border p-3 rounded-full">
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
