"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TabletReveal from "@/components/TabletReveal";

interface WorkOverlayProps {
  isOpen: boolean;
  onClose?: () => void;
  onTakeALook?: () => void;
  children?: React.ReactNode;
}

function WorkOverlayBackButton({
  id = "btn-back-work",
  onClick,
  isDeepDive = false,
}: {
  id?: string;
  onClick: () => void;
  isDeepDive?: boolean;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
    return () => {
      if (btnRef.current) gsap.killTweensOf(btnRef.current);
      if (lineRef.current) gsap.killTweensOf(lineRef.current);
      if (arrowRef.current) gsap.killTweensOf(arrowRef.current);
      if (textRef.current) gsap.killTweensOf(textRef.current);
    };
  }, []);

  useEffect(() => {
    if (textRef.current) {
      gsap.set(textRef.current, {
        color: isDeepDive ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.88)",
      });
    }
    if (btnRef.current) {
      gsap.set(btnRef.current, {
        borderColor: isDeepDive ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.15)",
        boxShadow: isDeepDive
          ? "0 4px 20px rgba(0, 0, 0, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.12)",
      });
    }
  }, [isDeepDive]);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: -1.5,
        borderColor: isDeepDive ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
        boxShadow: isDeepDive
          ? "0 8px 24px rgba(0, 0, 0, 0.18)"
          : "0 6px 18px rgba(0, 0, 0, 0.25)",
        duration: 0.28,
        ease: "power2.out",
      });
    }
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.32, ease: "power2.out" }
      );
    }
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: 45,
        x: -3,
        y: -1.5,
        duration: 0.28,
        ease: "power2.out",
      });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: isDeepDive ? "#000000" : "#ffffff",
        duration: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: 0,
        borderColor: isDeepDive ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.15)",
        boxShadow: isDeepDive
          ? "0 4px 20px rgba(0, 0, 0, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.12)",
        duration: 0.24,
        ease: "power2.out",
      });
    }
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.to(lineRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.26,
        ease: "power2.inOut",
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
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: isDeepDive ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.88)",
        duration: 0.2,
      });
    }
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
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase cursor-pointer select-none will-change-transform ${
        isDeepDive
          ? "bg-white text-neutral-950 border-2 border-neutral-950/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-neutral-950 text-white/90 border border-white/15 shadow-sm"
      }`}
      aria-label={isDeepDive ? "Back to explore" : "Back to main view"}
    >
      <span
        ref={arrowRef}
        className={`inline-block shrink-0 text-[11px] sm:text-sm font-light will-change-transform ${
          isDeepDive ? "text-neutral-950" : "text-white"
        }`}
      >
        ←
      </span>
      <div className="relative flex flex-col items-start">
        <span
          ref={textRef}
          className={`block tracking-wider whitespace-nowrap ${
            isDeepDive ? "text-neutral-950" : "text-white/90"
          }`}
        >
          {isDeepDive ? "BACK TO EXPLORE" : "BACK"}
        </span>
        <div className="relative w-full h-[1.5px] mt-0.5 overflow-hidden rounded-[1px]">
          <div
            className={`absolute inset-0 ${
              isDeepDive ? "bg-neutral-950/15" : "bg-white/20"
            }`}
          />
          <div
            ref={lineRef}
            className={`absolute inset-0 origin-left will-change-transform ${
              isDeepDive ? "bg-neutral-950" : "bg-white"
            }`}
          />
        </div>
      </div>
    </button>
  );
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

  const resetHoverState = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.set(btnRef.current, {
        y: 0,
        scale: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      });
    }
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
    }
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
    resetHoverState();
    return () => {
      if (btnRef.current) gsap.killTweensOf(btnRef.current);
      if (lineRef.current) gsap.killTweensOf(lineRef.current);
      if (arrowRef.current) gsap.killTweensOf(arrowRef.current);
      if (textRef.current) gsap.killTweensOf(textRef.current);
    };
  }, []);

  useEffect(() => {
    if (disabled) {
      resetHoverState();
    }
  }, [disabled]);

  const handleMouseEnter = () => {
    if (disabled) return;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: -1.5,
        borderColor: "rgba(0, 0, 0, 0.45)",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
        duration: 0.28,
        ease: "power2.out",
      });
    }
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.32, ease: "power2.out" }
      );
    }
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: -45,
        x: 3,
        y: -1.5,
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
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.to(lineRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.28,
        ease: "power2.inOut",
      });
    }
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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-neutral-900 border border-neutral-900/20 text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)] select-none will-change-transform ${
        disabled
          ? "pointer-events-none cursor-default opacity-0 select-none"
          : "pointer-events-auto cursor-pointer"
      }`}
      aria-label="Take a look"
      aria-hidden={disabled}
    >
      <div className="relative flex flex-col items-start pointer-events-none">
        <span ref={textRef} className="block tracking-wider text-neutral-900 whitespace-nowrap pointer-events-none">
          TAKE A LOOK
        </span>
        <div className="relative w-full h-[1.5px] mt-0.5 overflow-hidden rounded-[1px] pointer-events-none">
          <div className="absolute inset-0 bg-neutral-900/15" />
          <div
            ref={lineRef}
            className="absolute inset-0 bg-neutral-950 origin-left will-change-transform"
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

export default function WorkOverlay({ isOpen, onClose, onTakeALook, children }: WorkOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const [active, setActive] = useState(false);
  const [isDeepDive, setIsDeepDive] = useState(false);
  const isDeepDiveRef = useRef(false);
  const [isDeepDiveNav, setIsDeepDiveNav] = useState(false);
  const [canTakeALook, setCanTakeALook] = useState(false);
  const canTakeALookRef = useRef(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const tabletContainerRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const blackSectionRef = useRef<HTMLDivElement>(null);
  const takeALookBtnWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    isDeepDiveRef.current = isDeepDive;
  }, [isDeepDive]);

  useEffect(() => {
    canTakeALookRef.current = canTakeALook;
  }, [canTakeALook]);

  useEffect(() => {
    let targetScroll = 0;
    let currentScroll = 0;
    let rafId: number | null = null;
    let isRunning = false;

    const update = () => {
      const container = containerRef.current;
      if (!isDeepDiveRef.current || !container) {
        isRunning = false;
        return;
      }

      const diff = targetScroll - currentScroll;
      if (Math.abs(diff) > 0.5) {
        currentScroll += diff * 0.085;
        container.scrollTop = currentScroll;
        rafId = requestAnimationFrame(update);
      } else {
        currentScroll = targetScroll;
        container.scrollTop = currentScroll;
        isRunning = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isDeepDiveRef.current || !containerRef.current) return;
      const container = containerRef.current;
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      e.preventDefault();

      if (!isRunning) {
        currentScroll = container.scrollTop;
        targetScroll = container.scrollTop;
      }

      targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY, maxScroll));

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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

  const handleTakeALook = () => {
    if (onTakeALook) {
      onTakeALook();
      return;
    }
    if (!canTakeALookRef.current || isDeepDiveRef.current) return;

    setCanTakeALook(false);
    canTakeALookRef.current = false;

    setIsDeepDive(true);
    isDeepDiveRef.current = true;
    setIsDeepDiveNav(true);

    if (containerRef.current) {
      containerRef.current.focus();
    }

    const isLarge = typeof window !== "undefined" && window.innerWidth >= 1024;
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 768;
    const targetX = isLarge ? "-10.8vw" : isTablet ? "-6.6vw" : "0px";

    const header = document.getElementById("header-nav");
    if (header) {
      gsap.killTweensOf(header);
      gsap.to(header, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.inOut",
      });
    }

    if (heroSectionRef.current) {
      gsap.killTweensOf(heroSectionRef.current);
      gsap.to(heroSectionRef.current, {
        height: isLarge ? "53vh" : "55vh",
        minHeight: isLarge ? "53vh" : "55vh",
        maxHeight: isLarge ? "53vh" : "55vh",
        paddingTop: "1.5rem",
        paddingBottom: "0.5rem",
        duration: 1.15,
        ease: "power3.inOut",
      });
    }

    if (tabletContainerRef.current) {
      gsap.killTweensOf(tabletContainerRef.current);
      gsap.to(tabletContainerRef.current, {
        scale: 0.91,
        x: targetX,
        y: isLarge ? 58 : 38,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (rightContentRef.current) {
      gsap.killTweensOf(rightContentRef.current);
      gsap.to(rightContentRef.current, {
        y: isLarge ? 32 : 20,
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
      gsap.fromTo(
        blackSectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power3.inOut",
          force3D: true,
        }
      );
    }
  };

  const handleBackToExplore = () => {
    setIsDeepDiveNav(false);

    if (containerRef.current) {
      if (containerRef.current.scrollTop > 0) {
        gsap.to(containerRef.current, {
          scrollTop: 0,
          duration: 0.85,
          ease: "power3.inOut",
        });
      }
    }

    const isLarge = typeof window !== "undefined" && window.innerWidth >= 1024;
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 768;
    const targetX = isLarge ? "-13vw" : isTablet ? "-8vw" : "0px";

    if (blackSectionRef.current) {
      gsap.killTweensOf(blackSectionRef.current);
      gsap.to(blackSectionRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.95,
        ease: "power3.inOut",
        force3D: true,
        onComplete: () => {
          setIsDeepDive(false);
          isDeepDiveRef.current = false;
        },
      });
    } else {
      setIsDeepDive(false);
      isDeepDiveRef.current = false;
    }

    const header = document.getElementById("header-nav");
    if (header) {
      gsap.killTweensOf(header);
      gsap.to(header, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });
    }

    if (heroSectionRef.current) {
      gsap.killTweensOf(heroSectionRef.current);
      gsap.to(heroSectionRef.current, {
        minHeight: "100vh",
        height: "100vh",
        maxHeight: "none",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        duration: 1.15,
        ease: "power3.inOut",
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
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.fromTo(
        takeALookBtnWrapperRef.current,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          delay: 0.45,
          onComplete: () => {
            if (!isDeepDiveRef.current) {
              setCanTakeALook(true);
              canTakeALookRef.current = true;
            }
          },
        }
      );
    }
  };

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
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.fromTo(
        takeALookBtnWrapperRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.35,
          onComplete: () => {
            if (!isDeepDiveRef.current) {
              setCanTakeALook(true);
              canTakeALookRef.current = true;
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
        { opacity: 1, duration: 0.5, ease: "power2.out", force3D: true }
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
      gsap.set(containerRef.current, {
        yPercent: isOpen ? 0 : 100,
        autoAlpha: isOpen ? 1 : 0,
        display: isOpen ? "block" : "none",
      });
      if (!isOpen) return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCanTakeALook(false);
      canTakeALookRef.current = false;
      if (takeALookBtnWrapperRef.current) {
        gsap.killTweensOf(takeALookBtnWrapperRef.current);
        gsap.set(takeALookBtnWrapperRef.current, { autoAlpha: 0, y: 24 });
        takeALookBtnWrapperRef.current.style.display = "none";
        takeALookBtnWrapperRef.current.style.pointerEvents = "none";
      }
      gsap.killTweensOf(containerRef.current);
      gsap.set(containerRef.current, { display: "block", autoAlpha: 1 });
      gsap.fromTo(
        containerRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.75,
          ease: "power4.out",
          force3D: true,
          onComplete: () => {
            if (containerRef.current) {
              gsap.set(containerRef.current, { clearProps: "transform" });
            }
            setActive(true);
          },
        }
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
      gsap.killTweensOf(containerRef.current);
      gsap.to(containerRef.current, {
        yPercent: 100,
        duration: 0.5,
        ease: "power3.in",
        force3D: true,
        onComplete: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, { autoAlpha: 0, display: "none" });
            containerRef.current.style.top = "";
          }
          if (heroSectionRef.current) {
            gsap.set(heroSectionRef.current, {
              clearProps: "minHeight,height,maxHeight,paddingTop,paddingBottom",
            });
          }
          if (tabletContainerRef.current) {
            gsap.set(tabletContainerRef.current, { x: 0, scale: 1, y: 0 });
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
          setCanTakeALook(false);
          canTakeALookRef.current = false;
          setActive(false);
        },
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed left-4 sm:left-12 top-20 sm:top-24 z-50 transition-opacity duration-300 ease-out ${
          isOpen && !isDeepDiveNav
            ? "opacity-100 pointer-events-auto delay-100"
            : "opacity-0 pointer-events-none delay-0 invisible"
        }`}
        style={{
          display: isOpen && !isDeepDiveNav ? "block" : "none",
        }}
      >
        <WorkOverlayBackButton
          id="btn-back-work"
          onClick={handleBack}
          isDeepDive={false}
        />
      </div>

      <div
        className={`fixed left-4 sm:left-12 top-4 sm:top-6 z-50 transition-opacity duration-300 ease-out ${
          isOpen && isDeepDiveNav
            ? "opacity-100 pointer-events-auto delay-100"
            : "opacity-0 pointer-events-none delay-0 invisible"
        }`}
        style={{
          display: isOpen && isDeepDiveNav ? "block" : "none",
        }}
      >
        <WorkOverlayBackButton
          id="btn-back-to-explore"
          onClick={handleBackToExplore}
          isDeepDive={true}
        />
      </div>

      <div
        ref={containerRef}
        id="work-overlay"
        tabIndex={-1}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        aria-hidden={!isOpen}
        className="fixed inset-0 z-40 bg-white overflow-y-auto overscroll-contain pointer-events-auto no-scrollbar touch-pan-y outline-none"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
      >
        <div
          ref={heroSectionRef}
          className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 overflow-hidden"
        >
          {active && (
            <div
              ref={tabletContainerRef}
              className="h-[74vh] sm:h-[76vh] w-full shrink-0 flex items-center justify-center opacity-0 will-change-transform translate-y-3 sm:translate-y-4 pointer-events-none"
            >
              <TabletReveal showReplay={false} onComplete={handleTabletSpinComplete} scale={1.12} />
            </div>
          )}

          <div
            ref={rightContentRef}
            className="w-full md:w-auto md:absolute md:top-1/2 md:left-[65%] md:-translate-x-1/2 md:-translate-y-1/2 translate-y-3 sm:translate-y-4 flex flex-col items-center text-center z-30 px-6 pb-20 md:px-0 md:pb-0"
          >
            <div className="relative flex flex-col items-center text-center">
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
        </div>

      <div
        ref={blackSectionRef}
        className={`w-full relative z-30 ${
          isDeepDive ? "block" : "hidden"
        }`}
      >
        <div className="w-full bg-neutral-950 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-16 sm:pb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 select-none">
              <div>
                <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                  PLATFORM
                </span>
                <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                  WEB & INTERACTIVE 3D
                </p>
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                  ROLE
                </span>
                <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                  AI-ASSISTED DEVELOPER
                </p>
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                  STACK
                </span>
                <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                  NEXT.JS / THREE / GSAP
                </p>
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                  FOCUS
                </span>
                <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                  FULL-STACK & MOTION
                </p>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 max-w-4xl">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-neutral-200 leading-relaxed tracking-tight select-none">
                <span className="text-red-500 font-semibold">Portfolio, Reloaded</span> — is a
                complete ground-up reconstruction of my digital workspace. Rebuilt to showcase
                high-performance 3D spatial scenes, reactive kinetic typography, and fluid
                micro-interactions engineered with precision code.
              </p>
              <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed font-sans max-w-3xl select-none">
                From front-end spatial shaders to robust Next.js server components, every pixel and
                motion curve was handcrafted to deliver a seamless, zero-compromise experience across
                devices.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white text-neutral-950 min-h-[60vh] sm:min-h-screen">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
            {children}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
