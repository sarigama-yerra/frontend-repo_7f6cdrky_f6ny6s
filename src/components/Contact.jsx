import React from 'react'
import { motion } from 'framer-motion'
import NeonButton from './NeonButton'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] via-[#c084fc] to-[#ff00ff]">Contact</motion.h2>
        <form className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_30px_#00eaff22]">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-white/70 text-sm">Name</label>
              <input type="text" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00eaff]/60 focus:border-transparent" placeholder="Your name" />
            </div>
            <div>
              <label className="text-white/70 text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff00ff]/60 focus:border-transparent" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-white/70 text-sm">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c084fc]/60 focus:border-transparent" placeholder="Tell me about your project..." />
          </div>
          <div className="mt-6 flex justify-end">
            <NeonButton variant="cyan">Send Message</NeonButton>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
        </form>
      </div>
    </section>
  )
}
