

# Multi-Page Conversion with Indian Clinic Data

## Page Structure

```text
/              → Home (Hero + brief About + Services overview + Testimonials preview + CTA)
/about         → About Us (full timeline, values, Why Choose Us)
/services      → All Services (detailed cards)
/doctors       → Doctors (spotlight carousel, full profiles)
/testimonials  → Testimonials (full reviews)
/gallery       → Gallery (bento grid + lightbox)
/faq           → FAQ (tabbed accordion)
/contact       → Contact (NEW — map embed, contact form, clinic details)
```

## Files to Create / Modify

### New Files
- `src/pages/About.tsx` — About + WhyChooseUs sections combined
- `src/pages/Services.tsx` — Expanded services with longer descriptions
- `src/pages/Doctors.tsx` — Doctor spotlight with Indian doctor profiles
- `src/pages/Testimonials.tsx` — Full testimonials carousel
- `src/pages/Gallery.tsx` — Gallery with lightbox
- `src/pages/FAQ.tsx` — FAQ accordion
- `src/pages/Contact.tsx` — NEW page: contact form (visual only), Google Maps embed, clinic address, phone, email, operating hours
- `src/components/clinic/Layout.tsx` — Shared layout wrapper (Navbar + Footer + FloatingCTA)

### Modified Files
- `src/App.tsx` — Add all routes
- `src/pages/Index.tsx` — Slim down to Hero + brief previews of About/Services/Testimonials with "View More" links to subpages
- `src/components/clinic/Navbar.tsx` — Convert from anchor `#section` links to `react-router-dom` `Link`/`NavLink` page navigation
- `src/components/clinic/Footer.tsx` — Quick links become `Link` routes; Indian address/phone
- `src/components/clinic/FloatingCTA.tsx` — Indian phone number, address
- `src/components/clinic/SectionIndicator.tsx` — Remove (no longer needed for multi-page)

### Indian Data Updates (across all components)

**Clinic identity:**
- Name: MediCare Clinic (retained)
- Address: 42, MG Road, Koramangala, Bengaluru, Karnataka 560034
- Phone: +91 80 4567 8900
- Email: care@medicare-clinic.in

**Doctors (DoctorsSection.tsx):**
- Dr. Rajesh Sharma — Chief Medical Officer, Internal Medicine, 20+ years
- Dr. Priya Nair — Head of Pediatrics, 15+ years
- Dr. Arun Patel — Lead Diagnostician, 12+ years
- Dr. Sneha Gupta — Women's Health Lead, Gynecology, 18+ years
- Dr. Vikram Singh — Preventive Care & Wellness, 10+ years

**Testimonials (TestimonialsSection.tsx):**
- Ananya Krishnan — "Dr. Sharma's team made me feel truly heard..."
- Rahul Mehta — "Our children love visiting Dr. Nair..."
- Priya Reddy — "The diagnostic lab gave results same day..."
- Suresh Iyer — "From reception to consultation, everything is seamless..."
- Meera Joshi — "Dr. Gupta guided me through a difficult pregnancy..."

**About milestones:**
- 2002: Founded in Bengaluru
- 2008: Expanded to 5 departments, 15 specialists
- 2014: NABH Accreditation, digital health records
- 2019: Best Clinic Award — Karnataka Health Board
- 2025: Serving 20,000+ patients annually

**FAQ:** Updated with Indian insurance references (Star Health, ICICI Lombard, etc.), ₹ pricing, Indian health schemes (Ayushman Bharat)

**Contact page content:**
- Google Maps embed (Koramangala, Bengaluru)
- Visual-only appointment form (name, phone, preferred date, department dropdown)
- Operating hours, emergency number
- UPI/payment info display

## Technical Details

- Shared `Layout.tsx` wraps every page with `Navbar`, `Footer`, `FloatingCTA`
- Navbar switches from `scrollTo("#id")` to `react-router-dom` `Link` components
- Each page scrolls to top on mount via `useEffect`
- Home page shows condensed previews with "Learn More →" links routing to full pages
- `SectionIndicator` removed since pages are separate now

