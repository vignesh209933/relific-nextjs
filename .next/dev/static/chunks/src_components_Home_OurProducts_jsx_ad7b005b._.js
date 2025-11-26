(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Home/OurProducts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/Content.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
const KnowMoreButton = ({ path })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: path,
        onClick: ()=>{
            window.scrollTo(0, 0);
        },
        className: "px-4 md:px-6 py-2 border rounded-lg font-normal shadow-lg flex items-center text-sm md:text-base  transition-all duration-200 ease-in-out  hover:scale-105 active:scale-95 active:brightness-90  focus:outline-none focus:ring focus:ring-opacity-50",
        style: {
            backgroundColor: window.innerWidth < 768 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].More_bg : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_4,
            borderColor: window.innerWidth < 768 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Know,
            color: window.innerWidth < 768 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Know
        },
        onMouseEnter: (e)=>{
            if (window.innerWidth >= 768) {
                e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].More_bg;
                e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font;
                e.target.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font;
            }
        },
        onMouseLeave: (e)=>{
            if (window.innerWidth >= 768) {
                e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_4;
                e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Know;
                e.target.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Know;
            }
        },
        children: [
            "Know more ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                size: 16,
                className: "ml-2"
            }, void 0, false, {
                fileName: "[project]/src/components/Home/OurProducts.jsx",
                lineNumber: 54,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home/OurProducts.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(KnowMoreButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = KnowMoreButton;
const OurProducts = ()=>{
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OurProducts.useMemo[isMobile]": ()=>window.matchMedia("(max-width: 640px)").matches
    }["OurProducts.useMemo[isMobile]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full py-8 md:py-16 px-4 md:px-20",
            style: {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bg_color_3
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:ml-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-6 md:mb-16",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                        },
                        children: "AI-Powered Intelligence"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home/OurProducts.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["segments"]?.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["segments"].map((segment, index)=>{
                        const isEven = index % 2 === 0;
                        const product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productLinks"].find((p)=>p.drop === segment.d_title);
                        const path = product?.path || "/comingsoon";
                        const Container = isMobile ? "div" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
                        const ContentWrapper = isMobile ? "div" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
                            className: `flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4 mb-8 md:mb-16`,
                            ...!isMobile && {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.2
                                },
                                variants: itemVariants
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                                    className: "w-full md:w-[544px] h-[300px] md:h-[400px] flex flex-col justify-center items-center relative overflow-hidden rounded-lg bg-transparent shadow-none",
                                    style: {
                                        backgroundColor: "transparent",
                                        boxShadow: "none"
                                    },
                                    ...!isMobile && {
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: {
                                            once: true,
                                            amount: 0.2
                                        },
                                        variants: {
                                            hidden: {
                                                backgroundColor: "rgba(255,255,255,0)",
                                                boxShadow: "none"
                                            },
                                            visible: {
                                                backgroundColor: "rgba(255,255,255,0)",
                                                boxShadow: "none",
                                                transition: {
                                                    duration: 0.3
                                                }
                                            }
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: segment.image,
                                        alt: segment.d_title,
                                        width: 400,
                                        height: 400,
                                        className: "absolute -mt-5 w-[108%] h-[108%] object-contain p-8 top-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home/OurProducts.jsx",
                                        lineNumber: 127,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home/OurProducts.jsx",
                                    lineNumber: 104,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                                    className: "flex flex-col items-start flex-1 px-4 ml-10 md:px-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-[30px] font-semibold mb-3 md:mb-4",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                                            },
                                            children: segment.d_title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home/OurProducts.jsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm md:text-md mb-4 md:mb-6 leading-relaxed",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3
                                            },
                                            children: segment.description.split("\n").map((line, index)=>{
                                                const trimmedLine = line.trim();
                                                if (!trimmedLine) return null;
                                                // Check if it's a bullet point
                                                if (trimmedLine.startsWith("•")) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-500 mr-2 mt-1 text-xs",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home/OurProducts.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1",
                                                                children: trimmedLine.substring(1).trim()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home/OurProducts.jsx",
                                                                lineNumber: 158,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/Home/OurProducts.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                }
                                                // Check if it's a main heading (first non-empty line)
                                                const isMainHeading = index === segment.description.split("\n").findIndex((l)=>l.trim());
                                                if (isMainHeading && trimmedLine.length > 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg mb-2",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                                                        },
                                                        children: trimmedLine
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/Home/OurProducts.jsx",
                                                        lineNumber: 173,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                }
                                                // Regular paragraph text
                                                if (trimmedLine.length > 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2",
                                                        children: trimmedLine
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/Home/OurProducts.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                }
                                                return null;
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home/OurProducts.jsx",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KnowMoreButton, {
                                            path: path
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home/OurProducts.jsx",
                                            lineNumber: 195,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Home/OurProducts.jsx",
                                    lineNumber: 136,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, segment.d_title, true, {
                            fileName: "[project]/src/components/Home/OurProducts.jsx",
                            lineNumber: 92,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-red-500",
                        children: "No segments to display. Please check your Content.jsx file."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home/OurProducts.jsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home/OurProducts.jsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home/OurProducts.jsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home/OurProducts.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(OurProducts, "QnnuHc2+sJB7K7QFFJM3scXd8Ac=");
_c1 = OurProducts;
const __TURBOPACK__default__export__ = OurProducts;
var _c, _c1;
__turbopack_context__.k.register(_c, "KnowMoreButton");
__turbopack_context__.k.register(_c1, "OurProducts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_Home_OurProducts_jsx_ad7b005b._.js.map