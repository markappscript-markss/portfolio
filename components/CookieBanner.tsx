"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "granted" && typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "granted");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "denied");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    setIsVisible(false);
  };

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-open-privacy"));
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#0c0c0c]/95 backdrop-blur-md text-white border border-white/10 rounded-xl p-4 shadow-2xl font-mono text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-col gap-3">
        <p className="text-white/80 leading-relaxed">
          This site uses cookies for analytics to improve visitor experience. See our{" "}
          <button
            type="button"
            onClick={handleOpenPrivacy}
            className="text-white underline underline-offset-2 hover:text-[#ff2222] transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          .
        </p>
        <div className="flex items-center gap-2 justify-end">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 rounded border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-3 py-1.5 rounded bg-white text-black font-semibold hover:bg-[#ff2222] hover:text-white transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
