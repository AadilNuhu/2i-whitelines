import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCar, FaSearch, FaDollarSign, FaCalendarAlt, FaTachometerAlt, FaStar, FaFilter } from 'react-icons/fa'

const Sales = () => {
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [sortBy, setSortBy] = useState('featured')
  
  const vehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz C-Class 2023',
      brand: 'mercedes',
      price: 45000,
      mileage: 15000,
      year: 2023,
      image: 'https://motormatch.com/uploads/p90331850-highres-the-bmw-x5-m50d.jpg',
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2021_Nissan_Sentra_SR_in_Electric_Blue%2C_front_left%2C_2021-10-03.jpg/330px-2021_Nissan_Sentra_SR_in_Electric_Blue%2C_front_left%2C_2021-10-03.jpg',
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
      image: 'https://hips.hearstapps.com/hmg-prod/images/2020-audi-q7-208-1584322589.jpg?crop=0.927xw:0.782xh;0.0733xw,0.181xh&resize=1200:*',
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
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-carrera-t-692-652e8b769d650.jpg?crop=0.511xw:0.384xh;0.272xw,0.513xh&resize=1200:*',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRJTZP0_edh4DXVPc7BkiGyQ91knn0OI2ng&s',
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
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-carrera-t-692-652e8b769d650.jpg?crop=0.511xw:0.384xh;0.272xw,0.513xh&resize=1200:*',
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
      image: 'https://www.royalhonda.com/blogs/3781/wp-content/uploads/2021/09/2021-honda-accord-008Copy.jpg',
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
      image: 'https://www.royalhonda.com/blogs/3781/wp-content/uploads/2021/09/2021-honda-accord-008Copy.jpg',
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
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'mileage') return a.mileage - b.mileage
      if (sortBy === 'year') return b.year - a.year
      return Number(b.featured) - Number(a.featured);
    })

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Vehicle Sales</h1>
          <p className="text-xl text-gray-200">Discover our curated collection of quality pre-owned vehicles</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <FaFilter className="mr-2 text-[#4DA3FF]" />
                <h3 className="text-lg font-bold text-[#0A1F44]">Filters</h3>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                >
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="mileage">Lowest Mileage</option>
                  <option value="year">Newest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">{filteredVehicles.length} vehicles found</p>
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-48 object-cover"
                    />
                    {vehicle.featured && (
                      <div className="absolute top-4 left-4 bg-[#4DA3FF] text-white px-3 py-1 rounded-full text-sm">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="font-bold text-[#0A1F44]">${vehicle.price.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{vehicle.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2" />
                        <span>{vehicle.year}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaTachometerAlt className="mr-2" />
                        <span>{vehicle.mileage.toLocaleString()} mi</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        vehicle.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                        vehicle.condition === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {vehicle.condition}
                      </span>
                      <span className="text-gray-600">{vehicle.fuel} • {vehicle.transmission}</span>
                    </div>

                    <div className="flex gap-3">
                      <Link 
                        to={`/sales/${vehicle.id}`}
                        className="flex-1 bg-[#4DA3FF] text-white py-2 rounded-lg hover:bg-blue-500 transition text-center"
                      >
                        View Details
                      </Link>
                      <button className="flex-1 border border-[#4DA3FF] text-[#4DA3FF] py-2 rounded-lg hover:bg-blue-50 transition">
                        Schedule Test Drive
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales
