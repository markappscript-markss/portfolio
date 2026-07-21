"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useIntro } from "./IntroContext";

export default function PageIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { introComplete, setIntroComplete } = useIntro();
  const [animate, setAnimate] = useState(false);

  const { scrollY } = useScroll();

  // Logo Transformations
  const nameScale = useTransform(scrollY, [0, 500], [1, 0.25]);
  const nameY = useTransform(scrollY, [0, 500], ["0vh", "-42vh"]);
  const nameX = useTransform(scrollY, [0, 500], ["0vw", "-35vw"]);

  // Crossfade Opacities for the Text Color Fix
  const centerTextOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const navTextOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  // General element fades
  const witOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scrollNudgeOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !introComplete) {
      setIntroComplete(true);
    }
  });

  useEffect(() => {
    const startIntroAnimation = () => {
      // Small 200ms window delay so the text reveals right as the zoom-in crossfade peaks
      setTimeout(() => {
        setAnimate(true);
        setTimeout(() => setIntroComplete(true), 2000);
      }, 200);
    };

    // If the loading screen finished before this listener registered, run immediately
    if ((window as any).__loadingComplete) {
      startIntroAnimation();
    } else {
      window.addEventListener("loading-complete", startIntroAnimation);
    }

    return () => {
      window.removeEventListener("loading-complete", startIntroAnimation);
    };
  }, [setIntroComplete]);

  return (
    <>
      {/* LAYER 1: The Structure & Background (z-0) */}
      <div ref={ref} className="relative h-[calc(100vh+10rem)] sticky top-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #fde68a 0%, #f9a8d4 40%, #a78bfa 100%)",
            opacity: bgOpacity
          }}
        />
      </div>

      {/* LAYER 2: The Foreground Text (z-50) */}
      <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center">
        <motion.p
          className="text-sm font-medium tracking-widest uppercase text-neutral-700 mb-4 select-none"
          style={{ opacity: witOpacity }}
          initial={{ opacity: 0, filter: "blur(16px)", scale: 1.05 }}
          animate={
            animate
              ? { filter: "blur(0px)", scale: 1 }
              : { filter: "blur(16px)", scale: 1.05 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          not another portfolio...
        </motion.p>

        <motion.div 
          className="grid overflow-visible origin-center pointer-events-auto dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          style={{ scale: nameScale, y: nameY, x: nameX }}
        >
          {/* VERSION 1: Always Dark (For the center gradient) */}
          <motion.div 
            className="flex items-baseline gap-1 sm:gap-3 col-start-1 row-start-1"
            style={{ opacity: centerTextOpacity }}
          >
            <motion.span
              className="text-[7.5vw] sm:text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 select-none"
              initial={{ opacity: 0, filter: "blur(40px)" }}
              animate={animate ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(40px)" }}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
            >
              markappscript
            </motion.span>
            <motion.span
              className="text-[7.5vw] sm:text-5xl md:text-7xl font-bold tracking-tight text-purple-700 select-none"
              initial={{ opacity: 0, filter: "blur(40px)" }}
              animate={animate ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(40px)" }}
              transition={{ duration: 1.0, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              .dev
            </motion.span>
          </motion.div>

          {/* VERSION 2: Theme Aware (For the scrolled top-left corner) */}
          <motion.div 
            className="flex items-baseline gap-1 sm:gap-3 col-start-1 row-start-1"
            style={{ opacity: navTextOpacity }}
          >
            <span className="text-[7.5vw] sm:text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 select-none">
              markappscript
            </span>
            <span className="text-[7.5vw] sm:text-5xl md:text-7xl font-bold tracking-tight text-purple-600 dark:text-purple-400 select-none">
              .dev
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          className="absolute bottom-10 text-xs tracking-widest uppercase text-neutral-600 select-none"
          style={{ opacity: scrollNudgeOpacity }}
          initial={{ opacity: 0 }}
          animate={animate ? {} : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          scroll
        </motion.p>
      </div>
    </>
  );
}