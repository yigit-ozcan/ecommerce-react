import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  // 🔥 CRASH FIX
  if (!product || !product.image) return null;

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex flex-col items-center text-center cursor-pointer"
    >
      <div className="w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[670px] md:h-[400px] object-cover object-top"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <h3 className="font-semibold text-[#252B42]">{product.title}</h3>

        <p className="text-[#737373]">{product.department}</p>

        <div className="flex gap-2 justify-center font-semibold">
          <span className="text-[#BDBDBD]">${product.oldPrice}</span>
          <span className="text-[#2DC071]">${product.newPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
