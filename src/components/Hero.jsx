import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import NeonButton from './NeonButton'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#00eaff]/20 blur-3xl" />
        <div className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#ff00ff]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[40rem] bg-gradient-to-r from-[#c084fc]/20 to-[#00eaff]/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.15]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Aaditya Singh — </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] via-[#c084fc] to-[#ff00ff] drop-shadow-[0_0_20px_#00eaff]">Cyberpunk Developer</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-lg text-white/70">
            Frontend • Full Stack • Creative Technologist
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NeonButton as="a" href="#projects" variant="cyan">See Projects</NeonButton>
            <NeonButton as="a" href="/Aaditya_Singh_Resume.pdf" variant="magenta">Download Resume</NeonButton>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative h-[380px] md:h-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_#c084fc44]">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  )
}
