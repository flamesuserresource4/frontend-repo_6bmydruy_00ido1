import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NoiseOverlay from './components/NoiseOverlay'
import ValuationModal from './components/ValuationModal'
import { MeetTroy, MyProcess, MarketIntel } from './components/Sections'

function App() {
  const [openValuation, setOpenValuation] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* Grain texture overlay */}
      <NoiseOverlay />

      {/* Sticky floating nav */}
      <Navbar onOpenValuation={() => setOpenValuation(true)} />

      {/* HERO */}
      <Hero />

      {/* CONTENT SECTIONS */}
      <MeetTroy />
      <MyProcess />
      <MarketIntel />

      {/* Modal */}
      <ValuationModal open={openValuation} onClose={() => setOpenValuation(false)} />

      {/* Footer */}
      <footer className="relative py-12 text-center text-white/50 font-light tracking-wide">
        © {new Date().getFullYear()} The Island Authority • Grosse Ile
      </footer>
    </div>
  )
}

export default App
