import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import NeonButton from './NeonButton'

const projects = [
  {
    title: 'Neon UI System',
    description: 'A cyberpunk design system with neon components, glassmorphism and motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Hologram Portfolio',
    description: 'Interactive 3D portfolio using Spline and WebGL elements.',
    tags: ['Spline', 'Three.js', 'Next.js'],
    demo: '#',
    code: '#'
  },
  {
    title: 'AI Code Lab',
    description: 'Sandbox for AI + code generation with live previews.',
    tags: ['AI', 'Node', 'MongoDB'],
    demo: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] via-[#c084fc] to-[#ff00ff]">Projects</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -6 }} className="group">
              <GlassCard hover={false} className="p-0 overflow-hidden">
                <div className="relative h-44 bg-gradient-to-br from-[#0ea5e9]/30 via-[#7c3aed]/30 to-[#ec4899]/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,234,255,0.3),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,0,255,0.25),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(192,132,252,0.25),transparent_40%)]" />
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white/90">{p.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs text-white bg-gradient-to-r from-[#00eaff]/30 to-[#ff00ff]/30 border border-white/10">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <NeonButton as="a" href={p.demo} variant="cyan" className="!px-4 !py-2 text-sm">Live Demo</NeonButton>
                    <NeonButton as="a" href={p.code} variant="purple" className="!px-4 !py-2 text-sm">GitHub</NeonButton>
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 group-hover:shadow-[0_0_24px_#00eaff66] transition-all" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
