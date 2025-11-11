import { motion } from 'framer-motion'
import React from 'react'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_#00eaff22] ${className}`}
    >
      <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
