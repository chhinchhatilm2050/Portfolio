# 7-Day Developer Portfolio Development Plan

## Recommended Color Palette Options (Select One)

### Option 1: Modern Tech Dark (Cyber Indigo)

- **Primary:** `#6366F1` (Indigo-500) — Main buttons, highlights, active states
- **Background / Surface:** `#0F172A` (Slate-900) & `#020617` (Slate-950) — Deep neutral dark theme
- **Accent:** `#10B981` (Emerald-500) — Status badges, live demo indicators, callouts

### Option 2: Clean Slate Light & Modern

- **Primary:** `#2563EB` (Blue-600) — Primary UI controls and links
- **Background / Surface:** `#F8FAFC` (Slate-50) & `#FFFFFF` (White) — Crisp background with high readability
- **Accent:** `#F59E0B` (Amber-500) — Highlight stars, featured project badges

### Option 3: Neon Midnight (High Contrast Creative)

- **Primary:** `#8B5CF6` (Purple-500) — Dominant brand accents
- **Background / Surface:** `#09090B` (Zinc-950) — High contrast rich black
- **Accent:** `#06B6D4` (Cyan-500) — Interactive hover glow effects

---

## Stack & Recommended Secure Libraries

- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS (`@tailwindcss/vite` or standard Tailwind setup)
- **Icons:** `lucide-react` (Lightweight & standard)
- **Animations:** `framer-motion` (Industry standard, secure, declarative animations)
- **Localization (i18n):** `react-i18next` + `i18next` (Secure, performant translation handling for Khmer & English)
- **Forms & Validation:** `react-hook-form` + `zod` (Safe input handling & schema validation)
- **Email Delivery:** `@emailjs/browser` (Client-side contact form dispatching without backend setup)

---

## Suggested Features

1. **Bilingual Support (English & Khmer):** Seamless language switcher toggle in the navbar with custom font integration for Khmer script (e.g., _Noto Sans Khmer_ or _Kantumruy Pro_ via Google Fonts).
2. **Interactive Framer Motion Animations:** Scroll-triggered reveal animations, floating hero badges, smooth modal transitions, and hover scale effects.
3. **Filterable Project Showcase:** Project cards with live demo modal preview, github repository links, and tech stack tags.
4. **Interactive Experience Timeline:** Clean vertical timeline showcasing career milestones and education.
5. **Validated Contact Form:** Client-side validation using Zod with state indicators (Idle, Submitting, Success, Error).
6. **Dark / Light Mode Toggle:** Persisted theme preference saved in `localStorage`.
7. **Downloadable Resume/CV:** Interactive button to view or download PDF resume.

---

## 7-Day Execution Roadmap

### Day 1: Project Setup & Localization Infrastructure

- Initialize React project with TypeScript & Vite: `npm create vite@latest portfolio -- --template react-ts`
- Install dependencies: `tailwind css`, `framer-motion`, `lucide-react`, `i18next`, `react-i18next`.
- Configure Google Fonts for Khmer (`Kantumruy Pro`) and English (`Inter`).
- Set up `i18n.ts` dictionary JSON files for English (`en.json`) and Khmer (`km.json`).

### Day 2: Layout Shell, Theme & Navigation

- Build sticky Header/Navbar with theme switcher (Dark/Light) and Language switcher (`EN` / `KM`).
- Create responsive mobile menu drawer using `framer-motion` layout animations.
- Set up Global Layout component and Footer.

### Day 3: Hero & About Me Sections

- Design Hero section with animated typing effect, profile picture card with dynamic border glow, and social link buttons.
- Build About section with skill breakdown and stats badges.
- Implement entrance animations (`initial={{ opacity: 0, y: 20 }}`).

### Day 4: Interactive Skills & Experience Timeline

- Build animated Skill Cards with interactive proficiency bars or category badges.
- Construct the vertical Experience / Career timeline using Framer Motion viewport triggers (`whileInView`).

### Day 5: Projects Showcase & Modal View

- Structure project data model in TypeScript (`types/project.ts`).
- Build tabbed filtering for categories (All, Full Stack, Mobile, UI/UX).
- Create Project Card grid and detailed preview Modal popup when clicking a project.

### Day 6: Form Validation & Email Integration

- Set up Contact Section with `react-hook-form` and `zod`.
- Connect contact form with EmailJS (or API placeholder).
- Add success/error message state overlays.

### Day 7: Testing, Optimization & Deployment

- Test English and Khmer text overflow and font layout consistency across mobile and desktop.
- Verify accessibility (ARIA labels, keyboard navigation, color contrast).
- Run production build check: `npm run build`.
- Deploy to Vercel or Netlify.
