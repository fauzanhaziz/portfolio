'use client';
import { useState, useEffect, useRef } from 'react';

const contacts = [
  {
    label: 'Email',
    value: 'fauzan17haziz@gmail.com',
    href: 'mailto:fauzan17haziz@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    value: 'github.com/fauzanhaziz',
    href: 'https://github.com/fauzanhaziz',
    icon: '⌥',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/fauzan-haziz',
    href: 'https://linkedin.com/in/fauzan-haziz/',
    icon: '◈',
  },
  {
    label: 'Instagram',
    value: '@roverfh',
    href: 'https://www.instagram.com/roverfh/',
    icon: '⧉',
  }
];

export default function Contact() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-[#00ff88] text-sm mb-2 tracking-widest uppercase">
          &lt;CONTACT /&gt;
        </p>
        <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
        <p className="text-zinc-500 max-w-lg mb-12">
          Open to opportunities, collaborations, or just a good tech conversation.
          Feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
              }}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[rgba(0,255,136,0.1)] rounded-lg p-6 bg-[rgba(255,255,255,0.02)] hover:border-[rgba(0,255,136,0.4)] hover:bg-[rgba(0,255,136,0.03)] transition-all duration-300"
            >
              <span className="text-2xl mb-4 block text-[#00ff88]">{contact.icon}</span>
              <p className="text-zinc-500 text-xs font-mono mb-1">{contact.label}</p>
              <p className="text-white text-sm group-hover:text-[#00ff88] transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:fauzan17haziz@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff88] text-black font-bold text-sm rounded hover:opacity-90 transition"
        >
          Hire Me ✦
        </a>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-24 pt-8 border-t border-white/5">
        <p className="text-zinc-600 text-sm font-mono">
          © 2026 Fauzan Haziz — Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}