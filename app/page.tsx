"use client";

import { useState } from "react";
import LoadingScreen from "@/components/animations/LoadingScreen";
import Header from "@/components/Header";
import HeroScene3D from "@/components/HeroScene3D";
import AboutOverlay from "@/components/AboutOverlay";

export default function Home() {
  const [activeView, setActiveView] = useState<"main" | "about">("main");

  return (
    <>
      <LoadingScreen />
      <Header activeView={activeView} onViewChange={setActiveView} />
      <AboutOverlay isOpen={activeView === "about"} />
      <main id="home" className="min-h-screen w-full bg-white relative overflow-hidden flex items-center justify-center">
        <HeroScene3D />
      </main>
    </>
  );
}
