"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Category, Project } from "@/lib/supabase";
import { colorForCategory } from "@/lib/colors";
import AnimatedProjectCard from "@/components/animations/AnimatedProjectCard";

const MIN_PROJECTS_FOR_FILTERS = 6;

export default function ProjectGrid({
  categories,
  projects,
}: {
  categories: Category[];
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const categoryIds = categories.map((c) => c.id);

  const showFilters = projects.length >= MIN_PROJECTS_FOR_FILTERS;

  const filtered =
    !showFilters || activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category_id === activeCategory);

  return (
    <div>
      {showFilters && (
        <div className="flex gap-2 flex-wrap mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              activeCategory === "all"
                ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 border-neutral-900 dark:border-neutral-100"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-500"
            }`}
          >
            All
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                activeCategory === cat.id
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 border-neutral-900 dark:border-neutral-100"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-500"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => {
            const color = colorForCategory(project.category_id, categoryIds);
            return (
              <AnimatedProjectCard key={project.id} index={i}>
                <motion.a
                  href={project.live_url ?? project.repo_url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`rounded-2xl p-6 min-h-[160px] flex flex-col justify-between block ${color.bg} ${color.text} shadow-sm hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="text-xs uppercase tracking-wide opacity-80">
                    {project.tech_stack?.join(" · ")}
                  </div>
                  <div>
                    <div className="font-medium text-lg">{project.title}</div>
                    {project.description && (
                      <div className="text-sm opacity-90 mt-1">{project.description}</div>
                    )}
                  </div>
                </motion.a>
              </AnimatedProjectCard>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 py-16 text-center">
          <p className="text-neutral-500 dark:text-neutral-500 text-sm">
            First projects landing soon — check back shortly.
          </p>
        </div>
      )}
    </div>
  );
}