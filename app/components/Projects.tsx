'use client';

import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    number: '01',
    name: 'Phishing Detection System',
    description:
      'A machine learning-based system to detect phishing websites using URL feature extraction and classification algorithms. Built to help users identify malicious links in real time.',
    stack: ['Python', 'Machine Learning', 'Django', 'PostgreSQL'],
    features: [
      'URL feature extraction & analysis',
      'ML classification model',
      'REST API backend',
      'Real-time detection',
    ],
    role: 'Full Stack Developer & ML Engineer',
    github: 'https://github.com/fauzanhaziz', // ganti dengan link repo spesifik
    demo: '',
    highlight: true,
    ongoing: true,
  },
  {
    number: '02',
    name: 'Car Rental System',
    description:
      'A web-based car rental management system with booking, vehicle management, and user authentication features.',
    stack: ['Laravel', 'MySQL', 'Blade', 'Bootstrap'],
    features: [
      'Vehicle booking & scheduling',
      'Admin dashboard',
      'User authentication',
      'Transaction management',
    ],
    role: 'Full Stack Developer',
    github: 'https://github.com/fauzanhaziz/backend-rental-mobil.git', // ganti dengan link repo spesifik
    demo: 'https://niagakaryamandiri-rentalmobilpadang.vercel.app/', // ganti dengan link demo jika ada
    highlight: false,
    ongoing: false,
  },
  {
    number: '03',
    name: 'School Management System',
    description:
      'A comprehensive school management system to handle student data, attendance, grades, and academic reporting.',
    stack: ['Laravel', 'MySQL', 'Blade', 'Bootstrap'],
    features: [
      'Student & teacher management',
      'Attendance tracking',
      'Grade & report management',
      'Role-based access control',
    ],
    role: 'Backend Developer',
    github: 'https://github.com/DYTye/PBL_Solo_Squad.git', // ganti dengan link repo spesifik
    demo: '',
    highlight: false,
    ongoing: false,
  },
];

export default function Projects() {

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
    <section id="projects" ref={sectionRef} className="py-24 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-[#00ff88] text-sm mb-2 tracking-widest uppercase">
          &lt;PROJECTS /&gt;
        </p>
        <h3 className="text-3xl font-bold text-white mb-12">Projects</h3>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.number}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.1}s`,
              }}
              className={`border rounded-lg p-8 transition-all duration-300 ${project.highlight
                ? 'border-[#00ff88]/30 bg-[#00ff88]/3 project-card-featured'
                : 'border-white/10 hover:border-[rgba(0,255,136,0.3)] project-card'
                }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[#00ff88] text-xs mb-1 block">
                    {project.number} {project.highlight && '— featured'}
                  </span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-xl font-bold text-white">{project.name}</h4>
                    {project.ongoing && (
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-yellow-500/40 text-yellow-400 bg-yellow-500/5">
                        ⚡ ongoing
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 text-sm mt-1">Role: {project.role}</p>

                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs border border-white/20 text-zinc-400 rounded hover:border-[#00ff88] hover:text-[#00ff88] transition"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs bg-[#00ff88] text-black font-semibold rounded hover:opacity-90 transition"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-zinc-500 text-xs font-mono mb-3"> tech_stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono border border-[rgba(0,255,136,0.3)] text-[#00ff88] rounded bg-[rgba(0,255,136,0.05)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono mb-3"> key_features</p>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-zinc-400 text-sm flex items-center gap-2">
                        <span className="text-[#00ff88] text-xs">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .project-card:hover {
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.08);
        }
        .project-card-featured:hover {
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.12);
        }
      `}</style>
    </section>
  );
}