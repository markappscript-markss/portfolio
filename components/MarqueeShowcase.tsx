"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useAnimationFrame, motion, AnimatePresence, type Transition, type Variants } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/supabase";
import Magnetic from "./animations/Magnetic";

const CARD_WIDTH = 300;
const CARD_GAP = 16;
const SPEED = 0.55;

// High-end layout morph transition
const morphTransition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.9,
};

// Slower staggered text animations
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function MarqueeShowcase({ projects }: { projects: Project[] }) {
  const isPausedRef = useRef(false);
  const xRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<{ project: Project; id: string } | null>(null);

  const loopWidth = projects.length * (CARD_WIDTH + CARD_GAP);

  const pause = useCallback(() => { isPausedRef.current = true; }, []);
  const resume = useCallback(() => { if (!selectedProject) isPausedRef.current = false; }, [selectedProject]);

  // Strict Event-Level Scroll Lock
  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      const preventScroll = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.modal-scroll-area')) {
          e.preventDefault();
        }
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });

      pause();

      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      resume();
    }
  }, [selectedProject, pause, resume]);

  useAnimationFrame(() => {
    if (isPausedRef.current || !trackRef.current || loopWidth === 0) return;
    xRef.current -= SPEED;
    if (Math.abs(xRef.current) >= loopWidth) xRef.current = 0;
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  if (projects.length === 0) return null;

  const items = [...projects, ...projects];

  return (
    <>
      <section className="mb-16 relative z-10">
        <span className="inline-block text-xs font-medium tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-6">
          Featured work
        </span>

        <div
          className="overflow-hidden w-full py-6"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ gap: CARD_GAP, width: items.length * (CARD_WIDTH + CARD_GAP) }}
          >
            {items.map((project, i) => {
              const uniqueId = `${project.id}-${i}`; 
              
              return (
                <motion.div
                  key={uniqueId}
                  layoutId={`container-${uniqueId}`}
                  transition={morphTransition}
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 z-20"
                  style={{ width: CARD_WIDTH, height: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    layoutId={`media-${uniqueId}`} 
                    transition={morphTransition}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    {project.video_url ? (
                      <video src={project.video_url} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
                    ) : project.thumbnail_url ? (
                      <Image src={project.thumbnail_url} alt={project.title} fill className="object-cover" sizes={`${CARD_WIDTH}px`} />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                    )}
                  </motion.div>

                  <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-30">
                    <p className="text-sm font-medium text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                      {project.title}
                    </p>
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <Magnetic>
                        <button 
                          onClick={() => setSelectedProject({ project, id: uniqueId })}
                          className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded-full pointer-events-auto shadow-lg hover:bg-neutral-200 transition-colors"
                        >
                          More details
                        </button>
                      </Magnetic>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL PAGE MORPH & CINEMATIC FADE */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col md:flex-row">
            
            {/* 1. The Cinematic Backdrop - ADAPTIVE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-white dark:bg-neutral-950 pointer-events-auto"
            />

            {/* 2. The Morphed Layout */}
            <motion.div
              layoutId={`container-${selectedProject.id}`}
              transition={morphTransition}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row overflow-hidden pointer-events-none bg-transparent"
            >
              {/* LEFT SIDE: Text and Details */}
              <motion.div 
                className="modal-scroll-area flex-1 md:w-1/2 h-full flex flex-col p-8 md:p-16 lg:p-24 z-20 relative overflow-y-auto pointer-events-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                data-lenis-prevent
              >
                
                {/* Fixed Back Button - WITH MOBILE CLEARANCE & STACKING FIX */}
                <div className="sticky top-0 z-[999] pt-24 pb-6 md:pt-4 md:pb-8 -mx-8 px-8 md:mx-0 md:px-0 pointer-events-auto bg-gradient-to-b from-white via-white/90 to-transparent dark:from-neutral-950 dark:via-neutral-950/90 dark:to-transparent md:bg-none">
                  <style>{`
                    .uiverse-btn {
                      --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
                      --border-width: 0.125em;
                      --curve-size: 0.5em;
                      
                      /* Light Mode Defaults */
                      --bg: #ffffff;
                      --text-color: #171717;
                      
                      color: var(--text-color);
                      cursor: pointer;
                      position: relative;
                      isolation: isolate;
                      display: inline-grid;
                      place-content: center;
                      padding: 0.5em 1.5em;
                      font-size: 15px;
                      font-weight: 600;
                      border: 0;
                      text-transform: uppercase;
                      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
                      clip-path: polygon(
                        0% var(--curve-size),
                        var(--curve-size) 0,
                        100% 0,
                        100% calc(100% - var(--curve-size)),
                        calc(100% - var(--curve-size)) 100%,
                        0 100%
                      );
                      transition: color 250ms;
                    }

                    /* Dark Mode Overrides */
                    .dark .uiverse-btn {
                      --bg: #080312;
                      --text-color: #afffff;
                      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
                    }

                    .uiverse-btn::after,
                    .uiverse-btn::before {
                      content: "";
                      position: absolute;
                      inset: 0;
                    }

                    .uiverse-btn::before {
                      background: var(--border-color);
                      background-size: 300% 300%;
                      animation: move-bg7234 5s ease infinite;
                      z-index: -2;
                    }

                    @keyframes move-bg7234 {
                      0% { background-position: 31% 0%; }
                      50% { background-position: 70% 100%; }
                      100% { background-position: 31% 0%; }
                    }

                    .uiverse-btn::after {
                      background: var(--bg);
                      z-index: -1;
                      clip-path: polygon(
                        var(--border-width) calc(var(--curve-size) + var(--border-width) * 0.5),
                        calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
                        calc(100% - var(--border-width)) var(--border-width),
                        calc(100% - var(--border-width)) calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
                        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),
                        var(--border-width) calc(100% - var(--border-width))
                      );
                      transition: clip-path 500ms;
                    }

                    .uiverse-btn:where(:hover, :focus)::after {
                      clip-path: polygon(
                        calc(100% - var(--border-width)) calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
                        calc(100% - var(--border-width)) var(--border-width),
                        calc(100% - var(--border-width)) var(--border-width),
                        calc(100% - var(--border-width)) calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
                        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),
                        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width))
                      );
                      transition: 200ms;
                    }

                    .uiverse-btn:where(:hover, :focus) {
                      color: #fff;
                    }
                  `}</style>
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="uiverse-btn"
                  >
                    {"<< Back"}
                  </button>
                </div>

                {/* Staggered Text Animations */}
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="max-w-xl my-auto pb-12"
                >
                  <motion.h2 
                    variants={textReveal}
                    className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight uppercase transform tracking-tighter"
                  >
                    {selectedProject.project.title}
                  </motion.h2>
                  
                  <motion.p 
                    variants={textReveal}
                    className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 whitespace-pre-wrap"
                  >
                    {selectedProject.project.description || "A bespoke interactive experience."}
                  </motion.p>

                  {selectedProject.project.tech_stack && selectedProject.project.tech_stack.length > 0 && (
                    <motion.div variants={textReveal} className="mb-10">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.project.tech_stack.map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-neutral-100 border border-neutral-200 text-neutral-800 dark:bg-neutral-900 dark:border-neutral-800 dark:text-white rounded-full text-xs tracking-wider uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <motion.div variants={textReveal} className="flex gap-4">
                    {selectedProject.project.live_url && (
                      <a href={selectedProject.project.live_url} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-neutral-900 text-white dark:bg-white dark:text-black text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                        See Case ↗
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE: The Morphed Media */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center p-8 md:p-16 z-10 pointer-events-auto">
                {/* Purple subtle gradient adaptive opacity */}
                <div className="absolute inset-0 bg-gradient-to-l from-purple-900/10 dark:from-purple-900/20 to-transparent opacity-50 pointer-events-none" />
                
                <motion.div 
                  layoutId={`media-${selectedProject.id}`} 
                  transition={morphTransition}
                  className="relative w-full aspect-video md:aspect-[4/3] bg-neutral-100 dark:bg-black shadow-2xl overflow-hidden"
                >
                  {selectedProject.project.video_url ? (
                    <video src={selectedProject.project.video_url} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
                  ) : selectedProject.project.thumbnail_url ? (
                    <Image src={selectedProject.project.thumbnail_url} alt={selectedProject.project.title} fill className="object-cover" />
                  ) : null}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}