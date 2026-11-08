
'use client';

import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Briefcase, Target, Wrench } from 'lucide-react';

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
  'project-2': ['Java', 'Selenium', 'TestNG', 'POM'],
  'project-3': ['Pega', 'Java', 'Selenium', 'Cucumber'],
  'project-4': ['Pega Decisioning', 'Java', 'Selenium', 'Cucumber', 'TeamCity'],
  'project-5': ['Java', 'Selenium', 'Cucumber', 'TestNG', 'POM', 'Extent Reports'],
  'project-6': ['Manual Testing', 'Java', 'Selenium', 'API Testing', 'SQL', 'AI for Testing'],
};

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = projectsData.find(
    (project) => project.id === selectedProject
  );

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll('.reveal-item')
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility and modal focus
  useEffect(() => {
    if (!selectedProject) return;

    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  const cardClassName =
    'project-card reveal-item opacity-0 translate-y-6 transition-all duration-700 bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 flex flex-col h-full';

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

          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
            Explore my experience across enterprise application testing,
            Pega Decisioning, UI automation, framework development and
            QA learning initiatives.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="text-xs px-3 py-2 rounded-lg bg-secondary border border-border text-muted-foreground">
              5 Project Case Studies
            </span>
            <span className="text-xs px-3 py-2 rounded-lg bg-secondary border border-border text-muted-foreground">
              1 QA Learning Platform
            </span>
          </div>
        </div>

        {/* Existing Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectsData.map((project, index) => {
            const img = PlaceHolderImages.find(
              (image) => image.id === project.id
            );

            const isBlog = project.id === 'project-6';
            const techStack = techStackMap[project.id] ?? [];

            const cardContent = (
              <>
                {/* Project Image */}
                {img && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="project-img-zoom object-cover grayscale-[20%] group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 bg-background/85 backdrop-blur border border-border rounded-full px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                      {tagMap[project.id] ?? 'PROJECT'}
                    </div>
                  </div>
                )}

                {/* Project Information */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-headline text-lg font-black leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      className="h-5 w-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  {project.domain && (
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                      {project.domain}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Tools & Technologies
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

                  {/* Card Action */}
                  <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary">
                    {isBlog ? 'Explore Kush QA Blog' : 'View Project Case Study'}
                    {isBlog ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </>
            );

            // Kush QA Blog Card
            if (isBlog) {
              return (
                <a
                  key={project.id}
                  href={project.link ?? 'https://kushqa.blogspot.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — opens in a new tab`}
                  className={cardClassName}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {cardContent}
                </a>
              );
            }

            // Project Case Study Cards
            return (
              <button
                key={project.id}
                type="button"
                aria-label={`View case study for ${project.title}`}
                onClick={() => setSelectedProject(project.id)}
                className={`${cardClassName} cursor-pointer text-left`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {cardContent}
              </button>
            );
          })}
        </div>

        {/* Project Case Study Modal */}
        {selectedProjectData && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-5"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card/95 backdrop-blur px-6 py-4 sm:px-8">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  {tagMap[selectedProjectData.id] ?? 'PROJECT CASE STUDY'}
                </span>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">

                {/* Project Title */}
                <div className="mb-8">
                  <h2
                    id="project-modal-title"
                    className="text-2xl sm:text-3xl font-black font-headline leading-tight mb-4"
                  >
                    {selectedProjectData.title}
                  </h2>

                  {selectedProjectData.domain && (
                    <span className="inline-block bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold">
                      {selectedProjectData.domain}
                    </span>
                  )}
                </div>

                {/* Project Overview */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      Project Overview
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-7">
                    {selectedProjectData.description}
                  </p>
                </div>

                {/* Role */}
                {selectedProjectData.role && (
                  <div className="mb-8 rounded-xl border border-border bg-background p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">
                      My Role
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {selectedProjectData.role}
                    </p>
                  </div>
                )}

                {/* Responsibilities */}
                {selectedProjectData.responsibilities &&
                  selectedProjectData.responsibilities.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                          Key Responsibilities
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        {selectedProjectData.responsibilities.map(
                          (item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="text-primary mt-0.5">●</span>
                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Testing Focus */}
                {selectedProjectData.testingFocus &&
                  selectedProjectData.testingFocus.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                          Testing Focus
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.testingFocus.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-border bg-secondary/70 px-3 py-2 text-xs font-medium text-secondary-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      Tools & Technologies
                    </h3>
                  </div>

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

                {/* Blog Link */}
                {selectedProjectData.link && (
                  <a
                    href={selectedProjectData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-6"
                  >
                    Visit Kush QA Blog
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {/* Close Action */}
                <div className="border-t border-border pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
