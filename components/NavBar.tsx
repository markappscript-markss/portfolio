"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const lenis = useLenis();
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { 
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 p-6 sm:p-10 flex justify-end items-center z-50 pointer-events-none">
      <div 
        onMouseLeave={() => setHovered(null)}
        className="flex gap-2 text-sm text-neutral-900 dark:text-neutral-100 items-center pointer-events-auto bg-white/50 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800"
      >
        {NAV_LINKS.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={(e) => handleScroll(e, link.href)} 
            onMouseEnter={() => setHovered(link.name)}
            className="relative px-4 py-2"
          >
            {hovered === link.name && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 font-medium">{link.name}</span>
          </a>
        ))}
        
        <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700 mx-2"></div>
        <div className="px-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}