import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Mail,
  Phone,
  Heart,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col">
      {/* ===== DESKTOP TOP BAR ===== */}
      <div className="hidden md:flex justify-between items-center px-12 py-4 bg-[#252B42] text-white text-[15px]">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          {/* Phone Group */}
          <div className="flex items-center gap-2 font-semibold">
            <Phone size={18} />
            <span>(225) 555-0118</span>
          </div>

          {/* Mail Group */}
          <div className="flex items-center gap-2 font-semibold">
            <Mail size={18} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="font-medium">
          Follow Us and get a chance to win 80% off
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <span className="font-medium">Follow Us :</span>

          <Instagram size={18} />
          <Youtube size={18} />
          <Facebook size={18} />
          <Twitter size={18} />
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="flex justify-between items-center px-8 py-8 md:px-12 md:py-6 bg-white md:bg-[#F9F9F9]">
        {/* LEFT GROUP */}
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="text-[40px] md:text-[28px] font-bold text-[#252B42]">
            Bandage
          </h1>

          {/* MENU */}
          <div className="hidden md:flex ml-44 gap-6 text-[#737373] font-medium text-[18px] items-center">
            <Link to="/" className="hover:text-[#252B42]">
              Home
            </Link>

            <div className="flex items-center gap-1">
              <Link to="/shop" className="hover:text-[#252B42]">
                Shop
              </Link>
              <ChevronDown size={14} className="text-[#737373]" />
            </div>

            <span>About</span>
            <span>Blog</span>
            <span>Contact</span>
            <span>Pages</span>
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="flex items-center gap-6">
          {/* Login */}
          <div className="hidden md:flex items-center gap-2 text-[#23A6F0] font-medium text-[18px]">
            <User size={18} className="text-[#23A6F0]" />
            <span>Login / Register</span>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
            <Search size={20} />

            <div className="flex items-center gap-1">
              <ShoppingCart size={20} />
              <span className="text-[14px] font-semibold">1</span>
            </div>

            <div className="flex items-center gap-1">
              <Heart size={20} />
              <span className="text-[14px] font-semibold">1</span>
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <div
            className="flex flex-col justify-center gap-[6px] md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-[3px] bg-[#252B42] transition-all duration-300 ${
                menuOpen ? "w-8" : "w-8"
              }`}
            />
            <span
              className={`h-[3px] bg-[#252B42] transition-all duration-300 ${
                menuOpen ? "w-6 ml-2" : "w-8"
              }`}
            />
            <span
              className={`h-[3px] bg-[#252B42] transition-all duration-300 ${
                menuOpen ? "w-4 ml-4" : "w-8"
              }`}
            />
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white flex flex-col items-center py-10 gap-10 border-t border-gray-200">
          {/* NAV LINKS */}
          <div className="flex flex-col items-center gap-8 text-[36px] font-medium text-[#737373]">
            <span>Home</span>
            <span>Shop</span>
            <span>About</span>
            <span>Blog</span>
            <span>Contact</span>
            <span>Pages</span>
          </div>

          {/* LOGIN */}
          <div className="flex items-center gap-3 text-[#23A6F0] text-[36px] font-medium">
            <User size={36} />
            <span>Login / Register</span>
          </div>

          {/* ICONS */}
          <div className="flex flex-col items-center gap-6 text-[#23A6F0]">
            <Search size={36} />

            <div className="flex items-center gap-2">
              <ShoppingCart size={36} />
              <span className="text-[16px] font-semibold">1</span>
            </div>

            <div className="flex items-center gap-2">
              <Heart size={36} />
              <span className="text-[16px] font-semibold">1</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
