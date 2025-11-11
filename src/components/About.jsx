import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] via-[#c084fc] to-[#ff00ff]">About</motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <GlassCard hover={false} className="p-0 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" alt="Aaditya" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00eaff]/20 via-transparent to-[#ff00ff]/20 mix-blend-overlay" />
              <div className="absolute inset-0 ring-1 ring-white/20" />
            </div>
          </GlassCard>
          <div>
            <p className="text-white/70 leading-relaxed">
              I design and build future-facing interfaces with a focus on motion, depth, and immersion. My work blends engineering precision with creative direction — crafting experiences that feel alive.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              From design systems to 3D interactions, I explore the edges of what the web can be, while keeping performance and accessibility at the core.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
