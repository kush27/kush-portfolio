import { profileData } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
        <div>
          <p className="font-headline font-black text-lg tracking-tighter">
            VK<span className="text-primary">.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profileData.social.github} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
            <Github className="h-4 w-4" />
          </a>
          <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${profileData.email}`}
            className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
