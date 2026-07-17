"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "./IntroContext";

export default function PageIntro() {
  const [show, setShow] = useState(false);
  const { setIntroComplete } = useIntro();

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen");
    if (seen) {
      // Already seen — mark intro as complete immediately
      setIntroComplete(true);
      return;
    }

    setShow(true);
    sessionStorage.setItem("intro_seen", "true");

    const dismiss = () => setShow(false);

    const timer = setTimeout(() => {
      window.addEventListener("wheel", dismiss, { once: true });
      window.addEventListener("touchstart", dismiss, { once: true });
    }, 800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => setIntroComplete(true)}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #fde68a 0%, #f9a8d4 40%, #a78bfa 100%)",
          }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Wit line */}
          <motion.p
            className="text-sm font-medium tracking-widest uppercase text-neutral-700 mb-4 select-none"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            not another portfolio...
          </motion.p>

          {/* Big name */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 select-none"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              markappscript
              <span className="text-purple-600">.dev</span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}