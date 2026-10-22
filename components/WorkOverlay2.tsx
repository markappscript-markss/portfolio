"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { WORK_OVERLAY_CURVE_CONFIG } from "./WorkOverlay";
import SeeNextIndicator from "./SeeNextIndicator";
import MacBookOpening from "@/components/MacBookOpening";
import TakeALookButton from "@/components/TakeALookButton";
import TabletOutline3D from "@/components/TabletOutline3D";

interface WorkOverlay2Props {
  isOpen: boolean;
  onClose?: () => void;
  onTakeALook?: () => void;
  onNextWork?: () => void;
  isTopmost?: boolean;
  isHidden?: boolean;
  children?: React.ReactNode;
}

const EMPLOYEE_CARDS = [
  {
    num: "01",
    label: "OVERVIEW",
    src: "/images/lmsemp.webp",
    alt: "Employee View - Balances and Overview",
  },
  {
    num: "02",
    label: "LEAVE FILING",
    src: "/images/lmsemp2.webp",
    alt: "Employee View - Leave Filing",
  },
  {
    num: "03",
    label: "SCHEDULE",
    src: "/images/lmsemp3.webp",
    alt: "Employee View - Team Schedule",
  },
];

const ACCORDION_ITEMS = [
  {
    num: "01",
    label: "APPROVALS QUEUE",
    src: "/images/lmsman.webp",
    alt: "Manager View - Pending Approval Requests",
  },
  {
    num: "02",
    label: "DAILY AVAILABILITY",
    src: "/images/lmsman2.webp",
    alt: "Manager View - Team Availability Per Day",
  },
  {
    num: "03",
    label: "TEAM BALANCES",
    src: "/images/lmsman3.webp",
    alt: "Manager View - Team Members and Leave Balances",
  },
];

export default function WorkOverlay2({
  isOpen,
  onClose,
  onTakeALook,
  onNextWork,
  isTopmost = true,
  isHidden = false,
  children,
}: WorkOverlay2Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const macbookContainerRef = useRef<HTMLDivElement>(null);
  const backBtnContainerRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const blackSectionRef = useRef<HTMLDivElement>(null);
  const employeeSectionRef = useRef<HTMLDivElement>(null);
  const employeeTitleRef = useRef<HTMLHeadingElement>(null);
  const employeeTextRef = useRef<HTMLDivElement>(null);
  const employeeCardsRef = useRef<HTMLDivElement>(null);
  const hasRevealedEmployeeRef = useRef(false);
  const [activeEmpCard, setActiveEmpCard] = useState(0);

  const managerSectionRef = useRef<HTMLDivElement>(null);
  const managerTitleRef = useRef<HTMLHeadingElement>(null);
  const managerTextRef = useRef<HTMLDivElement>(null);
  const managerAccordionRef = useRef<HTMLDivElement>(null);
  const hasRevealedManagerRef = useRef(false);
  const [activeAccordion, setActiveAccordion] = useState(0);

  const tabletSectionRef = useRef<HTMLDivElement>(null);
  const tabletWrapperRef = useRef<HTMLDivElement>(null);
  const adminTitleRef = useRef<HTMLHeadingElement>(null);
  const adminTextRef = useRef<HTMLDivElement>(null);
  const hasRevealedTabletRef = useRef(false);

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
    if (isTriggeringNextWorkRef.current || !isTopmostRef.current || isTransitioningRef.current || isDeepDiveRef.current) return;
    isTriggeringNextWorkRef.current = true;
    onNextWorkRef.current?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-work3"));
    }
    setTimeout(() => {
      isTriggeringNextWorkRef.current = false;
    }, 1000);
  };

  const getResponsiveSettings = () => {
    if (typeof window === "undefined") {
      return {
        scale: 0.91,
        x: "-2vw",
        y: 12,
        contentY: 12,
        heroHeight: "53vh",
      };
    }
    const w = window.innerWidth;
    if (w >= 1440) {
      return {
        scale: 0.91,
        x: "-2vw",
        y: 12,
        contentY: 12,
        heroHeight: "53vh",
      };
    } else if (w >= 1024) {
      return {
        scale: 0.91,
        x: "-2vw",
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
        scale: w < 480 ? 0.68 : 0.75,
        x: "0px",
        y: w < 480 ? -12 : -8,
        contentY: w < 480 ? -50 : -38,
        heroHeight: w < 480 ? "56vh" : "54vh",
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
    hasRevealedEmployeeRef.current = false;
    hasRevealedManagerRef.current = false;
    hasRevealedTabletRef.current = false;

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
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
      gsap.killTweensOf(macbookContainerRef.current);
      gsap.to(macbookContainerRef.current, {
        scale: responsive.scale,
        x: responsive.x,
        y: responsive.y,
        yPercent: isDesktop ? -50 : 0,
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
            hasRevealedEmployeeRef.current = false;
            hasRevealedManagerRef.current = false;
            hasRevealedTabletRef.current = false;
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
              const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
              gsap.killTweensOf(macbookContainerRef.current);
              gsap.set(macbookContainerRef.current, {
                scale: 1,
                x: 0,
                y: 0,
                yPercent: isDesktop ? -50 : 0,
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
          hasRevealedEmployeeRef.current = false;
          hasRevealedManagerRef.current = false;
          hasRevealedTabletRef.current = false;
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
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
      gsap.killTweensOf(macbookContainerRef.current);
      gsap.to(macbookContainerRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        yPercent: isDesktop ? -50 : 0,
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
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
        gsap.to(macbookContainerRef.current, {
          scale: responsive.scale,
          x: responsive.x,
          y: responsive.y,
          yPercent: isDesktop ? -50 : 0,
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

  const handleCardClick = (clickedIdx?: number) => {
    setActiveEmpCard((prev) => {
      if (clickedIdx !== undefined && clickedIdx !== prev) {
        return clickedIdx;
      }
      return (prev + 1) % EMPLOYEE_CARDS.length;
    });
  };

  useEffect(() => {
    if (!isOpen || !isDeepDive) {
      hasRevealedEmployeeRef.current = false;
      if (employeeTitleRef.current) {
        const words = employeeTitleRef.current.querySelectorAll(".emp-word");
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (employeeTextRef.current) {
        const paragraphs = employeeTextRef.current.querySelectorAll("p");
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
      if (employeeCardsRef.current) {
        gsap.set(employeeCardsRef.current, {
          opacity: isMobile ? 1 : 0,
          y: isMobile ? 0 : 70,
          scale: isMobile ? 1 : 0.9,
        });
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const words = employeeTitleRef.current?.querySelectorAll(".emp-word");
    if (!hasRevealedEmployeeRef.current) {
      if (words && words.length) {
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (employeeTextRef.current) {
        const paragraphs = employeeTextRef.current.querySelectorAll("p");
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      if (employeeCardsRef.current) {
        gsap.set(employeeCardsRef.current, {
          opacity: isMobile ? 1 : 0,
          y: isMobile ? 0 : 70,
          scale: isMobile ? 1 : 0.9,
        });
      }
    }

    const triggerReveal = () => {
      if (hasRevealedEmployeeRef.current) return;
      hasRevealedEmployeeRef.current = true;

      const tl = gsap.timeline();
      if (employeeCardsRef.current) {
        if (isMobile) {
          gsap.set(employeeCardsRef.current, { opacity: 1, y: 0, scale: 1 });
        } else {
          tl.fromTo(
            employeeCardsRef.current,
            { opacity: 0, y: 70, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1.05, ease: "power3.out", force3D: true },
            0
          );
        }
      }
      if (words && words.length) {
        tl.fromTo(
          words,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.09,
            ease: "power4.out",
            force3D: true,
          },
          0.1
        );
      }
      if (employeeTextRef.current) {
        const paragraphs = employeeTextRef.current.querySelectorAll("p");
        tl.fromTo(
          paragraphs,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.18, ease: "power3.out", force3D: true },
          0.2
        );
      }
    };

    const handleScrollCheck = () => {
      if (hasRevealedEmployeeRef.current) return;
      const target = employeeCardsRef.current || employeeTitleRef.current;
      if (!target || !container) return;
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (targetRect.top - containerRect.top < containerRect.height * 0.78) {
        triggerReveal();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveal();
          }
        });
      },
      {
        root: container,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (employeeTitleRef.current) observer.observe(employeeTitleRef.current);
    if (employeeCardsRef.current) observer.observe(employeeCardsRef.current);

    container.addEventListener("scroll", handleScrollCheck, { passive: true });
    handleScrollCheck();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScrollCheck);
    };
  }, [isOpen, isDeepDive]);

  useEffect(() => {
    if (!isOpen || !isDeepDive) {
      hasRevealedManagerRef.current = false;
      if (managerTitleRef.current) {
        const words = managerTitleRef.current.querySelectorAll(".man-word");
        gsap.set(words, { yPercent: 125, opacity: 0, rotate: 3 });
      }
      if (managerTextRef.current) {
        const paragraphs = managerTextRef.current.querySelectorAll("p");
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      if (managerAccordionRef.current) {
        gsap.set(managerAccordionRef.current, { opacity: 0, y: 90, scale: 0.93 });
        const panels = managerAccordionRef.current.querySelectorAll(".accordion-panel");
        if (panels.length) gsap.set(panels, { opacity: 0, y: 50 });
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const words = managerTitleRef.current?.querySelectorAll(".man-word");
    const paragraphs = managerTextRef.current?.querySelectorAll("p");
    const accordion = managerAccordionRef.current;
    const panels = accordion?.querySelectorAll(".accordion-panel");

    if (!hasRevealedManagerRef.current) {
      if (words && words.length) {
        gsap.set(words, { yPercent: 125, opacity: 0, rotate: 3 });
      }
      if (paragraphs && paragraphs.length) {
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      if (accordion) {
        gsap.set(accordion, { opacity: 0, y: 90, scale: 0.93 });
      }
      if (panels && panels.length) {
        gsap.set(panels, { opacity: 0, y: 50 });
      }
    }

    const triggerReveal = () => {
      if (hasRevealedManagerRef.current) return;
      hasRevealedManagerRef.current = true;

      const tl = gsap.timeline();

      if (managerAccordionRef.current) {
        tl.fromTo(
          managerAccordionRef.current,
          { opacity: 0, y: 90, scale: 0.93 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            force3D: true,
          },
          0
        );
      }

      if (panels && panels.length) {
        tl.fromTo(
          panels,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
            force3D: true,
          },
          0.1
        );
      }

      if (words && words.length) {
        tl.fromTo(
          words,
          { yPercent: 125, opacity: 0, rotate: 3 },
          {
            yPercent: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power4.out",
            force3D: true,
          },
          0.12
        );
      }

      if (paragraphs && paragraphs.length) {
        tl.fromTo(
          paragraphs,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.16,
            ease: "power3.out",
            force3D: true,
          },
          0.26
        );
      }
    };

    const handleScrollCheck = () => {
      if (hasRevealedManagerRef.current) return;
      const target = managerAccordionRef.current || managerTitleRef.current;
      if (!target || !container) return;

      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (targetRect.top - containerRect.top < containerRect.height * 0.78) {
        triggerReveal();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveal();
          }
        });
      },
      {
        root: container,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (managerTitleRef.current) observer.observe(managerTitleRef.current);
    if (managerAccordionRef.current) observer.observe(managerAccordionRef.current);

    container.addEventListener("scroll", handleScrollCheck, { passive: true });
    handleScrollCheck();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScrollCheck);
    };
  }, [isOpen, isDeepDive]);

  useEffect(() => {
    if (!isOpen || !isDeepDive) {
      hasRevealedTabletRef.current = false;
      if (tabletWrapperRef.current) {
        gsap.set(tabletWrapperRef.current, { opacity: 0, y: 50, scale: 0.94 });
      }
      if (adminTitleRef.current) {
        const words = adminTitleRef.current.querySelectorAll(".admin-word");
        gsap.set(words, { yPercent: 125, opacity: 0, rotate: 3 });
      }
      if (adminTextRef.current) {
        const paragraphs = adminTextRef.current.querySelectorAll("p, .admin-cta");
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const words = adminTitleRef.current?.querySelectorAll(".admin-word");
    const paragraphs = adminTextRef.current?.querySelectorAll("p, .admin-cta");

    if (!hasRevealedTabletRef.current) {
      if (tabletWrapperRef.current) {
        gsap.set(tabletWrapperRef.current, { opacity: 0, y: 50, scale: 0.94 });
      }
      if (words && words.length) {
        gsap.set(words, { yPercent: 125, opacity: 0, rotate: 3 });
      }
      if (paragraphs && paragraphs.length) {
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
    }

    const triggerReveal = () => {
      if (hasRevealedTabletRef.current) return;
      hasRevealedTabletRef.current = true;

      const tl = gsap.timeline();

      if (tabletWrapperRef.current) {
        tl.fromTo(
          tabletWrapperRef.current,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            ease: "power3.out",
            force3D: true,
          },
          0
        );
      }

      if (words && words.length) {
        tl.fromTo(
          words,
          { yPercent: 125, opacity: 0, rotate: 3 },
          {
            yPercent: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power4.out",
            force3D: true,
          },
          0.12
        );
      }

      if (paragraphs && paragraphs.length) {
        tl.fromTo(
          paragraphs,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.16,
            ease: "power3.out",
            force3D: true,
          },
          0.28
        );
      }
    };

    const handleScrollCheck = () => {
      if (hasRevealedTabletRef.current) return;
      const target = tabletWrapperRef.current || tabletSectionRef.current;
      if (!target || !container) return;

      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (targetRect.top - containerRect.top < containerRect.height * 0.8) {
        triggerReveal();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveal();
          }
        });
      },
      {
        root: container,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (tabletWrapperRef.current) observer.observe(tabletWrapperRef.current);
    if (adminTitleRef.current) observer.observe(adminTitleRef.current);

    container.addEventListener("scroll", handleScrollCheck, { passive: true });
    handleScrollCheck();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScrollCheck);
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

      targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + delta));

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

    if (isDeepDive && containerRef.current) {
      currentScroll = containerRef.current.scrollTop;
      targetScroll = containerRef.current.scrollTop;
    }

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
      if (macbookContainerRef.current) {
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
        gsap.killTweensOf(macbookContainerRef.current);
        gsap.set(macbookContainerRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          yPercent: isDesktop ? -50 : 0,
          opacity: 1,
        });
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
        className="fixed inset-0 z-[60] bg-[#F4EFE6] pointer-events-none"
        style={{ opacity: 0, visibility: "hidden" }}
      />

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
          className={`w-full h-full bg-[#F4EFE6] overscroll-contain select-none transform-gpu will-change-transform no-scrollbar outline-none pointer-events-auto before:absolute before:-top-[2px] before:left-0 before:right-0 before:h-[3px] before:bg-[#F4EFE6] before:content-[''] before:pointer-events-none ${isDeepDive ? "overflow-y-auto touch-pan-y" : "overflow-hidden touch-none"
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
            className="relative w-full min-h-dvh h-dvh flex flex-col items-center justify-center p-4 sm:p-6 md:p-6 text-neutral-950 overflow-hidden shrink-0 will-change-transform"
          >
            <div
              ref={macbookContainerRef}
              className="relative md:absolute w-full md:w-auto h-[40vh] sm:h-[44vh] md:h-[78vh] sm:md:h-[82vh] shrink-0 flex items-center justify-center pointer-events-none z-10 overflow-visible will-change-transform md:left-[41%] md:right-[7%] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 -mt-2 sm:-mt-4 md:mt-0"
            >
              <div className="w-full h-full relative pointer-events-none overflow-visible flex items-center justify-center">
                <MacBookOpening isOpen={isOpen} active={isOpen && isTopmost} />
              </div>
            </div>

            <div
              ref={leftContentRef}
              className="w-full md:w-[38%] lg:w-[37%] xl:w-[36%] relative md:absolute top-auto md:top-[34%] lg:top-[35%] xl:top-[36%] left-auto md:left-[13%] lg:left-[14%] xl:left-[15%] flex flex-col items-center text-center z-20 max-w-2xl px-4 md:px-0 pointer-events-auto will-change-transform -mt-2 sm:-mt-3 md:mt-0"
            >
              <h2
                ref={titleRef}
                className="font-black tracking-tight text-neutral-950 text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none will-change-transform text-center"
              >
                Leave Management<br />System
              </h2>
              <p
                ref={subtitleRef}
                className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-lg lg:text-xl text-neutral-600 font-sans font-medium tracking-tight leading-relaxed select-none max-w-sm sm:max-w-md lg:max-w-xl will-change-transform text-center mx-auto"
              >
                Handles time-off filings, manager approvals, and live leave balances in a single dashboard. Built to cut out back-and-forth communication and keep workforce scheduling transparent.
              </p>
              <div
                ref={buttonWrapperRef}
                className="mt-4 sm:mt-6 md:mt-9 pointer-events-auto will-change-transform flex justify-center w-full"
              >
                <TakeALookButton
                  id="btn-take-a-look-2"
                  onClick={handleTakeALook}
                  disabled={!canTakeALook || isDeepDive}
                />
              </div>
            </div>

            <SeeNextIndicator
              id="see-next-work-2"
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
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-20 md:pb-36">
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
                      FULL STACK DEVELOPER
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                      STACK
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono">
                      REACT | NODE | POSTGRESQL | TAILWIND
                    </p>
                  </div>
                </div>

                <div className="mt-12 sm:mt-16 max-w-4xl">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white leading-relaxed tracking-tight select-none">
                    <span className="text-amber-400 font-semibold">Leave Management System</span> — A straightforward web app for requesting time off, managing approvals, and tracking team calendars. It replaces scattered email threads and manual spreadsheets with a single dashboard.
                  </p>
                  <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans max-w-3xl select-none">
                    Includes role-based views, instant status notifications, and full audit logs so HR and team leads always know who’s in and who’s out.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={employeeSectionRef}
              className="w-full bg-[#F4EFE6] text-neutral-950 relative z-20 min-h-0 lg:min-h-screen py-10 sm:py-16 lg:py-36 flex items-center shadow-[0_-30px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 xl:gap-14 items-center">
                  <div
                    ref={employeeCardsRef}
                    className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start w-full will-change-transform pt-1 pb-0 sm:py-4 lg:py-6 opacity-100 lg:opacity-0"
                  >
                    <div className="block lg:hidden w-full">
                      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-neutral-950/10 border border-neutral-900/15 mb-2.5 sm:mb-4 max-w-full overflow-x-auto no-scrollbar">
                        {EMPLOYEE_CARDS.map((card, index) => {
                          const isSelected = activeEmpCard === index;
                          return (
                            <button
                              key={card.src}
                              type="button"
                              onClick={() => handleCardClick(index)}
                              className={`flex-1 min-w-0 py-2 sm:py-2.5 px-3 sm:px-4 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 select-none whitespace-nowrap ${
                                isSelected
                                  ? "bg-neutral-950 text-white shadow-md"
                                  : "text-neutral-700 hover:text-neutral-950 hover:bg-black/5"
                              }`}
                            >
                              <span className={isSelected ? "text-white/60" : "text-neutral-500"}>
                                {card.num}
                              </span>
                              <span className="truncate">{card.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-[2px] border-neutral-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                        {EMPLOYEE_CARDS.map((card, index) => (
                          <img
                            key={card.src}
                            src={card.src}
                            alt={card.alt}
                            className={`absolute inset-0 w-full h-full object-cover object-left-top select-none pointer-events-none transition-opacity duration-300 ${
                              activeEmpCard === index ? "opacity-100" : "opacity-0"
                            }`}
                            loading="lazy"
                          />
                        ))}
                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2.5 py-1 rounded-full bg-neutral-950/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90 border border-white/10 pointer-events-none">
                          {EMPLOYEE_CARDS[activeEmpCard].label}
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block relative w-full max-w-[920px] xl:max-w-[1020px] aspect-[1901/905] select-none cursor-pointer"
                      onClick={() => handleCardClick()}
                    >
                      {EMPLOYEE_CARDS.map((card, idx) => {
                        const slot =
                          (idx - activeEmpCard + EMPLOYEE_CARDS.length) % EMPLOYEE_CARDS.length;

                        let slotClasses = "";
                        if (slot === 0) {
                          slotClasses =
                            "z-30 scale-100 translate-x-0 translate-y-0 opacity-100 shadow-[0_35px_80px_rgba(0,0,0,0.28)] ring-1 ring-black/10";
                        } else if (slot === 1) {
                          slotClasses =
                            "z-20 scale-[0.96] translate-x-6 sm:translate-x-10 lg:translate-x-14 xl:translate-x-16 -translate-y-6 sm:-translate-y-9 lg:-translate-y-12 opacity-85 hover:opacity-100 shadow-[0_24px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/10";
                        } else {
                          slotClasses =
                            "z-10 scale-[0.92] -translate-x-6 sm:-translate-x-10 lg:-translate-x-14 xl:-translate-x-16 translate-y-6 sm:translate-y-9 lg:translate-y-12 opacity-70 hover:opacity-95 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/10";
                        }

                        return (
                          <div
                            key={card.src}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(idx);
                            }}
                            className={`absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-950/15 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${slotClasses}`}
                          >
                            <img
                              src={card.src}
                              alt={card.alt}
                              className="w-full h-full object-cover select-none pointer-events-none"
                              loading="lazy"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full pl-0 lg:pl-4 xl:pl-8 -mt-1 sm:mt-0">
                    <h2
                      ref={employeeTitleRef}
                      className="font-black tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none w-full text-center lg:text-left"
                    >
                      <span className="inline-block overflow-hidden py-1 mr-[0.28em]">
                        <span className="emp-word inline-block will-change-transform opacity-0">
                          Employee
                        </span>
                      </span>
                      <span className="inline-block overflow-hidden py-1">
                        <span className="emp-word inline-block will-change-transform opacity-0">
                          View
                        </span>
                      </span>
                    </h2>

                    <div
                      ref={employeeTextRef}
                      className="mt-2.5 sm:mt-4 lg:mt-7 space-y-2.5 sm:space-y-4 max-w-2xl"
                    >
                      <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-800 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                        Gives employees a simple way to file for time off and check how many leave days they have left, without having to message HR.
                      </p>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-800 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                        Shows a live view of which teammates are currently out, making it easy to plan around the team&apos;s schedule before submitting a request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={managerSectionRef}
              className="w-full bg-[#EADFC9] text-neutral-950 relative z-20 min-h-0 lg:min-h-[110vh] py-10 sm:py-16 lg:pt-36 xl:pt-40 lg:pb-56 xl:pb-64 flex items-center justify-center"
            >
              <div className="w-full max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-10 xl:gap-14 w-full">
                  <div className="w-full lg:w-[32%] xl:w-[27%] shrink-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h2
                      ref={managerTitleRef}
                      className="font-black tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] select-none w-full text-center lg:text-left"
                    >
                      <span className="inline-block overflow-hidden py-0.5 sm:py-1 mr-[0.28em]">
                        <span className="man-word inline-block will-change-transform opacity-0">
                          Manager
                        </span>
                      </span>
                      <span className="inline-block overflow-hidden py-0.5 sm:py-1">
                        <span className="man-word inline-block will-change-transform opacity-0">
                          View
                        </span>
                      </span>
                    </h2>

                    <div
                      ref={managerTextRef}
                      className="mt-2.5 sm:mt-4 lg:mt-8 space-y-2.5 sm:space-y-4 max-w-xl"
                    >
                      <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-800 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                        Covers everything in the employee view, plus the tools needed to run a team&apos;s day-to-day schedule and handle incoming requests.
                      </p>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-800 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                        Team leads can approve or reject time off, check daily availability at a glance, and view remaining leave balances for everyone on their roster.
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-[68%] xl:w-[73%] flex-1 min-w-0">
                    <div
                      ref={managerAccordionRef}
                      className="w-full select-none will-change-transform opacity-0"
                    >
                      <div className="block lg:hidden w-full">
                        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#141b27]/10 border border-neutral-900/15 mb-2.5 sm:mb-4 max-w-full overflow-x-auto no-scrollbar">
                          {ACCORDION_ITEMS.map((item, index) => {
                            const isSelected = activeAccordion === index;
                            return (
                              <button
                                key={item.num}
                                type="button"
                                onClick={() => setActiveAccordion(index)}
                                className={`flex-1 min-w-0 py-2 sm:py-2.5 px-3 sm:px-4 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 select-none whitespace-nowrap ${
                                  isSelected
                                    ? "bg-[#141b27] text-white shadow-md"
                                    : "text-neutral-700 hover:text-neutral-950 hover:bg-black/5"
                                }`}
                              >
                                <span className={isSelected ? "text-white/60" : "text-neutral-500"}>
                                  {item.num}
                                </span>
                                <span className="truncate">{item.label}</span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-[2px] border-neutral-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                          {ACCORDION_ITEMS.map((item, index) => (
                            <img
                              key={item.num}
                              src={item.src}
                              alt={item.alt}
                              className={`absolute inset-0 w-full h-full object-cover object-left-top select-none pointer-events-none transition-opacity duration-300 ${
                                activeAccordion === index ? "opacity-100" : "opacity-0"
                              }`}
                              loading="lazy"
                            />
                          ))}
                          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2.5 py-1 rounded-full bg-neutral-950/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90 border border-white/10 pointer-events-none">
                            {ACCORDION_ITEMS[activeAccordion].label}
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:flex items-stretch gap-3 sm:gap-4 lg:gap-4 h-[640px] xl:h-[690px] 2xl:h-[720px] select-none">
                        {ACCORDION_ITEMS.map((item, index) => {
                          const isExpanded = activeAccordion === index;

                          return (
                            <div
                              key={item.num}
                              onClick={() => setActiveAccordion(index)}
                              className={`accordion-panel relative rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] transform-gpu border-[2px] border-neutral-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${isExpanded
                                ? "flex-[1_1_0%] cursor-default bg-white"
                                : "flex-[0_0_84px] xl:flex-[0_0_92px] cursor-pointer bg-[#141b27] group hover:border-neutral-950"
                                }`}
                            >
                              <img
                                src={item.src}
                                alt={item.alt}
                                className={`absolute top-0 left-0 h-full min-w-[1200px] w-full max-w-none object-cover object-left-top select-none pointer-events-none transition-opacity duration-500 ease-out transform-gpu rounded-[22px] sm:rounded-[26px] ${isExpanded
                                  ? "opacity-100"
                                  : "opacity-15"
                                  }`}
                                loading="lazy"
                              />

                              <div
                                className={`absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-between py-6 sm:py-8 px-1 transition-opacity duration-500 ease-out ${isExpanded
                                  ? "opacity-0 pointer-events-none"
                                  : "opacity-100 bg-[#131924]/92"
                                  }`}
                              >
                                <span className="text-xs sm:text-sm font-mono font-semibold text-white/50 group-hover:text-white/80 transition-colors">
                                  {item.num}
                                </span>

                                <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white whitespace-nowrap [writing-mode:vertical-rl] rotate-180 select-none transition-colors">
                                    {item.label}
                                  </span>
                                </div>

                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white/70 group-hover:border-white/60 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-transform duration-300">
                                  <span className="text-base sm:text-lg font-light leading-none -translate-y-[0.5px]">+</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full bg-[#1c1c1f]">
              <div
                ref={tabletSectionRef}
                className="w-full bg-[#0f172a] text-white relative z-20 min-h-0 lg:min-h-screen flex items-center justify-center pt-10 sm:pt-14 lg:pt-24 pb-32 sm:pb-36 lg:pb-28"
                style={{ backgroundColor: "#0f172a" }}
              >
                <div className="w-full max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 xl:gap-14 items-center">
                    <div
                      ref={tabletWrapperRef}
                      className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center pointer-events-none select-none opacity-0 will-change-transform"
                    >
                      <div className="w-full h-[280px] sm:h-[380px] md:h-[600px] lg:h-[640px] xl:h-[690px] 2xl:h-[720px] relative pointer-events-none select-none">
                        <TabletOutline3D
                          videoSrc="/videos/lmsadm.webm"
                          active={isOpen && isDeepDive && isTopmost}
                          interactiveOrbit={false}
                          showFloorShadow={false}
                          xRayMode={true}
                          offsetY={-0.32}
                          className="w-full h-full relative pointer-events-none select-none"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full pl-0 lg:pl-4 xl:pl-8 -mt-2 sm:mt-0">
                      <h2
                        ref={adminTitleRef}
                        className="font-black tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none w-full text-center lg:text-left"
                      >
                        <span className="inline-block overflow-hidden py-1 mr-[0.28em]">
                          <span className="admin-word inline-block will-change-transform opacity-0">
                            Admin
                          </span>
                        </span>
                        <span className="inline-block overflow-hidden py-1">
                          <span className="admin-word inline-block will-change-transform opacity-0">
                            View
                          </span>
                        </span>
                      </h2>

                      <div
                        ref={adminTextRef}
                        className="mt-2.5 sm:mt-4 lg:mt-8 space-y-2.5 sm:space-y-4 max-w-xl"
                      >
                        <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-white/90 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                          Built around role-based access control (RBAC), giving HR and operations top-level access to oversee requests across every department, manage company-wide rules, and file their own leave.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-white/90 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                          Admins control exactly who can view, request, or approve time off by structuring departments and assigning user roles. They can also track leave usage by team, configure policies and activity logs, and get automatic alerts whenever a request sits unapproved for more than two days.
                        </p>
                        <div className="admin-cta pt-4 sm:pt-6 flex justify-center lg:justify-start opacity-0 will-change-transform">
                          <TakeALookButton
                            id="btn-view-demo-admin"
                            label="VIEW DEMO"
                            ariaLabel="View demo"
                            onClick={() => {
                              window.open("https://lms-demo-m.vercel.app/", "_blank", "noopener,noreferrer");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
