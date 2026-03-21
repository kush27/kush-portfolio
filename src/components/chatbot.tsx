'use client';

import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { askChatbotAction } from '@/app/actions';
import { Loader2, Bot, User, CornerDownLeft, Sparkles } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { profileData } from '@/lib/data';
import { PlaceHolderImages, getImageUrl } from '@/lib/placeholder-images';
import type { Message } from '@/ai/flows/chatbot';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SUGGESTED = [
  'What is Kush\'s automation stack?',
  'Which companies has he worked at?',
  'Is he open to QA Lead roles?',
  'What frameworks has he built?',
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const avatarImage = PlaceHolderImages.find(img => img.id === profileData.avatar);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isLoading]);

  const handleSend = async (question?: string) => {
    const q = (question || input).trim();
    if (!q) return;
    const userMessage: Message = { role: 'user', content: q };
    const newMessages: Message[] = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    const result = await askChatbotAction(newMessages);
    setIsLoading(false);
    if (result.success && result.data) {
      setMessages(prev => [...prev, { role: 'assistant', content: result.data! }]);
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.error || 'Unknown error' });
      setMessages(prev => prev.slice(0, -1));
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) { setMessages([]); setInput(''); setIsLoading(false); }
    else {
      setMessages([{
        role: 'assistant',
        content: "👋 Hi! I'm Kush's AI assistant. Ask me anything about his skills, experience, or career — I'm here to help you get to know him better!"
      }]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="default" className="rounded-full border-border bg-card hover:bg-secondary font-headline font-semibold gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          Ask About Me
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl h-[75vh] flex flex-col bg-background border-border">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="font-headline font-black flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </span>
            Ask About Kush
          </DialogTitle>
          <DialogDescription className="text-xs">
            Powered by AI — ask about skills, experience, projects, or availability.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          <div className="space-y-5 py-4 pr-2">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8 border border-border flex-shrink-0">
                    <AvatarImage src={getImageUrl(avatarImage?.imageUrl || '')} alt="Kush" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">KK</AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-tr-sm'
                    : 'bg-card border border-border rounded-tl-sm'
                }`}>
                  <article className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-li:my-0.5">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                  </article>
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-secondary"><User className="h-4 w-4" /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 border border-border flex-shrink-0">
                  <AvatarImage src={getImageUrl(avatarImage?.imageUrl || '')} alt="Kush" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">KK</AvatarFallback>
                </Avatar>
                <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    {[0,1,2].map(i => (
                      <span key={i} className="h-2 w-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Suggestions — show if no user messages yet */}
        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 border-t border-border pt-3 -mx-6 px-6">
            {SUGGESTED.map(s => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-xs border border-border bg-card hover:bg-secondary hover:border-primary/30 rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <DialogFooter className="pt-2">
          <div className="relative w-full">
            <Input
              placeholder="Ask about Kush's experience, skills, or availability..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              disabled={isLoading}
              className="pr-12 rounded-xl bg-card border-border"
            />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-primary hover:opacity-90"
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
            >
              <CornerDownLeft className="h-3.5 w-3.5 text-primary-foreground" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
