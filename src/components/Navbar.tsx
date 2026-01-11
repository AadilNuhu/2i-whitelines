import { useState } from "react";
// import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A1F44] backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-bold text-white text-md md:text-xl">
            {/* <img
            //   src={logo}
              alt="Company logo"
              className="
                h-16 w-auto object-contain
                scale-115
            "
            /> */}
            2i Whitelines
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-md font-medium text-shadow-xs text-white">
            <a href="/" className="hover:text-[#4DA3FF] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#4DA3FF] transition">
              Rentals
            </a>
            <a href="#about" className="hover:text-[#4DA3FF] transition">
              Sales
            </a>
            <a href="#about" className="hover:text-[#4DA3FF] transition">
              Import
            </a>
            <a href="#service" className="hover:text-[#4DA3FF] transition">
              About Us
            </a>
          </div>

          <a href="#contact" className="bg-[#4DA3FF] hidden md:flex text-white font-medium px-4 py-2 rounded-full hover:bg-blue-500 transition">
              Contact
            </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-900 focus:outline-none"
          >
            <div className="space-y-1.5 cursor-pointer">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col items-center pt-2 space-y-4 text-sm font-medium text-white">
          <a href="/" className="block hover:text-neutral-900 transition">
            Home
          </a>
          <a href="/rentals" className="block hover:text-neutral-900 transition">
            Rentals
          </a>
          <a href="/sales" className="block hover:text-neutral-900 transition">
            Sales
          </a>
          <a href="/import" className="block hover:text-neutral-900 transition">
            Import
          </a>
          <a href="/about" className="block hover:text-neutral-900 transition">
            About Us
          </a>
          <a href="/contact" className="block bg-[#4DA3FF] p-2 rounded-full text-center w-20 hover:text-neutral-900 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;