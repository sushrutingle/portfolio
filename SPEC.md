# Portfolio Website Specification

## Project Overview
- **Project name**: Sushrut Ingle Portfolio
- **Type**: Personal portfolio website (single page)
- **Core functionality**: Showcase skills, experience, and projects for a computer engineering student
- **Target users**: Recruiters, potential employers, collaborators

## UI/UX Specification

### Layout Structure
- **Single page scroll**: Vertical scrolling with smooth navigation
- **Sections**: Hero → About → Skills → Experience → Education → Languages → Footer
- **Max content width**: 1200px centered
- **Responsive breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette
- **Background**: #0a0a0a (near black)
- **Surface**: #111111 (cards, sections)
- **Surface hover**: #1a1a1a
- **Border**: #2a2a2a (subtle gray)
- **Text primary**: #ffffff (white)
- **Text secondary**: #a0a0a0 (muted gray)
- **Text tertiary**: #666666 (subtle)
- **Accent**: #ffffff (white for highlights)

#### Typography
- **Font family**: "Syne", "Inter", sans-serif (Google Fonts)
- **Hero name**: 72px / 900 weight
- **Hero headline**: 24px / 400 weight
- **Section titles**: 48px / 700 weight
- **Body text**: 16px / 400 weight
- **Small text**: 14px / 400 weight

#### Spacing System
- **Section padding**: 120px vertical
- **Container padding**: 24px (mobile), 48px (tablet), 80px (desktop)
- **Card padding**: 32px
- **Element gaps**: 16px, 24px, 32px, 48px

#### Visual Effects
- **Navbar**: sticky, backdrop-filter blur(20px), background rgba(10,10,10,0.8)
- **Cards**: subtle border, hover lift with box-shadow
- **Animations**: fade-in-up on scroll, 0.6s ease-out
- **Scroll indicator**: bouncing arrow animation
- **Grain texture**: CSS noise overlay (optional, subtle)

### Components

#### Navigation
- Fixed top, full width
- Logo/name on left
- Nav links on right (desktop) / hamburger (mobile)
- Blur background on scroll
- Active section highlighting

#### Hero Section
- Full viewport height (100vh)
- Left-aligned content
- Name in large bold text
- Headline below
- Short intro paragraph
- CTA buttons (View Work, Contact Me)
- Animated scroll indicator at bottom

#### About Section
- Section title with subtle line
- Two-column layout (text + decorative)
- Fade-in animation on scroll

#### Skills Section
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Cards with border
- Hover: lift + subtle glow

#### Experience Section
- Vertical timeline with left line
- Dot indicators for each role
- Card layout for content

#### Education Section
- Clean timeline or block layout
- University name, degree, dates

#### Languages Section
- Inline list or minimal grid
- Clean typography

#### Footer
- Minimal design
- Copyright, email, social links

## Functionality Specification

### Core Features
1. Smooth scrolling navigation
2. Intersection Observer for scroll animations
3. Active nav link highlighting based on scroll position
4. Mobile hamburger menu
5. Smooth scroll to sections on nav click
6. Responsive design across all breakpoints

### User Interactions
- Nav links scroll to sections smoothly
- Hover effects on cards and buttons
- Mobile menu toggle
- Scroll-triggered fade-in animations

### Edge Cases
- Handle window resize
- Prevent animation on initial load (page visible)
- Fallback for browsers without backdrop-filter

## Acceptance Criteria
1. Page loads with smooth fade-in animation
2. All sections visible and properly styled
3. Navigation works smoothly
4. Responsive on mobile, tablet, desktop
5. Scroll animations trigger correctly
6. All text is readable and properly contrasted
7. No horizontal scroll on any device
8. Fast loading (no heavy frameworks)
