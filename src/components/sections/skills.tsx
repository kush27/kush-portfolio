'use client';
import { skillsData } from '@/lib/data';
import { useEffect, useRef } from 'react';

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('opacity-100', 'translate-y-0'); e.target.classList.remove('opacity-0', 'translate-y-6'); }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const half = Math.ceil(skillsData.length / 2);
  const row1 = skillsData.slice(0, half);
  const row2 = skillsData.slice(half);

  return (
    <section id="skills" className="py-28" ref={ref}>
      <div className="container max-w-screen-xl mb-10">
        <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="h-px w-5 bg-primary" /> Tech Stack
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
            Tools &amp; Technologies
          </h2>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="overflow-hidden space-y-4">
        {/* Row 1 — left */}
        <div className="flex gap-4 animate-ticker whitespace-nowrap">
          {[...row1, ...row1, ...row1].map((skill, i) => (
            <div
              key={i}
              className="skill-pill inline-flex items-center gap-2.5 bg-card border border-border rounded-full px-5 py-2.5 cursor-default flex-shrink-0 text-sm text-muted-foreground"
            >
              <span className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: skill.color || '#888' }} />
              {skill.name}
            </div>
          ))}
        </div>

        {/* Row 2 — right */}
        <div className="flex gap-4 animate-ticker-reverse whitespace-nowrap">
          {[...row2, ...row2, ...row2].map((skill, i) => (
            <div
              key={i}
              className="skill-pill inline-flex items-center gap-2.5 bg-card border border-border rounded-full px-5 py-2.5 cursor-default flex-shrink-0 text-sm text-muted-foreground"
            >
              <span className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: skill.color || '#888' }} />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
