'use client';
import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const tagMap: Record<string, string> = {
  'project-1': 'MANUFACTURING',
  'project-2': 'AUTOMATION',
  'project-3': 'INSURANCE',
  'project-4': 'BANKING',
};

export default function Portfolio() {
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
    <section id="portfolio" className="py-28" ref={ref}>
      <div className="container max-w-screen-xl">
        <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="h-px w-5 bg-primary" /> Portfolio
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Key automation and engineering initiatives that delivered measurable impact
            across enterprise-scale financial systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectsData.map((project, i) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <div
                key={project.id}
                className="project-card reveal-item opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                {img && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img.imageUrl as string}
                      alt={project.title}
                      fill
                      className="project-img-zoom object-cover grayscale-[20%] group-hover:grayscale-0"
                    />
                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    {/* tag */}
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur border border-border rounded-full px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                      {tagMap[project.id]}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-headline text-lg font-black group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
