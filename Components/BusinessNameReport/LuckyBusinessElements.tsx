import Image from "next/image";
import type { ReactElement } from "react";
import BusinessNameReportPageShell from "./BusinessNameReportPageShell";
import {
    COLORS,
    BusinessReportFooter,
    BusinessReportHeader,
} from "./BusinessReportCommon";

export type LuckyBusinessElementsProps = {
    pageNumber?: string;
    subtitle?: string;
    subtitle2?: string;
};

// ─── SECTION BANNER ──────────────────────────────────────────────────────────
function SectionBanner() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative">
                <Image
                    src="/assets/business-name-report/top-effect.png"
                    alt="section banner"
                    width={360}
                    height={55}
                    priority
                />
                <div
                    className="absolute top-[50%] transform -translate-y-1/2 left-13 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white"
                    style={{ background: "#4A0E17", fontFamily: "Cinzel, serif" }}
                >
                    12
                </div>
                <h2
                    className="absolute top-[50%] transform -translate-y-1/2 right-10 shrink-0 text-center text-[12px] font-bold tracking-widest"
                    style={{ color: COLORS.brown, fontFamily: "Cinzel, serif" }}
                >
                    LUCKY BUSINESS ELEMENTS
                </h2>
            </div>
        </div>
    );
}

// ─── MAIN PAGES COMPONENT ──────────────────────────────────────────────────────
export default function LuckyBusinessElements({
    pageNumber = "12",
    subtitle = "BUSINESS NAME OPTIMIZATION REPORT",
    subtitle2 = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
}: LuckyBusinessElementsProps) {
    return (
        <BusinessNameReportPageShell padding="18px 40px 20px" pageNumber={pageNumber}>
            <div className="flex h-full flex-col font-nunito-sans text-[#5a3410]">

                {/* Header */}
                <BusinessReportHeader subtitle={subtitle} subtitle2={subtitle2} />

                {/* Banner */}
                <SectionBanner />

                <p className="text-[9px] text-center font-medium text-stone-600 max-w-[550px] mx-auto  leading-normal">
                    These lucky elements are derived from the corrected business name vibration and are designed to attract success, wealth and stability.
                </p>

                {/* ─── GRID SECTION (1 to 6 elements) ─── */}
                <div className="grid grid-cols-3 w-full ">

                    {/* Card 1: Lucky Numbers */}
                    <div
                        style={{
                            backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            padding: "16px 14px 14px",
                        }}
                        className="flex flex-col min-h-[225px]"
                    >
                        {/* Header row: badge + title/description */}
                        <div className="flex items-start gap-3 mb-3">
                            {/* Dark circle badge */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#3a1a0a] border-2 border-[#c9a227] flex flex-col items-center justify-center leading-none">
                                <span className="text-[#e8c96d] font-bold text-[14px] tracking-wide">139</span>
                                <span className="text-[#e8c96d] font-bold text-[14px] tracking-wide">68</span>
                            </div>
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-[#6B1020] mb-0.5">1. LUCKY NUMBERS</span>
                                <p className="text-[11px] text-stone-500 leading-tight">
                                    These numbers carry powerful vibrations for your business growth and financial success.
                                </p>
                            </div>
                        </div>

                        {/* Numbers row */}
                        <div className="flex gap-2 justify-center my-auto">
                            {[3, 6, 9, 24, 32, 41].map((n) => (
                                <span
                                    key={n}
                                    className="w-[30px] h-[30px] rounded-full border border-[#c9a227] flex items-center justify-center font-bold text-[11px] text-stone-800 bg-white shadow-sm"
                                >
                                    {n}
                                </span>
                            ))}
                        </div>

                        {/* How to Use box */}
                        <div
                            className="mt-3 w-full text-center rounded-md px-3 py-2"
                            style={{ backgroundColor: "rgba(210, 180, 120, 0.15)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
                        >
                            <span className="font-bold block text-[#6B1020] text-[10px] tracking-wider mb-0.5 uppercase">
                                How to Use
                            </span>
                            <p className="text-[10px] text-stone-600 leading-tight">
                                Use in business documents, prices, quantity, agreements, codes, and important numerical selections.
                            </p>
                        </div>
                    </div>
                    {/* Card 2: Lucky Dates */}
                    <div
                        style={{
                            backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            padding: "16px 14px 14px",
                        }}
                        className="flex flex-col min-h-[225px]"
                    >
                        {/* Header row: badge + title/description */}
                        <div className="flex items-start gap-3 mb-3">
                            {/* Dark circle badge with calendar icon */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#3a1a0a] border-2 border-[#c9a227] flex items-center justify-center">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#e8c96d" strokeWidth="1.5" />
                                    <line x1="3" y1="9" x2="21" y2="9" stroke="#e8c96d" strokeWidth="1.5" />
                                    <line x1="8" y1="2" x2="8" y2="6" stroke="#e8c96d" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="16" y1="2" x2="16" y2="6" stroke="#e8c96d" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="8" cy="13" r="1" fill="#e8c96d" />
                                    <circle cx="12" cy="13" r="1" fill="#e8c96d" />
                                    <circle cx="16" cy="13" r="1" fill="#e8c96d" />
                                    <circle cx="8" cy="17" r="1" fill="#e8c96d" />
                                    <circle cx="12" cy="17" r="1" fill="#e8c96d" />
                                </svg>
                            </div>
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-[#6B1020] mb-0.5">2. LUCKY DATES</span>
                                <p className="text-[11px] text-stone-500 leading-tight">
                                    These dates are highly favorable for important business activities.
                                </p>
                            </div>
                        </div>

                        {/* Dates box */}
                        <div
                            className="w-full rounded-lg  text-center"
                            style={{
                                backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                padding: "8px 6px 6px"
                            }}
                        >
                            <p className="font-bold text-[13px] text-[#4A0E17] leading-relaxed">
                                3, 6, 9, 12, 15, 18<br />21, 24, 27, 30
                            </p>
                            <span className="text-[10px] text-stone-500 font-medium block mt-1">
                                of any month
                            </span>
                        </div>

                        {/* Best for box */}
                        <div
                            className="mt-1 w-full text-center rounded-md px-3 py-2"
                            style={{ backgroundColor: "rgba(210, 180, 120, 0.15)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
                        >
                            <span className="font-bold block text-[#6B1020] text-[10px] tracking-wider mb-0.5 uppercase">
                                Best for:
                            </span>
                            <p className="text-[10px] text-stone-600 leading-tight">
                                Launch, signing, investments, partnerships, marketing, expansion
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Lucky Colors */}
                    <div
                        style={{
                            backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            padding: "16px 14px 14px",
                        }}
                        className="flex flex-col min-h-[225px]"
                    >
                        {/* Header row: badge + title/description */}
                        <div className="flex items-start gap-3 mb-3">
                            {/* Dark circle badge with palette icon */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#3a1a0a] border-2 border-[#c9a227] flex items-center justify-center">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.53-.19-1.01-.5-1.38-.3-.36-.49-.83-.49-1.32 0-1.1.9-2 2-2h2.36c3.1 0 5.64-2.54 5.64-5.64C22 6.18 17.52 2 12 2z" stroke="#e8c96d" strokeWidth="1.4" fill="none" />
                                    <circle cx="6.5" cy="11.5" r="1.2" fill="#e8c96d" />
                                    <circle cx="9.5" cy="7.5" r="1.2" fill="#e8c96d" />
                                    <circle cx="14.5" cy="7.5" r="1.2" fill="#e8c96d" />
                                    <circle cx="17.5" cy="11.5" r="1.2" fill="#e8c96d" />
                                </svg>
                            </div>
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-[#6B1020] mb-0.5">3. LUCKY COLORS</span>
                                <p className="text-[11px] text-stone-500 leading-tight">
                                    These colors enhance your brand vibration and attract positive energies.
                                </p>
                            </div>
                        </div>

                        {/* Color circles row */}
                        <div className="flex gap-2.5 justify-center items-end my-auto">
                            {[
                                { hex: "#1a3a5c", label: "Blue" },
                                { hex: "#1e4d2b", label: "Green" },
                                { hex: "#D4AF37", label: "Gold" },
                                { hex: "#FFFFFF", label: "White", border: true },
                                { hex: "#1A237E", label: "Navy" },
                            ].map((c, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-1">
                                    <span
                                        className="w-[34px] h-[34px] rounded-full shadow-md"
                                        style={{
                                            backgroundColor: c.hex,
                                            border: c.border ? "1.5px solid #d1d5db" : "1.5px solid rgba(255,255,255,0.3)",
                                        }}
                                    />
                                    <span className="text-[8px] font-medium text-stone-600">{c.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* How to Use box */}
                        <div
                            className="mt-3 w-full text-center rounded-md px-3 py-2"
                            style={{ backgroundColor: "rgba(210, 180, 120, 0.15)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
                        >
                            <span className="font-bold block text-[#6B1020] text-[10px] tracking-wider mb-0.5 uppercase">
                                How to Use
                            </span>
                            <p className="text-[10px] text-stone-600 leading-tight">
                                Use in logo, website, marketing, visiting cards, packaging, office interiors and branding.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Lucky Days */}
                    <div
                        style={{
                            backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            padding: "16px 14px 14px",
                        }}
                        className="flex flex-col min-h-[225px]"
                    >
                        {/* Header row: badge + title/description */}
                        <div className="flex items-start gap-3 mb-3">
                            {/* Dark circle badge with calendar-check icon */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#3a1a0a] border-2 border-[#c9a227] flex items-center justify-center">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#e8c96d" strokeWidth="1.5" />
                                    <line x1="3" y1="9" x2="21" y2="9" stroke="#e8c96d" strokeWidth="1.5" />
                                    <line x1="8" y1="2" x2="8" y2="6" stroke="#e8c96d" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="16" y1="2" x2="16" y2="6" stroke="#e8c96d" strokeWidth="1.5" strokeLinecap="round" />
                                    <polyline points="7.5,14 10.5,17 16.5,12" stroke="#e8c96d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[#6B1020] mb-0.5">4. LUCKY DAYS</span>
                                <p className="text-[11px] text-stone-500 leading-tight">
                                    These days support productivity, visibility, and overall business growth.
                                </p>
                            </div>
                        </div>

                        {/* Day rows */}
                        <div className="flex flex-col gap-1.5 w-full my-auto">
                            {[
                                { name: "MONDAY", desc: "For new beginnings" },
                                { name: "WEDNESDAY", desc: "For communication and growth" },
                                { name: "THURSDAY", desc: "For finance and expansion" },
                                { name: "FRIDAY", desc: "For success and prosperity" },
                            ].map((item) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    {/* Gold star circle */}
                                    <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full border-2 border-[#c9a227] bg-white flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#c9a227">
                                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192z" />
                                        </svg>
                                    </div>
                                    {/* Day name pill */}
                                    <div
                                        className="px-2  rounded"
                                        style={{ backgroundColor: "#c9a227", minWidth: "60px" }}
                                    >
                                        <span className="font-bold text-[10px] text-white tracking-wide">{item.name}</span>
                                    </div>
                                    {/* Description */}
                                    <span className="text-[9.5px] text-stone-600 leading-tight flex-1">{item.desc}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom note box */}
                        <div
                            className="mt-3 w-full text-center rounded-md px-3 py-2"
                            style={{ backgroundColor: "rgba(210, 180, 120, 0.15)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
                        >
                            <p className="text-[10px] text-stone-600 leading-tight">
                                Avoid major activities on Saturday night and Sunday for best results.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Lucky Directions */}
                    <div
                        style={{
                            backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            padding: "16px 14px 14px",
                        }}
                        className="flex flex-col min-h-[225px]"
                    >
                        {/* Header row: badge + title/description */}
                        <div className="flex items-start gap-3 mb-2">
                            {/* Dark circle badge with compass icon */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#3a1a0a] border-2 border-[#c9a227] flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="9" stroke="#e8c96d" strokeWidth="1.4" />
                                    <circle cx="12" cy="12" r="1.5" fill="#e8c96d" />
                                    <line x1="12" y1="3" x2="12" y2="6" stroke="#e8c96d" strokeWidth="1.4" strokeLinecap="round" />
                                    <line x1="12" y1="18" x2="12" y2="21" stroke="#e8c96d" strokeWidth="1.4" strokeLinecap="round" />
                                    <line x1="3" y1="12" x2="6" y2="12" stroke="#e8c96d" strokeWidth="1.4" strokeLinecap="round" />
                                    <line x1="18" y1="12" x2="21" y2="12" stroke="#e8c96d" strokeWidth="1.4" strokeLinecap="round" />
                                    {/* Arrow pointing NE */}
                                    <polygon points="12,12 14.5,7 15.5,8.5" fill="#e8c96d" />
                                    <polygon points="12,12 9.5,17 8.5,15.5" fill="#e8c96d" opacity="0.5" />
                                </svg>
                            </div>
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[#6B1020] mb-0.5">5. LUCKY DIRECTIONS</span>
                                <p className="text-[9px] text-stone-500 leading-tight">
                                    These directions bring positive energy flow and business expansion.
                                </p>
                            </div>
                        </div>

                        {/* Compass + labels layout */}
                        <div className="relative flex items-center justify-center my-auto" style={{ height: "110px" }}>

                            {/* NW label */}
                            <div className="absolute text-left" style={{ left: "0px", top: "-20px", transform: "translateX(50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">NW</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Good for<br />Support</p>
                            </div>

                            {/* N label */}
                            <div className="absolute text-center" style={{ top: "0px", left: "50%", transform: "translateX(-50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">N</span>
                            </div>

                            {/* NE label */}
                            <div className="absolute text-right" style={{ right: "0px", top: "-25px", transform: "translateX(-50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">NE</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Excellent for<br />Growth</p>
                            </div>

                            {/* W label */}
                            <div className="absolute text-left" style={{ left: "0px", top: "50%", transform: "translateY(-50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">W —</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Good for<br />Stability</p>
                            </div>

                            {/* Central compass rose SVG */}
                            <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                                {/* Outer ring */}
                                <circle cx="36" cy="36" r="34" fill="none" stroke="#c9a227" strokeWidth="1" strokeDasharray="3,2" />
                                <circle cx="36" cy="36" r="26" fill="none" stroke="#c9a227" strokeWidth="0.5" />
                                {/* Compass star points */}
                                {/* N point */}
                                <polygon points="36,4 39,30 36,34 33,30" fill="#c9a227" />
                                {/* S point */}
                                <polygon points="36,68 39,42 36,38 33,42" fill="#d4b896" />
                                {/* E point */}
                                <polygon points="68,36 42,33 38,36 42,39" fill="#c9a227" />
                                {/* W point */}
                                <polygon points="4,36 30,33 34,36 30,39" fill="#d4b896" />
                                {/* NE point */}
                                <polygon points="62,10 41,32 38,29" fill="#c9a227" opacity="0.7" />
                                {/* SW point */}
                                <polygon points="10,62 31,40 34,43" fill="#c9a227" opacity="0.4" />
                                {/* NW point */}
                                <polygon points="10,10 32,31 29,34" fill="#c9a227" opacity="0.4" />
                                {/* SE point */}
                                <polygon points="62,62 40,41 43,38" fill="#c9a227" opacity="0.4" />
                                {/* Center circle */}
                                <circle cx="36" cy="36" r="5" fill="none" stroke="#c9a227" strokeWidth="1.2" />
                                <circle cx="36" cy="36" r="2" fill="#c9a227" />
                                {/* Cardinal tick marks */}
                                <line x1="36" y1="10" x2="36" y2="14" stroke="#c9a227" strokeWidth="1" />
                                <line x1="36" y1="58" x2="36" y2="62" stroke="#c9a227" strokeWidth="1" />
                                <line x1="10" y1="36" x2="14" y2="36" stroke="#c9a227" strokeWidth="1" />
                                <line x1="58" y1="36" x2="62" y2="36" stroke="#c9a227" strokeWidth="1" />
                            </svg>

                            {/* E label */}
                            <div className="absolute text-right" style={{ right: "0px", top: "50%", transform: "translateY(-50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">— E</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Excellent for<br />Success</p>
                            </div>

                            {/* SW label */}
                            <div className="absolute text-left" style={{ left: "0px", bottom: "0px", transform: "translateX(100%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">SW</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Good for<br />Planning</p>
                            </div>

                            {/* S label */}
                            <div className="absolute text-center" style={{ bottom: "-13px", left: "50%", transform: "translateX(-50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">S</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Good for<br />Recognition</p>
                            </div>

                            {/* SE label */}
                            <div className="absolute text-center" style={{ right: "0px", bottom: "0px", left: "75%", transform: "translateX(-50%)" }}>
                                <span className="font-bold text-[9px] text-stone-700">SE</span>
                                <p className="text-[7.5px] text-stone-500 leading-tight">Excellent for<br />Wealth</p>
                            </div>
                        </div>

                        {/* Bottom note box */}
                        <div
                            className="mt-2 w-full text-center rounded-md px-3 py-2"
                            style={{ backgroundColor: "rgba(210, 180, 120, 0.15)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
                        >
                            <p className="text-[10px] text-stone-600 leading-tight">
                                Face <span className="font-bold text-[#1a5e32]">North or East</span> while working for maximum positive energy.
                            </p>
                        </div>
                    </div>

                    {/* Card 6: Lucky Launch Dates */}
                    <div
                        style={{
                            backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            padding: "16px 14px 14px",
                        }}
                        className="flex flex-col min-h-[225px]"
                    >
                        {/* Header row: badge + title/description */}
                        <div className="flex items-start gap-3 mb-2.5">
                            {/* Dark circle badge with rocket icon */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#3a1a0a] border-2 border-[#c9a227] flex items-center justify-center">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C12 2 7 6 7 13l2 2 1-3 2 2 2-2 1 3 2-2c0-7-5-11-5-11z" stroke="#e8c96d" strokeWidth="1.3" strokeLinejoin="round" />
                                    <path d="M9 15l-2 3 3-1M15 15l2 3-3-1" stroke="#e8c96d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="10" r="1.5" fill="#e8c96d" />
                                </svg>
                            </div>
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[#6B1020] mb-0.5">6. LUCKY LAUNCH DATES</span>
                                <p className="text-[9px] text-stone-500 leading-tight">
                                    These periods are extremely favorable for launching your business or new projects.
                                </p>
                            </div>
                        </div>

                        {/* Period cards — two-tone style */}
                        <div className="flex flex-col gap-1">
                            {[
                                { label: "BEST PERIOD", value: "1st to 9th, 18th to 27th" },
                                { label: "EXCELLENT PERIOD", value: "Any date adding to 3, 6 or 9" },
                                { label: "AVOID PERIOD", value: "8th, 17th, 26th (High Risk Dates)" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded overflow-hidden"
                                    style={{ border: "1px solid #d4b87a" }}
                                >
                                    {/* Label row — cream */}
                                    <div
                                        className="text-center h-[15px] flex items-center justify-center"
                                        style={{ backgroundColor: "#f0e6cc" }}
                                    >
                                        <span className="font-bold text-[8px] tracking-widest text-[#6B1020] uppercase">
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Value row — white */}
                                    <div
                                        className="text-center h-[15px] flex items-center justify-center"
                                        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                                    >
                                        <span className="text-[9px] text-stone-700 font-medium">
                                            {item.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>



                        {/* Best Months */}
                        <div className="mt-0.5 w-full text-center">
                            <div
                                className="inline-block px-1 rounded mb-1"
                                style={{ border: "1px solid #d4b87a", backgroundColor: "rgba(255,255,255,0.5)" }}
                            >
                                <span className="text-[10px] font-bold text-stone-700">Best Months</span>
                            </div>
                            <p className="text-[10px] text-stone-600 leading-tight">
                                March, June, September, December<br />
                                <span className="text-[10px] text-stone-400">(Energy, Growth, Expansion)</span>
                            </p>
                        </div>
                    </div>

                </div>

                {/* ─── SECTION 7: LUCKY MOBILE NUMBERS ─── */}
                <section
                    className="w-full mx-auto -mt-3"
                    style={{
                        backgroundImage: "url('/assets/signaturePages/foooter-background.png')",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        padding: "16px 24px",
                    }}
                >
                    {/* Header */}
                    <div className="flex items-start gap-4">
                        {/* Phone Icon */}
                        <div className="w-[42px] h-[42px] rounded-full bg-[#5d0d12] border-[3px]  border-[#d8b36a] flex items-center justify-center shrink-0">
                            <svg
                                className="w-7 h-7 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <rect x="7" y="2" width="10" height="20" rx="2" />
                                <circle cx="12" cy="18" r="1" fill="currentColor" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-[14px] font-bold text-[#4A0E17] leading-none mt-2">
                                7. LUCKY MOBILE NUMBERS
                            </h3>

                            <p className="text-[12px] text-[#2b2b2b] font-medium mt-1">
                                These number patterns bring connectivity, opportunities and business
                                growth.
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-4">
                        {/* Best Numbers */}
                        <div className=" border-r border-[#e3c89c]">
                            <h4 className=" px-3 text-[14px] font-bold text-[#1f5d32] uppercase mb-2">
                                BEST NUMBERS
                            </h4>

                            <p className="text-[12px] px-3 text-[#2b2b2b] leading-5">
                                Choose mobile numbers
                                containing these numbers.
                            </p>

                            <div className="flex flex-wrap gap-0.5 mt-1">
                                {[3, 6, 9, 24, 41].map((n) => (
                                    <div
                                        key={n}
                                        className="w-7 h-7 rounded-full border-2 border-[#5a9c73] text-[#1f5d32]  flex items-center justify-center text-[12px] font-bold"
                                    >
                                        {n}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Good Patterns */}
                        <div className=" border-r border-[#e3c89c]">
                            <h4 className="text-[14px] px-3 font-bold text-[#a66a18] uppercase mb-2">
                                GOOD PATTERNS
                            </h4>

                            <p className="text-[12px] px-3 text-[#2b2b2b] leading-5">
                                These patterns are
                                highly supportive.
                            </p>

                            <div className="space-y-2 flex flex-col items-center">
                                {["36x xxxx xxx", "98x xxxx xxx"].map((item) => (
                                    <div
                                        key={item}
                                        className="border border-[#d8b36a] rounded-lg h-6 w-27 flex items-center justify-center text-[14px] font-semibold text-[#3f3f3f]"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=" border-r border-[#e3c89c]">
                            <h4 className=" px-3 text-[14px] font-bold text-red-600 uppercase mb-2">
                                AVOID NUMBERS
                            </h4>

                            <p className="text-[12px] px-3 text-[#2b2b2b] leading-5">
                                Avoid mobile numbers
                                containing these numbers.
                            </p>

                            <div className="flex flex-wrap gap-0.5 mt-1">
                                {[8, 17, 26, 35, 44].map((n) => (
                                    <div
                                        key={n}
                                        className="w-7 h-7 rounded-full border-2 border-red-600 text-red-600  flex items-center justify-center text-[12px] font-bold"
                                    >
                                        {n}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="px-2">
                            <h4 className="text-[14px] font-bold text-[#a66a18] uppercase mb-2 text-center">
                                TIPS
                            </h4>

                            <div className="space-y-2 text-[12px] text-[#2b2b2b]">
                                <div className="flex gap-1">
                                    <div className="w-5 h-5 rounded-full bg-[#a66a18] text-white flex items-center justify-center shrink-0">
                                        ✓
                                    </div>

                                    <p>
                                        Total of number should
                                        <br />
                                        be <span className="font-bold">3, 6 or 9</span>
                                    </p>
                                </div>

                                <div className="flex gap-1">
                                    <div className="w-5 h-5 rounded-full bg-[#a66a18] text-white flex items-center justify-center shrink-0">
                                        ✓
                                    </div>

                                    <p>
                                        More 3s, 6s or 9s bring
                                        <br />
                                        stronger results
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 8: TROPHY & MOTIVATION CALLOUT ─── */}
                <section
                    className="w-full mx-auto -mt-3"
                    style={{
                        backgroundImage: "url('/assets/signaturePages/foooter-background.png')",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        padding: "16px 24px",
                    }}
                >
                    <div className="flex items-center gap-5">
                        <div className="flex-shrink-0  p-2 ">
                            <Image
                                src="/assets/signaturePages/trophy.png"
                                alt="Trophy Banner"
                                width={52}
                                height={52}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-[13px] leading-relaxed text-stone-700 font-medium">
                                Using these lucky elements in your business strategy, branding and daily operations will help you attract positive energy, wealth, opportunities and long-term success.
                            </p>
                            <p className="text-[12px] uppercase tracking-wider font-bold text-[#8B1A2E] mt-1.5">
                                CONSISTENCY IN USING LUCKY ELEMENTS CREATES EXTRAORDINARY RESULTS.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </BusinessNameReportPageShell>
    );
}