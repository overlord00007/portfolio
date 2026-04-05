"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-green-400 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Software Engineer · SIH 2025 Finalist · B.Tech Mathematics &amp; Computing @ RGIPT
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Yuvraj Singh
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Analytical Software Engineer and SIH 2025 Finalist with a strong foundation in Data Structures, Algorithms, and Object-Oriented Design. Experienced in building scalable distributed systems (Scrubbie) and AI-integrated platforms (Saaransh) using C++, Python, and Full-Stack technologies. Keenly interested in contributing to innovative research and organizational growth through technical excellence and a results-driven mindset.
        </motion.p>
      </div>
    </motion.div>
  );
};
