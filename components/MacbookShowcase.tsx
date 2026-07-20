"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StaggerContainer, StaggerItem } from "./animations/StaggerReveal";

gsap.registerPlugin(ScrollTrigger);

export default function MacbookShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scaleWrapperRef = useRef<HTMLDivElement>(null);
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
        gsap.set(scaleWrapperRef.current, { scale: 1, rotation: 0, rotationX: 0 });
        gsap.set(textWrapperRef.current, { opacity: 0, y: 0 });

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
                end: "+=2300",
                scrub: 1,
                pin: true,
            },
        });

        // 1. Delay the fade outs (keeps things static for the first part of scroll)
        tl.to(menuRef.current, { opacity: 0, duration: 1.0 }, 1.5);
        tl.to(topGradientRef.current, { opacity: 0, duration: 1.0 }, 1.5);
        tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.4 }, 6.0);
        tl.to(blackScreenRef.current, { opacity: 1, duration: 1.0 }, 1.5);

        // 2. THE ZOOM & ROTATE (Delayed to start at 2.5s, slower and more premium)
        tl.to(scaleWrapperRef.current, {
            rotation: -45,
            duration: 3.0,
            ease: "none",
            transformOrigin: "50% 45%"
        }, 2.5)
            .to(scaleWrapperRef.current, {
                scale: 14,
                duration: 3.0,
                ease: "none",
                transformOrigin: "50% 45%"
            }, 2.5)

            // 3. FADE IN BLUE GRADIENT SCREEN
            .to(gradientScreenRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut"
            }, 2.4)

            // 4. TEXT APPEARS INSTANTLY AT 100% OPACITY
            .to(textWrapperRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: "power1.in"
            }, 2.4)

            // 5. ROLL TEXT UPWARD AS YOU CONTINUE SCROLLING
            .to(textWrapperRef.current, {
                y: "-150%",
                duration: 4.0,
                ease: "none"
            }, 2.4);

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative h-[80vh] md:h-screen w-full bg-neutral-950 flex items-center justify-center overflow-hidden z-0"
        >
            {/* TOP SEAM BRIDGE — fades from page.tsx bg into this section, removed by GSAP when menu disappears */}
            <div ref={topGradientRef} className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-950 via-neutral-950/60 to-transparent z-40 pointer-events-none" />

            {/* HOVER MENU — each tab has its own StaggerContainer so they reveal independently */}
            <div
                ref={menuRef}
                className="absolute left-[6%] md:left-[8%] lg:left-[10%] top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
            >
                <div className="flex flex-col gap-8 md:gap-10">
                    {(["Design", "Webapp", "AI ads"] as const).map((tab, i) => (
                        <StaggerContainer key={tab} viewportMargin="-80px">
                            <StaggerItem>
                                <div
                                    className="relative flex items-center group cursor-pointer select-none"
                                    onMouseEnter={() => setActiveTab(tab)}
                                >
                                    <div
                                        className={`absolute -left-4 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out ${activeTab === tab
                                            ? "h-full opacity-100 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                                            : "h-0 opacity-0"
                                            }`}
                                    />
                                    <h3
                                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 ease-out origin-left ${activeTab === tab
                                            ? "text-white translate-x-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                            : "text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-1"
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

            {/* SCALING CANVAS */}
            <div
                ref={scaleWrapperRef}
                className="relative w-full aspect-[16/10] md:h-full md:aspect-auto flex items-center justify-center"
            >
                <div className="absolute z-10 top-[18%] left-[23.5%] w-[53%] h-[40%] bg-black overflow-hidden rounded-sm flex items-center justify-center">

                    {/* VIDEOS */}
                    <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeTab === "Design" ? "opacity-100" : "opacity-0"}`}>
                        <video src={clip1} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                    </div>

                    <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeTab === "Webapp" ? "opacity-100" : "opacity-0"}`}>
                        <video src={clip2} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                    </div>

                    <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeTab === "AI ads" ? "opacity-100" : "opacity-0"}`}>
                        <video src={clip3} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                    </div>

                    {/* Black overlay inside laptop screen */}
                    <div ref={blackScreenRef} className="absolute inset-0 bg-black opacity-0 z-20 pointer-events-none" />

                    {/* MASSIVE BLUE GRADIENT CANVAS */}
                    <div
                        ref={gradientScreenRef}
                        className="absolute w-[400vw] h-[400vh] -left-[150vw] -top-[150vh] opacity-0 z-30 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, #dbeafe 0%, #93c5fd 45%, #8ab8d2 100%)" }}
                    />
                </div>

                <img
                    src={macbookImage}
                    alt="Room with MacBook"
                    className="relative z-20 w-full h-full object-cover pointer-events-none"
                />
                {/* Edge Blends to match neutral-950 background */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-20 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
                <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-20 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />
                <div className="absolute inset-x-0 top-0 h-16 md:h-24 z-20 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, #0a0a0a, transparent)" }} />
                <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 z-20 pointer-events-none"
                    style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }} />
            </div>

            {/* MOVIE CREDITS OVERLAY */}
            <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none p-6 text-center overflow-hidden">
                <div ref={textWrapperRef} className="max-w-2xl space-y-3 md:space-y-4">
                    <h2 className="text-[10px] sm:text-xs md:text-lg font-bold tracking-wider text-blue-950 uppercase">
                        From forecasting shifts to shipping products.
                    </h2>
                    <h3 className="text-base sm:text-lg md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-snug">
                        Automate the boring. <br /> Elevate the big picture.
                    </h3>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
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