import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/TishyaJ",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/tishya-j/",
  },
  {
    name: "Portfolio",
    icon: RxTwitterLogo,
    link: "https://tishyaj.github.io/PORTFOLIO/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
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
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Intelligent RevOps | Agentic AI",
    description:
      "⚡ Deterministic CrewAI Flows multi-agent pipeline with mandatory Human-in-the-Loop gate — zero unsanctioned email dispatch enforced at framework level. ET AI Hackathon Semi-Finalist.\n\n• Random Forest churn scorer on 2,000-record synthetic CRM with SHAP explanations + local spaCy NER PII stripping + HuggingFace zero-shot NLI for competitor-intent detection\n• Chris Voss negotiation frameworks (Empathy Labeling, Tactical Mirroring) mapped to ML output; projected 15pp recovery lift (30% → 45%), $75K MRR/month incremental gain, 266% ROI\n\nTech: Python, CrewAI Flows, FastAPI, React, scikit-learn, spaCy",
    image: "/projects/project-5.png",
    link: "https://github.com/TishyaJ/Intelligent-Rev_Ops",
  },
  {
    title: "Medicova AI | Pharmacovigilance Platform",
    description:
      "🧠 AI-driven pharmacovigilance platform for real-time adverse drug reaction detection and classification.\n\n• Engineered an automated NLP pipeline using a BioMistral ensemble with QLoRA fine-tuning, achieving Macro F1-Score of 0.94\n• Built multimodal evidence collection with AI-powered risk stratification and stakeholder-specific analytics dashboards\n• WhatsApp-first data capture using Twilio + ngrok synced with dashboard database; real-time adverse event monitoring\n\nTech: Python, BioMistral Ensemble, NLP, QLoRA, FastAPI, Twilio",
    image: "/projects/project-4.png",
    link: "https://github.com/TishyaJ/Medicova_AI_Pharmacovigilance_Platform",
  },
  {
    title: "Saaransh MCA E-Consultation Platform",
    description:
      "🚀 AI-powered e-consultation platform for MCA bill analysis using an advanced custom NLP ensemble.\n\n• Custom ensemble of fine-tuned transformers (XLM-RoBERTa, RoBERTa, DistilBERT) with trend-weighted data augmentation\n• FAISS + SBERT global deduplication achieving 72% sentiment accuracy (↑7% over baseline); OCR-based ingestion cut latency by 40%\n• Production-grade FastAPI backend with 44 API endpoints, 95%+ test coverage, and stakeholder-specific analytics dashboards\n\nTech: FastAPI, PostgreSQL, BERT, FAISS, Docker, OCR",
    image: "/projects/project-1.png",
    link: "https://github.com/TishyaJ/SAARANSH_MCA_ECONSULTATION_MODULE",
    demoLink: "https://saaransh-mca-e-consutation.vercel.app/",
  },
  {
    title: "RentalPro",
    description:
      "🏗️ Scalable full-stack rental platform with secure authentication and dynamic pricing — Finalist at Odoo Hackathon 2025.\n\n• End-to-end booking workflows with role-based access control and multi-factor authentication\n• Flexible pricing models, dynamic product listings, and production-ready API + database schemas\n\nTech: React, TypeScript, Express.js, PostgreSQL",
    image: "/projects/project-2.png",
    link: "https://github.com/TishyaJ/Odoo_Hackathon_Round2",
  },
  {
    title: "SkillSwap Hub",
    description:
      "🔄 Community-driven platform for seamless and secure peer-to-peer skill swapping — Selected for Finals at Odoo Hackathon 2025.\n\n• Minimalist, elegant interface for skill discovery and exchange between users\n• Secure authentication, peer matching, and real-time session management\n\nTech: React, TypeScript, Express.js, PostgreSQL",
    image: "/projects/project-3.jpeg",
    link: "https://github.com/TishyaJ/SkillSwap-Hub",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/TishyaJ",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/tishya-j/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "tishyajha04@gmail.com",
        icon: null,
        link: "mailto:tishyajha04@gmail.com",
      },
      {
        name: "23CD3049@rgipt.ac.in",
        icon: null,
        link: "mailto:23CD3049@rgipt.ac.in",
      },
    ],
  },
] as const;

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
    title: "Experience & Certs",
    link: "#special-links",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/TishyaJ/PORTFOLIO",
};
