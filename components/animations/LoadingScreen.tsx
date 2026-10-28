"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
  "/images/01-build.webp",
  "/images/02-design.webp",
  "/images/03-render.webp",
  "/images/04-deploy.webp",
];

const ASSETS_TO_PRELOAD = [
  "/images/01-build.webp",
  "/images/02-design.webp",
  "/images/03-render.webp",
  "/images/04-deploy.webp",
  "/images/Hero-avatar1.webp",
  "/images/Hero-avatar2.webp",
  "/images/Hero-avatar3.webp",
  "/images/Hero-avatar4.webp",
];

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const clipWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const countdownWrapRef = useRef<HTMLDivElement>(null);
  const countdownNumberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = containerRef.current;
    const columns = columnsRef.current.filter(Boolean);
    const clipWrappers = clipWrappersRef.current.filter(Boolean);
    const imgs = imagesRef.current.filter(Boolean);
    const countdownWrap = countdownWrapRef.current;
    const countdownNum = countdownNumberRef.current;

    if (
      !preloader ||
      !countdownWrap ||
      !countdownNum ||
      columns.length === 0 ||
      clipWrappers.length === 0 ||
      imgs.length === 0
    ) {
      return;
    }

    const countData = { value: 0 };
    let isIntroFinished = false;
    let isAssetsFinished = false;
    let hasExited = false;

    const ctx = gsap.context(() => {
      const tryExit = () => {
        if (!isIntroFinished || !isAssetsFinished || hasExited) return;
        hasExited = true;

        const exitTl = gsap.timeline({
          delay: 0.35,
          onComplete: () => {
            setIsVisible(false);
            if (!(window as any).__paperTearComplete) {
              window.dispatchEvent(new Event("paper-tear-complete"));
              (window as any).__paperTearComplete = true;
            }
          },
        });

        exitTl.to(countdownWrap, {
          opacity: 0,
          y: 20,
          duration: 0.35,
          ease: "power2.in",
        });

        columns.forEach((col, idx) => {
          exitTl.to(
            col,
            {
              yPercent: -100,
              duration: 1.0,
              ease: "power4.inOut",
              onStart: () => {
                if (idx === 2) {
                  window.dispatchEvent(new Event("paper-tear-complete"));
                  (window as any).__paperTearComplete = true;
                }
              },
            },
            idx === 0 ? "-=0.15" : "<0.12"
          );
        });
      };

      const introTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
        onComplete: () => {
          isIntroFinished = true;
          tryExit();
        },
      });

      introTl.to(countdownWrap, { opacity: 1, duration: 0.4 }, 0);

      introTl.to(
        clipWrappers,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          stagger: { each: 0.12, from: "start" },
          ease: "power4.inOut",
        },
        0
      );

      introTl.to(
        imgs,
        {
          filter: "brightness(0.75) contrast(1.1) saturate(1.15) blur(0px)",
          scale: 1,
          duration: 1.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.2
      );

      Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => {
        setTimeout(() => {
          introTl.play();
        }, 120);
      });

      const totalItems = ASSETS_TO_PRELOAD.length + 2;
      let loadedItems = 0;

      const updateProgress = () => {
        loadedItems++;
        const targetPercent = Math.min(100, Math.round((loadedItems / totalItems) * 100));

        gsap.to(countData, {
          value: targetPercent,
          duration: 0.35,
          ease: "power1.out",
          overwrite: "auto",
          onUpdate: () => {
            if (countdownNum) {
              countdownNum.textContent = String(Math.floor(countData.value));
            }
          },
          onComplete: () => {
            if (targetPercent >= 100) {
              if (countdownNum) {
                countdownNum.textContent = "100";
              }
              isAssetsFinished = true;
              tryExit();
            }
          },
        });
      };

      ASSETS_TO_PRELOAD.forEach((src) => {
        const image = new Image();
        image.onload = updateProgress;
        image.onerror = updateProgress;
        image.src = src;
      });

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateProgress).catch(updateProgress);
      } else {
        updateProgress();
      }

      if (document.readyState === "complete") {
        updateProgress();
      } else {
        window.addEventListener("load", updateProgress, { once: true });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <main
      id="preloader-main"
      ref={containerRef}
      className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden select-none pointer-events-auto"
    >
      <div className="absolute inset-0 w-full h-full grid grid-cols-4 grid-rows-1 gap-0">
        {IMAGES.map((src, index) => (
          <div
            key={src}
            ref={(el) => {
              columnsRef.current[index] = el;
            }}
            className="w-full h-full overflow-hidden relative bg-[#050505]"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
            }}
          >
            <div
              className="absolute top-0 h-full flex items-center justify-center pointer-events-none select-none z-0"
              style={{
                width: "100vw",
                left: `-${index * 25}vw`,
              }}
            >
              <span
                className="font-bold text-white tracking-tight whitespace-nowrap"
                style={{
                  fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)",
                  letterSpacing: "0.04em",
                }}
              >
                markappscript
              </span>
            </div>

            <div
              ref={(el) => {
                clipWrappersRef.current[index] = el;
              }}
              className="w-full h-full overflow-hidden relative z-10"
              style={{
                clipPath: "inset(0% 100% 0% 0%)",
                willChange: "clip-path",
                transform: "translate3d(0, 0, 0)",
              }}
            >
              <img
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  filter: "brightness(0.75) contrast(1.1) saturate(1.15) blur(14px)",
                  transform: "scale(1.1) translate3d(0, 0, 0)",
                  willChange: "transform, filter",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        ref={countdownWrapRef}
        className="absolute bottom-8 right-8 sm:bottom-[50px] sm:right-[50px] z-20 flex flex-col items-end gap-2 opacity-0"
      >
        <div
          ref={countdownNumberRef}
          className="font-extrabold tabular-nums leading-none text-black"
          style={{
            fontSize: "clamp(3.5rem, 7vw, 6rem)",
            color: "#000000",
          }}
        >
          0
        </div>
        <div className="text-[0.75rem] tracking-[0.2em] text-white/50 uppercase font-semibold">
          Loading
        </div>
      </div>
    </main>
  );
}
