# Latinos Barbershop

## Overview

This is a modern, responsive landing page for "Latinos Barbershop" - a barbershop business in Little Rock. The application is a bilingual (English/Ukrainian) single-page website built with React and Express, featuring sections for services, gallery, testimonials, appointment booking, and contact information. The design follows an urban, masculine aesthetic with bold typography and high contrast for a premium grooming establishment feel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state, React Context for language/i18n
- **Icons**: Lucide React for general icons, React Icons for social media icons

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: REST API with `/api` prefix for all routes
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static file serving from built Vite output

### Build System
- **Frontend Build**: Vite compiles React app to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.cjs`
- **Scripts**: Custom build script in `script/build.ts` handles both builds

### Design System
- **Typography**: Bebas Neue for display headings, Inter for body text
- **Color Scheme**: Gold/amber primary color (`hsl(45, 95%, 35%)`), neutral backgrounds
- **Layout**: Max-width 7xl container, responsive grid layouts
- **Animations**: CSS transitions for hover effects, fade-up animations for content

### Internationalization
- Custom i18n implementation using React Context
- Supports English (EN) and Ukrainian (UA)
- Auto-detects user locale on initial load
- Language toggle in header navigation

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` with user authentication schema
- **Storage**: Memory storage abstraction in `server/storage.ts` for development
- **Migrations**: Drizzle Kit for database migrations (`drizzle-kit push`)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session storage for Express

### UI Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-built component library using Radix + Tailwind
- **embla-carousel-react**: Carousel/slider functionality
- **vaul**: Drawer component
- **cmdk**: Command palette component
- **react-day-picker**: Calendar/date picker

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast server-side bundling
- **TypeScript**: Type checking across full stack
- **Replit plugins**: Dev banner and cartographer for Replit environment

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **drizzle-zod**: Generate Zod schemas from Drizzle tables

### Fonts
- Google Fonts: Bebas Neue (display), Inter (body text)