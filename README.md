# Phase 1: Frontend Setup & Entry Experience

This project is a Next.js 14+ (App Router) application configured with TypeScript, Tailwind CSS, and Framer Motion.

## Features Implemented

### 1. Loading Screen
- Located in `components/LoadingScreen.tsx`.
- Features a minimal 3-dot animation using Framer Motion (`staggerChildren` effect simulated with delay).
- Orchestrated in `app/page.tsx` via a `isLoading` state.
- Automatically transitions to the landing shell after 2 seconds (simulated load).

### 2. Landing Shell
- Located in `app/page.tsx`.
- Contains a full-screen Hero section.
- Minimal aesthetic inspired by Quanta Network.
- Uses `COMPANY_NAME` as a placeholder.

### 3. Navbar
- Located in `components/Navbar.tsx`.
- Sticky top navigation.
- Placeholder links for future expansion.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Project Structure
- `/app`: App Router pages and layout.
- `/components`: Reusable UI components.
- `/public`: Static assets.

## Next Steps (Phase 2)
- Implement real content sections.
- Connect valid links.
- Add more interactive elements.
