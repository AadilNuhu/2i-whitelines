import { FaCar, FaShoppingBag, FaGlobe } from "react-icons/fa";
const Home = () => {
  return (
    <div className="font-sans text-white bg-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-[url('/bg.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6">
            2i Whitelines <span className="text-lightBlue">Enterprise</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl mb-10 leading-relaxed">
            The world of automobile — where your <span className="text-lightBlue font-medium">comfort</span> and
            <span className="text-lightBlue font-medium"> safety</span> come first.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#4DA3FF] border hover:bg-blue-500 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Explore Rentals
            </button>
            <button className="border border-white/80 hover:bg-white hover:text-black hover:text-deepBlue px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Contact Us
            </button>
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
            <div className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4"><FaCar /></div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Rentals</h3>
              <p className="text-gray-600">
                Comfortable, reliable vehicles for personal and corporate travel.
              </p>
            </div>

            <div className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4"><FaShoppingBag /></div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Sales</h3>
              <p className="text-gray-600">
                Carefully inspected automobiles at competitive prices you can trust.
              </p>
            </div>

            <div className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-4"><FaGlobe /></div>
              <h3 className="text-xl font-semibold mb-3">Vehicle Imports</h3>
              <p className="text-gray-600">
                Premium vehicle imports with complete documentation and support.
              </p>
            </div>
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
            Whether you’re renting, buying, or importing — we make the journey seamless.
          </p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-deepBlue text-center py-6 text-sm text-gray-300">
        © {new Date().getFullYear()} 2i Whitelines Enterprise. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
