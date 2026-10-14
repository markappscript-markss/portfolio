"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TabletReveal from "@/components/TabletReveal";
import MacBookVideo from "@/components/MacBookVideo";
import IPhone3DScene from "@/components/iPhone3DScene";

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
  isVisible = false,
}: {
  id?: string;
  onClick: () => void;
  isDeepDive?: boolean;
  isVisible?: boolean;
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
        borderColor: isDeepDive ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.15)",
        boxShadow: isDeepDive
          ? "0 4px 20px rgba(0, 0, 0, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.12)",
      });
    }
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
    }
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.set(arrowRef.current, { rotate: 0, x: 0, y: 0 });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.set(textRef.current, {
        color: isDeepDive ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.88)",
      });
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
    resetHoverState();
  }, [isDeepDive, isVisible]);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: -2,
        borderColor: isDeepDive ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
        boxShadow: isDeepDive
          ? "0 8px 24px rgba(0, 0, 0, 0.18)"
          : "0 6px 18px rgba(0, 0, 0, 0.25)",
        duration: 0.28,
        ease: "power2.out",
      });
    }
    if (lineRef.current) {
      const currentScale = Number(gsap.getProperty(lineRef.current, "scaleX")) || 0;
      gsap.killTweensOf(lineRef.current);
      if (currentScale <= 0.05) {
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(lineRef.current, {
          scaleX: 1,
          duration: 0.32,
          ease: "power2.out",
        });
      } else {
        gsap.to(lineRef.current, {
          scaleX: 0,
          duration: 0.12 * currentScale,
          ease: "power1.in",
          onComplete: () => {
            if (lineRef.current) {
              gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
              gsap.to(lineRef.current, {
                scaleX: 1,
                duration: 0.32,
                ease: "power2.out",
              });
            }
          },
        });
      }
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
      const currentScale = Number(gsap.getProperty(lineRef.current, "scaleX")) || 0;
      gsap.killTweensOf(lineRef.current);
      if (currentScale >= 0.95) {
        gsap.set(lineRef.current, { transformOrigin: "right center" });
        gsap.to(lineRef.current, {
          scaleX: 0,
          duration: 0.26,
          ease: "power2.out",
          onComplete: () => {
            if (lineRef.current) {
              gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
            }
          },
        });
      } else {
        gsap.to(lineRef.current, {
          scaleX: 1,
          duration: 0.15 * (1 - currentScale),
          ease: "power1.out",
          onComplete: () => {
            if (lineRef.current) {
              gsap.set(lineRef.current, { transformOrigin: "right center" });
              gsap.to(lineRef.current, {
                scaleX: 0,
                duration: 0.26,
                ease: "power2.out",
                onComplete: () => {
                  if (lineRef.current) {
                    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
                  }
                },
              });
            }
          },
        });
      }
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

  const handleClick = (e: React.MouseEvent) => {
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
      className={`group relative inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase cursor-pointer select-none will-change-transform before:absolute before:-inset-1.5 before:content-[''] before:rounded-full before:pointer-events-auto ${
        isDeepDive
          ? "bg-white text-neutral-950 border-2 border-neutral-950/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-neutral-950 text-white/90 border border-white/15 shadow-sm"
      }`}
      aria-label={isDeepDive ? "Back to explore" : "Back to main view"}
    >
      <span
        ref={arrowRef}
        className={`inline-block shrink-0 text-[11px] sm:text-sm font-light will-change-transform pointer-events-none ${
          isDeepDive ? "text-neutral-950" : "text-white"
        }`}
      >
        ←
      </span>
      <div className="relative flex flex-col items-start pointer-events-none">
        <span
          ref={textRef}
          className={`block tracking-wider whitespace-nowrap pointer-events-none ${
            isDeepDive ? "text-neutral-950" : "text-white/90"
          }`}
        >
          {isDeepDive ? "BACK TO EXPLORE" : "BACK"}
        </span>
        <div className="relative w-full h-[2px] mt-0.5 overflow-hidden rounded-[1px] pointer-events-none">
          <div
            className={`absolute inset-0 ${
              isDeepDive ? "bg-neutral-950/15" : "bg-white/20"
            }`}
          />
          <div
            ref={lineRef}
            className={`absolute inset-0 scale-x-0 will-change-transform pointer-events-none ${
              isDeepDive ? "bg-neutral-950" : "bg-white"
            }`}
            style={{
              transformOrigin: "left center",
              transform: "scaleX(0)",
            }}
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
  const isHoveredRef = useRef(false);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);

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
    if (lineRef.current) {
      gsap.killTweensOf(lineRef.current);
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
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
    if (lineRef.current) {
      const currentScale = Number(gsap.getProperty(lineRef.current, "scaleX")) || 0;
      gsap.killTweensOf(lineRef.current);
      if (currentScale <= 0.05) {
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(lineRef.current, {
          scaleX: 1,
          duration: 0.32,
          ease: "power2.out",
        });
      } else {
        gsap.to(lineRef.current, {
          scaleX: 0,
          duration: 0.12 * currentScale,
          ease: "power1.in",
          onComplete: () => {
            if (lineRef.current) {
              gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
              gsap.to(lineRef.current, {
                scaleX: 1,
                duration: 0.32,
                ease: "power2.out",
              });
            }
          },
        });
      }
    }
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
    if (lineRef.current) {
      const currentScale = Number(gsap.getProperty(lineRef.current, "scaleX")) || 0;
      gsap.killTweensOf(lineRef.current);
      if (currentScale >= 0.95) {
        gsap.set(lineRef.current, { transformOrigin: "right center" });
        gsap.to(lineRef.current, {
          scaleX: 0,
          duration: 0.26,
          ease: "power2.out",
          onComplete: () => {
            if (lineRef.current) {
              gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
            }
          },
        });
      } else {
        gsap.to(lineRef.current, {
          scaleX: 1,
          duration: 0.15 * (1 - currentScale),
          ease: "power1.out",
          onComplete: () => {
            if (lineRef.current) {
              gsap.set(lineRef.current, { transformOrigin: "right center" });
              gsap.to(lineRef.current, {
                scaleX: 0,
                duration: 0.26,
                ease: "power2.out",
                onComplete: () => {
                  if (lineRef.current) {
                    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
                  }
                },
              });
            }
          },
        });
      }
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
      onMouseMove={() => {
        if (!disabled && !isHoveredRef.current) {
          handleMouseEnter();
        }
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`group relative inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-neutral-900 border border-neutral-900/20 text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)] select-none will-change-transform before:absolute before:-inset-1.5 before:content-[''] before:rounded-full before:pointer-events-auto ${
        disabled
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
            className="absolute inset-0 bg-neutral-950 scale-x-0 origin-left will-change-transform pointer-events-none"
            style={{
              transformOrigin: "left center",
              transform: "scaleX(0)",
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
  const isTransitioningRef = useRef(false);
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
    isDeepDiveRef.current = isDeepDive;
  }, [isDeepDive]);

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleEl && entry.isIntersecting && !hasRevealedWhereRef.current) {
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
          }
          if (landedTitleEl && entry.target === landedTitleEl && entry.isIntersecting && !hasRevealedLandedRef.current) {
            hasRevealedLandedRef.current = true;
            hasRevealedLandedTextRef.current = true;
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

    const updateParallax = (scrollTop: number) => {
      const container = containerRef.current;
      const currentDist = scrollTop + containerHeight - sectionTop;
      const totalDist = sectionHeight + containerHeight;
      const progress = totalDist > 0 ? Math.max(0, Math.min(1, currentDist / totalDist)) : 0;

      if (videoSectionRef.current) {
        gsap.set(videoSectionRef.current, { y: 0 });
      }

      if (parallaxVideoRef.current) {
        gsap.set(parallaxVideoRef.current, {
          y: 0,
          scale: 1,
          force3D: true,
        });
      }

      if (nextSectionRef.current && container) {
        const rawOffset = Math.max(0, (progress - 0.45) * 150);
        const maxScroll = container.scrollHeight - container.clientHeight;
        const remainingToBottom = maxScroll > 0 ? Math.max(0, maxScroll - scrollTop) : 0;
        const bottomSpan = Math.max(1, rawOffset);
        const ratio = Math.min(1, remainingToBottom / bottomSpan);
        const bottomFactor = ratio * ratio * (3 - 2 * ratio);
        const nextY = -Math.min(rawOffset * bottomFactor, remainingToBottom);

        if (Math.abs(nextY - lastNextY) > 0.05) {
          lastNextY = nextY;
          gsap.set(nextSectionRef.current, {
            y: nextY,
            force3D: true,
          });
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
        return;
      }

      const container = containerRef.current;
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      e.preventDefault();

      if (!isRunning) {
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleNativeScroll, { passive: true });
    }
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleNativeScroll);
      }
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
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

    if (containerRef.current) {
      containerRef.current.style.overflowY = "hidden";
      containerRef.current.scrollTop = 0;
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
        scale: 0.91,
        x: targetX,
        y: isLarge ? 12 : 8,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (rightContentRef.current) {
      gsap.killTweensOf(rightContentRef.current);
      gsap.to(rightContentRef.current, {
        y: isLarge ? 12 : 8,
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

    isTransitioningRef.current = true;
    const isScrolledDown = (containerRef.current?.scrollTop ?? 0) > 20;

    const isLarge = typeof window !== "undefined" && window.innerWidth >= 1024;
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 768;
    const targetX = isLarge ? "-13vw" : isTablet ? "-8vw" : "0px";

    if (isScrolledDown) {
      if (fadeOverlayRef.current) {
        gsap.killTweensOf(fadeOverlayRef.current);
        gsap.to(fadeOverlayRef.current, {
          autoAlpha: 1,
          duration: 0.28,
          ease: "power2.inOut",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.scrollTop = 0;
              containerRef.current.style.overflowY = "hidden";
            }
            if (heroSectionRef.current) {
              gsap.set(heroSectionRef.current, {
                minHeight: "100vh",
                height: "100vh",
                maxHeight: "none",
                paddingTop: "5rem",
                paddingBottom: "3rem",
              });
            }
            if (tabletContainerRef.current) {
              gsap.set(tabletContainerRef.current, {
                scale: 1,
                x: targetX,
                y: 0,
              });
            }
            if (rightContentRef.current) {
              gsap.set(rightContentRef.current, {
                y: 0,
                opacity: 1,
              });
            }
            if (blackSectionRef.current) {
              gsap.set(blackSectionRef.current, {
                y: 0,
                opacity: 1,
              });
            }
            if (takeALookBtnWrapperRef.current) {
              takeALookBtnWrapperRef.current.style.display = "block";
              takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
              gsap.set(takeALookBtnWrapperRef.current, {
                autoAlpha: 1,
                y: 0,
              });
            }
            if (videoSectionRef.current) {
              gsap.set(videoSectionRef.current, { y: 0 });
            }
            if (parallaxVideoRef.current) {
              gsap.set(parallaxVideoRef.current, { y: 0, scale: 1 });
            }
            if (nextSectionRef.current) {
              gsap.set(nextSectionRef.current, { y: 0 });
            }
            setIsDeepDive(false);
            isDeepDiveRef.current = false;
            setIsDeepDiveNav(false);
            setIsIPhoneRevealed(false);
            setCanTakeALook(true);
            canTakeALookRef.current = true;

            const header = document.getElementById("header-nav");
            if (header) {
              gsap.set(header, { yPercent: 0, autoAlpha: 1 });
            }

            if (fadeOverlayRef.current) {
              gsap.to(fadeOverlayRef.current, {
                autoAlpha: 0,
                duration: 0.32,
                ease: "power2.out",
                onComplete: () => {
                  isTransitioningRef.current = false;
                },
              });
            } else {
              isTransitioningRef.current = false;
            }
          },
        });
      } else {
        isTransitioningRef.current = false;
      }
      return;
    }

    isDeepDiveRef.current = false;
    setIsDeepDiveNav(false);

    if (containerRef.current) {
      gsap.killTweensOf(containerRef.current);
      containerRef.current.style.overflowY = "hidden";
      containerRef.current.scrollTo({ top: 0, behavior: "instant" });
      containerRef.current.scrollTop = 0;
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
            takeALookBtnWrapperRef.current.style.display = "block";
            takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
            gsap.set(takeALookBtnWrapperRef.current, { autoAlpha: 1, y: 0 });
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
      takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
      takeALookBtnWrapperRef.current.style.visibility = "visible";
      gsap.killTweensOf(takeALookBtnWrapperRef.current);
      gsap.fromTo(
        takeALookBtnWrapperRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          delay: 0.25,
          onComplete: () => {
            setCanTakeALook(true);
            canTakeALookRef.current = true;
            if (takeALookBtnWrapperRef.current) {
              takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
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
      if (fadeOverlayRef.current) {
        gsap.killTweensOf(fadeOverlayRef.current);
        gsap.set(fadeOverlayRef.current, { autoAlpha: 0 });
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
          if (fadeOverlayRef.current) {
            gsap.killTweensOf(fadeOverlayRef.current);
            gsap.set(fadeOverlayRef.current, { autoAlpha: 0 });
          }
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
          isVisible={isOpen && !isDeepDiveNav}
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
          isVisible={isOpen && isDeepDiveNav}
        />
      </div>

      <div
        ref={fadeOverlayRef}
        className="fixed inset-0 z-[60] bg-white pointer-events-none"
        style={{ opacity: 0, visibility: "hidden" }}
      />

      <div
        ref={containerRef}
        id="work-overlay"
        tabIndex={-1}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-white overscroll-contain pointer-events-auto no-scrollbar outline-none ${
          isDeepDive ? "overflow-y-auto touch-pan-y" : "overflow-hidden touch-none"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          ref={heroSectionRef}
          className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 overflow-hidden bg-white"
        >
          {active && (
            <div
              ref={tabletContainerRef}
              className="h-[80vh] sm:h-[82vh] w-full shrink-0 flex items-center justify-center opacity-0 will-change-transform translate-y-2 sm:translate-y-3 pointer-events-none"
            >
              <TabletReveal showReplay={false} onComplete={handleTabletSpinComplete} scale={1.26} />
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
        className={`w-full bg-white relative z-30 -mt-px ${
          isDeepDive ? "block" : "hidden"
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
                <span className="text-red-500 font-semibold">Portfolio, Reloaded</span> — is a
                complete rebuild of my personal site, designed around one idea: a site that feels like
                a space instead of a page. It’s a ground-up rethink of how my work is presented, with
                interaction and motion shaping the experience as much as the content does. Every part of
                it responds to the visitor, and the details are paced to feel natural rather than flashy.
              </p>
              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans max-w-3xl select-none">
                Built with Next.js and three.js, with close attention paid to motion, timing and how
                everything holds up from desktop to mobile.
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

            {isDeepDive && (
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
                  <MacBookVideo videoSrc="/macbook/demo.mp4" showReplay={false} scale={1.15} offsetX={0.78} />
                </div>
              </div>
            )}

            {children}
          </div>
        </div>

        {isDeepDive && (
          <>
            <div
              ref={videoSectionRef}
              className="relative w-full aspect-[1892/790] overflow-hidden z-10 bg-neutral-950 will-change-transform"
              style={{ aspectRatio: "1892 / 790" }}
            >
              <video
                ref={parallaxVideoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover block will-change-transform"
              >
                <source src="/videos/videoportfolio.webm" type="video/webm" />
                <source src="/videos/videoportfolio.mp4" type="video/mp4" />
              </video>
            </div>

            <div
              ref={nextSectionRef}
              className="relative z-20 w-full bg-[#0f172a] text-white h-screen min-h-screen max-h-screen overflow-hidden shadow-[0_-35px_80px_rgba(0,0,0,0.4)] will-change-transform pt-16 sm:pt-20 md:pt-24 pb-0 flex flex-col justify-between"
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
        )}
      </div>
    </div>
    </>
  );
}
