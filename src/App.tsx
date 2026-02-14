import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import Sales from './pages/Sales'
import Import from './pages/Import'
import About from './pages/About'
import Contact from './pages/Contact'
import VehicleDetail from './pages/VehicleDetail'
import Booking from './pages/Booking'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rentals/:id" element={<VehicleDetail />} />
          <Route path="/rentals/:id/book" element={<Booking />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/:id" element={<VehicleDetail />} />
          <Route path="/import" element={<Import />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
