# Boise Iron Gym Website

## Overview
A modern, single-page website for Boise Iron Gym, a fitness facility located in Boise, Idaho. The website showcases the gym's strength training culture, community atmosphere, and top-tier equipment through a bold, athletic design.

## Website Features

### Sections
1. **Hero Section** - Full-screen hero with gym background, logo, tagline "Strength. Dedication. Community.", and prominent CTA
2. **About Section** - Compelling copy about the gym's focus on strength, motivation, and community
3. **Testimonials Section** - Three 5-star Google reviews displayed in modern cards
4. **Gallery Section** - Gym facility photos with hover zoom effects
5. **Contact Section** - Appointment booking calendar, email, Instagram links, address, hours, and embedded Google Maps
6. **Header/Footer** - Sticky navigation header and comprehensive footer with social links

### Appointment Booking
- **Design**: Simple calendar date picker with confirm button
- **Features**: 
  - Date selection (weekdays only, today forward)
  - Shows selected date before confirmation
  - Success message with 3-second auto-dismiss
- **Layout**: 2-column grid with booking calendar left, contact info + map right

### Design System
- **Color Palette**: Dark theme (charcoal backgrounds) with bold red primary accent matching gym equipment
- **Typography**: 
  - Display: Bebas Neue (headers/titles)
  - Body: Montserrat (regular, semibold, bold)
- **Interactions**: Smooth scrolling navigation, hover animations, responsive mobile menu
- **Responsive**: Fully mobile-responsive with hamburger menu on mobile devices

## Business Information
- **Name**: Boise Iron Gym
- **Location**: 10379 Fairview Ave, Boise, ID 83704
- **Email**: flexdaddy43@gmail.com
- **Instagram**: @boise_iron_gym, @boise.iron.gym
- **Hours**: 
  - Mon-Fri: 4 AM – 11 PM
  - Sat-Sun: 6 AM – 9 PM

## Technical Architecture

### Tech Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **Build Tool**: Vite
- **Server**: Express (serving static files only)
- **Form Handling**: react-hook-form with zod validation

### Project Structure
- `client/src/pages/home.tsx` - Main single-page component with all sections
- `client/src/lib/translations.ts` - EN/UA translation strings
- `client/src/lib/language-context.tsx` - Language context provider with auto-detection
- `client/index.html` - HTML template with SEO meta tags and fonts
- `attached_assets/` - Gym photos and logo
- `design_guidelines.md` - Comprehensive design system documentation

### Key Implementation Details
- Static website with no backend API routes or database
- Bilingual support with React Context pattern and localStorage persistence
- Booking calendar is visual demo only (shows success message, no backend)
- Smooth scroll navigation using section IDs
- Mobile-responsive with hamburger menu
- Comprehensive data-testid attributes for testing
- Google Maps embedded via iframe with location marker

## Development

### Running Locally
```bash
npm run dev
```
Application serves on port 5000 with hot reload enabled.

### Testing
All core functionality tested with end-to-end tests:
- Navigation and smooth scrolling
- Hero section and CTA button
- All content sections (About, Testimonials, Gallery, Contact)
- Contact form with validation
- Google Maps location display
- Mobile responsiveness and menu
- Footer links and social media icons

## Deployment Notes
This is a static website ready for deployment. The backend only serves static files - no database or API routes required.

## Recent Changes (December 28, 2025)
- **Bilingual support (EN/UA)** - Complete translation system with English and Ukrainian
  - Language toggle (EN | UA) in both desktop and mobile navigation
  - Auto-detection: Checks browser locale for Ukrainian ("uk") and sets default accordingly
  - localStorage persistence for language preference
  - Locale-aware date formatting (en-US for English, uk-UA for Ukrainian)
  - All UI text translated (navigation, headings, buttons, contact info, hours)
  - Testimonials intentionally remain in English (authentic Google reviews)
  - Brand name "BOISE IRON GYM" remains unchanged as proper noun
- **Appointment booking card** - simple, clean demo placeholder
  - Date selection (weekdays only, today forward)
  - Success message with 3-second auto-dismiss
  - 2-column contact section layout (booking card | contact info + map)

## Previous Changes (October 16, 2025)
- Initial website build with all sections implemented
- Dark athletic theme with red accents matching gym equipment
- Comprehensive data-testid attributes added for testing
- Full mobile responsiveness with hamburger menu
- Smooth scrolling navigation throughout
- Google Maps embedded to display gym location with marker
