import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

function ContactPage() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-[50px] font-bold text-slate-800 leading-snug md:text-[40px] md:max-w-[620px]">
          Get answers <br className="md:hidden" />
          to all your <br className="md:hidden" />
          questions.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 text-[25px] leading-relaxed max-w-[300px] md:max-w-[650px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>

        {/* Button */}
        <button className="mt-8 bg-[#23A6F0] text-white text-lg font-semibold px-16 py-5 md:px-14 md:py-4 md:text-md rounded-md hover:opacity-90 transition">
          CONTACT OUR COMPANY
        </button>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-10 text-gray-400">
          <Twitter size={35} />
          <Facebook size={35} />
          <Instagram size={35} />
          <Linkedin size={35} />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
