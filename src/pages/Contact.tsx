import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri: 8AM-6PM'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@2iwhitelines.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8AM - 6PM',
      description: 'Saturday: 9AM - 4PM'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch with our team for any inquiries</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#4DA3FF] mr-4 mt-1">
                    <info.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-1">{info.title}</h3>
                    <p className="text-gray-800">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#4DA3FF] text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 bg-[#4DA3FF] text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 bg-[#4DA3FF] text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-[#4DA3FF] text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    >
                      <option value="">Select a subject</option>
                      <option value="rental">Vehicle Rental</option>
                      <option value="sales">Vehicle Sales</option>
                      <option value="import">Vehicle Import</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4DA3FF]"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4DA3FF] text-white py-3 rounded-lg hover:bg-blue-500 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-[#0A1F44] mb-2">What documents do I need to rent a vehicle?</h3>
                  <p className="text-gray-600">You'll need a valid driver's license, credit card, and proof of insurance.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-[#0A1F44] mb-2">Do you offer long-term rentals?</h3>
                  <p className="text-gray-600">Yes, we offer flexible rental periods from daily to monthly leases.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-[#0A1F44] mb-2">Can I test drive a vehicle before purchasing?</h3>
                  <p className="text-gray-600">Absolutely! We encourage test drives for all our sales vehicles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
