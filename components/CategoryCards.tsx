"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import type { Project } from "@/lib/supabase";

export function VideoAdCard({ project }: { project: Project }) {
  const driveUrl = project.live_url || project.repo_url;
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      gsap.set(rectRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
    }
  }, []);

  const handleMouseEnterCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)",
        borderColor: "rgba(168, 85, 247, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 4,
        y: -4,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeaveCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
        borderColor: "rgba(38, 38, 38, 1)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      gsap.to(rectRef.current, {
        strokeDashoffset: length,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-colors"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
          {project.title}
        </h3>

        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-950 text-neutral-300 border border-neutral-800 rounded-full text-[11px] font-semibold tracking-wider uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-neutral-800/80">
        {driveUrl ? (
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/box relative w-full h-12 bg-neutral-950 rounded-xl flex items-center justify-between px-5 cursor-pointer block overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <rect
                ref={rectRef}
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="11"
                ry="11"
                fill="none"
                stroke="#c084fc"
                strokeWidth="2"
              />
            </svg>

            <span className="relative z-10 text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2.5 group-hover/box:text-purple-300 transition-colors">
              <svg className="w-4 h-4 fill-purple-400" viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
              VIEW ON GOOGLE DRIVE
            </span>

            <span ref={arrowRef} className="relative z-10 text-sm text-purple-300 font-extrabold">
              ↗
            </span>
          </a>
        ) : (
          <div className="h-12 bg-neutral-950/60 border border-neutral-800/50 rounded-xl flex items-center justify-center text-xs text-neutral-500 font-semibold uppercase tracking-wider">
            GOOGLE DRIVE LINK PENDING
          </div>
        )}
      </div>
    </div>
  );
}

export function WebDesignCard({ project }: { project: Project }) {
  const mainUrl = project.live_url || project.repo_url;
  const isGithub = !project.live_url && !!project.repo_url;
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      gsap.set(rectRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
    }
  }, []);

  const handleMouseEnterCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        scale: 1.02,
        boxShadow: isGithub
          ? "0 20px 40px rgba(56, 189, 248, 0.15)"
          : "0 20px 40px rgba(34, 197, 94, 0.15)",
        borderColor: isGithub ? "rgba(56, 189, 248, 0.4)" : "rgba(34, 197, 94, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 4,
        y: -4,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeaveCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
        borderColor: "rgba(38, 38, 38, 1)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      gsap.to(rectRef.current, {
        strokeDashoffset: length,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-colors"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
          {project.title}
        </h3>

        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-950 text-neutral-300 border border-neutral-800 rounded-full text-[11px] font-semibold tracking-wider uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-neutral-800/80">
        {mainUrl ? (
          <a
            href={mainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/box relative w-full h-12 bg-neutral-950 rounded-xl flex items-center justify-between px-5 cursor-pointer block overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <rect
                ref={rectRef}
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="11"
                ry="11"
                fill="none"
                stroke={isGithub ? "#38bdf8" : "#4ade80"}
                strokeWidth="2"
              />
            </svg>

            <span className="relative z-10 text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2.5 group-hover/box:text-white transition-colors">
              {isGithub ? (
                <>
                  <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  VIEW ON GITHUB
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VIEW LIVE DEMO
                </>
              )}
            </span>

            <span ref={arrowRef} className={`relative z-10 text-sm font-extrabold ${isGithub ? "text-sky-300" : "text-emerald-300"}`}>
              ↗
            </span>
          </a>
        ) : (
          <div className="h-12 bg-neutral-950/60 border border-neutral-800/50 rounded-xl flex items-center justify-center text-xs text-neutral-500 font-semibold uppercase tracking-wider">
            PRIVATE REPOSITORY
          </div>
        )}
      </div>
    </div>
  );
}

export function WebAppCard({ project }: { project: Project }) {
  const mainUrl = project.live_url || project.repo_url;
  const isGithub = !project.live_url && !!project.repo_url;
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      gsap.set(rectRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
    }
  }, []);

  const handleMouseEnterCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        scale: 1.02,
        boxShadow: isGithub
          ? "0 20px 40px rgba(56, 189, 248, 0.15)"
          : "0 20px 40px rgba(16, 185, 129, 0.15)",
        borderColor: isGithub ? "rgba(56, 189, 248, 0.4)" : "rgba(16, 185, 129, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 4,
        y: -4,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeaveCard = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
        borderColor: "rgba(38, 38, 38, 1)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      gsap.to(rectRef.current, {
        strokeDashoffset: length,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-colors"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
          {project.title}
        </h3>

        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-950 text-neutral-300 border border-neutral-800 rounded-full text-[11px] font-semibold tracking-wider uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-neutral-800/80">
        {mainUrl ? (
          <a
            href={mainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/box relative w-full h-12 bg-neutral-950 rounded-xl flex items-center justify-between px-5 cursor-pointer block overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <rect
                ref={rectRef}
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="11"
                ry="11"
                fill="none"
                stroke={isGithub ? "#38bdf8" : "#34d399"}
                strokeWidth="2"
              />
            </svg>

            <span className="relative z-10 text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2.5 group-hover/box:text-white transition-colors">
              {isGithub ? (
                <>
                  <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  VIEW ON GITHUB
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VIEW LIVE APP
                </>
              )}
            </span>

            <span ref={arrowRef} className={`relative z-10 text-sm font-extrabold ${isGithub ? "text-sky-300" : "text-emerald-300"}`}>
              ↗
            </span>
          </a>
        ) : (
          <div className="h-12 bg-neutral-950/60 border border-neutral-800/50 rounded-xl flex items-center justify-center text-xs text-neutral-500 font-semibold uppercase tracking-wider">
            PRIVATE REPOSITORY
          </div>
        )}
      </div>
    </div>
  );
}
