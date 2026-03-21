import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Kush Kumar — Software Engineer',
  description: 'Software Engineer with 8 years building automation frameworks, REST APIs for test infrastructure, and CI/CD-enabled quality engineering. Open to remote and hybrid roles.',
  keywords: ['Software Engineer', 'Test Automation', 'Selenium', 'Playwright', 'Spring Boot', 'Java', 'CI/CD'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
