'use client';
import Link from 'next/link';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { profileData } from '@/lib/data';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/20'
        : 'bg-transparent'
    )}>
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-headline text-xl font-black tracking-tighter">
          KK<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link-hover text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 pb-0.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mr-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-dot-pulse" />
            Available for work
          </div>
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Link
            href="#contact"
            className="ml-1 bg-primary text-primary-foreground font-headline font-bold text-sm px-5 py-2 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-primary text-primary-foreground font-headline font-bold text-sm px-5 py-3 rounded-full text-center"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
