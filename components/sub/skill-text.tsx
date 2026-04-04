"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          AI/ML & Full Stack Development
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Building innovative solutions with cutting-edge technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-4 mt-[10px] text-center"
      >
        From AI-powered platforms to full-stack applications.
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-[13px] text-gray-400 mb-10 text-center max-w-2xl px-4"
      >
        Core strengths: NLP & Deep Learning (BERT, BioMistral, QLoRA), FastAPI at scale, FAISS-based retrieval, OCR pipelines, and cloud-ready ML systems.
      </motion.div>
    </div>
  );
};
