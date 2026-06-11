import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaCalendarAlt, FaTachometerAlt, FaFilter, FaGasPump, FaCogs } from 'react-icons/fa'

const Sales = () => {
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [sortBy, setSortBy] = useState('featured')
  const [searchText, setSearchText] = useState('')
  
  const vehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz C-Class 2023',
      brand: 'mercedes',
      price: 45000,
      mileage: 15000,
      year: 2023,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      condition: 'Excellent',
      featured: true
    },
    {
      id: 2,
      name: 'BMW 3 Series 2022',
      brand: 'bmw',
      price: 38000,
      mileage: 22000,
      year: 2022,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      condition: 'Very Good',
      featured: false
    },
    {
      id: 3,
      name: 'Audi A4 2023',
      brand: 'audi',
      price: 42000,
      mileage: 8000,
      year: 2023,
      image: 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?w=600&h=400&fit=crop',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      condition: 'Excellent',
      featured: true
    },
    {
      id: 4,
      name: 'Lexus ES 2022',
      brand: 'lexus',
      price: 35000,
      mileage: 18000,
      year: 2022,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88f?w=600&h=400&fit=crop',
      fuel: 'Hybrid',
      transmission: 'Automatic',
      condition: 'Very Good',
      featured: false
    },
    {
      id: 5,
      name: 'Tesla Model Y 2023',
      brand: 'tesla',
      price: 55000,
      mileage: 5000,
      year: 2023,
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop',
      fuel: 'Electric',
      transmission: 'Automatic',
      condition: 'Excellent',
      featured: true
    },
    {
      id: 6,
      name: 'Porsche 911 2021',
      brand: 'porsche',
      price: 95000,
      mileage: 12000,
      year: 2021,
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
      fuel: 'Gasoline',
      transmission: 'Manual',
      condition: 'Excellent',
      featured: true
    },
    {
      id: 7,
      name: 'Range Rover Sport 2023',
      brand: 'landrover',
      price: 78000,
      mileage: 10000,
      year: 2023,
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      condition: 'Excellent',
      featured: true
    },
    {
      id: 8,
      name: 'Honda Accord 2022',
      brand: 'honda',
      price: 28000,
      mileage: 25000,
      year: 2022,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
      fuel: 'Gasoline',
      transmission: 'CVT',
      condition: 'Good',
      featured: false
    }
  ]

  const brands = [
    { id: 'all', name: 'All Brands' },
    { id: 'mercedes', name: 'Mercedes-Benz' },
    { id: 'bmw', name: 'BMW' },
    { id: 'audi', name: 'Audi' },
    { id: 'lexus', name: 'Lexus' },
    { id: 'tesla', name: 'Tesla' },
    { id: 'porsche', name: 'Porsche' }
  ]

  const filteredVehicles = vehicles
    .filter(v => selectedBrand === 'all' || v.brand === selectedBrand)
    .filter(v => v.price >= priceRange[0] && v.price <= priceRange[1])
    .filter(v => {
      const q = searchText.trim().toLowerCase()
      return q === '' || v.name.toLowerCase().includes(q) || v.fuel.toLowerCase().includes(q) || v.transmission.toLowerCase().includes(q)
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'mileage') return a.mileage - b.mileage
      if (sortBy === 'year') return b.year - a.year
      return Number(b.featured) - Number(a.featured);
    })

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#09152C] to-[#0A1F44] border-b border-white/5 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider block mb-2">Buy Luxury</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Vehicle Sales</h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              Inspect our certified lineup of pre-owned luxury vehicles and drive your dream.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0F2143] border border-white/10 rounded-2xl shadow-xl p-6 sticky top-28"
            >
              <div className="flex items-center mb-6 border-b border-white/5 pb-4">
                <FaFilter className="mr-2.5 text-[#00E5FF]" />
                <h3 className="text-lg font-bold text-white">Refine Search</h3>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Manufacturer</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-3 bg-[#09152C] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                >
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id} className="bg-[#09152C]">{brand.name}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Max Budget</label>
                  <span className="text-xs font-bold text-[#00E5FF]">${priceRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-[#09152C] rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sort Results</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-[#09152C] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                >
                  <option value="featured" className="bg-[#09152C]">Featured Showcase</option>
                  <option value="price-low" className="bg-[#09152C]">Price: Low to High</option>
                  <option value="price-high" className="bg-[#09152C]">Price: High to Low</option>
                  <option value="mileage" className="bg-[#09152C]">Lowest Mileage</option>
                  <option value="year" className="bg-[#09152C]">Newest Model Year</option>
                </select>
              </div>

              <button 
                onClick={() => { setSelectedBrand('all'); setPriceRange([0, 100000]); setSortBy('featured'); setSearchText(''); }}
                className="w-full py-3 bg-white/5 border border-white/10 hover:bg-[#00E5FF] hover:text-[#09152C] hover:border-[#00E5FF] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-premium"
              >
                Clear All
              </button>
            </motion.div>
          </div>

          {/* Vehicle Grid */}
          <div className="lg:w-3/4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#0F2143]/30 border border-white/5 p-4 rounded-xl"
            >
              <p className="text-gray-400 text-sm font-semibold">{filteredVehicles.length} vehicles matching</p>
              <div className="relative w-full sm:w-64">
                <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search manufacturer, model..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#09152C] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF] text-xs transition-colors"
                />
              </div>
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredVehicles.map(vehicle => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
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
                      {vehicle.featured && (
                        <div className="absolute top-4 left-4 bg-[#00E5FF] text-[#09152C] px-3 py-1 rounded-full text-xs font-bold uppercase border border-[#00E5FF]/20">
                          Featured
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 bg-[#09152C]/95 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-xl">
                        <span className="font-extrabold text-white text-lg">${vehicle.price.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col grow justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{vehicle.name}</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-400">
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2 text-[#00E5FF]" />
                            <span>Year: {vehicle.year}</span>
                          </div>
                          <div className="flex items-center">
                            <FaTachometerAlt className="mr-2 text-[#00E5FF]" />
                            <span>Mileage: {vehicle.mileage.toLocaleString()} mi</span>
                          </div>
                          <div className="flex items-center">
                            <FaGasPump className="mr-2 text-[#00E5FF]" />
                            <span>Fuel: {vehicle.fuel}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCogs className="mr-2 text-[#00E5FF]" />
                            <span>Type: {vehicle.transmission}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-6 border-t border-white/5 pt-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            vehicle.condition === 'Excellent' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            vehicle.condition === 'Very Good' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                            'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                          }`}>
                            {vehicle.condition}
                          </span>
                          <span className="text-gray-500 text-xs font-semibold">Ready to Drive</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link 
                          to={`/sales/${vehicle.id}`}
                          className="flex-1 bg-[#00E5FF] hover:bg-white hover:text-[#09152C] hover:shadow-glow text-[#09152C] py-3 rounded-xl font-bold transition-premium text-center text-sm"
                        >
                          View Specs
                        </Link>
                        <Link
                          to="/contact"
                          className="flex-1 border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#09152C] py-3 rounded-xl font-bold transition-premium text-center text-sm"
                        >
                          Test Drive
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {filteredVehicles.length === 0 && (
              <div className="text-center py-20 bg-[#0F2143]/20 border border-white/5 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">No Vehicles Match</h3>
                <p className="text-gray-400">Try adjusting your filters or search keywords.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales
