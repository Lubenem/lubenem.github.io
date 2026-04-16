# LiuTech - Professional Portfolio Website

## Overview
LiuTech is a bilingual (English/Ukrainian) professional portfolio website for Liubomyr Chahoub's software development business. The site showcases custom software development services including web development, mobile applications, and custom software solutions.

## Purpose
- Establish professional online presence for freelance software development business
- Meet LiqPay payment processor requirements (legal pages, business information, contact details)
- Provide bilingual support for international and Ukrainian clients
- Showcase KISS principle philosophy and continuous learning approach
- Enable potential clients to contact and start projects

## Current State
**Status**: MVP Complete
**Version**: 1.0.0
**Last Updated**: October 22, 2025

The website is fully functional with:
- ✅ Bilingual support (English/Ukrainian) with language switcher
- ✅ Dark theme (fixed, no toggle)
- ✅ Responsive design for all devices
- ✅ Contact form with validation
- ✅ Legal compliance pages (Refund Policy, Terms of Service)
- ✅ Professional design following design guidelines
- ✅ All sections: Hero, About, Services, Contact, Footer

## Recent Changes
- **October 22, 2025**: Updates per user request
  - Replaced AI-generated portrait with user's actual photo
  - Removed theme toggle - site now uses dark theme only
  - Simplified theme system for consistent dark appearance
- **October 22, 2025**: Initial MVP implementation
  - Created complete bilingual translation system
  - Implemented all UI components following design guidelines
  - Added contact form with backend API
  - Created legal compliance pages for LiqPay

## User Preferences
- **Design Philosophy**: Follow KISS principle (Keep It Simple, Stupid)
- **Positioning**: Versatile developer not tied to specific tech stack
- **Future Expansion**: Site designed to accommodate additional services (design, social media, digital/physical goods)
- **Language**: Default English, with Ukrainian support for local market
- **Business Focus**: International clients with Ukraine presence

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── Navigation.tsx      # Header with language switcher
│   ├── Hero.tsx           # Main landing section with user portrait
│   ├── About.tsx          # KISS principle & learning philosophy
│   ├── Services.tsx       # Three service offerings
│   ├── Contact.tsx        # Contact form & social links
│   └── Footer.tsx         # Business info & quick links
├── pages/
│   ├── Home.tsx           # Main page combining all sections
│   ├── RefundPolicy.tsx   # Bilingual refund policy
│   └── TermsOfService.tsx # Bilingual terms
├── lib/
│   ├── i18n.tsx           # Translation system
│   ├── theme.tsx          # Dark theme provider (fixed)
│   └── queryClient.ts     # React Query setup
└── App.tsx                # Router & providers

### Backend Structure
```
server/
├── routes.ts              # API endpoints (/api/contact)
├── storage.ts             # In-memory storage for contact forms
└── vite.ts                # Vite dev server setup
```

### Data Model
```typescript
ContactSubmission {
  id: string
  name: string
  email: string
  projectType: string (web|mobile|custom|consulting|other)
  message: string
  createdAt: Date
}
```

## Key Features

### 1. Bilingual Support (EN/UA)
- Complete translation system with localStorage persistence
- Seamless language switching without page reload
- All content translated: UI, legal pages, form labels
- Language selector in navigation

### 2. Contact System
- **Form Fields**: Name, Email, Project Type, Message
- **Validation**: Zod schema validation on frontend and backend
- **Project Types**: Web Development, Mobile Apps, Custom Software, Consulting, Other
- **Storage**: In-memory storage of submissions
- **Future**: Ready for email integration with Nodemailer

### 3. Legal Compliance
- **Refund Policy**: 14-day eligibility, process details, non-refundable items
- **Terms of Service**: Service description, payment terms, delivery, IP rights, liability
- **Business Entity**: ФОП Любомир Шахуб / Liubomyr Chahoub displayed in footer
- **Both pages**: Fully bilingual for compliance

### 4. Design System
- **Theme**: Dark mode only (no toggle)
- **Colors**: Professional blue primary (#217FE0), clean grayscale optimized for dark theme
- **Typography**: Inter for headings/body, JetBrains Mono for code/brand
- **Spacing**: Consistent 8px grid system
- **Shadows**: Subtle elevation for depth and hierarchy
- **Interactions**: Hover elevate and active states on all interactive elements

### 5. Social Presence
- **Email**: lubenemkrkm@gmail.com
- **Instagram**: @liubomyr_chahoub (https://www.instagram.com/liubomyr_chahoub)
- **GitHub**: github.com/lubenem (https://github.com/lubenem)
- LinkedIn profile reviewed but not linked per user preference

## Technical Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS + Shadcn UI components
- **State Management**: React Query (TanStack Query v5)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + React Icons (Simple Icons for social)
- **Build Tool**: Vite

### Backend
- **Server**: Express.js
- **Validation**: Zod schemas
- **Storage**: In-memory (MemStorage class)
- **Future**: PostgreSQL ready (schema defined)

### Development
- **Language**: TypeScript throughout
- **Package Manager**: npm
- **Environment**: Node.js 20
- **Deployment**: Replit (ready for publishing)

## API Routes

### POST /api/contact
Submit contact form
```typescript
Request Body: {
  name: string (1-100 chars)
  email: string (valid email)
  projectType: string
  message: string (10-1000 chars)
}

Response: {
  success: boolean
  message: string
  submissionId: string
}
```

### GET /api/contact/submissions
Get all contact submissions (admin endpoint)
```typescript
Response: ContactSubmission[]
```

## Business Information
- **Business Name**: LiuTech
- **Legal Entity**: ФОП Любомир Шахуб (FOP Liubomyr Chahoub)
- **Email**: lubenemkrkm@gmail.com
- **Location**: Ukraine
- **Target Market**: International clients (default English) + Ukrainian market

## Services Offered

### Web Development
Custom web applications built with modern technologies. From landing pages to complex web platforms.

### Mobile Applications
Native and cross-platform mobile apps for iOS and Android.

### Custom Software Solutions
Tailored software designed for specific business challenges, from automation to enterprise apps.

**Pricing**: Project-based, custom quotes based on specific needs

## Design Philosophy
1. **KISS Principle**: Keep solutions simple and maintainable
2. **Continuous Learning**: Embrace new technologies and perspectives
3. **Architectural Thinking**: Apply structural thinking from architecture background
4. **Clean Code**: Intuitive, effective, easy to work with
5. **Client Focus**: Understand problems from multiple perspectives

## Future Enhancements (Next Phase)
1. **LiqPay Integration**: Payment processing for project deposits
2. **Portfolio Section**: Case studies and project showcase
3. **Email Notifications**: Nodemailer integration for contact form
4. **Admin Dashboard**: Manage submissions and content
5. **Blog/Insights**: Share development perspectives
6. **Client Testimonials**: Social proof section
7. **Service Expansion**: Design, social media, digital products

## Running the Application

### Development
```bash
npm run dev
```
- Frontend: Vite dev server with HMR
- Backend: Express server with API routes
- Both served on same port via Vite proxy

### Production Build
```bash
npm run build
```

### Environment Variables
- `SESSION_SECRET`: Session encryption key (available)
- Future: Email service credentials for Nodemailer

## Design Guidelines
See `design_guidelines.md` for comprehensive design system documentation including:
- Color palette (light/dark modes)
- Typography scale
- Component patterns
- Interaction guidelines
- Responsive breakpoints
- Accessibility standards

## Notes
- No portfolio projects displayed yet (will be added when available)
- Contact form stores submissions but doesn't send emails yet (ready for integration)
- All legal content is generic but professional and compliant
- Portrait image is AI-generated professional headshot
- Site is fully responsive and accessible
- All interactive elements have proper test IDs for testing
