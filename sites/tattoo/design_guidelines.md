# Design Guidelines: Rebel Rose Tattoo Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern tattoo studio websites and dark portfolio aesthetics. The design should feel bold, edgy, and artistic while maintaining professional credibility. Think dark backgrounds with metallic gold accents, reminiscent of traditional tattoo flash art meets modern web design.

**Key Design Principles**:
- Bold, unapologetic visual presence
- High contrast for readability and impact
- Gallery-first mentality (the work speaks loudest)
- Professional edge without corporate sterility

## Color Palette & Visual Treatment

**Primary Colors**:
- Deep charcoal/near-black backgrounds (#0A0A0A to #1A1A1A)
- Metallic gold accents (#D4AF37, #F4D03F) matching the eagle favicon
- Pure white text for maximum contrast (#FFFFFF)
- Muted gray for secondary text (#A0A0A0)

**Surface Treatments**:
- Subtle texture overlays on dark backgrounds (slight noise/grain for that analog feel)
- Metallic sheen on gold elements
- Sharp, clean borders where needed (gold hairline dividers)

## Typography System

**Font Selection**: Use bold, contemporary fonts via Google Fonts
- **Headlines**: Bold sans-serif with strong personality (e.g., Oswald, Bebas Neue) - uppercase for major headings
- **Body Text**: Clean, readable sans-serif (e.g., Montserrat, Inter)
- **Accents**: Consider a script font for the business name in hero if appropriate

**Hierarchy**:
- Hero headline: Extra bold, 3xl to 5xl on mobile, 6xl to 8xl on desktop
- Section headings: Bold, 2xl to 3xl mobile, 4xl desktop, uppercase with letter-spacing
- Body text: Regular weight, lg to xl size
- Form labels and small text: sm to base size

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Section padding: py-16 to py-24 mobile, py-24 to py-32 desktop
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-7xl for most sections
- Text content: max-w-4xl for optimal reading

**Grid System**:
- Gallery: 1 column mobile, 2 columns tablet, 3 columns desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Services: 1 column mobile, 2 columns desktop
- Even spacing with gap-6 to gap-8

## Component Library

### Header/Navigation
- Sticky navigation with dark backdrop blur when scrolled
- Logo/business name on left (gold color)
- Navigation links on right (smooth scroll anchors)
- Mobile: Hamburger menu with full-screen dark overlay
- Height: h-16 to h-20

### Hero Section
- Full-width banner image with dark overlay (40-50% opacity)
- Content centered vertically and horizontally
- Business name in large, bold typography (gold accent)
- Tagline/about text in white (2-3 lines, max-w-2xl)
- "Book Consultation" button: gold background with blurred backdrop, white text, px-8 py-4, rounded corners
- Height: 80vh to 100vh on desktop, 60vh on mobile

### Gallery Grid
- Clean grid layout with consistent gaps (gap-6 to gap-8)
- Images: aspect-ratio square or 4:3, object-cover
- Hover effect: slight scale (1.05) with smooth transition
- Consider lightbox functionality for viewing full images

### Services Section
- Card-based layout with subtle borders or background variation
- Each service: title, description, icon or decorative element
- Gold accents on service titles or icons
- 2-column layout desktop, stacked mobile

### Testimonials
- Card-based design with customer name and review text
- 5-star rating display using gold stars
- Quote marks or decorative elements
- 1-2 columns depending on review length

### Contact Section
- Two-column layout: form on left, info block on right (stack on mobile)
- Form fields: dark backgrounds with light borders, white text
- Phone number prominently displayed with gold color and large size
- Button: gold background, white text, full-width on mobile
- Google Maps embed: rounded corners, shadow effect

### Footer
- Dark background (darker than main sections)
- Business name, address, social links
- Minimal height (py-8 to py-12)
- Gold accent divider at top

## Images

**Large Hero Image**: Yes - the provided banner image as full-width background
- Position: Hero section background
- Treatment: Dark overlay for text legibility
- Dimensions: Full viewport width, 80-100vh height

**Gallery Images**: 6 tattoo work examples
- Position: Gallery section in responsive grid
- Treatment: Maintain aspect ratio, subtle hover effects
- Dimensions: Square or consistent ratio across all images

**Decorative Elements**:
- Gold flourishes or line art dividers between sections
- Subtle background patterns in dark sections

## Accessibility & Interactions

- High contrast ratios (white on dark meets WCAG AAA)
- Focus states: gold outline on interactive elements
- Smooth scroll behavior for anchor navigation
- Form validation with clear error states
- Buttons: Subtle hover states (brightness increase, no dramatic color changes)

## Mobile Responsiveness

- Mobile-first approach with progressive enhancement
- Navigation collapses to hamburger menu
- Gallery: Single column on mobile, grows to 2-3 columns
- Contact form: Full-width inputs on mobile
- Touch-friendly targets (minimum 44px tap areas)
- Reduce hero height on mobile for faster content access

## Special Considerations

- Favicon: Use provided gold eagle logo
- Phone number: Click-to-call on mobile (tel: link)
- Google Maps: Embedded iframe with proper API key, pointing to 930 16th St, Bedford, IN 47421
- Social proof: Display "5.0 rating • 26 reviews" near testimonials
- CTA buttons: Gold background with blur effect when placed on images