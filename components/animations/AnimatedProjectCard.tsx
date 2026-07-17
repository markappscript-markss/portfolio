"use client";

import { motion } from "framer-motion";
import { useIntro } from "./IntroContext";

interface AnimatedProjectCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export default function AnimatedProjectCard({
  children,
  index,
  className = "",
}: AnimatedProjectCardProps) {
  const { introComplete } = useIntro();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {children}
    </motion.div>
  );
}