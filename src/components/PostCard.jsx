import { Clock, ChartArea, ChevronRight } from "lucide-react";

function PostCard({
  imageDesktop,
  imageMobile,
  title,
  description,
  date,
  comments,
}) {
  return (
    <div className="bg-white border border-[#E6E6E6] shadow-sm">
      {/* IMAGE */}
      <div className="relative">
        {/* Mobile Image */}
        <img
          src={imageMobile}
          alt={title}
          className="w-full h-[500px] object-cover md:hidden"
        />

        {/* Desktop Image */}
        <img
          src={imageDesktop}
          alt={title}
          className="hidden md:block w-full h-[400px] object-cover"
        />

        <span className="absolute top-8 left-8 bg-[#E74040] text-white text-[22px] px-6 py-1 font-semibold rounded-sm">
          NEW
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-10 flex flex-col gap-4">
        {/* META */}
        <div className="flex gap-8 text-[16px] md:text-[18px] text-[#737373]">
          <span className="text-[#23A6F0]">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        {/* TITLE */}
        <h3 className="text-[28px] md:text-[28px] font-semibold text-[#252B42] leading-[1.4]">
          Loudest à la Madison #1
          <span className="block"> (L'integral)</span>
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[22px] text-[#737373] leading-[1.6] font-semibold">
          {description}
        </p>

        {/* DATE + COMMENTS */}
        <div className="flex justify-between text-[12px] md:text-[14px] text-[#737373] pt-2">
          <div className="flex items-center gap-2">
            <Clock size={25} className="text-[#23A6F0]" />
            <span className="text-[16px]">{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <ChartArea size={25} className="text-[#2DC071]" />
            <span className="text-[16px]">{comments} comments</span>
          </div>
        </div>

        {/* LINK */}
        <button className="text-[#737373] text-[22px] font-semibold flex items-center gap-2 pt-2">
          Learn More
          <ChevronRight size={30} className="text-[#23A6F0] mt-[2px]" />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
