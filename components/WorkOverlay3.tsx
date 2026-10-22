"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { WORK_OVERLAY_CURVE_CONFIG } from "./WorkOverlay";
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

const PREVIEW_VIDEOS = [
  {
    src: "/videos/preview1.webm",
    title: "Preview 1",
  },
  {
    src: "/videos/preview2.webm",
    title: "Preview 2",
  },
  {
    src: "/videos/preview3.webm",
    title: "Preview 3",
  },
];

const STATIC_ADS = [
  {
    id: "static-1",
    src: "/images/static1.webp",
    alt: "Static Ad Creative 1",
    top: "14%",
    left: "5%",
    className: "w-[145px] sm:w-[175px] md:w-[205px] lg:w-[235px] xl:w-[265px] sm:left-[5.5%] xl:left-[6%]",
    speed: -180,
    zIndex: 25,
    opacity: "opacity-100",
    shadow: "shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/10",
  },
  {
    id: "static-2",
    src: "/images/static2.webp",
    alt: "Static Ad Creative 2",
    top: "24%",
    left: "21%",
    className: "w-[115px] sm:w-[135px] md:w-[155px] lg:w-[175px] xl:w-[195px] sm:left-[21.5%] xl:left-[22%]",
    speed: 90,
    zIndex: 14,
    opacity: "opacity-95",
    shadow: "shadow-[0_14px_35px_rgba(0,0,0,0.6)] ring-1 ring-white/10",
  },
  {
    id: "static-3",
    src: "/images/static3.webp",
    alt: "Static Ad Creative 3",
    top: "32%",
    left: "73%",
    className: "w-[145px] sm:w-[175px] md:w-[205px] lg:w-[235px] xl:w-[270px] sm:left-[74%] xl:left-[75%]",
    speed: 190,
    zIndex: 26,
    opacity: "opacity-100",
    shadow: "shadow-[0_22px_55px_rgba(0,0,0,0.8)] ring-1 ring-white/10",
  },
  {
    id: "static-4",
    src: "/images/static4.webp",
    alt: "Static Ad Creative 4",
    top: "12%",
    left: "66%",
    className: "w-[115px] sm:w-[135px] md:w-[155px] lg:w-[175px] xl:w-[195px] sm:left-[66.5%] xl:left-[67%]",
    speed: -95,
    zIndex: 15,
    opacity: "opacity-95",
    shadow: "shadow-[0_14px_35px_rgba(0,0,0,0.6)] ring-1 ring-white/10",
  },
  {
    id: "static-5",
    src: "/images/static5.webp",
    alt: "Static Ad Creative 5",
    top: "6%",
    left: "84%",
    className: "w-[80px] sm:w-[95px] md:w-[110px] lg:w-[120px] xl:w-[135px] sm:left-[85%] xl:left-[86%]",
    speed: 35,
    zIndex: 7,
    opacity: "opacity-85",
    shadow: "shadow-[0_8px_20px_rgba(0,0,0,0.45)] ring-1 ring-white/5",
  },
  {
    id: "static-6",
    src: "/images/static6.webp",
    alt: "Static Ad Creative 6",
    top: "54%",
    left: "13%",
    className: "w-[115px] sm:w-[135px] md:w-[155px] lg:w-[175px] xl:w-[195px] sm:left-[13.5%] xl:left-[14%]",
    speed: -70,
    zIndex: 14,
    opacity: "opacity-95",
    shadow: "shadow-[0_14px_35px_rgba(0,0,0,0.6)] ring-1 ring-white/10",
  },
  {
    id: "static-7",
    src: "/images/static7.webp",
    alt: "Static Ad Creative 7",
    top: "58%",
    left: "33%",
    className: "w-[75px] sm:w-[88px] md:w-[100px] lg:w-[112px] xl:w-[125px] sm:left-[34%] xl:left-[35%]",
    speed: 40,
    zIndex: 8,
    opacity: "opacity-85",
    shadow: "shadow-[0_8px_20px_rgba(0,0,0,0.45)] ring-1 ring-white/5",
  },
];

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
  const phoneReplayRef = useRef<() => void>(() => { });
  const backBtnContainerRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const blackSectionRef = useRef<HTMLDivElement>(null);
  const videoCardsRef = useRef<HTMLDivElement>(null);
  const videoTitleRef = useRef<HTMLHeadingElement>(null);
  const videoTextRef = useRef<HTMLDivElement>(null);
  const hasRevealedVideoCardsRef = useRef(false);
  const hasRevealedVideoTextRef = useRef(false);
  const staticSectionRef = useRef<HTMLDivElement>(null);
  const staticCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const staticTextRef = useRef<HTMLDivElement>(null);
  const processVideoRef = useRef<HTMLDivElement>(null);
  const processTextRef = useRef<HTMLDivElement>(null);
  const hasRevealedProcessRef = useRef(false);

  const [isDeepDive, setIsDeepDive] = useState(false);
  const isDeepDiveRef = useRef(false);
  const [isDeepDiveNav, setIsDeepDiveNav] = useState(false);
  const [canTakeALook, setCanTakeALook] = useState(true);
  const canTakeALookRef = useRef(true);
  const processSectionRef = useRef<HTMLDivElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoCarouselHovered, setIsVideoCarouselHovered] = useState(false);
  const [isPhonePaused, setIsPhonePaused] = useState(false);
  const isPhonePausedRef = useRef(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    if (!isOpen || !isDeepDive || isVideoCarouselHovered) return;
    const timer = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % PREVIEW_VIDEOS.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isOpen, isDeepDive, isVideoCarouselHovered, activeVideoIndex]);

  useEffect(() => {
    if (!isOpen || !isDeepDive) {
      videoRefs.current.forEach((v) => {
        if (v && !v.paused) {
          v.pause();
        }
      });
      return;
    }

    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === activeVideoIndex) {
        if (v.paused) {
          const playPromise = v.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => { });
          }
        }
      } else {
        if (!v.paused) {
          v.pause();
        }
      }
    });
  }, [isOpen, isDeepDive, activeVideoIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const offscreen = container.scrollTop > 180;
      if (offscreen !== isPhonePausedRef.current) {
        isPhonePausedRef.current = offscreen;
        setIsPhonePaused(offscreen);
      }
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

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
      isPhonePausedRef.current = true;
      setIsPhonePaused(true);
    } else if (isReturningFromChildRef.current) {
      isPhonePausedRef.current = false;
      setIsPhonePaused(false);
      const timer = setTimeout(() => {
        isReturningFromChildRef.current = false;
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isTopmost]);

  const handleClose = () => {
    if (isTransitioningRef.current) return;
    hasRevealedVideoCardsRef.current = false;
    hasRevealedVideoTextRef.current = false;
    hasRevealedProcessRef.current = false;
    isPhonePausedRef.current = false;
    setIsPhonePaused(false);
    onCloseRef.current?.();
  };

  const handleSeeNext = () => {
    if (isTriggeringNextWorkRef.current || !isTopmostRef.current || isTransitioningRef.current || isDeepDiveRef.current) return;
    isTriggeringNextWorkRef.current = true;
    onNextWorkRef.current?.();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-view-workarchive"));
    }
    setTimeout(() => {
      isTriggeringNextWorkRef.current = false;
    }, 1000);
  };

  const getResponsiveSettings = () => {
    if (typeof window === "undefined") {
      return {
        scale: 0.91,
        x: "2vw",
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
        scale: w < 480 ? 0.72 : 0.76,
        x: "0px",
        y: w < 480 ? -150 : -130,
        contentY: 0,
        heroHeight: w < 480 ? "62vh" : "60vh",
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
      containerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
        xPercent: isDesktop ? 0 : -50,
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

    hasRevealedVideoCardsRef.current = false;
    hasRevealedVideoTextRef.current = false;
    hasRevealedProcessRef.current = false;
    isPhonePausedRef.current = false;
    setIsPhonePaused(false);
    if (videoCardsRef.current) gsap.killTweensOf(videoCardsRef.current);
    if (videoTitleRef.current) {
      const words = videoTitleRef.current.querySelectorAll(".video-word");
      gsap.killTweensOf(words);
    }
    if (videoTextRef.current) {
      const paragraphs = videoTextRef.current.querySelectorAll("p");
      gsap.killTweensOf(paragraphs);
    }
    if (processVideoRef.current) gsap.killTweensOf(processVideoRef.current);
    if (processTextRef.current) {
      const items = processTextRef.current.querySelectorAll("p, .process-cta");
      gsap.killTweensOf(items);
    }

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
              containerRef.current.style.overflowY = "hidden";
              containerRef.current.scrollTop = 0;
              containerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollTop = 0;
                containerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }
            }, 50);

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
              heroSectionRef.current.style.height = "";
              heroSectionRef.current.style.minHeight = "";
              heroSectionRef.current.style.maxHeight = "";
              heroSectionRef.current.style.paddingTop = "";
              heroSectionRef.current.style.paddingBottom = "";
            }

            if (macbookContainerRef.current) {
              const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
              gsap.killTweensOf(macbookContainerRef.current);
              gsap.set(macbookContainerRef.current, {
                scale: 1,
                x: 0,
                y: 0,
                xPercent: isDesktop ? 0 : -50,
                opacity: 1,
              });
            }

            if (leftContentRef.current) {
              gsap.killTweensOf(leftContentRef.current);
              gsap.set(leftContentRef.current, { y: 0 });
              leftContentRef.current.style.removeProperty("transform");
              void leftContentRef.current.offsetHeight;
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
      containerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        duration: 1.15,
        ease: "power3.inOut",
        onComplete: () => {
          setIsDeepDive(false);
          isDeepDiveRef.current = false;
          isTransitioningRef.current = false;
          setCanTakeALook(true);
          canTakeALookRef.current = true;
          if (containerRef.current) {
            containerRef.current.style.overflowY = "hidden";
            containerRef.current.scrollTop = 0;
            containerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
          }
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          }
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.scrollTop = 0;
              containerRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
          }, 50);
          if (heroSectionRef.current) {
            heroSectionRef.current.style.height = "";
            heroSectionRef.current.style.minHeight = "";
            heroSectionRef.current.style.maxHeight = "";
            heroSectionRef.current.style.paddingTop = "";
            heroSectionRef.current.style.paddingBottom = "";
          }
          if (leftContentRef.current) {
            leftContentRef.current.style.removeProperty("transform");
            void leftContentRef.current.offsetHeight;
          }
          staticCardRefs.current.forEach((el) => {
            if (el) gsap.set(el, { y: 0 });
          });
          if (staticTextRef.current) {
            gsap.set(staticTextRef.current, { y: 0 });
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
        xPercent: isDesktop ? 0 : -50,
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
    if (!isOpen || !isDeepDive) {
      hasRevealedVideoCardsRef.current = false;
      hasRevealedVideoTextRef.current = false;
      if (videoCardsRef.current) {
        gsap.set(videoCardsRef.current, { opacity: 0, y: 70, scale: 0.92 });
      }
      if (videoTitleRef.current) {
        const words = videoTitleRef.current.querySelectorAll(".video-word");
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (videoTextRef.current) {
        const paragraphs = videoTextRef.current.querySelectorAll("p");
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const words = videoTitleRef.current?.querySelectorAll(".video-word");
    const paragraphs = videoTextRef.current?.querySelectorAll("p");

    if (!hasRevealedVideoCardsRef.current && videoCardsRef.current) {
      gsap.set(videoCardsRef.current, { opacity: 0, y: 70, scale: 0.92 });
    }
    if (!hasRevealedVideoTextRef.current) {
      if (words && words.length) {
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (paragraphs && paragraphs.length) {
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
    }

    const triggerCardsReveal = () => {
      if (hasRevealedVideoCardsRef.current) return;
      hasRevealedVideoCardsRef.current = true;

      if (videoCardsRef.current) {
        gsap.fromTo(
          videoCardsRef.current,
          { opacity: 0, y: 70, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            force3D: true,
          }
        );
      }
    };

    const triggerTextReveal = (delay = 0) => {
      if (hasRevealedVideoTextRef.current) return;
      hasRevealedVideoTextRef.current = true;

      const tl = gsap.timeline({ delay });
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
          0
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
            stagger: 0.18,
            ease: "power3.out",
            force3D: true,
          },
          0.14
        );
      }
    };

    const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 1024;

    const handleScrollCheck = () => {
      if (!container) return;
      const containerRect = container.getBoundingClientRect();

      if (isDesktop()) {
        if (!hasRevealedVideoCardsRef.current || !hasRevealedVideoTextRef.current) {
          const target = videoCardsRef.current || videoTitleRef.current;
          if (target) {
            const rect = target.getBoundingClientRect();
            if (rect.top - containerRect.top < containerRect.height * 0.78) {
              triggerCardsReveal();
              triggerTextReveal(0.08);
            }
          }
        }
      } else {
        if (!hasRevealedVideoCardsRef.current && videoCardsRef.current) {
          const rect = videoCardsRef.current.getBoundingClientRect();
          if (rect.top - containerRect.top < containerRect.height * 0.78) {
            triggerCardsReveal();
          }
        }
        if (!hasRevealedVideoTextRef.current && (videoTitleRef.current || videoTextRef.current)) {
          const target = videoTitleRef.current || videoTextRef.current;
          if (target) {
            const rect = target.getBoundingClientRect();
            if (rect.top - containerRect.top < containerRect.height * 0.78) {
              triggerTextReveal(0);
            }
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isDesktop()) {
              triggerCardsReveal();
              triggerTextReveal(0.08);
            } else {
              if (entry.target === videoCardsRef.current) {
                triggerCardsReveal();
              }
              if (entry.target === videoTitleRef.current || entry.target === videoTextRef.current) {
                triggerTextReveal(0);
              }
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (videoCardsRef.current) observer.observe(videoCardsRef.current);
    if (videoTitleRef.current) observer.observe(videoTitleRef.current);
    if (videoTextRef.current) observer.observe(videoTextRef.current);

    container.addEventListener("scroll", handleScrollCheck, { passive: true });
    handleScrollCheck();

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScrollCheck);
    };
  }, [isOpen, isDeepDive]);

  useEffect(() => {
    if (!isOpen || !isDeepDive) {
      hasRevealedProcessRef.current = false;
      if (processVideoRef.current) {
        gsap.set(processVideoRef.current, { opacity: 0, y: 60, scale: 0.94 });
      }
      if (processTextRef.current) {
        const items = processTextRef.current.querySelectorAll("p, .process-cta");
        gsap.set(items, { opacity: 0, y: 35 });
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const items = processTextRef.current?.querySelectorAll("p, .process-cta");

    if (!hasRevealedProcessRef.current) {
      if (processVideoRef.current) {
        gsap.set(processVideoRef.current, { opacity: 0, y: 60, scale: 0.94 });
      }
      if (items && items.length) {
        gsap.set(items, { opacity: 0, y: 35 });
      }
    }

    const triggerProcessReveal = () => {
      if (hasRevealedProcessRef.current) return;
      hasRevealedProcessRef.current = true;

      if (processVideoRef.current) {
        gsap.fromTo(
          processVideoRef.current,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            force3D: true,
          }
        );
      }

      if (items && items.length) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            force3D: true,
          }
        );
      }
    };

    const handleScrollCheck = () => {
      if (!container || hasRevealedProcessRef.current) return;
      const containerRect = container.getBoundingClientRect();
      const target = processVideoRef.current || processTextRef.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        if (rect.top - containerRect.top < containerRect.height * 0.85) {
          triggerProcessReveal();
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerProcessReveal();
          }
        });
      },
      {
        root: container,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (processVideoRef.current) observer.observe(processVideoRef.current);
    if (processTextRef.current) observer.observe(processTextRef.current);

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

    const updateStaticParallax = (scrollTop: number) => {
      if (typeof window !== "undefined" && window.innerWidth < 768) return;
      const section = staticSectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const containerHeight = container.clientHeight;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const currentDist = scrollTop + containerHeight - sectionTop;
      const totalDist = sectionHeight + containerHeight;
      if (totalDist <= 0) return;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));

      STATIC_ADS.forEach((ad, i) => {
        const el = staticCardRefs.current[i];
        if (el) {
          const yVal = (progress - 0.5) * ad.speed;
          gsap.set(el, { y: yVal, force3D: true });
        }
      });

      if (staticTextRef.current) {
        const textSpeed = 700;
        const textY = (progress - 0.5) * textSpeed;
        gsap.set(staticTextRef.current, { y: textY, force3D: true });
      }
    };

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
        updateStaticParallax(currentScroll);
        rafId = requestAnimationFrame(loop);
      } else {
        currentScroll = targetScroll;
        container.scrollTop = currentScroll;
        updateStaticParallax(currentScroll);
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
        updateStaticParallax(currentScroll);
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
      updateStaticParallax(containerRef.current.scrollTop);
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
      hasRevealedVideoCardsRef.current = false;
      hasRevealedVideoTextRef.current = false;
      if (videoCardsRef.current) {
        gsap.killTweensOf(videoCardsRef.current);
        gsap.set(videoCardsRef.current, { opacity: 0, y: 70, scale: 0.92 });
      }
      if (videoTitleRef.current) {
        const words = videoTitleRef.current.querySelectorAll(".video-word");
        gsap.killTweensOf(words);
        gsap.set(words, { yPercent: 115, opacity: 0 });
      }
      if (videoTextRef.current) {
        const paragraphs = videoTextRef.current.querySelectorAll("p");
        gsap.killTweensOf(paragraphs);
        gsap.set(paragraphs, { opacity: 0, y: 40 });
      }
      staticCardRefs.current.forEach((el) => {
        if (el) {
          gsap.killTweensOf(el);
          gsap.set(el, { y: 0 });
        }
      });
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
        className="fixed inset-0 z-[47] pointer-events-none overflow-visible select-none"
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
              ref={macbookContainerRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[11%] md:right-[37%] h-dvh w-full md:w-auto flex items-center justify-center pointer-events-none z-10 overflow-visible will-change-transform"
            >
              <div className="w-full h-full relative pointer-events-none overflow-visible flex items-center justify-center">
                <Phone3D
                  enableOrbit={false}
                  enableGizmo={false}
                  showReplay={false}
                  showFloorShadow={false}
                  phoneScale={isMobile ? 0.92 : 1.16}
                  targetOffsetY={isMobile ? 1.35 : 0}
                  paused={!isOpen || !isTopmost || isPhonePaused}
                  onReplayTrigger={(fn) => {
                    phoneReplayRef.current = fn;
                  }}
                  className="w-full h-full pointer-events-none"
                />
              </div>
            </div>

            <div
              ref={leftContentRef}
              className="w-full md:w-[38%] lg:w-[37%] xl:w-[36%] absolute top-[70%] sm:top-[65%] left-0 right-0 md:left-auto md:right-[17%] lg:right-[18%] xl:right-[19%] md:top-[34%] lg:top-[35%] xl:top-[36%] flex flex-col items-center text-center z-20 max-w-2xl px-6 md:px-0 pointer-events-auto will-change-transform"
            >
              <h2
                ref={titleRef}
                className="font-black tracking-tight text-neutral-950 text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none will-change-transform text-center"
              >
                AI Video and<br />Static Ads
              </h2>
              <p
                ref={subtitleRef}
                className="mt-2.5 sm:mt-3 md:mt-5 text-xs sm:text-sm md:text-lg lg:text-xl text-neutral-600 font-sans font-medium tracking-tight leading-relaxed select-none max-w-sm sm:max-w-md lg:max-w-xl will-change-transform text-center mx-auto"
              >
                End-to-end production of AI-driven video and static ad campaigns, blending creative strategy with high-converting motion design.
              </p>
              <div
                ref={buttonWrapperRef}
                className="mt-3.5 sm:mt-5 md:mt-9 pointer-events-auto will-change-transform flex justify-center w-full"
              >
                <TakeALookButton
                  id="btn-take-a-look-3"
                  onClick={handleTakeALook}
                  disabled={!canTakeALook || isDeepDive}
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

            <div className="w-full bg-white text-neutral-950 relative z-20 min-h-screen py-20 sm:py-28 lg:py-32 flex items-center shadow-[0_-30px_60px_rgba(0,0,0,0.12)]">
              <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                  <div
                    ref={videoCardsRef}
                    className="lg:col-span-7 xl:col-span-7 flex flex-col items-center justify-center w-full py-6 select-none opacity-0 will-change-transform"
                    onMouseEnter={() => setIsVideoCarouselHovered(true)}
                    onMouseLeave={() => setIsVideoCarouselHovered(false)}
                  >
                    <div className="relative w-[260px] sm:w-[300px] md:w-[350px] lg:w-[380px] xl:w-[410px] aspect-[9/16] select-none flex items-center justify-center">
                      {PREVIEW_VIDEOS.map((item, idx) => {
                        const slot =
                          (idx - activeVideoIndex + PREVIEW_VIDEOS.length) % PREVIEW_VIDEOS.length;

                        let slotClasses = "";
                        if (slot === 0) {
                          slotClasses =
                            "z-30 scale-100 translate-x-0 opacity-100 cursor-default pointer-events-auto";
                        } else if (slot === 1) {
                          slotClasses =
                            "z-10 scale-[0.90] translate-x-[38%] sm:translate-x-[42%] md:translate-x-[46%] opacity-75 hover:opacity-95 cursor-pointer pointer-events-auto";
                        } else {
                          slotClasses =
                            "z-10 scale-[0.90] -translate-x-[38%] sm:-translate-x-[42%] md:-translate-x-[46%] opacity-75 hover:opacity-95 cursor-pointer pointer-events-auto";
                        }

                        return (
                          <div
                            key={item.src}
                            onClick={() => setActiveVideoIndex(idx)}
                            className={`group absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-950/15 shadow-[0_24px_55px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-transform ${slotClasses}`}
                          >
                            <video
                              ref={(el) => {
                                videoRefs.current[idx] = el;
                                if (el && isOpen && isDeepDive && idx === activeVideoIndex && el.paused) {
                                  el.play().catch(() => { });
                                }
                              }}
                              src={item.src}
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="w-full h-full object-cover select-none pointer-events-none transform-gpu"
                            />
                            <div
                              className={`absolute inset-0 bg-black/25 transition-opacity duration-500 pointer-events-none ${slot === 0 ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left w-full pl-0 lg:-ml-4 xl:-ml-8">
                    <h2
                      ref={videoTitleRef}
                      className="font-black tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none whitespace-nowrap text-center lg:text-left"
                    >
                      <span className="inline-block overflow-hidden py-1 mr-[0.28em]">
                        <span className="video-word inline-block will-change-transform opacity-0">
                          Video
                        </span>
                      </span>
                      <span className="inline-block overflow-hidden py-1">
                        <span className="video-word inline-block will-change-transform opacity-0">
                          Ads
                        </span>
                      </span>
                    </h2>

                    <div
                      ref={videoTextRef}
                      className="mt-6 sm:mt-8 space-y-5 max-w-xl"
                    >
                      <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-800 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                        Short vertical video ads in the style your brand needs: UGC-style creator content, polished studio shots, product demos, and more. Each one starts from your brief and goes through script, storyboard, and final cut.
                      </p>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-800 leading-[1.65] tracking-tight select-none opacity-0 will-change-transform">
                        Every video is checked against platform ad policies before it ships, covering claims, visuals, captions, and audio, so it&apos;s ready to run on TikTok, Instagram Reels, and Pinterest without getting flagged.
                      </p>
                    </div>
                  </div>
                </div>

                {children}
              </div>
            </div>

            <div
              ref={staticSectionRef}
              className="w-full bg-[#080C18] text-white relative z-20 min-h-0 md:min-h-[110vh] xl:min-h-[125vh] py-10 md:py-0 md:pt-14 md:pb-4 lg:pt-20 lg:pb-8 overflow-hidden select-none"
            >
              <div className="block md:hidden w-full px-6 sm:px-8 pb-4">
                <div className="w-full text-left">
                  <h2 className="font-black tracking-tight text-white text-3xl leading-[1.08] select-none text-center">
                    Static Ads
                  </h2>
                  <div className="mt-5 space-y-4">
                    <p className="text-base font-sans font-normal text-neutral-300 leading-[1.65] tracking-tight select-none">
                      Scroll-stopping static ads for affiliate marketing, Pinterest, and social media, designed around your product and your audience. Pins, feed posts, and story formats all come from the same brief, so the look stays consistent on every platform.
                    </p>
                    <p className="text-base font-sans font-normal text-neutral-300 leading-[1.65] tracking-tight select-none">
                      Each design is checked against platform ad policies before delivery, covering claims, text, and visuals. Variations are easy to produce, so you can test different layouts, headlines, and images and keep the ones that perform.
                    </p>
                  </div>
                </div>

                <div className="mt-6 -mx-6 px-6 sm:-mx-8 sm:px-8 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 pt-1 touch-pan-x">
                  {STATIC_ADS.map((item) => (
                    <div
                      key={item.id}
                      className="shrink-0 w-[240px] snap-center rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_14px_35px_rgba(0,0,0,0.6)]"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        draggable={false}
                        className="w-full h-auto object-cover select-none pointer-events-none block"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block relative w-full h-[95vh] sm:h-[102vh] xl:h-[108vh] px-4 sm:px-8 lg:px-12">
                <div
                  ref={staticTextRef}
                  className="absolute top-[6%] sm:top-[7%] xl:top-[8%] left-1/2 -translate-x-1/2 w-[90%] max-w-md sm:max-w-lg xl:max-w-xl text-left z-20 pointer-events-auto transform-gpu will-change-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
                  style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.95), 0 1px 2px rgba(0, 0, 0, 1)" }}
                >
                  <h2
                    className="font-black tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] select-none whitespace-nowrap"
                    style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.95), 0 1px 2px rgba(0, 0, 0, 1)" }}
                  >
                    Static Ads
                  </h2>
                  <div className="mt-6 sm:mt-8 space-y-5">
                    <p
                      className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-300 leading-[1.65] tracking-tight select-none"
                      style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.95), 0 1px 2px rgba(0, 0, 0, 1)" }}
                    >
                      Scroll-stopping static ads for affiliate marketing, Pinterest, and social media, designed around your product and your audience. Pins, feed posts, and story formats all come from the same brief, so the look stays consistent on every platform.
                    </p>
                    <p
                      className="text-base sm:text-lg md:text-xl lg:text-[19px] xl:text-[20px] font-sans font-normal text-neutral-300 leading-[1.65] tracking-tight select-none"
                      style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.95), 0 1px 2px rgba(0, 0, 0, 1)" }}
                    >
                      Each design is checked against platform ad policies before delivery, covering claims, text, and visuals. Variations are easy to produce, so you can test different layouts, headlines, and images and keep the ones that perform.
                    </p>
                  </div>
                </div>

                {STATIC_ADS.map((item, idx) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      staticCardRefs.current[idx] = el;
                    }}
                    className={`absolute transform-gpu will-change-transform ${item.className}`}
                    style={{ top: item.top, left: item.left, zIndex: item.zIndex }}
                  >
                    <div
                      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 ${item.shadow} ${item.opacity} transition-all duration-500 ease-out hover:scale-[1.03] hover:opacity-100 hover:z-40 cursor-pointer`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        draggable={false}
                        className="w-full h-auto object-cover select-none pointer-events-none block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full bg-[#1c1c1f]">
              <div
                ref={processSectionRef}
                className="w-full bg-white text-neutral-950 relative z-20 min-h-screen py-20 sm:py-28 lg:py-32 flex items-center shadow-[0_-30px_60px_rgba(0,0,0,0.12),0_30px_70px_rgba(0,0,0,0.5)]"
              >
                <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-9 xl:gap-10 items-center">
                    <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-left w-full order-2 lg:order-1">
                      <div ref={processTextRef} className="space-y-5 max-w-lg">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-[19px] xl:text-[21px] font-sans font-normal text-neutral-800 leading-[1.6] tracking-tight select-none opacity-0 will-change-transform">
                          One clear process from product brief to launch-ready ads: script, storyboard, video and static production, policy check, and revisions.
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-[19px] xl:text-[21px] font-sans font-normal text-neutral-800 leading-[1.6] tracking-tight select-none opacity-0 will-change-transform">
                          The full campaign, with variations for testing, is delivered in one place.
                        </p>
                        <div className="process-cta pt-3 sm:pt-4 flex justify-start opacity-0 will-change-transform">
                          <TakeALookButton
                            id="btn-view-files"
                            label="View Files"
                            ariaLabel="View Files"
                            onClick={() => {
                              window.open(
                                "https://drive.google.com/drive/folders/1_vaVOS8wGJpVYOVlH29UQnac_eMbv59z?usp=sharing",
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      ref={processVideoRef}
                      className="lg:col-span-8 xl:col-span-8 flex flex-col items-center justify-center w-full order-1 lg:order-2 opacity-0 will-change-transform"
                    >
                      <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto block"
                        >
                          <source src="/videos/vidprocess.webm" type="video/webm" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-full left-0 right-0 h-[120vh] pointer-events-none -mt-px bg-white"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
