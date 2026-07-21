"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StaggerContainer, StaggerItem } from "./animations/StaggerReveal";

gsap.registerPlugin(ScrollTrigger);

export default function MacbookShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Split into two refs so we can sandwich the text between them
    const screenScaleRef = useRef<HTMLDivElement>(null);
    const laptopScaleRef = useRef<HTMLDivElement>(null);

    const blackScreenRef = useRef<HTMLDivElement>(null);
    const gradientScreenRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const topGradientRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<"Design" | "Webapp" | "AI ads">("Design");

    const macbookImage = "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/backgrounds/macbook-cutout.png";
    const clip1 = "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/videos/markfolio.mp4";
    const clip2 = "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/videos/manihub.mp4";
    const clip3 = "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/videos/norda2.mp4";

    useGSAP(() => {
        const scaleTargets = [screenScaleRef.current, laptopScaleRef.current];

        gsap.set(scaleTargets, { scale: 1, rotation: 0, rotationX: 0 });
        // Sets starting position securely behind the bottom bezel and base scale
        gsap.set(textWrapperRef.current, { opacity: 0, y: "15vh", scale: 1 });

        gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            }
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                // Gives a balanced overall runway for the whole section
                end: () => (window.innerWidth < 768 ? "+=800" : "+=1000"),
                invalidateOnRefresh: true,
                scrub: 1,
                pin: true,
            },
        });

        // 1. Quick initial animations (take up very little scroll)
        tl.to(menuRef.current, { opacity: 0, duration: 1.0 }, 4.0);
        tl.to(topGradientRef.current, { opacity: 0, duration: 1.0 }, 4.0);
        tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.4 }, 20.0);
        tl.to(blackScreenRef.current, { opacity: 1, duration: 1.0 }, 4.0);

        // 2. Slowed down Macbook Zoom & Rotation (takes up massive amount of scroll)
        tl.to(scaleTargets, {
            rotation: -45,
            duration: 28, // <-- Increased significantly to slow the rotation
            ease: "none",
            transformOrigin: "50% 45%"
        }, 5.5)
            .to(scaleTargets, {
                scale: 15,
                duration: 28, // <-- Increased significantly to slow the zoom
                ease: "none",
                transformOrigin: "50% 45%"
            }, 5.5)

            .to(gradientScreenRef.current, {
                opacity: 1,
                duration: 3.0,
                ease: "power2.inOut"
            }, 2.9)

            // Text appears exactly when the side menu is gone (2.5) 
            .to(textWrapperRef.current, {
                opacity: 1,
                duration: 0.1,
                ease: "power2.out"
            }, 5.6)
            // 3. Text rolls up (matches the new 12.0 duration so it syncs perfectly with the screen zoom)
            .to(textWrapperRef.current, {
                y: "-40vh", // <-- Our earlier fix to stop it from going too high!
                scale: 1,
                duration: 28, // <-- Syncs perfectly with the 12.0 screen zoom
                ease: "none"
            }, 4.5);

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full bg-neutral-950 flex items-center justify-center overflow-hidden z-0"
        >
            <div ref={topGradientRef} className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-950 via-neutral-950/60 to-transparent z-40 pointer-events-none" />

            {/* RESPONSIVE MENU: Centered top on mobile, absolute left on desktop */}
            <div
                ref={menuRef}
                className="absolute left-1/2 -translate-x-1/2 top-[18%] sm:top-[20%] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-[8%] lg:left-[10%] z-50 pointer-events-auto w-auto"
            >
                <div className="flex flex-row md:flex-col gap-6 sm:gap-8 md:gap-10 items-center md:items-start justify-center">
                    {(["Design", "Webapp", "AI ads"] as const).map((tab, i) => (
                        <StaggerContainer key={tab} viewportMargin="-80px">
                            <StaggerItem>
                                <div
                                    className="relative flex items-center group cursor-pointer select-none"
                                    onMouseEnter={() => setActiveTab(tab)}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {/* Indicator Line: Bottom border on mobile, Left bar on desktop */}
                                    <div
                                        className={`absolute bg-gradient-to-r md:bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out ${activeTab === tab
                                            ? "opacity-100 shadow-[0_0_12px_rgba(168,85,247,0.8)] -bottom-2 left-0 w-full h-0.5 md:-left-4 md:top-0 md:w-1 md:h-full md:bottom-auto"
                                            : "opacity-0 -bottom-2 left-1/2 w-0 h-0.5 md:-left-4 md:top-0 md:w-1 md:h-0"
                                            }`}
                                    />
                                    <h3
                                        className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 ease-out origin-center md:origin-left ${activeTab === tab
                                            ? "text-white scale-105 md:scale-100 md:translate-x-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                            : "text-neutral-600 group-hover:text-neutral-400"
                                            }`}
                                    >
                                        {tab}
                                    </h3>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    ))}
                </div>
            </div>

            {/* LAYER 1: BACK SCREEN & BLUE GRADIENT (z-10) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div
                    ref={screenScaleRef}
                    className="relative w-full aspect-[16/10] md:h-full md:aspect-auto flex items-center justify-center"
                >
                    <div className="absolute z-10 top-[18%] left-[23.5%] w-[53%] h-[42%] bg-black overflow-hidden rounded-sm flex items-center justify-center">
                        <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeTab === "Design" ? "opacity-100" : "opacity-0"}`}>
                            <video src={clip1} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                        </div>
                        <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeTab === "Webapp" ? "opacity-100" : "opacity-0"}`}>
                            <video src={clip2} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                        </div>
                        <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeTab === "AI ads" ? "opacity-100" : "opacity-0"}`}>
                            <video src={clip3} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                        </div>

                        <div ref={blackScreenRef} className="absolute inset-0 bg-black opacity-0 z-20 pointer-events-none" />
                        <div
                            ref={gradientScreenRef}
                            className="absolute w-[400vw] h-[400vh] -left-[150vw] -top-[150vh] opacity-0 z-30 pointer-events-none"
                            style={{ background: "linear-gradient(to bottom, #dbeafe 0%, #93c5fd 45%, #8ab8d2 100%)" }}
                        />
                    </div>
                </div>
            </div>

            {/* LAYER 2: ROLL-UP TEXT */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none overflow-hidden">
                <div ref={textWrapperRef} className="w-full max-w-2xl mx-auto px-6 pb-0 text-center space-y-2 md:space-y-3">
                    <h2 className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-blue-950 uppercase">
                        From forecasting shifts to shipping products.
                    </h2>

                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-snug">
                        Automate the boring.<br />Elevate the big picture.
                    </h3>
                </div>
            </div>

            {/* LAYER 3: LAPTOP FRAME & BEZEL CUTOUT (z-30) */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div
                    ref={laptopScaleRef}
                    className="relative w-full aspect-[16/10] md:h-full md:aspect-auto flex items-center justify-center"
                >
                    <img
                        src={macbookImage}
                        alt="Room with MacBook"
                        className="relative z-20 w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-20 pointer-events-none"
                        style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-20 pointer-events-none"
                        style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />
                    <div className="absolute inset-x-0 top-0 h-16 md:h-24 z-20 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, #0a0a0a, transparent)" }} />
                    <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 z-20 pointer-events-none"
                        style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }} />
                </div>
            </div>
            {/* ========================================== */}

            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-0.5 pointer-events-none"
            >
                <span
                    className="text-xs font-bold tracking-[0.25em] uppercase text-white mb-2"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 0 16px rgba(0,0,0,0.4)" }}
                >Scroll</span>
                <style>{`
                    @keyframes chevronBounce {
                        0%, 100% { transform: translateY(0); opacity: 0.5; }
                        50% { transform: translateY(8px); opacity: 1; }
                    }
                    .chev1 { animation: chevronBounce 1.3s ease-in-out infinite; }
                    .chev2 { animation: chevronBounce 1.3s ease-in-out 0.22s infinite; }
                `}</style>
                <svg className="chev1 w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"
                    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <svg className="chev2 w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"
                    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

        </section>
    );
}
