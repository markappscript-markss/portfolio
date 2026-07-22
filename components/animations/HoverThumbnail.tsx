"use client";

import { motion } from "framer-motion";

interface HoverThumbnailProps {
  children: React.ReactNode;
  className?: string;   
}

export default function HoverThumbnail({
  children,
  className = "",
}: HoverThumbnailProps) {
  return (
    
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full"
        whileHover={{
          scale: 1.05,
          filter: "brightness(1.08)",
        }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.46, 0.45, 0.94], 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
