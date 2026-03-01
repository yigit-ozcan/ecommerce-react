import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#F9F9F9] text-[#737373] text-[22px] md:text-[18px] font-semibold">
      {/* ===== MAIN CONTAINER ===== */}
      <div className="max-w-[1500px] mx-auto px-12 md:px-16 py-14">
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <h2 className="text-[36px] md:text-[32px] font-bold text-[#252B42]">
            Bandage
          </h2>

          <div className="flex gap-6 md:gap-4 text-[#23A6F0]">
            <Facebook size={28} className="md:w-8 md:h-8" />
            <Instagram size={28} className="md:w-8 md:h-8" />
            <Twitter size={28} className="md:w-8 md:h-8" />
          </div>
        </div>

        {/* Divider Desktop */}
        <div className="hidden md:block h-px bg-gray-200 my-12"></div>

        {/* ===== LINKS SECTION ===== */}
        <div className="flex flex-col gap-14 mt-14 md:mt-12 md:flex-row md:justify-between md:gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-[#252B42] text-[24px] md:text-[18px] font-semibold">
              Company Info
            </h3>
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[#252B42] text-[24px] md:text-[18px] font-semibold">
              Legal
            </h3>
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[#252B42] text-[24px] md:text-[18px] font-semibold">
              Features
            </h3>
            <span>Business Marketing</span>
            <span>User Analytic</span>
            <span>Live Chat</span>
            <span>Unlimited Support</span>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[#252B42] text-[24px] md:text-[18px] font-semibold">
              Resources
            </h3>
            <span>IOS & Android</span>
            <span>Watch a Demo</span>
            <span>Customers</span>
            <span>API</span>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[#252B42] text-[24px] md:text-[18px] font-semibold">
              Get In Touch
            </h3>

            <div className="flex md:max-w-[300px]">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-4 border border-gray-300 rounded-l-md outline-none"
              />
              <button className="px-8 md:px-6 bg-[#23A6F0] text-white rounded-r-md">
                Subscribe
              </button>
            </div>

            <span className="text-[16px] md:text-[13px]">
              Lore im sum dolor Amit
            </span>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-[#F1F1F1] py-8 md:py-6">
        <div className="max-w-[1500px] mx-auto px-12 md:px-16 font-bold text-[18px] md:text-[18px] text-[#737373] text-center md:text-left">
          <span>
            Made With Love By
            <span className="block md:inline"> Finland All Right Reserved</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
