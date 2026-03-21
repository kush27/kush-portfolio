'use client';
import { profileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Chatbot } from '@/components/chatbot';
import { ResumeGenerator } from '@/components/resume-generator';

export default function Hero() {
  const avatarImage = PlaceHolderImages.find(img => img.id === profileData.avatar);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  const tickerItems = [
    'Java', 'Selenium', 'Playwright', 'Cucumber BDD', 'Eclipse', 'TestNG', 'Intellij IDEA', 'DevTest', 'JIRA', 'Commando', 'Confluence', 'TeamCity', 'Postman', 'Bruno', 'Git', 'GitHub', 'Jenkins'
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 hero-mesh">
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* LEFT */}
          <div className="flex flex-col gap-6" style={{ animation: 'fadeUp 0.7s 0.1s both' }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              QA Engineering Expert
            </div>

            <h1 className="font-headline text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95]">
              Kush<br />Kumar
            </h1>

            <p className="text-lg font-headline font-semibold text-muted-foreground">
              Software Engineer
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-lg text-sm">
              {profileData.bio}
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Bengaluru, India &nbsp;·&nbsp; Open to Remote &amp; Hybrid roles
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-headline font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground font-headline font-semibold text-sm px-6 py-3 rounded-full hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                Get In Touch
              </Link>
            </div>

            {/* AI & Resume tools */}
            <div className="flex flex-row gap-3 flex-wrap pt-1">
              <Chatbot />
              <ResumeGenerator />
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-2 border-t border-border/50">
              {[
                { num: '8+', label: 'Years Exp.' },
                { num: '3', label: 'Top Firms' },
                { num: '4+', label: 'Frameworks Built' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-headline text-2xl font-black text-primary">{s.num}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="relative flex justify-center lg:justify-end" style={{ animation: 'fadeUp 0.7s 0.3s both' }}>
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            {/* Frame */}
            <div className="relative w-[320px] sm:w-[380px] lg:w-[420px]">
              <div className="absolute inset-0 rounded-3xl border border-primary/20" style={{ transform: 'translate(12px, 12px)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-card shadow-2xl">
                {avatarImage && (
                  <Image
                    src={avatarImage.imageUrl}
                    alt={profileData.name}
                    width={420}
                    height={520}
                    className="w-full object-cover object-top"
                    priority
                  />
                )}
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-16 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl text-xs">
                <div className="font-headline font-black text-2xl text-primary leading-none">8+</div>
                <div className="text-muted-foreground mt-0.5">Years Exp.</div>
              </div>
              <div className="absolute -right-6 top-1/3 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl text-xs">
                <div className="font-headline font-black text-2xl text-primary leading-none">3</div>
                <div className="text-muted-foreground mt-0.5">Top Firms</div>
              </div>
              <div className="absolute -right-4 bottom-16 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl text-xs font-bold font-headline">
                Open to Work ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-primary overflow-hidden py-3.5 border-y border-primary/50">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-5 font-headline font-bold text-sm text-primary-foreground uppercase tracking-wider">
              {item}
              <span className="text-primary-foreground/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
