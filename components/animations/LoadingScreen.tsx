"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      

      window.dispatchEvent(new Event("loading-complete"));
      
    
      (window as any).__loadingComplete = true;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
     
          exit={{ 
            opacity: 0, 
            scale: 1.4, 
            filter: "blur(16px)" 
          }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
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
