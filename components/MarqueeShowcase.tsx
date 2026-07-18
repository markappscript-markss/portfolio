"use client";

import { useRef, useState, useCallback } from "react";
import { useAnimationFrame } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/supabase";

// ─── Constants ──────────────────────────────────────────────────────────────
const CARD_WIDTH = 300;   // px — width of each card
const CARD_GAP   = 16;    // px — gap between cards
const SPEED      = 0.55;  // px per frame — lower = slower

// ─── Types ───────────────────────────────────────────────────────────────────
interface MarqueeShowcaseProps {
  projects: Project[];
}

// ─── Sub-component ───────────────────────────────────────────────────────────
function MarqueeCard({ project }: { project: Project }) {
  const isVideo = Boolean(project.video_url);

  return (
    <a
      href={project.live_url ?? project.repo_url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
      style={{ width: CARD_WIDTH, height: 200 }}
    >
      {/* Thumbnail or video */}
      {project.thumbnail_url ? (
        <Image
          src={project.thumbnail_url}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes={`${CARD_WIDTH}px`}
        />
      ) : (
        /* Fallback gradient when no thumbnail is set */
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
      )}

      {/* Dark overlay — slides up on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 rounded-2xl" />

      {/* Play icon badge — visible only for video projects */}
      {isVideo && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm border border-white/15 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
          <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor" aria-hidden="true">
            <path d="M0 0.5L8 4.5L0 8.5V0.5Z" />
          </svg>
          Video
        </div>
      )}

      {/* Meta reveal — slides up from bottom on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out p-4">
        <p className="text-sm font-medium text-white leading-snug mb-1.5">
          {project.title}
        </p>
        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech_stack.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 border border-white/20 px-2 py-0.5 text-[10px] text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MarqueeShowcase({ projects }: MarqueeShowcaseProps) {
  const isPausedRef  = useRef(false);
  const xRef         = useRef(0);
  const trackRef     = useRef<HTMLDivElement>(null);

  // Total width of ONE set of items (we duplicate for the seamless loop)
  const loopWidth = projects.length * (CARD_WIDTH + CARD_GAP);

  const [isPausedState, setIsPausedState] = useState(false); // for the hint dot only

  const pause  = useCallback(() => { isPausedRef.current = true;  setIsPausedState(true);  }, []);
  const resume = useCallback(() => { isPausedRef.current = false; setIsPausedState(false); }, []);

  useAnimationFrame(() => {
    if (isPausedRef.current || !trackRef.current || loopWidth === 0) return;
    xRef.current -= SPEED;
    // Reset once we've scrolled through one full set to create the seamless loop
    if (Math.abs(xRef.current) >= loopWidth) xRef.current = 0;
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  if (projects.length === 0) return null;

  // Duplicate items for a seamless infinite loop
  const items = [...projects, ...projects];

  return (
    <section className="mb-24">
      {/* Section label */}
      <span className="inline-block text-xs font-medium tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-6">
        Featured work
      </span>

      {/* Mask fades the edges so cards don't hard-clip */}
      <div
        className="overflow-hidden w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{
            gap: CARD_GAP,
            width: items.length * (CARD_WIDTH + CARD_GAP),
          }}
        >
          {items.map((project, i) => (
            <MarqueeCard key={`${project.id}-${i}`} project={project} />
          ))}
        </div>
      </div>

      {/* Hint */}
      <p className="mt-3 flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full transition-colors duration-200"
          style={{
            background: isPausedState ? "rgb(147 51 234)" : "currentColor",
          }}
        />
        {isPausedState ? "Paused" : "Hover to pause"}
      </p>
    </section>
  );
}
