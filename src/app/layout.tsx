import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Kush Kumar — Senior Test Analyst',
  description: 'Kush Kumar is a Senior Test Analyst with 8 years of experience in manual testing, Java Selenium automation, Cucumber BDD, PEGA testing, API testing and quality engineering.',
  keywords: ['Kush Kumar', 'Senior Test Analyst', 'QA Engineer', 'Manual Testing', 'Java', 'Selenium WebDriver', 'Playwright', 'Cucumber BDD', 'API Testing', 'Postman', 'Bruno', 'SQL', 'PEGA Testing'],
  openGraph: {
    title: 'Kush Kumar | Senior Test Analyst & QA Automation Engineer',
    description: 'Explore 8 years of experience in software testing, Java Selenium automation, Cucumber BDD, PEGA testing and API quality engineering.',
    type: 'website',
    url: 'https://kush-kumar-portfolio.vercel.app/',
    siteName: 'Kush Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kush Kumar | Senior Test Analyst',
    description: 'Senior Test Analyst portfolio — software testing, automation and quality engineering.',
  },
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
