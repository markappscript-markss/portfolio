"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keeps the loading screen alive for exactly 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          // Custom zoom out, fade, and camera blur transition
          exit={{ 
            opacity: 0, 
            scale: 1.08, 
            filter: "blur(8px)" 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 28 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950 select-none pointer-events-auto"
        >
          <div className="loader">
            <div data-glitch="Loading..." className="glitch">
              Loading...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
