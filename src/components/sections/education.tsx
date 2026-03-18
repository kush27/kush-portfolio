'use client';
import { educationData } from '@/lib/data';
import { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
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

  return (
    <section id="education" className="py-28 bg-card" ref={ref}>
      <div className="container max-w-screen-xl">
        <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="h-px w-5 bg-primary" /> Education
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
            Academic Background
          </h2>
        </div>

        <div className="space-y-4">
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="reveal-item opacity-0 translate-y-6 transition-all duration-700 bg-background border border-border rounded-2xl p-7 flex gap-6 items-start hover:border-primary/20 transition-colors group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-black mb-1">{edu.degree}</h3>
                <div className="text-sm text-primary font-semibold mb-1">{edu.institution}</div>
                <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">{edu.startDate} — {edu.endDate}</div>
                {edu.description && (
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
