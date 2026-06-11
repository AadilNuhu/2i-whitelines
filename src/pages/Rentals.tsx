import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCar, FaSearch, FaCalendarAlt, FaUsers, FaGasPump, FaStar, FaCogs } from 'react-icons/fa'

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
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1611245801732-c7f76378e9b6?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
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

    const matchesDates = startDate === '' || endDate === '' ? true : v.available

    return matchesCategory && matchesQuery && matchesDates
  })

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#09152C] to-[#0A1F44] border-b border-white/5 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00E5FF] text-xs font-semibold uppercase tracking-wider block mb-2">Bespoke Fleet</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Premium Rentals</h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              Select comfort, security, and elegance from our highly verified rental catalog.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Bar / Filter Panel */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0F2143] border border-white/10 rounded-2xl shadow-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="relative">
              <label className="block text-xs text-gray-400 mb-2 font-medium">Search Keyword</label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-3.5 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="e.g. Tesla, Hybrid..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#09152C] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF] text-sm transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-400 mb-2 font-medium">Pickup Date</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-3.5 text-gray-400 text-sm" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF] text-sm transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs text-gray-400 mb-2 font-medium">Dropoff Date</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-3.5 text-gray-400 text-sm" />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF] text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <button 
                onClick={() => { setSearchText(''); setStartDate(''); setEndDate(''); }}
                className="w-full bg-white/5 border border-white/10 hover:bg-[#00E5FF] hover:text-[#09152C] hover:border-[#00E5FF] text-white py-3 rounded-xl text-sm font-bold transition-premium cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Categories Panel */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-premium ${
                selectedCategory === category.id
                  ? 'bg-[#00E5FF] text-[#09152C]'
                  : 'bg-[#0F2143]/40 border border-white/5 text-gray-300 hover:bg-[#0F2143] hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map(vehicle => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={vehicle.id} 
                className="bg-[#0F2143]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[#00E5FF]/20 hover:shadow-card-glow transition-premium flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-52">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {!vehicle.available && (
                    <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold uppercase px-3 py-1 rounded-full border border-red-500/20">
                      Not Available
                    </div>
                  )}
                  {vehicle.available && (
                    <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-md text-white text-xs font-bold uppercase px-3 py-1 rounded-full border border-green-500/20">
                      Available
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-[#09152C]/95 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-xl">
                    <span className="font-extrabold text-[#00E5FF] text-lg">${vehicle.price}</span>
                    <span className="text-gray-400 text-xs font-medium">/day</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(vehicle.rating) ? 'mr-0.5' : 'text-gray-600 mr-0.5'} />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-400 font-semibold">{vehicle.rating}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-gray-400">
                      <div className="flex items-center justify-center bg-white/5 py-2 px-1 rounded-lg">
                        <FaUsers className="mr-1.5 text-[#00E5FF]" />
                        <span>{vehicle.seats} Seats</span>
                      </div>
                      <div className="flex items-center justify-center bg-white/5 py-2 px-1 rounded-lg">
                        <FaGasPump className="mr-1.5 text-[#00E5FF]" />
                        <span>{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center justify-center bg-white/5 py-2 px-1 rounded-lg">
                        <FaCogs className="mr-1.5 text-[#00E5FF]" />
                        <span>{vehicle.transmission}</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/rentals/${vehicle.id}`}
                    className="block w-full bg-[#00E5FF] hover:bg-white hover:text-[#09152C] hover:shadow-glow text-[#09152C] font-bold text-center py-3 rounded-xl transition-premium text-sm"
                  >
                    {vehicle.available ? 'Book Online Now' : 'Inquire Details'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredVehicles.length === 0 && (
          <div className="text-center py-20 bg-[#0F2143]/20 border border-white/5 rounded-2xl mt-8">
            <h3 className="text-xl font-bold text-white mb-2">No Vehicles Found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or resetting filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rentals
