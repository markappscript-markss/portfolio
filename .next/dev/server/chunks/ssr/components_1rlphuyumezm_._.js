(()=>{"use strict";module.exports = [
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/Magnetic.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Header({ activeView = "main", onViewChange }) {
    const handleMainClick = ()=>{
        onViewChange?.("main");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const handleAboutClick = ()=>{
        onViewChange?.("about");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "header-nav",
        className: "fixed top-0 left-0 right-0 z-40 w-full h-20 bg-transparent px-6 sm:px-12 flex items-center justify-between pointer-events-none opacity-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    strength: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleMainClick,
                        className: "flex items-baseline select-none cursor-pointer text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold tracking-tight text-sm sm:text-base text-black",
                                children: "markappscript"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold tracking-tight text-sm sm:text-base text-purple-600",
                                children: ".dev"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-8 select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "nav-btn-main",
                        type: "button",
                        onClick: handleMainClick,
                        className: `font-mono text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer ${activeView === "main" ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-0.5" : "text-neutral-500 hover:text-neutral-900 font-medium pb-0.5 border-b-2 border-transparent"}`,
                        children: "MAIN"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "nav-btn-about",
                        type: "button",
                        onClick: handleAboutClick,
                        className: `font-mono text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer ${activeView === "about" ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-0.5" : "text-neutral-500 hover:text-neutral-900 font-medium pb-0.5 border-b-2 border-transparent"}`,
                        children: "ABOUT"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 44,
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
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 72,
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
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 82,
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
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 23,
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
        label: "DARK",
        bg: "#e9e3d6",
        floor: "#d6cdb8",
        word: "DARK",
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
        label: "URBAN",
        bg: "#d6d3cc",
        floor: "#bdb9b0",
        word: "URBAN",
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
        label: "SUMMER",
        bg: "#a9d6ea",
        floor: "#f1deb0",
        word: "SUMMER",
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
        word: "RETRO",
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
            powerPreference: "high-performance"
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
        textCanvas.width = 2800;
        textCanvas.height = 600;
        const textCtx = textCanvas.getContext("2d");
        const textTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](textCanvas);
        textTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        textTexture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        const textArcLength = 13.0;
        const textThetaLength = textArcLength / cylinderRadius;
        const textThetaStart = -textThetaLength / 2;
        const textHeight = textArcLength * (600 / 2800);
        const textCurvedGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](cylinderRadius - 0.02, cylinderRadius - 0.02, textHeight, 64, 1, true, textThetaStart, textThetaLength);
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
            textCtx.font = 'bold 155px "Bebas Neue", Anton, Impact, Oswald, "Arial Narrow", sans-serif-condensed, sans-serif';
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
            const roundedX = Math.round(currentStartX * 2) / 2;
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
            textCtx.fillText(cursorChar, currentStartX + staticWidth + spaceWidth + textCtx.measureText(dynamicText).width + 8, centerY);
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
            setTimeout(()=>{
                textureUrban = textureLoader.load("/images/Hero-avatar2.webp");
                textureUrban.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                textureUrban.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                textureUrban.generateMipmaps = true;
                textureSummer = textureLoader.load("/images/Hero-avatar3.webp");
                textureSummer.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                textureSummer.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                textureSummer.generateMipmaps = true;
                textureRetro = textureLoader.load("/images/Hero-avatar4.webp");
                textureRetro.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                textureRetro.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
                textureRetro.generateMipmaps = true;
            }, 1000);
        });
        textureDark.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        textureDark.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        textureDark.generateMipmaps = true;
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
        const onMouseMove = (e)=>{
            mouse.targetX = e.clientX / window.innerWidth * 2 - 1;
            mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        const onTouchMove = (e)=>{
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                mouse.targetX = touch.clientX / window.innerWidth * 2 - 1;
                mouse.targetY = -(touch.clientY / window.innerHeight) * 2 + 1;
            }
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove, {
            passive: true
        });
        const onResize = ()=>{
            if (!container) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            if (w < 768) {
                camera.position.z = 10.5;
            } else {
                camera.position.z = 8.8;
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
        }, 0.28).fromTo(".hero-nav-item", {
            opacity: 0,
            y: 16
        }, {
            opacity: 1,
            y: 0,
            duration: 0.38,
            ease: "power2.out",
            stagger: 0.06
        }, 0.30);
        let isRunning = false;
        let animationFrameId;
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
        const animate = ()=>{
            if (!isRunning) return;
            animationFrameId = requestAnimationFrame(animate);
            const delta = Math.min(clock.getDelta(), 0.05);
            const now = performance.now();
            renderTypewriter(now, delta);
            glitchUniforms.uTime.value = now * 0.001;
            if (scene.background instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]) {
                scene.background.lerp(targetBg, 0.06);
            }
            floorMat.color.lerp(targetFloor, 0.06);
            const lerpFactor = 1 - Math.exp(-9.0 * delta);
            mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
            mouse.y += (mouse.targetY - mouse.y) * lerpFactor;
            builtThemes.forEach((th)=>{
                let any = false;
                th.layers.forEach((l)=>{
                    if (Math.abs(l.target - l.off) > 0.005) {
                        l.off += (l.target - l.off) * 0.092;
                    }
                    if (l.off > -17.5) {
                        any = true;
                        l.group.position.x = -mouse.x * ((Math.abs(l.z) - 3.0) * 0.12);
                        l.group.position.y = l.off;
                    }
                });
                th.group.visible = any;
            });
            avatarGroup.rotation.y = mouse.x * 0.08;
            avatarGroup.rotation.x = -mouse.y * 0.08;
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
            if (hasStarted3D) return;
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(avatarGroup.scale, {
                x: 1.0,
                y: 1.0,
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
        const onPaperTearReveal = ()=>{
            start3D();
            setTimeout(playStaggerReveal, 80);
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            window.addEventListener("paper-tear-reveal", onPaperTearReveal);
            window.addEventListener("paper-tear-complete", playStaggerReveal);
        }
        const fallbackTimer = setTimeout(playStaggerReveal, 2500);
        renderer.render(scene, camera);
        return ()=>{
            isRunning = false;
            clearTimeout(fallbackTimer);
            revealTimeouts.forEach(clearTimeout);
            window.removeEventListener("paper-tear-reveal", onPaperTearReveal);
            window.removeEventListener("paper-tear-complete", playStaggerReveal);
            staggerTimeline.kill();
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("resize", onResize);
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
        className: `relative w-full h-screen transition-opacity duration-500 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-10 opacity-15",
                style: {
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .8 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "work-status",
                className: "fixed left-6 sm:left-12 top-24 sm:top-1/2 sm:-translate-y-1/2 z-20 select-none pointer-events-none flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-neutral-600",
                        children: "AVAILABLE FOR WORK"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base sm:text-xl font-black italic tracking-tight text-neutral-900 mt-1",
                        children: "Freelance & Collab"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "location-status",
                className: "fixed right-6 sm:right-12 top-24 sm:top-1/2 sm:-translate-y-1/2 z-20 select-none pointer-events-none flex flex-col items-end text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        suppressHydrationWarning: true,
                        className: "font-mono tabular-nums text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-neutral-600",
                        children: philippineTime || "12:00:00 AM GMT+8"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base sm:text-xl font-black italic tracking-tight text-neutral-900 mt-1",
                        children: "Philippines"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroScene3D.tsx",
                        lineNumber: 1142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "hero-nav",
                className: "fixed z-20 left-6 right-6 sm:left-12 sm:right-12 bottom-6 sm:bottom-8 select-none pointer-events-auto opacity-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto grid grid-cols-4 gap-3 sm:gap-8",
                    children: THEMES.map((t, i)=>{
                        const isActive = activeAvatar === t.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-nav-item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: `btn-nav-${t.id}`,
                                onClick: ()=>switchAvatarRef.current?.(t.id),
                                className: `w-full group text-left transition-all duration-300 pt-3 sm:pt-4 border-t flex items-center font-mono text-xs sm:text-sm tracking-widest uppercase cursor-pointer ${isActive ? "border-neutral-900 text-neutral-900 border-t-2 sm:border-t-4 font-bold opacity-100" : "border-neutral-900/30 text-neutral-600 hover:text-neutral-900 hover:border-neutral-900/60 opacity-60 hover:opacity-90"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-purple-600 animate-pulse" : "bg-neutral-300 group-hover:bg-neutral-400"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroScene3D.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "0",
                                                i + 1,
                                                " ",
                                                t.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroScene3D.tsx",
                                            lineNumber: 1171,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroScene3D.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroScene3D.tsx",
                                lineNumber: 1156,
                                columnNumber: 17
                            }, this)
                        }, t.id, false, {
                            fileName: "[project]/components/HeroScene3D.tsx",
                            lineNumber: 1155,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/HeroScene3D.tsx",
                    lineNumber: 1151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "absolute inset-0 w-full h-full pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/components/HeroScene3D.tsx",
                lineNumber: 1182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroScene3D.tsx",
        lineNumber: 1109,
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                        lineNumber: 304,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: "/videos/match-cut.webm",
                        type: "video/webm"
                    }, void 0, false, {
                        fileName: "[project]/components/animations/LoadingScreen.tsx",
                        lineNumber: 305,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
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

//# sourceMappingURL=components_1rlphuyumezm_._.js.map