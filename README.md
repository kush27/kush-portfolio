# Vikash Kumar Singh — Portfolio (Revamped)

A fully revamped Next.js 15 portfolio with a dark editorial design, inspired by Framer's Portavia template, featuring AI-powered features.

## ✨ Features

- **Dark editorial design** — Syne + DM Sans fonts, lime-green accent system
- **AI Chatbot** — Gemini-powered assistant that answers HR questions about Vikash
- **AI Resume Generator** — Tailors Vikash's resume to any job description (paste JD → get PDF)
- **Animated hero** — Split layout with photo, floating stat badges, ticker marquee
- **Scroll-reveal animations** — Sections animate in as you scroll
- **Skills marquee** — Bidirectional auto-scrolling rows of all tech skills
- **Experience timeline** — Staggered reveal timeline
- **Contact form** — Sends email via Resend (HR-focused)
- **Responsive** — Mobile-first, works on all screen sizes

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the root:

```env
# Google AI (Gemini) — for the chatbot and resume generator
GOOGLE_GENAI_API_KEY=your_google_ai_key_here

# Resend — for the contact form email delivery
RESEND_API_KEY=your_resend_api_key_here
RESEND_RECIPIENT_EMAIL=vikashsinghdoc@gmail.com
```

**Getting API keys:**
- **Google AI:** https://aistudio.google.com/app/apikey
- **Resend:** https://resend.com (free tier: 3,000 emails/month)

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page — assembles all sections
│   ├── layout.tsx        # Root layout with fonts + metadata
│   ├── globals.css       # Global styles + animations
│   └── actions.ts        # Server actions (email, AI calls)
├── components/
│   ├── header.tsx        # Sticky frosted navbar
│   ├── footer.tsx        # Minimal footer
│   ├── chatbot.tsx       # AI assistant dialog
│   ├── resume-generator.tsx # AI resume tailoring dialog
│   └── sections/
│       ├── hero.tsx       # Hero + ticker
│       ├── services.tsx   # Expertise grid
│       ├── about.tsx      # About + animated counters
│       ├── skills.tsx     # Bidirectional marquee
│       ├── experience.tsx # Timeline
│       ├── portfolio.tsx  # Project cards
│       ├── education.tsx  # Education card
│       └── contact.tsx    # HR-focused contact form
├── ai/
│   ├── genkit.ts          # Genkit + Gemini config
│   └── flows/
│       ├── chatbot.ts     # Chatbot AI flow
│       └── resume-from-profile.ts  # Resume generation flow
└── lib/
    ├── data.ts            # ← YOUR PROFILE DATA (edit this!)
    └── placeholder-images.ts
```

## 🎨 Customisation

All your profile data lives in **`src/lib/data.ts`** — update it to reflect any changes to your experience, skills, or projects.

## 🌐 Deployment

Deploy easily to **Vercel** (recommended for Next.js):
1. Push to GitHub
2. Import repo on vercel.com
3. Add the `.env.local` variables in Vercel's Environment Variables settings
4. Deploy ✓
