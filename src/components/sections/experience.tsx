'use client';
import { workExperienceData } from '@/lib/data';
import { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('opacity-100', '!translate-y-0'); }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 bg-card" ref={ref}>
      <div className="container max-w-screen-xl">
        <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="h-px w-5 bg-primary" /> Career
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            A track record of delivering quality engineering solutions at top-tier consulting firms
            across Finance, Data Governance, and Retail domains.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-border space-y-14">
          {workExperienceData.map((exp, i) => (
            <div
              key={i}
              className="reveal-item opacity-0 translate-y-6 transition-all duration-700 relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Dot */}
              <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_rgba(163,230,53,0.12)]" />

              <div className="ml-2">
                <div className="text-xs font-semibold tracking-wider uppercase text-primary mb-2">
                  {exp.startDate} — {exp.endDate || 'Present'}
                </div>
                <h3 className="font-headline text-xl font-black mb-1">{exp.title}</h3>
                <div className="text-sm text-muted-foreground mb-2">{exp.company}</div>
                {exp.domain && (
                  <span className="inline-block bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-0.5 text-xs font-semibold mb-4">
                    {exp.domain}
                  </span>
                )}

                {/* Description bullets */}
                <ul className="space-y-2">
                  {exp.description.split('\n').filter(Boolean).map((line, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['•'] before:text-primary/60">
                      {line.replace(/^•\s*/, '')}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
