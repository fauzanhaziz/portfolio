'use client';

import { useState, useEffect, useRef } from "react";

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'PHP', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks',
    skills: ['Django', 'Laravel', 'REST API'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'AI / Data',
    skills: ['Machine Learning', 'Data Analysis', 'Scikit-learn', 'Pandas'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-[#00ff88] text-sm mb-2 tracking-widest uppercase">
          &lt;SKILLS /&gt;
        </p>
        <h3 className="text-3xl font-bold text-white mb-12">Skills</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={group.category}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
              }}

              className="border border-[rgba(0,255,136,0.1)] rounded-lg p-6 bg-[rgba(255,255,255,0.02)]">
              <p className="text-[#00ff88] text-xs font-mono mb-4"> {group.category.toLowerCase()}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono border border-[rgba(0,255,136,0.25)] text-zinc-400 rounded hover:border-[#00ff88] hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.05)] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}