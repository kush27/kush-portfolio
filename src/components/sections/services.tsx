'use client';
import { useEffect, useRef } from 'react';

const services = [
  {
    num: '01',
    title: 'Test Automation',
    items: [
      'UI Automation — Selenium & Playwright',
      'API Testing — RestAssured & Postman',
      'BDD Frameworks — Cucumber',
      'Cross-browser & Mobile execution',
    ],
  },
  {
    num: '02',
    title: 'Backend API Dev',
    items: [
      'REST APIs via Spring Boot',
      'Test data management services',
      'Event triggering & microservice validation',
      'Integration with test pipelines',
    ],
  },
  {
    num: '03',
    title: 'Performance Testing',
    items: [
      'Load & stress testing with Gatling',
      'Concurrency testing for microservices',
      'Performance regression frameworks',
      'Bottleneck analysis & reporting',
    ],
  },
  {
    num: '04',
    title: 'CI/CD Quality',
    items: [
      'Jenkins & Azure DevOps pipelines',
      'GitHub Actions automation',
      'Quality gates & feedback loops',
      'Automated test reporting',
    ],
  },
];

export default function Services() {
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
    <section id="services" className="py-28" ref={ref}>
      <div className="container max-w-screen-xl">
        <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="h-px w-5 bg-primary" /> What I Do
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-4">
            Engineering Quality<br />at Scale
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed text-sm">
            As a QA Lead and Senior Consultant, I architect robust quality systems that give
            engineering teams the confidence to ship fast without breaking things.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal-item opacity-0 translate-y-6 transition-all duration-700 bg-card p-8 hover:bg-secondary/50 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              <div className="text-xs font-bold tracking-widest text-primary/60 font-headline mb-5">{s.num}</div>
              <h3 className="font-headline text-lg font-black mb-5 group-hover:text-primary transition-colors">{s.title}</h3>
              <ul className="space-y-2.5">
                {s.items.map(item => (
                  <li key={item} className="text-xs text-muted-foreground pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-primary/40">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
