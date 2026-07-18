"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useAnimationFrame, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/supabase";
import Magnetic from "./animations/Magnetic";

const CARD_WIDTH = 300;
const CARD_GAP = 16;
const SPEED = 0.55;

export default function MarqueeShowcase({ projects }: { projects: Project[] }) {
  const isPausedRef = useRef(false);
  const xRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<{ project: Project; id: string } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const loopWidth = projects.length * (CARD_WIDTH + CARD_GAP);

  const pause = useCallback(() => { isPausedRef.current = true; }, []);
  const resume = useCallback(() => { if (!selectedProject) isPausedRef.current = false; }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      pause();
    } else {
      document.body.style.overflow = "auto";
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
      <section className="mb-16 relative">
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
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900"
                  style={{ width: CARD_WIDTH, height: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div layoutId={`media-${uniqueId}`} className="absolute inset-0 w-full h-full pointer-events-none">
                    {project.video_url ? (
                      <video src={project.video_url} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
                    ) : project.thumbnail_url ? (
                      <Image src={project.thumbnail_url} alt={project.title} fill className="object-cover" sizes={`${CARD_WIDTH}px`} />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                    )}
                  </motion.div>

                  <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)} 
            />

            <motion.div
              layoutId={`container-${selectedProject.id}`}
              className="relative w-full max-w-5xl h-[85vh] sm:h-[80vh] bg-white dark:bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row z-10"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
            >
              <div 
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.12), transparent 40%)`,
                }}
              />

              {/* LEFT SIDE: Media is now object-contain with a black background */}
              <motion.div layoutId={`media-${selectedProject.id}`} className="relative w-full md:w-1/2 h-64 md:h-full z-10 bg-black border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
                {selectedProject.project.video_url ? (
                  <video src={selectedProject.project.video_url} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-contain" />
                ) : selectedProject.project.thumbnail_url ? (
                  <Image src={selectedProject.project.thumbnail_url} alt={selectedProject.project.title} fill className="object-contain" />
                ) : null}
              </motion.div>

              {/* RIGHT SIDE: Details */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ delay: 0.2 }}
                className="p-8 md:p-12 z-10 w-full md:w-1/2 flex flex-col overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-neutral-600 dark:text-neutral-400 z-50"
                >
                  ✕
                </button>

                <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Featured Project
                </span>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                  {selectedProject.project.title}
                </h2>
                
                {/* Description now supports line breaks (whitespace-pre-wrap) */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 whitespace-pre-wrap">
                  {selectedProject.project.description || "No description provided."}
                </p>

                {selectedProject.project.tech_stack && selectedProject.project.tech_stack.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.project.tech_stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs text-neutral-700 dark:text-neutral-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex gap-4 pt-8">
                  {selectedProject.project.live_url && (
                    <a href={selectedProject.project.live_url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:scale-105 transition-transform">
                      View Live Site
                    </a>
                  )}
                  {selectedProject.project.repo_url && (
                    <a href={selectedProject.project.repo_url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                      View GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}