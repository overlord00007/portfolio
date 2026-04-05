import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// --- Skill arrays (resume-only, icons confirmed in public/skills/) ---

export const LANGUAGES = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 65,
    height: 65,
  },
] as const;

export const FRAMEWORKS = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    image: "pytorch.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-Learn",
    image: "sklearn.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NumPy",
    image: "numpy.svg",
    width: 80,
    height: 80,
  },
] as const;

export const DATABASES = [
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Qdrant",
    image: "qdrant.png",
    width: 70,
    height: 70,
  },
] as const;

export const TOOLS = [
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 70,
    height: 70,
  },
] as const;

// --- Socials ---

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/overlord00007",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/yuvraj-singh-00aa47282/",
  },
] as const;

// --- Projects ---

export const PROJECTS = [
  {
    title: "Saaransh",
    subtitle: "AI E-Consultation Platform · SIH 2025",
    description:
      "Full-stack AI public consultation platform with section-wise policy feedback analysis and Hinglish language support, built for the Ministry of Corporate Affairs.",
    bullets: [
      "Reduced <strong class='text-white'>manual policy analysis time by 80%</strong> via real-time sentiment analytics dashboard",
      "Engineered <strong class='text-white'>custom ensemble classifier</strong> (XLM-RoBERTa + RoBERTa + DistilBERT) achieving <strong class='text-white'>72% accuracy</strong>, surpassing baselines by 7%",
      "Integrated <strong class='text-white'>BART-based hierarchical summarization</strong> — processes 100+ comments in under 5 seconds",
      "Advanced NLP pipelines for automated Hinglish translation and security validation",
    ],
    metrics: [
      { value: "80%", label: "Analysis Time Saved" },
      { value: "72%", label: "Classifier Accuracy" },
      { value: "↑7%", label: "Over Baseline" },
      { value: "<5s", label: "100+ Comments" },
    ],
    image: "/projects/project-1.png",
    link: "https://github.com/overlord00007/project",
    tech: ["React", "Express.js", "PostgreSQL", "FastAPI", "HuggingFace", "XLM-RoBERTa", "BART"],
  },
  {
    title: "Scrubbie",
    subtitle: "Multiplayer Drawing Game · Live on Render",
    description:
      "Real-time multiplayer drawing and guessing game deployed on Render, supporting 100+ concurrent users with sub-100ms canvas synchronization — inspired by skribbl.io.",
    bullets: [
      "Built <strong class='text-white'>real-time multiplayer</strong> game engine on Render supporting <strong class='text-white'>100+ concurrent users</strong>",
      "Implemented <strong class='text-white'>event-driven WebSocket architecture</strong> via Socket.IO — sub-100ms canvas sync and instant chat delivery",
      "Turn-based mechanics and peer voting drove a <strong class='text-white'>60% increase in user engagement</strong>",
      "Applied <strong class='text-white'>OOD principles</strong> to manage complex game states, lobby systems, and user sessions",
    ],
    metrics: [
      { value: "100+", label: "Concurrent Users" },
      { value: "<100ms", label: "Canvas Sync" },
      { value: "60%", label: "↑ Engagement" },
    ],
    image: "/projects/project-2.png",
    link: "https://github.com/overlord00007/scrubbie",
    demoLink: "https://scrubbie.onrender.com/",
    tech: ["React", "Node.js", "Socket.IO", "WebSocket", "Express.js"],
  },
] as const;

// --- Footer ---

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/overlord00007",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/yuvraj-singh-00aa47282/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "yuvraj021120@gmail.com",
        icon: null,
        link: "mailto:yuvraj021120@gmail.com",
      },
    ],
  },
] as const;

// --- Nav links ---

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Experience",
    link: "#experience",
  },
] as const;

// --- Misc links ---

export const LINKS = {
  sourceCode: "https://github.com/overlord00007",
};
