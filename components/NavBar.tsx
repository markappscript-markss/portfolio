"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const lenis = useLenis();
  const [hovered, setHovered] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState(false);

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
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 sm:px-10 py-6 bg-transparent pointer-events-none"
    >

      {/* NAV LINKS & THEME TOGGLE */}
      <div
        onMouseLeave={() => setHovered(null)}
        className="flex gap-2 text-sm text-neutral-900 dark:text-neutral-100 items-center pointer-events-auto bg-white/60 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm"
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
      </div>

    </motion.header>
  );
}