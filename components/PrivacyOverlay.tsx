"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface PrivacyOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyOverlay({ isOpen, onClose }: PrivacyOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);

  const handleClose = useCallback(() => {
    if (isTransitioningRef.current || !overlayRef.current || !contentRef.current) return;
    isTransitioningRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
        onClose();
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { display: "none" });
        }
      },
    });

    tl.to(contentRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.15"
    );
  }, [onClose]);

  useEffect(() => {
    if (!overlayRef.current || !contentRef.current) return;

    if (isOpen) {
      isTransitioningRef.current = true;
      gsap.killTweensOf([overlayRef.current, contentRef.current]);

      gsap.set(overlayRef.current, { display: "block", opacity: 0 });
      gsap.set(contentRef.current, { y: 60, opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
        },
      });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      }).to(
        contentRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        },
        "-=0.2"
      ).fromTo(
        ".privacy-section",
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleWindowWheel = (e: WheelEvent) => {
      if (overlayRef.current && overlayRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    const handleWindowTouch = (e: TouchEvent) => {
      if (overlayRef.current && overlayRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", handleWindowWheel, { capture: true, passive: false });
    window.addEventListener("touchmove", handleWindowTouch, { capture: true, passive: false });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("wheel", handleWindowWheel, { capture: true });
      window.removeEventListener("touchmove", handleWindowTouch, { capture: true });
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen && !isTransitioningRef.current) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      data-lenis-prevent
      data-lenis-prevent-wheel
      data-lenis-prevent-touch
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl overflow-y-auto overscroll-contain outline-none no-scrollbar"
      style={{ display: "none" }}
    >
      <div
        ref={contentRef}
        className="w-full min-h-dvh flex flex-col justify-between p-6 sm:p-10 md:p-16 max-w-4xl mx-auto text-white"
      >
        <div className="flex items-center justify-end border-b border-white/10 pb-6 mb-8">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="font-mono text-xs sm:text-sm text-white/60 hover:text-[#ff2222] transition-colors cursor-pointer px-2 py-1"
          >
            [Close ✕]
          </button>
        </div>

        <div className="flex flex-col gap-8 pb-16">
          <header className="flex flex-col gap-2 privacy-section">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="font-mono text-xs sm:text-sm text-white/50">
              Last Updated: November 2026
            </p>
          </header>

          <section className="flex flex-col gap-3 privacy-section">
            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">
              1. Overview
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              This portfolio website (markappscript.dev) is maintained by Mark Poticar. This policy outlines how information is handled when you visit the site.
            </p>
          </section>

          <section className="flex flex-col gap-3 privacy-section">
            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">
              2. Information Collection
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              This website does not require registration, login, account creation, or payment processing. No personal financial information is ever collected or stored.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              The site utilizes Google Analytics to aggregate anonymous usage statistics, which may include browser type, device information, operating system, approximate geographic location, referral source, and pages viewed.
            </p>
          </section>

          <section className="flex flex-col gap-3 privacy-section">
            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">
              3. Cookies and Analytics
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              Google Analytics places first-party cookies (such as _ga) in your browser to differentiate unique sessions and visitors.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              You can choose whether to accept or decline analytics cookies using the on-site cookie banner or through your browser settings. Declining analytics does not affect your ability to browse and explore the portfolio.
            </p>
          </section>

          <section className="flex flex-col gap-3 privacy-section">
            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">
              4. Third-Party Services
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              Analytics data is processed by Google LLC in accordance with Google&apos;s privacy practices. You can learn more at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-[#ff2222] transition-colors"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-3 privacy-section">
            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">
              5. Contact
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-white/75 font-sans">
              For questions regarding this policy or the website, contact{" "}
              <a
                href="mailto:markappscript@gmail.com"
                className="text-white underline underline-offset-4 hover:text-[#ff2222] transition-colors"
              >
                markappscript@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/50">
          <span>markappscript.dev</span>
        </div>
      </div>
    </div>
  );
}
