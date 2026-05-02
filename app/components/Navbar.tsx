'use client';

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'
      }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-mono text-[#00ff88] font-medium tracking-tight hover:opacity-80 transition-opacity">
          &lt;fauzan /&gt;
        </a>
        <ul className="flex gap-8 text-sm text-zinc-400">

          <li>
            <a href="#about" className="relative group hover:text-[#00ff88] transition-colors">About
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
            </a>
          </li>

          <li>
            <a href="#projects" className="relative group hover:text-[#00ff88] transition-colors">Projects
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a href="#skills" className="relative group hover:text-[#00ff88] transition-colors">Skills
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a href="#contact" className="relative group hover:text-[#00ff88] transition-colors">Contact
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}