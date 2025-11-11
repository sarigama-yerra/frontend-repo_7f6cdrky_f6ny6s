import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const skills = [
  { name: 'React', level: 90, color: '#00eaff' },
  { name: 'Next.js', level: 85, color: '#c084fc' },
  { name: 'TypeScript', level: 80, color: '#ff00ff' },
  { name: 'Tailwind CSS', level: 90, color: '#00eaff' },
  { name: 'Node.js', level: 75, color: '#c084fc' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] via-[#c084fc] to-[#ff00ff]">Skills</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <GlassCard key={s.name}>
              <div className="flex items-center justify-between">
                <span className="text-white/90 font-medium">{s.name}</span>
                <span className="text-white/60 text-sm">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full shadow-[0_0_16px]" style={{ backgroundColor: s.color, boxShadow: `0 0 24px ${s.color}` }} />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
