"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// Swap out React.AnchorHTMLAttributes for HTMLMotionProps<"a">
interface Props extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
}

export default function SpringButton({ children, className, ...props }: Props) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`block ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}