import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCar, FaSearch, FaCalendarAlt, FaUsers, FaGasPump, FaStar } from 'react-icons/fa'

const Rentals = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchText, setSearchText] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Camry 2023',
      category: 'sedan',
      price: 65,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT66GeFIL-sRmRJ0_IJA5kOgn_kDhERzl1HQ&s',
      seats: 5,
      fuel: 'Hybrid',
      transmission: 'Automatic',
      rating: 4.8,
      available: true
    },
    {
      id: 2,
      name: 'Honda CR-V 2023',
      category: 'suv',
      price: 85,
      image: 'https://di-uploads-pod16.dealerinspire.com/pattypeckhonda/uploads/2019/12/A-2020-Honda-CR-V-Touring-parked-on-a-rooftop-in-a-city.png',
      seats: 7,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      rating: 4.7,
      available: true
    },
    {
      id: 3,
      name: 'Tesla Model 3 2023',
      category: 'electric',
      price: 120,
      image: 'https://www.copilotsearch.com/uploads/2022_tesla_model_3.webp',
      seats: 5,
      fuel: 'Electric',
      transmission: 'Automatic',
      rating: 4.9,
      available: true
    },
    {
      id: 4,
      name: 'Ford Mustang 2023',
      category: 'sports',
      price: 150,
      image: 'https://cmhford.co.za/wp-content/uploads/2024/12/IMAGE-5_n.webp',
      seats: 4,
      fuel: 'Gasoline',
      transmission: 'Manual',
      rating: 4.6,
      available: false
    },
    {
      id: 5,
      name: 'BMW X5 2023',
      category: 'luxury',
      price: 180,
      image: 'https://motormatch.com/uploads/p90331850-highres-the-bmw-x5-m50d.jpg',
      seats: 7,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      rating: 4.9,
      available: true
    },
    {
      id: 6,
      name: 'Nissan Sentra 2023',
      category: 'sedan',
      price: 55,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2021_Nissan_Sentra_SR_in_Electric_Blue%2C_front_left%2C_2021-10-03.jpg/330px-2021_Nissan_Sentra_SR_in_Electric_Blue%2C_front_left%2C_2021-10-03.jpg',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'CVT',
      rating: 4.5,
      available: true
    },
    {
      id: 7,
      name: 'Audi Q7 2023',
      category: 'luxury',
      price: 200,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2020-audi-q7-208-1584322589.jpg?crop=0.927xw:0.782xh;0.0733xw,0.181xh&resize=1200:*',
      seats: 7,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      rating: 4.9,
      available: true
    },
    {
      id: 8,
      name: 'Chevrolet Tahoe 2023',
      category: 'suv',
      price: 110,
      image: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/index-sub-content/rotator/01-images/v2/26-ch-suv-suburban-rotator.png?imwidth=1920',
      seats: 8,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      rating: 4.7,
      available: true
    },
    {
      id: 9,
      name: 'Porsche 911 2023',
      category: 'sports',
      price: 250,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-carrera-t-692-652e8b769d650.jpg?crop=0.511xw:0.384xh;0.272xw,0.513xh&resize=1200:*',
      seats: 2,
      fuel: 'Gasoline',
      transmission: 'PDK',
      rating: 5.0,
      available: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Vehicles', icon: FaCar },
    { id: 'sedan', name: 'Sedans', icon: FaCar },
    { id: 'suv', name: 'SUVs', icon: FaCar },
    { id: 'electric', name: 'Electric', icon: FaCar },
    { id: 'sports', name: 'Sports', icon: FaCar },
    { id: 'luxury', name: 'Luxury', icon: FaCar }
  ]

  const filteredVehicles = vehicles.filter(v => {
    const matchesCategory = selectedCategory === 'all' || v.category === selectedCategory
    const q = searchText.trim().toLowerCase()
    const matchesQuery =
      q === '' ||
      v.name.toLowerCase().includes(q) ||
      v.fuel.toLowerCase().includes(q) ||
      v.transmission.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q)

    // If both dates are provided, require the vehicle to be available (simple availability check)
    const matchesDates = startDate === '' || endDate === '' ? true : v.available

    return matchesCategory && matchesQuery && matchesDates
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-linear-to-r from-[#0A1F44] to-[#1a3a6a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Rentals</h1>
          <p className="text-xl text-gray-200">Choose from our premium fleet of well-maintained vehicles</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
              />
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
              />
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
              />
            </div>
            <button className="bg-[#4DA3FF] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                selectedCategory === category.id
                  ? 'bg-[#4DA3FF] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                {!vehicle.available && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Not Available
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="font-bold text-[#0A1F44]">${vehicle.price}/day</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{vehicle.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(vehicle.rating) ? '' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{vehicle.rating}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2" />
                    <span>{vehicle.seats} Seats</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaGasPump className="mr-2" />
                    <span>{vehicle.fuel}</span>
                  </div>
                </div>

                <Link 
                  to={`/rentals/${vehicle.id}`}
                  className="block w-full bg-[#4DA3FF] text-white text-center py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  {vehicle.available ? 'Book Now' : 'View Details'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rentals
