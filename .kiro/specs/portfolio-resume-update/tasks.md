# Implementation Plan: portfolio-resume-update

## Overview

Update the Next.js portfolio to reflect Yuvraj Singh's resume: replace all personal content, swap the purple/blue theme for a green palette, replace `SpecialLinks` with a vertical timeline `Experience` component, and add property-based tests for the five correctness properties defined in the design.

All changes are confined to existing files plus one new component (`experience.tsx`). No new routes or pages are introduced.

## Tasks

- [x] 1. Update constants/index.ts — replace all data arrays
  - Replace `SKILL_DATA`, `FRONTEND_SKILL`, `BACKEND_SKILL`, `FULLSTACK_SKILL`, `OTHER_SKILL` with four named arrays: `LANGUAGES`, `FRAMEWORKS`, `DATABASES`, `TOOLS` — only resume skills, only icons confirmed present in `public/skills/`
  - Replace `SOCIALS` with GitHub (`https://github.com/overlord00007`) and LinkedIn (`https://linkedin.com/in/yuvraj-singh-00aa47282/`) entries
  - Replace `PROJECTS` with exactly two entries: Saaransh (no demoLink) and Scrubbie (demoLink: `https://scrubbie.onrender.com/`)
  - Replace `FOOTER_DATA` contact email with `yuvraj021120@gmail.com`; update GitHub/LinkedIn links to Yuvraj's profiles
  - Update `NAV_LINKS`: replace `#special-links` entry with `{ title: "Experience", link: "#experience" }`; keep all other links
  - Update `LINKS.sourceCode` to `https://github.com/overlord00007`
  - _Requirements: 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 6.3, 7.1, 7.2, 7.3, 7.4, 7.5, 4.5, 4.6_

- [x] 2. Update app/globals.css and config/index.ts — green theme tokens and metadata
  - [x] 2.1 Update `globals.css`: change `Welcome-text` gradient to green tones (`#86efac` → `#4ade80` → `#22c55e`); change `Welcome-box` box-shadow to `#86efac1f`; change `button-primary` background and box-shadow to green tones (`rgba(20,83,45,...)` / `rgba(34,197,94,...)`)
    - _Requirements: 8.2, 8.3, 8.4_
  - [x] 2.2 Update `config/index.ts` metadata: set title to "Yuvraj Singh | Software Engineer" and update description to match the hero intro paragraph
    - _Requirements: 6.1, 6.2_

- [x] 3. Update components/sub/hero-content.tsx — content and layout
  - Change name from "Tishya Jha" to "Yuvraj Singh" with green gradient (`from-green-400 to-emerald-500`)
  - Change badge text to "Software Engineer · SIH 2025 Finalist · B.Tech Mathematics & Computing @ RGIPT"
  - Replace intro paragraph with the verbatim text from Requirement 1.3
  - Remove the right-side `motion.div` containing `<Image src="/hero-bg.svg" />`
  - Change outer flex container from `flex-row` to `flex-col items-center` so text is centered
  - Update `SparklesIcon` color from `text-[#b49bff]` to `text-green-400`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 9.1, 9.2, 9.3_

- [x] 4. Update components/main/navbar.tsx — name, gradient, shadow
  - Change brand name text from "Tishya Jha" to "Yuvraj Singh"
  - Change navbar shadow class from `shadow-[#2A0E61]/50` to `shadow-[#14532d]/50`
  - Change "Source" button gradient from `from-purple-500 to-cyan-500` to `from-green-500 to-emerald-500` (both desktop and mobile)
  - Change hover states on nav links and social icons from purple tint to green tint (`rgba(34,197,94,0.1)`)
  - _Requirements: 6.3, 8.1, 8.5, 8.6_

- [x] 5. Update components/main/footer.tsx — name and email
  - Change copyright line from "Tishya Jha" to "Yuvraj Singh"
  - The email in `FOOTER_DATA` is already updated in Task 1; verify it renders correctly
  - _Requirements: 6.4, 7.3, 7.5_

- [x] 6. Update components/main/skills.tsx — grouped layout with category labels
  - Import `LANGUAGES`, `FRAMEWORKS`, `DATABASES`, `TOOLS` from constants (replacing the five old imports)
  - Render four rows, each preceded by a `<p>` category label (e.g., "Languages", "Frameworks & Libraries", "Databases", "Systems & Tools")
  - Keep `SkillDataProvider` sub-component unchanged
  - _Requirements: 2.1, 2.5_

- [x] 7. Update components/sub/project-card.tsx and components/main/projects.tsx — green theme
  - [x] 7.1 In `project-card.tsx`: change border from `border-[#2A0E61]` to `border-green-900`; change Live Demo button gradient from `from-purple-500 to-cyan-500` to `from-green-400 to-emerald-500`
    - _Requirements: 8.9, 3.5_
  - [x] 7.2 In `projects.tsx`: change heading gradient from `from-purple-500 to-cyan-500` to `from-green-400 to-emerald-500`; pass `demoLink` prop through to `ProjectCard` for each project
    - _Requirements: 8.7, 3.5_

- [x] 8. Update components/main/achievements.tsx — trim to 3 entries, green badge, Codeforces link
  - Replace the inline `achievements` array with exactly three entries: "Finalist (Team Lead), SIH 2025", "Runner Up, Odoo Hackathon 2025", "Codeforces Specialist (Max Rating: 1489)"
  - Add `href` to the Codeforces entry pointing to `https://codeforces.com/profile/picsoo`
  - Change year badge color from `text-purple-400` to `text-green-400`
  - Change heading gradient from `from-purple-500 to-cyan-500` to `from-green-400 to-emerald-500`
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 8.7, 8.10_

- [x] 9. Create components/main/experience.tsx — vertical timeline component
  - Create new file; no `"use client"` needed (static render)
  - Define inline data constants: `WORK` (2 entries: McKinsey, Edunet), `CERTS` (2 entries), `LEADERSHIP` (1 entry), `EDUCATION` (1 entry) — exact values from design.md Data Models section
  - Render a vertical timeline: left border line, each `WORK` entry as a card with role, company, period, and bullet list
  - Render "Certifications" subsection below work entries listing each cert with name, issuer, date
  - Render "Leadership" subsection with role, org, period
  - Render "Education" subsection with degree, institution, period, GPA
  - Section element must have `id="experience"`
  - Heading gradient: `from-green-400 to-emerald-500`
  - Hover border: `hover:border-green-500`
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 10.1, 10.2, 10.3_

- [x] 10. Update app/page.tsx — swap SpecialLinks for Experience
  - Remove `import { SpecialLinks } from "@/components/main/special-links"`
  - Add `import { Experience } from "@/components/main/experience"`
  - Replace `<SpecialLinks />` with `<Experience />`
  - _Requirements: 4.1, 4.5_

- [x] 11. Checkpoint — verify the app compiles and all sections render correctly
  - Ensure all TypeScript types are satisfied (no `as const` breakage from new arrays)
  - Ensure all imports resolve (no references to old array names like `SKILL_DATA`, `FRONTEND_SKILL`, etc. remain in skills.tsx)
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Set up property-based tests with fast-check
  - Install `fast-check` as a dev dependency if not already present: `npm install --save-dev fast-check`
  - Create test file `__tests__/portfolio-resume-update.test.ts`
  - Configure test runner (Jest or Vitest) to pick up `__tests__/` directory
  - _Requirements: (test infrastructure)_

- [x] 13. Implement property tests for data integrity (Properties 1 & 2)
  - [x] 13.1 Write property test for Property 1 — all skill entries reference existing icon files
    - Define `VALID_SKILL_ICONS` set from the confirmed `public/skills/` filenames listed in design.md
    - Use `fc.constantFrom(...allSkillEntries)` to generate arbitrary skill entries from the union of `LANGUAGES`, `FRAMEWORKS`, `DATABASES`, `TOOLS`
    - Assert `entry.image` is in `VALID_SKILL_ICONS`
    - Tag: `Feature: portfolio-resume-update, Property 1: all skill entries reference existing icon files`
    - **Validates: Requirements 2.4**
  - [ ]* 13.2 Write property test for Property 2 — no excluded skill technologies
    - Define `EXCLUDED_SKILLS` set: `["Go", "Tauri", "React Native", "React Query", "Redux", "Stripe", "Firebase", "GraphQL"]`
    - Use `fc.constantFrom(...allSkillEntries)` generator
    - Assert `entry.skill_name` is not in `EXCLUDED_SKILLS`
    - Tag: `Feature: portfolio-resume-update, Property 2: no skill entry references a removed technology`
    - **Validates: Requirements 2.2, 2.3**

- [x] 14. Implement property tests for component rendering contracts (Properties 3 & 4)
  - [x] 14.1 Write property test for Property 3 — ProjectCard renders Live Demo iff demoLink provided
    - Use `fc.record({ src: fc.constant("/projects/project-1.png"), title: fc.string(), description: fc.string(), link: fc.webUrl(), demoLink: fc.option(fc.webUrl(), { nil: undefined }) })` generator
    - Render `<ProjectCard>` with `@testing-library/react` and assert: if `demoLink` is non-empty string → rendered output contains anchor with text "Live Demo" and `href === demoLink`; if `demoLink` is undefined → no "Live Demo" text present
    - Tag: `Feature: portfolio-resume-update, Property 3: ProjectCard renders Live Demo button iff demoLink provided`
    - **Validates: Requirements 3.5**
  - [ ]* 14.2 Write property test for Property 4 — every experience entry renders all required fields
    - Use `fc.record({ role: fc.string({ minLength: 1 }), company: fc.string({ minLength: 1 }), period: fc.string({ minLength: 1 }), bullets: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }) })` generator
    - Render `<Experience />` with overridden WORK data (or extract a pure render helper) and assert rendered HTML contains `role`, `company`, `period`, and each bullet string
    - Tag: `Feature: portfolio-resume-update, Property 4: every experience entry renders all required fields`
    - **Validates: Requirements 4.4**

- [x] 15. Implement property test for stale URL check (Property 5)
  - [x] 15.1 Write property test for Property 5 — no constants link references old profile URLs
    - Collect all link strings from `SOCIALS`, `FOOTER_DATA` (all nested `link` fields), `NAV_LINKS`, and `LINKS`
    - Use `fc.constantFrom(...allLinks)` generator
    - Assert each link does not contain `"TishyaJ"`, `"tishya-j"`, or `"tishyajha"`
    - Tag: `Feature: portfolio-resume-update, Property 5: no constants link references old profile URLs`
    - **Validates: Requirements 7.5**
  - [ ]* 15.2 Write example-based unit tests for constants correctness
    - Assert `SOCIALS` has exactly 2 entries with correct URLs
    - Assert `PROJECTS` has length 2 with titles "Saaransh" and "Scrubbie"
    - Assert `NAV_LINKS` contains an entry with `link: "#experience"`
    - Assert `LINKS.sourceCode === "https://github.com/overlord00007"`
    - _Requirements: 7.1, 7.2, 3.1, 4.6_

- [x] 16. Final checkpoint — Ensure all tests pass
  - Run `npx jest --run` or `npx vitest --run` to confirm all property and unit tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Python has no icon in `public/skills/` — omit it from icon arrays; it may appear as a text label in the category heading only
- The old skill array names (`SKILL_DATA`, `FRONTEND_SKILL`, `BACKEND_SKILL`, `FULLSTACK_SKILL`, `OTHER_SKILL`) should be removed from `constants/index.ts` once `skills.tsx` is updated in Task 6
- `special-links.tsx` is not deleted — it can remain as a dead file or be removed manually; `page.tsx` simply stops importing it
- Property tests require `@testing-library/react` and a configured Jest/Vitest environment in addition to `fast-check`
