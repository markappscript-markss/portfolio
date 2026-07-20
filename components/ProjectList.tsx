"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import type { Project } from "@/lib/supabase";

import { StaggerContainer, StaggerItem } from "./animations/StaggerReveal";

const BACKGROUND_WALL_URL =
  "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/backgrounds/wall.jpg";

const morphTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 1,
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<{ project: Project; id: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Safely check if we are on the client so createPortal doesn't throw hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      // EVENT: Tell NavBar to hide
      window.dispatchEvent(new Event("hide-navbar"));

      const preventScroll = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.modal-scroll-area')) {
          e.preventDefault();
        }
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      // EVENT: Tell NavBar to show
      window.dispatchEvent(new Event("show-navbar"));
    }
  }, [selectedProject]);

  if (projects.length === 0) return null;

  return (
    <div className="w-full relative z-10 flex flex-col gap-8 md:gap-12">
      {/* 1. INDEPENDENT SECTION TITLE STAGGER */}
      <StaggerContainer className="w-full">
        <StaggerItem className="w-full mb-2 md:mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
            My Work
          </h2>
        </StaggerItem>
      </StaggerContainer>

      {/* 2. INDIVIDUAL PROJECT STAGGER ON SCROLL */}
      {projects.map((project, index) => {
        const uniqueId = `${project.id}-${index}`;
        const isEven = index % 2 === 0;

        return (
          <StaggerContainer key={uniqueId} className="w-full">
            <StaggerItem className="w-full">
              <div
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 pb-6 border-b border-neutral-200 dark:border-neutral-900/50 last:border-0 w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className={`w-full md:w-[58%] flex flex-col justify-center select-none ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
                  }`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight uppercase text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mt-3">
                    {project.tech_stack?.slice(0, 3).join("  /  ") || "Design  /  Development"}
                  </span>
                </div>

                <div
                  className="w-full md:w-[42%] aspect-[16/8] relative cursor-pointer"
                  onClick={() => setSelectedProject({ project, id: uniqueId })}
                >
                  <motion.div
                    layoutId={`media-${uniqueId}`}
                    transition={morphTransition}
                    whileHover={{ scale: 0.96 }}
                    className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 z-10 group"
                  >
                    {project.thumbnail_url ? (
                      <img
                        src={project.thumbnail_url}
                        alt={project.title}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800" />
                    )}
                  </motion.div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        );
      })}

      {/* DETACHED CINEMATIC THEATER STACK — Portaled to the document root */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* BACKDROP WITH WALL IMAGE & DARK OVERLAY */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[999990] bg-neutral-950 pointer-events-auto overflow-hidden"
                data-lenis-prevent
              >
                {/* Wall Background Image */}
                <img
                  src={BACKGROUND_WALL_URL}
                  alt="Modal Wall Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark Overlay Fade */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
              </motion.div>

              {/* MODAL CONTENT */}
              <div className="fixed inset-0 z-[999999] flex flex-col lg:flex-row overflow-hidden pointer-events-none" data-lenis-prevent>

                {/* LEFT VIEWPORT PANEL (Text Area) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="order-2 lg:order-1 modal-scroll-area w-full lg:w-[45%] h-full flex flex-col p-6 pt-10 sm:p-8 sm:pt-12 md:p-12 lg:pl-16 lg:pr-8 overflow-y-auto pointer-events-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  data-lenis-prevent
                >
                  {/* Back Button Container */}
                  <div className="sticky top-0 z-[999] pb-8 -mx-6 px-6 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 shrink-0 h-16 block">
                    <style>{`
                      .brutalist-tech-btn {
                        --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
                        --bg: #080312;
                        color: #afffff;
                        cursor: pointer;
                        position: relative;
                        isolation: isolate;
                        display: inline-grid;
                        place-content: center;
                        width: 132px;
                        height: 44px;
                        font-size: 13px;
                        font-weight: 900;
                        border: 0;
                        text-transform: uppercase;
                        letter-spacing: 0.18em;
                        clip-path: polygon(0% 10px, 10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%);
                      }
                      .brutalist-tech-btn::after, .brutalist-tech-btn::before { content: ""; position: absolute; inset: 0; }
                      .brutalist-tech-btn::before { background: var(--border-color); background-size: 300% 300%; animation: button-track-sweep 4s ease infinite; z-index: -2; }
                      .brutalist-tech-btn::after {
                        background: var(--bg); z-index: -1;
                        clip-path: polygon(2px 8px, 8px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 8px), calc(100% - 8px) calc(100% - 2px), 2px calc(100% - 2px));
                        transition: clip-path 250ms cubic-bezier(0.16, 1, 0.3, 1);
                      }
                      .brutalist-tech-btn:where(:hover, :focus)::after {
                        clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
                      }
                      .brutalist-tech-btn:where(:hover, :focus) { color: #ffffff; }
                      @keyframes button-track-sweep {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                      }
                    `}</style>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="brutalist-tech-btn"
                    >
                      &lt;&lt; Back
                    </button>
                  </div>

                  <div className="w-full my-auto pb-6 md:pb-12 flex flex-col">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight uppercase transform tracking-tighter mt-4 md:mt-0">
                      {selectedProject.project.title}
                    </h2>

                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 whitespace-pre-wrap">
                      {selectedProject.project.description || "A bespoke interactive experience engineered to performance limits."}
                    </p>

                    {selectedProject.project.tech_stack && selectedProject.project.tech_stack.length > 0 && (
                      <div className="mb-10">
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.project.tech_stack.map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-neutral-900/80 text-neutral-200 border border-neutral-800 rounded-full text-xs font-bold tracking-wider uppercase">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      {selectedProject.project.live_url && (
                        <a href={selectedProject.project.live_url} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                          See Case ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT VIEWPORT PANEL (Media) */}
                <div className="order-1 lg:order-2 w-full lg:w-[55%] h-[40vh] md:h-[50vh] lg:h-full relative flex items-center justify-center p-4 pt-12 md:p-8 lg:p-16 lg:pl-0 pointer-events-auto">
                  <div className="w-full aspect-[16/8] relative rounded-xl">
                    <motion.div
                      layoutId={`media-${selectedProject.id}`}
                      transition={morphTransition}
                      className="absolute inset-0 w-full h-full bg-neutral-900 rounded-xl overflow-hidden z-10"
                    >
                      {selectedProject.project.thumbnail_url ? (
                        <img
                          src={selectedProject.project.thumbnail_url}
                          alt={selectedProject.project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-800" />
                      )}
                    </motion.div>
                  </div>
                </div>

              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}