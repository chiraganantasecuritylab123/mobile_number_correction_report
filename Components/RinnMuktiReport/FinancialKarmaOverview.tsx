"use client";

import Image from "next/image";
import { Globe, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import FinancialKarmaScore from "./FinancialKarmaScore";
import HeaderCommun from "./HeaderCommun";

const ASSETS = {
    cover: "/assets/cover-bg.png",
    pattern2: "/assets/cover/pattern-2.png",
    nameBorder: "/assets/signaturePages/nameImageBorder.png",
} as const;

export type FinancialKarmaOverviewProps = {
    karmaScore?: number;
    language?: "en" | "hi";
    // English content
    overallSummary?: string;
    currentFinancialVibration?: string;
    majorCausesOfBlockage?: string;
    debtRepaymentPotential?: string;
    wealthAttractionCapacity?: string;
    // Hindi content
    overallSummaryHi?: string;
    currentFinancialVibrationHi?: string;
    majorCausesOfBlockageHi?: string;
    debtRepaymentPotentialHi?: string;
    wealthAttractionCapacityHi?: string;
};

// ─── Page Frame ────────────────────────────────────────────────────────────────

function SignaturePageFrame({
    children,
    pageLabel,
    pageNumber,
}: {
    children?: ReactNode;
    pageLabel: string;
    pageNumber: string;
}) {
    return (
        <article
            data-report-page
            data-page-label={pageLabel}
            data-report-page-number={pageNumber}
            className="relative mx-auto overflow-hidden shadow-xl"
            style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
        >
            <Image
                src={ASSETS.cover}
                alt=""
                fill
                sizes={`${PAGE_WIDTH}px`}
                className="pointer-events-none select-none object-fill"
                priority
                aria-hidden
            />
            <div className="relative z-10 h-full">{children}</div>
        </article>
    );
}

// ─── Instagram Icon ────────────────────────────────────────────────────────────

function InstagramIcon({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
            stroke="var(--cover-gold-light)" strokeWidth="1.8" aria-hidden>
            <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
            <circle cx="12" cy="12" r="3.5" />
            <circle cx="17.2" cy="6.8" r="0.8" fill="var(--cover-gold-light)" stroke="none" />
        </svg>
    );
}


// ─── Debt Severity Row ─────────────────────────────────────────────────────────

type SeverityLevel = {
    level: string;
    levelHi: string;
    description: string;
    descriptionHi: string;
    iconColor: string;
    borderColor: string;
    labelColor: string;
    icon: ReactNode;
};

function SeverityRow({
    item,
    active,
    language = "en",
}: {
    item: SeverityLevel;
    active?: boolean;
    language?: string;
}) {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 16px",
                borderRadius: 8,
                border: `1.5px solid ${item.borderColor}`,
                overflow: "hidden",
            }}
            className="font-nunito-sans"
        >
            {/* Gold highlight for active row */}
            {active && (
                <>
                    <div
                        style={{
                            position: "absolute",
                            inset: 3,
                            border: "1px solid #d79c2c",
                            borderRadius: 6,
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: -2,
                            top: 10,
                            bottom: 10,
                            width: 5,
                            background: "#d79c2c",
                            borderRadius: 10,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            right: -2,
                            top: 10,
                            bottom: 10,
                            width: 5,
                            background: "#d79c2c",
                            borderRadius: 10,
                        }}
                    />
                </>
            )}

            {/* Icon */}
            <div
                style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: item.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "3px solid #ffffff",
                    boxShadow:
                        "0 0 0 1px rgba(0,0,0,0.12), inset 0 2px 4px rgba(255,255,255,0.3)",
                }}
            >
                {item.icon}
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
                <div
                    className="font-nunito-sans"
                    style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: item.labelColor,
                        lineHeight: 1,
                    }}
                >
                    {language === "en" ? item.level : item.levelHi}
                </div>

                <div
                    className="font-nunito-sans"
                    style={{
                        fontSize: 14,
                        lineHeight: 1.35,
                        color: "#3f2d12",
                        maxWidth: 300,
                    }}
                >
                    {language === "en" ? item.description : item.descriptionHi}
                </div>
            </div>
        </div>
    );
}

// ─── Key Finding Card ──────────────────────────────────────────────────────────

function FindingCard({
    iconBg,
    icon,
    title,
    titleHi,
    description,
    descriptionHi,
    language = "en",
}: {
    iconBg: string;
    icon: React.ReactNode;
    title: string;
    titleHi: string;
    description: string;
    descriptionHi: string;
    language?: string;
}) {
    return (
        <div
            style={{
                border: "1.5px solid #d3a15d",
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                gap: 14,
                alignItems: "center",
                minHeight: 122,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
            className="font-nunito-sans"
        >
            {/* Icon */}
            <div
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "3px solid rgba(255,255,255,0.9)",
                    boxShadow:
                        "0 0 0 1px rgba(184,134,11,0.35), inset 0 3px 8px rgba(255,255,255,0.25)",
                }}
            >
                {icon}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                <h3
                    className="font-nunito-sans"
                    style={{
                        fontWeight: 700,
                        fontSize: 13,
                        lineHeight: 1.15,
                        color: "#4b3210",
                        margin: 0,
                    }}
                >
                    {language === "en" ? title : titleHi}
                </h3>

                <p
                    className="font-nunito-sans"
                    style={{
                        fontSize: 13,
                        lineHeight: 1.45,
                        color: "#3b2a12",
                        margin: 0,
                    }}
                >
                    {language === "en" ? description : descriptionHi}
                </p>
            </div>
        </div>
    );
}

// ─── SVG Icons ─────────────────────────────────────────────────────────────────

function ShieldIcon({ color = "#fff" }: { color?: string }) {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M10 1L2 4.5V10C2 15 5.5 19.5 10 21C14.5 19.5 18 15 18 10V4.5L10 1Z"
                fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M6 11L9 14L14 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function MinusCircleIcon({ color = "#fff" }: { color?: string }) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.8" />
            <line x1="6" y1="10" x2="14" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function ExclamationIcon({ color = "#fff" }: { color?: string }) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.8" />
            <line x1="10" y1="6" x2="10" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="10" cy="14" r="1" fill={color} />
        </svg>
    );
}

function TriangleWarnIcon({ color = "#fff" }: { color?: string }) {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path d="M11 2L20 18H2L11 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
            <line x1="11" y1="8" x2="11" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="11" cy="15.5" r="1" fill={color} />
        </svg>
    );
}

// Trend up icon for Financial Vibration
function TrendUpIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
            <rect x="3" y="16" width="4" height="7" fill="#ffd700" rx="1" />
            <rect x="9" y="11" width="4" height="12" fill="#ffd700" rx="1" />
            <rect x="15" y="7" width="4" height="16" fill="#ffd700" rx="1" />
        </svg>
    );
}

// Chain/link icon for blockage
function ChainIcon() {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M10 16L8 18C6.5 19.5 4 19.5 2.5 18C1 16.5 1 14 2.5 12.5L6 9C7.5 7.5 10 7.5 11.5 9L12 9.5"
                stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 10L18 8C19.5 6.5 22 6.5 23.5 8C25 9.5 25 12 23.5 13.5L20 17C18.5 18.5 16 18.5 14.5 17L14 16.5"
                stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <line x1="9" y1="17" x2="17" y2="9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// Rupee hand icon for debt repayment
function RupeeHandIcon() {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="10" r="7" fill="none" stroke="#ffd700" strokeWidth="1.8" />
            <text x="13" y="14" textAnchor="middle" fill="#ffd700" fontSize="10" fontWeight="700">₹</text>
            <path d="M4 22C4 19 7 17 10 17H16C19 17 22 19 22 22" stroke="#ffd700" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function LotusRupeeIcon({ className, size = 46 }: { className?: string; size?: number }) {
    return (
        <Image
            src="/assets/cover/lotus.png"
            alt=""
            width={size}
            height={Math.round(size * 0.58)}
            className={`object-contain opacity-80 ${className ?? ""}`}
            aria-hidden
        />
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function FinancialKarmaOverview({
    karmaScore = 78,
    language = "en",
    // English content
    overallSummary = "Your horoscope indicates a moderate financial karmic burden with strong potential for improvement through disciplined financial decisions and karmic balancing. While certain planetary influences may create recurring debt cycles or delays in wealth accumulation, supportive wealth yogas provide opportunities for long-term financial growth. By understanding these patterns and applying the recommended remedies, you can gradually reduce financial obstacles and strengthen your prosperity potential.",
    currentFinancialVibration = "Current financial energy based on your horoscope and karmic balance.",
    majorCausesOfBlockage = "Primary planetary combinations and karmic factors affecting income and wealth accumulation.",
    debtRepaymentPotential = "Your natural ability to repay loans, recover from financial setbacks, and regain stability.",
    wealthAttractionCapacity = "Your potential to attract prosperity, financial opportunities, and long-term abundance.",
    // Hindi content
    overallSummaryHi = "आपकी कुंडली में मध्यम स्तर का वित्तीय कर्म दिखाई देता है, जिसमें आर्थिक प्रगति की अच्छी संभावनाएँ मौजूद हैं। कुछ ग्रह स्थितियों समय-समय पर ऋण, धन हानि या आर्थिक विलंब का कारण बन सकती हैं, जबकि अन्य शुभ योग भविष्य में आर्थिक स्थिति एवं समृद्धि प्रदान करने की क्षमता रखते हैं। उचित वित्तीय अनुशासन एवं सुशासन एवं उपायों का पालन करने से आप धीरे-धीरे आर्थिक बाधाओं को कम कर सकते हैं तथा धन आकर्षण की शक्ति को बढ़ा सकते हैं।",
    currentFinancialVibrationHi = "आपकी वर्तमान आर्थिक स्थिति एवं धन प्रवाह की समग्र ऊर्जा।",
    majorCausesOfBlockageHi = "वे ग्रह, योग एवं कर्म जो धन संचित और आय में रुकावट उत्पन्न कर रहे हैं।",
    debtRepaymentPotentialHi = "ऋण से बाहर निकलने, आर्थिक संतुलन बनाने एवं वित्तीय पुनःस्थापना की संभावनाएँ।",
    wealthAttractionCapacityHi = "समृद्धि, धन के अवसर एवं दीर्घकालीन आर्थिक सफलता को आकर्षित करने की आपकी प्राकृतिक क्षमता।",
}: FinancialKarmaOverviewProps) {

    const severityLevels: SeverityLevel[] = [
        {
            level: "LOW",
            levelHi: "कम (Low)",
            description: "Financial flow is generally stable.",
            descriptionHi: "आपकी आर्थिक स्थिति सामान्यतः संतुलित है और ऋण का प्रभाव कम है।",
            iconColor: "#2e7d32",
            borderColor: "#2e7d32",
            labelColor: "#2e7d32",
            icon: <ShieldIcon />,
        },
        {
            level: "MODERATE",
            levelHi: "मध्यम (Moderate)",
            description: "Occasional debt cycles may occur.",
            descriptionHi: "समय-समय पर आर्थिक दबाव या ऋण की स्थिति बन सकती है।",
            iconColor: "#c8960c",
            borderColor: "#c8960c",
            labelColor: "#c8960c",
            icon: <MinusCircleIcon />,
        },
        {
            level: "HIGH",
            levelHi: "उच्च (High)",
            description: "Significant repayment challenges are indicated.",
            descriptionHi: "ऋण चुनाव में कठिनाइयों एवं वित्तीय बाधाएँ स्पष्ट रूप से दिखाई देती हैं।",
            iconColor: "#d84315",
            borderColor: "#d84315",
            labelColor: "#d84315",
            icon: <ExclamationIcon />,
        },
        {
            level: "SEVERE",
            levelHi: "अत्यधिक (Severe)",
            description: "Strong karmic debts requiring conscious remedies.",
            descriptionHi: "प्रबल ऋण कर्म एवं आर्थिक अवरोध मौजूद हैं, जिनके लिए उचित उपाय आवश्यक हैं।",
            iconColor: "#b71c1c",
            borderColor: "#b71c1c",
            labelColor: "#b71c1c",
            icon: <TriangleWarnIcon />,
        },
    ];

    return (
        <SignaturePageFrame pageLabel="financial-karma-overview" pageNumber="02">
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    padding: "28px 36px 20px",
                    gap: 18,
                
                }}
                className="font-nunito-sans"
            >
                <HeaderCommun
                    reportName={language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"}
                    title={language === "en" ? "FINANCIAL KARMA OVERVIEW" : "वित्तीय कर्म विश्लेषण"}
                    description={language === "en" ? "Your Current Financial Energy at a Glance" : "आपकी वर्तमान आर्थिक ऊर्जा एक नज़र में"}
                />

                {/* ── MAIN CONTENT: Gauge + Severity ── */}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flex: "0 0 auto" }}>
                    {/* LEFT: Gauge */}
                    <div style={{ display: "flex", justifyContent: "center", flex: "0 0 260px" }}>
                        <FinancialKarmaScore value={karmaScore} language={language} />
                    </div>

                    {/* RIGHT: Debt Severity */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
                        <p className="font-nunito-sans" style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#4a0e0e",
                            letterSpacing: "0.1em",
                            textAlign: "center",
                        }}>
                            {language === "en" ? "FINANCIAL DEBT SEVERITY" : "वित्तीय ऋण गंभीरता"}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            {severityLevels.map((item) => (
                                <SeverityRow key={item.level} item={item} language={language} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── KEY FINDINGS HEADER ── */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <div>
                        <p className="font-nunito-sans" style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#4a0e0e",
                            letterSpacing: "0.12em",
                        }}>
                            {language === "en" ? "KEY FINDINGS" : "मुख्य निष्कर्ष"}
                        </p>
                    </div>
                </div>

                {/* ── KEY FINDINGS GRID ── */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <FindingCard
                        iconBg="#2e7d32"
                        icon={<TrendUpIcon />}
                        title="CURRENT FINANCIAL VIBRATION"
                        titleHi="वर्तमान आर्थिक ऊर्जा"
                        description={currentFinancialVibration}
                        descriptionHi={currentFinancialVibrationHi}
                        language={language}
                    />
                    <FindingCard
                        iconBg="#7b4f1e"
                        icon={<ChainIcon />}
                        title="MAJOR CAUSES OF FINANCIAL BLOCKAGE"
                        titleHi="आर्थिक बाधाओं के प्रमुख कारण"
                        description={majorCausesOfBlockage}
                        descriptionHi={majorCausesOfBlockageHi}
                        language={language}
                    />
                    <FindingCard
                        iconBg="#1a3a6b"
                        icon={<RupeeHandIcon />}
                        title="DEBT REPAYMENT POTENTIAL"
                        titleHi="ऋण चुकाव की क्षमता"
                        description={debtRepaymentPotential}
                        descriptionHi={debtRepaymentPotentialHi}
                        language={language}
                    />
                    <FindingCard
                        iconBg="#4a1a6b"
                        icon={<LotusRupeeIcon />}
                        title="WEALTH ATTRACTION CAPACITY"
                        titleHi="धन आकर्षित करने की क्षमता"
                        description={wealthAttractionCapacity}
                        descriptionHi={wealthAttractionCapacityHi}
                        language={language}
                    />
                </div>

                {/* ── OVERALL SUMMARY ── */}
                <div
                    style={{
                        position: "relative",
                        padding: "18px 24px",
                        display: "flex",
                        gap: 18,
                        alignItems: "center",
                        backgroundImage:
                            "url('/assets/signaturePages/foooter-background.png')",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        minHeight: 155,
                    }}
                    className="font-nunito-sans"
                >
                    {/* Left Image */}
                    <div
                        style={{
                            width: 140,
                            height: 140,
                            flexShrink: 0,
                            backgroundImage: "url('/assets/signaturePages/rupeetree.png')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    {/* Content */}
                    <div
                        style={{
                            flex: 1,
                            paddingRight: 18,
                        }}
                    >
                        <h3
                            className="font-nunito-sans"
                            style={{
                                fontWeight: 700,
                                fontSize: 12,
                                color: "#3f2208",
                                textAlign: "center",
                                margin: "0 0 12px",
                                letterSpacing: "0.03em",
                            }}
                        >
                            {language === "en" ? "OVERALL SUMMARY" : "समग्र विश्लेषण"}
                        </h3>

                        <p
                            className="font-nunito-sans"
                            style={{
                                fontSize: 11.5,
                                lineHeight: 1.55,
                                color: "#3a2800",
                                textAlign: "justify",
                                margin: 0,
                            }}
                        >
                            {language === "en" ? overallSummary : overallSummaryHi}
                        </p>
                    </div>
                </div>

                {/* ── FOOTER ── */}
                <div className="font-nunito-sans" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 28,
                    color: "var(--cover-gray)",
                    fontSize: 13,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Globe size={18} strokeWidth={1.8} style={{ color: "var(--cover-gold-light)" }} />
                        <span>www.astroaarambh.com</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Phone size={18} strokeWidth={1.8} style={{ color: "var(--cover-gold-light)" }} />
                        <span>7405923555</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <InstagramIcon size={18} />
                        <span>astroaarambhofficial</span>
                    </div>
                </div>
            </div>
        </SignaturePageFrame>
    );
}