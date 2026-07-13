"use client";

import { useState } from "react";
import type { Category, Project } from "@/lib/supabase";
import { colorForCategory } from "@/lib/colors";

export default function ProjectGrid({
  categories,
  projects,
}: {
  categories: Category[];
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const categoryIds = categories.map((c) => c.id);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category_id === activeCategory);

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-1.5 rounded-full text-sm border ${
            activeCategory === "all"
              ? "bg-neutral-900 text-white border-neutral-900"
              : "border-neutral-300 text-neutral-600"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm border ${
              activeCategory === cat.id
                ? "bg-neutral-900 text-white border-neutral-900"
                : "border-neutral-300 text-neutral-600"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => {
          const color = colorForCategory(project.category_id, categoryIds);
          return (
            <a
              key={project.id}
              href={project.live_url ?? project.repo_url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl p-6 min-h-[160px] flex flex-col justify-between ${color.bg} ${color.text} transition-transform hover:-translate-y-1`}
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
            </a>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-neutral-500 text-sm">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
}
