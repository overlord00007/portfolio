import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <div className="text-center mb-4">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 py-4">
          Featured Projects
        </h1>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Selected work from my portfolio — built with measurable impact, production-grade architecture, and modern AI/full-stack technologies.
        </p>
      </div>

      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mt-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            bullets={[...(project.bullets as readonly string[])]}
            metrics={[...(project.metrics as readonly { value: string; label: string }[])]}
            tech={[...(project.tech as readonly string[])]}
            link={project.link}
            demoLink={"demoLink" in project ? (project as { demoLink: string }).demoLink : undefined}
          />
        ))}
      </div>
    </section>
  );
};
