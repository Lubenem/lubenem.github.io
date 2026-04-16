# Design Guidelines: Latinos Barbershop

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern barbershop experiences with urban, masculine aesthetic. Think premium grooming establishments that blend traditional craftsmanship with contemporary design.

## Core Design Principles
- Urban, masculine, and modern aesthetic
- Clean, professional with bold typography
- High contrast for readability and impact
- Strong visual hierarchy emphasizing calls-to-action

## Typography System
**Font Families** (via Google Fonts):
- Primary: 'Bebas Neue' or 'Oswald' - Bold, impactful headers
- Secondary: 'Inter' or 'Roboto' - Clean, readable body text

**Hierarchy**:
- Hero Headline: text-5xl md:text-7xl font-bold uppercase tracking-wider
- Section Headers: text-3xl md:text-4xl font-bold uppercase
- Subheadings: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg font-normal
- Button Text: text-sm md:text-base font-semibold uppercase tracking-wide

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 md:py-20
- Component spacing: gap-6 md:gap-8
- Container max-width: max-w-7xl mx-auto px-4 md:px-8

## Component Library

### Header/Navigation
- Fixed position with backdrop blur on scroll
- Logo (rounded favicon image) on left, nav center, language toggle + CTA on right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20 with centered content

### Hero Section
- Full viewport height (min-h-screen) with `interior-banner.jpg` background
- Dark overlay (bg-black/60) for text contrast
- Centered content with fade-up animation
- CTA button with blurred background (backdrop-blur-md bg-white/10)

### Services Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: Icon (48px), Title, Description
- Lucide icons at top, centered alignment
- Hover: Subtle lift effect (transform scale)
- Padding: p-6 md:p-8

### Gallery Grid
- Three-column grid: grid-cols-1 md:grid-cols-3
- Equal aspect ratios for visual consistency
- Zoom-in animation on scroll reveal
- Gap: gap-4 md:gap-6

### Testimonials
- Card-based layout: grid-cols-1 md:grid-cols-3
- Quote marks as visual element
- Star ratings (5 stars) displayed prominently
- Author attribution in italic text
- Background variation for depth

### Appointment Section
- Two-column split on desktop: Info left, calendar right
- Single column on mobile with stacked layout
- Dark themed calendar integration
- Clear availability hours display

### Location & Contact
- Split layout: Map embed (60%) + Contact details (40%)
- Contact info with icons (phone, location, social)
- Social media icons as clickable links
- Embedded Google Maps iframe

### Footer
- Simple, centered layout
- Social media icon row above copyright
- Padding: py-12

## Images
**Required Images**:
1. **Hero Background**: `interior-banner.jpg` - Full-screen background with dark overlay, showcasing barbershop interior atmosphere
2. **Gallery Images**: Three haircut examples displayed in equal-sized grid cards
3. **Logo/Favicon**: Circular cropped `favicon.jpg` for branding consistency across header, footer, and browser tab

## Animations
- Fade-up: Hero content, section headers
- Slide-in: Service cards (staggered)
- Zoom-in: Gallery images on scroll
- Smooth transitions: 300ms ease for all hover states

## Accessibility
- High contrast text/background ratios
- Clear focus states on interactive elements
- Semantic HTML structure maintained
- Alt text for all images
- ARIA labels for language toggle and navigation

## Responsive Breakpoints
- Mobile: Base styles (< 768px)
- Tablet: md: prefix (768px+)
- Desktop: lg: prefix (1024px+)

## Key UX Patterns
- Sticky "Book Now" CTA in header for constant availability
- Smooth scroll to appointment section on CTA clicks
- Language toggle with clear visual indicator of active state
- Confirmation feedback for appointment booking
- Mobile-first navigation with clean hamburger menu