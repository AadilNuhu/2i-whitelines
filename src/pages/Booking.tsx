import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaCheckCircle, FaArrowLeft } from 'react-icons/fa'

const Booking = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupTime: '10:00',
    pickupLocation: '',
    dropoffLocation: '',
    driverAge: '',
    additionalDrivers: 0,
    insurance: 'basic',
    additionalEquipment: [] as string[]
  })

  // Mock vehicle data - in real app this would come from API or state
  const vehicle = {
    id: id,
    name: 'Toyota Camry 2023',
    price: 65,
    image: 'https://images.unsplash.com/photo-1550355241-3a7241c4e1eb?w=400&h=250&fit=crop',
    seats: 5,
    fuel: 'Hybrid',
    deposit: 500
  }

  const equipmentOptions = [
    { id: 'gps', name: 'GPS Navigation', price: 10 },
    { id: 'childseat', name: 'Child Seat', price: 15 },
    { id: 'bikerack', name: 'Bike Rack', price: 20 },
    { id: 'ski', name: 'Ski Rack', price: 25 }
  ]

  const insuranceOptions = [
    { id: 'basic', name: 'Basic Coverage', price: 0, coverage: 'Liability only' },
    { id: 'standard', name: 'Standard Coverage', price: 25, coverage: 'Collision + Liability' },
    { id: 'premium', name: 'Premium Coverage', price: 45, coverage: 'Full Coverage' }
  ]

  const calculateTotal = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0
    
    const days = Math.ceil((new Date(formData.returnDate).getTime() - new Date(formData.pickupDate).getTime()) / (1000 * 60 * 60 * 24))
    const vehicleTotal = days * vehicle.price
    const insurance = insuranceOptions.find(opt => opt.id === formData.insurance)?.price || 0
    const equipmentTotal = formData.additionalEquipment.reduce((total, eqId) => {
      const equipment = equipmentOptions.find(eq => eq.id === eqId)
      return total + (equipment?.price || 0) * days
    }, 0)
    
    return vehicleTotal + insurance + equipmentTotal
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Booking confirmed for ${vehicle.name}!\nTotal: $${calculateTotal()}\nWe'll send confirmation to your email.`)
  }

  const toggleEquipment = (equipmentId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalEquipment: prev.additionalEquipment.includes(equipmentId)
        ? prev.additionalEquipment.filter(id => id !== equipmentId)
        : [...prev.additionalEquipment, equipmentId]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="mb-8">
          <Link to="/rentals" className="flex items-center text-gray-600 hover:text-[#4DA3FF] transition mb-6">
            <FaArrowLeft className="mr-2" />
            Back to Rentals
          </Link>
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Fill in the details below to reserve your vehicle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vehicle Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{vehicle.name}</h3>
              <div className="text-2xl font-bold text-[#4DA3FF] mb-4">${vehicle.price}/day</div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaUsers className="mr-2 text-[#4DA3FF]" />
                  <span>{vehicle.seats} Seats</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#4DA3FF]" />
                  <span>Security Deposit: ${vehicle.deposit}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Rental Period */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Rental Period</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaCalendarAlt className="inline mr-2" />Pickup Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaCalendarAlt className="inline mr-2" />Return Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.returnDate}
                      onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaClock className="inline mr-2" />Pickup Time
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.pickupTime}
                      onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Driver Age</label>
                    <input
                      type="number"
                      required
                      min="21"
                      max="99"
                      value={formData.driverAge}
                      onChange={(e) => setFormData({...formData, driverAge: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaMapMarkerAlt className="inline mr-2" />Pickup Location
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                      placeholder="Enter pickup address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaMapMarkerAlt className="inline mr-2" />Drop-off Location
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.dropoffLocation}
                      onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
                      placeholder="Enter drop-off address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Insurance Coverage</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {insuranceOptions.map(option => (
                    <label key={option.id} className="relative">
                      <input
                        type="radio"
                        name="insurance"
                        value={option.id}
                        checked={formData.insurance === option.id}
                        onChange={(e) => setFormData({...formData, insurance: e.target.value})}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                        formData.insurance === option.id 
                          ? 'border-[#4DA3FF] bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="font-semibold text-[#0A1F44]">{option.name}</div>
                        <div className="text-sm text-gray-600">{option.coverage}</div>
                        <div className="text-lg font-bold text-[#4DA3FF]">${option.price}/day</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Equipment */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Additional Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipmentOptions.map(equipment => (
                    <label key={equipment.id} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#4DA3FF] transition">
                      <input
                        type="checkbox"
                        checked={formData.additionalEquipment.includes(equipment.id)}
                        onChange={() => toggleEquipment(equipment.id)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium text-[#0A1F44]">{equipment.name}</div>
                        <div className="text-sm text-[#4DA3FF]">${equipment.price}/day</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#0A1F44] mb-4">Price Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Rental</span>
                    <span className="font-medium">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security Deposit</span>
                    <span className="font-medium">${vehicle.deposit}</span>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span className="text-[#4DA3FF]">${calculateTotal() + vehicle.deposit}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4DA3FF] text-white py-4 rounded-lg hover:bg-blue-500 transition font-semibold text-lg"
              >
                Complete Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
