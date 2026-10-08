"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AboutOverlayProps {
  isOpen: boolean;
}

const ABOUT_TEXT =
  "I’m Mark, an AI-assisted web developer who builds fast, polished products from front end to back end. I bring interfaces to life with GSAP and motion graphics for web design. I also create AI-generated video ads, using Google Flow, ElevenLabs, CapCut, and DaVinci Resolve to take a concept from prompt to finished spot. Design, code, and motion all happen in one workflow, so what I build looks right and works right.";

const WORDS = ABOUT_TEXT.split(" ");

export default function AboutOverlay({ isOpen }: AboutOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".about-word",
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
            ease: "power2.out",
            stagger: 0.015,
            delay: 0.1,
          }
        );
      }, containerRef);

      return () => ctx.revert();
    } else {
      gsap.set(".about-word", { opacity: 0, y: 14 });
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      id="about-overlay"
      className={`fixed inset-0 z-30 bg-white overflow-y-auto overscroll-contain touch-pan-y transition-opacity duration-200 ease-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="min-h-full w-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-28">
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          <p className="font-sans font-medium text-neutral-900 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-[1.65] tracking-tight text-center text-balance select-none">
            {WORDS.map((word, i) => (
              <span key={i} className="inline-block mr-[0.28em] last:mr-0">
                <span className="about-word inline-block opacity-0 will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
