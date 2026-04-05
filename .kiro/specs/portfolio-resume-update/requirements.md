# Requirements Document

## Introduction

This feature updates the existing Next.js portfolio website to accurately reflect Yuvraj Singh's personal resume and redesigns the visual theme from a purple/blue space aesthetic to a tech light-green palette. The changes span content (hero, skills, projects, experience, achievements), layout (vertical timeline for experience), and styling (green accent colors, removal of the tech-icons funnel animation).

## Glossary

- **Portfolio**: The Next.js + TypeScript + Tailwind CSS + Framer Motion website located in the PORTFOLIO directory.
- **Hero_Section**: The top-of-page section rendered by `HeroContent` in `components/sub/hero-content.tsx`.
- **Skills_Section**: The section rendered by `Skills` in `components/main/skills.tsx`, displaying icon grids from `constants/index.ts`.
- **Projects_Section**: The section rendered by `Projects` in `components/main/projects.tsx`, using `ProjectCard` sub-components.
- **Experience_Section**: A new section (currently `SpecialLinks`) that will display work experience as a vertical timeline.
- **Achievements_Section**: The section rendered by `Achievements` in `components/main/achievements.tsx`.
- **Constants_File**: `constants/index.ts` — the single source of truth for all data arrays.
- **Theme**: The color palette, CSS variables, and Tailwind config that control the visual appearance.
- **Vertical_Timeline**: A UI layout where entries are stacked vertically with a connecting line and alternating or left-aligned content cards.
- **Funnel_Animation**: The animated tech-icons SVG (`hero-bg.svg`) rendered on the right side of the hero section.

---

## Requirements

### Requirement 1: Hero Section Content Update

**User Story:** As a visitor, I want to see Yuvraj Singh's correct name, title, and introduction, so that I immediately understand who he is and what he does.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the name "Yuvraj Singh" as the primary heading.
2. THE Hero_Section SHALL display the title "Software Engineer · SIH 2025 Finalist · B.Tech Mathematics & Computing @ RGIPT" in the badge/welcome box.
3. THE Hero_Section SHALL display the following introduction paragraph verbatim: "I'm a Software Engineer with a strong foundation in Data Structures, Algorithms, and Object-Oriented Design. I build scalable distributed systems and AI-powered platforms that translate complex data into actionable insights. My work spans real-time systems, NLP pipelines, and full-stack engineering — always focused on measurable impact and reliability."
4. THE Hero_Section SHALL NOT display the name "Tishya Jha" anywhere.
5. THE Hero_Section SHALL NOT display the title "AI/ML Engineer" anywhere.
6. WHEN the Funnel_Animation image (`hero-bg.svg`) is present in the hero layout, THE Hero_Section SHALL remove it entirely so no tech-icons funnel graphic is rendered.

---

### Requirement 2: Skills Section — Resume-Accurate Content

**User Story:** As a visitor, I want to see only the skills Yuvraj actually uses, so that the section is credible and accurate.

#### Acceptance Criteria

1. THE Skills_Section SHALL display skills grouped into the following categories in order: Languages, Frameworks & Libraries, Databases, Systems & Tools.
2. THE Constants_File SHALL contain skill entries only for technologies present in Yuvraj's resume: JavaScript, TypeScript, React, Node.js, Express.js, Python, PostgreSQL, Docker.
3. THE Constants_File SHALL NOT contain skill entries for Go, Tauri, React Native, or any technology not listed in the resume.
4. WHEN a skill icon image file does not exist under `public/skills/`, THE Skills_Section SHALL NOT reference that image path.
5. THE Skills_Section SHALL display a category label above each skill row so visitors can identify the grouping.

---

### Requirement 3: Projects Section — Resume-Only Projects

**User Story:** As a visitor, I want to see only Saaransh and Scrubbie in the projects section, so that the portfolio matches the resume exactly.

#### Acceptance Criteria

1. THE Projects_Section SHALL display exactly two projects: "Saaransh" and "Scrubbie".
2. THE Constants_File SHALL NOT contain entries for Intelligent RevOps, Medicova AI, SkillSwap Hub, or RentalPro.
3. THE Projects_Section for Saaransh SHALL include: tech stack (React, Express.js, PostgreSQL, FastAPI, HuggingFace), a GitHub link to `https://github.com/overlord00007/project`, and bullet descriptions covering the ensemble sentiment classifier (72% accuracy, ↑7% over baseline), Hinglish support, and BART-based summarization.
4. THE Projects_Section for Scrubbie SHALL include: tech stack (React, Node.js, WebSockets), a live demo link to `https://scrubbie.onrender.com/`, and bullet descriptions covering 100+ concurrent users, sub-100ms canvas sync via Socket.IO, and OOP-based game state management.
5. WHEN a project has a live demo URL, THE ProjectCard SHALL render a "Live Demo" button linking to that URL.

---

### Requirement 4: Experience Section — Vertical Timeline Layout

**User Story:** As a visitor, I want to see Yuvraj's work experience displayed as a vertical timeline, so that I can quickly scan his career progression.

#### Acceptance Criteria

1. THE Experience_Section SHALL replace the current `SpecialLinks` component's experience entries with a dedicated vertical timeline layout.
2. THE Experience_Section SHALL display the following two entries in reverse-chronological order:
   - "Step Forward Program Participant | McKinsey & Company" — Apr 2025 – Jun 2025
   - "AI Intern | Edunet Foundation" — May 2025 – Jun 2025
3. WHEN rendering the Vertical_Timeline, THE Experience_Section SHALL display a continuous vertical line connecting all timeline nodes.
4. WHEN rendering the Vertical_Timeline, each entry SHALL display: role title, company name, date range, and at least two bullet-point descriptions from the resume.
5. THE Experience_Section SHALL be accessible via the `#experience` anchor in the navbar.
6. THE Navbar SHALL include an "Experience" navigation link pointing to `#experience`.

---

### Requirement 5: Achievements Section — Resume-Only Achievements

**User Story:** As a visitor, I want to see only the achievements listed in Yuvraj's resume, so that the section is accurate and not inflated.

#### Acceptance Criteria

1. THE Achievements_Section SHALL display exactly three achievements: "Finalist (Team Lead), SIH 2025", "Runner Up, Odoo Hackathon 2025", and "Codeforces Specialist (Max Rating: 1489)".
2. THE Achievements_Section SHALL NOT display achievements related to Olympiads, NTSE, JEE statistics, IIT Madras, Novartis, GO-BRICS, Naukri Campus, CodeClash, or GirlScript.
3. THE Achievements_Section for the Codeforces entry SHALL include a link to `https://codeforces.com/profile/picsoo`.
4. THE Achievements_Section SHALL NOT display any achievement that is not present in the resume data provided.

---

### Requirement 6: Title Consistency — "Software Engineer" Everywhere

**User Story:** As a visitor, I want to see a consistent professional title across the entire portfolio, so that Yuvraj's personal brand is clear.

#### Acceptance Criteria

1. THE Portfolio SHALL use the title "Software Engineer" in every section where a professional title appears.
2. THE Portfolio SHALL NOT display the string "AI/ML Engineer" in any visible text, heading, badge, or metadata.
3. THE Navbar SHALL display "Yuvraj Singh" as the name in the logo/brand area, replacing "Tishya Jha".
4. THE Footer SHALL display "Yuvraj Singh" in the copyright line, replacing "Tishya Jha".

---

### Requirement 7: Contact and Social Links Update

**User Story:** As a visitor, I want to see Yuvraj's correct contact details and social links, so that I can reach him through the right channels.

#### Acceptance Criteria

1. THE Constants_File SOCIALS array SHALL contain a GitHub entry linking to `https://github.com/overlord00007`.
2. THE Constants_File SOCIALS array SHALL contain a LinkedIn entry linking to `https://linkedin.com/in/yuvraj-singh-00aa47282/`.
3. THE Footer SHALL display the email `yuvraj021120@gmail.com` as a contact link.
4. THE Constants_File LINKS.sourceCode SHALL point to `https://github.com/overlord00007`.
5. THE Portfolio SHALL NOT display any links or references to "TishyaJ" or "tishya-j" GitHub/LinkedIn profiles.

---

### Requirement 8: Green Theme — Replace Purple/Blue Palette

**User Story:** As a visitor, I want to see a tech light-green color theme, so that the portfolio has a fresh, distinct visual identity.

#### Acceptance Criteria

1. THE Theme SHALL replace all primary purple accent colors (e.g., `#7042f8`, `from-purple-500`, `to-cyan-500`) with a tech light-green palette (e.g., `#22c55e` / `green-500` as primary, `#4ade80` / `green-400` as highlight).
2. THE globals.css `Welcome-text` gradient SHALL use green tones instead of purple/blue tones.
3. THE globals.css `Welcome-box` box-shadow SHALL use a green-tinted shadow instead of `#a48fff1f`.
4. THE globals.css `button-primary` background and box-shadow SHALL use green tones instead of purple tones.
5. THE Navbar shadow SHALL use a green-tinted color instead of `shadow-[#2A0E61]/50`.
6. THE Navbar "Source" button gradient SHALL use green tones (e.g., `from-green-500 to-emerald-500`) instead of purple-to-cyan.
7. WHEN any component uses `from-purple-500 to-cyan-500` for gradient text or borders, THE Theme SHALL replace those with `from-green-400 to-emerald-500`.
8. THE star/space background SHALL be retained but the overall accent color overlay SHALL shift to green tones to remain consistent with the new palette.
9. THE ProjectCard border color SHALL change from `border-[#2A0E61]` to a green-tinted border (e.g., `border-green-900`).
10. THE Achievements_Section year badge color SHALL change from `text-purple-400` to `text-green-400`.
11. THE SpecialLinks/Experience hover border SHALL change from `hover:border-purple-500` to `hover:border-green-500`.

---

### Requirement 9: Remove Funnel Animation

**User Story:** As a visitor, I want a clean hero section without the tech-icons funnel graphic, so that the focus stays on the text content.

#### Acceptance Criteria

1. THE Hero_Section SHALL NOT render the `<Image src="/hero-bg.svg" ... />` element.
2. THE Hero_Section layout SHALL remain visually balanced after removing the right-side image (e.g., center the text content or adjust flex layout).
3. THE Hero_Section SHALL retain the blackhole video background.

---

### Requirement 10: Certifications and Leadership Display

**User Story:** As a visitor, I want to see Yuvraj's certifications and leadership role, so that I have a complete picture of his background.

#### Acceptance Criteria

1. THE Experience_Section SHALL display a "Certifications" subsection listing: "DSA Using JAVA — Infosys (Mar 2026)" and "Oracle Analytics Cloud 2025 Professional — Oracle (Oct 2025)".
2. THE Experience_Section SHALL display a "Leadership" subsection listing: "Editorial Head | GFG Club — Oct 2023 – Nov 2025".
3. THE Experience_Section SHALL display the education entry: "B.Tech in Mathematics and Computing, RGIPT (INI), Jais — Aug 2023 – May 2027, CPI: 8.36".
