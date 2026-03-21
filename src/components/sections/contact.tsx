'use client';
import { profileData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { sendContactEmailAction } from '@/app/actions';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, Loader2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';


const initialState = { success: false, error: null, fieldErrors: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-headline font-bold text-sm px-7 py-3.5 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:translate-y-0"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(sendContactEmailAction, initialState as any);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('opacity-100', 'translate-y-0'); e.target.classList.remove('opacity-0', 'translate-y-6'); }
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (state.success) {
      toast({ title: '✅ Message Sent!', description: 'Thanks for reaching out! I\'ll get back to you shortly.' });
      formRef.current?.reset();
    } else if (state.error) {
      toast({ variant: 'destructive', title: 'Error', description: state.error });
    }
  }, [state, toast]);

  const avatarImage = PlaceHolderImages.find(img => img.id === profileData.avatar);

  return (
    <section id="contact" className="py-28" ref={sectionRef}>
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side — info */}
          <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              <span className="h-px w-5 bg-primary" /> Get In Touch
            </div>
            <h2 className="font-headline text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-4">
              Let&apos;s work<br />together
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Open to <span className="text-foreground font-medium">Senior QA</span>, <span className="text-foreground font-medium">QA Architect</span>, and <span className="text-foreground font-medium">Consulting</span> roles. Currently available for new opportunities.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: <Mail className="h-4 w-4" />, label: profileData.email, href: `mailto:${profileData.email}` },
                { icon: <Phone className="h-4 w-4" />, label: `+91 ${profileData.phone}`, href: `tel:+91${profileData.phone}` },
                { icon: <Linkedin className="h-4 w-4" />, label: 'linkedin.com/in/kushkumar18', href: profileData.social.linkedin },
                { icon: <Github className="h-4 w-4" />, label: 'github.com/kush27', href: profileData.social.github },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                    {c.icon}
                  </span>
                  {c.label}
                </a>
              ))}
            </div>

            {/* Photo */}
            {avatarImage && (
              <div className="relative w-[220px] rounded-2xl overflow-hidden border border-border shadow-xl hidden lg:block">
                <Image
                  src={avatarImage.imageUrl}
                  alt={profileData.name}
                  width={220}
                  height={280}
                  className="w-full object-cover object-top grayscale-[20%]"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold font-headline px-2.5 py-1 rounded-full">
                  Hi 👋
                </div>
              </div>
            )}
          </div>

          {/* Right side — form */}
          <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700" style={{ transitionDelay: '120ms' }}>
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="font-headline text-xl font-black mb-6">Send a Message</h3>
              <form ref={formRef} action={formAction} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs text-muted-foreground uppercase tracking-wider">Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required
                      className="bg-background border-border focus:border-primary/50 rounded-xl" />
                    {state?.fieldErrors?.name && <p className="text-xs text-destructive">{state.fieldErrors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs text-muted-foreground uppercase tracking-wider">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@company.com" required
                      className="bg-background border-border focus:border-primary/50 rounded-xl" />
                    {state?.fieldErrors?.email && <p className="text-xs text-destructive">{state.fieldErrors.email[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs text-muted-foreground uppercase tracking-wider">Subject</Label>
                  <Input id="subject" name="subject" placeholder="e.g. QA Lead Opening at Acme Corp" 
                    className="bg-background border-border focus:border-primary/50 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs text-muted-foreground uppercase tracking-wider">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about the role, your team, and what you're looking for..." required rows={5}
                    className="bg-background border-border focus:border-primary/50 rounded-xl resize-none" />
                  {state?.fieldErrors?.message && <p className="text-xs text-destructive">{state.fieldErrors.message[0]}</p>}
                </div>
                <div className="pt-2">
                  <SubmitButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
