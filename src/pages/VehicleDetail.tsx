import { useParams, Link } from 'react-router-dom'
import { FaCar, FaUsers, FaGasPump, FaCalendarAlt, FaStar, FaPhone, FaEnvelope, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

const VehicleDetail = () => {
  const { id, type } = useParams()

  // Mock vehicle data - in real app this would come from API
  const getVehicleData = () => {
    const rentalVehicles = [
      {
        id: '1',
        name: 'Toyota Camry 2023',
        category: 'sedan',
        price: 65,
        image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=800&h=450&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1549394786-7dc5f4395c1c?w=800&h=450&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1554218811-9e0d7d10b6a4?w=800&h=450&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=800&h=450&fit=crop',
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

    if (type === 'sales') {
      return salesVehicles.find(v => v.id === id)
    }
    return rentalVehicles.find(v => v.id === id)
  }

  const vehicle = getVehicleData()

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Vehicle Not Found</h1>
          <Link to={`/${type}`} className="bg-[#4DA3FF] text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
            Back to {type === 'sales' ? 'Sales' : 'Rentals'}
          </Link>
        </div>
      </div>
    )
  }

  const handleBookNow = () => {
    // Navigate to booking page
    window.location.href = `/rentals/${id}/book`
  }

  const handleContactSeller = () => {
    // In a real app, this would open contact form or initiate contact
    alert(`Contact seller about ${vehicle.name} - Opening contact form...`)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link to={`/${type}`} className="flex items-center text-gray-600 hover:text-[#4DA3FF] transition">
          <FaArrowLeft className="mr-2" />
          Back to {type === 'sales' ? 'Sales' : 'Rentals'}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Vehicle Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-[#0A1F44] mb-4">{vehicle.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(vehicle.rating) ? '' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-gray-600">{vehicle.rating} (128 reviews)</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{vehicle.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <FaCar className="mr-2 text-[#4DA3FF]" />
                    <span>{vehicle.year} Model</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaUsers className="mr-2 text-[#4DA3FF]" />
                    <span>{vehicle.seats} Seats</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaGasPump className="mr-2 text-[#4DA3FF]" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="mr-2 text-[#4DA3FF]" />
                    <span>{vehicle.mileage.toLocaleString()} miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-24">
              <div className="text-center mb-6">
                {type === 'rentals' ? (
                  <>
                    <div className="text-4xl font-bold text-[#4DA3FF] mb-2">${vehicle.price}</div>
                    <div className="text-gray-600">per day</div>
                    <div className="text-sm text-gray-500 mt-2">Security Deposit: ${(vehicle as any).deposit || 0}</div>
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-bold text-[#4DA3FF] mb-2">${vehicle.price.toLocaleString()}</div>
                    <div className="text-gray-600">Total Price</div>
                    {(vehicle as any).warranty && (
                      <div className="text-sm text-gray-500 mt-2">Warranty: {(vehicle as any).warranty}</div>
                    )}
                  </>
                )}
              </div>

              <div className="space-y-3">
                {type === 'rentals' ? (
                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-[#4DA3FF] text-white py-3 rounded-lg hover:bg-blue-500 transition font-semibold"
                  >
                    Book Now
                  </button>
                ) : (
                  <button 
                    onClick={handleContactSeller}
                    className="w-full bg-[#4DA3FF] text-white py-3 rounded-lg hover:bg-blue-500 transition font-semibold"
                  >
                    Contact Seller
                  </button>
                )}
                
                <button className="w-full border border-[#4DA3FF] text-[#4DA3FF] py-3 rounded-lg hover:bg-blue-50 transition">
                  Schedule Test Drive
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-[#0A1F44] mb-3">Need Help?</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-[#4DA3FF]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2 text-[#4DA3FF]" />
                    <span>info@2iwhitelines.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleDetail
