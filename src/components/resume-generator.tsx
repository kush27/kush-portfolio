'use client';

import { useState } from 'react';
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger, DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateResumeAction } from '@/app/actions';
import { Loader2, FileText, Download, FileType } from 'lucide-react';
import { profileData, workExperienceData, educationData, skillsData } from '@/lib/data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export function ResumeGenerator() {
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedResume, setGeneratedResume] = useState('');
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const { toast } = useToast();
  const resumeContentRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!jobDescription.trim()) {
      toast({ variant: 'destructive', title: 'Missing input', description: 'Please paste a job description first.' });
      return;
    }
    setIsLoading(true);
    setGeneratedResume('');

    const input = {
      ...profileData,
      linkedin: profileData.social.linkedin,
      github: profileData.social.github,
      workExperience: workExperienceData,
      education: educationData,
      skills: skillsData.map(s => s.name),
      jobDescription,
    };

    const result = await generateResumeAction(input);
    setIsLoading(false);

    if (result.success && result.data) {
      setGeneratedResume(result.data);
      setIsInputOpen(false);
      setIsResultOpen(true);
    } else {
      toast({ variant: 'destructive', title: 'Generation failed', description: result.error || 'Unknown error.' });
    }
  };

  const handleDownloadHTML = () => {
    const blob = new Blob([generatedResume], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kush-kumar-resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = async () => {
    if (!resumeContentRef.current) return;
    toast({ title: 'Generating PDF…', description: 'Please wait a moment.' });
    const canvas = await html2canvas(resumeContentRef.current, { scale: 2, useCORS: true, logging: false });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [canvas.width, canvas.height] });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('kush-kumar-resume.pdf');
  };

  return (
    <>
      {/* Input dialog */}
      <Dialog open={isInputOpen} onOpenChange={(o) => { setIsInputOpen(o); if (!o) { setJobDescription(''); setIsLoading(false); } }}>
        <DialogTrigger asChild>
          <Button variant="outline" size="default" className="rounded-full border-border bg-card hover:bg-secondary font-headline font-semibold gap-2">
            <FileText className="h-4 w-4 text-primary" />
            Generate Resume
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-headline font-black">AI-Tailored Resume</DialogTitle>
            <DialogDescription className="text-xs">
              Paste a job description and AI will tailor Kush's resume to perfectly match the role.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Paste the job description here (role requirements, responsibilities, tech stack expected)…"
              rows={12}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              disabled={isLoading}
              className="bg-card border-border rounded-xl resize-none text-sm"
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleGenerate}
              disabled={isLoading || !jobDescription.trim()}
              className="rounded-full bg-primary text-primary-foreground font-headline font-bold hover:opacity-90 gap-2"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
              {isLoading ? 'Generating…' : 'Generate Resume'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Result dialog */}
      <Dialog open={isResultOpen} onOpenChange={(o) => { setIsResultOpen(o); if (!o) setGeneratedResume(''); }}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-headline font-black">Generated Resume</DialogTitle>
            <DialogDescription className="text-xs">
              AI-tailored resume ready. Download as HTML or PDF.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-auto border border-border rounded-xl p-4 bg-white text-black">
            <div ref={resumeContentRef} dangerouslySetInnerHTML={{ __html: generatedResume }} />
          </div>
          <DialogFooter className="mt-4 gap-2">
            <Button variant="outline" onClick={handleDownloadHTML} className="rounded-full gap-2 font-headline font-semibold">
              <Download className="h-4 w-4" /> HTML
            </Button>
            <Button onClick={handleDownloadPDF} className="rounded-full bg-primary text-primary-foreground font-headline font-bold gap-2 hover:opacity-90">
              <FileType className="h-4 w-4" /> PDF
            </Button>
            <DialogClose asChild>
              <Button variant="secondary" className="rounded-full font-headline font-semibold">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
