import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Booking = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '10:00',
    pickupLocation: '',
    dropoffLocation: '',
    driverAge: '25',
    additionalDrivers: 0,
    insurance: 'basic',
    additionalEquipment: [] as string[]
  })
  
  const [isBooked, setIsBooked] = useState(false)

  const vehicle = {
    id: id,
    name: 'Toyota Camry 2023',
    price: 65,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
    seats: 5,
    fuel: 'Hybrid',
    deposit: 500
  }

  const equipmentOptions = [
    { id: 'gps', name: 'GPS Navigation', price: 10 },
    { id: 'childseat', name: 'Child Seat', price: 15 },
    { id: 'bikerack', name: 'Bike Rack', price: 20 }
  ]

  const insuranceOptions = [
    { id: 'basic', name: 'Basic Coverage', price: 0, coverage: 'Liability only' },
    { id: 'standard', name: 'Standard Protection', price: 25, coverage: 'Collision + Liability' },
    { id: 'premium', name: 'Premium Full Coverage', price: 45, coverage: 'Zero Deductible Full Protection' }
  ]

  const getDaysCount = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0
    const start = new Date(formData.pickupDate)
    const end = new Date(formData.returnDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays || 1
  }

  const calculateTotal = () => {
    const days = getDaysCount()
    if (days === 0) return 0
    const vehicleTotal = days * vehicle.price
    const insurancePrice = insuranceOptions.find(opt => opt.id === formData.insurance)?.price || 0
    const insuranceTotal = insurancePrice * days
    const equipmentTotal = formData.additionalEquipment.reduce((total, eqId) => {
      const equipment = equipmentOptions.find(eq => eq.id === eqId)
      return total + (equipment?.price || 0) * days
    }, 0)
    
    return vehicleTotal + insuranceTotal + equipmentTotal
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsBooked(true)
  }

  const toggleEquipment = (equipmentId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalEquipment: prev.additionalEquipment.includes(equipmentId)
        ? prev.additionalEquipment.filter(id => id !== equipmentId)
        : [...prev.additionalEquipment, equipmentId]
    }))
  }

  const getWhatsAppBookingLink = () => {
    const days = getDaysCount();
    const total = calculateTotal() + vehicle.deposit;
    const text = `*New Reservation Request from 2i Whitelines*
---------------------------------------
*Client Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Rental Request Details:*
- Vehicle: ${vehicle.name}
- Pickup Date/Time: ${formData.pickupDate} at ${formData.pickupTime}
- Return Date: ${formData.returnDate}
- Duration: ${days} days
- Pickup Place: ${formData.pickupLocation}
- Dropoff Place: ${formData.dropoffLocation}
- Coverage Type: ${formData.insurance.toUpperCase()}
- Extra Equipment: ${formData.additionalEquipment.join(', ') || 'None'}
- Driver Age: ${formData.driverAge}

*Cost breakdown:*
- Total Rental & Coverage: $${calculateTotal()}
- Security Refundable Deposit: $${vehicle.deposit}
- *Total Est Cost:* $${total}`;
    
    return `https://wa.me/233553552490?text=${encodeURIComponent(text)}`;
  };

  const getMailtoLink = () => {
    const days = getDaysCount();
    const total = calculateTotal() + vehicle.deposit;
    const subject = `Booking Reservation: ${vehicle.name} - ${formData.fullName}`;
    const body = `Client Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nRental details:\n- Vehicle: ${vehicle.name}\n- Duration: ${days} Days (${formData.pickupDate} to ${formData.returnDate})\n- Pickup Time: ${formData.pickupTime}\n- Pickup Location: ${formData.pickupLocation}\n- Dropoff Location: ${formData.dropoffLocation}\n- Driver Age: ${formData.driverAge}\n- Insurance Selection: ${formData.insurance}\n- Extra Gear: ${formData.additionalEquipment.join(', ') || 'None'}\n\n- Total Rental: $${calculateTotal()}\n- Security Deposit: $${vehicle.deposit}\n- TOTAL ESTIMATED CHARGE: $${total}`;

    return `mailto:t2iwhitelines@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Navigation */}
        <div className="py-8">
          <Link to="/rentals" className="inline-flex items-center text-gray-400 hover:text-[#00E5FF] transition-premium text-sm mb-6">
            <FaArrowLeft className="mr-2" /> Back to Fleet Listings
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Complete Booking</h1>
          <p className="text-gray-400 text-sm mt-2">Fill in your reservation requirements below.</p>
        </div>

        {!isBooked ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Vehicle card summary */}
            <div className="lg:col-span-1 bg-[#0F2143]/30 border border-white/5 p-6 rounded-3xl space-y-6">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-44 object-cover rounded-2xl border border-white/10"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                <span className="text-2xl font-extrabold text-[#00E5FF] block mt-1">${vehicle.price}/day</span>
              </div>
              
              <div className="space-y-3 text-xs text-gray-400 border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <span>Seats Capacity:</span>
                  <span className="text-white font-bold">{vehicle.seats} seats</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Fuel:</span>
                  <span className="text-white font-bold">{vehicle.fuel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Security Deposit:</span>
                  <span className="text-[#00E5FF] font-bold">${vehicle.deposit} (Refundable)</span>
                </div>
              </div>
            </div>

            {/* Inputs forms */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Client Info */}
              <div className="bg-[#0F2143]/20 border border-white/5 p-6 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">1. Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+233..."
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>
              </div>

              {/* Dates & Period */}
              <div className="bg-[#0F2143]/20 border border-white/5 p-6 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">2. Rental Period & Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Pickup Date *</label>
                    <input 
                      type="date" 
                      required
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Return Date *</label>
                    <input 
                      type="date" 
                      required
                      value={formData.returnDate}
                      onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Pickup Time *</label>
                    <input 
                      type="time" 
                      required
                      value={formData.pickupTime}
                      onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Driver's Age *</label>
                    <input 
                      type="number" 
                      required
                      min="21"
                      value={formData.driverAge}
                      onChange={(e) => setFormData({...formData, driverAge: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Pickup Address *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                      placeholder="e.g. Kotoka Airport, Accra"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Drop-off Address *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.dropoffLocation}
                      onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
                      placeholder="e.g. Century Road office"
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-[#0F2143]/20 border border-white/5 p-6 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">3. Protection Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {insuranceOptions.map(opt => (
                    <label 
                      key={opt.id} 
                      className={`block p-4 border rounded-xl cursor-pointer transition-premium ${
                        formData.insurance === opt.id 
                          ? 'border-[#00E5FF] bg-[#00E5FF]/5' 
                          : 'border-white/5 hover:border-white/20 bg-[#09152C]/30'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="insurance"
                        value={opt.id}
                        checked={formData.insurance === opt.id}
                        onChange={() => setFormData({...formData, insurance: opt.id})}
                        className="sr-only"
                      />
                      <span className="font-bold text-white block text-sm mb-1">{opt.name}</span>
                      <span className="text-gray-400 block mb-3">{opt.coverage}</span>
                      <span className="text-[#00E5FF] font-bold text-base">+${opt.price}/day</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra Equipments */}
              <div className="bg-[#0F2143]/20 border border-white/5 p-6 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">4. Add-ons & Gear</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {equipmentOptions.map(eq => (
                    <label 
                      key={eq.id}
                      className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-premium ${
                        formData.additionalEquipment.includes(eq.id)
                          ? 'border-[#00E5FF] bg-[#00E5FF]/5'
                          : 'border-white/5 hover:border-white/20 bg-[#09152C]/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox"
                          checked={formData.additionalEquipment.includes(eq.id)}
                          onChange={() => toggleEquipment(eq.id)}
                          className="rounded border-white/10 text-[#00E5FF] focus:ring-[#00E5FF]"
                        />
                        <span className="font-semibold text-white">{eq.name}</span>
                      </div>
                      <span className="text-[#00E5FF] font-bold">+${eq.price}/day</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary widget */}
              <div className="bg-[#0F2143]/30 border border-white/10 p-6 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-white">Summary Cost breakdown</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Selected Duration:</span>
                    <span className="text-white font-semibold">{getDaysCount()} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Rental & Extras:</span>
                    <span className="text-white font-semibold">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Refundable Security Deposit:</span>
                    <span className="text-white font-semibold">${vehicle.deposit}</span>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between text-base font-extrabold text-white">
                    <span>Total Estimated Bill</span>
                    <span className="text-[#00E5FF] text-xl">${calculateTotal() + vehicle.deposit}</span>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#00E5FF] hover:bg-white text-[#09152C] py-4 rounded-xl font-bold transition-premium text-base cursor-pointer"
              >
                Request Booking Approval
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-xl mx-auto bg-[#0F2143]/30 border border-white/5 rounded-3xl p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-3xl animate-pulse">
              ✓
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Booking Requested!</h2>
              <p className="text-gray-400 text-sm">
                Your reservation details for the *{vehicle.name}* have been pre-assembled. Send them to our desk to secure your booking.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <a 
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm"
              >
                <FaWhatsapp className="text-lg" /> Send to Desk via WhatsApp
              </a>

              <a 
                href={getMailtoLink()}
                className="bg-[#00E5FF] hover:bg-white text-[#09152C] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm text-center"
              >
                <FaEnvelope className="text-lg" /> Submit via Email
              </a>
            </div>

            <Link 
              to="/rentals"
              className="text-xs text-gray-500 hover:text-white underline block pt-4"
            >
              Back to Fleet
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Booking
