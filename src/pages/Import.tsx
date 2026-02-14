import { useState } from 'react'
import { FaGlobe, FaShip, FaPlane, FaCheckCircle, FaClock } from 'react-icons/fa'

const Import = () => {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    origin: '',
    destination: '',
    budget: ''
  })

  const services = [
    {
      id: 'sea',
      title: 'Sea Freight',
      icon: FaShip,
      duration: '4-6 weeks',
      price: 'Most economical',
      features: ['Large capacity', 'Cost-effective', 'Insurance included', 'Door-to-port delivery'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop'
    },
    {
      id: 'air',
      title: 'Air Freight',
      icon: FaPlane,
      duration: '3-7 days',
      price: 'Premium',
      features: ['Fastest delivery', 'Secure handling', 'Real-time tracking', 'Airport pickup'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a139cc91?w=400&h=250&fit=crop'
    },
    {
      id: 'full',
      title: 'Full Service',
      icon: FaGlobe,
      duration: '2-4 weeks',
      price: 'All-inclusive',
      features: ['Complete documentation', 'Customs clearance', 'Registration', 'Home delivery'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop'
    }
  ]

  const steps = [
    { number: 1, title: 'Vehicle Selection', description: 'Choose your dream car from global markets', image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=300&h=200&fit=crop' },
    { number: 2, title: 'Documentation', description: 'We handle all paperwork and requirements', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop' },
    { number: 3, title: 'Shipping', description: 'Safe and secure transportation', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
    { number: 4, title: 'Delivery', description: 'Receive your vehicle at your doorstep', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88f?w=300&h=200&fit=crop' }
  ]

  const featuredImports = [
    {
      name: 'Toyota Supra 2023',
      origin: 'Japan',
      price: '$52,000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88f?w=300&h=200&fit=crop'
    },
    {
      name: 'Mercedes-Benz G-Class 2023',
      origin: 'Germany',
      price: '$145,000',
      image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=300&h=200&fit=crop'
    },
    {
      name: 'Ferrari F8 Tributo 2022',
      origin: 'Italy',
      price: '$280,000',
      image: 'https://images.unsplash.com/photo-1617654112369-9a3b7c476c30?w=300&h=200&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Import Services</h1>
          <p className="text-xl text-gray-200">Import your dream vehicle from anywhere in the world</p>
        </div>
      </div>

      {/* Featured Imports */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-12">Popular Imports This Month</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredImports.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">From {vehicle.origin}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#4DA3FF]">{vehicle.price}</span>
                  <button className="bg-[#4DA3FF] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute top-2 left-2 w-8 h-8 bg-[#4DA3FF] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-12">Choose Your Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="text-4xl text-[#4DA3FF] mb-4">
                    <service.icon />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-600"><FaClock className="inline mr-1" />{service.duration}</span>
                    <span className="text-green-600 font-medium">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full py-3 rounded-lg font-medium transition ${
                      selectedService === service.id
                        ? 'bg-[#4DA3FF] text-white'
                        : 'border border-[#4DA3FF] text-[#4DA3FF] hover:bg-blue-50'
                    }`}
                  >
                    Select Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">Get a Quote</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                >
                  <option value="">Select vehicle type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="sports">Sports Car</option>
                  <option value="luxury">Luxury Vehicle</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Origin Country</label>
                <input
                  type="text"
                  value={formData.origin}
                  onChange={(e) => setFormData({...formData, origin: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                >
                  <option value="">Select budget</option>
                  <option value="0-25000">$0 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000+">$100,000+</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#4DA3FF] text-white py-3 rounded-lg hover:bg-blue-500 transition">
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Import
