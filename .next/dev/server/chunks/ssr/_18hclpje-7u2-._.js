(()=>{"use strict";module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/LoadingScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroScene3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeroScene3D.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AboutOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WorkOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WorkOverlay.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("main");
    const handleCloseWork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setActiveView("main");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleExploreWork = ()=>{
            setActiveView("work");
        };
        const handleViewAbout = ()=>{
            setActiveView("about");
        };
        const handleTriggerMain = ()=>{
            setActiveView("main");
        };
        window.addEventListener("portfolio-explore-work", handleExploreWork);
        window.addEventListener("portfolio-view-work", handleExploreWork);
        window.addEventListener("portfolio-view-about", handleViewAbout);
        window.addEventListener("portfolio-trigger-main", handleTriggerMain);
        return ()=>{
            window.removeEventListener("portfolio-explore-work", handleExploreWork);
            window.removeEventListener("portfolio-view-work", handleExploreWork);
            window.removeEventListener("portfolio-view-about", handleViewAbout);
            window.removeEventListener("portfolio-trigger-main", handleTriggerMain);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeView: activeView,
                onViewChange: setActiveView
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "home",
                className: "h-[100dvh] w-full bg-white relative overflow-hidden flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroScene3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: activeView === "about"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WorkOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: activeView === "work",
                onClose: handleCloseWork
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AboutOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const ABOUT_TEXT = "I’m Mark, an AI-assisted web developer who builds fast, polished products from front end to back end. I bring interfaces to life with GSAP and motion graphics for web design. I also create AI-generated video ads, using Google Flow, ElevenLabs, CapCut, and DaVinci Resolve to take a concept from prompt to finished spot. Design, code, and motion all happen in one workflow, so what I build looks right and works right.";
const WORDS = ABOUT_TEXT.split(" ");
function AboutOverlay({ isOpen }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        if (isOpen) {
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".about-word", {
                    opacity: 0,
                    y: 14
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                    ease: "power2.out",
                    stagger: 0.015,
                    delay: 0.1
                });
            }, containerRef);
            return ()=>ctx.revert();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".about-word", {
                opacity: 0,
                y: 14
            });
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "about-overlay",
        className: `fixed inset-0 z-40 bg-white overflow-y-auto overscroll-contain touch-pan-y transition-opacity duration-100 ease-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-full w-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl sm:max-w-3xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans font-medium text-neutral-900 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-[1.65] tracking-tight text-center text-balance select-none",
                    children: WORDS.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block mr-[0.28em] last:mr-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about-word inline-block opacity-0 will-change-transform",
                                children: word
                            }, void 0, false, {
                                fileName: "[project]/components/AboutOverlay.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/AboutOverlay.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/AboutOverlay.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AboutOverlay.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AboutOverlay.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AboutOverlay.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/Magnetic.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HeaderNavItem({ id, label, isActive, onClick }) {
    const activeLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (activeLineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(activeLineRef.current);
            if (hoverLineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
            if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeLineRef.current) return;
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(activeLineRef.current, {
                scaleX: isActive ? 1 : 0,
                transformOrigin: "left"
            });
            if (hoverLineRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(hoverLineRef.current, {
                    scaleX: 0,
                    transformOrigin: "left"
                });
            }
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(activeLineRef.current);
        if (isActive) {
            if (hoverLineRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(hoverLineRef.current, {
                    scaleX: 0
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(activeLineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.42,
                ease: "power3.out"
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(activeLineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.32,
                ease: "power2.inOut"
            });
        }
    }, [
        isActive
    ]);
    const handleMouseEnter = ()=>{
        if (isActive) return;
        if (hoverLineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(hoverLineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.32,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                y: -1.5,
                duration: 0.22,
                ease: "power2.out"
            });
        }
    };
    const handleMouseLeave = ()=>{
        if (isActive) return;
        if (hoverLineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(hoverLineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.28,
                ease: "power2.inOut"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                y: 0,
                duration: 0.22,
                ease: "power2.out"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        id: id,
        type: "button",
        onClick: onClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: "group relative flex flex-col items-center py-1 px-1 cursor-pointer select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: textRef,
                className: `font-mono text-xs sm:text-sm tracking-widest uppercase transition-colors duration-200 will-change-transform ${isActive ? "text-neutral-950 font-bold" : "text-neutral-500 group-hover:text-neutral-950 font-medium"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[2.5px] sm:h-[3px] mt-1 overflow-hidden rounded-[1px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-neutral-900/20"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: hoverLineRef,
                        className: "absolute inset-0 bg-neutral-900/85 origin-left will-change-transform pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: activeLineRef,
                        className: "absolute inset-0 bg-neutral-950 origin-left will-change-transform pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
const GLITCH_GLYPHS = "!<>-_\\/[]{}—=+*^?#_01";
function HeaderLogo() {
    const [isAlt, setIsAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        prefix: "markappscript",
        suffix: ".dev"
    });
    const [isGlitching, setIsGlitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const animFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, []);
    const handleClick = (e)=>{
        e.stopPropagation();
        if (isGlitching) return;
        setIsGlitching(true);
        const nextIsAlt = !isAlt;
        setIsAlt(nextIsAlt);
        const targetPrefix = nextIsAlt ? "Code by Mark" : "markappscript";
        const targetSuffix = nextIsAlt ? "©" : ".dev";
        const fullTarget = targetPrefix + targetSuffix;
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().to(btnRef.current, {
                x: -2,
                y: 1,
                duration: 0.04,
                ease: "none"
            }).to(btnRef.current, {
                x: 2.5,
                y: -1,
                duration: 0.04,
                ease: "none"
            }).to(btnRef.current, {
                x: -1.5,
                y: 0.5,
                duration: 0.04,
                ease: "none"
            }).to(btnRef.current, {
                x: 1,
                y: -0.5,
                duration: 0.04,
                ease: "none"
            }).to(btnRef.current, {
                x: 0,
                y: 0,
                duration: 0.04,
                ease: "none"
            });
        }
        let frame = 0;
        const totalFrames = 12;
        const animate = ()=>{
            frame++;
            const progress = frame / totalFrames;
            if (frame >= totalFrames) {
                setText({
                    prefix: targetPrefix,
                    suffix: targetSuffix
                });
                setIsGlitching(false);
                return;
            }
            let scrambled = "";
            for(let i = 0; i < fullTarget.length; i++){
                if (progress > i / fullTarget.length + 0.18) {
                    scrambled += fullTarget[i];
                } else {
                    scrambled += GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)];
                }
            }
            const splitIndex = targetPrefix.length;
            setText({
                prefix: scrambled.slice(0, splitIndex),
                suffix: scrambled.slice(splitIndex)
            });
            animFrameRef.current = requestAnimationFrame(animate);
        };
        animFrameRef.current = requestAnimationFrame(animate);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        strength: 0.2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: btnRef,
            type: "button",
            onClick: handleClick,
            className: "flex items-baseline select-none cursor-pointer text-left will-change-transform",
            "aria-label": "Toggle logo title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-bold tracking-tight text-xs sm:text-base text-black transition-all ${isGlitching ? "drop-shadow-[1.5px_0_0_rgba(147,51,234,0.8)]" : ""}`,
                    children: text.prefix
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-bold tracking-tight text-xs sm:text-base transition-all ${isAlt ? "text-black" : "text-purple-600"} ${isGlitching ? "drop-shadow-[-1.5px_0_0_rgba(6,182,212,0.8)]" : ""}`,
                    children: text.suffix
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
function Header({ activeView = "main", onViewChange }) {
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMainClick = ()=>{
        if (activeView !== "about") return;
        onViewChange?.("main");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const handleAboutClick = ()=>{
        if (activeView === "about") return;
        onViewChange?.("about");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "header-nav",
        ref: headerRef,
        className: "fixed top-0 left-0 right-0 z-50 w-full h-16 sm:h-20 bg-transparent px-4 sm:px-12 flex items-center justify-between pointer-events-none opacity-0 border-0 outline-none shadow-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderLogo, {}, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-10 select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderNavItem, {
                        id: "nav-btn-main",
                        label: "MAIN",
                        isActive: activeView === "main",
                        onClick: handleMainClick
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderNavItem, {
                        id: "nav-btn-about",
                        label: "ABOUT",
                        isActive: activeView === "about",
                        onClick: handleAboutClick
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex items-center gap-3 sm:gap-5 text-sm text-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        strength: 0.15,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:markappscript@gmail.com",
                            className: "hidden sm:inline-block font-mono text-xs sm:text-sm font-semibold text-neutral-700 hover:text-black tracking-tight transition-colors",
                            children: "markappscript@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 sm:gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                strength: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/mark-bryan-poticar-7954041b4",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "LinkedIn Profile",
                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-neutral-700 hover:text-[#0a66c2] hover:bg-neutral-900/5 transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 fill-current",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                strength: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://v2.onlinejobs.ph/jobseekers/info/4228954",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "OnlineJobs.ph Profile",
                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-900/5 transition-all group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/onlinejobs-icon.png",
                                        alt: "OnlineJobs.ph",
                                        className: "w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HeroScene3D.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
const rng = (s)=>()=>(s = s * 16807 % 2147483647) / 2147483647;
const S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"];
const rectS = (x, y, w, h)=>{
    const s = new S();
    s.moveTo(x, y);
    s.lineTo(x + w, y);
    s.lineTo(x + w, y + h);
    s.lineTo(x, y + h);
    s.closePath();
    return s;
};
const circS = (x, y, r)=>{
    const s = new S();
    s.absarc(x, y, r, 0, Math.PI * 2, false);
    return s;
};
const semiS = (x, y, r)=>{
    const s = new S();
    s.absarc(x, y, r, 0, Math.PI, false);
    s.closePath();
    return s;
};
const archS = (x, y, w, h)=>{
    const s = new S(), r = w / 2;
    s.moveTo(x - r, y);
    s.lineTo(x + r, y);
    s.lineTo(x + r, y + h - r);
    s.absarc(x, y + h - r, r, 0, Math.PI, false);
    s.closePath();
    return s;
};
const geo = (shapes)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](shapes);
const cloud = (x, y, scale = 1.0)=>{
    const s = new S();
    const r = scale;
    s.moveTo(x - 2.4 * r, y);
    s.lineTo(x + 2.4 * r, y);
    s.absarc(x + 1.3 * r, y + 0.6 * r, 0.8 * r, -0.3, Math.PI * 0.45, false);
    s.absarc(x + 0.0 * r, y + 1.1 * r, 1.2 * r, 0.25, Math.PI * 0.78, false);
    s.absarc(x - 1.3 * r, y + 0.6 * r, 0.8 * r, Math.PI * 0.55, Math.PI * 1.15, false);
    s.closePath();
    return geo(s);
};
const palmLeaf = (originX, originY, length, angle)=>{
    const geos = [];
    const count = 7;
    for(let i = 0; i < count; i++){
        const t = (i + 1) / (count + 1);
        const dist = t * length;
        const leafLen = Math.sin(t * Math.PI) * (length * 0.38);
        const leafWidth = leafLen * 0.22;
        const sl = new S();
        sl.moveTo(0, 0);
        sl.quadraticCurveTo(-leafLen * 0.5, leafWidth * 0.8, -leafLen, leafWidth * 0.2);
        sl.quadraticCurveTo(-leafLen * 0.5, -leafWidth * 0.3, 0, 0);
        const gl = geo(sl);
        gl.rotateZ(angle + 0.55 - t * 0.2);
        gl.translate(originX + Math.cos(angle) * dist, originY + Math.sin(angle) * dist, 0);
        geos.push(gl);
        const sr = new S();
        sr.moveTo(0, 0);
        sr.quadraticCurveTo(leafLen * 0.5, leafWidth * 0.8, leafLen, leafWidth * 0.2);
        sr.quadraticCurveTo(leafLen * 0.5, -leafWidth * 0.3, 0, 0);
        const gr = geo(sr);
        gr.rotateZ(angle - 0.55 + t * 0.2);
        gr.translate(originX + Math.cos(angle) * dist, originY + Math.sin(angle) * dist, 0);
        geos.push(gr);
    }
    return geos;
};
function sky(seed, minH, maxH, minW, maxW, valleyCenter = false) {
    const r = rng(seed);
    const out = [];
    let x = -28;
    while(x < 28){
        const w = minW + r() * (maxW - minW);
        let h = 1.0 + minH + r() * (maxH - minH);
        const mid = x + w * 0.5;
        if (valleyCenter && Math.abs(mid) < 9.5) {
            h = 3.2 + r() * 2.1;
            if (mid > -5.0 && mid < -1.5) {
                h = 3.0;
            }
        }
        out.push(rectS(x, -4.5, w, h));
        x += w * (0.92 + r() * 0.12);
    }
    return out;
}
const tower = (x)=>[
        rectS(x - 0.8, 2, 1.6, 1.3),
        rectS(x - 0.6, -4.5, 0.16, 6.6),
        rectS(x + 0.44, -4.5, 0.16, 6.6)
    ];
const THEMES = [
    {
        id: "dark",
        label: "NIGHT",
        bg: "#e9e3d6",
        floor: "#d6cdb8",
        word: "BUILD",
        line: "rgba(20,20,20,0.45)",
        layers: [
            {
                z: -10,
                color: "#d9a441",
                geos: ()=>[
                        geo(circS(5, 2.2, 3.4))
                    ]
            },
            {
                z: -8.5,
                color: "#d3cab5",
                geos: ()=>[
                        geo(sky(11, 1.5, 4.2, 1.2, 2.6))
                    ]
            },
            {
                z: -6.8,
                text: true
            },
            {
                z: -5,
                color: "#bbb199",
                geos: ()=>[
                        geo(sky(23, 1, 2.8, 1.5, 3))
                    ]
            },
            {
                z: -3.5,
                color: "#9f9680",
                geos: ()=>[
                        geo(sky(37, 0.4, 1.1, 2, 4))
                    ]
            }
        ]
    },
    {
        id: "urban",
        label: "STREET",
        bg: "#d6d3cc",
        floor: "#bdb9b0",
        word: "DESIGN",
        line: "rgba(20,20,20,0.6)",
        layers: [
            {
                z: -9,
                color: "#c2beb5",
                geos: ()=>[
                        geo(sky(5, 2.5, 5.5, 1.5, 3.2))
                    ]
            },
            {
                z: -7.5,
                text: true
            },
            {
                z: -5.5,
                color: "#3e9c97",
                geos: ()=>[
                        geo([
                            ...sky(17, 2.2, 5.0, 1.8, 3.4, true),
                            ...tower(-10.2)
                        ])
                    ]
            },
            {
                z: -3.5,
                color: "#2b7773",
                geos: ()=>[
                        geo(sky(29, 0.8, 1.8, 2, 3.5))
                    ]
            }
        ]
    },
    {
        id: "summer",
        label: "HOLIDAY",
        bg: "#a9d6ea",
        floor: "#f1deb0",
        word: "RENDER",
        line: "rgba(20,20,20,0.55)",
        layers: [
            {
                z: -10,
                color: "#f08a5d",
                geos: ()=>[
                        geo(circS(-4.5, 2.6, 3.8))
                    ]
            },
            {
                z: -8.8,
                color: "#ffffff",
                geos: ()=>[
                        cloud(8.0, 3.8, 1.1),
                        cloud(-10.0, 4.4, 0.85),
                        cloud(13.5, 2.8, 1.2)
                    ]
            },
            {
                z: -7.6,
                color: "#8cc3dc",
                geos: ()=>[
                        geo([
                            semiS(-9, -4.5, 5.5),
                            semiS(2, -4.5, 7.5),
                            semiS(12, -4.5, 6.0)
                        ])
                    ]
            },
            {
                z: -6.4,
                text: true
            },
            {
                z: -3.5,
                color: "#2d6a4f",
                geos: ()=>[
                        ...palmLeaf(-13.0, 6.2, 5.0, -0.75),
                        ...palmLeaf(-13.5, 5.2, 4.2, -0.45),
                        ...palmLeaf(13.0, 6.2, 5.0, Math.PI + 0.75),
                        ...palmLeaf(13.5, 5.2, 4.2, Math.PI + 0.45)
                    ]
            }
        ]
    },
    {
        id: "retro",
        label: "RETRO",
        bg: "#f1e4c8",
        floor: "#e2d0a6",
        word: "DEPLOY",
        line: "rgba(20,20,20,0.4)",
        layers: [
            {
                z: -10,
                color: "#e98a2b",
                geos: ()=>[
                        geo(semiS(0, -3.8, 7.5))
                    ]
            },
            {
                z: -9.7,
                color: "#f2a94f",
                geos: ()=>[
                        geo(semiS(0, -3.8, 5.8))
                    ]
            },
            {
                z: -9.4,
                color: "#f7cd8e",
                geos: ()=>[
                        geo(semiS(0, -3.8, 4.2))
                    ]
            },
            {
                z: -7,
                text: true
            },
            {
                z: -4,
                color: "#d4601a",
                geos: ()=>[
                        geo([
                            archS(-10, -4.5, 3.2, 9.5),
                            archS(10, -4.5, 3.2, 9.5)
                        ])
                    ]
            }
        ]
    }
];
function HeroNavTab({ id, index, label, isActive, onClick }) {
    const activeLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (activeLineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(activeLineRef.current);
            if (hoverLineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
            if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            if (dotRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(dotRef.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeLineRef.current) return;
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(activeLineRef.current, {
                scaleX: isActive ? 1 : 0,
                transformOrigin: "left"
            });
            if (hoverLineRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(hoverLineRef.current, {
                    scaleX: 0,
                    transformOrigin: "left"
                });
            }
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(activeLineRef.current);
        if (isActive) {
            if (hoverLineRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(hoverLineRef.current, {
                    scaleX: 0
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(activeLineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.45,
                ease: "power3.out"
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(activeLineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.32,
                ease: "power2.inOut"
            });
        }
    }, [
        isActive
    ]);
    const handleMouseEnter = ()=>{
        if (isActive) return;
        if (hoverLineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(hoverLineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.35,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                y: -2,
                duration: 0.22,
                ease: "power2.out"
            });
        }
        if (dotRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(dotRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dotRef.current, {
                scale: 1.4,
                duration: 0.22,
                ease: "power2.out"
            });
        }
    };
    const handleMouseLeave = ()=>{
        if (isActive) return;
        if (hoverLineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(hoverLineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(hoverLineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.28,
                ease: "power2.inOut"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                y: 0,
                duration: 0.22,
                ease: "power2.out"
            });
        }
        if (dotRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(dotRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dotRef.current, {
                scale: 1,
                duration: 0.22,
                ease: "power2.out"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        id: id,
        type: "button",
        onClick: onClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: "w-full group text-left pt-1 sm:pt-2 flex flex-col font-mono text-[10px] sm:text-sm tracking-tight sm:tracking-widest uppercase cursor-pointer select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[3px] sm:h-[4px] mb-2 sm:mb-3 overflow-hidden rounded-[1px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-neutral-900/25"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: hoverLineRef,
                        className: "absolute inset-0 bg-neutral-900/85 origin-left will-change-transform pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: activeLineRef,
                        className: "absolute inset-0 bg-neutral-950 origin-left will-change-transform pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 sm:gap-2 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: dotRef,
                        className: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 transition-colors duration-300 will-change-transform ${isActive ? "bg-purple-600 animate-pulse ring-4 ring-purple-600/20" : "bg-neutral-400 group-hover:bg-neutral-900"}`
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: textRef,
                        className: `truncate transition-colors duration-200 will-change-transform ${isActive ? "text-neutral-950 font-bold" : "text-neutral-600 group-hover:text-neutral-950 font-medium"}`,
                        children: [
                            "0",
                            index + 1,
                            " ",
                            label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroScene3D.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
function ExploreWorkButton({ onClick }) {
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lineRef.current, {
            scaleX: 0,
            transformOrigin: "left"
        });
        return ()=>{
            if (btnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            if (arrowRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
        };
    }, []);
    const handleMouseEnter = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                y: -1.5,
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                duration: 0.28,
                ease: "power2.out"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(lineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.32,
                ease: "power2.out"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                rotate: -45,
                x: 3,
                y: -1.5,
                duration: 0.28,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                color: "#ffffff",
                duration: 0.2
            });
        }
    };
    const handleMouseLeave = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                y: 0,
                borderColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
                duration: 0.24,
                ease: "power2.out"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.26,
                ease: "power2.inOut"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                rotate: 0,
                x: 0,
                y: 0,
                duration: 0.24,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                color: "rgba(255, 255, 255, 0.88)",
                duration: 0.2
            });
        }
    };
    const handleMouseDown = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                scale: 0.97,
                duration: 0.1,
                ease: "power2.out"
            });
        }
    };
    const handleMouseUp = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                scale: 1,
                duration: 0.15,
                ease: "power2.out"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: btnRef,
        type: "button",
        id: "btn-explore-work",
        onClick: onClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        className: "group pointer-events-auto mt-2.5 sm:mt-3 self-center inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutral-950 text-white/90 border border-white/15 text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase shadow-sm cursor-pointer select-none will-change-transform",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: textRef,
                        className: "block tracking-wider text-white/90 whitespace-nowrap",
                        children: "EXPLORE WORK"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[1.5px] mt-0.5 overflow-hidden rounded-[1px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroScene3D.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: lineRef,
                                className: "absolute inset-0 bg-white origin-left will-change-transform"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroScene3D.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: arrowRef,
                className: "inline-block shrink-0 text-[11px] sm:text-sm font-light text-white will-change-transform",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroScene3D.tsx",
        lineNumber: 470,
        columnNumber: 5
    }, this);
}
function HeroScene3D() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeAvatar, setActiveAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const switchAvatarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [philippineTime, setPhilippineTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateTime = ()=>{
            const formatted = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Manila",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }).format(new Date());
            setPhilippineTime(`${formatted} GMT+8`);
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return ()=>clearInterval(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](THEMES[0].bg);
        const targetBg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](THEMES[0].bg);
        const targetFloor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](THEMES[0].floor);
        const width = container.clientWidth;
        const height = container.clientHeight;
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, width / height, 0.1, 100);
        camera.position.set(0, 0, 8.8);
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            powerPreference: "high-performance",
            stencil: false
        });
        renderer.setSize(width, height);
        const isMobileInitial = width < 768;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobileInitial ? 1.4 : 1.6));
        renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        container.appendChild(renderer.domElement);
        const FLOOR_Y = -3.48;
        const floorGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](80, 50);
        const floorMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: THEMES[0].floor
        });
        const floorMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](floorGeo, floorMat);
        floorMesh.rotation.x = -Math.PI / 2;
        floorMesh.position.set(0, FLOOR_Y, -18);
        floorMesh.matrixAutoUpdate = false;
        floorMesh.updateMatrix();
        scene.add(floorMesh);
        const sceneryGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        scene.add(sceneryGroup);
        const textDraws = [];
        const sceneryDisposables = [];
        const builtThemes = [];
        THEMES.forEach((t, i)=>{
            const grp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
            sceneryGroup.add(grp);
            const layers = [];
            t.layers.forEach((l)=>{
                const layerGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
                layerGroup.position.z = l.z;
                layerGroup.position.y = -18;
                grp.add(layerGroup);
                const bl = {
                    z: l.z,
                    off: -18,
                    target: -18,
                    group: layerGroup
                };
                if (l.text) {
                    const tc = document.createElement("canvas");
                    tc.width = 2048;
                    tc.height = 640;
                    const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](tc);
                    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                    tex.generateMipmaps = false;
                    const draw = ()=>{
                        const g = tc.getContext("2d");
                        if (!g) return;
                        g.clearRect(0, 0, 2048, 640);
                        g.font = "400 520px 'Bebas Neue', Impact, sans-serif";
                        g.textAlign = "center";
                        g.textBaseline = "middle";
                        g.lineWidth = 6;
                        g.strokeStyle = t.line;
                        g.strokeText(t.word, 1024, 320);
                        tex.needsUpdate = true;
                        renderer.initTexture(tex);
                    };
                    draw();
                    textDraws.push(draw);
                    const tGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](26, 8.1);
                    const tMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        map: tex,
                        transparent: true,
                        depthWrite: false
                    });
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](tGeo, tMat);
                    m.position.set(0, 0.4, 0);
                    layerGroup.add(m);
                    sceneryDisposables.push({
                        geo: tGeo,
                        mat: tMat,
                        tex
                    });
                } else if (l.geos && l.color) {
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: l.color
                    });
                    const geometries = l.geos();
                    geometries.forEach((g)=>{
                        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](g, mat);
                        layerGroup.add(m);
                        sceneryDisposables.push({
                            geo: g,
                            mat
                        });
                    });
                }
                layers.push(bl);
            });
            builtThemes.push({
                group: grp,
                layers
            });
        });
        if (typeof document !== "undefined" && document.fonts) {
            document.fonts.ready.then(()=>textDraws.forEach((d)=>d()));
        }
        const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 1.2);
        scene.add(ambientLight);
        const keyLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.8);
        keyLight.position.set(5, 5, 5);
        scene.add(keyLight);
        const worldGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        scene.add(worldGroup);
        const avatarGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        worldGroup.add(avatarGroup);
        const backgroundZ = -2.5;
        const cylinderRadius = 10.5;
        const cylinderArc = Math.PI * 0.72;
        const cylinderHeight = 9.2;
        const cylinderCenterY = 0.8;
        const backgroundGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        backgroundGroup.position.set(0, cylinderCenterY, backgroundZ);
        scene.add(backgroundGroup);
        const bgCylinderGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](cylinderRadius, cylinderRadius, cylinderHeight, 64, 1, true, -cylinderArc / 2, cylinderArc);
        const bgPos = bgCylinderGeo.attributes.position;
        for(let i = 0; i < bgPos.count; i++){
            bgPos.setZ(i, -bgPos.getZ(i) + cylinderRadius);
        }
        bgCylinderGeo.computeVertexNormals();
        const bgCylinderMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0xffffff,
            transparent: true,
            opacity: 0,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        const bgCylinderMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](bgCylinderGeo, bgCylinderMat);
        bgCylinderMesh.visible = false;
        bgCylinderMesh.position.set(0, 0, -0.05);
        bgCylinderMesh.renderOrder = -1;
        backgroundGroup.add(bgCylinderMesh);
        const textCanvas = document.createElement("canvas");
        textCanvas.width = 1400;
        textCanvas.height = 300;
        const textCtx = textCanvas.getContext("2d");
        const textTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](textCanvas);
        textTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        textTexture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        textTexture.generateMipmaps = false;
        const textArcLength = 13.0;
        const textThetaLength = textArcLength / cylinderRadius;
        const textThetaStart = -textThetaLength / 2;
        const textHeight = textArcLength * (300 / 1400);
        const textCurvedGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](cylinderRadius - 0.02, cylinderRadius - 0.02, textHeight, 48, 1, true, textThetaStart, textThetaLength);
        const textPos = textCurvedGeo.attributes.position;
        for(let i = 0; i < textPos.count; i++){
            textPos.setZ(i, -textPos.getZ(i) + (cylinderRadius - 0.02));
        }
        textCurvedGeo.computeVertexNormals();
        const textMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: textTexture,
            transparent: true,
            depthWrite: false,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
            opacity: 0
        });
        const textMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](textCurvedGeo, textMat);
        textMesh.position.set(0, 3 - cylinderCenterY - 1.2, 0);
        textMesh.renderOrder = 0;
        backgroundGroup.add(textMesh);
        const halfArcLength = textArcLength / 2;
        const halfThetaLength = textThetaLength / 2;
        const bottomMeshHeight = textArcLength * (400 / 2800);
        const webAppsCanvas = document.createElement("canvas");
        webAppsCanvas.width = 1400;
        webAppsCanvas.height = 400;
        const webAppsCtx = webAppsCanvas.getContext("2d");
        const webAppsTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](webAppsCanvas);
        webAppsTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        webAppsTexture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        webAppsTexture.generateMipmaps = false;
        const webAppsGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](cylinderRadius - 0.02, cylinderRadius - 0.02, bottomMeshHeight, 48, 1, true, -halfThetaLength, halfThetaLength);
        const wPos = webAppsGeo.attributes.position;
        for(let i = 0; i < wPos.count; i++){
            wPos.setZ(i, -wPos.getZ(i) + (cylinderRadius - 0.02));
        }
        webAppsGeo.computeVertexNormals();
        const webAppsMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: webAppsTexture,
            transparent: true,
            depthWrite: false,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
            opacity: 0
        });
        const webAppsMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](webAppsGeo, webAppsMat);
        webAppsMesh.position.set(1.8, -3.3, 0);
        webAppsMesh.renderOrder = 0;
        backgroundGroup.add(webAppsMesh);
        const aiVideoCanvas = document.createElement("canvas");
        aiVideoCanvas.width = 1400;
        aiVideoCanvas.height = 400;
        const aiVideoCtx = aiVideoCanvas.getContext("2d");
        const aiVideoTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](aiVideoCanvas);
        aiVideoTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        aiVideoTexture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        aiVideoTexture.generateMipmaps = false;
        const aiVideoGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](cylinderRadius - 0.02, cylinderRadius - 0.02, bottomMeshHeight, 48, 1, true, 0, halfThetaLength);
        const aPos = aiVideoGeo.attributes.position;
        for(let i = 0; i < aPos.count; i++){
            aPos.setZ(i, -aPos.getZ(i) + (cylinderRadius - 0.02));
        }
        aiVideoGeo.computeVertexNormals();
        const aiVideoMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: aiVideoTexture,
            transparent: true,
            depthWrite: false,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
            opacity: 0
        });
        const aiVideoAdsMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](aiVideoGeo, aiVideoMat);
        aiVideoAdsMesh.position.set(-1.8, -3.3, 0);
        aiVideoAdsMesh.renderOrder = 0;
        backgroundGroup.add(aiVideoAdsMesh);
        const renderWebAppsText = ()=>{
            if (!webAppsCtx) return;
            webAppsCtx.clearRect(0, 0, webAppsCanvas.width, webAppsCanvas.height);
            webAppsCtx.fillStyle = "#000000";
            webAppsCtx.font = 'bold 74px "Bebas Neue", Anton, Oswald, "Arial Narrow", sans-serif';
            webAppsCtx.textBaseline = "middle";
            webAppsCtx.textAlign = "right";
            webAppsCtx.fillText("WEB APPS AND DESIGN", 1080, 200);
            webAppsTexture.needsUpdate = true;
            renderer.initTexture(webAppsTexture);
        };
        const renderAiVideoText = ()=>{
            if (!aiVideoCtx) return;
            aiVideoCtx.clearRect(0, 0, aiVideoCanvas.width, aiVideoCanvas.height);
            aiVideoCtx.fillStyle = "#000000";
            aiVideoCtx.font = 'bold 74px "Bebas Neue", Anton, Oswald, "Arial Narrow", sans-serif';
            aiVideoCtx.textBaseline = "middle";
            aiVideoCtx.textAlign = "left";
            aiVideoCtx.fillText("AI VIDEO ADS AND VISUALS", 320, 200);
            aiVideoTexture.needsUpdate = true;
            renderer.initTexture(aiVideoTexture);
        };
        renderWebAppsText();
        renderAiVideoText();
        if (typeof document !== "undefined" && document.fonts) {
            document.fonts.ready.then(()=>{
                renderWebAppsText();
                renderAiVideoText();
            });
        }
        const words = [
            "DEVELOPER",
            "VIDEO AD CREATOR",
            "DESIGNER"
        ];
        let wordIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let pauseUntil = 0;
        let lastStepTime = 0;
        let lastCursorBlink = 0;
        let cursorVisible = true;
        let currentStartX = -1;
        let lastDrawnKey = "";
        let canStartTypewriter = false;
        const renderTypewriter = (now, delta = 0.016)=>{
            if (!textCtx) return;
            const staticText = "AI-ASSISTED";
            textCtx.font = 'bold 78px "Bebas Neue", Anton, Impact, Oswald, "Arial Narrow", sans-serif-condensed, sans-serif';
            textCtx.textBaseline = "middle";
            const staticWidth = textCtx.measureText(staticText).width;
            const spaceWidth = textCtx.measureText(" ").width;
            const centerX = textCanvas.width / 2;
            const centerY = textCanvas.height / 2;
            const defaultStartX = centerX - staticWidth;
            if (!canStartTypewriter) {
                if (currentStartX < 0) {
                    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
                    textCtx.textAlign = "left";
                    textCtx.fillStyle = "#000000";
                    textCtx.fillText(staticText, defaultStartX, centerY);
                    textTexture.needsUpdate = true;
                    currentStartX = defaultStartX;
                }
                return;
            }
            if (currentStartX < 0) {
                currentStartX = defaultStartX;
            }
            if (now - lastCursorBlink > 500) {
                cursorVisible = !cursorVisible;
                lastCursorBlink = now;
            }
            if (now >= pauseUntil) {
                const currentWord = words[wordIdx];
                const stepDelay = isDeleting ? 38 : 68;
                if (now - lastStepTime >= stepDelay) {
                    lastStepTime = now;
                    if (!isDeleting) {
                        charIdx++;
                        if (charIdx >= currentWord.length) {
                            charIdx = currentWord.length;
                            isDeleting = true;
                            pauseUntil = now + 4000;
                        }
                    } else {
                        charIdx--;
                        if (charIdx <= 0) {
                            charIdx = 0;
                            isDeleting = false;
                            wordIdx = (wordIdx + 1) % words.length;
                            pauseUntil = now + 500;
                        }
                    }
                }
            }
            const currentWord = words[wordIdx];
            const isLongWord = currentWord.length > 11;
            let targetStartX = defaultStartX;
            if (isLongWord && (charIdx > 0 || isDeleting)) {
                const fullWordWidth = textCtx.measureText(currentWord).width;
                const totalLineWidth = staticWidth + spaceWidth + fullWordWidth;
                targetStartX = (textCanvas.width - totalLineWidth) / 2;
            }
            const slideLerp = 1 - Math.exp(-7.0 * delta);
            currentStartX += (targetStartX - currentStartX) * slideLerp;
            if (Math.abs(targetStartX - currentStartX) < 0.25) {
                currentStartX = targetStartX;
            }
            const dynamicText = currentWord.substring(0, charIdx);
            const cursorChar = cursorVisible ? "|" : " ";
            const roundedX = Math.round(currentStartX / 2) * 2;
            const drawKey = `${wordIdx}-${charIdx}-${cursorVisible}-${roundedX}`;
            if (drawKey === lastDrawnKey) {
                return;
            }
            lastDrawnKey = drawKey;
            textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
            textCtx.textAlign = "left";
            textCtx.fillStyle = "#000000";
            textCtx.fillText(staticText, currentStartX, centerY);
            textCtx.fillStyle = "#581c87";
            textCtx.fillText(dynamicText, currentStartX + staticWidth + spaceWidth, centerY);
            textCtx.fillStyle = "#6b21a8";
            textCtx.fillText(cursorChar, currentStartX + staticWidth + spaceWidth + textCtx.measureText(dynamicText).width + 4, centerY);
            textTexture.needsUpdate = true;
        };
        const textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]();
        const avatarAspect = 1536 / 2752;
        const planeHeight = 6.6;
        const planeWidth = planeHeight * avatarAspect;
        let textureUrban = null;
        let textureSummer = null;
        let textureRetro = null;
        const textureDark = textureLoader.load("/images/Hero-avatar1.webp", ()=>{
            setIsLoaded(true);
            renderer.initTexture(textureDark);
            setTimeout(()=>{
                textureUrban = textureLoader.load("/images/Hero-avatar2.webp", (tex)=>{
                    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                    tex.generateMipmaps = false;
                    renderer.initTexture(tex);
                });
                textureUrban.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                textureUrban.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                textureUrban.generateMipmaps = false;
                textureSummer = textureLoader.load("/images/Hero-avatar3.webp", (tex)=>{
                    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                    tex.generateMipmaps = false;
                    renderer.initTexture(tex);
                });
                textureSummer.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                textureSummer.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                textureSummer.generateMipmaps = false;
                textureRetro = textureLoader.load("/images/Hero-avatar4.webp", (tex)=>{
                    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                    tex.generateMipmaps = false;
                    renderer.initTexture(tex);
                });
                textureRetro.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                textureRetro.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                textureRetro.generateMipmaps = false;
            }, 600);
        });
        textureDark.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        textureDark.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        textureDark.generateMipmaps = false;
        const glitchUniforms = {
            map: {
                value: textureDark
            },
            uGlitch: {
                value: 0.0
            },
            uTime: {
                value: 0.0
            },
            uOpacity: {
                value: 0.0
            }
        };
        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
        const fragmentShader = `
      uniform sampler2D map;
      uniform float uGlitch;
      uniform float uTime;
      uniform float uOpacity;
      varying vec2 vUv;

      float rand(vec2 co) {
        return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = vUv;

        if (uGlitch > 0.005) {
          float sliceCount = 18.0;
          float sliceY = floor(uv.y * sliceCount);
          float sliceNoise = rand(vec2(sliceY, floor(uTime * 24.0)));
          if (sliceNoise > 0.52) {
            float offset = (sliceNoise - 0.5) * 0.16 * uGlitch;
            uv.x += offset;
          }

          if (fract(uv.y * 80.0) < 0.15) {
            uv.x += (rand(vec2(uv.y, uTime)) - 0.5) * 0.05 * uGlitch;
          }

          float rgbShift = 0.035 * uGlitch;
          vec4 colR = texture2D(map, vec2(uv.x + rgbShift, uv.y));
          vec4 colG = texture2D(map, uv);
          vec4 colB = texture2D(map, vec2(uv.x - rgbShift, uv.y));

          float alpha = max(colG.a, max(colR.a, colB.a)) * uOpacity;
          if (alpha < 0.01) discard;

          float noise = (rand(uv * 120.0 + uTime * 10.0) - 0.5) * 0.18 * uGlitch;
          vec3 rgb = vec3(colR.r, colG.g, colB.b) + noise;

          gl_FragColor = vec4(rgb, alpha);
        } else {
          vec4 color = texture2D(map, uv);
          color.a *= uOpacity;
          if (color.a < 0.01) discard;
          gl_FragColor = color;
        }
        #include <colorspace_fragment>
      }
    `;
        let geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](planeWidth, planeHeight);
        geometry.translate(0, planeHeight * 0.4, 0);
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            uniforms: glitchUniforms,
            vertexShader,
            fragmentShader,
            transparent: true,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
            depthWrite: false
        });
        const avatarMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
        avatarMesh.renderOrder = 2;
        avatarGroup.position.set(0, -planeHeight * 0.4 - 0.2, 0);
        avatarGroup.scale.set(0.85, 0.85, 1.0);
        avatarGroup.add(avatarMesh);
        const urbanScale = 0.95;
        const summerScale = 0.94;
        const retroScale = 0.95;
        let isTransitioning = false;
        let currentAvatar = "dark";
        switchAvatarRef.current = (target)=>{
            if (isTransitioning || target === currentAvatar) return;
            isTransitioning = true;
            const prevIdx = THEMES.findIndex((t)=>t.id === currentAvatar);
            const nextIdx = THEMES.findIndex((t)=>t.id === target);
            if (prevIdx >= 0 && builtThemes[prevIdx]) {
                builtThemes[prevIdx].layers.forEach((l, n)=>{
                    setTimeout(()=>{
                        l.target = -18;
                    }, n * 60);
                });
            }
            if (nextIdx >= 0 && builtThemes[nextIdx]) {
                builtThemes[nextIdx].layers.forEach((l, n)=>{
                    l.off = -18;
                    setTimeout(()=>{
                        l.target = 0;
                    }, 180 + n * 80);
                });
                targetBg.set(THEMES[nextIdx].bg);
                targetFloor.set(THEMES[nextIdx].floor);
            }
            currentAvatar = target;
            setActiveAvatar(target);
            let targetTexture = textureDark;
            let targetScale = 1.0;
            if (target === "urban") {
                targetTexture = textureUrban || textureDark;
                targetScale = urbanScale;
            } else if (target === "summer") {
                targetTexture = textureSummer || textureDark;
                targetScale = summerScale;
            } else if (target === "retro") {
                targetTexture = textureRetro || textureDark;
                targetScale = retroScale;
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: ()=>{
                    isTransitioning = false;
                    glitchUniforms.uGlitch.value = 0.0;
                }
            });
            tl.to(glitchUniforms.uGlitch, {
                value: 1.0,
                duration: 0.14,
                ease: "power2.in"
            }).call(()=>{
                glitchUniforms.map.value = targetTexture;
                avatarMesh.scale.set(targetScale, targetScale, 1.0);
            }).to(glitchUniforms.uGlitch, {
                value: 0.45,
                duration: 0.05,
                ease: "none"
            }).to(glitchUniforms.uGlitch, {
                value: 0.8,
                duration: 0.04,
                ease: "none"
            }).to(glitchUniforms.uGlitch, {
                value: 0.0,
                duration: 0.16,
                ease: "power3.out"
            });
        };
        const mouse = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0
        };
        let isTouching = false;
        let winWidth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1920;
        let winHeight = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1080;
        const onMouseMove = (e)=>{
            mouse.targetX = e.clientX / winWidth * 2 - 1;
            mouse.targetY = -(e.clientY / winHeight) * 2 + 1;
        };
        const onTouchStart = ()=>{
            isTouching = true;
        };
        const onTouchMove = (e)=>{
            isTouching = true;
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                mouse.targetX = touch.clientX / winWidth * 2 - 1;
                mouse.targetY = -(touch.clientY / winHeight) * 2 + 1;
            }
        };
        const onTouchEnd = ()=>{
            isTouching = false;
            mouse.targetX = 0;
            mouse.targetY = 0;
        };
        const onOrientation = (e)=>{
            if (isTouching) return;
            if (e.gamma !== null && e.beta !== null) {
                const clampedGamma = Math.max(-30, Math.min(30, e.gamma));
                const clampedBeta = Math.max(15, Math.min(75, e.beta));
                mouse.targetX = clampedGamma / 30;
                mouse.targetY = (clampedBeta - 45) / 30;
            }
        };
        const requestGyroPermission = async ()=>{
            try {
                if (typeof DeviceOrientationEvent?.requestPermission === "function") {
                    const res = await DeviceOrientationEvent.requestPermission();
                    if (res === "granted") {
                        window.addEventListener("deviceorientation", onOrientation, {
                            passive: true
                        });
                    }
                }
            } catch  {}
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        window.addEventListener("mousemove", onMouseMove, {
            passive: true
        });
        window.addEventListener("touchstart", onTouchStart, {
            passive: true
        });
        window.addEventListener("touchmove", onTouchMove, {
            passive: true
        });
        window.addEventListener("touchend", onTouchEnd, {
            passive: true
        });
        const onKeyDown = (e)=>{
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            if (e.key === "1") switchAvatarRef.current?.("dark");
            else if (e.key === "2") switchAvatarRef.current?.("urban");
            else if (e.key === "3") switchAvatarRef.current?.("summer");
            else if (e.key === "4") switchAvatarRef.current?.("retro");
        };
        window.addEventListener("keydown", onKeyDown);
        const onResize = ()=>{
            if (!container) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            winWidth = w || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1920);
            winHeight = h || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1080);
            camera.aspect = w / h;
            const isMobile = w < 768;
            const maxDpr = isMobile ? 1.4 : 1.6;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
            if (isMobile) {
                camera.position.z = 11.2;
                const mobileScale = Math.min(1.0, Math.max(0.68, w / 768 * 0.90 + 0.10));
                backgroundGroup.scale.set(mobileScale, mobileScale, mobileScale);
                sceneryGroup.scale.set(mobileScale, mobileScale, 1.0);
                avatarGroup.scale.set(0.88, 0.88, 1.0);
            } else {
                camera.position.z = 8.8;
                backgroundGroup.scale.set(1.0, 1.0, 1.0);
                sceneryGroup.scale.set(1.0, 1.0, 1.0);
                avatarGroup.scale.set(1.0, 1.0, 1.0);
            }
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener("resize", onResize);
        onResize();
        const revealTimeouts = [];
        const staggerTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            paused: true
        });
        staggerTimeline.call(()=>{
            const themeIdx = THEMES.findIndex((th)=>th.id === currentAvatar);
            const activeTheme = builtThemes[themeIdx >= 0 ? themeIdx : 0];
            if (activeTheme && activeTheme.layers) {
                activeTheme.layers.forEach((l, n)=>{
                    const timer = setTimeout(()=>{
                        l.target = 0;
                    }, n * 70);
                    revealTimeouts.push(timer);
                });
            }
        }, [], 0.0).fromTo("#header-nav", {
            opacity: 0,
            y: -16
        }, {
            opacity: 1,
            y: 0,
            duration: 0.42,
            ease: "power2.out"
        }, 0.04).to(textMesh.position, {
            y: 3 - cylinderCenterY,
            duration: 0.52,
            ease: "power3.out",
            onStart: ()=>{
                canStartTypewriter = true;
            }
        }, 0.12).to(textMat, {
            opacity: 1,
            duration: 0.42,
            ease: "power2.out"
        }, 0.12).to(webAppsMesh.position, {
            x: 0,
            duration: 0.48,
            ease: "power3.out"
        }, 0.18).to(webAppsMat, {
            opacity: 1,
            duration: 0.38,
            ease: "power2.out"
        }, 0.18).to(aiVideoAdsMesh.position, {
            x: 0,
            duration: 0.48,
            ease: "power3.out"
        }, 0.24).to(aiVideoMat, {
            opacity: 1,
            duration: 0.38,
            ease: "power2.out"
        }, 0.24).set("#hero-nav", {
            opacity: 1
        }, 0.28).fromTo([
            ".hero-nav-header",
            ".hero-nav-item"
        ], {
            opacity: 0,
            y: 16
        }, {
            opacity: 1,
            y: 0,
            duration: 0.38,
            ease: "power2.out",
            stagger: 0.05
        }, 0.30);
        let isRunning = false;
        let isOverlayOpen = false;
        let animationFrameId;
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
        const animate = ()=>{
            if (!isRunning || isOverlayOpen) return;
            animationFrameId = requestAnimationFrame(animate);
            const delta = Math.min(clock.getDelta(), 0.05);
            const now = performance.now();
            renderTypewriter(now, delta);
            glitchUniforms.uTime.value = now * 0.001;
            if (scene.background instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]) {
                const dr = Math.abs(scene.background.r - targetBg.r);
                const dg = Math.abs(scene.background.g - targetBg.g);
                const db = Math.abs(scene.background.b - targetBg.b);
                if (dr > 0.002 || dg > 0.002 || db > 0.002) {
                    const colorLerp = 1 - Math.exp(-4.5 * delta);
                    scene.background.lerp(targetBg, colorLerp);
                    floorMat.color.lerp(targetFloor, colorLerp);
                } else if (dr > 0 || dg > 0 || db > 0) {
                    scene.background.copy(targetBg);
                    floorMat.color.copy(targetFloor);
                }
            }
            const lerpFactor = 1 - Math.exp(-6.8 * delta);
            const mouseDiffX = mouse.targetX - mouse.x;
            const mouseDiffY = mouse.targetY - mouse.y;
            if (Math.abs(mouseDiffX) > 0.0004 || Math.abs(mouseDiffY) > 0.0004) {
                mouse.x += mouseDiffX * lerpFactor;
                mouse.y += mouseDiffY * lerpFactor;
            } else if (mouse.x !== mouse.targetX || mouse.y !== mouse.targetY) {
                mouse.x = mouse.targetX;
                mouse.y = mouse.targetY;
            }
            const layerLerp = 1 - Math.exp(-7.2 * delta);
            for(let t = 0; t < builtThemes.length; t++){
                const th = builtThemes[t];
                let isVisible = false;
                for(let i = 0; i < th.layers.length; i++){
                    const l = th.layers[i];
                    const diff = l.target - l.off;
                    if (Math.abs(diff) > 0.003) {
                        l.off += diff * layerLerp;
                    } else if (l.off !== l.target) {
                        l.off = l.target;
                    }
                    if (l.off > -17.5) {
                        isVisible = true;
                        l.group.position.x = -mouse.x * ((Math.abs(l.z) - 3.0) * 0.12);
                        l.group.position.y = l.off;
                    }
                }
                th.group.visible = isVisible;
            }
            const breathY = Math.sin(now * 0.0012) * 0.035;
            const breathRot = Math.cos(now * 0.0009) * 0.006;
            avatarGroup.position.y = -planeHeight * 0.4 - 0.2 + breathY * 0.5;
            avatarGroup.rotation.y = mouse.x * 0.08 + breathRot;
            avatarGroup.rotation.x = -mouse.y * 0.08 + breathY * 0.05;
            avatarGroup.rotation.z = 0;
            backgroundGroup.position.x = -mouse.x * 0.7;
            backgroundGroup.rotation.y = mouse.x * 0.08;
            backgroundGroup.rotation.x = 0;
            sceneryGroup.position.x = -mouse.x * 1.2;
            sceneryGroup.rotation.y = mouse.x * 0.10;
            sceneryGroup.rotation.x = -mouse.y * 0.03;
            camera.position.x = 0;
            camera.position.y = -mouse.y * 0.8;
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);
        };
        let hasStarted3D = false;
        const start3D = ()=>{
            if (hasStarted3D) {
                if (!isRunning) {
                    isRunning = true;
                    clock.getDelta();
                    animate();
                }
                return;
            }
            hasStarted3D = true;
            if (!isRunning) {
                isRunning = true;
                animate();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(glitchUniforms.uOpacity, {
                value: 1.0,
                duration: 0.8,
                ease: "power2.out"
            });
            const isMobile = container ? container.clientWidth < 768 : false;
            const baseAvatarScale = isMobile ? 0.88 : 1.0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(avatarGroup.scale, {
                x: baseAvatarScale,
                y: baseAvatarScale,
                z: 1.0,
                duration: 0.85,
                ease: "power3.out"
            });
        };
        let hasRevealedElements = false;
        const playStaggerReveal = ()=>{
            start3D();
            if (hasRevealedElements) return;
            hasRevealedElements = true;
            staggerTimeline.play();
        };
        const resetToDarkWithStagger = ()=>{
            start3D();
            hasRevealedElements = true;
            isTransitioning = false;
            revealTimeouts.forEach(clearTimeout);
            revealTimeouts.length = 0;
            builtThemes.forEach((th, idx)=>{
                if (idx !== 0) {
                    th.layers.forEach((l)=>{
                        l.target = -18;
                        l.off = -18;
                        l.group.position.y = -18;
                    });
                    th.group.visible = false;
                }
            });
            builtThemes[0].group.visible = true;
            builtThemes[0].layers.forEach((l)=>{
                l.off = -18;
                l.target = -18;
                l.group.position.y = -18;
            });
            currentAvatar = "dark";
            setActiveAvatar("dark");
            targetBg.set(THEMES[0].bg);
            targetFloor.set(THEMES[0].floor);
            if (scene.background instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]) {
                scene.background.set(THEMES[0].bg);
            }
            floorMat.color.set(THEMES[0].floor);
            glitchUniforms.map.value = textureDark;
            avatarMesh.scale.set(1.0, 1.0, 1.0);
            builtThemes[0].layers.forEach((l, n)=>{
                const timer = setTimeout(()=>{
                    l.target = 0;
                }, n * 70);
                revealTimeouts.push(timer);
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf([
                textMesh.position,
                textMat,
                webAppsMesh.position,
                webAppsMat,
                aiVideoAdsMesh.position,
                aiVideoMat,
                ".hero-nav-header",
                ".hero-nav-item"
            ]);
            textMesh.position.y = 3 - cylinderCenterY - 1.2;
            textMat.opacity = 0;
            webAppsMesh.position.x = 1.8;
            webAppsMat.opacity = 0;
            aiVideoAdsMesh.position.x = -1.8;
            aiVideoMat.opacity = 0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textMesh.position, {
                y: 3 - cylinderCenterY,
                duration: 0.52,
                ease: "power3.out",
                delay: 0.08,
                onStart: ()=>{
                    canStartTypewriter = true;
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textMat, {
                opacity: 1,
                duration: 0.42,
                ease: "power2.out",
                delay: 0.08
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(webAppsMesh.position, {
                x: 0,
                duration: 0.48,
                ease: "power3.out",
                delay: 0.14
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(webAppsMat, {
                opacity: 1,
                duration: 0.38,
                ease: "power2.out",
                delay: 0.14
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(aiVideoAdsMesh.position, {
                x: 0,
                duration: 0.48,
                ease: "power3.out",
                delay: 0.20
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(aiVideoMat, {
                opacity: 1,
                duration: 0.38,
                ease: "power2.out",
                delay: 0.20
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo([
                ".hero-nav-header",
                ".hero-nav-item"
            ], {
                opacity: 0,
                y: 16
            }, {
                opacity: 1,
                y: 0,
                duration: 0.38,
                ease: "power2.out",
                stagger: 0.05,
                delay: 0.24
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(glitchUniforms.uGlitch, {
                value: 0.85
            }, {
                value: 0,
                duration: 0.35,
                ease: "power2.out"
            });
            wordIdx = 0;
            charIdx = 0;
            isDeleting = false;
            pauseUntil = 0;
            lastStepTime = 0;
            currentStartX = -1;
            lastDrawnKey = "";
            canStartTypewriter = true;
        };
        const onPaperTearReveal = ()=>{
            start3D();
            setTimeout(playStaggerReveal, 80);
        };
        const onPortfolioViewAbout = ()=>{
            isOverlayOpen = true;
        };
        const onPortfolioViewWork = ()=>{
            isOverlayOpen = true;
        };
        const onPortfolioTriggerMain = ()=>{
            if (isOverlayOpen) {
                isOverlayOpen = false;
                clock.getDelta();
                if (isRunning) {
                    animate();
                }
            }
            resetToDarkWithStagger();
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            window.addEventListener("paper-tear-reveal", onPaperTearReveal);
            window.addEventListener("paper-tear-complete", playStaggerReveal);
        }
        window.addEventListener("portfolio-trigger-main", onPortfolioTriggerMain);
        window.addEventListener("portfolio-view-about", onPortfolioViewAbout);
        window.addEventListener("portfolio-explore-work", onPortfolioViewWork);
        window.addEventListener("portfolio-view-work", onPortfolioViewWork);
        const fallbackTimer = setTimeout(playStaggerReveal, 2500);
        renderer.compile(scene, camera);
        renderer.render(scene, camera);
        return ()=>{
            isRunning = false;
            clearTimeout(fallbackTimer);
            revealTimeouts.forEach(clearTimeout);
            window.removeEventListener("paper-tear-reveal", onPaperTearReveal);
            window.removeEventListener("paper-tear-complete", playStaggerReveal);
            window.removeEventListener("portfolio-trigger-main", onPortfolioTriggerMain);
            window.removeEventListener("portfolio-view-about", onPortfolioViewAbout);
            window.removeEventListener("portfolio-explore-work", onPortfolioViewWork);
            window.removeEventListener("portfolio-view-work", onPortfolioViewWork);
            staggerTimeline.kill();
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("deviceorientation", onOrientation);
            window.removeEventListener("touchstart", requestGyroPermission);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("keydown", onKeyDown);
            if (container && renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            floorGeo.dispose();
            floorMat.dispose();
            sceneryDisposables.forEach((item)=>{
                item.geo?.dispose();
                item.mat?.dispose();
                item.tex?.dispose();
            });
            geometry?.dispose();
            material.dispose();
            textureDark.dispose();
            textureUrban?.dispose();
            textureSummer?.dispose();
            textureRetro?.dispose();
            bgCylinderGeo.dispose();
            bgCylinderMat.dispose();
            textCurvedGeo.dispose();
            textMat.dispose();
            textTexture.dispose();
            webAppsGeo.dispose();
            webAppsMat.dispose();
            webAppsTexture.dispose();
            aiVideoGeo.dispose();
            aiVideoMat.dispose();
            aiVideoTexture.dispose();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-full h-[100dvh] transition-opacity duration-500 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-10 opacity-15 transform-gpu",
                style: {
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .8 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "work-status",
                className: "fixed left-0 top-20 sm:top-1/2 sm:-translate-y-1/2 z-20 select-none pointer-events-none flex flex-col rounded-r-2xl sm:rounded-r-3xl rounded-l-none border border-l-0 border-white/45 pl-4 sm:pl-6 pr-5 sm:pr-8 py-2.5 sm:py-3.5 transform-gpu",
                style: {
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.65)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[9px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.2em] uppercase text-neutral-600",
                        children: "AVAILABLE FOR WORK"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1735,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs sm:text-xl font-black italic tracking-tight text-neutral-900 mt-0.5 sm:mt-1",
                        children: "Freelance & Collab"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1738,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExploreWorkButton, {
                        onClick: ()=>{
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1741,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1725,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "location-status",
                className: "fixed right-0 top-20 sm:top-1/2 sm:-translate-y-1/2 z-20 select-none pointer-events-none flex flex-col items-center text-center rounded-l-2xl sm:rounded-l-full rounded-r-none border border-r-0 border-white/45 pr-4 sm:pr-6 pl-5 sm:pl-8 py-2 sm:py-3 transform-gpu",
                style: {
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 100%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.65)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        suppressHydrationWarning: true,
                        className: "font-mono tabular-nums text-[9px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.2em] uppercase text-neutral-600",
                        children: philippineTime || "12:00:00 AM GMT+8"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1760,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs sm:text-xl font-black italic tracking-tight text-neutral-900 mt-0.5 sm:mt-1",
                        children: "Philippines"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1766,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "hero-nav",
                className: "fixed z-20 left-4 right-4 sm:left-12 sm:right-12 bottom-4 sm:bottom-8 select-none pointer-events-auto opacity-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex flex-col gap-1.5 sm:gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-nav-header flex items-center justify-between font-mono text-[9px] sm:text-xs tracking-widest uppercase text-neutral-500 px-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-neutral-900 tracking-wider sm:tracking-widest",
                                    children: "SELECT MOOD"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroScene3D.tsx",
                                    lineNumber: 1777,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-neutral-400 tracking-wider",
                                    children: "[ 01 — 04 ]"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroScene3D.tsx",
                                    lineNumber: 1780,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroScene3D.tsx",
                            lineNumber: 1776,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1.5 sm:gap-8",
                            children: THEMES.map((t, i)=>{
                                const isActive = activeAvatar === t.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroNavTab, {
                                        id: `btn-nav-${t.id}`,
                                        index: i,
                                        label: t.label,
                                        isActive: isActive,
                                        onClick: ()=>switchAvatarRef.current?.(t.id)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroScene3D.tsx",
                                        lineNumber: 1790,
                                        columnNumber: 17
                                    }, this)
                                }, t.id, false, {
                                    fileName: "[project]/components/HeroScene3D.tsx",
                                    lineNumber: 1789,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/HeroScene3D.tsx",
                            lineNumber: 1785,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroScene3D.tsx",
                    lineNumber: 1775,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1771,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "absolute inset-0 w-full h-full pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1804,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroScene3D.tsx",
        lineNumber: 1714,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/MacBookVideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MacBookVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const BASE_YAW = -0.28;
const BASE_PITCH = 0;
const OPEN_ANGLE = -0.2;
const DEFAULT_VIDEO_ASPECT = 1280 / 612;
const BW = 4.6;
const BD = 3.2;
const BH = 0.1;
const LW = 4.6;
const LH = 3.0;
const DISP_W = 4.46;
const DISP_H = 2.86;
function roundedRect(w, h, r) {
    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
    const x = -w / 2;
    const y = -h / 2;
    const p = Math.PI;
    s.moveTo(x + r, y);
    s.lineTo(x + w - r, y);
    s.absarc(x + w - r, y + r, r, -p / 2, 0, false);
    s.lineTo(x + w, y + h - r);
    s.absarc(x + w - r, y + h - r, r, 0, p / 2, false);
    s.lineTo(x + r, y + h);
    s.absarc(x + r, y + h - r, r, p / 2, p, false);
    s.lineTo(x, y + r);
    s.absarc(x + r, y + r, r, p, p * 1.5, false);
    return s;
}
function canvasRoundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
}
function makeKeyboardTexture() {
    const c = document.createElement('canvas');
    c.width = 1600;
    c.height = 640;
    const ctx = c.getContext('2d');
    if (ctx) {
        ctx.fillStyle = '#0b0b0d';
        canvasRoundRect(ctx, 0, 0, 1600, 640, 28);
        ctx.fill();
        const rows = [
            14,
            14,
            14,
            13,
            12,
            8
        ];
        let y = 34;
        rows.forEach((n, ri)=>{
            const kh = ri === 0 ? 70 : 92;
            const gap = 12;
            const kw = (1600 - 60 - gap * (n - 1)) / n;
            let x = 30;
            for(let i = 0; i < n; i++){
                let w = kw;
                if (ri === 5 && i === 3) w = kw * 3.6;
                else if (ri === 5 && i > 3) w = kw * 0.9;
                ctx.fillStyle = '#1b1c20';
                canvasRoundRect(ctx, x, y, w, kh, 10);
                ctx.fill();
                x += w + gap;
            }
            y += kh + gap + 8;
        });
    }
    const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
    t.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    t.anisotropy = 8;
    return t;
}
function MacBookVideo({ videoSrc = '/macbook/demo.mp4', background = '#ffffff', showReplay = false, className, offsetX = 0.78, offsetY = 0.25, scale = 1.15 }) {
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const replayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>{});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mount = mountRef.current;
        if (!mount) return;
        let disposed = false;
        let raf = 0;
        const disposables = [];
        const track = (o)=>{
            disposables.push(o);
            return o;
        };
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(background, 1);
        const dom = renderer.domElement;
        dom.style.display = 'block';
        dom.style.width = '100%';
        dom.style.height = '100%';
        mount.appendChild(dom);
        const FOV = 30;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](FOV, 1, 0.1, 100);
        scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.85 * Math.PI));
        const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.75 * Math.PI);
        key.position.set(3, 6, 6);
        scene.add(key);
        const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.5 * Math.PI);
        rim.position.set(-4, 3, -5);
        scene.add(rim);
        const resize = ()=>{
            const w = mount.clientWidth || 1;
            const h = mount.clientHeight || 1;
            const a = w / h;
            renderer.setSize(w, h, false);
            camera.aspect = a;
            camera.updateProjectionMatrix();
            const d = Math.max(9.2, 14.2 / a);
            camera.position.set(0, 2.4 * d / 9.2, d);
            camera.lookAt(0, 0.9, 0);
        };
        const ro = new ResizeObserver(resize);
        ro.observe(mount);
        resize();
        const silver = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x8b9098,
            metalness: 0.55,
            roughness: 0.35
        }));
        const black = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x000000
        });
        disposables.push(black);
        const laptop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        scene.add(laptop);
        const baseGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](roundedRect(BW, BD, 0.18), {
            depth: BH,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.02,
            bevelSegments: 4,
            curveSegments: 20
        }));
        const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](baseGeo, silver);
        base.rotation.x = -Math.PI / 2;
        laptop.add(base);
        const deckY = BH + 0.02 + 0.002;
        const keyTex = track(makeKeyboardTexture());
        const keysGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](3.9, 1.56));
        const keysMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: keyTex
        }));
        const keys = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](keysGeo, keysMat);
        keys.rotation.x = -Math.PI / 2;
        keys.position.set(0, deckY, -0.72);
        laptop.add(keys);
        const padGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](roundedRect(1.7, 1.0, 0.07), 16));
        const padMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x80848b,
            metalness: 0.45,
            roughness: 0.4
        }));
        const pad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](padGeo, padMat);
        pad.rotation.x = -Math.PI / 2;
        pad.position.set(0, deckY, 0.86);
        laptop.add(pad);
        const hinge = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        hinge.position.set(0, deckY + 0.01, -BD / 2 + 0.05);
        hinge.rotation.x = OPEN_ANGLE;
        laptop.add(hinge);
        const lidGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](roundedRect(LW, LH, 0.14), {
            depth: 0.05,
            bevelEnabled: true,
            bevelThickness: 0.015,
            bevelSize: 0.015,
            bevelSegments: 4,
            curveSegments: 20
        }));
        lidGeo.translate(0, LH / 2, -0.025);
        hinge.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lidGeo, silver));
        const bezelGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](roundedRect(LW - 0.08, LH - 0.08, 0.1), 20));
        const bezel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](bezelGeo, black);
        bezel.position.set(0, LH / 2, 0.042);
        hinge.add(bezel);
        const dispGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](roundedRect(DISP_W, DISP_H, 0.08), 20));
        const disp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](dispGeo, black);
        disp.position.set(0, LH / 2, 0.044);
        hinge.add(disp);
        const video = document.createElement('video');
        video.src = videoSrc;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.setAttribute('muted', '');
        const videoTex = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTexture"](video));
        videoTex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        videoTex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        videoTex.generateMipmaps = false;
        const vGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1));
        const vMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: videoTex
        }));
        const vplane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](vGeo, vMat);
        vplane.position.set(0, LH / 2, 0.046);
        hinge.add(vplane);
        const fitVideo = (aspect)=>{
            const fitW = Math.min(DISP_W, DISP_H * aspect);
            vplane.scale.set(fitW, fitW / aspect, 1);
        };
        fitVideo(DEFAULT_VIDEO_ASPECT);
        video.addEventListener('loadedmetadata', ()=>{
            if (video.videoWidth && video.videoHeight) fitVideo(video.videoWidth / video.videoHeight);
        });
        const notchShape = (()=>{
            const w = 0.38;
            const h = 0.07;
            const r = 0.025;
            const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
            s.moveTo(-w / 2, 0.03);
            s.lineTo(w / 2, 0.03);
            s.lineTo(w / 2, -h + r);
            s.absarc(w / 2 - r, -h + r, r, 0, -Math.PI / 2, true);
            s.lineTo(-w / 2 + r, -h);
            s.absarc(-w / 2 + r, -h + r, r, -Math.PI / 2, -Math.PI, true);
            s.closePath();
            return s;
        })();
        const notchGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](notchShape, 12));
        const notch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](notchGeo, black);
        notch.position.set(0, LH / 2 + DISP_H / 2, 0.048);
        hinge.add(notch);
        const dotGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.011, 16));
        const dotMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x1c1e25
        }));
        const dot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](dotGeo, dotMat);
        dot.position.set(0, LH / 2 + DISP_H / 2 - 0.03, 0.049);
        hinge.add(dot);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const playVideo = ()=>{
            video.currentTime = 0;
            const p = video.play();
            if (p) p.catch(()=>{});
        };
        replayRef.current = playVideo;
        video.addEventListener('canplay', ()=>{
            if (video.paused) {
                const p = video.play();
                if (p) p.catch(()=>{});
            }
        });
        const frame = (now)=>{
            if (disposed) return;
            const idle = reduced ? 0 : Math.sin(now / 1400);
            laptop.rotation.y = BASE_YAW + idle * 0.02;
            laptop.rotation.x = BASE_PITCH;
            const a = camera.aspect;
            const responsiveOffsetX = a >= 1.3 ? offsetX : offsetX * Math.max(0, (a - 0.7) / 0.6);
            laptop.position.x = responsiveOffsetX;
            laptop.position.y = -0.4 + offsetY + idle * 0.015;
            laptop.scale.set(scale, scale, scale);
            renderer.render(scene, camera);
            raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
        return ()=>{
            disposed = true;
            cancelAnimationFrame(raf);
            ro.disconnect();
            video.pause();
            video.removeAttribute('src');
            video.load();
            disposables.forEach((d)=>d.dispose());
            renderer.dispose();
            if (dom.parentNode === mount) mount.removeChild(dom);
        };
    }, [
        videoSrc,
        background,
        offsetX,
        offsetY,
        scale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: className,
        style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            background
        },
        children: showReplay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>replayRef.current(),
            style: {
                position: 'absolute',
                left: '50%',
                bottom: 24,
                transform: 'translateX(-50%)',
                padding: '10px 22px',
                border: 0,
                borderRadius: 999,
                background: '#111',
                color: '#fff',
                font: '600 14px/1 system-ui, sans-serif',
                cursor: 'pointer',
                zIndex: 1
            },
            children: "Replay"
        }, void 0, false, {
            fileName: "[project]/components/MacBookVideo.tsx",
            lineNumber: 329,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MacBookVideo.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TabletReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabletReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const FOCUS_A = {
    x: 0.48,
    y: 0.5
};
const FOCUS_B = {
    x: 0.5,
    y: 0.48
};
const HOLD_START = 0.4;
const SPIN = 3.8;
const HOLD_END = 0.5;
const START = {
    x: 0,
    y: -0.17,
    z: -0.04
};
const END = {
    x: -0.08,
    y: 0.5,
    z: 0.14
};
const SCREEN_RADIUS = 0.09;
const W = 4.2;
const H = 3.24;
const R = 0.24;
const D = 0.1;
const SW = 3.84;
const SH = 2.88;
function roundedRect(w, h, r) {
    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
    const x = -w / 2;
    const y = -h / 2;
    const p = Math.PI;
    s.moveTo(x + r, y);
    s.lineTo(x + w - r, y);
    s.absarc(x + w - r, y + r, r, -p / 2, 0, false);
    s.lineTo(x + w, y + h - r);
    s.absarc(x + w - r, y + h - r, r, 0, p / 2, false);
    s.lineTo(x + r, y + h);
    s.absarc(x + r, y + h - r, r, p / 2, p, false);
    s.lineTo(x, y + r);
    s.absarc(x + r, y + r, r, p, p * 1.5, false);
    return s;
}
function loadImage(src) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new Error(`Could not load ${src}`));
        img.src = src;
    });
}
function makeTexture(img, focus, maxAnisotropy) {
    const cw = 1536;
    const ch = 1152;
    const canvas = document.createElement('canvas');
    canvas.width = cw;
    canvas.height = ch;
    const iw = img.width;
    const ih = img.height;
    let sw;
    let sh;
    if (iw / ih < cw / ch) {
        sw = iw;
        sh = iw * ch / cw;
    } else {
        sh = ih;
        sw = ih * cw / ch;
    }
    const sx = Math.min(Math.max(focus.x * iw - sw / 2, 0), iw - sw);
    const sy = Math.min(Math.max(focus.y * ih - sh / 2, 0), ih - sh);
    canvas.getContext('2d')?.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    tex.anisotropy = maxAnisotropy;
    tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
    tex.generateMipmaps = true;
    return tex;
}
const ease = (p)=>-(Math.cos(Math.PI * p) - 1) / 2;
function TabletReveal({ srcA = '/tablet/hero.png', srcB = '/tablet/poster.png', background = '#ffffff', showReplay = true, className, scale = 1, onComplete }) {
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const replayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>{});
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCompleteRef.current = onComplete;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mount = mountRef.current;
        if (!mount) return;
        let disposed = false;
        let raf = 0;
        const disposables = [];
        const track = (o)=>{
            disposables.push(o);
            return o;
        };
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.setClearColor(background, 1);
        const el = renderer.domElement;
        el.style.display = 'block';
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.opacity = '0';
        el.style.willChange = 'transform';
        el.style.backfaceVisibility = 'hidden';
        el.style.transition = 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1)';
        mount.appendChild(el);
        const FOV = 30;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](FOV, 1, 0.1, 100);
        scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.9 * Math.PI));
        const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.7 * Math.PI);
        key.position.set(3, 4, 6);
        scene.add(key);
        const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.6 * Math.PI);
        rim.position.set(-3, 2, -6);
        scene.add(rim);
        let lastWinW = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0;
        let lastWinH = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0;
        let baseCameraZ = 10;
        const resize = ()=>{
            const w = mount.clientWidth || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1);
            const h = mount.clientHeight || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1);
            const a = w / h;
            const t = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(FOV / 2));
            renderer.setSize(w, h, false);
            camera.aspect = a;
            camera.updateProjectionMatrix();
            const s = scale > 0 ? scale : 1;
            const fitH = H * 1.65 / 2 / t / s;
            const fitW = W * 1.38 / 2 / (t * a) / s;
            baseCameraZ = Math.max(fitH, fitW);
            camera.position.set(0, 0, baseCameraZ);
        };
        resize();
        const handleWindowResize = ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        };
        window.addEventListener('resize', handleWindowResize);
        const tablet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        scene.add(tablet);
        const bodyGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](roundedRect(W, H, R), {
            depth: D,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.02,
            bevelSegments: 2,
            curveSegments: 16
        }));
        bodyGeo.translate(0, 0, -D / 2);
        const bodyMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xc9ccd1,
            metalness: 0.35,
            roughness: 0.4
        }));
        tablet.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](bodyGeo, bodyMat));
        const glassGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](roundedRect(W - 0.02, H - 0.02, R - 0.01), 16));
        const glassMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x050505,
            roughness: 0.25,
            metalness: 0.1
        }));
        const glass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](glassGeo, glassMat);
        glass.position.z = 0.072;
        tablet.add(glass);
        const screenGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeGeometry"](roundedRect(SW, SH, SCREEN_RADIUS), 16));
        const pos = screenGeo.attributes.position;
        const uv = screenGeo.attributes.uv;
        for(let i = 0; i < pos.count; i++){
            uv.setXY(i, (pos.getX(i) + SW / 2) / SW, (pos.getY(i) + SH / 2) / SH);
        }
        const screenMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x000000
        }));
        const screen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](screenGeo, screenMat);
        screen.position.z = 0.074;
        tablet.add(screen);
        const camGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.03, 12));
        const camMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x20232a
        }));
        const frontCam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](camGeo, camMat);
        frontCam.position.set(0, H / 2 - 0.09, 0.075);
        tablet.add(frontCam);
        const lensGeo = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.09, 16));
        const lensMat = track(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x2a2c30,
            roughness: 0.3
        }));
        const lens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lensGeo, lensMat);
        lens.position.set(W / 2 - 0.3, H / 2 - 0.3, -0.072);
        lens.rotation.y = Math.PI;
        tablet.add(lens);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const textures = [];
        let t0 = performance.now();
        let swapped = false;
        let completed = false;
        const show = (i)=>{
            const tex = textures[i];
            if (!tex) return;
            screenMat.map = tex;
            screenMat.color.set(0xffffff);
            screenMat.needsUpdate = true;
        };
        const play = ()=>{
            t0 = performance.now();
            swapped = false;
            completed = false;
            show(0);
        };
        replayRef.current = play;
        const frame = (now)=>{
            if (disposed) return;
            const elapsed = reduced ? HOLD_START + SPIN + HOLD_END : (now - t0) / 1000;
            const p = Math.min(Math.max((elapsed - HOLD_START) / SPIN, 0), 1);
            const e = ease(p);
            const yaw = START.y + (Math.PI * 2 + END.y - START.y) * e;
            const calm = reduced || p < 1 ? 0 : Math.min((elapsed - HOLD_START - SPIN) / 0.6, 1);
            const idle = Math.sin(elapsed * 1.0) * calm;
            const spinArc = Math.sin(p * Math.PI);
            camera.position.z = baseCameraZ * (1 + 0.08 * spinArc);
            tablet.rotation.y = yaw + idle * 0.01;
            tablet.rotation.x = START.x + (END.x - START.x) * e - 0.08 * spinArc + idle * 0.005;
            tablet.rotation.z = START.z + (END.z - START.z) * e + 0.02 * Math.sin(p * Math.PI * 2) + idle * 0.007;
            tablet.position.y = -0.12 * spinArc + idle * 0.012;
            if (yaw > Math.PI && !swapped) {
                swapped = true;
                show(1);
            }
            if (p >= 1 && !completed) {
                completed = true;
                onCompleteRef.current?.();
            }
            renderer.render(scene, camera);
            raf = requestAnimationFrame(frame);
        };
        Promise.all([
            loadImage(srcA),
            loadImage(srcB)
        ]).then(([a, b])=>{
            if (disposed) return;
            const aniso = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
            const ta = track(makeTexture(a, FOCUS_A, aniso));
            const tb = track(makeTexture(b, FOCUS_B, aniso));
            textures.push(ta, tb);
            renderer.initTexture(ta);
            renderer.initTexture(tb);
            renderer.compile(scene, camera);
            play();
            raf = requestAnimationFrame(frame);
            requestAnimationFrame(()=>{
                if (!disposed && el) {
                    el.style.opacity = '1';
                }
            });
        }).catch((err)=>console.error(err));
        return ()=>{
            disposed = true;
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', handleWindowResize);
            disposables.forEach((d)=>d.dispose());
            renderer.dispose();
            if (el.parentNode === mount) mount.removeChild(el);
        };
    }, [
        srcA,
        srcB,
        background,
        scale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: className,
        style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            background
        },
        children: showReplay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>replayRef.current(),
            style: {
                position: 'absolute',
                left: '50%',
                bottom: 24,
                transform: 'translateX(-50%)',
                padding: '10px 22px',
                border: 0,
                borderRadius: 999,
                background: '#111',
                color: '#fff',
                font: '600 14px/1 system-ui, sans-serif',
                cursor: 'pointer',
                zIndex: 1
            },
            children: "Replay"
        }, void 0, false, {
            fileName: "[project]/components/TabletReveal.tsx",
            lineNumber: 323,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TabletReveal.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/WorkOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TabletReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TabletReveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MacBookVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MacBookVideo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function WorkOverlayBackButton({ id = "btn-back-work", onClick, isDeepDive = false }) {
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lineRef.current, {
            scaleX: 0,
            transformOrigin: "left"
        });
        return ()=>{
            if (btnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            if (arrowRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(textRef.current, {
                color: isDeepDive ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.88)"
            });
        }
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(btnRef.current, {
                borderColor: isDeepDive ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.15)",
                boxShadow: isDeepDive ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.12)"
            });
        }
    }, [
        isDeepDive
    ]);
    const handleMouseEnter = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                y: -1.5,
                borderColor: isDeepDive ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
                boxShadow: isDeepDive ? "0 8px 24px rgba(0, 0, 0, 0.18)" : "0 6px 18px rgba(0, 0, 0, 0.25)",
                duration: 0.28,
                ease: "power2.out"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(lineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.32,
                ease: "power2.out"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                rotate: 45,
                x: -3,
                y: -1.5,
                duration: 0.28,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                color: isDeepDive ? "#000000" : "#ffffff",
                duration: 0.2
            });
        }
    };
    const handleMouseLeave = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                y: 0,
                borderColor: isDeepDive ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.15)",
                boxShadow: isDeepDive ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.12)",
                duration: 0.24,
                ease: "power2.out"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.26,
                ease: "power2.inOut"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                rotate: 0,
                x: 0,
                y: 0,
                duration: 0.24,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                color: isDeepDive ? "rgba(0, 0, 0, 0.88)" : "rgba(255, 255, 255, 0.88)",
                duration: 0.2
            });
        }
    };
    const handleMouseDown = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                scale: 0.97,
                duration: 0.1,
                ease: "power2.out"
            });
        }
    };
    const handleMouseUp = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                scale: 1,
                duration: 0.15,
                ease: "power2.out"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: btnRef,
        type: "button",
        id: id,
        onClick: onClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        className: `group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase cursor-pointer select-none will-change-transform ${isDeepDive ? "bg-white text-neutral-950 border-2 border-neutral-950/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)]" : "bg-neutral-950 text-white/90 border border-white/15 shadow-sm"}`,
        "aria-label": isDeepDive ? "Back to explore" : "Back to main view",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: arrowRef,
                className: `inline-block shrink-0 text-[11px] sm:text-sm font-light will-change-transform ${isDeepDive ? "text-neutral-950" : "text-white"}`,
                children: "←"
            }, void 0, false, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: textRef,
                        className: `block tracking-wider whitespace-nowrap ${isDeepDive ? "text-neutral-950" : "text-white/90"}`,
                        children: isDeepDive ? "BACK TO EXPLORE" : "BACK"
                    }, void 0, false, {
                        fileName: "[project]/components/WorkOverlay.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[1.5px] mt-0.5 overflow-hidden rounded-[1px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 ${isDeepDive ? "bg-neutral-950/15" : "bg-white/20"}`
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: lineRef,
                                className: `absolute inset-0 origin-left will-change-transform ${isDeepDive ? "bg-neutral-950" : "bg-white"}`
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WorkOverlay.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorkOverlay.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
function TakeALookButton({ onClick, disabled = false }) {
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resetHoverState = ()=>{
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(btnRef.current, {
                y: 0,
                scale: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(arrowRef.current, {
                rotate: 0,
                x: 0,
                y: 0
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(textRef.current, {
                color: "rgba(0, 0, 0, 0.88)"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resetHoverState();
        return ()=>{
            if (btnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            if (arrowRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            if (textRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (disabled) {
            resetHoverState();
        }
    }, [
        disabled
    ]);
    const handleMouseEnter = ()=>{
        if (disabled) return;
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                y: -1.5,
                borderColor: "rgba(0, 0, 0, 0.45)",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                duration: 0.28,
                ease: "power2.out"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(lineRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            }, {
                scaleX: 1,
                duration: 0.32,
                ease: "power2.out"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                rotate: -45,
                x: 3,
                y: -1.5,
                duration: 0.28,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                color: "#000000",
                duration: 0.2
            });
        }
    };
    const handleMouseLeave = ()=>{
        if (disabled) return;
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btnRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                y: 0,
                borderColor: "rgba(0, 0, 0, 0.2)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                duration: 0.25,
                ease: "power2.out"
            });
        }
        if (lineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lineRef.current, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.28,
                ease: "power2.inOut"
            });
        }
        if (arrowRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(arrowRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                rotate: 0,
                x: 0,
                y: 0,
                duration: 0.25,
                ease: "power2.out"
            });
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(textRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                color: "rgba(0, 0, 0, 0.88)",
                duration: 0.2
            });
        }
    };
    const handleClick = (e)=>{
        if (disabled) return;
        resetHoverState();
        onClick?.();
    };
    const handleMouseDown = ()=>{
        if (disabled) return;
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                scale: 0.97,
                duration: 0.1,
                ease: "power2.out"
            });
        }
    };
    const handleMouseUp = ()=>{
        if (disabled) return;
        if (btnRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnRef.current, {
                scale: 1,
                duration: 0.15,
                ease: "power2.out"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: btnRef,
        type: "button",
        id: "btn-take-a-look",
        disabled: disabled,
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        className: `group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-neutral-900 border border-neutral-900/20 text-[9px] sm:text-xs font-mono font-medium tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)] select-none will-change-transform ${disabled ? "pointer-events-none cursor-default select-none" : "pointer-events-auto cursor-pointer"}`,
        "aria-label": "Take a look",
        "aria-hidden": disabled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-start pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: textRef,
                        className: "block tracking-wider text-neutral-900 whitespace-nowrap pointer-events-none",
                        children: "TAKE A LOOK"
                    }, void 0, false, {
                        fileName: "[project]/components/WorkOverlay.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[1.5px] mt-0.5 overflow-hidden rounded-[1px] pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-neutral-900/15"
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: lineRef,
                                className: "absolute inset-0 bg-neutral-950 origin-left will-change-transform"
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WorkOverlay.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: arrowRef,
                className: "inline-block shrink-0 text-[11px] sm:text-sm font-light text-neutral-950 will-change-transform pointer-events-none",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorkOverlay.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
function WorkOverlay({ isOpen, onClose, onTakeALook, children }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeepDive, setIsDeepDive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDeepDiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isDeepDiveNav, setIsDeepDiveNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canTakeALook, setCanTakeALook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canTakeALookRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isTransitioningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const heroSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabletContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blackSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const takeALookBtnWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const whereTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const macbookContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const whereTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasRevealedWhereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCloseRef.current = onClose;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isDeepDiveRef.current = isDeepDive;
    }, [
        isDeepDive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        canTakeALookRef.current = canTakeALook;
    }, [
        canTakeALook
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDeepDive) {
            hasRevealedWhereRef.current = false;
            if (whereTitleRef.current) {
                const words = whereTitleRef.current.querySelectorAll(".where-word");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(words, {
                    yPercent: 115,
                    opacity: 0
                });
            }
            if (macbookContainerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(macbookContainerRef.current, {
                    opacity: 0,
                    y: 24
                });
            }
            if (whereTextRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(whereTextRef.current, {
                    opacity: 0,
                    y: 20
                });
            }
            return;
        }
        const titleEl = whereTitleRef.current;
        const container = containerRef.current;
        if (!titleEl || !container) return;
        const words = titleEl.querySelectorAll(".where-word");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(words, {
            yPercent: 115,
            opacity: 0
        });
        if (macbookContainerRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(macbookContainerRef.current, {
                opacity: 0,
                y: 24
            });
        }
        if (whereTextRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(whereTextRef.current, {
                opacity: 0,
                y: 20
            });
        }
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting && !hasRevealedWhereRef.current) {
                    hasRevealedWhereRef.current = true;
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                    tl.fromTo(words, {
                        yPercent: 115,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.95,
                        stagger: 0.08,
                        ease: "power4.out",
                        force3D: true
                    });
                    if (macbookContainerRef.current) {
                        tl.fromTo(macbookContainerRef.current, {
                            opacity: 0,
                            y: 24
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.9,
                            ease: "power3.out",
                            force3D: true
                        }, "-=0.35");
                    }
                    if (whereTextRef.current) {
                        tl.fromTo(whereTextRef.current, {
                            opacity: 0,
                            y: 20
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.85,
                            ease: "power3.out",
                            force3D: true
                        }, "-=0.1");
                    }
                }
            });
        }, {
            root: container,
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });
        observer.observe(titleEl);
        return ()=>{
            observer.disconnect();
            if (whereTitleRef.current) {
                const words = whereTitleRef.current.querySelectorAll(".where-word");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(words);
            }
            if (macbookContainerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(macbookContainerRef.current);
            }
            if (whereTextRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(whereTextRef.current);
            }
        };
    }, [
        isDeepDive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let targetScroll = 0;
        let currentScroll = 0;
        let rafId = null;
        let isRunning = false;
        const update = ()=>{
            const container = containerRef.current;
            if (!isDeepDiveRef.current || isTransitioningRef.current || !container) {
                isRunning = false;
                return;
            }
            const diff = targetScroll - currentScroll;
            if (Math.abs(diff) > 0.5) {
                currentScroll += diff * 0.085;
                container.scrollTop = currentScroll;
                rafId = requestAnimationFrame(update);
            } else {
                currentScroll = targetScroll;
                container.scrollTop = currentScroll;
                isRunning = false;
            }
        };
        const handleWheel = (e)=>{
            if (!isDeepDiveRef.current || isTransitioningRef.current || !containerRef.current) {
                if (isTransitioningRef.current || isOpen) {
                    e.preventDefault();
                }
                return;
            }
            const container = containerRef.current;
            const maxScroll = container.scrollHeight - container.clientHeight;
            if (maxScroll <= 0) return;
            e.preventDefault();
            if (!isRunning) {
                currentScroll = container.scrollTop;
                targetScroll = container.scrollTop;
            }
            targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY, maxScroll));
            if (!isRunning) {
                isRunning = true;
                rafId = requestAnimationFrame(update);
            }
        };
        window.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>{
            window.removeEventListener("wheel", handleWheel);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);
    const handleBack = ()=>{
        if (isDeepDiveRef.current) {
            handleBackToExplore();
            return;
        }
        if (onCloseRef.current) {
            onCloseRef.current();
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const handleTakeALook = ()=>{
        if (onTakeALook) {
            onTakeALook();
            return;
        }
        if (isTransitioningRef.current || !canTakeALookRef.current || isDeepDiveRef.current) return;
        isTransitioningRef.current = true;
        setCanTakeALook(false);
        canTakeALookRef.current = false;
        setIsDeepDive(true);
        isDeepDiveRef.current = true;
        setIsDeepDiveNav(true);
        if (containerRef.current) {
            containerRef.current.style.overflowY = "hidden";
            containerRef.current.scrollTop = 0;
            containerRef.current.focus();
        }
        const isLarge = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth >= 1024;
        const isTablet = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth >= 768;
        const targetX = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "0px";
        const header = document.getElementById("header-nav");
        if (header) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(header);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(header, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 0.85,
                ease: "power3.inOut"
            });
        }
        if (heroSectionRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(heroSectionRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(heroSectionRef.current, {
                height: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "55vh",
                minHeight: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "55vh",
                maxHeight: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "55vh",
                paddingTop: "1.5rem",
                paddingBottom: "0.5rem",
                duration: 1.15,
                ease: "power3.inOut",
                onComplete: ()=>{
                    isTransitioningRef.current = false;
                    if (containerRef.current) {
                        containerRef.current.style.overflowY = "auto";
                    }
                }
            });
        }
        if (tabletContainerRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(tabletContainerRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(tabletContainerRef.current, {
                scale: 0.91,
                x: targetX,
                y: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 8,
                duration: 1.15,
                ease: "power3.inOut",
                force3D: true
            });
        }
        if (rightContentRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(rightContentRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rightContentRef.current, {
                y: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 8,
                duration: 1.15,
                ease: "power3.inOut",
                force3D: true
            });
        }
        if (takeALookBtnWrapperRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(takeALookBtnWrapperRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(takeALookBtnWrapperRef.current, {
                autoAlpha: 0,
                y: 12,
                duration: 0.35,
                ease: "power2.out",
                onComplete: ()=>{
                    if (takeALookBtnWrapperRef.current) {
                        takeALookBtnWrapperRef.current.style.display = "none";
                        takeALookBtnWrapperRef.current.style.pointerEvents = "none";
                    }
                }
            });
        }
        if (blackSectionRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(blackSectionRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blackSectionRef.current, {
                y: 0,
                opacity: 1
            });
        }
    };
    const handleBackToExplore = ()=>{
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;
        isDeepDiveRef.current = false;
        setIsDeepDiveNav(false);
        if (containerRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(containerRef.current);
            containerRef.current.style.overflowY = "hidden";
            containerRef.current.scrollTo({
                top: 0,
                behavior: "instant"
            });
            containerRef.current.scrollTop = 0;
        }
        const isLarge = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth >= 1024;
        const isTablet = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth >= 768;
        const targetX = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "0px";
        if (blackSectionRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(blackSectionRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blackSectionRef.current, {
                y: 0,
                opacity: 1
            });
        }
        const header = document.getElementById("header-nav");
        if (header) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(header);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(header, {
                yPercent: 0,
                autoAlpha: 1,
                duration: 0.9,
                ease: "power3.out",
                delay: 0.15
            });
        }
        if (heroSectionRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(heroSectionRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(heroSectionRef.current, {
                minHeight: "100vh",
                height: "100vh",
                maxHeight: "none",
                paddingTop: "5rem",
                paddingBottom: "3rem",
                duration: 1.15,
                ease: "power3.inOut",
                onComplete: ()=>{
                    setIsDeepDive(false);
                    isDeepDiveRef.current = false;
                    isTransitioningRef.current = false;
                    setCanTakeALook(true);
                    canTakeALookRef.current = true;
                    if (containerRef.current) {
                        containerRef.current.scrollTop = 0;
                        containerRef.current.style.overflowY = "hidden";
                    }
                    if (takeALookBtnWrapperRef.current) {
                        takeALookBtnWrapperRef.current.style.display = "block";
                        takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(takeALookBtnWrapperRef.current, {
                            autoAlpha: 1,
                            y: 0
                        });
                    }
                }
            });
        }
        if (tabletContainerRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(tabletContainerRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(tabletContainerRef.current, {
                scale: 1,
                x: targetX,
                y: 0,
                duration: 1.15,
                ease: "power3.inOut",
                force3D: true
            });
        }
        if (rightContentRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(rightContentRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(rightContentRef.current, {
                y: 0,
                duration: 1.15,
                ease: "power3.inOut",
                force3D: true
            });
        }
        if (takeALookBtnWrapperRef.current) {
            takeALookBtnWrapperRef.current.style.display = "block";
            takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(takeALookBtnWrapperRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(takeALookBtnWrapperRef.current, {
                autoAlpha: 0,
                y: 16
            }, {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                delay: 0.45,
                onComplete: ()=>{
                    setCanTakeALook(true);
                    canTakeALookRef.current = true;
                    if (takeALookBtnWrapperRef.current) {
                        takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
                    }
                }
            });
        }
    };
    const handleTabletSpinComplete = ()=>{
        if (!tabletContainerRef.current) return;
        const isLarge = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth >= 1024;
        const isTablet = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth >= 768;
        const targetX = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "0px";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(tabletContainerRef.current, {
            x: targetX,
            duration: 1.1,
            ease: "power3.inOut",
            force3D: true
        });
        if (isDeepDiveRef.current) return;
        if (rightContentRef.current) {
            const items = rightContentRef.current.querySelectorAll(".reveal-text");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(items);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(items, {
                opacity: 0,
                y: 24,
                force3D: true
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.14,
                ease: "power3.out",
                delay: 0.1,
                force3D: true
            });
        }
        if (!isDeepDiveRef.current && takeALookBtnWrapperRef.current) {
            takeALookBtnWrapperRef.current.style.display = "block";
            takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(takeALookBtnWrapperRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(takeALookBtnWrapperRef.current, {
                autoAlpha: 0,
                y: 20
            }, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.35,
                onComplete: ()=>{
                    if (!isDeepDiveRef.current) {
                        setCanTakeALook(true);
                        canTakeALookRef.current = true;
                        if (takeALookBtnWrapperRef.current) {
                            takeALookBtnWrapperRef.current.style.pointerEvents = "auto";
                        }
                    }
                }
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (active && tabletContainerRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(tabletContainerRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(tabletContainerRef.current, {
                x: 0,
                scale: 1,
                y: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(tabletContainerRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                force3D: true
            });
        }
        if (rightContentRef.current) {
            const items = rightContentRef.current.querySelectorAll(".reveal-text");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(rightContentRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rightContentRef.current, {
                y: 0,
                opacity: 1,
                pointerEvents: "auto"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(items);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                opacity: 0,
                y: 24
            });
        }
        setCanTakeALook(false);
        canTakeALookRef.current = false;
        if (takeALookBtnWrapperRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(takeALookBtnWrapperRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(takeALookBtnWrapperRef.current, {
                autoAlpha: 0,
                y: 24
            });
            takeALookBtnWrapperRef.current.style.display = "none";
            takeALookBtnWrapperRef.current.style.pointerEvents = "none";
        }
    }, [
        active
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(containerRef.current, {
                yPercent: isOpen ? 0 : 100,
                autoAlpha: isOpen ? 1 : 0,
                display: isOpen ? "block" : "none"
            });
            if (!isOpen) return;
        }
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setCanTakeALook(false);
            canTakeALookRef.current = false;
            if (takeALookBtnWrapperRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(takeALookBtnWrapperRef.current);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(takeALookBtnWrapperRef.current, {
                    autoAlpha: 0,
                    y: 24
                });
                takeALookBtnWrapperRef.current.style.display = "none";
                takeALookBtnWrapperRef.current.style.pointerEvents = "none";
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(containerRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(containerRef.current, {
                display: "block",
                autoAlpha: 1
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                yPercent: 100
            }, {
                yPercent: 0,
                duration: 0.75,
                ease: "power4.out",
                force3D: true,
                onComplete: ()=>{
                    if (containerRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(containerRef.current, {
                            clearProps: "transform"
                        });
                    }
                    setActive(true);
                }
            });
            const handleKeyDown = (e)=>{
                if (e.key === "Escape") {
                    if (isDeepDiveRef.current) {
                        handleBackToExplore();
                    } else {
                        handleBack();
                    }
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            return ()=>{
                document.body.style.overflow = "";
                window.removeEventListener("keydown", handleKeyDown);
            };
        } else {
            document.body.style.overflow = "";
            setCanTakeALook(false);
            canTakeALookRef.current = false;
            const header = document.getElementById("header-nav");
            if (header) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(header, {
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: 0.35,
                    ease: "power2.out"
                });
            }
            setIsDeepDive(false);
            isDeepDiveRef.current = false;
            setIsDeepDiveNav(false);
            if (tabletContainerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(tabletContainerRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
            if (rightContentRef.current) {
                const items = rightContentRef.current.querySelectorAll(".reveal-text");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(items, {
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.in"
                });
            }
            if (takeALookBtnWrapperRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(takeALookBtnWrapperRef.current);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(takeALookBtnWrapperRef.current, {
                    autoAlpha: 0,
                    y: 24
                });
                takeALookBtnWrapperRef.current.style.display = "none";
                takeALookBtnWrapperRef.current.style.pointerEvents = "none";
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(containerRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(containerRef.current, {
                yPercent: 100,
                duration: 0.5,
                ease: "power3.in",
                force3D: true,
                onComplete: ()=>{
                    if (containerRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(containerRef.current, {
                            autoAlpha: 0,
                            display: "none"
                        });
                        containerRef.current.style.top = "";
                    }
                    if (heroSectionRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(heroSectionRef.current, {
                            clearProps: "minHeight,height,maxHeight,paddingTop,paddingBottom"
                        });
                    }
                    if (tabletContainerRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(tabletContainerRef.current, {
                            x: 0,
                            scale: 1,
                            y: 0
                        });
                    }
                    if (rightContentRef.current) {
                        const items = rightContentRef.current.querySelectorAll(".reveal-text");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rightContentRef.current, {
                            y: 0,
                            opacity: 1,
                            pointerEvents: "auto"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                            opacity: 0,
                            y: 24
                        });
                    }
                    if (takeALookBtnWrapperRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(takeALookBtnWrapperRef.current, {
                            autoAlpha: 0,
                            y: 24
                        });
                        takeALookBtnWrapperRef.current.style.display = "none";
                        takeALookBtnWrapperRef.current.style.pointerEvents = "none";
                    }
                    setCanTakeALook(false);
                    canTakeALookRef.current = false;
                    setActive(false);
                }
            });
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed left-4 sm:left-12 top-20 sm:top-24 z-50 transition-opacity duration-300 ease-out ${isOpen && !isDeepDiveNav ? "opacity-100 pointer-events-auto delay-100" : "opacity-0 pointer-events-none delay-0 invisible"}`,
                style: {
                    display: isOpen && !isDeepDiveNav ? "block" : "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkOverlayBackButton, {
                    id: "btn-back-work",
                    onClick: handleBack,
                    isDeepDive: false
                }, void 0, false, {
                    fileName: "[project]/components/WorkOverlay.tsx",
                    lineNumber: 1058,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 1048,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed left-4 sm:left-12 top-4 sm:top-6 z-50 transition-opacity duration-300 ease-out ${isOpen && isDeepDiveNav ? "opacity-100 pointer-events-auto delay-100" : "opacity-0 pointer-events-none delay-0 invisible"}`,
                style: {
                    display: isOpen && isDeepDiveNav ? "block" : "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkOverlayBackButton, {
                    id: "btn-back-to-explore",
                    onClick: handleBackToExplore,
                    isDeepDive: true
                }, void 0, false, {
                    fileName: "[project]/components/WorkOverlay.tsx",
                    lineNumber: 1075,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 1065,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                id: "work-overlay",
                tabIndex: -1,
                "data-lenis-prevent": true,
                "data-lenis-prevent-wheel": true,
                "data-lenis-prevent-touch": true,
                "aria-hidden": !isOpen,
                className: `fixed inset-0 z-40 bg-white overscroll-contain pointer-events-auto no-scrollbar outline-none ${isDeepDive ? "overflow-y-auto touch-pan-y" : "overflow-hidden touch-none"}`,
                style: {
                    WebkitOverflowScrolling: "touch"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: heroSectionRef,
                        className: "relative w-full min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 overflow-hidden",
                        children: [
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: tabletContainerRef,
                                className: "h-[80vh] sm:h-[82vh] w-full shrink-0 flex items-center justify-center opacity-0 will-change-transform translate-y-2 sm:translate-y-3 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TabletReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    showReplay: false,
                                    onComplete: handleTabletSpinComplete,
                                    scale: 1.26
                                }, void 0, false, {
                                    fileName: "[project]/components/WorkOverlay.tsx",
                                    lineNumber: 1104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 1100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: rightContentRef,
                                className: "w-full md:w-auto md:absolute md:top-1/2 md:left-[65%] md:-translate-x-1/2 md:-translate-y-1/2 translate-y-3 sm:translate-y-4 flex flex-col items-center text-center z-30 px-6 pb-20 md:px-0 md:pb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex flex-col items-center text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "reveal-text opacity-0 font-black tracking-tight text-neutral-950 text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.08] select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block whitespace-nowrap",
                                                    children: "Portfolio,"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "Reloaded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1116,
                                                            columnNumber: 19
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1115,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "reveal-text opacity-0 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-sans font-medium tracking-tight select-none",
                                            children: "Same me. Completely rebuilt."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: takeALookBtnWrapperRef,
                                            style: {
                                                opacity: 0,
                                                visibility: "hidden",
                                                transform: "translateY(24px)",
                                                pointerEvents: "none",
                                                display: "none"
                                            },
                                            className: "absolute top-full left-1/2 -translate-x-1/2 pt-6 sm:pt-8 whitespace-nowrap z-30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TakeALookButton, {
                                                onClick: handleTakeALook,
                                                disabled: !canTakeALook || isDeepDive
                                            }, void 0, false, {
                                                fileName: "[project]/components/WorkOverlay.tsx",
                                                lineNumber: 1134,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkOverlay.tsx",
                                    lineNumber: 1112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 1108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WorkOverlay.tsx",
                        lineNumber: 1095,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: blackSectionRef,
                        className: `w-full bg-neutral-950 text-white relative z-30 -mt-px ${isDeepDive ? "block" : "hidden"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-neutral-950 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-16 sm:pb-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-start gap-10 sm:gap-14 md:gap-20 lg:gap-24 pb-12 border-b border-white/10 select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400",
                                                            children: "PLATFORM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1153,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono",
                                                            children: "WEB"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1156,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400",
                                                            children: "ROLE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono",
                                                            children: "FRONT AND BACK END DEVELOPER"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1164,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400",
                                                            children: "STACK"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1.5 text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase font-mono",
                                                            children: "NEXT | THREE | GSAP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1172,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1168,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-12 sm:mt-16 max-w-4xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white leading-relaxed tracking-tight select-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 font-semibold",
                                                            children: "Portfolio, Reloaded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 17
                                                        }, this),
                                                        " — is a complete rebuild of my personal site, designed around one idea: a site that feels like a space instead of a page. It’s a ground-up rethink of how my work is presented, with interaction and motion shaping the experience as much as the content does. Every part of it responds to the visitor, and the details are paced to feel natural rather than flashy."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1179,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-sans max-w-3xl select-none",
                                                    children: "Built with Next.js and three.js, with close attention paid to motion, timing and how everything holds up from desktop to mobile."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkOverlay.tsx",
                                    lineNumber: 1150,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 1149,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-white text-neutral-950 min-h-[60vh] sm:min-h-screen",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 sm:mb-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                ref: whereTitleRef,
                                                className: "font-black tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] select-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block overflow-hidden py-1 mr-[0.26em]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "where-word inline-block will-change-transform opacity-0",
                                                            children: "Where"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1202,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WorkOverlay.tsx",
                                                        lineNumber: 1201,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block overflow-hidden py-1 mr-[0.26em]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "where-word inline-block will-change-transform opacity-0",
                                                            children: "It"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1207,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WorkOverlay.tsx",
                                                        lineNumber: 1206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block overflow-hidden py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "where-word inline-block will-change-transform opacity-0",
                                                            children: "Started"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1212,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WorkOverlay.tsx",
                                                        lineNumber: 1211,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/WorkOverlay.tsx",
                                                lineNumber: 1197,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1196,
                                            columnNumber: 13
                                        }, this),
                                        isDeepDive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full flex flex-col md:block select-none mb-12 sm:mb-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: whereTextRef,
                                                    className: "relative md:absolute md:top-14 lg:top-20 xl:top-24 md:left-0 z-10 w-full md:max-w-[215px] lg:max-w-[230px] xl:max-w-[255px] pointer-events-auto opacity-0 will-change-transform mb-8 md:mb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base sm:text-lg lg:text-[19px] font-sans font-normal text-neutral-900 leading-[1.65] tracking-tight select-none",
                                                            children: "Monotone and overly dark, the original UI suffered from stuttering animations that created unnecessary friction instead of making a strong visual statement."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1225,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 pt-4 border-t border-neutral-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium",
                                                                    children: "STACK"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                                    lineNumber: 1229,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs sm:text-sm font-bold tracking-wider text-neutral-950 uppercase font-mono",
                                                                    children: "Next.js, FramerMotion"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/WorkOverlay.tsx",
                                                            lineNumber: 1228,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: macbookContainerRef,
                                                    className: "w-full opacity-0 will-change-transform h-[54vh] sm:h-[64vh] md:h-[76vh] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MacBookVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        videoSrc: "/macbook/demo.mp4",
                                                        showReplay: false,
                                                        scale: 1.15,
                                                        offsetX: 0.78
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/WorkOverlay.tsx",
                                                        lineNumber: 1242,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WorkOverlay.tsx",
                                                    lineNumber: 1238,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WorkOverlay.tsx",
                                            lineNumber: 1220,
                                            columnNumber: 15
                                        }, this),
                                        children
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WorkOverlay.tsx",
                                    lineNumber: 1195,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WorkOverlay.tsx",
                                lineNumber: 1194,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WorkOverlay.tsx",
                        lineNumber: 1143,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WorkOverlay.tsx",
                lineNumber: 1082,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorkOverlay.tsx",
        lineNumber: 1047,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/animations/LoadingScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const tearPoints = [
    [
        48.4,
        0
    ],
    [
        49.18,
        1.23
    ],
    [
        47.53,
        2.95
    ],
    [
        46.32,
        5.4
    ],
    [
        47.43,
        6.98
    ],
    [
        48.01,
        7.34
    ],
    [
        47.82,
        8.04
    ],
    [
        48.07,
        9.38
    ],
    [
        50.32,
        11.71
    ],
    [
        55.09,
        12.44
    ],
    [
        54.55,
        13.2
    ],
    [
        52.66,
        14.81
    ],
    [
        53.82,
        15.87
    ],
    [
        53.56,
        16.64
    ],
    [
        52.53,
        18.9
    ],
    [
        52.65,
        20.03
    ],
    [
        51.01,
        21.29
    ],
    [
        50.93,
        24.04
    ],
    [
        55.2,
        24.64
    ],
    [
        49.12,
        26.44
    ],
    [
        43.51,
        27.19
    ],
    [
        47.09,
        27.89
    ],
    [
        45.42,
        29.17
    ],
    [
        45.58,
        31.24
    ],
    [
        44.62,
        33.04
    ],
    [
        42.37,
        34.7
    ],
    [
        43.95,
        36.56
    ],
    [
        42.7,
        37.98
    ],
    [
        43.07,
        38.46
    ],
    [
        43.13,
        38.93
    ],
    [
        43.17,
        40.72
    ],
    [
        43.92,
        43.38
    ],
    [
        46.28,
        46.25
    ],
    [
        46.39,
        47.32
    ],
    [
        46.74,
        48.96
    ],
    [
        48.77,
        50.43
    ],
    [
        48.21,
        51.09
    ],
    [
        49.13,
        52.51
    ],
    [
        49.63,
        53.05
    ],
    [
        50.41,
        54.58
    ],
    [
        50.98,
        56.74
    ],
    [
        55.56,
        57.47
    ],
    [
        51.48,
        57.85
    ],
    [
        51.35,
        59.24
    ],
    [
        54.22,
        61.09
    ],
    [
        55.12,
        63.61
    ],
    [
        55.8,
        64.2
    ],
    [
        56.36,
        65.81
    ],
    [
        60.21,
        66.36
    ],
    [
        56.4,
        68.37
    ],
    [
        56.8,
        71.16
    ],
    [
        56.2,
        73.3
    ],
    [
        55.3,
        73.97
    ],
    [
        54.27,
        75.04
    ],
    [
        53.19,
        76.7
    ],
    [
        53.05,
        78.51
    ],
    [
        52.05,
        80.13
    ],
    [
        45.63,
        81.2
    ],
    [
        48.63,
        82.98
    ],
    [
        47.47,
        84.78
    ],
    [
        48.11,
        86.48
    ],
    [
        47.64,
        87.09
    ],
    [
        51.98,
        87.93
    ],
    [
        48.07,
        88.29
    ],
    [
        49.39,
        88.86
    ],
    [
        49.69,
        91.28
    ],
    [
        49.23,
        92.3
    ],
    [
        48.87,
        94
    ],
    [
        49.33,
        94.74
    ],
    [
        49.05,
        96.51
    ],
    [
        47.92,
        97.87
    ],
    [
        48.74,
        99.23
    ],
    [
        48.7,
        100
    ]
];
const leftClipPath = `polygon(0% 0%, ${tearPoints.map(([x, y])=>`${x}% ${y}%`).join(", ")}, 0% 100%)`;
const rightClipPath = `polygon(100% 0%, 100% 100%, ${[
    ...tearPoints
].reverse().map(([x, y])=>`${x}% ${y}%`).join(", ")})`;
const polylinePoints = tearPoints.map(([x, y])=>`${x},${y}`).join(" ");
function LoadingScreen() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isTorn, setIsTorn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [freezeFrame, setFreezeFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const finishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
            } catch  {}
        }
        setIsTorn(true);
        window.dispatchEvent(new Event("loading-complete"));
        window.__loadingComplete = true;
        setTimeout(()=>{
            window.dispatchEvent(new Event("paper-tear-reveal"));
        }, 350);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.currentTime = 0;
        const handleTimeUpdate = ()=>{
            if (video.duration && video.currentTime > 0.5 && video.currentTime >= video.duration - 0.15) {
                startTear();
            }
        };
        video.addEventListener("timeupdate", handleTimeUpdate);
        const tryPlay = ()=>{
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((err)=>{
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
            video.addEventListener("canplay", tryPlay, {
                once: true
            });
            video.addEventListener("loadeddata", tryPlay, {
                once: true
            });
        }
        const fallbackTimer = setTimeout(()=>{
            startTear();
        }, 4000);
        return ()=>{
            clearTimeout(fallbackTimer);
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("canplay", tryPlay);
            video.removeEventListener("loadeddata", tryPlay);
        };
    }, [
        startTear
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden",
            children: isTorn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: "0%",
                            rotate: 0
                        },
                        animate: {
                            x: [
                                "0%",
                                "-1.5%",
                                "-115%"
                            ],
                            rotate: [
                                0,
                                -0.6,
                                -4
                            ],
                            y: [
                                "0%",
                                "0.4%",
                                "1.5%"
                            ]
                        },
                        transition: {
                            duration: 1.3,
                            times: [
                                0,
                                0.1,
                                1
                            ],
                            ease: [
                                0.7,
                                0,
                                0.25,
                                1
                            ]
                        },
                        style: {
                            clipPath: leftClipPath,
                            filter: "drop-shadow(10px 0 25px rgba(0,0,0,0.65))"
                        },
                        className: "absolute inset-0 w-full h-full bg-neutral-950 will-change-transform",
                        onAnimationComplete: ()=>{
                            setIsVisible(false);
                            window.dispatchEvent(new Event("paper-tear-complete"));
                            window.__paperTearComplete = true;
                        },
                        children: [
                            freezeFrame ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: freezeFrame,
                                alt: "",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/animations/LoadingScreen.tsx",
                                lineNumber: 208,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-neutral-950"
                            }, void 0, false, {
                                fileName: "[project]/components/animations/LoadingScreen.tsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                preserveAspectRatio: "none",
                                viewBox: "0 0 100 100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: polylinePoints,
                                        fill: "none",
                                        stroke: "rgba(255, 255, 255, 0.45)",
                                        strokeWidth: "0.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: polylinePoints,
                                        fill: "none",
                                        stroke: "#ffffff",
                                        strokeWidth: "0.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        opacity: "0.95"
                                    }, void 0, false, {
                                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/animations/LoadingScreen.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: "0%",
                            rotate: 0
                        },
                        animate: {
                            x: [
                                "0%",
                                "1.5%",
                                "115%"
                            ],
                            rotate: [
                                0,
                                0.6,
                                4
                            ],
                            y: [
                                "0%",
                                "-0.4%",
                                "-1.5%"
                            ]
                        },
                        transition: {
                            duration: 1.3,
                            times: [
                                0,
                                0.1,
                                1
                            ],
                            ease: [
                                0.7,
                                0,
                                0.25,
                                1
                            ]
                        },
                        style: {
                            clipPath: rightClipPath,
                            filter: "drop-shadow(-10px 0 25px rgba(0,0,0,0.65))"
                        },
                        className: "absolute inset-0 w-full h-full bg-neutral-950 will-change-transform",
                        children: [
                            freezeFrame ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: freezeFrame,
                                alt: "",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/animations/LoadingScreen.tsx",
                                lineNumber: 260,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-neutral-950"
                            }, void 0, false, {
                                fileName: "[project]/components/animations/LoadingScreen.tsx",
                                lineNumber: 266,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                preserveAspectRatio: "none",
                                viewBox: "0 0 100 100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: polylinePoints,
                                        fill: "none",
                                        stroke: "rgba(255, 255, 255, 0.45)",
                                        strokeWidth: "0.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: polylinePoints,
                                        fill: "none",
                                        stroke: "#ffffff",
                                        strokeWidth: "0.3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        opacity: "0.95"
                                    }, void 0, false, {
                                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/animations/LoadingScreen.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                        lineNumber: 241,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/animations/LoadingScreen.tsx",
                lineNumber: 183,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full bg-neutral-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    autoPlay: true,
                    muted: true,
                    playsInline: true,
                    preload: "auto",
                    onEnded: startTear,
                    onError: startTear,
                    className: "w-full h-full object-cover",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/videos/match-cut.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/animations/LoadingScreen.tsx",
                            lineNumber: 305,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/videos/match-cut.webm",
                            type: "video/webm"
                        }, void 0, false, {
                            fileName: "[project]/components/animations/LoadingScreen.tsx",
                            lineNumber: 306,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/animations/LoadingScreen.tsx",
                    lineNumber: 295,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animations/LoadingScreen.tsx",
                lineNumber: 294,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/animations/LoadingScreen.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/animations/LoadingScreen.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/animations/Magnetic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function Magnetic({ children, strength = 0.35, className = "" }) {
    const magneticRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = magneticRef.current;
        if (!el) return;
        const handleMouseMove = (e)=>{
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distX = (e.clientX - centerX) * strength;
            const distY = (e.clientY - centerY) * strength;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                x: distX,
                y: distY,
                duration: 0.35,
                ease: "power2.out",
                overwrite: "auto"
            });
        };
        const handleMouseLeave = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                x: 0,
                y: 0,
                duration: 0.85,
                ease: "elastic.out(1.2, 0.4)",
                overwrite: "auto"
            });
        };
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
        return ()=>{
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(el);
        };
    }, [
        strength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: magneticRef,
        className: `inline-flex items-baseline p-2 -m-2 cursor-pointer ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/animations/Magnetic.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
];})()

//# sourceMappingURL=_18hclpje-7u2-._.js.map