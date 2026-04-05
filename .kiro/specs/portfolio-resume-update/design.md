# Design Document: portfolio-resume-update

## Overview

This design covers the full update of the Next.js portfolio to reflect Yuvraj Singh's resume. The changes fall into four categories:

1. **Content** — hero text, skills, projects, experience, achievements, contacts
2. **Layout** — replace `SpecialLinks` with a vertical timeline `Experience` component
3. **Theme** — swap purple/blue palette for tech light-green (`#22c55e` / `#4ade80`)
4. **Cleanup** — remove the hero-bg.svg funnel image, remove stale data entries

The app uses Next.js 13+ App Router, TypeScript, Tailwind CSS, and Framer Motion. All data lives in `constants/index.ts` as the single source of truth. Components are split into `components/main/` (section wrappers) and `components/sub/` (leaf renderers).

---

## Architecture

No new routes or pages are introduced. The changes are confined to:

- `constants/index.ts` — data arrays (skills, projects, socials, nav links, footer data)
- `app/globals.css` — CSS custom classes (Welcome-text, Welcome-box, button-primary)
- `tailwind.config.ts` — no structural changes needed; Tailwind's built-in green scale is sufficient
- `app/layout.tsx` — metadata title update via `config/index.ts`
- `components/sub/hero-content.tsx` — text content, remove funnel image
- `components/main/navbar.tsx` — name, nav links, button gradient
- `components/main/footer.tsx` — name, email
- `components/main/skills.tsx` — grouped layout with category labels
- `components/main/projects.tsx` — heading gradient
- `components/sub/project-card.tsx` — border color, demo button gradient
- `components/main/achievements.tsx` — trimmed data, year badge color, Codeforces link
- `components/main/special-links.tsx` → **replaced** by `components/main/experience.tsx`
- `app/page.tsx` — swap `<SpecialLinks />` for `<Experience />`

```
app/page.tsx
  ├── Hero  (hero.tsx → hero-content.tsx)
  ├── Skills  (skills.tsx → skill-data-provider.tsx)
  ├── Projects  (projects.tsx → project-card.tsx)
  ├── Achievements  (achievements.tsx)
  └── Experience  (experience.tsx)  ← new, replaces SpecialLinks
```

---

## Components and Interfaces

### constants/index.ts — data shape (unchanged, values updated)

```ts
type Skill = { skill_name: string; image: string; width: number; height: number }

// Four named arrays replace the current five:
export const LANGUAGES: Skill[]           // JS, TS, Python
export const FRAMEWORKS: Skill[]          // React, Node.js, Express.js
export const DATABASES: Skill[]           // PostgreSQL
export const TOOLS: Skill[]               // Docker

// Kept for backward compat but now only resume skills:
export const SKILL_DATA: Skill[]          // (can be removed or kept as flat union)

export const SOCIALS: { name, icon, link }[]
export const NAV_LINKS: { title, link }[]
export const PROJECTS: { title, description, image, link, demoLink? }[]
export const FOOTER_DATA: { title, data: { name, icon, link }[] }[]
export const LINKS: { sourceCode: string }
```

### components/main/experience.tsx — new component

Replaces `SpecialLinks`. Renders a vertical timeline with three subsections: Work Experience, Certifications, Leadership/Education.

```ts
type TimelineEntry = {
  role: string
  company: string
  period: string
  bullets: string[]
}

type CertEntry = { name: string; issuer: string; date: string }
type LeadershipEntry = { role: string; org: string; period: string }
type EducationEntry = { degree: string; institution: string; period: string; gpa: string }
```

The component is a server component (no `"use client"` needed — no interactivity). Framer Motion `motion.div` wrappers can be added for scroll-triggered fade-in using `useInView` if desired, but the base implementation is static.

### components/main/skills.tsx — grouped layout

The current component renders five flat rows from five arrays. The new layout renders four rows, each preceded by a `<p>` category label. The `SkillDataProvider` sub-component is unchanged.

### components/sub/hero-content.tsx — simplified layout

Remove the right-side `motion.div` containing the `<Image src="/hero-bg.svg" />`. The outer flex container changes from `flex-row` to a single centered column so the text fills the width naturally.

---

## Data Models

### Skill arrays (constants/index.ts)

Only icons present in `public/skills/` are used. Available files confirmed:
`css.png, docker.png, express.png, figma.png, firebase.png, framer.png, go.png, graphql.png, html.png, js.png, mongodb.png, mui.png, mysql.png, next.png, node.png, postgresql.png, prisma.png, react.png, reactnative.png, reactquery.png, redux.png, stripe.png, tailwind.png, tauri.png, ts.png`

Resume skill → icon mapping:

| Category | Skill | Image file |
|---|---|---|
| Languages | JavaScript | js.png ✓ |
| Languages | TypeScript | ts.png ✓ |
| Languages | Python | *(no python.png — omit icon or add file)* |
| Frameworks | React | react.png ✓ |
| Frameworks | Node.js | node.png ✓ |
| Frameworks | Express.js | express.png ✓ |
| Databases | PostgreSQL | postgresql.png ✓ |
| Tools | Docker | docker.png ✓ |

> Python has no icon in `public/skills/`. Per Requirement 2.4, it must not be referenced. Python will be listed as a text-only label in the category heading or omitted from the icon grid. The design choice: include Python as a text badge in the Languages label row rather than an icon, keeping the icon grid honest.

### Projects (constants/index.ts)

```ts
export const PROJECTS = [
  {
    title: "Saaransh",
    description: "...",   // ensemble sentiment classifier, Hinglish, BART summarization
    image: "/projects/project-1.png",
    link: "https://github.com/overlord00007/project",
    // no demoLink
  },
  {
    title: "Scrubbie",
    description: "...",   // 100+ concurrent users, sub-100ms canvas sync, OOP game state
    image: "/projects/project-2.png",
    link: "https://github.com/overlord00007/scrubbie",  // placeholder if no separate repo
    demoLink: "https://scrubbie.onrender.com/",
  },
] as const
```

### Experience data (inline in experience.tsx)

```ts
const WORK: TimelineEntry[] = [
  {
    role: "Step Forward Program Participant",
    company: "McKinsey & Company",
    period: "Apr 2025 – Jun 2025",
    bullets: [
      "Selected for McKinsey's Step Forward Program, a competitive leadership development initiative.",
      "Engaged in structured problem-solving workshops and case-based learning with McKinsey consultants.",
    ],
  },
  {
    role: "AI Intern",
    company: "Edunet Foundation",
    period: "May 2025 – Jun 2025",
    bullets: [
      "Deployed AI models on cloud architecture using IBM Skills Build platform.",
      "Optimized ML data pipelines for scalability and production readiness.",
    ],
  },
]

const CERTS: CertEntry[] = [
  { name: "DSA Using JAVA", issuer: "Infosys", date: "Mar 2026" },
  { name: "Oracle Analytics Cloud 2025 Professional", issuer: "Oracle", date: "Oct 2025" },
]

const LEADERSHIP: LeadershipEntry[] = [
  { role: "Editorial Head", org: "GFG Club", period: "Oct 2023 – Nov 2025" },
]

const EDUCATION: EducationEntry = {
  degree: "B.Tech in Mathematics and Computing",
  institution: "RGIPT (INI), Jais",
  period: "Aug 2023 – May 2027",
  gpa: "8.36",
}
```

### Theme tokens

| Token | Old value | New value |
|---|---|---|
| Primary accent | `#7042f8` / `purple-500` | `#22c55e` / `green-500` |
| Highlight | `cyan-500` | `green-400` / `#4ade80` |
| Navbar shadow | `#2A0E61` | `#14532d` (green-900) |
| Welcome-box shadow | `#a48fff1f` | `#86efac1f` (green-300 at low opacity) |
| button-primary bg | `rgba(60,8,126,...)` / `rgba(113,47,255,...)` | `rgba(20,83,45,...)` / `rgba(34,197,94,...)` |
| ProjectCard border | `border-[#2A0E61]` | `border-green-900` |
| Achievement year | `text-purple-400` | `text-green-400` |
| Hover border | `hover:border-purple-500` | `hover:border-green-500` |
| Gradient text/buttons | `from-purple-500 to-cyan-500` | `from-green-400 to-emerald-500` |

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Most acceptance criteria in this feature are UI content checks (specific strings, specific counts) best validated by example-based tests. The following properties are universal statements that hold across variable inputs and are worth property-based testing.

### Property 1: All skill entries reference existing icon files

*For any* skill entry in any of the skill arrays exported from `constants/index.ts`, the `image` filename must be a member of the set of files present in `public/skills/`.

**Validates: Requirements 2.4**

### Property 2: No skill entry references a removed technology

*For any* skill entry in any skill array, the `skill_name` must not be one of the explicitly excluded technologies: "Go", "Tauri", "React Native", "React Query", "Redux", "Stripe", "Firebase", "GraphQL".

**Validates: Requirements 2.2, 2.3**

### Property 3: ProjectCard renders a Live Demo button if and only if demoLink is provided

*For any* `ProjectCard` rendered with a non-empty `demoLink` prop, the rendered output must contain an anchor element with text "Live Demo" linking to that URL. *For any* `ProjectCard` rendered without a `demoLink` prop, no such element must appear.

**Validates: Requirements 3.5**

### Property 4: Every experience entry renders all required fields

*For any* work experience entry in the timeline data, the rendered `Experience` component must contain the entry's role title, company name, date range, and each bullet description string.

**Validates: Requirements 4.4**

### Property 5: No constants link references old profile URLs

*For any* link value in `SOCIALS`, `FOOTER_DATA`, `NAV_LINKS`, or `LINKS`, the URL string must not contain the substrings `"TishyaJ"`, `"tishya-j"`, or `"tishyajha"`.

**Validates: Requirements 7.5**

---

## Error Handling

This feature is a content/styling update with no new async operations, API calls, or user input flows. Error handling considerations:

- **Missing image files**: If a skill icon path is wrong, Next.js `<Image>` will throw a 404 at runtime. Mitigated by Property 1 — all image filenames are validated against the known `public/skills/` set before implementation.
- **Broken project links**: External GitHub/demo URLs are static strings. No runtime validation needed; they are verified manually during implementation.
- **Video background fallback**: The blackhole.webm video uses `preload="metadata"` and `muted autoPlay loop` — if the browser blocks autoplay, the video simply doesn't play; the dark background color remains visible.
- **TypeScript**: All data arrays use `as const` for type narrowing. The `demoLink` field on projects is `string | undefined` — `ProjectCard` already guards with `{demoLink && ...}`.

---

## Testing Strategy

This feature is primarily a content and styling update. PBT applies to a small subset of criteria (data integrity checks and component rendering contracts). The majority of criteria are validated by example-based unit tests.

### Unit / Example Tests

For each section, verify:

- `constants/index.ts`: SOCIALS URLs match expected values, PROJECTS has length 2 with correct titles, NAV_LINKS contains `#experience`, LINKS.sourceCode is correct
- `hero-content.tsx`: renders "Yuvraj Singh", renders correct badge text, does not render "Tishya Jha" or "AI/ML Engineer", does not render an img with src containing "hero-bg.svg"
- `navbar.tsx`: renders "Yuvraj Singh" brand name, "Source" button uses green gradient classes
- `footer.tsx`: renders "Yuvraj Singh" copyright, renders `yuvraj021120@gmail.com` link
- `achievements.tsx`: renders exactly 3 achievement cards, Codeforces entry has correct href
- `experience.tsx`: section has `id="experience"`, renders McKinsey and Edunet entries, renders Certifications and Leadership subsections

### Property-Based Tests

Use a property-based testing library (e.g., **fast-check** for TypeScript/Jest).

**Configuration**: minimum 100 runs per property.

**Property 1 — Skill icon file integrity**
- Tag: `Feature: portfolio-resume-update, Property 1: all skill entries reference existing icon files`
- Generator: arbitrary element from the union of all skill arrays
- Assertion: `entry.image` is in `VALID_SKILL_ICONS` set

**Property 2 — No excluded skill technologies**
- Tag: `Feature: portfolio-resume-update, Property 2: no skill entry references a removed technology`
- Generator: arbitrary element from the union of all skill arrays
- Assertion: `entry.skill_name` is not in `EXCLUDED_SKILLS` set

**Property 3 — ProjectCard demoLink contract**
- Tag: `Feature: portfolio-resume-update, Property 3: ProjectCard renders Live Demo button iff demoLink provided`
- Generator: arbitrary `{ src, title, description, link, demoLink?: string }` object
- Assertion: rendered output contains "Live Demo" link ↔ `demoLink` is non-empty

**Property 4 — Experience entry completeness**
- Tag: `Feature: portfolio-resume-update, Property 4: every experience entry renders all required fields`
- Generator: arbitrary `TimelineEntry` from the WORK array (or generated)
- Assertion: rendered HTML contains `entry.role`, `entry.company`, `entry.period`, and all `entry.bullets`

**Property 5 — No stale profile URLs**
- Tag: `Feature: portfolio-resume-update, Property 5: no constants link references old profile URLs`
- Generator: arbitrary link string from all constants link arrays
- Assertion: link does not contain `"TishyaJ"`, `"tishya-j"`, or `"tishyajha"`
