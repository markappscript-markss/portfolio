"use client";

import { StaggerContainer, StaggerItem } from "./animations/StaggerReveal";

export default function AboutSection() {
    const bgPhoto = "https://dvjprjyzyjekefsiujrq.supabase.co/storage/v1/object/public/backgrounds/myphotobg.jpg";

    const textShadowStyle = {
        textShadow: "2px 4px 12px rgba(0,0,0,0.95), 0px 0px 6px rgba(0,0,0,0.9)"
    };

    return (
        <section id="about" className="relative w-full bg-neutral-950 text-white overflow-hidden z-10 scroll-mt-20 -mt-[200px] md:-mt-80">

            {/* 1. CONTAINER FOR PHOTO & CONTENT */}
            <div className="relative w-full">
                {/* Background Photo - covers the dynamic height of the content with a 1px bleed at the top */}
                <img
                    src={bgPhoto}
                    alt="About Background"
                    className="absolute -top-1 inset-x-0 bottom-0 w-full h-[calc(100%+1px)] object-cover object-center pointer-events-none opacity-100"
                />

                {/* Subtle dark overlay for contrast - darker on mobile for better readability */}
                <div className="absolute inset-0 bg-black/30 md:bg-black/15 pointer-events-none" />

                {/* Top Blend — overlaps MacbookShowcase blue and dissolves into the photo (shorter on mobile, with a 1px bleed at the top) */}
                <div
                    className="absolute -top-1 left-0 right-0 pointer-events-none z-10 h-[181px] md:h-[401px]"
                    style={{
                        background: "linear-gradient(to bottom, #93c5fd 0%, #93c5fd 8%, rgba(147,197,253,0.88) 20%, rgba(147,197,253,0.65) 35%, rgba(147,197,253,0.35) 55%, rgba(147,197,253,0.12) 75%, transparent 100%)"
                    }}
                />

                {/* Bottom Ground Fade (Fades into black for the next section) */}
                <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-neutral-950 from-10% via-neutral-950/40 via-80% to-transparent to-100% pointer-events-none" />

                {/* 2. FOREGROUND CONTENT - relative layout so paragraphs stack and scroll naturally */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col justify-between gap-16 md:gap-[300px] pt-32 md:pt-[600px] pb-36 md:pb-[900px]">

                    {/* BLOCK 0: INDEPENDENT INTRO STAGGER (Sits cleanly over the light blue sky) */}
                    <StaggerContainer className="w-full max-w-2xl mx-auto text-center mb-8 md:mb-16" viewportMargin="-50px">
                        <StaggerItem>
                            <h2 className="font-sans text-base sm:text-lg md:text-2xl lg:text-3xl font-black text-slate-900 uppercase leading-snug tracking-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
                                HI! I'M MARK. I AM AN AI-POWERED DEVELOPER. THAT MEANS I DON'T SPEND THREE DAYS DEBUGGING A TYPO—I ORCHESTRATE ADVANCED AI WORKFLOWS TO BUILD DANGEROUSLY FAST, HIGH-END PRODUCTS THAT ACTUALLY SHIP.
                            </h2>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* BLOCK 1: Top Right */}
                    <StaggerContainer className="w-full md:w-4/12 self-end ml-auto text-right mt-16 md:mt-24" viewportMargin="-150px">
                        <StaggerItem>
                            <p
                                className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug tracking-tight"
                                style={textShadowStyle}
                            >
                                My background isn't your typical computer science story. I spent years as a Team Leader and WFM/RTA analyst—forecasting schedules, obsessing over real-time metrics, and eventually realizing I'd rather just build the tools myself.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* BLOCK 2: Middle Left */}
                    <StaggerContainer className="w-full md:w-4/12 self-start text-left" viewportMargin="-200px">
                        <StaggerItem>
                            <p
                                className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug tracking-tight"
                                style={textShadowStyle}
                            >
                                Today, I operate as an AI-assisted developer. I don't just write code — I orchestrate it. Rigorous, data-driven mindset paired with advanced AI workflows.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* BLOCK 3: Bottom Right */}
                    <StaggerContainer className="w-full md:w-4/12 self-end ml-auto text-right" viewportMargin="-200px">
                        <StaggerItem>
                            <p
                                className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug tracking-tight"
                                style={textShadowStyle}
                            >
                                My stack: Supabase, GitHub, Vercel. When I'm not shipping web products, I'm directing multi-model AI workflows for high-end cinematic video ads.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                </div>
            </div>

        </section>
    );
}