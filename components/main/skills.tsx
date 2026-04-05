import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { LANGUAGES, FRAMEWORKS, DATABASES, TOOLS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      {/* Neon green animated background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,197,94,0.13) 0%, rgba(16,185,129,0.06) 40%, transparent 70%)",
            animation: "neonPulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(74,222,128,0.08) 0%, transparent 60%)",
            animation: "neonPulse 6s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 30% at 80% 20%, rgba(16,185,129,0.07) 0%, transparent 60%)",
            animation: "neonPulse 5s ease-in-out infinite 1s",
          }}
        />
      </div>

      <SkillText />

      {/* Languages */}
      <p className="text-white text-sm font-semibold uppercase tracking-widest text-green-400 mt-6 mb-2 relative z-10">
        Languages
      </p>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center relative z-10">
        {LANGUAGES.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      {/* Text-only language badges for C++ and SQL (no icon available) */}
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center mt-2 relative z-10">
        {["C++", "SQL"].map((lang) => (
          <span
            key={lang}
            className="px-4 py-1.5 bg-green-900/30 border border-green-500/50 rounded-full text-green-300 text-sm font-mono font-semibold tracking-wide"
            style={{ boxShadow: "0 0 8px rgba(74,222,128,0.2)" }}
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Frameworks & Libraries */}
      <p className="text-white text-sm font-semibold uppercase tracking-widest text-green-400 mt-6 mb-2 relative z-10">
        Frameworks &amp; Libraries
      </p>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center relative z-10">
        {FRAMEWORKS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Databases */}
      <p className="text-white text-sm font-semibold uppercase tracking-widest text-green-400 mt-6 mb-2 relative z-10">
        Databases
      </p>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center relative z-10">
        {DATABASES.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Tools & Platforms */}
      <p className="text-white text-sm font-semibold uppercase tracking-widest text-green-400 mt-6 mb-2 relative z-10">
        Tools &amp; Platforms
      </p>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center relative z-10">
        {TOOLS.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      {/* Text-only tool badges for items without icons */}
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center mt-2 relative z-10">
        {["VS Code", "Postman", "RESTful APIs", "CI/CD"].map((tool) => (
          <span
            key={tool}
            className="px-4 py-1.5 bg-green-900/30 border border-green-500/50 rounded-full text-green-300 text-sm font-mono font-semibold tracking-wide"
            style={{ boxShadow: "0 0 8px rgba(74,222,128,0.2)" }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Coursework */}
      <p className="text-white text-sm font-semibold uppercase tracking-widest text-green-400 mt-6 mb-2 relative z-10">
        Coursework
      </p>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center relative z-10">
        {["DSA", "OOP", "OS", "RDBMS", "Statistics", "Web Tech", "CN"].map((course) => (
          <span
            key={course}
            className="px-4 py-1.5 bg-emerald-900/20 border border-emerald-600/40 rounded-full text-emerald-300 text-sm font-mono tracking-wide"
            style={{ boxShadow: "0 0 6px rgba(52,211,153,0.15)" }}
          >
            {course}
          </span>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
