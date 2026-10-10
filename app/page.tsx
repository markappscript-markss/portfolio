"use client";

import { useState, useEffect, useCallback } from "react";
import LoadingScreen from "@/components/animations/LoadingScreen";
import Header from "@/components/Header";
import HeroScene3D from "@/components/HeroScene3D";
import AboutOverlay from "@/components/AboutOverlay";
import WorkOverlay from "@/components/WorkOverlay";

export default function Home() {
  const [activeView, setActiveView] = useState<"main" | "about" | "work">("main");

  const handleCloseWork = useCallback(() => {
    setActiveView("main");
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-trigger-main"));
    }
  }, []);

  useEffect(() => {
    const handleExploreWork = () => {
      setActiveView("work");
    };

    const handleViewAbout = () => {
      setActiveView("about");
    };

    const handleTriggerMain = () => {
      setActiveView("main");
    };

    window.addEventListener("portfolio-explore-work", handleExploreWork);
    window.addEventListener("portfolio-view-work", handleExploreWork);
    window.addEventListener("portfolio-view-about", handleViewAbout);
    window.addEventListener("portfolio-trigger-main", handleTriggerMain);

    return () => {
      window.removeEventListener("portfolio-explore-work", handleExploreWork);
      window.removeEventListener("portfolio-view-work", handleExploreWork);
      window.removeEventListener("portfolio-view-about", handleViewAbout);
      window.removeEventListener("portfolio-trigger-main", handleTriggerMain);
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <Header activeView={activeView} onViewChange={setActiveView} />
      <main id="home" className="h-[100dvh] w-full bg-white relative overflow-hidden flex items-center justify-center">
        <HeroScene3D />
      </main>
      <AboutOverlay isOpen={activeView === "about"} />
      <WorkOverlay
        isOpen={activeView === "work"}
        onClose={handleCloseWork}
      />
    </>
  );
}
