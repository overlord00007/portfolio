type TimelineEntry = {
  role: string;
  company: string;
  period: string;
  tag: string;
  bullets: string[];
};

type CertEntry = { name: string; issuer: string; date: string; icon: string };
type LeadershipEntry = {
  role: string;
  org: string;
  period: string;
  description: string;
};
type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  percent?: string;
};

const WORK: TimelineEntry[] = [
  {
    role: "Step Forward Program Participant",
    company: "McKinsey & Company",
    period: "Apr 2025 – Jun 2025",
    tag: "Top 2% Selectee",
    bullets: [
      "Selected among <strong class='text-green-300'>top 2% applicants</strong> for a leadership and problem-solving program focused on analytical and collaborative skill development.",
      "Drove a <strong class='text-green-300'>30% improvement in solution efficiency</strong> through structured problem-solving while strengthening cross-team communication and leadership capabilities.",
    ],
  },
  {
    role: "AI Intern",
    company: "Edunet Foundation",
    period: "May 2025 – Jun 2025",
    tag: "Microsoft Azure · ML",
    bullets: [
      "Gained practical exposure to ML and cloud-AI workflows, including supervised/unsupervised learning, image classification, and deployment using <strong class='text-green-300'>Microsoft Azure</strong> services.",
      "Ensured software reliability by implementing unit tests for ML inference pipelines and optimizing cloud-AI workflows for Azure deployment.",
    ],
  },
];

const CERTS: CertEntry[] = [
  { name: "DSA Using JAVA", issuer: "Infosys", date: "Mar 2026", icon: "🎓" },
  { name: "Oracle Analytics Cloud 2025 Professional", issuer: "Oracle", date: "Oct 2025", icon: "☁️" },
];

const LEADERSHIP: LeadershipEntry[] = [
  {
    role: "Editorial Head",
    org: "GeeksForGeeks (GFG) Club · RGIPT",
    period: "Oct 2023 – Nov 2025",
    description:
      "Led editorial operations, overseeing content planning, technical article reviews, and quality assurance while mentoring contributors and coordinating with the core team — increasing content output and community engagement.",
  },
];

const EDUCATION: EducationEntry[] = [
  {
    degree: "B.Tech in Mathematics and Computing",
    institution: "Rajiv Gandhi Institute of Petroleum Technology (INI), Jais",
    period: "Aug 2023 – May 2027",
    gpa: "CPI: 8.36",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Board of Secondary Education",
    period: "Mar 2020 – Apr 2022",
    percent: "88.4%",
    gpa: "",
  },
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">{label}</span>
      <h3 className="text-2xl font-bold text-white mt-1 pb-3 border-b border-green-500/20">{title}</h3>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Experience &amp; Background
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-base">
            Professional experience, certifications, leadership, and academic background — everything that shapes my engineering mindset.
          </p>
        </div>

        {/* Work Experience */}
        <SectionHeading label="Work Experience" title="Professional Roles" />
        <div className="relative pl-8 border-l-2 border-green-500/40 mb-16">
          {WORK.map((entry) => (
            <div key={entry.role} className="relative mb-8">
              {/* Timeline dot */}
              <span className="absolute -left-[1.35rem] top-6 w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />

              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_16px_rgba(34,197,94,0.08)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{entry.role}</h3>
                      <span className="px-2.5 py-0.5 bg-green-900/40 border border-green-700/50 rounded-full text-green-300 text-xs font-medium">
                        {entry.tag}
                      </span>
                    </div>
                    <p className="text-green-400 font-medium text-sm">{entry.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm font-mono whitespace-nowrap shrink-0">{entry.period}</span>
                </div>
                <ul className="space-y-2">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-500 mt-0.5 shrink-0">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <SectionHeading label="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {CERTS.map((cert) => (
            <div
              key={cert.name}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-green-500/50 transition-all duration-300 flex items-start gap-4"
            >
              <span className="text-2xl mt-0.5">{cert.icon}</span>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm leading-tight">{cert.name}</p>
                <p className="text-green-400 text-xs mt-1">{cert.issuer}</p>
              </div>
              <span className="text-gray-500 text-xs font-mono whitespace-nowrap shrink-0">{cert.date}</span>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <SectionHeading label="Community" title="Leadership" />
        <div className="space-y-4 mb-16">
          {LEADERSHIP.map((item) => (
            <div
              key={item.role}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <p className="text-lg font-bold text-white">{item.role}</p>
                  <p className="text-green-400 text-sm font-medium">{item.org}</p>
                </div>
                <span className="text-gray-500 text-sm font-mono whitespace-nowrap">{item.period}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <SectionHeading label="Academic" title="Education" />
        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="text-lg font-bold text-white">{edu.degree}</p>
                  <p className="text-green-400 text-sm font-medium">{edu.institution}</p>
                </div>
                <span className="text-gray-500 text-sm font-mono whitespace-nowrap">{edu.period}</span>
              </div>
              {edu.gpa && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <span className="text-green-300 text-xs font-semibold">{edu.gpa}</span>
                </div>
              )}
              {edu.percent && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <span className="text-green-300 text-xs font-semibold">Percentage: {edu.percent}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
