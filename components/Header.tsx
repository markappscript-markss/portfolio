"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "@/components/animations/Magnetic";

interface HeaderProps {
  activeView?: "main" | "about";
  onViewChange?: (view: "main" | "about") => void;
}

function HeaderNavItem({
  id,
  label,
  isActive,
  onClick,
}: {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const activeLineRef = useRef<HTMLDivElement>(null);
  const hoverLineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (activeLineRef.current) gsap.killTweensOf(activeLineRef.current);
      if (hoverLineRef.current) gsap.killTweensOf(hoverLineRef.current);
      if (textRef.current) gsap.killTweensOf(textRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeLineRef.current) return;

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      gsap.set(activeLineRef.current, {
        scaleX: isActive ? 1 : 0,
        transformOrigin: "left",
      });
      if (hoverLineRef.current) {
        gsap.set(hoverLineRef.current, { scaleX: 0, transformOrigin: "left" });
      }
      return;
    }

    gsap.killTweensOf(activeLineRef.current);
    if (isActive) {
      if (hoverLineRef.current) {
        gsap.killTweensOf(hoverLineRef.current);
        gsap.set(hoverLineRef.current, { scaleX: 0 });
      }
      gsap.fromTo(
        activeLineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.42, ease: "power3.out" }
      );
    } else {
      gsap.to(activeLineRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.32,
        ease: "power2.inOut",
      });
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    if (isActive) return;
    if (hoverLineRef.current) {
      gsap.killTweensOf(hoverLineRef.current);
      gsap.fromTo(
        hoverLineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.32, ease: "power2.out" }
      );
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        y: -1.5,
        duration: 0.22,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (isActive) return;
    if (hoverLineRef.current) {
      gsap.killTweensOf(hoverLineRef.current);
      gsap.to(hoverLineRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.28,
        ease: "power2.inOut",
      });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        y: 0,
        duration: 0.22,
        ease: "power2.out",
      });
    }
  };

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center py-1 px-1 cursor-pointer select-none"
    >
      <span
        ref={textRef}
        className={`font-mono text-xs sm:text-sm tracking-widest uppercase transition-colors duration-200 will-change-transform ${
          isActive
            ? "text-neutral-950 font-bold"
            : "text-neutral-500 group-hover:text-neutral-950 font-medium"
        }`}
      >
        {label}
      </span>
      <div className="relative w-full h-[2.5px] sm:h-[3px] mt-1 overflow-hidden rounded-[1px]">
        <div className="absolute inset-0 bg-neutral-900/20" />
        <div
          ref={hoverLineRef}
          className="absolute inset-0 bg-neutral-900/85 origin-left will-change-transform pointer-events-none"
        />
        <div
          ref={activeLineRef}
          className="absolute inset-0 bg-neutral-950 origin-left will-change-transform pointer-events-none"
        />
      </div>
    </button>
  );
}

export default function Header({ activeView = "main", onViewChange }: HeaderProps) {
  const handleMainClick = () => {
    onViewChange?.("main");
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-trigger-main"));
    }
  };

  const handleAboutClick = () => {
    onViewChange?.("about");
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-about"));
    }
  };

  return (
    <header
      id="header-nav"
      className="fixed top-0 left-0 right-0 z-40 w-full h-16 sm:h-20 bg-transparent px-4 sm:px-12 flex items-center justify-between pointer-events-none opacity-0"
    >
      <div className="pointer-events-auto">
        <Magnetic strength={0.2}>
          <button
            type="button"
            onClick={handleMainClick}
            className="flex items-baseline select-none cursor-pointer text-left"
          >
            <span className="font-bold tracking-tight text-xs sm:text-base text-black">
              markappscript
            </span>
            <span className="font-bold tracking-tight text-xs sm:text-base text-purple-600">
              .dev
            </span>
          </button>
        </Magnetic>
      </div>

      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-10 select-none">
        <HeaderNavItem
          id="nav-btn-main"
          label="MAIN"
          isActive={activeView === "main"}
          onClick={handleMainClick}
        />
        <HeaderNavItem
          id="nav-btn-about"
          label="ABOUT"
          isActive={activeView === "about"}
          onClick={handleAboutClick}
        />
      </div>

      <div className="pointer-events-auto flex items-center gap-3 sm:gap-5 text-sm text-neutral-800">
        <Magnetic strength={0.15}>
          <a
            href="mailto:markappscript@gmail.com"
            className="hidden sm:inline-block font-mono text-xs sm:text-sm font-semibold text-neutral-700 hover:text-black tracking-tight transition-colors"
          >
            markappscript@gmail.com
          </a>
        </Magnetic>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Magnetic strength={0.2}>
            <a
              href="https://www.linkedin.com/in/mark-bryan-poticar-7954041b4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-700 hover:text-[#0a66c2] hover:bg-neutral-900/5 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </Magnetic>

          <Magnetic strength={0.2}>
            <a
              href="https://v2.onlinejobs.ph/jobseekers/info/4228954"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OnlineJobs.ph Profile"
              className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-900/5 transition-all group"
            >
              <img
                src="/images/onlinejobs-icon.png"
                alt="OnlineJobs.ph"
                className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all"
              />
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
