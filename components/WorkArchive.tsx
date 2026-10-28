"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { WORK_OVERLAY_CURVE_CONFIG } from "./WorkOverlay";
import { FINAL_OVERLAY_CURVE_CONFIG } from "./FinalOverlay";
import TakeALookButton from "./TakeALookButton";

const ARCHIVE_PROJECTS = [
  {
    id: "portfolio-v2",
    index: "01",
    title: "Portfolio V2",
    status: "Deployment Paused",
    role: "Front and Backend",
    stack: "Barba.js, GSAP",
    link: "https://v2.markappscript.dev",
  },
  {
    id: "sunyue-blooms-and-designs",
    index: "02",
    title: "SunYue Blooms and Designs",
    status: "In-development",
    role: "Front and Backend",
    stack: "Next.JS, GSAP",
    link: "https://sunyue.markappscript.dev",
  },
];

export interface WorkArchiveProps {
  isOpen: boolean;
  onClose?: () => void;
  onNextWork?: () => void;
  isTopmost?: boolean;
  isHidden?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function WorkArchive({
  isOpen,
  onClose,
  onNextWork,
  isTopmost = true,
  isHidden = false,
  className = "",
  children,
}: WorkArchiveProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const isMountedRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const isTriggeringNextWorkRef = useRef(false);
  const isReturningFromChildRef = useRef(false);
  const wasHiddenRef = useRef(false);

  const onCloseRef = useRef(onClose);
  const onNextWorkRef = useRef(onNextWork);
  const isTopmostRef = useRef(isTopmost);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    onNextWorkRef.current = onNextWork;
  });

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (isHidden) {
      wasHiddenRef.current = true;
      gsap.set(wrapperRef.current, { autoAlpha: 0 });
    } else if (isOpen) {
      if (wasHiddenRef.current) {
        wasHiddenRef.current = false;
        gsap.set(wrapperRef.current, { autoAlpha: 1 });
      }
    }
  }, [isHidden, isOpen]);

  useEffect(() => {
    isTopmostRef.current = isTopmost;
    if (!wrapperRef.current) return;

    if (!isTopmost) {
      isReturningFromChildRef.current = true;
      gsap.killTweensOf(wrapperRef.current);
      gsap.to(wrapperRef.current, {
        yPercent: -100,
        y: 0,
        duration: FINAL_OVERLAY_CURVE_CONFIG.openDuration,
        ease: FINAL_OVERLAY_CURVE_CONFIG.openEase,
        force3D: true,
        autoRound: false,
      });
    } else if (isReturningFromChildRef.current) {
      isTransitioningRef.current = true;
      gsap.killTweensOf(wrapperRef.current);
      gsap.to(wrapperRef.current, {
        yPercent: 0,
        y: 0,
        duration: FINAL_OVERLAY_CURVE_CONFIG.closeDuration,
        ease: FINAL_OVERLAY_CURVE_CONFIG.closeEase,
        force3D: true,
        autoRound: false,
        onComplete: () => {
          isTransitioningRef.current = false;
        },
      });
      const timer = setTimeout(() => {
        isReturningFromChildRef.current = false;
        isTransitioningRef.current = false;
      }, FINAL_OVERLAY_CURVE_CONFIG.closeDuration * 1000 + 400);
      return () => clearTimeout(timer);
    }
  }, [isTopmost]);

  const handleClose = useCallback(() => {
    if (isTransitioningRef.current || isReturningFromChildRef.current) return;
    onCloseRef.current?.();
  }, []);

  const handleSeeNext = useCallback(() => {
    if (isTriggeringNextWorkRef.current || !isTopmostRef.current || isTransitioningRef.current) return;
    isTriggeringNextWorkRef.current = true;
    onNextWorkRef.current?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-final"));
    }
    setTimeout(() => {
      isTriggeringNextWorkRef.current = false;
    }, FINAL_OVERLAY_CURVE_CONFIG.openDuration * 1000);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (wrapperRef.current) {
        gsap.set(wrapperRef.current, {
          yPercent: isOpen ? 0 : 100,
          y: isOpen ? 0 : 160,
          autoAlpha: isOpen ? 1 : 0,
          display: isOpen ? "block" : "none",
        });
      }
      if (curvePathRef.current) {
        curvePathRef.current.setAttribute(
          "d",
          isOpen
            ? "M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z"
            : "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z"
        );
      }
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 30 });
      }
      if (projectsRef.current) {
        gsap.set(projectsRef.current, { opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 30 });
      }
      if (paginationRef.current) {
        gsap.set(paginationRef.current, { opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 30 });
      }
      if (!isOpen) return;
    }

    if (isOpen) {
      isTransitioningRef.current = true;
      closeTlRef.current?.kill();

      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
        gsap.set(wrapperRef.current, { display: "block", autoAlpha: 1, yPercent: 100, y: 160 });
      }
      if (curvePathRef.current) {
        gsap.killTweensOf(curvePathRef.current);
        curvePathRef.current.setAttribute("d", "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z");
      }

      const curveObj = { val: 0 };
      const openTl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
          isTriggeringNextWorkRef.current = false;
        },
      });
      openTlRef.current = openTl;
      openTl.call(
        () => {
          isTransitioningRef.current = false;
          isTriggeringNextWorkRef.current = false;
        },
        [],
        0.7
      );

      if (wrapperRef.current) {
        openTl.fromTo(
          wrapperRef.current,
          { yPercent: 100, y: 160 },
          {
            yPercent: 0,
            y: 0,
            duration: WORK_OVERLAY_CURVE_CONFIG.openDuration,
            ease: WORK_OVERLAY_CURVE_CONFIG.openEase,
            force3D: true,
            autoRound: false,
          },
          0
        );
      }

      openTl.to(
        curveObj,
        {
          val: 100,
          duration: WORK_OVERLAY_CURVE_CONFIG.curveFlattenDuration,
          ease: WORK_OVERLAY_CURVE_CONFIG.curveFlattenEase,
          onUpdate: () => {
            if (curvePathRef.current) {
              curvePathRef.current.setAttribute(
                "d",
                `M 0 100 Q 50 ${curveObj.val} 100 100 L 100 100 L 0 100 Z`
              );
            }
          },
        },
        WORK_OVERLAY_CURVE_CONFIG.curveFlattenDelay
      );

      const revealItems = [titleRef.current, projectsRef.current, paginationRef.current].filter(Boolean);
      if (revealItems.length) {
        openTl.fromTo(
          revealItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.4
        );
      }
    } else {
      openTlRef.current?.kill();

      const closeTl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
          if (wrapperRef.current) {
            gsap.set(wrapperRef.current, { autoAlpha: 0, display: "none", yPercent: 100, y: 160 });
          }
          if (curvePathRef.current) {
            curvePathRef.current.setAttribute("d", "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z");
          }
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
          }
          const items = [titleRef.current, projectsRef.current, paginationRef.current].filter(Boolean);
          if (items.length) {
            gsap.set(items, { opacity: 0, y: 30 });
          }
        },
      });
      closeTlRef.current = closeTl;

      const revealItems = [titleRef.current, projectsRef.current, paginationRef.current].filter(Boolean);
      if (revealItems.length) {
        gsap.killTweensOf(revealItems);
        closeTl.to(
          revealItems,
          {
            opacity: 0,
            y: 20,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.inOut",
          },
          0
        );
      }

      if (curvePathRef.current) {
        gsap.killTweensOf(curvePathRef.current);
      }

      const closeCurveObj = { val: 100 };
      closeTl.to(
        closeCurveObj,
        {
          val: 0,
          duration: WORK_OVERLAY_CURVE_CONFIG.closeCurveDuration,
          ease: WORK_OVERLAY_CURVE_CONFIG.closeCurveEase,
          onUpdate: () => {
            if (curvePathRef.current) {
              curvePathRef.current.setAttribute(
                "d",
                `M 0 100 Q 50 ${closeCurveObj.val} 100 100 L 100 100 L 0 100 Z`
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
            y: 160,
            duration: WORK_OVERLAY_CURVE_CONFIG.closeDuration,
            ease: WORK_OVERLAY_CURVE_CONFIG.closeEase,
            force3D: true,
            autoRound: false,
          },
          0
        );
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || isHidden) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Escape" &&
        isTopmostRef.current &&
        !isTransitioningRef.current &&
        !isReturningFromChildRef.current
      ) {
        handleClose();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (
        isTransitioningRef.current ||
        !isTopmostRef.current ||
        isReturningFromChildRef.current ||
        !containerRef.current
      ) {
        return;
      }
      const c = containerRef.current;
      if (c.scrollTop <= 0 && e.deltaY < -20) {
        e.preventDefault();
        handleClose();
        return;
      }
      const isAtBottom = c.scrollTop + c.clientHeight >= c.scrollHeight - 5;
      if (isAtBottom && e.deltaY > 20) {
        e.preventDefault();
        handleSeeNext();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (
        isTransitioningRef.current ||
        !isTopmostRef.current ||
        isReturningFromChildRef.current ||
        !containerRef.current
      ) {
        return;
      }
      const touchEndY = e.changedTouches[0].clientY;
      const swipeDistance = touchEndY - touchStartY;
      const c = containerRef.current;
      if (c.scrollTop <= 0 && swipeDistance > 50) {
        handleClose();
        return;
      }
      const isAtBottom = c.scrollTop + c.clientHeight >= c.scrollHeight - 5;
      if (isAtBottom && swipeDistance < -50) {
        handleSeeNext();
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
  }, [isOpen, isHidden, handleClose, handleSeeNext]);

  return (
    <div
      ref={wrapperRef}
      id="work-archive-wrapper"
      aria-hidden={!isOpen}
      className="fixed inset-0 z-[48] pointer-events-none overflow-visible select-none"
      style={{ display: "none" }}
    >
      <svg
        className="absolute -top-[99px] sm:-top-[139px] left-0 w-full h-[100px] sm:h-[140px] fill-[#E5DCCB] pointer-events-none overflow-visible z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={curvePathRef}
          d="M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z"
        />
      </svg>

      <div
        ref={containerRef}
        id="work-archive"
        tabIndex={-1}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        aria-hidden={!isOpen}
        className={`w-full h-full bg-[#E5DCCB] overscroll-contain select-none transform-gpu will-change-transform no-scrollbar outline-none pointer-events-auto overflow-y-auto touch-pan-y flex flex-col justify-between before:absolute before:-top-[2px] before:left-0 before:right-0 before:h-[3px] before:bg-[#E5DCCB] before:content-[''] before:pointer-events-none ${className}`}
        style={{
          WebkitOverflowScrolling: "touch",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          outline: "1px solid transparent",
        }}
      >
        <div className="w-full pt-16 sm:pt-28 lg:pt-32 px-6 sm:px-10 lg:px-16 pointer-events-auto shrink-0 flex justify-center text-center">
          <h2
            ref={titleRef}
            className="text-[clamp(2.25rem,5.5vw,5.5rem)] font-black tracking-tight text-neutral-950 select-none leading-none will-change-transform opacity-0 text-center"
          >
            All Works
          </h2>
        </div>

        <div
          ref={projectsRef}
          className="w-full flex-1 min-h-0 mt-6 sm:mt-16 md:mt-20 px-6 sm:px-10 lg:px-16 opacity-0 will-change-transform pointer-events-auto flex flex-col"
        >
          <div className="w-full flex-1 min-h-0 flex flex-col justify-around sm:h-full sm:grid sm:grid-rows-3">
            {ARCHIVE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="w-full border-t border-neutral-950/20 flex flex-col justify-center py-3.5 sm:py-3 lg:py-4 min-h-0"
              >
                <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                  <div className="flex items-center justify-between gap-3 sm:gap-6">
                    <h2 className="text-[clamp(1.35rem,3.2vw,3.75rem)] font-black tracking-tight text-neutral-950 select-none leading-tight sm:leading-none flex items-baseline sm:items-center">
                      <span className="font-mono text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral-400 font-bold mr-2 sm:mr-4 select-none shrink-0">
                        {project.index} —
                      </span>
                      <span className="transition-colors duration-200 hover:text-red-600">
                        {project.title}
                      </span>
                    </h2>
                    <TakeALookButton
                      id={`btn-view-site-${project.id}`}
                      label="View Site"
                      ariaLabel={`View site for ${project.title}`}
                      className="shrink-0"
                      onClick={() => {
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-start gap-y-2.5 gap-x-4 sm:gap-x-10 md:gap-x-14 select-none">
                    <div className="col-span-1 sm:w-[210px] md:w-[240px] sm:shrink-0">
                      <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
                        Site Status
                      </span>
                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold tracking-wider text-neutral-950 uppercase font-mono">
                        {project.status}
                      </p>
                    </div>
                    <div className="col-span-1 sm:w-[210px] md:w-[240px] sm:shrink-0">
                      <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
                        Role
                      </span>
                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold tracking-wider text-neutral-950 uppercase font-mono">
                        {project.role}
                      </p>
                    </div>
                    <div className="col-span-2 sm:col-span-1 sm:shrink-0">
                      <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
                        Stack
                      </span>
                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold tracking-wider text-neutral-950 uppercase font-mono">
                        {project.stack}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={paginationRef}
          className="w-full px-6 sm:px-10 lg:px-16 pt-4 sm:pt-5 pb-8 sm:pb-10 pointer-events-auto shrink-0 select-none opacity-0 will-change-transform flex justify-center"
        >
          <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage((p) => Math.max(1, p - 1));
              }}
              disabled={currentPage === 1}
              className={`transition-opacity ${
                currentPage === 1
                  ? "opacity-30 cursor-default"
                  : "opacity-80 hover:opacity-100 cursor-pointer"
              }`}
              aria-label="Previous page"
            >
              ←
            </button>
            <span className="text-neutral-950 font-bold tracking-wider">
              {String(currentPage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage((p) => Math.min(totalPages, p + 1));
              }}
              disabled={currentPage === totalPages}
              className={`transition-opacity ${
                currentPage === totalPages
                  ? "opacity-30 cursor-default"
                  : "opacity-80 hover:opacity-100 cursor-pointer"
              }`}
              aria-label="Next page"
            >
              →
            </button>
          </div>
        </div>

        {children}
      </div>

      <div
        className="absolute top-full left-0 right-0 h-[200vh] pointer-events-none -mt-px bg-[#E5DCCB]"
        aria-hidden="true"
      />
    </div>
  );
}
