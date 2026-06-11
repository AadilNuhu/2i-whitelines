import { useState } from 'react'

import { FaGlobe, FaShip, FaPlane, FaCheckCircle, FaClock, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Import = () => {
  const [selectedService, setSelectedService] = useState('full')
  const [isQuoted, setIsQuoted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'suv',
    origin: '',
    budget: '50000-100000',
    message: ''
  })

  const services = [
    {
      id: 'sea',
      title: 'Sea Freight',
      icon: FaShip,
      duration: '4-6 weeks',
      price: 'Most economical option',
      features: ['Secure container shipping', 'Port-to-port logistics', 'Customs documentation prep', 'Complete marine insurance'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
    },
    {
      id: 'air',
      title: 'Air Freight',
      icon: FaPlane,
      duration: '3-7 days',
      price: 'Premium priority delivery',
      features: ['Fastest transit available', 'High-security transport protocols', 'Real-time transit reports', 'Airport customs coordination'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a139cc91?w=600&h=400&fit=crop'
    },
    {
      id: 'full',
      title: 'Full Service Import',
      icon: FaGlobe,
      duration: '2-4 weeks',
      price: 'Comprehensive all-inclusive',
      features: ['Source verification checks', 'Port clearing & duty clearance', 'Accra local registration', 'Home terminal delivery'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop'
    }
  ]

  const steps = [
    { number: 1, title: 'Selection', description: 'Choose your desired model from global auto auctions.', image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=300&h=200&fit=crop' },
    { number: 2, title: 'Verification', description: 'We run physical inspection & export documentation.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop' },
    { number: 3, title: 'Transit Logistics', description: 'Safe shipping via selected container cargo.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
    { number: 4, title: 'Delivery', description: 'Clearing at port, local registration & keys handover.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88f?w=300&h=200&fit=crop' }
  ]

  const featuredImports = [
    {
      name: 'Toyota Supra 2023',
      origin: 'Japan Auto Ports',
      price: '$52,000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88f?w=400&h=250&fit=crop'
    },
    {
      name: 'Mercedes-Benz G-Class 2023',
      origin: 'Germany Bremerhaven',
      price: '$145,000',
      image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=400&h=250&fit=crop'
    },
    {
      name: 'Ferrari F8 Tributo 2022',
      origin: 'Italy Genoa Port',
      price: '$280,000',
      image: 'https://images.unsplash.com/photo-1617654112369-9a3b7c476c30?w=400&h=250&fit=crop'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsQuoted(true)
  }

  const getWhatsAppLink = () => {
    const text = `*New Import Quote Inquiry from 2i Whitelines Web*
---------------------------------------------
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service Type: ${selectedService.toUpperCase()}
- Vehicle Category: ${formData.vehicleType.toUpperCase()}
- Origin Country: ${formData.origin}
- Budget Range: ${formData.budget}

*Message:*
"${formData.message || 'No additional specifications'}"`;

    return `https://wa.me/233553552490?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const subject = `Import Quote Request: ${formData.vehicleType} - ${formData.name}`;
    const body = `Customer Info:\n---------------\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nImport Requirements:\n---------------------\nService Type: ${selectedService}\nVehicle Interest: ${formData.vehicleType}\nOrigin Country: ${formData.origin}\nBudget Limit: ${formData.budget}\n\nClient Notes:\n${formData.message}`;

    return `mailto:t2iwhitelines@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#09152C] to-[#0A1F44] border-b border-white/5 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider block mb-2">Global Transit</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Vehicle Imports</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Import your desired automobile from European, American, or Asian auto auctions with full clearing security.
          </p>
        </div>
      </div>

      {/* Popular Imports Showcase */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Recent Cargo Log</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Delivered Imports</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredImports.map((vehicle, index) => (
            <div key={index} className="bg-[#0F2143]/30 border border-white/5 rounded-2xl overflow-hidden hover:border-[#00E5FF]/20 transition-premium">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                <p className="text-xs text-[#00E5FF] font-semibold mb-4">Cleared from: {vehicle.origin}</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-gray-500">Declared Value</span>
                  <span className="text-2xl font-extrabold text-white">{vehicle.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="bg-[#09152C]/40 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Step-by-step Log</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Our Import Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#0F2143]/20 border border-white/5 p-5 rounded-2xl relative">
                <div className="relative mb-4 overflow-hidden h-32 rounded-xl border border-white/10">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 w-7 h-7 bg-[#00E5FF] text-[#09152C] rounded-full flex items-center justify-center text-xs font-bold shadow-glow">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cargo Options */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Logistics Setup</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Freight Transport Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-[#0F2143]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#00E5FF]/20 transition-premium flex flex-col justify-between">
              <div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <span className="text-gray-400"><FaClock className="inline mr-1 text-[#00E5FF]" />{service.duration}</span>
                    <span className="text-green-400 font-semibold">{service.price}</span>
                  </div>
                  <ul className="space-y-2.5 mb-6 text-xs text-gray-400">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-[#00E5FF] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 border-t border-white/5">
                <button 
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-premium ${
                    selectedService === service.id
                      ? 'bg-[#00E5FF] text-[#09152C] shadow-glow'
                      : 'border border-white/10 text-white hover:bg-white/5'
                  }`}
                >
                  {selectedService === service.id ? 'Selected Scheme' : 'Select Service'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote request form */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-[#0F2143]/30 border border-white/10 rounded-3xl p-8 relative">
          {!isQuoted ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">Request Custom Import Quote</h2>
              <p className="text-gray-400 text-xs mb-8">
                Provide vehicle specifications and target origin details to get standard freight clearing estimations.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+233..."
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Vehicle Interest</label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    >
                      <option value="sedan">Luxury Sedan</option>
                      <option value="suv">Premium SUV</option>
                      <option value="sports">Coupe / Sports car</option>
                      <option value="pickup">Offroad Pickup</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Origin Ports Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.origin}
                      onChange={(e) => setFormData({...formData, origin: e.target.value})}
                      placeholder="e.g. USA, Germany, Japan"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    >
                      <option value="0-25000">Under $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000-100000">$50,000 - $100,000</option>
                      <option value="100000+">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-semibold">Specific vehicle model details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="e.g. 2022 Ford Raptor Crew Cab Raptor package"
                    className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#00E5FF] hover:bg-white text-[#09152C] py-3.5 rounded-xl font-bold transition-premium cursor-pointer text-sm"
                >
                  Generate Quote Request
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-2xl animate-pulse">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Request Pre-Compiled</h3>
                <p className="text-gray-400 text-sm max-w-sm mx-auto">
                  We have prepared the quote specs. Send it to our agents to begin port assessments.
                </p>
              </div>
              <div className="flex flex-col gap-3 max-w-xs mx-auto">
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm"
                >
                  <FaWhatsapp className="text-lg" /> Send specs on WhatsApp
                </a>

                <a 
                  href={getEmailLink()}
                  className="bg-[#00E5FF] hover:bg-white text-[#09152C] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm text-center"
                >
                  <FaEnvelope className="text-lg" /> Email Specifications
                </a>
              </div>
              <button 
                onClick={() => setIsQuoted(false)}
                className="text-gray-500 hover:text-white text-xs underline block mx-auto pt-4"
              >
                Modify specs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Import
