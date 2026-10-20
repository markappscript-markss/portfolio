"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TabletReveal from "@/components/TabletReveal";
import MacBookVideo from "@/components/MacBookVideo";
import IPhone3DScene from "@/components/iPhone3DScene";
import SeeNextIndicator from "@/components/SeeNextIndicator";

interface WorkOverlayProps {
  isOpen: boolean;
  onClose?: () => void;
  onTakeALook?: () => void;
  onNextWork?: () => void;
  hideBackButton?: boolean;
  isCovered?: boolean;
  children?: React.ReactNode;
}

function TakeALookButton({
  onClick,
  disabled = false,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isHoveredRef = useRef(false);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
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
    isHoveredRef.current = false;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.set(btnRef.current, {
        y: 0,
        scale: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      });
    }
    gsap.killTweensOf(lineProgress.current);
    lineProgress.current.head = 0;
    lineProgress.current.tail = 0;
    renderLine();
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.set(arrowRef.current, { rotate: 0, x: 0, y: 0 });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.set(textRef.current, { color: "rgba(0, 0, 0, 0.88)" });
    }
  };

  useEffect(() => {
    renderLine();
    resetHoverState();
    return () => {
      if (btnRef.current) gsap.killTweensOf(btnRef.current);
      gsap.killTweensOf(lineProgress.current);
      if (arrowRef.current) gsap.killTweensOf(arrowRef.current);
      if (textRef.current) gsap.killTweensOf(textRef.current);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!disabled && btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        if (isInside) {
          if (!isHoveredRef.current) {
            handleMouseEnter();
          }
        } else {
          if (isHoveredRef.current) {
            handleMouseLeave();
          }
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [disabled]);

  useEffect(() => {
    if (disabled) {
      resetHoverState();
      return;
    }

    let rafId: number;
    const startTime = performance.now();

    const checkCursorOverButton = () => {
      if (disabled || isHoveredRef.current) return;
      if (btnRef.current) {
        if (btnRef.current.matches(":hover")) {
          handleMouseEnter();
          return;
        }
        if (mousePosRef.current) {
          const rect = btnRef.current.getBoundingClientRect();
          if (
            mousePosRef.current.x >= rect.left &&
            mousePosRef.current.x <= rect.right &&
            mousePosRef.current.y >= rect.top &&
            mousePosRef.current.y <= rect.bottom
          ) {
            handleMouseEnter();
            return;
          }
        }
      }
      if (performance.now() - startTime < 1200) {
        rafId = requestAnimationFrame(checkCursorOverButton);
      }
    };

    rafId = requestAnimationFrame(checkCursorOverButton);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [disabled]);

  const handleMouseEnter = () => {
    if (disabled) return;
    if (isHoveredRef.current) return;
    isHoveredRef.current = true;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: -2,
        borderColor: "rgba(0, 0, 0, 0.45)",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
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

    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: -45,
        x: 3,
        y: -2,
        duration: 0.28,
        ease: "power2.out",
      });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: "#000000",
        duration: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isHoveredRef.current) return;
    isHoveredRef.current = false;
    if (disabled) return;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: 0,
        borderColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        duration: 0.25,
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

    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: "rgba(0, 0, 0, 0.88)",
        duration: 0.2,
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    resetHoverState();
    onClick?.();
  };

  const handleMouseDown = () => {
    if (disabled) return;
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 0.97,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const handleMouseUp = () => {
    if (disabled) return;
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
      id="btn-take-a-look"
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={() => {
        if (!disabled && !isHoveredRef.current) {
          handleMouseEnter();
        }
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`group relative inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-neutral-900 border border-neutral-900/20 text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)] select-none will-change-transform before:absolute before:-inset-1.5 before:content-[''] before:rounded-full before:pointer-events-auto ${disabled
        ? "pointer-events-none cursor-default select-none"
        : "pointer-events-auto cursor-pointer"
        }`}
      aria-label="Take a look"
      aria-hidden={disabled}
    >
      <div className="relative flex flex-col items-start pointer-events-none">
        <span ref={textRef} className="block tracking-wider text-neutral-900 whitespace-nowrap pointer-events-none">
          TAKE A LOOK
        </span>
        <div className="relative w-full h-[2px] mt-0.5 overflow-hidden rounded-[1px] pointer-events-none">
          <div className="absolute inset-0 bg-neutral-900/15" />
          <div
            ref={lineRef}
            className="absolute inset-0 bg-neutral-950 will-change-transform pointer-events-none"
            style={{
              clipPath: "inset(0 100% 0 0%)",
            }}
          />
        </div>
      </div>
      <span
        ref={arrowRef}
        className="inline-block shrink-0 text-[11px] sm:text-sm font-light text-neutral-950 will-change-transform pointer-events-none"
      >
        →
      </span>
    </button>
  );
}

export const WORK_OVERLAY_CURVE_CONFIG = {
  openDuration: 0.95,
  openEase: "power3.out",
  curveFlattenDelay: 0.08,
  curveFlattenDuration: 0.85,
  curveFlattenEase: "power2.inOut",
  closeDuration: 0.85,
  closeEase: "power3.inOut",
  closeCurveDuration: 0.45,
  closeCurveEase: "power2.out",
};

export default function WorkOverlay({
  isOpen,
  onClose,
  onTakeALook,
  onNextWork,
  hideBackButton = false,
  isCovered = false,
  children,
}: WorkOverlayProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const onNextWorkRef = useRef(onNextWork);
  const isTriggeringNextWorkRef = useRef(false);
  const coveredRef = useRef(false);
  if (isOpen) coveredRef.current = isCovered;
  const [active, setActive] = useState(false);
  const [isDeepDive, setIsDeepDive] = useState(false);
  const isDeepDiveRef = useRef(false);
  const [isDeepDiveNav, setIsDeepDiveNav] = useState(false);
  const [canTakeALook, setCanTakeALook] = useState(false);
  const canTakeALookRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const backBtnContainerRef = useRef<HTMLDivElement>(null);
  const triggerWhereRevealRef = useRef<(() => void) | null>(null);
  const triggerLandedRevealRef = useRef<(() => void) | null>(null);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const tabletContainerRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const blackSectionRef = useRef<HTMLDivElement>(null);
  const takeALookBtnWrapperRef = useRef<HTMLDivElement>(null);
  const whereTitleRef = useRef<HTMLHeadingElement>(null);
  const macbookContainerRef = useRef<HTMLDivElement>(null);
  const whereTextRef = useRef<HTMLDivElement>(null);
  const hasRevealedWhereRef = useRef(false);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const parallaxVideoRef = useRef<HTMLVideoElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const landedTitleRef = useRef<HTMLHeadingElement>(null);
  const hasRevealedLandedRef = useRef(false);
  const hasRevealedLandedTextRef = useRef(false);
  const landedTextRef = useRef<HTMLDivElement>(null);
  const [isIPhoneRevealed, setIsIPhoneRevealed] = useState(false);
  const landedTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    onNextWorkRef.current = onNextWork;
  });

  useEffect(() => {
    isDeepDiveRef.current = isDeepDive;
  }, [isDeepDive]);

  useEffect(() => {
    if (!backBtnContainerRef.current) return;
    if (hideBackButton) {
      gsap.killTweensOf(backBtnContainerRef.current);
      gsap.to(backBtnContainerRef.current, {
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    } else if (isOpen) {
      gsap.killTweensOf(backBtnContainerRef.current);
      gsap.to(backBtnContainerRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hideBackButton, isOpen]);

  useEffect(() => {
    canTakeALookRef.current = canTakeALook;
  }, [canTakeALook]);

  useEffect(() => {
    if (!isDeepDive) {
      hasRevealedWhereRef.current = false;
      hasRevealedLandedRef.current = false;
      hasRevealedLandedTextRef.current = false;
      setIsIPhoneRevealed(false);
      if (landedTimelineRef.current) {
        landedTimelineRef.current.kill();
        landedTimelineRef.current = null;
      }
      if (whereTitleRef.current) {
        const words = whereTitleRef.current.querySelectorAll(".where-word");
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (landedTitleRef.current) {
        const words = landedTitleRef.current.querySelectorAll(".landed-word");
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (macbookContainerRef.current) {
        gsap.set(macbookContainerRef.current, { opacity: 0, y: 24 });
      }
      if (whereTextRef.current) {
        gsap.set(whereTextRef.current, { opacity: 0, y: 20 });
      }
      if (landedTextRef.current) {
        gsap.set(landedTextRef.current, { opacity: 0, y: 24 });
      }
      return;
    }

    const titleEl = whereTitleRef.current;
    const landedTitleEl = landedTitleRef.current;
    const landedTextEl = landedTextRef.current;
    const container = containerRef.current;
    if (!titleEl || !container) return;

    const words = titleEl.querySelectorAll(".where-word");
    gsap.set(words, { yPercent: 115, opacity: 0 });
    if (landedTitleEl) {
      const landedWords = landedTitleEl.querySelectorAll(".landed-word");
      gsap.set(landedWords, { yPercent: 115, opacity: 0 });
    }
    if (macbookContainerRef.current) {
      gsap.set(macbookContainerRef.current, { opacity: 0, y: 24 });
    }
    if (whereTextRef.current) {
      gsap.set(whereTextRef.current, { opacity: 0, y: 20 });
    }
    if (landedTextEl) {
      gsap.set(landedTextEl, { opacity: 0, y: 24 });
    }

    const triggerWhereReveal = () => {
      if (hasRevealedWhereRef.current) return;
      hasRevealedWhereRef.current = true;
      const tl = gsap.timeline();
      tl.fromTo(
        words,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.08,
          ease: "power4.out",
          force3D: true,
        }
      );
      if (macbookContainerRef.current) {
        tl.fromTo(
          macbookContainerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.35"
        );
      }
      if (whereTextRef.current) {
        tl.fromTo(
          whereTextRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.1"
        );
      }
    };

    const triggerLandedReveal = () => {
      if (hasRevealedLandedRef.current) return;
      hasRevealedLandedRef.current = true;
      hasRevealedLandedTextRef.current = true;
      if (!landedTitleEl) return;
      const landedWords = landedTitleEl.querySelectorAll(".landed-word");
      if (landedTimelineRef.current) {
        landedTimelineRef.current.kill();
      }
      const tl = gsap.timeline({ delay: 0.1 });
      landedTimelineRef.current = tl;
      tl.fromTo(
        landedWords,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          force3D: true,
        }
      );
      if (landedTextRef.current) {
        tl.fromTo(
          landedTextRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.2"
        );
      }
      tl.call(
        () => {
          setIsIPhoneRevealed(true);
        },
        undefined,
        "-=0.15"
      );
    };

    triggerWhereRevealRef.current = triggerWhereReveal;
    triggerLandedRevealRef.current = triggerLandedReveal;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleEl && entry.isIntersecting) {
            triggerWhereReveal();
          }
          if (landedTitleEl && entry.target === landedTitleEl && entry.isIntersecting) {
            triggerLandedReveal();
          }
        });
      },
      {
        root: container,
        threshold: 0.05,
        rootMargin: "0px 0px 60px 0px",
      }
    );

    observer.observe(titleEl);
    if (landedTitleEl) {
      observer.observe(landedTitleEl);
    }

    return () => {
      observer.disconnect();
      triggerWhereRevealRef.current = null;
      triggerLandedRevealRef.current = null;
      if (landedTimelineRef.current) {
        landedTimelineRef.current.kill();
        landedTimelineRef.current = null;
      }
      if (whereTitleRef.current) {
        const words = whereTitleRef.current.querySelectorAll(".where-word");
        gsap.killTweensOf(words);
      }
      if (landedTitleRef.current) {
        const landedWords = landedTitleRef.current.querySelectorAll(".landed-word");
        gsap.killTweensOf(landedWords);
      }
      if (macbookContainerRef.current) {
        gsap.killTweensOf(macbookContainerRef.current);
      }
      if (whereTextRef.current) {
        gsap.killTweensOf(whereTextRef.current);
      }
      if (landedTextRef.current) {
        gsap.killTweensOf(landedTextRef.current);
      }
    };
  }, [isDeepDive]);

  useEffect(() => {
    const v = parallaxVideoRef.current;
    if (!v) return;
    if (isDeepDive) {
      v.play().catch(() => { });
    } else {
      v.pause();
    }
  }, [isDeepDive]);

  useEffect(() => {
    let targetScroll = 0;
    let currentScroll = 0;
    let rafId: number | null = null;
    let isRunning = false;
    let sectionTop = 0;
    let sectionHeight = 0;
    let containerHeight = 0;

    const measure = () => {
      const container = containerRef.current;
      const section = videoSectionRef.current;
      if (!container || !section) return;
      const sRect = section.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      sectionTop = sRect.top - cRect.top + container.scrollTop;
      sectionHeight = section.offsetHeight;
      containerHeight = container.clientHeight;
    };

    let lastNextY = -99999;
    let lastVideoY = -99999;
    let lastRevealCheck = 0;

    const updateParallax = (scrollTop: number) => {
      const container = containerRef.current;
      const currentDist = scrollTop + containerHeight - sectionTop;
      const totalDist = sectionHeight + containerHeight;
      const progress = totalDist > 0 ? Math.max(0, Math.min(1, currentDist / totalDist)) : 0;

      if (parallaxVideoRef.current) {
        const travel = sectionHeight * 0.03;
        const vy = (0.5 - progress) * 2 * travel;
        if (Math.abs(vy - lastVideoY) > 0.05) {
          lastVideoY = vy;
          gsap.set(parallaxVideoRef.current, { y: vy, force3D: true });
        }
      }

      if (nextSectionRef.current && container) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        const remainingToBottom = maxScroll > 0 ? Math.max(0, maxScroll - scrollTop) : 0;
        const atBottom = remainingToBottom < 2;
        const rawOffset = atBottom ? 0 : Math.max(0, (progress - 0.45) * 150);
        const bottomSpan = Math.max(1, rawOffset);
        const ratio = Math.min(1, remainingToBottom / bottomSpan);
        const bottomFactor = ratio * ratio * (3 - 2 * ratio);
        const nextY = atBottom ? 0 : -Math.min(rawOffset * bottomFactor, remainingToBottom);

        if (Math.abs(nextY - lastNextY) > 0.05) {
          lastNextY = nextY;
          gsap.set(nextSectionRef.current, {
            y: nextY,
            force3D: true,
          });
        }
      }

      const nowMs = performance.now();
      if (nowMs - lastRevealCheck > 150) {
        lastRevealCheck = nowMs;
        if (!hasRevealedWhereRef.current && whereTitleRef.current) {
          const rect = whereTitleRef.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.95 && rect.bottom >= 0) {
            triggerWhereRevealRef.current?.();
          }
        }

        if (!hasRevealedLandedRef.current && landedTitleRef.current) {
          const rect = landedTitleRef.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.95 && rect.bottom >= 0) {
            triggerLandedRevealRef.current?.();
          }
        }
      }
    };

    let lastFrameTime = 0;

    const loop = (time: number) => {
      const container = containerRef.current;
      if (!isDeepDiveRef.current || isTransitioningRef.current || !container) {
        isRunning = false;
        lastFrameTime = 0;
        return;
      }

      if (!lastFrameTime) lastFrameTime = time;
      const dt = Math.min((time - lastFrameTime) / 1000, 0.1);
      lastFrameTime = time;

      const diff = targetScroll - currentScroll;
      if (Math.abs(diff) > 0.1) {
        const factor = 1 - Math.exp(-9.5 * dt);
        currentScroll += diff * factor;
        container.scrollTop = currentScroll;
        updateParallax(currentScroll);
        rafId = requestAnimationFrame(loop);
      } else {
        currentScroll = targetScroll;
        container.scrollTop = currentScroll;
        updateParallax(currentScroll);
        isRunning = false;
        lastFrameTime = 0;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isDeepDiveRef.current || isTransitioningRef.current || !containerRef.current) {
        if (isTransitioningRef.current || isOpen) {
          e.preventDefault();
        }
        if (
          isOpen &&
          !isDeepDiveRef.current &&
          !isTriggeringNextWorkRef.current &&
          e.deltaY > 15
        ) {
          isTriggeringNextWorkRef.current = true;
          onNextWorkRef.current?.();
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("portfolio-view-work2"));
          }
          setTimeout(() => {
            isTriggeringNextWorkRef.current = false;
          }, 1000);
        }
        return;
      }

      const container = containerRef.current;
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      e.preventDefault();

      if (!isRunning) {
        measure();
        currentScroll = container.scrollTop;
        targetScroll = container.scrollTop;
        lastFrameTime = 0;
      }

      let delta = e.deltaY;
      if (e.deltaMode === 1) {
        delta *= 32;
      } else if (e.deltaMode === 2) {
        delta *= containerHeight;
      }

      targetScroll = Math.max(0, Math.min(targetScroll + delta, maxScroll));

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const handleNativeScroll = () => {
      if (!isRunning && containerRef.current) {
        currentScroll = containerRef.current.scrollTop;
        targetScroll = currentScroll;
        updateParallax(currentScroll);
      }
    };

    const handleResize = () => {
      measure();
      if (containerRef.current) {
        updateParallax(containerRef.current.scrollTop);
      }
    };

    if (isDeepDive) {
      measure();
      if (videoSectionRef.current) {
        gsap.set(videoSectionRef.current, { y: 0 });
      }
      if (nextSectionRef.current) {
        gsap.set(nextSectionRef.current, { y: 0 });
      }
      if (containerRef.current) {
        currentScroll = containerRef.current.scrollTop;
        targetScroll = containerRef.current.scrollTop;
        updateParallax(currentScroll);
      }
    }

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (
        !isOpen ||
        isDeepDiveRef.current ||
        isTriggeringNextWorkRef.current
      ) {
        return;
      }
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (deltaY > 40) {
        isTriggeringNextWorkRef.current = true;
        onNextWorkRef.current?.();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("portfolio-view-work2"));
        }
        setTimeout(() => {
          isTriggeringNextWorkRef.current = false;
        }, 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleNativeScroll, { passive: true });
    }
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleNativeScroll);
      }
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (videoSectionRef.current) gsap.set(videoSectionRef.current, { y: 0 });
      if (parallaxVideoRef.current) gsap.set(parallaxVideoRef.current, { y: 0, scale: 1 });
      if (nextSectionRef.current) gsap.set(nextSectionRef.current, { y: 0 });
    };
  }, [isDeepDive, isOpen]);

  const handleBack = () => {
    if (isDeepDiveRef.current) {
      handleBackToExplore();
      return;
    }
    if (onCloseRef.current) {
      onCloseRef.current();
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-trigger-main"));
    }
  };

  const handleSeeNext = () => {
    if (isTriggeringNextWorkRef.current || isDeepDiveRef.current) return;
    isTriggeringNextWorkRef.current = true;
    onNextWorkRef.current?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-work2"));
    }
    setTimeout(() => {
      isTriggeringNextWorkRef.current = false;
    }, 1000);
  };

  const getResponsiveSettings = () => {
    if (typeof window === "undefined") {
      return {
        scale: 0.91,
        x: "-10.8vw",
        y: 12,
        contentY: 12,
        heroHeight: "53vh",
      };
    }
    const w = window.innerWidth;
    if (w >= 1440) {
      return {
        scale: 0.91,
        x: "-10.8vw",
        y: 12,
        contentY: 12,
        heroHeight: "53vh",
      };
    } else if (w >= 1024) {
      return {
        scale: 0.91,
        x: "-10.8vw",
        y: 12,
        contentY: 12,
        heroHeight: "53vh",
      };
    } else if (w >= 768) {
      return {
        scale: 0.88,
        x: "-6.6vw",
        y: 8,
        contentY: 8,
        heroHeight: "55vh",
      };
    } else {
      return {
        scale: w < 480 ? 0.72 : 0.8,
        x: "0px",
        y: 4,
        contentY: 4,
        heroHeight: "55vh",
      };
    }
  };

  const handleTakeALook = () => {
    if (onTakeALook) {
      onTakeALook();
      return;
    }
    if (isTransitioningRef.current || !canTakeALookRef.current || isDeepDiveRef.current) return;

    isTransitioningRef.current = true;
    setCanTakeALook(false);
    canTakeALookRef.current = false;

    setIsDeepDive(true);
    isDeepDiveRef.current = true;
    setIsDeepDiveNav(true);
    setIsIPhoneRevealed(false);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-deepdive-enter"));
    }

    if (containerRef.current) {
      containerRef.current.style.overflowY = "hidden";
      containerRef.current.scrollTop = 0;
      containerRef.current.focus();
    }

    const responsive = getResponsiveSettings();

    const header = document.getElementById("header-nav");
    if (header) {
      gsap.killTweensOf(header);
      gsap.to(header, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.95,
        ease: "power2.inOut",
      });
    }

    if (backBtnContainerRef.current) {
      gsap.killTweensOf(backBtnContainerRef.current);
      gsap.to(backBtnContainerRef.current, {
        y: 0,
        duration: 0.95,
        ease: "power2.inOut",
      });
    }

    if (heroSectionRef.current) {
      gsap.killTweensOf(heroSectionRef.current);
      gsap.to(heroSectionRef.current, {
        height: responsive.heroHeight,
        minHeight: responsive.heroHeight,
        maxHeight: responsive.heroHeight,
        paddingTop: "1.5rem",
        paddingBottom: "0.5rem",
        duration: 1.15,
        ease: "power3.inOut",
        onComplete: () => {
          isTransitioningRef.current = false;
          if (containerRef.current) {
            containerRef.current.style.overflowY = "auto";
          }
        },
      });
    }

    if (tabletContainerRef.current) {
      gsap.killTweensOf(tabletContainerRef.current);
      gsap.to(tabletContainerRef.current, {
        scale: responsive.scale,
        x: responsive.x,
        y: responsive.y,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (rightContentRef.current) {
      gsap.killTweensOf(rightContentRef.current);
      gsap.to(rightContentRef.current, {
        y: responsive.contentY,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (takeALookBtnWrapperRef.current) {
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.to(takeALookBtnWrapperRef.current, {
        autoAlpha: 0,
        y: 12,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          if (takeALookBtnWrapperRef.current) {
            takeALookBtnWrapperRef.current.style.display = "none";
            takeALookBtnWrapperRef.current.style.pointerEvents = "none";
          }
        },
      });
    }

    if (blackSectionRef.current) {
      gsap.killTweensOf(blackSectionRef.current);
      gsap.set(blackSectionRef.current, { y: 0, opacity: 1 });
    }
  };

  const handleBackToExplore = () => {
    if (isTransitioningRef.current) return;

    const currentScrollTop = containerRef.current?.scrollTop || 0;
    const isScrolledDown = currentScrollTop > 20;

    isTransitioningRef.current = true;

    const isLarge = typeof window !== "undefined" && window.innerWidth >= 1024;
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 768;
    const targetX = isLarge ? "-13vw" : isTablet ? "-8vw" : "0px";

    if (isScrolledDown && fadeOverlayRef.current) {
      gsap.killTweensOf(fadeOverlayRef.current);
      gsap.fromTo(
        fadeOverlayRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.inOut",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.scrollTop = 0;
              containerRef.current.style.overflowY = "hidden";
            }

            setIsDeepDive(false);
            isDeepDiveRef.current = false;
            setIsDeepDiveNav(false);
            setIsIPhoneRevealed(false);
            setCanTakeALook(true);
            canTakeALookRef.current = true;
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("portfolio-deepdive-exit"));
            }

            if (heroSectionRef.current) {
              gsap.killTweensOf(heroSectionRef.current);
              gsap.set(heroSectionRef.current, {
                minHeight: "100dvh",
                height: "100dvh",
                maxHeight: "none",
                paddingTop: "0rem",
                paddingBottom: "0rem",
              });
            }

            if (tabletContainerRef.current) {
              gsap.killTweensOf(tabletContainerRef.current);
              gsap.set(tabletContainerRef.current, {
                scale: 1,
                x: targetX,
                y: 0,
                opacity: 1,
              });
            }

            if (rightContentRef.current) {
              gsap.killTweensOf(rightContentRef.current);
              gsap.set(rightContentRef.current, { y: 0, opacity: 1 });
            }

            if (blackSectionRef.current) {
              gsap.killTweensOf(blackSectionRef.current);
              gsap.set(blackSectionRef.current, { y: 0, opacity: 1 });
            }

            const header = document.getElementById("header-nav");
            if (header) {
              gsap.killTweensOf(header);
              gsap.set(header, { yPercent: 0, autoAlpha: 1 });
            }

            if (backBtnContainerRef.current) {
              const targetY = typeof window !== "undefined" && window.innerWidth < 640 ? 64 : 72;
              gsap.killTweensOf(backBtnContainerRef.current);
              gsap.set(backBtnContainerRef.current, { y: targetY });
            }

            if (takeALookBtnWrapperRef.current) {
              takeALookBtnWrapperRef.current.style.display = "block";
              takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
              takeALookBtnWrapperRef.current.style.visibility = "visible";
              gsap.killTweensOf(takeALookBtnWrapperRef.current);
              gsap.fromTo(
                takeALookBtnWrapperRef.current,
                { autoAlpha: 0, y: 12 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.45,
                  ease: "power2.out",
                  delay: 0.1,
                }
              );
            }

            if (fadeOverlayRef.current) {
              gsap.to(fadeOverlayRef.current, {
                autoAlpha: 0,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.05,
                onComplete: () => {
                  isTransitioningRef.current = false;
                },
              });
            } else {
              isTransitioningRef.current = false;
            }
          },
        }
      );
      return;
    }

    if (containerRef.current) {
      containerRef.current.style.overflowY = "hidden";
      containerRef.current.scrollTop = 0;
    }

    isDeepDiveRef.current = false;
    setIsDeepDiveNav(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-deepdive-exit"));
    }

    if (blackSectionRef.current) {
      gsap.killTweensOf(blackSectionRef.current);
      gsap.set(blackSectionRef.current, { y: 0, opacity: 1 });
    }

    const header = document.getElementById("header-nav");
    if (header) {
      gsap.killTweensOf(header);
      gsap.to(header, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.95,
        ease: "power2.inOut",
        delay: 0.05,
      });
    }

    if (backBtnContainerRef.current) {
      const targetY = typeof window !== "undefined" && window.innerWidth < 640 ? 64 : 72;
      gsap.killTweensOf(backBtnContainerRef.current);
      gsap.to(backBtnContainerRef.current, {
        y: targetY,
        duration: 0.95,
        ease: "power2.inOut",
        delay: 0.05,
      });
    }

    if (heroSectionRef.current) {
      gsap.killTweensOf(heroSectionRef.current);
      gsap.to(heroSectionRef.current, {
        minHeight: "100dvh",
        height: "100dvh",
        maxHeight: "none",
        paddingTop: "0rem",
        paddingBottom: "0rem",
        duration: 1.15,
        ease: "power3.inOut",
        onComplete: () => {
          setIsDeepDive(false);
          isDeepDiveRef.current = false;
          setIsIPhoneRevealed(false);
          isTransitioningRef.current = false;
          setCanTakeALook(true);
          canTakeALookRef.current = true;
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
            containerRef.current.style.overflowY = "hidden";
          }
          if (takeALookBtnWrapperRef.current) {
            takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
          }
        },
      });
    }

    if (tabletContainerRef.current) {
      gsap.killTweensOf(tabletContainerRef.current);
      gsap.to(tabletContainerRef.current, {
        scale: 1,
        x: targetX,
        y: 0,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (rightContentRef.current) {
      gsap.killTweensOf(rightContentRef.current);
      gsap.to(rightContentRef.current, {
        y: 0,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (takeALookBtnWrapperRef.current) {
      takeALookBtnWrapperRef.current.style.display = "block";
      takeALookBtnWrapperRef.current.style.pointerEvents = "none";
      takeALookBtnWrapperRef.current.style.visibility = "visible";
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.fromTo(
        takeALookBtnWrapperRef.current,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.35,
        }
      );
    }
  };

  useEffect(() => {
    const handleDeepDiveBack = () => {
      if (isOpen && isDeepDiveRef.current) {
        handleBackToExplore();
      }
    };
    window.addEventListener("portfolio-deepdive-back", handleDeepDiveBack);
    return () => {
      window.removeEventListener("portfolio-deepdive-back", handleDeepDiveBack);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isDeepDive) return;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleWindowResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!tabletContainerRef.current || !heroSectionRef.current || isTransitioningRef.current) return;
        const responsive = getResponsiveSettings();
        gsap.to(tabletContainerRef.current, {
          scale: responsive.scale,
          x: responsive.x,
          y: responsive.y,
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(heroSectionRef.current, {
          height: responsive.heroHeight,
          minHeight: responsive.heroHeight,
          maxHeight: responsive.heroHeight,
          duration: 0.35,
          ease: "power2.out",
        });
        if (rightContentRef.current) {
          gsap.to(rightContentRef.current, {
            y: responsive.contentY,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      }, 100);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isOpen, isDeepDive]);

  const handleTabletSpinComplete = () => {
    if (!tabletContainerRef.current) return;
    const isLarge = typeof window !== "undefined" && window.innerWidth >= 1024;
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 768;
    const targetX = isLarge ? "-13vw" : isTablet ? "-8vw" : "0px";

    gsap.to(tabletContainerRef.current, {
      x: targetX,
      duration: 1.1,
      ease: "power3.inOut",
      force3D: true,
    });

    if (isDeepDiveRef.current) return;

    setCanTakeALook(true);
    canTakeALookRef.current = true;

    if (rightContentRef.current) {
      const items = rightContentRef.current.querySelectorAll(".reveal-text");
      gsap.killTweensOf(items);
      gsap.fromTo(
        items,
        { opacity: 0, y: 24, force3D: true },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.1,
          force3D: true,
        }
      );
    }

    if (!isDeepDiveRef.current && takeALookBtnWrapperRef.current) {
      takeALookBtnWrapperRef.current.style.display = "block";
      takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
      takeALookBtnWrapperRef.current.style.visibility = "visible";
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.fromTo(
        takeALookBtnWrapperRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          delay: 0.18,
          onComplete: () => {
            if (takeALookBtnWrapperRef.current) {
              takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
            }
          },
        }
      );
    }
  };

  useEffect(() => {
    if (active && tabletContainerRef.current) {
      gsap.killTweensOf(tabletContainerRef.current);
      gsap.set(tabletContainerRef.current, { x: 0, scale: 1, y: 0 });
      gsap.fromTo(
        tabletContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out", force3D: true }
      );
    }
    if (rightContentRef.current) {
      const items = rightContentRef.current.querySelectorAll(".reveal-text");
      gsap.killTweensOf(rightContentRef.current);
      gsap.set(rightContentRef.current, { y: 0, opacity: 1, pointerEvents: "auto" });
      gsap.killTweensOf(items);
      gsap.set(items, { opacity: 0, y: 24 });
    }
    setCanTakeALook(false);
    canTakeALookRef.current = false;
    if (takeALookBtnWrapperRef.current) {
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.set(takeALookBtnWrapperRef.current, { autoAlpha: 0, y: 24 });
      takeALookBtnWrapperRef.current.style.display = "none";
      takeALookBtnWrapperRef.current.style.pointerEvents = "none";
    }
  }, [active]);

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
      if (backBtnContainerRef.current) {
        const initialY = typeof window !== "undefined" && window.innerWidth < 640 ? 64 : 72;
        gsap.set(backBtnContainerRef.current, { y: initialY, autoAlpha: isOpen ? 1 : 0 });
      }
      if (!isOpen) return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCanTakeALook(false);
      canTakeALookRef.current = false;
      isTriggeringNextWorkRef.current = false;
      if (takeALookBtnWrapperRef.current) {
        gsap.killTweensOf(takeALookBtnWrapperRef.current);
        gsap.set(takeALookBtnWrapperRef.current, { autoAlpha: 0, y: 24 });
        takeALookBtnWrapperRef.current.style.display = "none";
        takeALookBtnWrapperRef.current.style.pointerEvents = "none";
      }
      if (fadeOverlayRef.current) {
        gsap.killTweensOf(fadeOverlayRef.current);
        gsap.set(fadeOverlayRef.current, { autoAlpha: 0 });
      }

      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
        gsap.set(wrapperRef.current, { display: "block", autoAlpha: 1 });
      }
      if (curvePathRef.current) {
        gsap.killTweensOf(curvePathRef.current);
        curvePathRef.current.setAttribute("d", "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z");
      }

      if (backBtnContainerRef.current) {
        const initialY = typeof window !== "undefined" && window.innerWidth < 640 ? 64 : 72;
        gsap.killTweensOf(backBtnContainerRef.current);
        gsap.set(backBtnContainerRef.current, { y: initialY });
        gsap.fromTo(
          backBtnContainerRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4, delay: 0.35, ease: "power2.out" }
        );
      }

      closeTlRef.current?.kill();

      const curveObj = { val: 0 };
      const openTl = gsap.timeline({
        onComplete: () => {
          setActive(true);
        },
      });
      openTlRef.current = openTl;
      openTl.call(() => setActive(true), [], 0.05);

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
          if (isDeepDiveRef.current) {
            handleBackToExplore();
          } else {
            handleBack();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      setCanTakeALook(false);
      canTakeALookRef.current = false;

      const header = document.getElementById("header-nav");
      if (header) {
        gsap.to(header, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      }

      setIsDeepDive(false);
      isDeepDiveRef.current = false;
      setIsDeepDiveNav(false);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("portfolio-deepdive-exit"));
      }

      if (backBtnContainerRef.current) {
        gsap.killTweensOf(backBtnContainerRef.current);
        gsap.to(backBtnContainerRef.current, { autoAlpha: 0, duration: 0.25, ease: "power2.in" });
      }

      if (tabletContainerRef.current) {
        gsap.to(tabletContainerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
      if (rightContentRef.current) {
        const items = rightContentRef.current.querySelectorAll(".reveal-text");
        gsap.to(items, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      }
      if (takeALookBtnWrapperRef.current) {
        gsap.killTweensOf(takeALookBtnWrapperRef.current);
        gsap.set(takeALookBtnWrapperRef.current, { autoAlpha: 0, y: 24 });
        takeALookBtnWrapperRef.current.style.display = "none";
        takeALookBtnWrapperRef.current.style.pointerEvents = "none";
      }

      if (coveredRef.current) setActive(false);

      openTlRef.current?.kill();

      const closeTl = gsap.timeline({
        onComplete: () => {
          if (fadeOverlayRef.current) {
            gsap.killTweensOf(fadeOverlayRef.current);
            gsap.set(fadeOverlayRef.current, { autoAlpha: 0 });
          }
          if (wrapperRef.current) {
            gsap.set(wrapperRef.current, { autoAlpha: 0, display: "none", yPercent: 100, y: 160 });
          }
          if (curvePathRef.current) {
            curvePathRef.current.setAttribute("d", "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z");
          }
          if (backBtnContainerRef.current) {
            gsap.set(backBtnContainerRef.current, { autoAlpha: 0 });
          }
          if (containerRef.current) {
            containerRef.current.style.top = "";
            containerRef.current.scrollTop = 0;
          }
          if (heroSectionRef.current) {
            gsap.set(heroSectionRef.current, {
              clearProps: "minHeight,height,maxHeight,paddingTop,paddingBottom",
            });
          }
          if (tabletContainerRef.current) {
            gsap.set(tabletContainerRef.current, { x: 0, scale: 1, y: 0, opacity: 0 });
          }
          if (rightContentRef.current) {
            const items = rightContentRef.current.querySelectorAll(".reveal-text");
            gsap.set(rightContentRef.current, { y: 0, opacity: 1, pointerEvents: "auto" });
            gsap.set(items, { opacity: 0, y: 24 });
          }
          if (takeALookBtnWrapperRef.current) {
            gsap.set(takeALookBtnWrapperRef.current, { autoAlpha: 0, y: 24 });
            takeALookBtnWrapperRef.current.style.display = "none";
            takeALookBtnWrapperRef.current.style.pointerEvents = "none";
          }
          if (videoSectionRef.current) {
            gsap.set(videoSectionRef.current, { y: 0 });
          }
          if (nextSectionRef.current) {
            gsap.set(nextSectionRef.current, { y: 0 });
          }
          setCanTakeALook(false);
          canTakeALookRef.current = false;
          setActive(false);
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
    <>

      <div
        ref={fadeOverlayRef}
        className="fixed inset-0 z-[60] bg-white pointer-events-none"
        style={{ opacity: 0, visibility: "hidden" }}
      />

      <div
        ref={wrapperRef}
        id="work-overlay-wrapper"
        aria-hidden={!isOpen}
        className="fixed inset-0 z-40 pointer-events-none overflow-visible select-none"
        style={{ display: "none" }}
      >
        <svg
          className="absolute -top-[99px] sm:-top-[139px] left-0 w-full h-[100px] sm:h-[140px] fill-white pointer-events-none overflow-visible z-10"
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
          id="work-overlay"
          tabIndex={-1}
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          aria-hidden={!isOpen}
          className={`w-full h-full bg-white overscroll-contain pointer-events-auto no-scrollbar outline-none ${isDeepDive ? "overflow-y-auto touch-pan-y" : "overflow-hidden touch-none"
            }`}
          style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "none" }}
        >
          <div
            ref={heroSectionRef}
            className="relative w-full min-h-dvh h-dvh flex flex-col items-center justify-center overflow-hidden bg-white"
          >
            <div
              ref={tabletContainerRef}
              className="h-[80vh] sm:h-[82vh] w-full shrink-0 flex items-center justify-center opacity-0 will-change-transform pointer-events-none"
            >
              <TabletReveal showReplay={false} active={active} onComplete={handleTabletSpinComplete} scale={1.26} />
            </div>

            <div
              className="w-full md:w-auto md:absolute md:top-[44%] md:left-[65%] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center text-center z-30 px-6 pb-20 md:px-0 md:pb-0 pointer-events-auto"
            >
              <div
                ref={rightContentRef}
                className="relative flex flex-col items-center text-center"
              >
                <h2 className="reveal-text opacity-0 font-black tracking-tight text-neutral-950 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.08] select-none">
                  <span className="block whitespace-nowrap">Portfolio,</span>
                  <span className="block whitespace-nowrap">
                    <span className="text-red-600">Reloaded</span>.
                  </span>
                </h2>
                <p className="reveal-text opacity-0 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-sans font-medium tracking-tight select-none">
                  Same me. Completely rebuilt.
                </p>

                <div
                  ref={takeALookBtnWrapperRef}
                  style={{
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translateY(24px)",
                    pointerEvents: "none",
                    display: "none",
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-6 sm:pt-8 whitespace-nowrap z-30"
                >
                  <TakeALookButton
                    onClick={handleTakeALook}
                    disabled={!canTakeALook || isDeepDive}
                  />
                </div>
              </div>
            </div>

            <SeeNextIndicator
              id="see-next-work-1"
              isVisible={isOpen && active && !isDeepDive}
              onClick={handleSeeNext}
            />
          </div>

          <div
            ref={blackSectionRef}
            className={`w-full bg-white relative z-30 -mt-px ${isDeepDive ? "block" : "hidden"
              }`}
          >
            <div className="w-full bg-neutral-950 text-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-16 sm:pb-24">
                <div className="flex flex-wrap items-start gap-10 sm:gap-14 md:gap-20 lg:gap-24 pb-12 border-b border-white/10 select-none">
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      PLATFORM
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      WEB
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      ROLE
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      FRONT AND BACK END DEVELOPER
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      STACK
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      NEXT | THREE | GSAP
                    </p>
                  </div>
                </div>

                <div className="mt-12 sm:mt-16 max-w-4xl">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white leading-relaxed tracking-tight select-none">
                    <span className="text-red-500 font-semibold">Portfolio, Reloaded</span> — A complete rebuild of my personal site, designed to feel more like an interactive space than a static page. Motion and interaction drive the experience alongside the work itself, with responsive details tuned to feel smooth and deliberate rather than flashy.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans max-w-3xl select-none">
                    Built with Next.js and Three.js, focusing on tight animation timing, fluid transitions, and consistent performance across desktop and mobile.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white text-neutral-950 relative z-20 shadow-[0_30px_70px_rgba(0,0,0,0.22)] min-h-[90vh]">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 sm:pt-36 md:pt-48 lg:pt-52 pb-20 sm:pb-28 md:pb-36 lg:pb-40">
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h2
                    ref={whereTitleRef}
                    className="font-black tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] select-none whitespace-nowrap"
                  >
                    <span className="inline-block overflow-hidden py-1 mr-[0.26em]">
                      <span className="where-word inline-block will-change-transform opacity-0">
                        The
                      </span>
                    </span>
                    <span className="inline-block overflow-hidden py-1">
                      <span className="where-word inline-block will-change-transform opacity-0">
                        Prototype
                      </span>
                    </span>
                  </h2>
                </div>

                {(
                  <div className="relative w-full flex flex-col md:block select-none mb-4 sm:mb-6">
                    <div
                      ref={whereTextRef}
                      className="relative md:absolute md:top-14 lg:top-20 xl:top-24 md:left-0 z-10 w-full md:max-w-[215px] lg:max-w-[230px] xl:max-w-[255px] pointer-events-auto opacity-0 will-change-transform mb-8 md:mb-0"
                    >
                      <p className="text-base sm:text-lg lg:text-[19px] font-sans font-normal text-neutral-900 leading-[1.65] tracking-tight select-none">
                        Monotone and overly dark, the original UI suffered from stuttering animations that created unnecessary friction instead of making a strong visual statement.
                      </p>
                      <div className="mt-6 pt-4 border-t border-neutral-300">
                        <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                          STACK
                        </span>
                        <p className="mt-1 text-xs sm:text-sm font-bold tracking-wider text-neutral-950 uppercase font-mono">
                          Next.js, FramerMotion
                        </p>
                      </div>
                    </div>

                    <div
                      ref={macbookContainerRef}
                      className="w-full opacity-0 will-change-transform h-[50vh] sm:h-[58vh] md:h-[68vh] flex items-center justify-center"
                    >
                      <MacBookVideo videoSrc="/macbook/demo.mp4" showReplay={false} scale={1.15} offsetX={0.78} active={isDeepDive} />
                    </div>
                  </div>
                )}

                {children}
              </div>
            </div>

            <div className={isDeepDive ? "contents" : "hidden"}>
              <>
                <div className="relative w-full overflow-hidden z-10 bg-neutral-950" style={{ aspectRatio: "1892 / 790" }}>
                  <div
                    ref={videoSectionRef}
                    className="relative w-full h-full overflow-hidden"
                  >
                    <video
                      ref={parallaxVideoRef}
                      preload={isDeepDive ? "auto" : "none"}
                      loop
                      muted
                      playsInline
                      className="absolute left-0 w-full object-cover block will-change-transform"
                      style={{ top: "-3%", height: "106%" }}
                    >
                      <source src="/videos/videoportfolio.webm" type="video/webm" />
                      <source src="/videos/videoportfolio.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div
                  ref={nextSectionRef}
                  className="relative z-20 w-full bg-[#0f172a] text-white h-dvh min-h-dvh max-h-dvh overflow-hidden shadow-[0_-35px_80px_rgba(0,0,0,0.4)] will-change-transform pt-16 sm:pt-20 md:pt-24 pb-0 flex flex-col justify-between"
                  style={{ backgroundColor: "#0f172a" }}
                >
                  <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-20 flex-1 flex flex-col min-h-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start flex-1 min-h-0">
                      <div className="md:col-span-7 lg:col-span-7 flex flex-col items-end justify-center h-full min-h-0 pointer-events-none">
                        <div className="w-full max-w-[580px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-[780px] flex-1 min-h-0 relative select-none pointer-events-none flex items-center justify-end">
                          <IPhone3DScene
                            videoSrc="/images/iphone/ipon_smooth.webm"
                            zoom={1.01}
                            cropBlackBars={true}
                            autoPlayOnVisible={false}
                            triggerReveal={isIPhoneRevealed}
                            interactive={false}
                            phoneScale={2.05}
                            cameraFov={37}
                            offsetY={-0.38}
                            offsetX={0.22}
                            lineColor={0xc4c9cf}
                            className="w-full h-full relative pointer-events-none"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-5 lg:col-span-5 pt-4 sm:pt-6 md:pt-12 lg:pt-16 flex flex-col items-start text-left bg-transparent">
                        <h2
                          ref={landedTitleRef}
                          className="font-black tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none mb-6 sm:mb-8 shrink-0 whitespace-nowrap"
                        >
                          <span className="inline-block overflow-hidden py-1 mr-[0.26em]">
                            <span className="landed-word inline-block will-change-transform opacity-0">
                              The
                            </span>
                          </span>
                          <span className="inline-block overflow-hidden py-1">
                            <span className="landed-word inline-block will-change-transform opacity-0">
                              Redesign
                            </span>
                          </span>
                        </h2>

                        <div
                          ref={landedTextRef}
                          className="mt-12 sm:mt-16 md:mt-24 lg:mt-28 opacity-0 will-change-transform flex flex-col items-start text-left bg-transparent pointer-events-auto"
                        >
                          <p className="text-base sm:text-lg lg:text-[19px] font-sans font-normal text-white leading-[1.65] tracking-tight select-none text-left bg-transparent">
                            The redesign introduces customizable visual options and a fully interactive 3D environment, brought to life with fluid animations and a distinct, charming visual identity.
                          </p>
                          <div className="mt-6 pt-4 border-t border-white/20 flex flex-col items-start text-left min-w-[200px] w-full max-w-[260px] bg-transparent">
                            <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-medium bg-transparent">
                              STACK
                            </span>
                            <p className="mt-1 text-xs sm:text-sm font-bold tracking-wider text-white uppercase font-mono bg-transparent">
                              Next.js, Three.js, GSAP
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
