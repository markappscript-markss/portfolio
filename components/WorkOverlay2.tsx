"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WORK_OVERLAY_CURVE_CONFIG } from "./WorkOverlay";
import SeeNextIndicator from "./SeeNextIndicator";

interface WorkOverlay2Props {
  isOpen: boolean;
  onClose?: () => void;
  onNextWork?: () => void;
  isTopmost?: boolean;
  isHidden?: boolean;
  children?: React.ReactNode;
}

export default function WorkOverlay2({
  isOpen,
  onClose,
  onNextWork,
  isTopmost = true,
  isHidden = false,
  children,
}: WorkOverlay2Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const isMountedRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const onNextWorkRef = useRef(onNextWork);
  const isTopmostRef = useRef(isTopmost);
  const isReturningFromChildRef = useRef(false);
  const isTriggeringNextWorkRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const wasHiddenRef = useRef(false);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (isHidden) {
      wasHiddenRef.current = true;
      gsap.killTweensOf(wrapperRef.current);
      gsap.set(wrapperRef.current, { autoAlpha: 0 });
    } else if (isOpen && isMountedRef.current) {
      if (wasHiddenRef.current) {
        const timer = setTimeout(() => {
          if (wrapperRef.current && isOpen) {
            gsap.set(wrapperRef.current, { autoAlpha: 1 });
            wasHiddenRef.current = false;
          }
        }, 1300);
        return () => clearTimeout(timer);
      } else {
        gsap.set(wrapperRef.current, { autoAlpha: 1 });
      }
    }
  }, [isHidden, isOpen]);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    onNextWorkRef.current = onNextWork;
  });

  useEffect(() => {
    isTopmostRef.current = isTopmost;
    if (!isTopmost) {
      isReturningFromChildRef.current = true;
    } else if (isReturningFromChildRef.current) {
      const timer = setTimeout(() => {
        isReturningFromChildRef.current = false;
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isTopmost]);

  const handleClose = () => {
    if (isTransitioningRef.current) return;
    onCloseRef.current?.();
  };

  const handleSeeNext = () => {
    if (isTriggeringNextWorkRef.current || !isTopmostRef.current || isTransitioningRef.current) return;
    isTriggeringNextWorkRef.current = true;
    onNextWorkRef.current?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-work3"));
    }
    setTimeout(() => {
      isTriggeringNextWorkRef.current = false;
    }, 1000);
  };

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
      if (!isOpen) return;
    }

    if (isOpen) {
      isTransitioningRef.current = true;
      document.body.style.overflow = "hidden";
      closeTlRef.current?.kill();

      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
        gsap.set(wrapperRef.current, { display: "block", autoAlpha: 1 });
      }
      if (curvePathRef.current) {
        gsap.killTweensOf(curvePathRef.current);
        curvePathRef.current.setAttribute("d", "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z");
      }

      const curveObj = { val: 0 };
      const openTl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
        },
      });
      openTlRef.current = openTl;

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

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          if (!isTopmostRef.current) return;
          handleClose();
        }
      };

      const handleWheel = (e: WheelEvent) => {
        if (!isTopmostRef.current || isReturningFromChildRef.current || isTransitioningRef.current || !containerRef.current) return;
        if (containerRef.current.scrollTop <= 0 && e.deltaY < -20) {
          e.preventDefault();
          handleClose();
          return;
        }
        if (e.deltaY > 15 && !isTriggeringNextWorkRef.current) {
          isTriggeringNextWorkRef.current = true;
          onNextWorkRef.current?.();
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("portfolio-view-work3"));
          }
          setTimeout(() => {
            isTriggeringNextWorkRef.current = false;
          }, 1000);
        }
      };

      let touchStartY = 0;
      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (!isTopmostRef.current || isReturningFromChildRef.current || isTransitioningRef.current || !containerRef.current) return;
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDown = touchEndY - touchStartY;
        const swipeUp = touchStartY - touchEndY;
        if (containerRef.current.scrollTop <= 0 && swipeDown > 50) {
          handleClose();
          return;
        }
        if (swipeUp > 40 && !isTriggeringNextWorkRef.current) {
          isTriggeringNextWorkRef.current = true;
          onNextWorkRef.current?.();
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("portfolio-view-work3"));
          }
          setTimeout(() => {
            isTriggeringNextWorkRef.current = false;
          }, 1000);
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
      isTransitioningRef.current = true;
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
        },
      });
      closeTlRef.current = closeTl;

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

  return (
    <div
      ref={wrapperRef}
      id="work-overlay-2-wrapper"
      aria-hidden={!isOpen}
      className="fixed inset-0 z-[45] pointer-events-none overflow-visible select-none"
      style={{ display: "none" }}
    >
      <svg
        className="absolute -top-[99px] sm:-top-[139px] left-0 w-full h-[100px] sm:h-[140px] fill-[#F4EFE6] pointer-events-none overflow-visible z-10"
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
        id="work-overlay-2"
        tabIndex={-1}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        aria-hidden={!isOpen}
        className="w-full h-full bg-[#F4EFE6] overflow-y-auto overscroll-contain select-none transform-gpu will-change-transform no-scrollbar outline-none pointer-events-auto before:absolute before:-top-[2px] before:left-0 before:right-0 before:h-[3px] before:bg-[#F4EFE6] before:content-[''] before:pointer-events-none"
        style={{
          WebkitOverflowScrolling: "touch",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          outline: "1px solid transparent",
        }}
      >
        <main className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 text-neutral-950">
          {children || (
            <div className="text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                WORK PRESENTATION 2
              </span>
              <h1 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-neutral-950">
                Next Project
              </h1>
            </div>
          )}

          <SeeNextIndicator
            id="see-next-work-2"
            isVisible={isOpen && isTopmost}
            onClick={handleSeeNext}
          />
        </main>
      </div>
    </div>
  );
}
