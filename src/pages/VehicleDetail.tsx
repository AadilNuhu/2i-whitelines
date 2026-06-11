import { useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { FaCar, FaUsers, FaGasPump, FaCalendarAlt, FaStar, FaPhone, FaEnvelope, FaArrowLeft, FaCheckCircle, FaWhatsapp, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'

const VehicleDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const type = location.pathname.includes('/sales') ? 'sales' : 'rentals'

  // State for inquiry modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    contactMethod: 'WhatsApp',
    interest: type === 'sales' ? 'Purchase' : 'Rental',
    startDate: '',
    endDate: '',
    message: ''
  });

  const rentalVehicles = [
    {
      id: '1',
      name: 'Toyota Camry 2023',
      category: 'sedan',
      price: 65,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop',
      seats: 5,
      fuel: 'Hybrid',
      transmission: 'Automatic',
      rating: 4.8,
      available: true,
      year: 2023,
      mileage: 15000,
      description: 'Experience the perfect blend of comfort and efficiency with the Toyota Camry. This hybrid sedan offers exceptional fuel economy, advanced safety features, and a spacious interior perfect for both daily commutes and long road trips.',
      features: ['Hybrid Engine', 'Apple CarPlay', 'Android Auto', 'Lane Assist', 'Adaptive Cruise Control', 'Blind Spot Monitor'],
      insurance: 'Included',
      deposit: 500
    },
    {
      id: '2',
      name: 'Honda CR-V 2023',
      category: 'suv',
      price: 85,
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=450&fit=crop',
      seats: 7,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      rating: 4.7,
      available: true,
      year: 2023,
      mileage: 12000,
      description: 'The Honda CR-V is the perfect family SUV with ample space, advanced safety features, and excellent reliability. Ideal for family adventures and daily driving.',
      features: ['7-Seater', 'AWD System', 'Honda Sensing', 'Leather Seats', 'Panoramic Roof', 'Wireless Charging'],
      insurance: 'Included',
      deposit: 750
    },
    {
      id: '3',
      name: 'Tesla Model 3 2023',
      category: 'electric',
      price: 120,
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=450&fit=crop',
      seats: 5,
      fuel: 'Electric',
      transmission: 'Automatic',
      rating: 4.9,
      available: true,
      year: 2023,
      mileage: 8000,
      description: 'Step into the future with the Tesla Model 3. Experience cutting-edge electric technology, autopilot capabilities, and minimal environmental impact without compromising on performance.',
      features: ['Autopilot', '15" Touchscreen', 'Premium Audio', 'Supercharging Access', 'Mobile App Control', 'Zero Emissions'],
      insurance: 'Included',
      deposit: 1000
    }
  ]

  const salesVehicles = [
    {
      id: '1',
      name: 'Mercedes-Benz C-Class 2023',
      brand: 'mercedes',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=450&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      rating: 4.8,
      available: true,
      year: 2023,
      mileage: 15000,
      description: 'The Mercedes-Benz C-Class represents the pinnacle of luxury compact sedans, combining elegant design with cutting-edge technology and exceptional performance.',
      features: ['MBUX System', 'Burmester Audio', 'AMG Line', 'Panoramic Sunroof', 'Ambient Lighting', 'Wireless Charging'],
      condition: 'Excellent',
      vin: 'WDD2134B1JB123456',
      warranty: '4 years/50,000 miles'
    }
  ]

  const vehicle = type === 'sales' 
    ? salesVehicles.find(v => v.id === id) 
    : rentalVehicles.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[#050B14] pt-24 flex items-center justify-center text-gray-200">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-6">Vehicle Not Found</h1>
          <Link to={`/${type}`} className="bg-[#00E5FF] text-[#09152C] px-6 py-3 rounded-full font-bold hover:bg-white transition">
            Back to {type === 'sales' ? 'Sales' : 'Rentals'}
          </Link>
        </div>
      </div>
    )
  }

  // Pre-filled WhatsApp string builder
  const getWhatsAppLink = (data: typeof formData) => {
    const baseUrl = "https://wa.me/233553552490";
    const text = `*New Lead from 2i Whitelines Website*
----------------------------------
*Customer Info:*
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}
- Location: ${data.location}
- Preferred Contact: ${data.contactMethod}
- Interest: ${data.interest}
${data.startDate ? `- Rental Start: ${data.startDate}` : ''}
${data.endDate ? `- Rental End: ${data.endDate}` : ''}

*Vehicle Info:*
- Vehicle: ${vehicle.name}
- Vehicle ID: ${vehicle.id}
- Price: ${type === 'rentals' ? `$${vehicle.price}/day` : `$${vehicle.price.toLocaleString()}`}
- Category: ${type}
- URL: ${window.location.href}

*Message:*
"${data.message || 'No additional message.'}"`;

    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const triggerEmailComposition = () => {
    const subject = `Inquiry: ${vehicle.name} - ${formData.fullName}`;
    const body = `Customer Information:\n-----------------\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nPreferred Contact: ${formData.contactMethod}\nInterest: ${formData.interest}\n${formData.startDate ? `Rental Dates: ${formData.startDate} to ${formData.endDate}\n` : ''}\nVehicle Details:\n---------------\nVehicle Name: ${vehicle.name}\nVehicle ID: ${vehicle.id}\nPrice: ${type === 'rentals' ? `$${vehicle.price}/day` : `$${vehicle.price.toLocaleString()}`}\nURL: ${window.location.href}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:t2iwhitelines@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link to={`/${type}`} className="inline-flex items-center text-gray-400 hover:text-[#00E5FF] transition-premium text-sm">
          <FaArrowLeft className="mr-2" /> Back to {type === 'sales' ? 'Sales Fleet' : 'Rentals Fleet'}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery Image */}
            <div className="bg-[#0F2143]/30 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-[300px] md:h-[480px] object-cover hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#09152C]/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#00E5FF]">
                {type}
              </div>
            </div>

            {/* Title & Core Details */}
            <div className="bg-[#0F2143]/20 border border-white/5 p-8 rounded-3xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white">{vehicle.name}</h1>
                  <div className="flex items-center mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(vehicle.rating) ? 'mr-0.5' : 'text-gray-700 mr-0.5'} />
                    ))}
                    <span className="text-gray-400 text-xs ml-2 font-semibold">({vehicle.rating} / 5.0 Rating)</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block text-left md:text-right">Price Value</span>
                  <span className="text-3xl font-extrabold text-[#00E5FF]">
                    {type === 'rentals' ? `$${vehicle.price}/day` : `$${vehicle.price.toLocaleString()}`}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Overview</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{vehicle.description}</p>
              </div>

              {/* Specs Table */}
              <div className="border-t border-white/5 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="bg-[#0F2143]/30 p-4 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Model Year</span>
                    <span className="text-white font-bold text-sm flex items-center gap-2">
                      <FaCalendarAlt className="text-[#00E5FF]" /> {vehicle.year}
                    </span>
                  </div>
                  <div className="bg-[#0F2143]/30 p-4 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Seats Capacity</span>
                    <span className="text-white font-bold text-sm flex items-center gap-2">
                      <FaUsers className="text-[#00E5FF]" /> {vehicle.seats} Seater
                    </span>
                  </div>
                  <div className="bg-[#0F2143]/30 p-4 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Fuel Category</span>
                    <span className="text-white font-bold text-sm flex items-center gap-2">
                      <FaGasPump className="text-[#00E5FF]" /> {vehicle.fuel}
                    </span>
                  </div>
                  <div className="bg-[#0F2143]/30 p-4 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Transmission</span>
                    <span className="text-white font-bold text-sm flex items-center gap-2">
                      <FaCar className="text-[#00E5FF]" /> {vehicle.transmission}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="border-t border-white/5 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <FaCheckCircle className="text-[#00E5FF] mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Trigger Box */}
          <div className="lg:col-span-1">
            <div className="bg-[#0F2143]/30 border border-white/5 rounded-3xl p-6 sticky top-28 space-y-6">
              <div className="text-center">
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider block">Estimated Value</span>
                <span className="text-4xl font-extrabold text-white block mt-1">
                  {type === 'rentals' ? `$${vehicle.price}` : `$${vehicle.price.toLocaleString()}`}
                </span>
                <span className="text-gray-400 text-xs block mt-1">
                  {type === 'rentals' ? 'Per day rate' : 'Total market cost'}
                </span>
              </div>

              <div className="space-y-3 border-t border-white/5 pt-6">
                {type === 'rentals' ? (
                  <Link 
                    to={`/rentals/${id}/book`}
                    className="w-full bg-[#00E5FF] hover:bg-white hover:shadow-glow text-[#09152C] py-3.5 rounded-xl font-bold transition-premium text-center block text-sm"
                  >
                    Reserve Online
                  </Link>
                ) : null}
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full border border-white/20 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 text-white py-3.5 rounded-xl font-bold transition-premium text-center block text-sm cursor-pointer"
                >
                  Contact Seller
                </button>
              </div>

              <div className="border-t border-white/5 pt-6 text-xs text-gray-400 space-y-3">
                <span className="font-semibold text-white block mb-1">Direct Assistance</span>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#00E5FF]" />
                  <span>+233 (553) 552-490</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#00E5FF]" />
                  <span>t2iwhitelines@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#00E5FF] mt-0.5" />
                  <span>Century Road / Zongo Junction, Accra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-lg bg-[#0F2143] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            {!isSuccess ? (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Submit Inquiry</h3>
                <p className="text-gray-400 text-xs mb-6">
                  Inquire about the *{vehicle.name}*. Fill in the details below.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-semibold">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-semibold">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233..."
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-semibold">Your Location *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Accra, Ghana"
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-semibold">Contact Preference</label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  {type === 'rentals' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1 font-semibold">Desired Start Date</label>
                        <input 
                          type="date" 
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1 font-semibold">Desired End Date</label>
                        <input 
                          type="date" 
                          value={formData.endDate}
                          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Additional Message</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter specifications or questions..."
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#00E5FF] hover:bg-white text-[#09152C] py-3.5 rounded-xl font-bold transition-premium cursor-pointer text-sm mt-2"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Submitted!</h3>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto">
                    Your interest in the *{vehicle.name}* has been logged. Let's send the details to our team now.
                  </p>
                </div>

                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <a 
                    href={getWhatsAppLink(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm"
                  >
                    <FaWhatsapp className="text-lg" /> Send via WhatsApp
                  </a>

                  <button 
                    onClick={triggerEmailComposition}
                    className="bg-[#00E5FF] hover:bg-white text-[#09152C] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm"
                  >
                    <FaEnvelope className="text-lg" /> Open Email Client
                  </button>
                </div>
                
                <button
                  onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
                  className="text-gray-500 hover:text-white text-xs underline block mx-auto pt-4"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default VehicleDetail
