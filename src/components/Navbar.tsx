import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaCar } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rentals", path: "/rentals" },
    { name: "Sales", path: "/sales" },
    { name: "Import", path: "/import" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#050B14] text-xs text-gray-400 border-b border-white/5 py-2 px-6 hidden md:block fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <FaPhone className="text-[#00E5FF] mr-2" /> +233 (553) 552-490
            </span>
            <span className="flex items-center">
              <FaMapMarkerAlt className="text-[#00E5FF] mr-2" /> Accra, Ghana
            </span>
          </div>
          <div>
            <span className="text-gray-500">Premium Automotive Partner</span>
          </div>
        </div>
      </div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 md:top-8 left-0 w-full z-45 bg-[#0A1F44]/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 font-bold text-white text-lg md:text-2xl hover:text-[#00E5FF] transition-premium group">
              <FaCar className="text-[#00E5FF] group-hover:rotate-12 transition-transform duration-300" />
              <span>
                2i Whitelines<span className="text-[#00E5FF]">.</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-md font-medium text-white">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`relative py-2 transition-premium ${isActive(link.path) ? 'text-[#00E5FF]' : 'hover:text-[#00E5FF] text-gray-300'}`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E5FF]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="bg-[#00E5FF] hidden md:flex text-[#09152C] font-semibold px-6 py-2.5 rounded-full hover:bg-white hover:shadow-glow transition-premium"
            >
              Contact Us
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden text-white focus:outline-none p-2"
            >
              <div className="space-y-2 cursor-pointer">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "transform rotate-45 translate-y-2.5" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "transform -rotate-45 -translate-y-2.5" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#0A1F44] border-t border-white/5"
            >
              <div className="px-6 py-8 flex flex-col items-center space-y-5 text-lg font-medium text-white">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`block w-full text-center py-2 transition-premium ${isActive(link.path) ? 'text-[#00E5FF]' : 'hover:text-[#00E5FF] text-gray-300'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="block bg-[#00E5FF] text-[#09152C] font-semibold p-3 rounded-full text-center w-full max-w-xs hover:bg-white transition-premium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Spacer to push content below fixed header */}
      <div className="h-20 md:h-28" />
    </>
  );
};

export default Navbar;