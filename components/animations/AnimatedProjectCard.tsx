"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();

  const startOffset = 60 + index * 20;
  const y = useTransform(scrollY, [0, 700], [startOffset, 0]);

  return (
  
    <motion.div style={{ y }}>
      
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 30 }}
        whileInView={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
