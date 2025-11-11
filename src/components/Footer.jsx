import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Aaditya Singh. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/60 hover:text-white transition-colors"><Github size={18} /></a>
          <a href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin size={18} /></a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
