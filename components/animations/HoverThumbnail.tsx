"use client";

import { motion } from "framer-motion";

// Wraps a project thumbnail image with a subtle scale + brightness hover.
// The overflow-hidden on the outer div keeps the scaled image clipped cleanly.
//
// Usage:
//   <HoverThumbnail>
//     <Image src={project.thumbnail} alt={project.title} fill ... />
//   </HoverThumbnail>

interface HoverThumbnailProps {
  children: React.ReactNode;
  className?: string;   // applied to the outer clip container
}

export default function HoverThumbnail({
  children,
  className = "",
}: HoverThumbnailProps) {
  return (
    // Outer div clips the scaled image so it doesn't bleed outside the card
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full"
        whileHover={{
          scale: 1.05,
          filter: "brightness(1.08)",
        }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.46, 0.45, 0.94],  // easeOutQuart — snappy hover feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}