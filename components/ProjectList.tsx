"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import type { Project } from "@/lib/supabase";
import CategoryGalleryModal from "./CategoryGalleryModal";
import { StaggerContainer, StaggerItem } from "./animations/StaggerReveal";

const BACKGROUND_WALL_URL =
  "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/backgrounds/wall.jpg";

const morphTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 1,
};

function getCategorySlug(project: Project): string {
  const cat = (project.category_id || "").toUpperCase();
  if (cat.includes("ADS") || cat.includes("VIDEO")) return "ADS";
  if (cat.includes("APP") || cat.includes("WEBAPP")) return "WEB APPS";
  if (cat.includes("DESIGN")) return "DESIGN";
  const title = (project.title || "").toLowerCase();
  if (title.includes("ugc") || title.includes("video") || title.includes("ad")) return "ADS";
  if (title.includes("saas") || title.includes("manihub") || title.includes("app")) return "WEB APPS";
  return "DESIGN";
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<{ project: Project; id: string } | null>(null);
  const [activeCategoryModal, setActiveCategoryModal] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new Event("hide-navbar"));

      const preventScroll = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.modal-scroll-area') && !target.closest('.category-modal-scroll-area')) {
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
      window.dispatchEvent(new Event("show-navbar"));
    }
  }, [selectedProject]);

  const handleBackToGrid = () => {
    setSelectedProject(null);
  };

  const handleSeeMore = () => {
    if (!selectedProject) return;
    const cat = getCategorySlug(selectedProject.project);
    setActiveCategoryModal(cat);
  };

  const handleGoBackToProject = () => {
    setActiveCategoryModal(null);
  };

  if (projects.length === 0) return null;

  return (
    <div className="w-full relative z-10 flex flex-col gap-8 md:gap-12">
      <style>{`
        .fancy-btn {
          background-color: transparent;
          border: 2px solid #ffffff;
          border-radius: 0px;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-block;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          outline: none;
          overflow: visible;
          padding: 1.25em 2em;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out;
          user-select: none;
          font-size: 13px;
        }
        .fancy-btn::before { content: " "; width: 1.5625rem; height: 2px; background: #ffffff; top: 50%; left: 1.5em; position: absolute; transform: translateY(-50%); transform-origin: center; transition: background 0.3s linear, width 0.3s linear; }
        .fancy-btn .fancy-text { font-size: 1.125em; line-height: 1.33333em; padding-left: 2em; display: block; text-align: left; transition: padding-left 0.3s ease-in-out, color 0.3s ease-in-out; text-transform: uppercase; text-decoration: none; color: #ffffff; }
        .fancy-btn .top-key { height: 2px; width: 1.5625rem; top: -2px; left: 0.625rem; position: absolute; background: #09090b; transition: width 0.5s ease-out, left 0.3s ease-out; }
        .fancy-btn .bottom-key-1 { height: 2px; width: 1.5625rem; right: 1.875rem; bottom: -2px; position: absolute; background: #09090b; transition: width 0.5s ease-out, right 0.3s ease-out; }
        .fancy-btn .bottom-key-2 { height: 2px; width: 0.625rem; right: 0.625rem; bottom: -2px; position: absolute; background: #09090b; transition: width 0.5s ease-out, right 0.3s ease-out; }
        .fancy-btn:hover { color: #000000; background: #ffffff; }
        .fancy-btn:hover::before { width: 0.9375rem; background: #000000; }
        .fancy-btn:hover .fancy-text { color: #000000; padding-left: 1.5em; }
        .fancy-btn:hover .top-key { left: -2px; width: 0px; }
        .fancy-btn:hover .bottom-key-1, .fancy-btn:hover .bottom-key-2 { right: -2px; width: 0px; }
      `}</style>

      <StaggerContainer className="w-full">
        <StaggerItem className="w-full mb-2 md:mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
            My Work
          </h2>
        </StaggerItem>
      </StaggerContainer>

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
                    {project.tech_stack?.slice(0, 5).join("  /  ") || "Design  /  Development"}
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

      {isMounted && typeof document !== "undefined" ? (
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 z-[999990] bg-neutral-950 pointer-events-auto overflow-hidden"
                  data-lenis-prevent
                >
                  <img
                    src={BACKGROUND_WALL_URL}
                    alt="Modal Wall Background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
                </motion.div>

                <motion.div
                  animate={{ x: activeCategoryModal ? "-100%" : "0%" }}
                  transition={{ type: "tween", duration: 1.00, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-[999999] flex flex-col lg:flex-row overflow-hidden pointer-events-none"
                  data-lenis-prevent
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`order-2 lg:order-1 modal-scroll-area w-full lg:w-[45%] h-full flex flex-col p-6 pt-10 sm:p-8 sm:pt-12 md:p-12 lg:pl-16 lg:pr-8 overflow-y-auto ${activeCategoryModal ? 'pointer-events-none' : 'pointer-events-auto'} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
                  >
                    <div className="sticky top-0 z-[999] pb-8 -mx-6 px-6 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 shrink-0 h-16 block">
                      <button
                        onClick={handleBackToGrid}
                        className="fancy-btn"
                      >
                        <span className="top-key" />
                        <span className="fancy-text">&lt;&lt; BACK</span>
                        <span className="bottom-key-1" />
                        <span className="bottom-key-2" />
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

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`order-1 lg:order-2 w-full lg:w-[55%] h-auto md:h-[50vh] lg:h-full relative flex flex-col items-center justify-center p-4 pt-12 md:p-8 lg:p-16 lg:pl-0 ${activeCategoryModal ? 'pointer-events-none' : 'pointer-events-auto'}`}
                  >
                    <div className="w-full aspect-[16/8] relative rounded-xl">
                      <motion.div
                        layoutId={activeCategoryModal ? undefined : `media-${selectedProject.id}`}
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

                    <div className="mt-6">
                      <button
                        onClick={handleSeeMore}
                        className="fancy-btn"
                      >
                        <span className="top-key" />
                        <span className="fancy-text">SEE MORE LIKE THIS ✦</span>
                        <span className="bottom-key-1" />
                        <span className="bottom-key-2" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )
      ) : null}

      {isMounted && (
        <CategoryGalleryModal
          categoryId={activeCategoryModal}
          onGoBack={handleGoBackToProject}
        />
      )}
    </div>
  );
}