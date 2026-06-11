import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCar } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#09152C] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-bold text-xl md:text-2xl hover:text-[#00E5FF] transition">
              <FaCar className="text-[#00E5FF]" />
              <span>2i Whitelines<span className="text-[#00E5FF]">.</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Establishing standard comfort, safety, and luxury in automotive rental, sales, and import operations since 2023.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00E5FF] hover:text-[#09152C] flex items-center justify-center transition-all duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00E5FF] hover:text-[#09152C] flex items-center justify-center transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00E5FF] hover:text-[#09152C] flex items-center justify-center transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00E5FF] hover:text-[#09152C] flex items-center justify-center transition-all duration-300">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-l-2 border-[#00E5FF] pl-3">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/rentals" className="text-gray-400 hover:text-[#00E5FF] transition-premium">Vehicle Rentals</Link></li>
              <li><Link to="/sales" className="text-gray-400 hover:text-[#00E5FF] transition-premium">Vehicle Sales</Link></li>
              <li><Link to="/import" className="text-gray-400 hover:text-[#00E5FF] transition-premium">Vehicle Imports</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#00E5FF] transition-premium">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#00E5FF] transition-premium">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-l-2 border-[#00E5FF] pl-3">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Premium Sedans & SUVs</li>
              <li>Corporate & Fleet Leases</li>
              <li>International Automotive Import</li>
              <li>Vehicle Inspection & Warranty</li>
              <li>24/7 Roadside Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-l-2 border-[#00E5FF] pl-3">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center text-gray-400">
                <FaPhone className="mr-3 text-[#00E5FF] flex-shrink-0" />
                <span>+233 (553) 552-490</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 text-[#00E5FF] flex-shrink-0" />
                <span>t2iwhitelines@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="mr-3 text-[#00E5FF] mt-1 flex-shrink-0" />
                <span>Century Road / Zongo Junction<br />Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} 2i Whitelines Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
