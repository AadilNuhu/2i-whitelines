import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSent, setIsSent] = useState(false);

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+233 (553) 552-490',
      description: 'Mon-Fri: 8AM-6PM',
      link: 'tel:+233553552490'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 't2iwhitelines@gmail.com',
      description: 'Quick client response desk',
      link: 'mailto:t2iwhitelines@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'Century Road / Zongo Junction',
      description: 'Accra, Ghana',
      link: 'https://maps.google.com/?q=Century+Road+Accra+Ghana'
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: 'Mon - Fri: 8AM - 6PM',
      description: 'Saturday: 9AM - 4PM',
      link: '#'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSent(true)
  }

  const getWhatsAppLink = () => {
    const text = `*New Contact Message from 2i Whitelines Web*
---------------------------------------
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Subject: ${formData.subject}

*Message:*
"${formData.message}"`;
    return `https://wa.me/233553552490?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const subject = `Web Contact: ${formData.subject} - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    return `mailto:t2iwhitelines@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#09152C] to-[#0A1F44] border-b border-white/5 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider block mb-2">Connect</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Get in touch with our team for rentals, purchase inspections, and global import consultations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-bold text-white border-b border-white/5 pb-2">Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-start bg-[#0F2143]/20 border border-white/5 p-5 rounded-2xl hover:border-[#00E5FF]/20 hover:bg-[#0F2143]/40 transition-premium group"
                >
                  <div className="text-xl text-[#00E5FF] bg-white/5 p-3.5 rounded-xl mr-4 group-hover:bg-[#00E5FF] group-hover:text-[#09152C] transition-premium">
                    <info.icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{info.title}</h3>
                    <p className="text-sm text-gray-300 font-medium group-hover:text-[#00E5FF] transition-colors">{info.details}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media links */}
            <div className="pt-6">
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {['#', '#', '#', '#'].map((url, i) => {
                  const icons = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin];
                  const Icon = icons[i];
                  return (
                    <a key={i} href={url} className="w-10 h-10 bg-[#0F2143]/50 border border-white/5 text-gray-300 rounded-full flex items-center justify-center hover:bg-[#00E5FF] hover:text-[#09152C] hover:border-[#00E5FF] transition-premium">
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form and Map Column */}
          <div className="lg:col-span-2 space-y-8">
            {!isSent ? (
              <div className="bg-[#0F2143]/20 border border-white/5 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
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
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-2 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-400 mb-2 font-semibold">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+233..."
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-2 font-semibold">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        <option value="" className="bg-[#09152C]">Select a subject</option>
                        <option value="Vehicle Rental" className="bg-[#09152C]">Vehicle Rental</option>
                        <option value="Vehicle Sales" className="bg-[#09152C]">Vehicle Sales</option>
                        <option value="Import Consulting" className="bg-[#09152C]">Vehicle Import Consulting</option>
                        <option value="Other Assistance" className="bg-[#09152C]">Other Assistance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-2 font-semibold">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2.5 bg-[#09152C] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF]"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00E5FF] hover:bg-white text-[#09152C] py-3.5 rounded-xl font-bold transition-premium text-sm cursor-pointer"
                  >
                    Send Inquiry Message
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-[#0F2143]/20 border border-white/5 p-8 rounded-3xl text-center space-y-6">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-2xl animate-pulse">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white font-sans">Message Compiled!</h3>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto">
                    Let's send your message through our primary notification systems to ensure quick support.
                  </p>
                </div>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm"
                  >
                    <FaWhatsapp className="text-lg" /> Send via WhatsApp
                  </a>

                  <a 
                    href={getEmailLink()}
                    className="bg-[#00E5FF] hover:bg-white text-[#09152C] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-premium text-sm text-center"
                  >
                    <FaEnvelope className="text-lg" /> Send via Email Client
                  </a>
                </div>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-gray-500 hover:text-white text-xs underline block mx-auto pt-4"
                >
                  Write another message
                </button>
              </div>
            )}

            {/* Map Embed Container */}
            <div className="bg-[#0F2143]/20 border border-white/5 p-6 rounded-3xl space-y-4">
              <h3 className="text-lg font-bold text-white">Office Location Map</h3>
              <div className="bg-[#09152C] rounded-2xl overflow-hidden h-72 border border-white/5 relative">
                {/* Beautiful Mock Map using stylized grid bg and local metadata pin */}
                <div className="absolute inset-0 bg-[#09152C] flex items-center justify-center flex-col p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-red-500/25 border border-red-500 text-red-500 rounded-full flex items-center justify-center text-xl animate-bounce">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Zongo Junction, Century Road</h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1">
                      Accra, Ghana. Near standard transport terminals. Parking space available for clients.
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Century+Road+Zongo+Junction+Accra+Ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 hover:bg-[#00E5FF] hover:text-[#09152C] hover:border-[#00E5FF] px-5 py-2.5 rounded-xl text-xs font-bold transition-premium"
                  >
                    Open Google Maps
                  </a>
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
