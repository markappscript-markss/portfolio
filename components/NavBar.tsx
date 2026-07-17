"use client";

import { useLenis } from "lenis/react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    
    // Tell Lenis to scroll to the target ID with a smooth duration
    if (lenis) {
      lenis.scrollTo(target, { 
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // A nice, premium easing curve
      });
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 p-6 sm:p-10 flex justify-end items-center z-50 pointer-events-none">
      <div className="flex gap-6 text-sm text-neutral-900 dark:text-neutral-100 items-center pointer-events-auto bg-white/50 dark:bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800">
        <a 
          href="#work" 
          onClick={(e) => handleScroll(e, '#work')} 
          className="hover:opacity-60 transition-opacity"
        >
          Work
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleScroll(e, '#about')} 
          className="hover:opacity-60 transition-opacity"
        >
          About
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, '#contact')} 
          className="hover:opacity-60 transition-opacity"
        >
          Contact
        </a>
        <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}