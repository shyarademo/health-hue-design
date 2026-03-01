

# QR Waiting Room Experience — Separate UI/UX

## Concept

A completely separate "waiting room" experience living under `/waiting/*` routes with its own layout, navigation, and visual style — distinct from the main clinic website. Connected only by explicit "Go to Main Site" / "Go to Waiting Room" buttons.

## Route Structure

```text
Main Site (existing):        QR Waiting Room (new):
/                            /waiting
/about                       /waiting/doctors
/services                    /waiting/blogs
/doctors                     /waiting/blog/:slug
/testimonials                /waiting/equipment
/gallery                     /waiting/tips
/faq
/contact
```

## New Files to Create

### Layout & Navigation
- `src/components/waiting/WaitingLayout.tsx` — Separate layout with its own navbar (clinic logo, dark mode toggle, nav tabs for Blogs/Doctors/Equipment/Tips) and a prominent "Visit Main Site →" button. No footer, no FloatingCTA. Clean, calming, mobile-first card-based design.

### Pages
- `src/pages/waiting/WaitingHome.tsx` — Welcome screen: "While you wait..." greeting, quick cards linking to Blogs, Doctor Profiles, Equipment, Health Tips. Calming animations.
- `src/pages/waiting/WaitingDoctors.tsx` — Doctor profiles in card format with photo, credentials, specialties, languages. Builds trust. Reuses doctor data.
- `src/pages/waiting/WaitingBlogs.tsx` — Blog listing page with article cards (thumbnail, title, author, read time).
- `src/pages/waiting/WaitingBlogPost.tsx` — Individual blog post page (`/waiting/blog/:slug`). Full article with doctor author credit.
- `src/pages/waiting/WaitingEquipment.tsx` — Showcase clinic equipment & facilities with photos and descriptions to build confidence.
- `src/pages/waiting/WaitingTips.tsx` — Quick health tips, do's and don'ts, seasonal health advice in bite-sized cards.

### Data
- `src/data/blogs.ts` — Array of 6-8 blog posts written by clinic doctors (e.g., "Managing Diabetes in Indian Diets" by Dr. Sharma, "Monsoon Health Tips for Children" by Dr. Nair, "Understanding Your Blood Report" by Dr. Patel). Each with slug, title, author, date, readTime, content (markdown or JSX), thumbnail description.
- `src/data/equipment.ts` — Array of clinic equipment/facility items (digital X-ray, 2D Echo, automated lab analyzers, etc.) with descriptions.
- `src/data/healthTips.ts` — Quick health tips array.

## Modified Files

### `src/App.tsx`
- Add all `/waiting/*` routes pointing to new pages.

### `src/components/clinic/Layout.tsx`
- Accept an optional prop or use location to detect if user arrived from `/waiting` (via URL param `?from=waiting`). If so, show a top banner: "← Back to Waiting Room".

### `src/components/clinic/Navbar.tsx`  
- When `?from=waiting` is in the URL, show a small "← Back to Waiting Room" link at the top of the navbar or as a banner above it.

## Visual Distinction

The waiting room UI will use:
- A warmer, calmer color palette via a CSS class on the layout (e.g., softer backgrounds, rounded cards, larger text for readability on phones)
- Card-based, scroll-friendly mobile-first layout (no complex grids)
- Bottom tab navigation instead of top navbar (mobile-optimized)
- Gentle animations, no parallax (simpler, less distracting)
- No FloatingCTA, no Footer — minimal chrome

## Linking Logic

- **Waiting Room → Main Site**: "Visit Main Site →" button in WaitingLayout links to `/?from=waiting`
- **Main Site → Waiting Room**: Only visible when `?from=waiting` param exists. Shows banner linking back to `/waiting`
- No browser back button manipulation — just explicit buttons
- Footer quick links on main site do NOT include waiting room links

## Implementation Steps

1. Create blog/equipment/tips data files
2. Create `WaitingLayout.tsx` with mobile-first bottom tabs and "Visit Main Site" button
3. Create all 6 waiting room pages
4. Add `/waiting/*` routes to `App.tsx`
5. Modify main site `Layout.tsx` and `Navbar.tsx` to show "Back to Waiting Room" banner when `?from=waiting` is present

