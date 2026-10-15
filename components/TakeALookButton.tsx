"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export interface TakeALookButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export default function TakeALookButton({
  onClick,
  disabled = false,
  id = "btn-take-a-look",
  className = "",
}: TakeALookButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isHoveredRef = useRef(false);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const lineProgress = useRef({ head: 0, tail: 0 });

  const renderLine = () => {
    if (!lineRef.current) return;
    const head = Math.max(0, Math.min(100, lineProgress.current.head));
    const tail = Math.max(0, Math.min(100, lineProgress.current.tail));
    const right = 100 - head;
    const left = tail;
    lineRef.current.style.clipPath = `inset(0 ${right}% 0 ${left}%)`;
  };

  const resetHoverState = () => {
    isHoveredRef.current = false;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.set(btnRef.current, {
        y: 0,
        scale: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      });
    }
    gsap.killTweensOf(lineProgress.current);
    lineProgress.current.head = 0;
    lineProgress.current.tail = 0;
    renderLine();
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.set(arrowRef.current, { rotate: 0, x: 0, y: 0 });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.set(textRef.current, { color: "rgba(0, 0, 0, 0.88)" });
    }
  };

  useEffect(() => {
    renderLine();
    resetHoverState();
    return () => {
      if (btnRef.current) gsap.killTweensOf(btnRef.current);
      gsap.killTweensOf(lineProgress.current);
      if (arrowRef.current) gsap.killTweensOf(arrowRef.current);
      if (textRef.current) gsap.killTweensOf(textRef.current);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!disabled && btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        if (isInside) {
          if (!isHoveredRef.current) {
            handleMouseEnter();
          }
        } else {
          if (isHoveredRef.current) {
            handleMouseLeave();
          }
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [disabled]);

  useEffect(() => {
    if (disabled) {
      resetHoverState();
      return;
    }

    let rafId: number;
    const startTime = performance.now();

    const checkCursorOverButton = () => {
      if (disabled || isHoveredRef.current) return;
      if (btnRef.current) {
        if (btnRef.current.matches(":hover")) {
          handleMouseEnter();
          return;
        }
        if (mousePosRef.current) {
          const rect = btnRef.current.getBoundingClientRect();
          if (
            mousePosRef.current.x >= rect.left &&
            mousePosRef.current.x <= rect.right &&
            mousePosRef.current.y >= rect.top &&
            mousePosRef.current.y <= rect.bottom
          ) {
            handleMouseEnter();
            return;
          }
        }
      }
      if (performance.now() - startTime < 1200) {
        rafId = requestAnimationFrame(checkCursorOverButton);
      }
    };

    rafId = requestAnimationFrame(checkCursorOverButton);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [disabled]);

  const handleMouseEnter = () => {
    if (disabled) return;
    if (isHoveredRef.current) return;
    isHoveredRef.current = true;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: -2,
        borderColor: "rgba(0, 0, 0, 0.45)",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
        duration: 0.28,
        ease: "power2.out",
      });
    }

    gsap.killTweensOf(lineProgress.current);

    if (lineProgress.current.tail >= 98 || (lineProgress.current.head >= 99 && lineProgress.current.tail >= 95)) {
      lineProgress.current.head = 0;
      lineProgress.current.tail = 0;
      renderLine();
    }

    const remainingHead = 100 - lineProgress.current.head;
    const dur = Math.max(0.18, 0.34 * (remainingHead / 100));

    gsap.to(lineProgress.current, {
      head: 100,
      tail: 0,
      duration: dur,
      ease: "power2.out",
      onUpdate: renderLine,
    });

    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: -45,
        x: 3,
        y: -2,
        duration: 0.28,
        ease: "power2.out",
      });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: "#000000",
        duration: 0.2,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isHoveredRef.current) return;
    isHoveredRef.current = false;
    if (disabled) return;
    if (btnRef.current) {
      gsap.killTweensOf(btnRef.current);
      gsap.to(btnRef.current, {
        y: 0,
        borderColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        duration: 0.25,
        ease: "power2.out",
      });
    }

    gsap.killTweensOf(lineProgress.current);

    if (lineProgress.current.head < 5) {
      lineProgress.current.head = 0;
      lineProgress.current.tail = 0;
      renderLine();
      return;
    }

    const dur = 0.32;

    gsap.to(lineProgress.current, {
      head: 100,
      tail: 100,
      duration: dur,
      ease: "power2.inOut",
      onUpdate: renderLine,
      onComplete: () => {
        lineProgress.current.head = 0;
        lineProgress.current.tail = 0;
        renderLine();
      },
    });

    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    }
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: "rgba(0, 0, 0, 0.88)",
        duration: 0.2,
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    resetHoverState();
    onClick?.();
  };

  const handleMouseDown = () => {
    if (disabled) return;
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 0.97,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const handleMouseUp = () => {
    if (disabled) return;
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    }
  };

  return (
    <button
      ref={btnRef}
      type="button"
      id={id}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={() => {
        if (!disabled && !isHoveredRef.current) {
          handleMouseEnter();
        }
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`group relative inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-neutral-900 border border-neutral-900/20 text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)] select-none will-change-transform before:absolute before:-inset-1.5 before:content-[''] before:rounded-full before:pointer-events-auto ${
        disabled
          ? "pointer-events-none cursor-default select-none"
          : "pointer-events-auto cursor-pointer"
      } ${className}`}
      aria-label="Take a look"
      aria-hidden={disabled}
    >
      <div className="relative flex flex-col items-start pointer-events-none">
        <span ref={textRef} className="block tracking-wider text-neutral-900 whitespace-nowrap pointer-events-none">
          TAKE A LOOK
        </span>
        <div className="relative w-full h-[2px] mt-0.5 overflow-hidden rounded-[1px] pointer-events-none">
          <div className="absolute inset-0 bg-neutral-900/15" />
          <div
            ref={lineRef}
            className="absolute inset-0 bg-neutral-950 will-change-transform pointer-events-none"
            style={{
              clipPath: "inset(0 100% 0 0%)",
            }}
          />
        </div>
      </div>
      <span
        ref={arrowRef}
        className="inline-block shrink-0 text-[11px] sm:text-sm font-light text-neutral-950 will-change-transform pointer-events-none"
      >
        →
      </span>
    </button>
  );
}
