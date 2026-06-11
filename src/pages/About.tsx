import { FaUsers, FaAward, FaGlobe, FaHeart, FaCheckCircle, FaQuoteLeft, FaHandshake } from 'react-icons/fa'
import img from "../assets/bg.jpg"

const About = () => {
  const stats = [
    { number: '3+', label: 'Years in Business', icon: FaAward },
    { number: '5,000+', label: 'Happy Customers', icon: FaUsers },
    { number: '30+', label: 'Vehicle Models', icon: FaGlobe },
    { number: '99%', label: 'Satisfaction Rate', icon: FaHeart }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the technical condition or maintenance parameters of our fleet.',
      icon: FaCheckCircle
    },
    {
      title: 'Customer Focus',
      description: 'Bespoke vehicle customization, flexible rentals, and direct delivery programs.',
      icon: FaHeart
    },
    {
      title: 'Transparency',
      description: 'No hidden clearing charges or booking costs. Transparent billing always.',
      icon: FaHandshake
    },
    {
      title: 'Reliability',
      description: 'Active roadside assistance and immediate replacement support for corporate partners.',
      icon: FaAward
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Company',
      content: 'Outstanding service! The rental process was smooth and the vehicle was in perfect condition.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'I imported my dream car through them. The entire process was handled professionally.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      content: 'Great selection of vehicles and excellent customer service. Highly recommended!',
      rating: 5
    }
  ]

  const team = [
    {
      name: 'Tajudeen',
      role: 'Founder & CEO',
      experience: '9+ years of dedicated luxury automotive fleet management operations.'
    },
  ]

  return (
    <div className="min-h-screen bg-[#050B14] pb-24 text-gray-200">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#09152C] to-[#0A1F44] border-b border-white/5 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider block mb-2">Our Profile</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">About 2i Whitelines</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Established automotive excellence based in Accra, Ghana.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#00E5FF] text-xs font-semibold uppercase tracking-wider">How We Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Our Mission & Drive</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Founded with a commitment to elevate luxury transport, 2i Whitelines Enterprise began with a simple mission: to provide premium automotive solutions that prioritize safety, comfort, and absolute transparency. What started as a select vehicle hire service has expanded into a comprehensive fleet center.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Today, we cater to corporate entities, VIP clients, and local buyers seeking certified vehicles for hire, outright purchase, or secure direct import from major global shipping ports.
            </p>
          </div>
          <div className="bg-[#0F2143]/30 border border-white/10 rounded-3xl overflow-hidden h-[360px] shadow-2xl relative">
            <img src={img} className='w-full h-full object-cover rounded-3xl' alt="Company Fleet Background" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="bg-[#09152C]/40 border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-3xl text-[#00E5FF] mb-4 bg-white/5 p-4 rounded-full">
                  <stat.icon />
                </div>
                <div className="text-3xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Our Standards</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Core Company Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-[#0F2143]/20 border border-white/5 rounded-2xl hover:border-[#00E5FF]/20 transition-premium">
              <div className="text-3xl text-[#00E5FF] mb-5 bg-[#00E5FF]/5 w-14 h-14 rounded-full flex items-center justify-center">
                <value.icon />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-[#09152C]/30 border-y border-white/5 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#00E5FF] text-xs font-semibold uppercase tracking-wider">Leadership</span>
          <h2 className="text-3xl font-bold text-white">Meet Our Founder</h2>
          {team.map((member, index) => (
            <div key={index} className="bg-[#0F2143]/40 border border-white/10 rounded-2xl p-8 space-y-4 max-w-md mx-auto hover:shadow-card-glow transition-premium">
              <div className="bg-gradient-to-tr from-[#00E5FF] to-[#4DA3FF] rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center border border-white/10">
                <span className="text-2xl font-bold text-[#09152C]">2i</span>
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-[#00E5FF] text-xs font-semibold uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">What Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0F2143]/20 border border-white/5 rounded-2xl p-6 hover:border-[#00E5FF]/20 transition-premium relative">
              <FaQuoteLeft className="text-[#00E5FF]/20 text-4xl absolute top-6 right-6" />
              <p className="text-gray-300 mb-6 text-sm italic relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-[#09152C] rounded-full w-10 h-10 mr-3 flex items-center justify-center font-bold text-[#00E5FF] border border-white/10 text-xs">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4 text-yellow-400 text-xs">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="mr-0.5">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
