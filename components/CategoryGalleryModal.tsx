"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, type Project } from "@/lib/supabase";
import { VideoAdCard, WebDesignCard, WebAppCard } from "./CategoryCards";

const BACKGROUND_WALL_URL =
  "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/backgrounds/wall.jpg";

interface CategoryGalleryModalProps {
  categoryId: string | null;
  categoryTitle?: string;
  initialProjects?: Project[];
  onGoBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 20,
    },
  },
};

const getProjectCategory = (p: Project): string => {
  if (p.category_id) {
    const c = p.category_id.toUpperCase().trim();
    if (c.includes("ADS") || c.includes("VIDEO")) return "ADS";
    if (c.includes("APP") || c.includes("SAAS")) return "WEB APPS";
    if (c.includes("DESIGN")) return "DESIGN";
  }

  const title = (p.title || "").toUpperCase();
  const tech = (p.tech_stack || []).join(" ").toUpperCase();

  if (
    title.includes("VIDEO") ||
    title.includes("AD") ||
    tech.includes("CAPCUT") ||
    tech.includes("ELEVENLABS") ||
    tech.includes("GOOGLE FLOW")
  ) {
    return "ADS";
  }

  if (
    title.includes("SAAS") ||
    title.includes("APP") ||
    title.includes("TENANT") ||
    tech.includes("VITE")
  ) {
    return "WEB APPS";
  }

  return "DESIGN";
};

export default function CategoryGalleryModal({
  categoryId,
  categoryTitle,
  initialProjects,
  onGoBack,
}: CategoryGalleryModalProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    async function fetchCategoryProjects() {
      if (!categoryId) return;

      const targetCat = categoryId.toUpperCase().trim();
      const normalizedTarget = targetCat.includes("ADS")
        ? "ADS"
        : targetCat.includes("APP")
          ? "WEB APPS"
          : "DESIGN";

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!error && data) {
        const filtered = (data as Project[]).filter(
          (p) => getProjectCategory(p) === normalizedTarget
        );
        setProjects(filtered);
      } else if (initialProjects) {
        setProjects(
          initialProjects.filter(
            (p) => getProjectCategory(p) === normalizedTarget
          )
        );
      }
    }

    fetchCategoryProjects();
  }, [categoryId, initialProjects]);

  if (!isMounted) return null;

  const targetCat = (categoryId || "").toUpperCase().trim();
  const displayTitle =
    categoryTitle ||
    (targetCat.includes("ADS")
      ? "ADS"
      : targetCat.includes("APP")
        ? "WEB APPS"
        : "DESIGN");

  return createPortal(
    <div className="fixed inset-0 z-[999995] flex items-center justify-center pointer-events-none">
      <AnimatePresence>
        {categoryId && (
          <>
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1.00 } }}
              transition={{ type: "tween", duration: 1.00, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[999990] bg-neutral-950 pointer-events-auto overflow-hidden"
              data-lenis-prevent
            >
              <img
                src={BACKGROUND_WALL_URL}
                alt="Wall Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
            </motion.div>

            <motion.div
              key="modal-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%", transition: { duration: 1.00, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ type: "tween", duration: 1.00, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[999999] flex flex-col pointer-events-auto category-modal-scroll-area overflow-y-auto p-6 sm:p-10 md:p-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              data-lenis-prevent
            >
              <div className="max-w-7xl w-full mx-auto flex flex-col flex-1">
                <div className="flex items-center justify-between pb-8 border-b border-neutral-800 mb-10 shrink-0">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                      Category Archive
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight mt-1">
                      {displayTitle}
                    </h2>
                  </div>

                  <button onClick={onGoBack} className="fancy-btn">
                    <span className="top-key" />
                    <span className="fancy-text">&lt;&lt; GO BACK</span>
                    <span className="bottom-key-1" />
                    <span className="bottom-key-2" />
                  </button>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16"
                >
                  {projects.map((project) => {
                    const catType = getProjectCategory(project);

                    if (catType === "ADS") {
                      return (
                        <motion.div key={project.id} variants={itemVariants}>
                          <VideoAdCard project={project} />
                        </motion.div>
                      );
                    }

                    if (catType === "WEB APPS") {
                      return (
                        <motion.div key={project.id} variants={itemVariants}>
                          <WebAppCard project={project} />
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={project.id} variants={itemVariants}>
                        <WebDesignCard project={project} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
}