# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with hot reloading (Node.js + React)
- `npm run build` - Build production application (both client and server)
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking

### Database Operations
- `npm run db:push` - Push database schema changes to PostgreSQL using Drizzle

### Individual Services
The application runs as a monorepo with server and client in the same process:
- Server runs on port 5000 (or PORT environment variable)
- Client is served from the same port in development via Vite proxy
- API routes are prefixed with `/api`

## Architecture Overview

### Project Structure
This is a **full-stack TypeScript application** built as a towing company website with the following architecture:

```
├── client/src/           # React frontend with ShadCN/UI components
├── server/              # Express.js backend API
├── shared/              # Shared TypeScript types and database schema
└── attached_assets/     # Generated images and static assets
```

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **UI Library**: ShadCN/UI (New York style) with Radix UI primitives
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (client-side routing)
- **State Management**: TanStack Query (React Query)
- **Styling**: TailwindCSS with CSS variables for theming

### Application Architecture

**Frontend Components:**
- Landing page structure: Header → Hero → Services → About → Contact → Footer
- Component library at `client/src/components/ui/` (ShadCN/UI components)
- Main app components at `client/src/components/`
- Theme support with `next-themes` for dark/light mode

**Backend Structure:**
- `server/index.ts` - Express server setup with logging middleware
- `server/routes.ts` - API route registration (currently minimal)
- `server/storage.ts` - Data layer with IStorage interface and MemStorage implementation
- `server/vite.ts` - Development server integration

**Shared Schema:**
- `shared/schema.ts` - Drizzle schema definitions and Zod validation
- Currently defines basic user authentication structure

### Key Architectural Patterns

**Monorepo Structure**: Single repository with separate client/server directories but shared TypeScript configuration and build process.

**Path Aliases**: Configured in both TypeScript and Vite:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

**Type Safety**: Full TypeScript coverage with strict mode enabled, shared types between frontend and backend.

**Database Layer**: Abstracted through IStorage interface, currently using in-memory storage but designed for PostgreSQL via Drizzle ORM.

**Development Workflow**: Uses Vite in development for HMR, builds to static files for production with Express serving both API and static files.

## Design System

The application follows a comprehensive design system defined in `design_guidelines.md`:

### Color Scheme
- **Primary**: Deep Blue (trust, reliability)
- **Accent**: Safety Orange (emergency, visibility) 
- **Base**: Clean whites and neutral grays
- **Dark Mode**: Charcoal backgrounds with muted orange accents

### UI Components
Built on ShadCN/UI "New York" style with:
- Consistent spacing using Tailwind units (4, 8, 12, 16)
- Radix UI primitives for accessibility
- CSS variables for theme customization
- Framer Motion for animations (minimal, tasteful)

### Business Context
This is a **towing company website** focused on:
- 24/7 emergency service messaging
- Trust and reliability indicators
- Mobile-first design for emergency situations
- Clear call-to-action patterns (phone numbers, contact forms)
- Professional service industry aesthetics

## Development Notes

### Asset Management
- Images stored in `attached_assets/generated_images/`
- Hero and service images are pre-generated
- Uses Vite asset imports for optimization

### Database Considerations
- Drizzle config points to PostgreSQL
- Requires `DATABASE_URL` environment variable for production
- Current schema is minimal (users table only)
- MemStorage used for development/testing

### Replit Integration
The project includes Replit-specific plugins for development:
- Cartographer for code mapping
- Runtime error overlay
- Development banner

### Testing Strategy
Components include `data-testid` attributes suggesting test infrastructure is planned but not yet implemented.

When working on this codebase, prioritize maintaining the professional service industry aesthetic while ensuring mobile-responsive design for emergency use cases.