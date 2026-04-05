/**
 * Property 3: ProjectCard renders Live Demo button iff demoLink provided
 * Tag: Feature: portfolio-resume-update, Property 3: ProjectCard renders Live Demo button iff demoLink provided
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import { ProjectCard } from "@/components/sub/project-card";

// Mock next/image to avoid Next.js image optimization in tests
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img {...props} />;
    },
}));

// Mock next/link to render a plain anchor
jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ href, children, ...rest }: { href: string; children: React.ReactNode;[key: string]: unknown }) => (
        <a href={href} {...rest}>{children}</a>
    ),
}));

describe("Property 3: ProjectCard renders Live Demo button iff demoLink provided", () => {
    it("renders Live Demo link when demoLink is a non-empty string", () => {
        fc.assert(
            fc.property(
                fc.webUrl(),
                (demoLink) => {
                    const { unmount } = render(
                        <ProjectCard
                            src="/projects/project-1.png"
                            title="Test Project"
                            description="A test description"
                            link="https://github.com/test/repo"
                            demoLink={demoLink}
                        />
                    );
                    const demoAnchor = screen.queryByText(/Live Demo/i);
                    const result = demoAnchor !== null && demoAnchor.closest("a")?.getAttribute("href") === demoLink;
                    unmount();
                    return result;
                }
            ),
            { numRuns: 50 }
        );
    });

    it("does NOT render Live Demo link when demoLink is undefined", () => {
        render(
            <ProjectCard
                src="/projects/project-1.png"
                title="Test Project"
                description="A test description"
                link="https://github.com/test/repo"
            />
        );
        expect(screen.queryByText(/Live Demo/i)).toBeNull();
    });
});
