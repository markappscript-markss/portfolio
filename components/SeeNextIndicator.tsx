"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SeeNextIndicatorProps {
  isVisible: boolean;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default function SeeNextIndicator({
  isVisible,
  onClick,
  className = "",
  id = "indicator-see-next",
}: SeeNextIndicatorProps) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (!arrowRef.current) return;
    const bounceTween = gsap.to(arrowRef.current, {
      y: 4,
      duration: 0.9,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      bounceTween.kill();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.killTweensOf(containerRef.current);
    if (isVisible) {
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.1,
      });
    } else {
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        y: 8,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: 2,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleMouseDown = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 0.96,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const handleMouseUp = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    }
  };

  return (
    <button
      ref={containerRef}
      type="button"
      id={id}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ opacity: 0, visibility: "hidden" }}
      className={`group absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20 rounded-full px-3 py-1.5 transition-transform will-change-transform ${className}`}
      aria-label="See next project"
    >
      <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold text-neutral-700 group-hover:text-neutral-950 transition-colors duration-200">
        SEE NEXT
      </span>
      <span
        ref={arrowRef}
        className="text-neutral-700 group-hover:text-neutral-950 transition-colors duration-200 will-change-transform flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 2.5v10M4.5 9L8 12.5l3.5-3.5" />
        </svg>
      </span>
    </button>
  );
}
