import { Link } from 'react-router-dom'
import { FaCar, FaShoppingBag, FaGlobe, FaStar, FaCheckCircle, FaUsers, FaAward, FaClock } from "react-icons/fa";

const Home = () => {
  const featuredVehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz E-Class',
      type: 'Luxury Sedan',
      price: '$89/day',
      image: 'https://www.mbusa.com/content/dam/mb-nafta/us/myco/my26/e-class/e-sedan/class-page/2026-E-SEDAN-HC-D.jpg',
      rating: 4.9
    },
    {
      id: 2,
      name: 'BMW X5',
      type: 'Premium SUV',
      price: '$120/day',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=250&fit=crop',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      type: 'Electric',
      price: '$95/day',
      image: 'https://www.copilotsearch.com/uploads/2022_tesla_model_3.webp',
      rating: 4.9
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Company',
      content: 'Outstanding service! The rental process was smooth and the vehicle was in perfect condition.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'I imported my dream car through them. The entire process was handled professionally.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Marketing Director',
      content: 'Great selection of vehicles and excellent customer service. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years in Business', icon: FaAward },
    { number: '5000+', label: 'Happy Customers', icon: FaUsers },
    { number: '100+', label: 'Vehicle Fleet', icon: FaCar },
    { number: '98%', label: 'Satisfaction Rate', icon: FaStar }
  ];

  return (
    <div className="font-sans text-white bg-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&h=1200&fit=crop')] md:bg-[url('https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=1080&fit=crop')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6">
            2i Whitelines <span className="text-lightBlue">Enterprise</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl mb-10 leading-relaxed">
            The world of automobile — where your <span className="text-lightBlue font-medium">comfort</span> and
            <span className="text-lightBlue font-medium"> safety</span> come first.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/rentals" 
              className="bg-[#4DA3FF] border hover:bg-blue-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Explore Rentals
            </Link>
            <Link 
              to="/contact" 
              className="border border-white/80 hover:bg-white hover:text-black hover:text-deepBlue px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-[#0A1F44] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl text-[#4DA3FF] mb-4">
                  <stat.icon />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED VEHICLES ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium vehicles available for rent and purchase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.type}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#4DA3FF]">{vehicle.price}</span>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-gray-600">{vehicle.rating}</span>
                    </div>
                  </div>
                  <Link 
                    to="/rentals"
                    className="block w-full bg-[#4DA3FF] text-white text-center py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-gray-200 text-[#0A1F44] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            We provide trusted automobile solutions tailored to your lifestyle and business needs.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            <Link 
              to="/rentals"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4 text-[#4DA3FF]"><FaCar /></div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Rentals</h3>
              <p className="text-gray-600">
                Comfortable, reliable vehicles for personal and corporate travel.
              </p>
            </Link>

            <Link 
              to="/sales"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4 text-[#4DA3FF]"><FaShoppingBag /></div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Sales</h3>
              <p className="text-gray-600">
                Carefully inspected automobiles at competitive prices you can trust.
              </p>
            </Link>

            <Link 
              to="/import"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4 text-[#4DA3FF]"><FaGlobe /></div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Imports</h3>
              <p className="text-gray-600">
                Premium vehicle imports with complete documentation and support.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">Why Choose 2i Whitelines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and quality vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4DA3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">All vehicles undergo rigorous inspection and maintenance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4DA3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4DA3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in automotive services</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#0A1F44]">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative bg-lightBlue py-20 px-6 text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-90"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Drive with Comfort & Confidence
          </h2>
          <p className="mb-10 text-blue-100 text-lg">
            Whether you're renting, buying, or importing — we make the journey seamless.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-deepBlue text-center py-6 text-sm text-gray-300 lg:hidden">
        © {new Date().getFullYear()} 2i Whitelines Enterprise. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
