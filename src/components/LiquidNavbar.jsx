import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function LiquidNavbar() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -10])
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const animate = () => {
      const t = performance.now() / 1000
      const intensity = 0.6
      el.style.filter = `url('#goo') blur(0px)`
      el.style.setProperty('--tw-gradient-from', 'rgba(255,255,255,0.06)')
      el.style.setProperty('--tw-gradient-to', 'rgba(255,255,255,0.02)')
      el.style.setProperty('--distort', `${Math.sin(t) * intensity}px`)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <motion.nav style={{ y }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[86%]">
      <div ref={ref} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_#00eaff33]">
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60" />
          <div className="absolute -inset-px rounded-2xl shadow-[0_0_20px_#00eaff77] opacity-30" />
        </div>
        <div className="flex items-center justify-between px-4 md:px-6 h-14">
          <div className="text-[#00eaff] font-bold tracking-widest">AADITYA<span className="text-white/70">.DEV</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {['Home','Skills','Projects','About','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative text-white/80 hover:text-white transition-colors">
                <span className="relative z-10">{item}</span>
                <span className="absolute -inset-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity shadow-[0_0_16px_#00eaff66]" />
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" className="text-white/80 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" className="text-white/80 hover:text-white"><Mail size={18} /></a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80"><Menu /></button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 grid gap-2 bg-white/5">
            {['Home','Skills','Projects','About','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white">{item}</a>
            ))}
          </div>
        )}
      </div>
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </motion.nav>
  )
}
