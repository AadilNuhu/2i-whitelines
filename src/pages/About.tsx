import { FaUsers, FaAward, FaGlobe, FaHeart, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa'

const About = () => {
  const stats = [
    { number: '10+', label: 'Years in Business', icon: FaAward },
    { number: '5000+', label: 'Happy Customers', icon: FaUsers },
    { number: '50+', label: 'Vehicle Models', icon: FaGlobe },
    { number: '98%', label: 'Satisfaction Rate', icon: FaHeart }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our vehicles and services.',
      icon: FaCheckCircle
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority in every interaction.',
      icon: FaHeart
    },
    {
      title: 'Transparency',
      description: 'Honest pricing and clear communication in all our dealings.',
      icon: FaCheckCircle
    },
    {
      title: 'Reliability',
      description: 'Dependable service you can count on, every time.',
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
      name: 'John Smith',
      role: 'Founder & CEO',
      experience: '15+ years in automotive industry'
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Manager',
      experience: '10+ years in logistics'
    },
    {
      name: 'David Kim',
      role: 'Sales Director',
      experience: '12+ years in automotive sales'
    },
    {
      name: 'Lisa Anderson',
      role: 'Customer Service Lead',
      experience: '8+ years in customer relations'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About 2i Whitelines</h1>
          <p className="text-xl text-gray-200">Your trusted partner in automotive excellence since 2014</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2014, 2i Whitelines Enterprise began with a simple mission: to provide exceptional automotive services that put customers first. What started as a small rental service has grown into a comprehensive automotive solutions provider.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we offer vehicle rentals, sales, and import services, maintaining the same commitment to quality, transparency, and customer satisfaction that defined us from day one.
            </p>
            <p className="text-gray-600">
              Our team of experienced professionals is dedicated to helping you find the perfect vehicle solution, whether you're looking to rent, buy, or import your dream car.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-[#4DA3FF] mb-4">
                  <stat.icon />
                </div>
                <div className="text-3xl font-bold text-[#0A1F44] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl text-[#4DA3FF] mb-4">
                <value.icon />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-1">{member.name}</h3>
                <p className="text-[#4DA3FF] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0A1F44] mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <FaQuoteLeft className="text-[#4DA3FF] text-2xl mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1F44]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
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
