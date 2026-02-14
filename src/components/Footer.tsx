import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#4DA3FF]">2i Whitelines</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in automotive excellence since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#4DA3FF] transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4DA3FF] transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4DA3FF] transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4DA3FF] transition">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/rentals" className="text-gray-300 hover:text-[#4DA3FF] transition">Vehicle Rentals</Link></li>
              <li><Link to="/sales" className="text-gray-300 hover:text-[#4DA3FF] transition">Vehicle Sales</Link></li>
              <li><Link to="/import" className="text-gray-300 hover:text-[#4DA3FF] transition">Vehicle Imports</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#4DA3FF] transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#4DA3FF] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Daily & Weekly Rentals</li>
              <li className="text-gray-300">Corporate Leasing</li>
              <li className="text-gray-300">Premium Vehicle Sales</li>
              <li className="text-gray-300">International Imports</li>
              <li className="text-gray-300">24/7 Roadside Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <FaPhone className="mr-3 text-[#4DA3FF]" />
                <span>+233 (553) 552-490</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-[#4DA3FF]" />
                <span>t2iwhitelines@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-[#4DA3FF] mt-1" />
                <span>century road / Zongo junction<br />Accra Ghana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} 2i Whitelines Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
