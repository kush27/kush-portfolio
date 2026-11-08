
'use client';

import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';

const tagMap: Record<string, string> = {
  'project-1': 'MANUFACTURING',
  'project-2': 'CRM',
  'project-3': 'INSURANCE',
  'project-4': 'BANKING',
  'project-5': 'AUTOMATION',
  'project-6': 'QA LEARNING',
};

const techStackMap: Record<string, string[]> = {
  'project-1': ['Java', 'Selenium', 'Cucumber'],
  'project-2': ['Java', 'Selenium', 'TestNG'],
  'project-3': ['Pega', 'Java', 'Selenium', 'Cucumber'],
  'project-4': ['Pega Decisioning', 'Java', 'Selenium', 'Cucumber'],
  'project-5': ['Java', 'Selenium', 'Cucumber', 'TestNG', 'POM'],
  'project-6': [
    'Manual Testing',
    'Java',
    'Selenium',
    'API Testing',
    'SQL',
  ],
};

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = projectsData.find(
    (project) => project.id === selectedProject
  );

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0');
            e.target.classList.remove('opacity-0', 'translate-y-6');
          }
        }),
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll('.reveal-item')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Close popup using Escape key
  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-28" ref={ref}>
      <div className="container max-w-screen-xl">

        {/* Section Heading */}
        <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <span className="h-px w-5 bg-primary" />
            Portfolio
          </div>

          <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-4">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Key automation and engineering initiatives, alongside my QA
            learning resources covering software testing and automation.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {projectsData.map((project, i) => {
            const img = PlaceHolderImages.find(
              (p) => p.id === project.id
            );

            const isBlog = project.id === 'project-6';
            const techStack = techStackMap[project.id] ?? [];

            const cardClassName =
              'project-card reveal-item opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 flex flex-col h-full';

            const cardContent = (
              <>
                {/* Project Image */}
                {img && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img.imageUrl as string}
                      alt={project.title}
                      fill
                      className="project-img-zoom object-cover grayscale-[20%] group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur border border-border rounded-full px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                      {tagMap[project.id] ?? 'PROJECT'}
                    </div>
                  </div>
                )}

                {/* Project Information */}
                <div className="p-6 flex flex-col flex-1">

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-headline text-lg font-black group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      className="h-5 w-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/70 text-secondary-foreground border border-border/70 group-hover:border-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Blog Link Text */}
                  {isBlog && (
                    <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary">
                      Explore Kush QA Blog
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}

                  {/* View Details Text */}
                  {!isBlog && (
                    <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary">
                      View Project Details
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </>
            );

            // Blog Card
            if (isBlog) {
              return (
                <a
                  key={project.id}
                  href={project.link ?? 'https://kushqa.blogspot.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — opens in a new tab`}
                  className={cardClassName}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {cardContent}
                </a>
              );
            }

            // Other Project Cards
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onClick={() => setSelectedProject(project.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project.id);
                  }
                }}
                className={`${cardClassName} cursor-pointer text-left`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Project Details Popup */}
        {selectedProjectData && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Project Title */}
              <div className="mb-7 pr-10">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  {tagMap[selectedProjectData.id] ?? 'PROJECT'}
                </span>

                <h2
                  id="project-modal-title"
                  className="mt-3 text-2xl sm:text-3xl font-black font-headline"
                >
                  {selectedProjectData.title}
                </h2>
              </div>

              {/* Project Overview */}
              <div className="mb-7">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                  Project Overview
                </h3>

                <p className="text-sm text-muted-foreground leading-7">
                  {selectedProjectData.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-7">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
                  Tools & Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {(techStackMap[selectedProjectData.id] ?? []).map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-secondary/70 px-3 py-2 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Close Action */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
