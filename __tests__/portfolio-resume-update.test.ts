/**
 * Property-based tests for portfolio-resume-update feature
 * Uses fast-check for property generation
 */
import * as fc from "fast-check";
import { LANGUAGES, FRAMEWORKS, DATABASES, TOOLS, SOCIALS, PROJECTS, NAV_LINKS, LINKS, FOOTER_DATA } from "@/constants";

// All skill entries union
const allSkillEntries = [...LANGUAGES, ...FRAMEWORKS, ...DATABASES, ...TOOLS];

// Confirmed icon files present in public/skills/
const VALID_SKILL_ICONS = new Set([
    "css.png", "docker.png", "express.png", "figma.png", "firebase.png",
    "framer.png", "go.png", "graphql.png", "html.png", "js.png",
    "mongodb.png", "mui.png", "mysql.png", "next.png", "node.png",
    "postgresql.png", "prisma.png", "react.png", "reactnative.png",
    "reactquery.png", "redux.png", "stripe.png", "tailwind.png",
    "tauri.png", "ts.png",
]);

const EXCLUDED_SKILLS = new Set([
    "Go", "Tauri", "React Native", "React Query", "Redux",
    "Stripe", "Firebase", "GraphQL",
]);

// ─── Property 1: All skill entries reference existing icon files ───────────────
// Tag: Feature: portfolio-resume-update, Property 1: all skill entries reference existing icon files
describe("Property 1: all skill entries reference existing icon files", () => {
    it("every skill image filename must be in the valid icons set", () => {
        fc.assert(
            fc.property(fc.constantFrom(...allSkillEntries), (entry) => {
                return VALID_SKILL_ICONS.has(entry.image);
            }),
            { numRuns: 100 }
        );
    });
});

// ─── Property 2: No excluded skill technologies ────────────────────────────────
// Tag: Feature: portfolio-resume-update, Property 2: no skill entry references a removed technology
describe("Property 2: no skill entry references a removed technology", () => {
    it("no skill_name should be in the excluded set", () => {
        fc.assert(
            fc.property(fc.constantFrom(...allSkillEntries), (entry) => {
                return !EXCLUDED_SKILLS.has(entry.skill_name);
            }),
            { numRuns: 100 }
        );
    });
});

// ─── Property 5: No constants link references old profile URLs ─────────────────
// Tag: Feature: portfolio-resume-update, Property 5: no constants link references old profile URLs
describe("Property 5: no constants link references old profile URLs", () => {
    const allLinks: string[] = [
        ...SOCIALS.map((s) => s.link),
        ...FOOTER_DATA.flatMap((col) => col.data.map((d) => d.link)),
        ...NAV_LINKS.map((n) => n.link),
        LINKS.sourceCode,
    ];

    it("no link should contain stale profile substrings", () => {
        fc.assert(
            fc.property(fc.constantFrom(...allLinks), (link) => {
                return (
                    !link.includes("TishyaJ") &&
                    !link.includes("tishya-j") &&
                    !link.includes("tishyajha")
                );
            }),
            { numRuns: 100 }
        );
    });
});

// ─── Example-based: constants correctness ─────────────────────────────────────
describe("constants correctness (example-based)", () => {
    it("SOCIALS has exactly 2 entries with correct URLs", () => {
        expect(SOCIALS).toHaveLength(2);
        const links = SOCIALS.map((s) => s.link);
        expect(links).toContain("https://github.com/overlord00007");
        expect(links).toContain("https://linkedin.com/in/yuvraj-singh-00aa47282/");
    });

    it("PROJECTS has exactly 2 entries with correct titles", () => {
        expect(PROJECTS).toHaveLength(2);
        const titles = PROJECTS.map((p) => p.title);
        expect(titles[0]).toContain("Saaransh");
        expect(titles[1]).toContain("Scrubbie");
    });

    it("NAV_LINKS contains an Experience entry pointing to #experience", () => {
        const expLink = NAV_LINKS.find((n) => n.link === "#experience");
        expect(expLink).toBeDefined();
        expect(expLink?.title).toBe("Experience");
    });

    it("LINKS.sourceCode points to Yuvraj's GitHub", () => {
        expect(LINKS.sourceCode).toBe("https://github.com/overlord00007");
    });
});
