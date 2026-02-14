import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A1F44] backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-white text-md md:text-xl hover:text-[#4DA3FF] transition">
            2i Whitelines
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-md font-medium text-shadow-xs text-white">
            <Link 
              to="/" 
              className={`transition ${isActive('/') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            >
              Home
            </Link>
            <Link 
              to="/rentals" 
              className={`transition ${isActive('/rentals') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            >
              Rentals
            </Link>
            <Link 
              to="/sales" 
              className={`transition ${isActive('/sales') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            >
              Sales
            </Link>
            <Link 
              to="/import" 
              className={`transition ${isActive('/import') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            >
              Import
            </Link>
            <Link 
              to="/about" 
              className={`transition ${isActive('/about') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            >
              About Us
            </Link>
          </div>

          <Link 
            to="/contact" 
            className="bg-[#4DA3FF] hidden md:flex text-white font-medium px-4 py-2 rounded-full hover:bg-blue-500 transition"
          >
            Contact
          </Link>

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
          <Link 
            to="/" 
            className={`block transition ${isActive('/') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/rentals" 
            className={`block transition ${isActive('/rentals') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            onClick={() => setIsOpen(false)}
          >
            Rentals
          </Link>
          <Link 
            to="/sales" 
            className={`block transition ${isActive('/sales') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            onClick={() => setIsOpen(false)}
          >
            Sales
          </Link>
          <Link 
            to="/import" 
            className={`block transition ${isActive('/import') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            onClick={() => setIsOpen(false)}
          >
            Import
          </Link>
          <Link 
            to="/about" 
            className={`block transition ${isActive('/about') ? 'text-[#4DA3FF]' : 'hover:text-[#4DA3FF]'}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block bg-[#4DA3FF] p-2 rounded-full text-center w-20 hover:bg-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;