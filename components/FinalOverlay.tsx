"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
export const FINAL_OVERLAY_CURVE_CONFIG = {
  openDuration: 1.35,
  openEase: "power2.out",
  curveFlattenDelay: 0.1,
  curveFlattenDuration: 1.2,
  curveFlattenEase: "power2.inOut",
  closeDuration: 1.25,
  closeEase: "power2.inOut",
  closeCurveDuration: 0.8,
  closeCurveEase: "power2.out",
};

interface FinalOverlayProps {
  isOpen: boolean;
  onClose?: () => void;
  onToMain?: () => void;
  onReachTop?: () => void;
  onLeaveTop?: () => void;
  children?: React.ReactNode;
}

export default function FinalOverlay({
  isOpen,
  onClose,
  onToMain,
  onReachTop,
  onLeaveTop,
  children,
}: FinalOverlayProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const isMountedRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const onToMainRef = useRef(onToMain);
  const onReachTopRef = useRef(onReachTop);
  const onLeaveTopRef = useRef(onLeaveTop);

  useEffect(() => {
    onCloseRef.current = onClose;
    onToMainRef.current = onToMain;
    onReachTopRef.current = onReachTop;
    onLeaveTopRef.current = onLeaveTop;
  });

  const handleClose = useCallback(() => {
    if (isTransitioningRef.current) return;
    onLeaveTopRef.current?.();
    onCloseRef.current?.();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (wrapperRef.current) {
        gsap.set(wrapperRef.current, {
          yPercent: isOpen ? 0 : 100,
          y: isOpen ? 0 : 250,
          autoAlpha: isOpen ? 1 : 0,
          display: isOpen ? "block" : "none",
        });
      }
      if (curvePathRef.current) {
        curvePathRef.current.setAttribute(
          "d",
          isOpen
            ? "M 0 0 L 0 100 L 100 100 L 100 0 Q 50 0 0 0 Z"
            : "M 0 0 L 0 100 L 100 100 L 100 0 Q 50 140 0 0 Z"
        );
      }
      if (!isOpen) return;
    }

    if (isOpen) {
      isTransitioningRef.current = true;
      document.body.style.overflow = "hidden";
      closeTlRef.current?.kill();

      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
        gsap.set(wrapperRef.current, { display: "block", autoAlpha: 1, yPercent: 100, y: 250 });
      }
      if (curvePathRef.current) {
        gsap.killTweensOf(curvePathRef.current);
        curvePathRef.current.setAttribute(
          "d",
          "M 0 0 L 0 100 L 100 100 L 100 0 Q 50 140 0 0 Z"
        );
      }

      const curveObj = { val: 140 };
      const openTl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
          onReachTopRef.current?.();
        },
      });
      openTlRef.current = openTl;

      if (wrapperRef.current) {
        openTl.fromTo(
          wrapperRef.current,
          { yPercent: 100, y: 250 },
          {
            yPercent: 0,
            y: 0,
            duration: FINAL_OVERLAY_CURVE_CONFIG.openDuration,
            ease: FINAL_OVERLAY_CURVE_CONFIG.openEase,
            force3D: true,
            autoRound: false,
          },
          0
        );
      }

      openTl.to(
        curveObj,
        {
          val: 0,
          duration: FINAL_OVERLAY_CURVE_CONFIG.curveFlattenDuration,
          ease: FINAL_OVERLAY_CURVE_CONFIG.curveFlattenEase,
          onUpdate: () => {
            if (curvePathRef.current) {
              curvePathRef.current.setAttribute(
                "d",
                `M 0 0 L 0 100 L 100 100 L 100 0 Q 50 ${curveObj.val} 0 0 Z`
              );
            }
          },
        },
        FINAL_OVERLAY_CURVE_CONFIG.curveFlattenDelay
      );

      openTl.call(
        () => {
          onReachTopRef.current?.();
        },
        [],
        FINAL_OVERLAY_CURVE_CONFIG.openDuration * 0.42
      );

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      const handleWheel = (e: WheelEvent) => {
        if (isTransitioningRef.current || !containerRef.current) return;
        if (containerRef.current.scrollTop <= 0 && e.deltaY < -20) {
          e.preventDefault();
          handleClose();
        }
      };

      let touchStartY = 0;
      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (isTransitioningRef.current || !containerRef.current) return;
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDown = touchEndY - touchStartY;
        if (containerRef.current.scrollTop <= 0 && swipeDown > 50) {
          handleClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    } else {
      onLeaveTopRef.current?.();
      document.body.style.overflow = "";

      openTlRef.current?.kill();

      const closeTl = gsap.timeline({
        onComplete: () => {
          if (wrapperRef.current) {
            gsap.set(wrapperRef.current, { autoAlpha: 0, display: "none", yPercent: 100, y: 250 });
          }
          if (curvePathRef.current) {
            curvePathRef.current.setAttribute(
              "d",
              "M 0 0 L 0 100 L 100 100 L 100 0 Q 50 140 0 0 Z"
            );
          }
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
          }
          isTransitioningRef.current = false;
        },
      });
      closeTlRef.current = closeTl;

      if (curvePathRef.current) {
        gsap.killTweensOf(curvePathRef.current);
      }

      const closeCurveObj = { val: 0 };
      closeTl.to(
        closeCurveObj,
        {
          val: 140,
          duration: FINAL_OVERLAY_CURVE_CONFIG.closeCurveDuration,
          ease: FINAL_OVERLAY_CURVE_CONFIG.closeCurveEase,
          onUpdate: () => {
            if (curvePathRef.current) {
              curvePathRef.current.setAttribute(
                "d",
                `M 0 0 L 0 100 L 100 100 L 100 0 Q 50 ${closeCurveObj.val} 0 0 Z`
              );
            }
          },
        },
        0
      );

      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
        closeTl.to(
          wrapperRef.current,
          {
            yPercent: 100,
            y: 250,
            duration: FINAL_OVERLAY_CURVE_CONFIG.closeDuration,
            ease: FINAL_OVERLAY_CURVE_CONFIG.closeEase,
            force3D: true,
            autoRound: false,
          },
          0
        );
      }
    }
  }, [isOpen, handleClose]);

  return (
    <div
      ref={wrapperRef}
      id="final-section-wrapper"
      aria-hidden={!isOpen}
      className="fixed inset-0 z-[49] pointer-events-none overflow-visible select-none"
      style={{ display: "none" }}
    >
      <svg
        className="absolute -top-[119px] sm:-top-[159px] md:-top-[199px] left-0 w-full h-[120px] sm:h-[160px] md:h-[200px] fill-[#000000] pointer-events-none overflow-visible z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={curvePathRef}
          d="M 0 0 L 0 100 L 100 100 L 100 0 Q 50 140 0 0 Z"
        />
      </svg>

      <div
        ref={containerRef}
        id="final-section"
        tabIndex={-1}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        aria-hidden={!isOpen}
        className="w-full h-full bg-[#000000] text-white overflow-y-auto overscroll-contain select-none transform-gpu will-change-transform no-scrollbar outline-none pointer-events-auto before:absolute before:-top-[2px] before:left-0 before:right-0 before:h-[3px] before:bg-[#000000] before:content-[''] before:pointer-events-none"
        style={{
          WebkitOverflowScrolling: "touch",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          outline: "1px solid transparent",
        }}
      >
        <main className="relative z-10 w-full min-h-screen flex flex-col justify-between p-6 sm:p-10 md:p-12 text-white select-none pointer-events-auto">
          {children || (
            <>
              <div className="h-8 sm:h-12" aria-hidden="true" />

              <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-8">
                <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-4 sm:mb-5">
                  <a
                    href="mailto:markappscript@gmail.com"
                    className="font-mono text-sm sm:text-base md:text-lg tracking-wider text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    markappscript@gmail.com
                  </a>
                  <span className="text-white/40 text-sm sm:text-base select-none">•</span>
                  <a
                    href="https://www.linkedin.com/in/mark-bryan-poticar-7954041b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center justify-center text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>

                <h1 className="text-[clamp(2.25rem,6.2vw,6.5rem)] font-black tracking-tight leading-none text-white transition-colors duration-200 hover:text-[#ff2222] cursor-default">
                  markappscript
                </h1>

                <div className="flex items-center justify-center gap-2.5 mt-5 sm:mt-6 font-mono text-sm sm:text-base md:text-lg tracking-widest uppercase text-white">
                  <span className="transition-colors duration-200 hover:text-[#ff2222] cursor-default">
                    PH,
                  </span>
                  <span className="transition-colors duration-200 hover:text-[#ff2222] cursor-default">
                    2026
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs sm:text-sm font-mono tracking-wider">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 sm:gap-x-2">
                  <span className="text-white/80 transition-colors duration-200 hover:text-[#ff2222] cursor-default">
                    Tech Stack:
                  </span>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    Next.js
                  </a>
                  <span className="text-white/40">/</span>
                  <a
                    href="https://threejs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    Three.js
                  </a>
                  <span className="text-white/40">/</span>
                  <a
                    href="https://gsap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    GSAP
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-1.5 sm:gap-x-2">
                  <span className="text-white/80 transition-colors duration-200 hover:text-[#ff2222] cursor-default">
                    Socials:
                  </span>
                  <a
                    href="https://www.instagram.com/markappscript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    Instagram
                  </a>
                  <span className="text-white/40">/</span>
                  <a
                    href="https://x.com/markappscript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors duration-200 hover:text-[#ff2222] cursor-pointer"
                  >
                    X
                  </a>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
