"use client";

import { motion } from "framer-motion";
import { useIntro } from "./IntroContext";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.75,
  className = "",
}: TextRevealProps) {
  const { introComplete } = useIntro();

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={introComplete ? { y: "0%" } : { y: "110%" }}
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}