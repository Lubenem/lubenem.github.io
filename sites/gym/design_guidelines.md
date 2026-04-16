# Boise Iron Gym - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from hardcore fitness aesthetics (CrossFit boxes, powerlifting gyms like Westside Barbell, Barbell Brigade) combined with modern web design principles. This creates an authentic, no-nonsense iron gym experience while maintaining professional polish.

**Key Design Principles**:
- Raw strength meets refined execution
- Community-focused and welcoming
- Unapologetically bold and masculine
- Performance over decoration

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**:
- Background Base: 15 8% 8% (deep charcoal, almost black)
- Background Secondary: 15 8% 12% (slightly lighter charcoal for cards/sections)
- Primary/Brand: 0 85% 50% (bold red matching gym equipment - vibrant and energetic)
- Text Primary: 0 0% 98% (near white for maximum contrast)
- Text Secondary: 0 0% 70% (muted gray for supporting text)
- Accent/Metallic: 0 0% 75% (silver/steel gray for subtle highlights)

**Accent Usage**: Red used strategically for CTAs, section dividers, and hover states. Silver/metallic for borders, icons, and equipment highlights.

### B. Typography

**Font Families** (via Google Fonts CDN):
- Display/Headers: 'Bebas Neue' - uppercase, bold, commanding presence for hero, section titles
- Body/UI: 'Montserrat' - clean, modern sans-serif for readability
  - Weights: 400 (regular), 600 (semibold), 700 (bold)

**Type Scale**:
- Hero Headline: text-7xl to text-8xl (Bebas Neue)
- Section Headers: text-4xl to text-5xl (Bebas Neue)
- Subheadings: text-xl to text-2xl (Montserrat SemiBold)
- Body: text-base to text-lg (Montserrat Regular)
- Small/Caption: text-sm (Montserrat Regular)

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8 (mobile), p-12 to p-20 (desktop)
- Section spacing: py-16 to py-24 (mobile), py-24 to py-32 (desktop)
- Gap/Grid spacing: gap-6 to gap-8

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl
- Text content: max-w-4xl for readability

### D. Component Library

**Navigation**:
- Sticky header with logo left, nav links right
- Transparent on hero, solid background on scroll
- Smooth scroll behavior to all sections
- Mobile: Hamburger menu with slide-in drawer

**Hero Section**:
- Full viewport height (min-h-screen)
- Background: Large hero image (gym interior with equipment/people training) with dark overlay (40-50% opacity)
- Content: Centered layout with logo, gym name (Bebas Neue), tagline "Strength. Dedication. Community.", prominent red CTA button "Join the Iron Family"

**About Section**:
- Two-column layout (desktop): Left side image, right side content
- Single column (mobile): Image top, content below
- Content: 2-3 short paragraphs emphasizing strength training culture, community atmosphere, and dedication
- Background: Solid dark charcoal with subtle texture

**Testimonials Section**:
- 3-column grid (desktop), single column (mobile)
- Modern cards with: 5-star rating icons, quote text, reviewer name, subtle border/shadow
- Reviews from Google Maps: Kim Poumos, John U Guzel, Cassie Reavis
- Background: Slightly lighter charcoal to differentiate from About section

**Gallery Section**:
- Masonry or 3-column grid layout featuring provided gym images
- Hover effect: Subtle zoom and red overlay with opacity
- Images: Equipment shots, facility views, community training moments
- Lightbox functionality optional but recommended

**Contact Section**:
- Split layout: Left side (contact form or info), right side (Google Maps embed)
- Contact info: Email (linked, red on hover), Instagram icons (both accounts), phone if available
- Map: Embedded Google Maps iframe with location pin
- Background: Dark with red accent line separator

**Footer**:
- Three sections: Logo + tagline | Quick links | Social icons
- Copyright notice
- Background: Darkest charcoal (15 8% 6%)

### E. Interactions & Animations

**Micro-interactions** (subtle, performance-focused):
- CTA buttons: Scale on hover (scale-105), red glow shadow
- Cards: Lift effect (translateY -2px) with subtle shadow
- Images: Gentle zoom on hover (scale-110 with overflow hidden)
- Nav links: Red underline slide-in animation
- Smooth scroll: CSS scroll-behavior: smooth

**No excessive animations** - keep it clean and fast-loading

---

## Images

**Hero Image**: 
- Use attached gym interior photo showing equipment/training area (337550173 or 287265549)
- Full-width, fixed background position
- Dark overlay to ensure text readability

**About Section Image**:
- Use gym equipment close-up or community training shot (292208448)
- Aspect ratio 4:3 or 16:9

**Gallery Images**:
- All 4 provided images in masonry/grid layout
- Optimized for web, responsive sizing

**Logo/Favicon**:
- Use 318350077_206733795155671_5570383728523966967_n.jpg for both header logo and favicon
- White/light version for dark backgrounds

---

## Responsive Breakpoints

- Mobile: Base (< 768px) - single column, stacked sections
- Tablet: md (768px+) - 2-column layouts where applicable
- Desktop: lg (1024px+) - full multi-column layouts, larger typography

**Mobile Optimizations**:
- Hamburger menu navigation
- Hero text smaller (text-5xl vs text-8xl)
- Single column for all sections
- Touch-friendly button sizes (min 44px height)

---

## Accessibility

- High contrast ratios (white on dark charcoal exceeds WCAG AAA)
- Focus states with red outline for keyboard navigation
- Alt text for all images
- Semantic HTML structure (header, nav, main, section, footer)
- ARIA labels for icon buttons (Instagram, menu toggle)

---

## Technical Notes

- Icons: Use Heroicons or Font Awesome via CDN for Instagram, menu, star ratings
- Fonts: Load Bebas Neue and Montserrat from Google Fonts
- Smooth scrolling: Implement with CSS `scroll-behavior: smooth` and JavaScript fallback
- No backend needed - pure HTML/CSS/JS static site
- Optimize images before embedding (compress to ~200kb each)