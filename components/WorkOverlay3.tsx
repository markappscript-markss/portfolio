"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { WORK_OVERLAY_CURVE_CONFIG } from "./WorkOverlay";
import { FINAL_OVERLAY_CURVE_CONFIG } from "./FinalOverlay";
import SeeNextIndicator from "./SeeNextIndicator";
import Phone3D from "@/components/Phone3D";
import TakeALookButton from "@/components/TakeALookButton";

interface WorkOverlay3Props {
  isOpen: boolean;
  onClose?: () => void;
  onTakeALook?: () => void;
  onNextWork?: () => void;
  isTopmost?: boolean;
  isHidden?: boolean;
  children?: React.ReactNode;
}

export default function WorkOverlay3({
  isOpen,
  onClose,
  onTakeALook,
  onNextWork,
  isTopmost = true,
  isHidden = false,
  children,
}: WorkOverlay3Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const macbookContainerRef = useRef<HTMLDivElement>(null);
  const phoneReplayRef = useRef<() => void>(() => {});
  const backBtnContainerRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const blackSectionRef = useRef<HTMLDivElement>(null);

  const [isDeepDive, setIsDeepDive] = useState(false);
  const isDeepDiveRef = useRef(false);
  const [isDeepDiveNav, setIsDeepDiveNav] = useState(false);
  const [canTakeALook, setCanTakeALook] = useState(true);
  const canTakeALookRef = useRef(true);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const isMountedRef = useRef(false);
  const onCloseRef = useRef(onClose);
  const onTakeALookRef = useRef(onTakeALook);
  const onNextWorkRef = useRef(onNextWork);
  const isTopmostRef = useRef(isTopmost);
  const isReturningFromChildRef = useRef(false);
  const isTriggeringNextWorkRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const wasHiddenRef = useRef(false);

  useEffect(() => {
    isDeepDiveRef.current = isDeepDive;
  }, [isDeepDive]);

  useEffect(() => {
    canTakeALookRef.current = canTakeALook;
  }, [canTakeALook]);

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
    onTakeALookRef.current = onTakeALook;
  });

  useEffect(() => {
    onNextWorkRef.current = onNextWork;
  });

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
      gsap.killTweensOf(wrapperRef.current);
      gsap.to(wrapperRef.current, {
        yPercent: 0,
        y: 0,
        duration: FINAL_OVERLAY_CURVE_CONFIG.closeDuration,
        ease: FINAL_OVERLAY_CURVE_CONFIG.closeEase,
        force3D: true,
        autoRound: false,
      });
      const timer = setTimeout(() => {
        isReturningFromChildRef.current = false;
      }, FINAL_OVERLAY_CURVE_CONFIG.closeDuration * 1000);
      return () => clearTimeout(timer);
    }
  }, [isTopmost]);

  const handleClose = () => {
    if (isTransitioningRef.current) return;
    onCloseRef.current?.();
  };

  const handleSeeNext = () => {
    if (isTriggeringNextWorkRef.current || !isTopmostRef.current || isTransitioningRef.current || isDeepDiveRef.current) return;
    isTriggeringNextWorkRef.current = true;
    onNextWorkRef.current?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-final"));
    }
    setTimeout(() => {
      isTriggeringNextWorkRef.current = false;
    }, FINAL_OVERLAY_CURVE_CONFIG.openDuration * 1000);
  };

  const getResponsiveSettings = () => {
    if (typeof window === "undefined") {
      return {
        scale: 0.91,
        x: "-2vw",
        y: 80,
        contentY: 12,
        heroHeight: "53vh",
      };
    }
    const w = window.innerWidth;
    const compensate = (heroVh: number) => (window.innerHeight * (1 - heroVh / 100)) / 2;
    if (w >= 1440) {
      return {
        scale: 0.91,
        x: "2vw",
        y: 80 - compensate(53),
        contentY: 12,
        heroHeight: "53vh",
      };
    } else if (w >= 1024) {
      return {
        scale: 0.91,
        x: "2vw",
        y: 80 - compensate(53),
        contentY: 12,
        heroHeight: "53vh",
      };
    } else if (w >= 768) {
      return {
        scale: 0.88,
        x: "6.6vw",
        y: 50 - compensate(55),
        contentY: 8,
        heroHeight: "55vh",
      };
    } else {
      return {
        scale: w < 480 ? 0.72 : 0.8,
        x: "0px",
        y: 30 - compensate(55),
        contentY: 4,
        heroHeight: "55vh",
      };
    }
  };

  const handleTakeALook = () => {
    if (onTakeALookRef.current) {
      onTakeALookRef.current();
      return;
    }
    if (isTransitioningRef.current || !canTakeALookRef.current || isDeepDiveRef.current) return;

    isTransitioningRef.current = true;
    setCanTakeALook(false);
    canTakeALookRef.current = false;

    setIsDeepDive(true);
    isDeepDiveRef.current = true;
    setIsDeepDiveNav(true);

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

    if (macbookContainerRef.current) {
      gsap.killTweensOf(macbookContainerRef.current);
      gsap.to(macbookContainerRef.current, {
        scale: responsive.scale,
        x: responsive.x,
        y: responsive.y,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (leftContentRef.current) {
      gsap.killTweensOf(leftContentRef.current);
      gsap.to(leftContentRef.current, {
        y: responsive.contentY,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (buttonWrapperRef.current) {
      gsap.killTweensOf(buttonWrapperRef.current);
      gsap.to(buttonWrapperRef.current, {
        autoAlpha: 0,
        y: 12,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          if (buttonWrapperRef.current) {
            buttonWrapperRef.current.style.display = "none";
            buttonWrapperRef.current.style.pointerEvents = "none";
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

            if (macbookContainerRef.current) {
              gsap.killTweensOf(macbookContainerRef.current);
              gsap.set(macbookContainerRef.current, {
                scale: 1,
                x: 0,
                y: 0,
                opacity: 1,
              });
            }

            if (leftContentRef.current) {
              gsap.killTweensOf(leftContentRef.current);
              gsap.set(leftContentRef.current, { y: 0 });
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

            if (buttonWrapperRef.current) {
              buttonWrapperRef.current.style.display = "flex";
              buttonWrapperRef.current.style.pointerEvents = "auto";
              buttonWrapperRef.current.style.visibility = "visible";
              gsap.killTweensOf(buttonWrapperRef.current);
              gsap.fromTo(
                buttonWrapperRef.current,
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
          isTransitioningRef.current = false;
          setCanTakeALook(true);
          canTakeALookRef.current = true;
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
            containerRef.current.style.overflowY = "hidden";
          }
          if (buttonWrapperRef.current) {
            buttonWrapperRef.current.style.pointerEvents = "auto";
          }
        },
      });
    }

    if (macbookContainerRef.current) {
      gsap.killTweensOf(macbookContainerRef.current);
      gsap.to(macbookContainerRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (leftContentRef.current) {
      gsap.killTweensOf(leftContentRef.current);
      gsap.to(leftContentRef.current, {
        y: 0,
        duration: 1.15,
        ease: "power3.inOut",
        force3D: true,
      });
    }

    if (buttonWrapperRef.current) {
      buttonWrapperRef.current.style.display = "flex";
      buttonWrapperRef.current.style.pointerEvents = "none";
      buttonWrapperRef.current.style.visibility = "visible";
      gsap.killTweensOf(buttonWrapperRef.current);
      gsap.fromTo(
        buttonWrapperRef.current,
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

  const handleBack = () => {
    if (isDeepDiveRef.current) {
      handleBackToExplore();
      return;
    }
    handleClose();
  };

  useEffect(() => {
    const handleDeepDiveBack = () => {
      if (isOpen && isTopmost && isDeepDiveRef.current) {
        handleBackToExplore();
      }
    };
    window.addEventListener("portfolio-deepdive-back", handleDeepDiveBack);
    return () => {
      window.removeEventListener("portfolio-deepdive-back", handleDeepDiveBack);
    };
  }, [isOpen, isTopmost]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && isTopmostRef.current) {
        if (isDeepDiveRef.current) {
          handleBackToExplore();
        } else {
          handleBack();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isDeepDive) return;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleWindowResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!macbookContainerRef.current || !heroSectionRef.current || isTransitioningRef.current) return;
        const responsive = getResponsiveSettings();
        gsap.to(macbookContainerRef.current, {
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
        if (leftContentRef.current) {
          gsap.to(leftContentRef.current, {
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



  useEffect(() => {
    let targetScroll = 0;
    let currentScroll = 0;
    let rafId: number | null = null;
    let isRunning = false;
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
        rafId = requestAnimationFrame(loop);
      } else {
        currentScroll = targetScroll;
        container.scrollTop = currentScroll;
        isRunning = false;
        lastFrameTime = 0;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isOpen || !isTopmostRef.current || isHidden) return;

      if (!isDeepDiveRef.current || isTransitioningRef.current || !containerRef.current) {
        if (
          isOpen &&
          isTopmostRef.current &&
          !isDeepDiveRef.current &&
          !isTriggeringNextWorkRef.current &&
          !isTransitioningRef.current &&
          !isReturningFromChildRef.current
        ) {
          if (e.deltaY > 25) {
            handleSeeNext();
          } else if (e.deltaY < -25) {
            handleClose();
          }
        }
        return;
      }

      const container = containerRef.current;
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return;

      e.preventDefault();
      e.stopPropagation();

      if (!isRunning) {
        currentScroll = container.scrollTop;
        targetScroll = container.scrollTop;
        lastFrameTime = 0;
      }

      let delta = e.deltaY;
      if (e.deltaMode === 1) {
        delta *= 32;
      } else if (e.deltaMode === 2) {
        delta *= container.clientHeight;
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
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (
        !isOpen ||
        isHidden ||
        !isTopmostRef.current ||
        isDeepDiveRef.current ||
        isTransitioningRef.current ||
        isTriggeringNextWorkRef.current ||
        isReturningFromChildRef.current
      ) {
        return;
      }
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (deltaY > 40) {
        handleSeeNext();
      } else if (deltaY < -40) {
        handleClose();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleNativeScroll, { passive: true });
    }
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleNativeScroll);
      }
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isOpen, isHidden, isDeepDive]);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (wrapperRef.current) {
        gsap.set(wrapperRef.current, {
          yPercent: 100,
          y: 160,
          autoAlpha: 0,
          display: "none",
        });
      }
      if (curvePathRef.current) {
        curvePathRef.current.setAttribute("d", "M 0 100 Q 50 0 100 100 L 100 100 L 0 100 Z");
      }
      if (fadeOverlayRef.current) {
        gsap.set(fadeOverlayRef.current, { autoAlpha: 0 });
      }
      if (backBtnContainerRef.current) {
        gsap.set(backBtnContainerRef.current, { autoAlpha: 0 });
      }
      if (!isOpen) return;
    }

    if (isOpen) {
      isTransitioningRef.current = true;
      isTriggeringNextWorkRef.current = true;
      setCanTakeALook(false);
      canTakeALookRef.current = false;

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
        gsap.set(backBtnContainerRef.current, { y: initialY, autoAlpha: 1 });
      }

      closeTlRef.current?.kill();
      phoneReplayRef.current?.();

      const curveObj = { val: 0 };
      const openTl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
          isTriggeringNextWorkRef.current = false;
          setCanTakeALook(true);
          canTakeALookRef.current = true;
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

      const revealItems = [titleRef.current, subtitleRef.current, buttonWrapperRef.current].filter(Boolean);
      if (revealItems.length) {
        openTl.fromTo(
          revealItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.4
        );
      }
    } else {
      openTlRef.current?.kill();

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

      const revealItems = [titleRef.current, subtitleRef.current, buttonWrapperRef.current].filter(Boolean);

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
          if (revealItems.length) {
            gsap.set(revealItems, { opacity: 0, y: 30 });
          }
          if (backBtnContainerRef.current) {
            gsap.set(backBtnContainerRef.current, { autoAlpha: 0 });
          }
          if (fadeOverlayRef.current) {
            gsap.killTweensOf(fadeOverlayRef.current);
            gsap.set(fadeOverlayRef.current, { autoAlpha: 0 });
          }
        },
      });
      closeTlRef.current = closeTl;

      if (revealItems.length) {
        gsap.killTweensOf(revealItems);
        closeTl.to(
          revealItems,
          {
            opacity: 0,
            y: 20,
            duration: 0.35,
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

  return (
    <>
      <div
        ref={fadeOverlayRef}
        className="fixed inset-0 z-[60] bg-white pointer-events-none"
        style={{ opacity: 0, visibility: "hidden" }}
      />

      <div
        ref={wrapperRef}
        id="work-overlay-3-wrapper"
        aria-hidden={!isOpen}
        className="fixed inset-0 z-[48] pointer-events-none overflow-visible select-none"
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
          id="work-overlay-3"
          tabIndex={-1}
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          aria-hidden={!isOpen}
          className={`w-full h-full bg-white overscroll-contain select-none transform-gpu will-change-transform no-scrollbar outline-none pointer-events-auto before:absolute before:-top-[2px] before:left-0 before:right-0 before:h-[3px] before:bg-white before:content-[''] before:pointer-events-none ${isDeepDive ? "overflow-y-auto touch-pan-y" : "overflow-hidden touch-none"
            }`}
          style={{
            WebkitOverflowScrolling: "touch",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            outline: "1px solid transparent",
          }}
        >
          <main
            ref={heroSectionRef}
            className="relative w-full min-h-dvh h-dvh flex flex-col items-center justify-center p-6 text-neutral-950 overflow-hidden shrink-0 will-change-transform"
          >
            <div
              ref={leftContentRef}
              className="w-full md:w-[38%] lg:w-[37%] xl:w-[36%] md:absolute md:top-[34%] lg:top-[35%] xl:top-[36%] md:right-[17%] lg:right-[18%] xl:right-[19%] md:left-auto flex flex-col items-center text-center z-20 max-w-2xl px-4 md:px-0 pointer-events-auto will-change-transform"
            >
              <h1
                ref={titleRef}
                className="font-black tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none will-change-transform text-center"
              >
                AI Video and<br />Static Ads
              </h1>
              <p
                ref={subtitleRef}
                className="mt-4 sm:mt-5 text-base sm:text-lg md:text-lg lg:text-xl text-neutral-600 font-sans font-medium tracking-tight leading-relaxed select-none max-w-lg lg:max-w-xl will-change-transform text-center mx-auto"
              >
                End-to-end production of AI-driven video and static ad campaigns, blending creative strategy with high-converting motion design.
              </p>
              <div
                ref={buttonWrapperRef}
                className="mt-7 sm:mt-9 pointer-events-auto will-change-transform flex justify-center w-full"
              >
                <TakeALookButton
                  id="btn-take-a-look-3"
                  onClick={handleTakeALook}
                  disabled={!canTakeALook || isDeepDive}
                />
              </div>
            </div>

            <div
              ref={macbookContainerRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[11%] md:right-[37%] h-dvh w-[94%] md:w-auto flex items-center justify-center pointer-events-none z-10 overflow-visible will-change-transform"
            >
              <div className="w-full h-full relative pointer-events-none overflow-visible">
                <Phone3D
                  enableOrbit={false}
                  enableGizmo={false}
                  showReplay={false}
                  showFloorShadow={false}
                  phoneScale={1.16}
                  paused={!isOpen}
                  onReplayTrigger={(fn) => {
                    phoneReplayRef.current = fn;
                  }}
                  className="w-full h-full pointer-events-none"
                />
              </div>
            </div>

            <SeeNextIndicator
              id="see-next-work-3"
              isVisible={isOpen && isTopmost && !isDeepDive}
              onClick={handleSeeNext}
            />
          </main>

          <div
            ref={blackSectionRef}
            className={`w-full relative z-30 -mt-px ${isDeepDive ? "block" : "hidden"
              }`}
          >
            <div className="w-full bg-neutral-950 text-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-28 sm:pb-36">
                <div className="flex flex-wrap items-start gap-10 sm:gap-14 md:gap-20 lg:gap-24 pb-12 border-b border-white/10 select-none">
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      PLATFORM
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      Social and Web
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      ROLE
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      Creative Producer
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      STACK
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      Google Flow | Canva | Capcut | DaVinci Resolve | Elevenlabs
                    </p>
                  </div>
                </div>

                <div className="mt-12 sm:mt-16 max-w-4xl">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white leading-relaxed tracking-tight select-none">
                    <span className="text-[#FF6B35] font-semibold">AI Video and Static Ads</span> — I take a product brief and turn it into finished ads for TikTok, Instagram, and Pinterest. Scripts, storyboards, video cuts, and static versions all come out of one workflow, so a brand gets a full campaign instead of a single file.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans max-w-3xl select-none">
                    Each campaign ships in multiple formats, so one idea works on every platform without starting from scratch.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white text-neutral-950 relative z-20 min-h-screen py-24 sm:py-32 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
                {children}
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-full left-0 right-0 h-[250vh] bg-white pointer-events-none -mt-px"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
