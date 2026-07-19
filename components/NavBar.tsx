"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Added for modal slide logic

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", onScroll);
    onScroll(); 
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Listen for the custom events broadcasted by the Project Modal
  useEffect(() => {
    const handleHide = () => setIsHidden(true);
    const handleShow = () => setIsHidden(false);

    window.addEventListener("hide-navbar", handleHide);
    window.addEventListener("show-navbar", handleShow);

    return () => {
      window.removeEventListener("hide-navbar", handleHide);
      window.removeEventListener("show-navbar", handleShow);
    };
  }, []);

  const handleScrollAction = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { 
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      // 1. z-40 ensures this background stays UNDER the z-50 PageIntro logo.
      // 2. p-6 sm:p-10 is locked in place so the menu never shifts.
      className={`fixed top-0 right-0 left-0 pt-6 sm:pt-10 px-6 sm:px-10 pb-6 sm:pb-4 flex justify-end items-center z-40 transition-all duration-[300ms] ease-in-out ${
        isScrolled 
          ? "opacity-100 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 pointer-events-auto" 
          : "opacity-0 bg-transparent pointer-events-none"
      }`}
    >
      <div 
        onMouseLeave={() => setHovered(null)}
        className="flex gap-2 text-sm text-neutral-900 dark:text-neutral-100 items-center pointer-events-auto bg-white/50 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm"
      >
        {NAV_LINKS.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={(e) => handleScrollAction(e, link.href)} 
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
    </motion.nav>
  );
}