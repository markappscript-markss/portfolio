"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tearPoints: [number, number][] = [
  [48.4, 0],
  [49.18, 1.23],
  [47.53, 2.95],
  [46.32, 5.4],
  [47.43, 6.98],
  [48.01, 7.34],
  [47.82, 8.04],
  [48.07, 9.38],
  [50.32, 11.71],
  [55.09, 12.44],
  [54.55, 13.2],
  [52.66, 14.81],
  [53.82, 15.87],
  [53.56, 16.64],
  [52.53, 18.9],
  [52.65, 20.03],
  [51.01, 21.29],
  [50.93, 24.04],
  [55.2, 24.64],
  [49.12, 26.44],
  [43.51, 27.19],
  [47.09, 27.89],
  [45.42, 29.17],
  [45.58, 31.24],
  [44.62, 33.04],
  [42.37, 34.7],
  [43.95, 36.56],
  [42.7, 37.98],
  [43.07, 38.46],
  [43.13, 38.93],
  [43.17, 40.72],
  [43.92, 43.38],
  [46.28, 46.25],
  [46.39, 47.32],
  [46.74, 48.96],
  [48.77, 50.43],
  [48.21, 51.09],
  [49.13, 52.51],
  [49.63, 53.05],
  [50.41, 54.58],
  [50.98, 56.74],
  [55.56, 57.47],
  [51.48, 57.85],
  [51.35, 59.24],
  [54.22, 61.09],
  [55.12, 63.61],
  [55.8, 64.2],
  [56.36, 65.81],
  [60.21, 66.36],
  [56.4, 68.37],
  [56.8, 71.16],
  [56.2, 73.3],
  [55.3, 73.97],
  [54.27, 75.04],
  [53.19, 76.7],
  [53.05, 78.51],
  [52.05, 80.13],
  [45.63, 81.2],
  [48.63, 82.98],
  [47.47, 84.78],
  [48.11, 86.48],
  [47.64, 87.09],
  [51.98, 87.93],
  [48.07, 88.29],
  [49.39, 88.86],
  [49.69, 91.28],
  [49.23, 92.3],
  [48.87, 94],
  [49.33, 94.74],
  [49.05, 96.51],
  [47.92, 97.87],
  [48.74, 99.23],
  [48.7, 100],
];

const leftClipPath = `polygon(0% 0%, ${tearPoints
  .map(([x, y]) => `${x}% ${y}%`)
  .join(", ")}, 0% 100%)`;

const rightClipPath = `polygon(100% 0%, 100% 100%, ${[...tearPoints]
  .reverse()
  .map(([x, y]) => `${x}% ${y}%`)
  .join(", ")})`;

const polylinePoints = tearPoints.map(([x, y]) => `${x},${y}`).join(" ");

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTorn, setIsTorn] = useState(false);
  const [freezeFrame, setFreezeFrame] = useState<string | null>(null);

  const finishedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startTear = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    const video = videoRef.current;
    if (video) {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || window.innerWidth;
        canvas.height = video.videoHeight || window.innerHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setFreezeFrame(canvas.toDataURL("image/jpeg", 0.92));
        }
      } catch {
      }
    }

    setIsTorn(true);
    window.dispatchEvent(new Event("loading-complete"));
    (window as any).__loadingComplete = true;

    setTimeout(() => {
      window.dispatchEvent(new Event("paper-tear-reveal"));
    }, 350);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.currentTime = 0;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime > 0.5 && video.currentTime >= video.duration - 0.15) {
        startTear();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err && err.name === "AbortError") {
            return;
          }
          startTear();
        });
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    const fallbackTimer = setTimeout(() => {
      startTear();
    }, 4000);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [startTear]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden">
        {isTorn ? (
          <>
            <motion.div
              initial={{ x: "0%", rotate: 0 }}
              animate={{
                x: ["0%", "-1.5%", "-115%"],
                rotate: [0, -0.6, -4],
                y: ["0%", "0.4%", "1.5%"],
              }}
              transition={{
                duration: 1.3,
                times: [0, 0.1, 1],
                ease: [0.7, 0, 0.25, 1],
              }}
              style={{
                clipPath: leftClipPath,
                filter: "drop-shadow(10px 0 25px rgba(0,0,0,0.65))",
              }}
              className="absolute inset-0 w-full h-full bg-neutral-950 will-change-transform"
              onAnimationComplete={() => {
                setIsVisible(false);
                window.dispatchEvent(new Event("paper-tear-complete"));
                (window as any).__paperTearComplete = true;
              }}
            >
              {freezeFrame ? (
                <img
                  src={freezeFrame}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-950" />
              )}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <polyline
                  points={polylinePoints}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points={polylinePoints}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ x: "0%", rotate: 0 }}
              animate={{
                x: ["0%", "1.5%", "115%"],
                rotate: [0, 0.6, 4],
                y: ["0%", "-0.4%", "-1.5%"],
              }}
              transition={{
                duration: 1.3,
                times: [0, 0.1, 1],
                ease: [0.7, 0, 0.25, 1],
              }}
              style={{
                clipPath: rightClipPath,
                filter: "drop-shadow(-10px 0 25px rgba(0,0,0,0.65))",
              }}
              className="absolute inset-0 w-full h-full bg-neutral-950 will-change-transform"
            >
              {freezeFrame ? (
                <img
                  src={freezeFrame}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-950" />
              )}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <polyline
                  points={polylinePoints}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points={polylinePoints}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                />
              </svg>
            </motion.div>
          </>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-neutral-950">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={startTear}
              onError={startTear}
              className="w-full h-full object-cover"
            >
              <source src="/videos/match-cut.mp4" type="video/mp4" />
              <source src="/videos/match-cut.webm" type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
