import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCar, FaShoppingBag, FaGlobe, FaStar, FaCheckCircle, FaUsers, FaAward, FaShieldAlt, FaChevronDown, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const featuredVehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz E-Class',
      type: 'Luxury Sedan',
      price: '$89/day',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
      rating: 4.9,
      features: ['Leather Seats', 'Autopilot Assist', 'Ambient Light']
    },
    {
      id: 2,
      name: 'BMW X5 M-Sport',
      type: 'Premium SUV',
      price: '$120/day',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
      rating: 4.8,
      features: ['AWD System', 'Panoramic Roof', 'M-Performance']
    },
    {
      id: 3,
      name: 'Tesla Model Y Performance',
      type: 'Electric SUV',
      price: '$95/day',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop',
      rating: 4.9,
      features: ['Supercharging', 'Zero Emissions', 'Minimalist Cabin']
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
    { number: '5+', label: 'Years Experience', icon: FaAward },
    { number: '200+', label: 'Happy Clients', icon: FaUsers },
    { number: '20+', label: 'Luxury Fleet', icon: FaCar },
    { number: '99%', label: 'Satisfaction Rate', icon: FaStar }
  ];

  const faqs = [
    {
      q: "What is required to rent a vehicle?",
      a: "You will need a valid driver's license (international or local Ghanaian license depending on residency), a valid ID or Passport, and the security deposit fee. We accept major credit cards, cash, and mobile money."
    },
    {
      q: "How does the vehicle import process work?",
      a: "Simply contact us with your vehicle preference, budget, and origin country. We handle source validation, purchasing inspection, safe shipping/freight, clearing documentation, and registration at Accra ports, delivering the vehicle directly to your doorstep."
    },
    {
      q: "Do you offer warranty or inspection checks for vehicle sales?",
      a: "Yes! Every vehicle in our sales inventory undergoes a comprehensive multi-point inspection. We offer flexible warranty options ranging up to 12 months for select brands."
    }
  ];

  return (
    <div className="font-sans text-gray-200 bg-[#050B14] overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 premium-gradient-bg">
        {/* Decorative Grid and Ambient Lights */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DA3FF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#00E5FF] mb-6">
              Welcome to 2i Whitelines Enterprise
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-tight">
              Drive The Experience <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#4DA3FF]">
                Of Pure Luxury
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              We provide unmatched comfort and premium safety in car rentals, imports, and vehicle sales in Accra, Ghana.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link 
                to="/rentals" 
                className="bg-[#00E5FF] text-[#09152C] hover:bg-white hover:shadow-glow px-8 py-4 rounded-full font-bold transition-premium text-center"
              >
                Explore Rentals
              </Link>
              <Link 
                to="/contact" 
                className="border border-white/20 hover:bg-white hover:text-[#09152C] hover:border-white px-8 py-4 rounded-full font-bold transition-premium text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative bg-[#09152C] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="text-3xl text-[#00E5FF] mb-4 bg-white/5 p-4 rounded-full">
                  <stat.icon />
                </div>
                <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED VEHICLES ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Premium Selection</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Featured Handpicked Fleet</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Explore some of our most requested high-end automobiles for rent or sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, idx) => (
              <motion.div 
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-[#0F2143]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-[#00E5FF]/30 transition-premium hover:shadow-card-glow"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#09152C]/95 backdrop-blur-md border border-white/10 text-[#00E5FF] px-4 py-1.5 rounded-full text-xs font-semibold">
                    {vehicle.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <div className="flex items-center mb-4 text-[#00E5FF]">
                    <FaStar className="mr-1 text-yellow-400" />
                    <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
                    <span className="text-gray-500 text-xs ml-2">(12 reviews)</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-400">
                        <FaCheckCircle className="text-[#00E5FF] mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Pricing from</span>
                      <span className="text-2xl font-bold text-white">{vehicle.price}</span>
                    </div>
                    <Link 
                      to="/rentals"
                      className="bg-white/5 hover:bg-[#00E5FF] hover:text-[#09152C] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-premium"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-[#09152C]/60 border-y border-white/5 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Elite Mobility Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tailored high-end automobile programs designed for comfort, luxury, and reliability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { to: '/rentals', icon: FaCar, title: 'Luxury Rentals', desc: 'Sleek executive sedans, spacious crossovers, and rugged high-clearance offroaders for corporate or individual requests.' },
              { to: '/sales', icon: FaShoppingBag, title: 'Premium Sales', desc: 'Carefully evaluated, certified pre-owned luxury vehicles at transparent, attractive rates with flexible package support.' },
              { to: '/import', icon: FaGlobe, title: 'Global Imports', desc: 'Secure direct vehicle importing from Europe, America, and Asia with complete customs clearance and local registration.' }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link 
                  to={srv.to}
                  className="group block p-8 rounded-2xl bg-[#0F2143]/30 border border-white/5 hover:border-[#00E5FF]/30 transition-premium relative overflow-hidden h-full"
                >
                  <div className="text-4xl text-[#00E5FF] mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-[#00E5FF] group-hover:text-[#09152C] transition-premium">
                    <srv.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">{srv.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                  <span className="text-xs text-[#00E5FF] font-semibold group-hover:translate-x-2 inline-block transition-transform duration-300">
                    Learn More &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Unmatched Standards</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Why Choose 2i Whitelines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: FaShieldAlt, title: 'Comprehensive Safety', desc: 'Every car gets full detailing, safety checklists, and routine service parameters checks before key handover.' },
              { icon: FaCheckCircle, title: 'Verified History', desc: 'Full CARFAX or international background report transparency for every vehicle sales or direct import project.' },
              { icon: FaAward, title: 'Luxury Treatment', desc: 'Bespoke airport shuttle transfer, VIP private chauffeur options, and 24/7 client helpline services.' }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 bg-[#0F2143]/20 border border-white/5 rounded-2xl"
              >
                <div className="w-16 h-16 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <card.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#09152C]/40 border-y border-white/5 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Client Reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#0F2143]/40 border border-white/5 rounded-2xl p-8 hover:border-[#00E5FF]/20 transition-premium">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border border-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                    <p className="text-[#00E5FF] text-xs font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">Common Inquiries</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#0F2143]/30 border border-white/5 rounded-xl overflow-hidden transition-premium"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-white hover:text-[#00E5FF] transition-colors"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className={`text-sm transition-transform duration-300 ${activeFaq === idx ? 'rotate-185 text-[#00E5FF]' : 'text-gray-400'}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 px-6 text-center border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Drive with Absolute Comfort <br />& Confidence Today
          </h2>
          <p className="mb-12 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Whether you want a temporary rental, are purchasing a model, or importing directly, we are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#00E5FF] text-[#09152C] px-8 py-4 rounded-full font-bold hover:bg-white hover:shadow-glow transition-premium text-center w-full sm:w-auto"
            >
              Get Started Now
            </Link>
            <a 
              href="https://wa.me/233553552490"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-premium w-full sm:w-auto"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
