import React from 'react'
import LiquidNavbar from './components/LiquidNavbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <LiquidNavbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-[#00eaff]/10 blur-[140px]" />
        <div className="absolute left-[10%] bottom-[10%] h-[28rem] w-[28rem] rounded-full bg-[#ff00ff]/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-[#c084fc]/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>
    </div>
  )
}
