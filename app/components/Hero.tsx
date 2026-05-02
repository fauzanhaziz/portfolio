'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const ROLES = [
  'Software Developer',
  'Backend Engineer',
  'ML Enthusiast',
  'Python Developer',
];

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isDeleting && charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setDisplayedRole(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex > current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayedRole(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }, 0);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.018) 2px, rgba(0,255,136,0.018) 4px)',
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,255,136,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,255,136,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 py-32">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Left — Text */}
          <div className="flex-1 max-w-xl">

            {/* Comment label */}
            <p
              className="font-mono text-[#00ff88] text-sm tracking-widest mb-5"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.2s',
              }}
            >
              <span className="text-[#555]"> </span>hello_world.py
            </p>

            {/* Name */}
            <h1
              className="text-4xl lg:text-6xl font-bold text-[#e5e5e5] leading-tight mb-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
              }}
            >
              Hi, I&apos;m{' '}
              <span
                className="text-[#00ff88]"
                style={{ textShadow: '0 0 30px rgba(0,255,136,0.3)' }}
              >
                Fauzan Haziz
              </span>
            </h1>

            {/* Typing role */}
            <div
              className="flex items-center gap-2 mb-6 h-9"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.5s',
              }}
            >
              <span className="text-[#888] font-mono text-lg lg:text-xl">&gt; </span>
              <span className="text-[#e5e5e5] font-mono text-lg lg:text-xl">
                {displayedRole}
              </span>
              <span
                className="text-[#00ff88] font-mono text-xl"
                style={{ animation: 'blink 1s step-end infinite' }}
              >
                |
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-[#666] text-sm lg:text-base leading-relaxed mb-10 font-mono"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.65s',
                borderLeft: '2px solid rgba(0,255,136,0.25)',
                paddingLeft: '1rem',
              }}
            >
              Building web applications & intelligent systems using{' '}
              <span className="text-[#00ff88]">Python</span>,{' '}
              <span className="text-[#00ff88]">Django</span>, and{' '}
              <span className="text-[#00ff88]">Machine Learning</span>.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.8s',
              }}
            >
              <a
                href="#projects"
                className="group relative font-mono text-sm px-6 py-3 border border-[#00ff88] text-[#00ff88] rounded overflow-hidden transition-all duration-300 hover:text-[#0a0a0a]"
                style={{ transition: 'color 0.3s' }}
              >
                <span
                  className="absolute inset-0 bg-[#00ff88] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
                <span className="relative">View Projects →</span>
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-6 py-3 border border-[rgba(0,255,136,0.25)] text-[#666] rounded transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88]"
              >
                Contact Me
              </a>
            </div>

            {/* Status badge */}
            <div
              className="mt-10 flex items-center gap-2"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease 1s',
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#00ff88]"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
              <span className="font-mono text-xs text-[#444] tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className="relative shrink-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
            }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00ff88, transparent, #00ff88, transparent, #00ff88)',
                animation: 'spin-slow 6s linear infinite',
                padding: '2px',
                borderRadius: '50%',
                filter: 'blur(1px)',
              }}
            />

            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00ff88] opacity-70" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00ff88] opacity-70" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#00ff88] opacity-70" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00ff88] opacity-70" />

            {/* Photo container */}
            <div
              className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden"
              style={{
                border: '2px solid rgba(0,255,136,0.4)',
                boxShadow: '0 0 40px rgba(0,255,136,0.15), inset 0 0 40px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src="/images/profile1.jpeg"
                alt="Fauzan Haziz"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Floating tag */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs bg-[#0a0a0a] border border-[rgba(0,255,136,0.3)] text-[#00ff88] px-3 py-1 rounded whitespace-nowrap"
            >
              &lt;developer /&gt;
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease 1.2s',
        }}
      >
        <span className="font-mono text-[10px] text-[#333] tracking-widest uppercase">scroll</span>
        <div
          className="w-px h-8 bg-linear-to-b from-[#00ff88] to-transparent"
          style={{ animation: 'scroll-line 2s ease-in-out infinite' }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scroll-line {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}