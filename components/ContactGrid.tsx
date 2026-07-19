"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactGrid() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the grid if the user taps anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // BULLETPROOF MOBILE HANDLING: Intercept touch before it fires simulated clicks
  const handleTileTouch = (e: React.TouchEvent<HTMLAnchorElement>, href: string, isBlank: boolean) => {
    if (!isOpen) {
      e.preventDefault(); // Stop mobile from firing the native link click immediately
      setIsOpen(true);    // Expand the menu instead
    } else {
      // If already open, let it route normally on mobile
      if (isBlank) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    }
  };

  // DESKTOP FALLBACK: Handles normal mouse clicks gracefully
  const handleTileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative mt-10 transition-all duration-400 ease-in-out cursor-pointer outline-none select-none ${
        isOpen ? "w-[150px] h-[150px]" : "w-[130px] h-[130px]"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(true)}
    >
      {/* Background Gradient Layer */}
      <div
        className={`absolute inset-0 rounded-[12px] bg-[linear-gradient(270deg,#03a9f4,#cc39a4,#ffb5d2)] transition-opacity duration-300 shadow-[inset_0_0_80px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] z-0 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Center Text */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-20 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-center font-bold text-neutral-900 tracking-[0.25em] text-[10px] leading-loose drop-shadow-sm">
          CONTACT
          <br />
          ME
        </span>
      </div>

      {/* Grid Container */}
      <div
        className={`relative z-10 w-full h-full grid grid-cols-2 grid-rows-2 transition-all duration-400 ease-in-out ${
          isOpen ? "gap-2" : "gap-0"
        }`}
      >
        {/* TILE 1: EMAIL */}
        <a
          href="mailto:poticarmark@gmail.com"
          onClick={handleTileClick}
          onTouchEnd={(e) => handleTileTouch(e, "mailto:poticarmark@gmail.com", false)}
          className={`relative flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-[5px] transition-all duration-300 hover:bg-[#ea4335] dark:hover:bg-[#ea4335] group/link border border-transparent hover:border-white/20 hover:shadow-lg ${
            isOpen ? "rounded-[10px]" : "rounded-tl-[12px]"
          }`}
        >
          <svg
            className={`w-6 h-6 transition-all duration-300 text-[#ea4335] group-hover/link:text-white ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>

        {/* TILE 2: LINKEDIN */}
        <a
          href="https://ph.linkedin.com/in/mark-bryan-poticar-7954041b4"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTileClick}
          onTouchEnd={(e) => handleTileTouch(e, "https://ph.linkedin.com/in/mark-bryan-poticar-7954041b4", true)}
          className={`relative flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-[5px] transition-all duration-300 hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] group/link border border-transparent hover:border-white/20 hover:shadow-lg ${
            isOpen ? "rounded-[10px]" : "rounded-tr-[12px]"
          }`}
        >
          <svg
            className={`w-5 h-5 transition-all duration-300 text-[#0A66C2] group-hover/link:text-white ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* TILE 3: GITHUB */}
        <a
          href="https://github.com/markappscript-markss"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTileClick}
          onTouchEnd={(e) => handleTileTouch(e, "https://github.com/markappscript-markss", true)}
          className={`relative flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-[5px] transition-all duration-300 hover:bg-neutral-900 dark:hover:bg-white group/link border border-transparent hover:border-white/20 hover:shadow-lg ${
            isOpen ? "rounded-[10px]" : "rounded-bl-[12px]"
          }`}
        >
          <svg
            className={`w-6 h-6 transition-all duration-300 text-neutral-900 dark:text-white group-hover/link:text-white dark:group-hover/link:text-neutral-900 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
          </svg>
        </a>

        {/* TILE 4: ONLINEJOBS */}
        <a
          href="https://v2.onlinejobs.ph/jobseekers/info/4228954"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTileClick}
          onTouchEnd={(e) => handleTileTouch(e, "https://v2.onlinejobs.ph/jobseekers/info/4228954", true)}
          className={`relative flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-[5px] transition-all duration-300 hover:bg-[#10b981] dark:hover:bg-[#10b981] group/link border border-transparent hover:border-white/20 hover:shadow-lg ${
            isOpen ? "rounded-[10px]" : "rounded-br-[12px]"
          }`}
        >
          <svg
            className={`w-6 h-6 transition-all duration-300 text-[#10b981] group-hover/link:text-white ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}