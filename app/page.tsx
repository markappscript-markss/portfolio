"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import LoadingScreen from "@/components/animations/LoadingScreen";
import Header from "@/components/Header";
import HeroScene3D from "@/components/HeroScene3D";
import AboutOverlay from "@/components/AboutOverlay";
import WorkOverlay from "@/components/WorkOverlay";
import WorkOverlay2 from "@/components/WorkOverlay2";
import WorkOverlay3 from "@/components/WorkOverlay3";
import FinalOverlay from "@/components/FinalOverlay";
import WorkOverlayBackButton from "@/components/WorkOverlayBackButton";

export default function Home() {
  const [activeView, setActiveView] = useState<"main" | "about" | "work">("main");
  const [isWork2Open, setIsWork2Open] = useState(false);
  const [isWork3Open, setIsWork3Open] = useState(false);
  const [isFinalSectionOpen, setIsFinalSectionOpen] = useState(false);
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const [isDeepDive, setIsDeepDive] = useState(false);
  const isDeepDiveRef = useRef(false);
  const backBtnContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isDeepDiveRef.current = isDeepDive;
  }, [isDeepDive]);

  const handleCloseWork = useCallback(() => {
    setActiveView("main");
    setIsWork2Open(false);
    setIsWork3Open(false);
    setIsFinalSectionOpen(false);
    setIsDarkHeader(false);
    setIsDeepDive(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-trigger-main"));
    }
  }, []);

  const handleCloseWork2 = useCallback(() => {
    setIsWork2Open(false);
    setIsWork3Open(false);
    setIsFinalSectionOpen(false);
    setIsDarkHeader(false);
    setIsDeepDive(false);
  }, []);

  const handleOpenWork2 = useCallback(() => {
    setIsWork2Open(true);
  }, []);

  const handleCloseWork3 = useCallback(() => {
    setIsWork3Open(false);
    setIsFinalSectionOpen(false);
    setIsDarkHeader(false);
    setIsDeepDive(false);
  }, []);

  const handleOpenWork3 = useCallback(() => {
    setIsWork3Open(true);
  }, []);

  const handleOpenFinal = useCallback(() => {
    setIsFinalSectionOpen(true);
  }, []);

  const handleCloseFinal = useCallback(() => {
    setIsFinalSectionOpen(false);
    setIsDarkHeader(false);
  }, []);

  const handleToMainFromFinal = useCallback(() => {
    setActiveView("main");
    setIsWork2Open(false);
    setIsWork3Open(false);
    setIsFinalSectionOpen(false);
    setIsDarkHeader(false);
    setIsDeepDive(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-trigger-main"));
    }
  }, []);

  const handleReachTop = useCallback(() => {
    setIsDarkHeader(true);
  }, []);

  const handleLeaveTop = useCallback(() => {
    setIsDarkHeader(false);
  }, []);

  const isBackCooldownRef = useRef(false);

  const handleBackClick = () => {
    if (isBackCooldownRef.current) return;

    if (isDeepDiveRef.current) {
      isBackCooldownRef.current = true;
      setIsDeepDive(false);
      isDeepDiveRef.current = false;
      setTimeout(() => {
        isBackCooldownRef.current = false;
      }, 950);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("portfolio-deepdive-back"));
      }
      return;
    }
    handleCloseWork();
  };

  useEffect(() => {
    const handleExploreWork = () => {
      setActiveView("work");
      setIsWork2Open(false);
      setIsWork3Open(false);
      setIsFinalSectionOpen(false);
      setIsDarkHeader(false);
      setIsDeepDive(false);
    };

    const handleViewAbout = () => {
      setActiveView("about");
      setIsWork2Open(false);
      setIsWork3Open(false);
      setIsFinalSectionOpen(false);
      setIsDarkHeader(false);
      setIsDeepDive(false);
    };

    const handleTriggerMain = () => {
      setActiveView("main");
      setIsWork2Open(false);
      setIsWork3Open(false);
      setIsFinalSectionOpen(false);
      setIsDarkHeader(false);
      setIsDeepDive(false);
    };

    const handleViewWork2 = () => {
      setIsWork2Open(true);
    };

    const handleViewWork3 = () => {
      setIsWork3Open(true);
    };

    const handleViewFinal = () => {
      setIsFinalSectionOpen(true);
    };

    const handleDeepDiveEnter = () => {
      setIsDeepDive(true);
    };

    const handleDeepDiveExit = () => {
      setIsDeepDive(false);
    };

    window.addEventListener("portfolio-explore-work", handleExploreWork);
    window.addEventListener("portfolio-view-work", handleExploreWork);
    window.addEventListener("portfolio-view-about", handleViewAbout);
    window.addEventListener("portfolio-trigger-main", handleTriggerMain);
    window.addEventListener("portfolio-view-work2", handleViewWork2);
    window.addEventListener("portfolio-view-work3", handleViewWork3);
    window.addEventListener("portfolio-view-final", handleViewFinal);
    window.addEventListener("portfolio-deepdive-enter", handleDeepDiveEnter);
    window.addEventListener("portfolio-deepdive-exit", handleDeepDiveExit);

    return () => {
      window.removeEventListener("portfolio-explore-work", handleExploreWork);
      window.removeEventListener("portfolio-view-work", handleExploreWork);
      window.removeEventListener("portfolio-view-about", handleViewAbout);
      window.removeEventListener("portfolio-trigger-main", handleTriggerMain);
      window.removeEventListener("portfolio-view-work2", handleViewWork2);
      window.removeEventListener("portfolio-view-work3", handleViewWork3);
      window.removeEventListener("portfolio-view-final", handleViewFinal);
      window.removeEventListener("portfolio-deepdive-enter", handleDeepDiveEnter);
      window.removeEventListener("portfolio-deepdive-exit", handleDeepDiveExit);
    };
  }, []);

  useEffect(() => {
    if (!backBtnContainerRef.current) return;
    if (activeView === "work" && !isFinalSectionOpen) {
      gsap.killTweensOf(backBtnContainerRef.current);
      gsap.to(backBtnContainerRef.current, {
        autoAlpha: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    } else {
      gsap.killTweensOf(backBtnContainerRef.current);
      gsap.to(backBtnContainerRef.current, {
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.in",
      });
      setIsDeepDive(false);
    }
  }, [activeView, isFinalSectionOpen]);

  useEffect(() => {
    if (!backBtnContainerRef.current) return;
    const targetY = isDeepDive
      ? 0
      : typeof window !== "undefined" && window.innerWidth < 640
      ? 64
      : 72;

    gsap.killTweensOf(backBtnContainerRef.current);
    gsap.to(backBtnContainerRef.current, {
      y: targetY,
      duration: 0.95,
      ease: "power2.inOut",
    });
  }, [isDeepDive]);

  return (
    <>
      <LoadingScreen />
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        isDarkBackground={isDarkHeader}
      />

      <div
        ref={backBtnContainerRef}
        className="fixed left-4 sm:left-12 top-4 sm:top-6 z-50 pointer-events-auto"
        style={{
          opacity: 0,
          visibility: "hidden",
          transform: "translateY(72px)",
        }}
      >
        <WorkOverlayBackButton
          id="btn-back-work-global"
          onClick={handleBackClick}
          isDeepDive={isDeepDive}
          isVisible={activeView === "work" && !isFinalSectionOpen}
        />
      </div>

      <main id="home" className="h-[100dvh] w-full bg-white relative overflow-hidden flex items-center justify-center">
        <HeroScene3D />
      </main>
      <AboutOverlay isOpen={activeView === "about"} />
      <WorkOverlay
        isOpen={activeView === "work"}
        onClose={handleCloseWork}
        onNextWork={handleOpenWork2}
        hideBackButton={isFinalSectionOpen}
      />
      <WorkOverlay2
        isOpen={activeView === "work" && isWork2Open}
        onClose={handleCloseWork2}
        onNextWork={handleOpenWork3}
        isTopmost={!isWork3Open}
        isHidden={isFinalSectionOpen}
      />
      <WorkOverlay3
        isOpen={activeView === "work" && isWork2Open && isWork3Open}
        onClose={handleCloseWork3}
        onNextWork={handleOpenFinal}
        isTopmost={!isFinalSectionOpen}
      />
      <FinalOverlay
        isOpen={activeView === "work" && isWork2Open && isWork3Open && isFinalSectionOpen}
        onClose={handleCloseFinal}
        onToMain={handleToMainFromFinal}
        onReachTop={handleReachTop}
        onLeaveTop={handleLeaveTop}
      />
    </>
  );
}
