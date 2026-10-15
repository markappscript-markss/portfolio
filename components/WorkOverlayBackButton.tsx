"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export interface WorkOverlayBackButtonProps {
  id?: string;
  onClick: () => void;
  isDeepDive?: boolean;
  isVisible?: boolean;
  className?: string;
}

export default function WorkOverlayBackButton({
  id = "btn-back-work",
  onClick,
  isDeepDive = false,
  isVisible = true,
  className = "",
}: WorkOverlayBackButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const lineProgress = useRef({ head: 0, tail: 0 });

  const renderLine = () => {
    if (!lineRef.current) return;
    const head = Math.max(0, Math.min(100, lineProgress.current.head));
    const tail = Math.max(0, Math.min(100, lineProgress.current.tail));
    const right = 100 - head;
    const left = tail;
    lineRef.current.style.clipPath = `inset(0 ${right}% 0 ${left}%)`;
  };

  const resetHoverState = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    gsap.killTweensOf(lineProgress.current);
    lineProgress.current.head = 0;
    lineProgress.current.tail = 0;
    renderLine();
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    renderLine();
    resetHoverState();
    return () => {
      if (btnRef.current) gsap.killTweensOf(btnRef.current);
      gsap.killTweensOf(lineProgress.current);
      if (arrowRef.current) gsap.killTweensOf(arrowRef.current);
    };
  }, []);

  useEffect(() => {
    resetHoverState();
  }, [isDeepDive, isVisible]);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: -2,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: 45,
        x: -3,
        y: -2,
        duration: 0.28,
        ease: "power2.out",
      });
    }

    gsap.killTweensOf(lineProgress.current);

    if (lineProgress.current.tail >= 98 || (lineProgress.current.head >= 99 && lineProgress.current.tail >= 95)) {
      lineProgress.current.head = 0;
      lineProgress.current.tail = 0;
      renderLine();
    }

    const remainingHead = 100 - lineProgress.current.head;
    const dur = Math.max(0.18, 0.34 * (remainingHead / 100));

    gsap.to(lineProgress.current, {
      head: 100,
      tail: 0,
      duration: dur,
      ease: "power2.out",
      onUpdate: renderLine,
    });
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: 0,
        duration: 0.26,
        ease: "power2.out",
      });
    }

    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.24,
        ease: "power2.out",
      });
    }

    gsap.killTweensOf(lineProgress.current);

    if (lineProgress.current.head < 5) {
      lineProgress.current.head = 0;
      lineProgress.current.tail = 0;
      renderLine();
      return;
    }

    const dur = 0.32;

    gsap.to(lineProgress.current, {
      head: 100,
      tail: 100,
      duration: dur,
      ease: "power2.inOut",
      onUpdate: renderLine,
      onComplete: () => {
        lineProgress.current.head = 0;
        lineProgress.current.tail = 0;
        renderLine();
      },
    });
  };

  const handleClick = () => {
    resetHoverState();
    onClick();
  };

  const handleMouseDown = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 0.97,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const handleMouseUp = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    }
  };

  return (
    <button
      ref={btnRef}
      type="button"
      id={id}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`group relative inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase cursor-pointer select-none will-change-transform before:absolute before:-inset-1.5 before:content-[''] before:rounded-full before:pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${className}`}
      aria-label={isDeepDive ? "Back to explore" : "Back to main view"}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full bg-neutral-950 border border-white/15 shadow-sm pointer-events-none transition-opacity duration-700 ease-in-out ${
          isDeepDive ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full bg-white border-2 border-neutral-950/20 shadow-[0_4px_24px_rgba(0,0,0,0.14)] pointer-events-none transition-opacity duration-700 ease-in-out ${
          isDeepDive ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        ref={arrowRef}
        className={`relative z-10 inline-block shrink-0 text-[11px] sm:text-sm font-light will-change-transform pointer-events-none transition-colors duration-700 ease-in-out ${
          isDeepDive ? "text-neutral-950" : "text-white"
        }`}
      >
        ←
      </span>

      <div className="relative z-10 flex flex-col items-start pointer-events-none">
        <div className="relative flex items-center h-4 sm:h-4.5 overflow-hidden">
          <span
            className={`block tracking-wider whitespace-nowrap pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isDeepDive
                ? "opacity-0 -translate-y-2 blur-[2px] pointer-events-none absolute left-0"
                : "opacity-100 translate-y-0 blur-0 text-white/90 relative"
            }`}
          >
            BACK
          </span>

          <span
            className={`block tracking-wider whitespace-nowrap pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isDeepDive
                ? "opacity-100 translate-y-0 blur-0 text-neutral-950 relative"
                : "opacity-0 translate-y-2 blur-[2px] pointer-events-none absolute left-0"
            }`}
          >
            BACK TO EXPLORE
          </span>
        </div>

        <div className="relative w-full h-[2px] mt-0.5 overflow-hidden rounded-[1px] pointer-events-none">
          <div
            className={`absolute inset-0 transition-colors duration-700 ease-in-out ${
              isDeepDive ? "bg-neutral-950/15" : "bg-white/20"
            }`}
          />
          <div
            ref={lineRef}
            className={`absolute inset-0 will-change-transform pointer-events-none transition-colors duration-700 ease-in-out ${
              isDeepDive ? "bg-neutral-950" : "bg-white"
            }`}
            style={{
              clipPath: "inset(0 100% 0 0%)",
            }}
          />
        </div>
      </div>
    </button>
  );
}
