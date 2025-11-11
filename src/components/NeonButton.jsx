import { motion } from 'framer-motion'
import React, { useRef } from 'react'

export default function NeonButton({ children, variant = 'cyan', onClick, className = '', as = 'button', href = '#' }) {
  const colors = {
    cyan: {
      from: 'from-[#00eaff]/80',
      to: 'to-[#00bcd4]/40',
      ring: 'shadow-[0_0_20px_#00eaff,0_0_40px_#00eaff66]',
      edge: 'shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]'
    },
    magenta: {
      from: 'from-[#ff00ff]/80',
      to: 'to-[#b400b4]/40',
      ring: 'shadow-[0_0_20px_#ff00ff,0_0_40px_#ff00ff66]',
      edge: 'shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]'
    },
    purple: {
      from: 'from-[#c084fc]/80',
      to: 'to-[#6d28d9]/40',
      ring: 'shadow-[0_0_20px_#c084fc,0_0_40px_#c084fc66]',
      edge: 'shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]'
    }
  }
  const c = colors[variant] || colors.cyan
  const ref = useRef(null)

  const Comp = as === 'a' ? 'a' : 'button'

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className={`relative inline-block ${className}`}>
      <Comp
        ref={ref}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        href={as === 'a' ? href : undefined}
        className={`group relative overflow-hidden rounded-xl px-5 py-3 font-semibold tracking-wide text-white bg-gradient-to-br ${c.from} ${c.to} border border-white/20 backdrop-blur-xl ${c.ring} ${c.edge} transition-all duration-300`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          background: 'radial-gradient(200px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.15), transparent 40%)'
        }} />
        <span className="pointer-events-none absolute inset-0 rounded-xl border border-white/20 mix-blend-overlay" />
      </Comp>
    </motion.div>
  )
}
