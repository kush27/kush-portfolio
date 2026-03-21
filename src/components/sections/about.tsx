'use client';
import { useEffect, useRef, useState } from 'react';
import { profileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const step = Math.ceil(target / (duration / 30));
        let c = 0;
        const timer = setInterval(() => {
          c = Math.min(c + step, target);
          setCount(c);
          if (c >= target) clearInterval(timer);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="counter-num">{count}{suffix}</span>;
}

export default function About() {
  const avatarImage = PlaceHolderImages.find(img => img.id === profileData.avatar);
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
    <section id="about" className="py-28 bg-card" ref={ref}>
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 relative">
            <div className="relative inline-block w-full max-w-[400px] mx-auto lg:mx-0">
              {/* offset frame */}
              <div className="absolute inset-0 rounded-3xl border border-border" style={{ transform: 'translate(14px,14px)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
                {avatarImage && (
                  <Image
                    src={avatarImage.imageUrl}
                    alt={profileData.name}
                    width={400}
                    height={500}
                    className="w-full object-cover object-top"
                  />
                )}
              </div>
              {/* floating exp tag */}
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl">
                <div className="font-headline font-black text-3xl leading-none">8+</div>
                <div className="text-xs font-semibold mt-0.5 opacity-80 uppercase tracking-wider">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700" style={{ transitionDelay: '120ms' }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              <span className="h-px w-5 bg-primary" /> About Me
            </div>
            <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-6">
              Hi, I&apos;m Kush —<br />a Software Engineer who codes.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-4">
              {profileData.bio}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { target: 8, suffix: '+', label: 'Years Exp.' },
                { target: 4, suffix: '', label: 'Frameworks Built' },
                { target: 3, suffix: '', label: 'Top Firms' },
              ].map(s => (
                <div key={s.label} className="bg-background border border-border rounded-xl p-4 text-center">
                  <div className="font-headline text-3xl font-black text-primary">
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Contact chips */}
            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail className="h-4 w-4" />, label: profileData.email, href: `mailto:${profileData.email}` },
                { icon: <Phone className="h-4 w-4" />, label: `+91 ${profileData.phone}`, href: `tel:+91${profileData.phone}` },
                { icon: <Linkedin className="h-4 w-4" />, label: 'linkedin.com/in/kushkumar18', href: profileData.social.linkedin },
                { icon: <Github className="h-4 w-4" />, label: 'github.com/kush27', href: profileData.social.github },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="h-9 w-9 rounded-xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                    {c.icon}
                  </span>
                  {c.label}
                </a>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-headline font-bold text-primary hover:gap-3 transition-all"
            >
              Let&apos;s work together <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
