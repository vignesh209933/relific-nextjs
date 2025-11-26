(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Who we serve/Orgsweserve.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/Color.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const OrganizationsWeServe = ()=>{
    _s();
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationsWeServe.useEffect": ()=>{
            const checkIsMobile = {
                "OrganizationsWeServe.useEffect.checkIsMobile": ()=>setIsMobile(window.innerWidth < 768)
            }["OrganizationsWeServe.useEffect.checkIsMobile"];
            checkIsMobile();
            window.addEventListener("resize", checkIsMobile);
            return ({
                "OrganizationsWeServe.useEffect": ()=>window.removeEventListener("resize", checkIsMobile)
            })["OrganizationsWeServe.useEffect"];
        }
    }["OrganizationsWeServe.useEffect"], []);
    const organizations = [
        {
            id: "ngos",
            title: "NGOs & Non-Profits",
            subtitle: "Amplify Your Mission With Data That Actually Works",
            description: "Stop letting data chaos steal time from your mission. Get enterprise-grade tools at NGO-friendly prices (60% discount) and prove your impact to unlock bigger grants.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "w-8 h-8",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentChallenges: [
                "Limited budget for expensive enterprise tools",
                "Data scattered across multiple platforms",
                "Staff overwhelmed by manual processes",
                "Difficulty proving impact to donors",
                "Time wasted on manual reporting"
            ],
            withRelific: [
                "3x larger grants with bulletproof impact proof",
                "Enterprise-grade reliability at nonprofit rates",
                "90% less time spent on data management",
                "Real-time insights that guide better decisions"
            ],
            pricing: "Starting at $400/month with 60% nonprofit discount",
            ctaText: "Get NGO Pricing",
            ctaLink: "/start-trial",
            bgColor: "#10B981",
            cardIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "w-12 h-12 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                lineNumber: 57,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: "csr",
            title: "CSR Arms of Corporates",
            subtitle: "Turn Your CSR Into a Strategic Advantage",
            description: "Your CSR program should be a boardroom success story, not a reporting nightmare. Get executive dashboards that impress stakeholders and scale programs that actually move the needle.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                className: "w-8 h-8",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentChallenges: [
                "Board wants ROI proof on social investments",
                "Programs scale but reporting doesn't",
                "Data scattered across regions and partners",
                "Impossible to track long-term social work"
            ],
            withRelific: [
                "Board meetings become showcases, not status hunts",
                "Scale programs confidently with real-time insights",
                "Executive dashboards that impress leadership",
                "CSR that drives business impact, not spreadsheets"
            ],
            pricing: "Enterprise pricing from $25,000/year",
            ctaText: "Schedule Executive Demo",
            ctaLink: "/contact",
            bgColor: "#1E40AF",
            cardIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                className: "w-12 h-12 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                lineNumber: 84,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: "impact-investors",
            title: "Impact Investors",
            subtitle: "Portfolio Impact Intelligence That LPs Actually Want to See",
            description: "Transform your portfolio monitoring from quarterly guesswork into real-time intelligence. Get the impact data that LPs demand and the insights that drive better investment decisions.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                className: "w-8 h-8",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentChallenges: [
                "Portfolio companies provide inconsistent impact data",
                "LPs demand proof of impact, not just returns",
                "Quarterly reporting takes weeks to compile",
                "No standardized way to compare impact across investments"
            ],
            withRelific: [
                "Real-time portfolio impact dashboards",
                "Standardized impact metrics across all investments",
                "LP reports generated automatically",
                "Data-driven decisions for follow-on investments"
            ],
            pricing: "Custom pricing for fund size and portfolio complexity",
            ctaText: "See Portfolio Demo",
            ctaLink: "/demo-videos",
            bgColor: "#8B5CF6",
            cardIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                className: "w-12 h-12 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                lineNumber: 114,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-16 px-4 md:py-24 md:px-8",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bg_color_3
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                fontWeight: 400
                            },
                            children: "Solutions for Every Impact Organization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-normal",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3,
                                fontWeight: 400
                            },
                            children: "Whether you're proving impact to donors, impressing boards, or satisfying LPs—we have the tools to amplify your mission and multiply your effectiveness."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12 lg:space-y-16",
                    children: organizations.map((org, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl overflow-hidden",
                            onMouseEnter: ()=>setHoveredCard(index),
                            onMouseLeave: ()=>setHoveredCard(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-8 p-6 sm:p-8 lg:p-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center",
                                                        style: {
                                                            backgroundColor: `${org.bgColor}20`
                                                        },
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(org.icon, {
                                                            className: "w-6 h-6 sm:w-7 sm:h-7",
                                                            style: {
                                                                color: org.bgColor
                                                            }
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl sm:text-3xl lg:text-4xl font-normal mb-2 leading-tight",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                                                    fontWeight: 400
                                                                },
                                                                children: org.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                lineNumber: 166,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg sm:text-xl lg:text-2xl font-normal mb-4 leading-tight",
                                                                style: {
                                                                    color: org.bgColor,
                                                                    fontWeight: 400
                                                                },
                                                                children: org.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base sm:text-lg leading-relaxed mb-8 font-normal",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3,
                                                    fontWeight: 400
                                                },
                                                children: org.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-normal text-base sm:text-lg mb-4",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                                                    fontWeight: 400
                                                                },
                                                                children: "Current Challenges:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                lineNumber: 193,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-3",
                                                                children: org.currentChallenges.map((challenge, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                                lineNumber: 202,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm sm:text-base leading-relaxed font-normal",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3,
                                                                                    fontWeight: 400
                                                                                },
                                                                                children: challenge
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-normal text-base sm:text-lg mb-4",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                                                    fontWeight: 400
                                                                },
                                                                children: "With Relific:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-3",
                                                                children: org.withRelific.map((solution, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                size: 16,
                                                                                className: "text-green-500 mt-1 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                                lineNumber: 225,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm sm:text-base leading-relaxed font-normal",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3,
                                                                                    fontWeight: 400
                                                                                },
                                                                                children: solution
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base font-normal",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3,
                                                        fontWeight: 400
                                                    },
                                                    children: org.pricing
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: org.ctaLink,
                                                className: "inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer",
                                                style: {
                                                    backgroundColor: org.bgColor,
                                                    color: "white",
                                                    textDecoration: "none",
                                                    fontWeight: 400
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                },
                                                children: [
                                                    org.ctaText,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 18,
                                                        className: "sm:w-5 sm:h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-4 relative flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[300px] lg:min-h-[500px]",
                                        style: {
                                            backgroundColor: org.bgColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-white relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(org.cardIcon, {
                                                            className: "w-16 h-16 sm:w-20 sm:h-20 mx-auto"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl sm:text-2xl lg:text-3xl font-normal mb-3",
                                                        style: {
                                                            fontWeight: 400
                                                        },
                                                        children: org.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-lg opacity-90 font-normal",
                                                        style: {
                                                            fontWeight: 400
                                                        },
                                                        children: "Purpose-built for your success"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-10",
                                                style: {
                                                    backgroundColor: "white",
                                                    transform: "translate(25%, -25%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-10",
                                                style: {
                                                    backgroundColor: "white",
                                                    transform: "translate(-25%, 25%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, org.id, false, {
                            fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 lg:mt-16 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6 leading-tight",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                    fontWeight: 400
                                },
                                children: "Ready to Transform Your Impact Operations?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed font-normal",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_3,
                                    fontWeight: 400
                                },
                                children: "Join hundreds of organizations already using Relific to amplify their mission and multiply their effectiveness."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/start-trial",
                                        className: "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer",
                                        style: {
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_4,
                                            textDecoration: "none",
                                            fontWeight: 400
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = "translateY(0)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                size: 18,
                                                className: "sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Start Your Free Trial"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contact",
                                        className: "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 border-2 cursor-pointer",
                                        style: {
                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                            textDecoration: "none",
                                            fontWeight: 400
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font;
                                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_4;
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font;
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                size: 18,
                                                className: "sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Schedule a Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
            lineNumber: 123,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Who we serve/Orgsweserve.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrganizationsWeServe, "vjh5Uht+iHuNAlAxDOaCXM+p/JI=");
_c = OrganizationsWeServe;
const __TURBOPACK__default__export__ = OrganizationsWeServe;
var _c;
__turbopack_context__.k.register(_c, "OrganizationsWeServe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home/Clients.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/Content.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ClientsCarousel = ()=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Duplicate the clients array for seamless loop
    const duplicatedClients = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clients"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clients"]
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientsCarousel.useEffect": ()=>{
            const moveCarousel = {
                "ClientsCarousel.useEffect.moveCarousel": ()=>{
                    setPosition({
                        "ClientsCarousel.useEffect.moveCarousel": (prev)=>{
                            const newPosition = prev - 1;
                            // Reset position when all original items have scrolled
                            if (Math.abs(newPosition) >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clients"].length * 200) {
                                return 0;
                            }
                            return newPosition;
                        }
                    }["ClientsCarousel.useEffect.moveCarousel"]);
                }
            }["ClientsCarousel.useEffect.moveCarousel"];
            const interval = setInterval(moveCarousel, 50);
            return ({
                "ClientsCarousel.useEffect": ()=>clearInterval(interval)
            })["ClientsCarousel.useEffect"];
        }
    }["ClientsCarousel.useEffect"], [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Content$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clients"].length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full pt-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[30px] md:text-[40px] sm:text-[60px] font-normal text-center mb-12",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                    },
                    children: "Trusted by Leading Organizations"
                }, void 0, false, {
                    fileName: "[project]/src/components/Home/Clients.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full overflow-hidden flex items-center h-[120px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center",
                        style: {
                            x: position,
                            transition: "transform 0.05s linear"
                        },
                        children: duplicatedClients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-[160px] h-[80px] mx-4 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: client.logo,
                                    alt: client.name,
                                    className: "w-[120px] h-[60px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home/Clients.jsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `${client.id}-${index}`, false, {
                                fileName: "[project]/src/components/Home/Clients.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home/Clients.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Home/Clients.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home/Clients.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home/Clients.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ClientsCarousel, "gVejKcPeA2/cG0XaTceq7U6lhYU=");
_c = ClientsCarousel;
const __TURBOPACK__default__export__ = ClientsCarousel;
var _c;
__turbopack_context__.k.register(_c, "ClientsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLikelyHTML",
    ()=>isLikelyHTML,
    "isLikelyMDX",
    ()=>isLikelyMDX,
    "isLikelyMarkdown",
    ()=>isLikelyMarkdown,
    "isRichJSON",
    ()=>isRichJSON,
    "renderRichJSONToHTML",
    ()=>renderRichJSONToHTML
]);
function isLikelyHTML(s) {
    return typeof s === "string" && /<\/?[a-z][\s\S]*>/i.test(s);
}
function isLikelyMDX(s) {
    return typeof s === "string" && (/<[A-Z][A-Za-z0-9]*(\s|>)/.test(s) || /:::\s*(note|caution|info|warning|tip)/i.test(s) || /import\s+/.test(s) || /export\s+/.test(s));
}
function isLikelyMarkdown(s) {
    return typeof s === "string" && (/^#{1,6}\s/m.test(s) || /^\s*[-*+]\s+/m.test(s) || /\[.+\]\(.+\)/.test(s) || /^\s*\d+\.\s+/m.test(s) || /\*\*.*\*\*/.test(s) || /_.*_/.test(s));
}
function isRichJSON(v) {
    return typeof v === "object" && v !== null && (Array.isArray(v.children) || Array.isArray(v.content) || typeof v.type === "string");
}
function renderRichJSONToHTML(node) {
    if (Array.isArray(node)) {
        return node.map(renderRichJSONToHTML).join("");
    }
    if (!node || typeof node !== "object") {
        return String(node || "");
    }
    const { type, children, content, text, level, format, url, bold, italic, underline, strikethrough, code } = node;
    // Handle text nodes
    if (type === "text" || text !== undefined) {
        let result = text || "";
        if (bold) result = `<strong>${result}</strong>`;
        if (italic) result = `<em>${result}</em>`;
        if (underline) result = `<u>${result}</u>`;
        if (strikethrough) result = `<s>${result}</s>`;
        if (code) result = `<code>${result}</code>`;
        return result;
    }
    // Get child content
    const childNodes = children || content || [];
    const childContent = childNodes.map(renderRichJSONToHTML).join("");
    // Handle different node types
    switch(type){
        case "paragraph":
            return `<p>${childContent}</p>`;
        case "heading":
            const headingLevel = Math.min(Math.max(level || 1, 1), 6);
            return `<h${headingLevel}>${childContent}</h${headingLevel}>`;
        case "list":
            const listTag = format === "ordered" ? "ol" : "ul";
            return `<${listTag}>${childContent}</${listTag}>`;
        case "list-item":
            return `<li>${childContent}</li>`;
        case "link":
            const href = url || "#";
            return `<a href="${href}" target="_blank" rel="noopener noreferrer">${childContent}</a>`;
        case "blockquote":
            return `<blockquote>${childContent}</blockquote>`;
        case "code":
            return `<pre><code>${childContent}</code></pre>`;
        case "image":
            const src = node.src || node.url || "";
            const alt = node.alt || node.alternativeText || "";
            return `<img src="${src}" alt="${alt}" />`;
        case "break":
        case "hard-break":
            return "<br>";
        default:
            // For unknown types, just return the child content
            return childContent;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/strapi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Next.js types reference
/// <reference types="next" />
__turbopack_context__.s([
    "getMediaUrl",
    ()=>getMediaUrl,
    "getPost",
    ()=>getPost,
    "getPosts",
    ()=>getPosts,
    "normaliseMedia",
    ()=>normaliseMedia,
    "processRichText",
    ()=>processRichText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qs/lib/index.js [app-client] (ecmascript)");
;
;
// Next.js environment variables
const API = ("TURBOPACK compile-time value", "https://automatic-cabbage-5a6930dc68.strapiapp.com");
const TOKEN = ("TURBOPACK compile-time value", "7fd4b4f8bb5ce2962009c7eeedacd3f3ecfbba5f3d2706bc236b3c8222995b075d509888357e67e9ed9e26e5add1b5c2c28d04b6910c5aae89d37694633d7760d409119cef5e4e2458b62fd349ab332af02903a230aaab2e37d5c3ae66e72a3b87eb852a295b3fc2a10e1ad803de2bcc4383d4d4d5a87ecbe43daa873386bd97");
async function rq(path) {
    const res = await fetch(`${API}${path}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
    if (!res.ok) throw new Error(`Strapi ${res.status}`);
    return res.json();
}
async function getPosts(page = 1, pageSize = 12) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("Fetching posts from:", API);
        console.log("Has token:", !!TOKEN);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify({
        populate: "*",
        sort: "publishedAt:desc",
        pagination: {
            page,
            pageSize
        },
        filters: {
            publishedAt: {
                $notNull: true
            }
        }
    }, {
        encodeValuesOnly: true
    });
    try {
        const result = await rq(`/api/articles?${query}`);
        return result;
    } catch (error) {
        console.error("Strapi fetch error:", error);
        throw error;
    }
}
async function getPost(slug) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("Fetching post by slug:", slug);
    }
    // Use the slug field to fetch articles
    const query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: {
            cover: true,
            author: true,
            category: true,
            blocks: {
                populate: "*"
            }
        }
    }, {
        encodeValuesOnly: true
    });
    try {
        const json = await rq(`/api/articles?${query}`);
        if (!json?.data?.length) {
            return null;
        }
        return json.data[0];
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
} // Enhanced media URL helper
function getMediaUrl(x) {
    if (!x) return "";
    // If it's already a full URL
    if (typeof x === "string" && x.startsWith("http")) {
        return x;
    }
    // Handle direct url property
    if (x.url) {
        return x.url.startsWith("http") ? x.url : `${API}${x.url}`;
    }
    // Handle Strapi v4 format with data.attributes
    if (x.data?.attributes?.url) {
        const url = x.data.attributes.url;
        return url.startsWith("http") ? url : `${API}${url}`;
    }
    return "";
}
function normaliseMedia(x) {
    if (!x) return null;
    const url = getMediaUrl(x);
    if (!url) return null;
    // Handle different formats
    const alt = x.alternativeText || x.alt || x.data?.attributes?.alternativeText || "";
    const caption = x.caption || x.data?.attributes?.caption || "";
    return {
        url,
        alt,
        caption
    };
}
function processRichText(input) {
    if (!input) {
        return {
            kind: "empty"
        };
    }
    // Handle Rich JSON format (Strapi v4 rich text)
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRichJSON"])(input)) {
        const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderRichJSONToHTML"])(input);
        return {
            kind: "html",
            html
        };
    }
    // Handle string content
    if (typeof input === "string") {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLikelyHTML"])(input)) {
            return {
                kind: "html",
                html: input
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLikelyMDX"])(input)) {
            return {
                kind: "mdx",
                md: input
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLikelyMarkdown"])(input)) {
            return {
                kind: "md",
                md: input
            };
        } else {
            // Plain text - convert to markdown
            return {
                kind: "md",
                md: input
            };
        }
    }
    return {
        kind: "empty"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Who we serve/BlogPosts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/strapi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/Color.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const BlogPosts = ()=>{
    _s();
    const [blogPosts, setBlogPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPosts.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosts"])().then({
                "BlogPosts.useEffect": (json)=>{
                    if (json.data && Array.isArray(json.data)) {
                        // Get only the top 3 posts
                        const top3Posts = json.data.slice(0, 3);
                        setBlogPosts(top3Posts);
                    } else {
                        setBlogPosts([]);
                    }
                    setLoading(false);
                }
            }["BlogPosts.useEffect"]).catch({
                "BlogPosts.useEffect": (error)=>{
                    console.error("Error fetching posts:", error);
                    setBlogPosts([]);
                    setLoading(false);
                }
            }["BlogPosts.useEffect"]);
        }
    }["BlogPosts.useEffect"], []);
    const handlePostClick = (post)=>{
        const slug = post.slug || post.documentId;
        router.push(`/blogs/${slug}`);
    };
    const handleShowAllClick = ()=>{
        router.push("/blogs");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center bg-transparent py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mx-auto px-4 sm:px-6 lg:px-8",
            style: {
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bg_color_3
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                    },
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: "Latest Stories & Insights"
                }, void 0, false, {
                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "text-lg md:text-xl mb-12 max-w-3xl mx-auto",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_5
                    },
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    children: "Real stories from the field and insights from our work with social impact organizations"
                }, void 0, false, {
                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            rotate: [
                                0,
                                180,
                                360
                            ]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "w-12 h-12 border-4 rounded-full",
                        style: {
                            borderColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font} transparent`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : blogPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_5
                        },
                        children: "No blog posts available at the moment."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
                            children: blogPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    className: "bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                    onClick: ()=>handlePostClick(post),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-w-16 aspect-h-9",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: post.cover ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$strapi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaUrl"])(post.cover) : "/assets/blog_bg.jpg",
                                                alt: post.title || "Blog post",
                                                className: "w-full h-48 object-cover",
                                                onError: (e)=>{
                                                    e.target.src = "/assets/blog_bg.jpg";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-lg mb-2 line-clamp-2",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                                                    },
                                                    children: post.title || "Untitled Post"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4 line-clamp-3",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_5
                                                    },
                                                    children: post.description || post.excerpt || "New blog post from our latest insights and field work."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-sm",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : new Date().toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full text-xs",
                                                            style: {
                                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bg_color_1,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font
                                                            },
                                                            children: "Blog"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `blog-${post.documentId}`, true, {
                                    fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.5
                            },
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShowAllClick,
                                className: "px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105",
                                style: {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Font_4
                                },
                                onMouseEnter: (e)=>{
                                    e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Click;
                                },
                                onMouseLeave: (e)=>{
                                    e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Primary_font;
                                },
                                children: "Show All Blog Posts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Who we serve/BlogPosts.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlogPosts, "zIlY/0pCeI3b0RfZlz6KPRHu3dc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BlogPosts;
const __TURBOPACK__default__export__ = BlogPosts;
var _c;
__turbopack_context__.k.register(_c, "BlogPosts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/whoweserve/WhoWeServeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Who__we__serve$2f$Orgsweserve$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Who we serve/Orgsweserve.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2f$Clients$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home/Clients.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Who__we__serve$2f$BlogPosts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Who we serve/BlogPosts.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const WhoWeServeClient = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Who__we__serve$2f$Orgsweserve$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/whoweserve/WhoWeServeClient.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2f$Clients$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/whoweserve/WhoWeServeClient.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Who__we__serve$2f$BlogPosts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/whoweserve/WhoWeServeClient.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/whoweserve/WhoWeServeClient.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WhoWeServeClient;
const __TURBOPACK__default__export__ = WhoWeServeClient;
var _c;
__turbopack_context__.k.register(_c, "WhoWeServeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ab4372c9._.js.map