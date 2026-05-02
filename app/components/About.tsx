'use client';

import { useState, useEffect, useRef } from "react";


export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();

  }, []);


  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
        }}>
          <p className="font-mono text-[#00ff88] text-sm mb-2 tracking-widest uppercase">
            &lt;ABOUT /&gt;
          </p>
          <h3 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-[rgba(0,255,136,0.2)]">About Me</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-zinc-400 leading-relaxed" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}>
            <p>
              I&apos;m a <span className="text-white font-medium">Software Engineering Technology</span> student
              with a strong interest in Web Development, Artificial Intelligence, and Data Science.
            </p>
            <p>
              Experienced in building web-based systems and developing Python-based projects,
              including a phishing detection system. Skilled in backend development, database
              management, and data analysis.
            </p>
            <p>
              Focused on building <span className="text-[#00ff88]">scalable web applications</span> and
              intelligent systems to solve real-world problems.
            </p>
          </div>
          <div className="space-y-3" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
          }}>
            <p className="text-zinc-500 text-sm font-mono mb-4"> quick facts</p>
            {[
              ['education', 'Software Engineering Technology'],
              ['location', 'Padang, West Sumatra, Indonesia'],
              ['focus', 'Fullstack & Machine Learning'],
              ['stack', 'Python · PHP'],
            ].map(([key, value]) => (
              <div key={key} className="flex items-start gap-2 font-mono text-sm border border-[rgba(0,255,136,0.1)] rounded px-4 py-2 bg-[rgba(0,255,136,0.02)]">
                <span className="text-[#00ff88] shrink-0">{key}:</span>
                <span className="text-zinc-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CV Button */}
        <div
          className="flex justify-center mt-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
          }}
        >
          <a
            href="/fauzan-cv.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 border border-[#00ff88] text-[#00ff88] rounded hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all duration-300"
          >
            <span>↓</span>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}