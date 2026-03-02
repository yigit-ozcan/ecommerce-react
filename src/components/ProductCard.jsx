function ProductCard({ image, title, department, oldPrice, newPrice }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[670px] md:h-[400px] object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col gap-2">
        <h3 className="font-semibold text-[#252B42] text-[20px] md:text-[16px]">
          {title}
        </h3>

        <p className="text-[#737373] text-[18px] md:text-[14px] font-semibold">
          {department}
        </p>

        <div className="flex gap-2 justify-center text-[20px] md:text-[14px] font-semibold">
          <span className="text-[#BDBDBD]">${oldPrice}</span>
          <span className="text-[#2DC071]">${newPrice}</span>
        </div>

        {/* Color Dots */}
        <div className="flex justify-center gap-2 mt-2">
          <span className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-[#23A6F0]" />
          <span className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-[#23856D]" />
          <span className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-[#E77C40]" />
          <span className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
