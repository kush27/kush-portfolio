'use client';
import { useEffect, useRef } from 'react';

const services = [
  {
    num: '01',
    title: 'Test Automation',
    items: [
      'UI Automation — Java, Selenium, Playwright',
      'API Testing — Postman / REST Assured',
      'BDD Frameworks — Cucumber',
      'Cross-browser and cross-platform execution',
    ],
  },
    {
    num: '02',
    title: 'Framework Development',
    items: [
      'Custom automation framework design',
      'Page Object Model (POM) implementation',
      'Reusable utilities and reporting mechanisms',
      'Integration with reporting tools (Extent Reports)',
    ],
  },
  {
    num: '03',
    title: 'Functional & E2E Testing',
    items: [
      'End-to-End (E2E) testing of complex applications',
      'Functional and regression testing',
      'Test case design and execution',
      'Defect tracking and root cause analysis',
    ],
  },
  {
    num: '04',
    title: 'CI/CD & Quality Engineering',
    items: [
      'CI/CD pipelines — Jenkins, GitHub Actions, TeamCity',
      'Automated regression suite integration',
      'Quality gates and real-time feedback loops',
      'Version-controlled test repositories (Git)',
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
            As a Senior Test Analyst, I build reliable, high-quality software by combining manual and automated testing. With 8+ years of experience, I design automation frameworks using Java, Selenium, and Cucumber, and validate complex banking applications. I focus on catching defects early, improving test coverage, and ensuring smooth, stable releases through CI/CD pipelines like TeamCity.
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
