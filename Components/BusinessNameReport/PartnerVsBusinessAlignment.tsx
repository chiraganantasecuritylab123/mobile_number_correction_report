// PartnerVsBusinessAlignmentPage.tsx
import Image from "next/image";
import {
    CheckCircle2,
    AlertCircle,
    XCircle,
    UserRound,
    Users,
    BadgeIndianRupee,
    Zap,
} from "lucide-react";

import BusinessNameReportPageShell from "./BusinessNameReportPageShell";
import {
    BusinessReportHeader,
    BusinessReportFooter,
} from "./BusinessReportCommon";
import { REPORT_COLORS } from "../ReportPageShell";
import { CoverLotus } from "../CommunComponents";

const COLORS = {
    maroon: "#4A0F0F",
    gold: "#B8860B",
    green: "#147A3D",
    cream: "#fdf5e6",
    white: "#ffffff",
    brown: "#5d2e17",
    goldlight: "#d4af37",
};

// ─── SECTION TITLE ────────────────────────────────────────────────────────────
// function SectionTitle() {
//     return (
//         <div className="flex justify-center mt-4">
//             <div className="flex items-center">
//                 <div
//                     className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[34px] font-bold"
//                     style={{
//                         background: `linear-gradient(180deg, ${COLORS.maroon}, #7d2424)`,
//                         border: `4px solid ${COLORS.gold}`,
//                     }}
//                 >
//                     05
//                 </div>

//                 <div
//                     className="relative flex items-center justify-center mx-auto"
//                     style={{
//                         width: "460px",
//                         height: "75px",
//                         backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
//                         backgroundSize: "100% 100%",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: "center",
//                     }}
//                 >
//                     <h2
//                         className="text-center font-bold tracking-[0.03em] leading-none"
//                         style={{ color: COLORS.maroon, fontSize: "22px" }}
//                     >
//                         PARTNER VS BUSINESS ALIGNMENT
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     );
// }

function SectionTitle() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative">
        <Image src='/assets/business-name-report/top-effect.png' alt="Client" width={400} height={50} />
        <div className="absolute top-[50%] transform -translate-y-1/2 left-16 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[22px] font-bold text-white">
          5
        </div>
        <h2 className="absolute top-[50%] transform -translate-y-1/2 right-12 shrink-0 text-center text-[11px] font-bold tracking-[0.08em]"
          style={{ color: COLORS.brown }}
        >
         PARTNER VS BUSINESS ALIGNMENT
        </h2>
      </div>
    </div>
  );
}

// ─── COMPATIBILITY TABLE ──────────────────────────────────────────────────────
type PartnerOverlayProps = {
    top: string;
    name: string;
    traits: string;
    score: number;
    result: string;
};

function PartnerOverlay({ top, name, traits, score, result }: PartnerOverlayProps) {
    return (
        <>
            <div
                className="absolute mt-6 font-nunito-sans"
                style={{ left: "15%", top, transform: "translateY(-50%)" }}
            >
                <h3 style={{ color: "#4A0D0D", fontSize: "18px", fontWeight: 700, lineHeight: 1, margin: 0 }}>
                    {name}
                </h3>
                <p style={{ color: "#4f4f4f", fontSize: "14px", marginTop: "7px", lineHeight: 1.2 }}>
                    {traits}
                </p>
            </div>

            <div
                className="absolute mt-4"
                style={{ left: "43%", width: "30%", top, transform: "translateY(-50%)" }}
            >
                <div style={{ height: "12px", background: "#edd8b5", borderRadius: "999px", position: "relative" }}>
                    <div
                        style={{
                            width: `${score}%`,
                            height: "100%",
                            borderRadius: "999px",
                            background: "linear-gradient(90deg,#B67B00,#D39A21,#C88A06)",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: `calc(${score}% - 4px)`,
                            top: "50%",
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "#fff",
                            border: "1px solid #c98a10",
                            transform: "translateY(-50%)",
                        }}
                    />
                </div>
            </div>

            <div
                className="absolute text-center mt-6"
                style={{ left: "86.5%", width: "90px", top, transform: "translate(-50%, -50%)" }}
            >
                <div style={{ color: "#4A0D0D", fontSize: "26px", fontWeight: 700, lineHeight: 1 }}>
                    {score}%
                </div>
                <div
                    style={{
                        color: "#17703c",
                        fontSize: result === "VERY GOOD" ? "10px" : "11px",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginTop: "2px",
                    }}
                >
                    {result}
                </div>
            </div>
        </>
    );
}

function CompatibilityTable() {
    return (
        <section className="relative">
            <div className="relative w-full">
                <Image
                    src="/assets/signaturePages/BusinessTable.png"
                    alt="Business Table"
                    width={1200}
                    height={350}
                    className="w-full h-auto block"
                />
                <div
                    className="absolute text-white font-bold"
                    style={{ top: "10%", left: "22%", transform: "translateX(-50%)", fontSize: "12px", letterSpacing: "0.05em" }}
                >
                    PARTNER
                </div>
                <div
                    className="absolute text-white font-bold"
                    style={{ top: "10%", left: "87%", transform: "translateX(-50%)", fontSize: "12px" }}
                >
                    MATCH SCORE
                </div>
                <PartnerOverlay top="24%" score={92} result="EXCELLENT" name="PARTNER 1" traits="Leadership • Vision • Responsibility" />
                <PartnerOverlay top="50%" score={78} result="GOOD" name="PARTNER 2" traits="Creativity • Strategy • Execution" />
                <PartnerOverlay top="76%" score={84} result="VERY GOOD" name="PARTNER 3" traits="Finance • Operations • Growth" />
            </div>
        </section>
    );
}

// ─── INSIGHTS SECTION ─────────────────────────────────────────────────────────
type InsightStatus = "success" | "warning" | "error";

type InsightRowData = {
    iconBg: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    status: InsightStatus;
    resultText: string;
};

const insightRows: InsightRowData[] = [
    {
        iconBg: "#0f7a39",
        icon: <Users size={24} color="#fff" strokeWidth={1.8} />,
        title: "IS BUSINESS SUPPORTING PARTNER ENERGIES?",
        subtitle: "How well the business name aligns with the collective partner energies.",
        status: "success",
        resultText: "Yes, the business name strongly supports overall partner energies.",
    },
    {
        iconBg: "#0f5ea8",
        icon: <UserRound size={24} color="#fff" strokeWidth={1.8} />,
        title: "IS NAME HELPING LEADERSHIP?",
        subtitle: "How well the name empowers leadership and decision-making abilities.",
        status: "success",
        resultText: "Yes, the name enhances leadership qualities and decision-making power.",
    },
    {
        iconBg: "#B8860B",
        icon: <BadgeIndianRupee size={24} color="#fff" strokeWidth={1.8} />,
        title: "IS NAME SUPPORTING FINANCES?",
        subtitle: "How well the name attracts financial stability and abundance.",
        status: "warning",
        resultText: "Moderate support. Strengthen financial vibrations for greater attraction and flow.",
    },
    {
        iconBg: "#C42020",
        icon: <Zap size={24} color="#fff" strokeWidth={1.8} />,
        title: "IS NAME CREATING CONFLICTS?",
        subtitle: "Any energetic clashes or conflicts within the partnership.",
        status: "error",
        resultText: "Yes, minor conflicts detected. Align energies to reduce friction and improve harmony.",
    },
];

function StatusIcon({ status }: { status: InsightStatus }) {
    if (status === "success") return <CheckCircle2 size={34} color="#0f7a39" strokeWidth={1.8} />;
    if (status === "warning") return <AlertCircle size={34} color="#B8860B" strokeWidth={1.8} />;
    return <XCircle size={34} color="#C42020" strokeWidth={1.8} />;
}

// Row centres sit at 12.5%, 37.5%, 62.5%, 87.5% of the image height
// (image has 4 equal-height rows, each 25% tall)
const ROW_TOPS = ["12.5%", "37.5%", "62.5%", "87.5%"];

function InsightsSection() {
    return (
        <section className="font-nunito-sans">

            {/* Heading with ornament lines */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <div style={{ flex: 1, height: "1px", opacity: 0.6 }} />
                <h2
                    style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        color: COLORS.maroon,
                        lineHeight: 1,
                    }}
                >
                    INSIGHTS
                </h2>
                <div style={{ flex: 1, height: "1px", opacity: 0.6 }} />
            </div>

            {/* Image as layout base — content rows sit on top via absolute positioning */}
            <div style={{ position: "relative", width: "100%" }}>

                {/* Background table image — drives natural height */}
                <Image
                    src="/assets/signaturePages/insight.png"
                    alt="Insights Table"
                    width={1200}
                    height={520}
                    className="w-full h-[320px] block"
                />

                {/* Overlay each row at its natural vertical centre */}
                {insightRows.map((row, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: ROW_TOPS[i],
                            left: 0,
                            width: "100%",
                            transform: "translateY(-50%)",
                            display: "grid",
                            gridTemplateColumns: "1.55fr 1fr",
                            alignItems: "center",
                            padding: "4.5%",
                        }}
                    >
                        {/* LEFT — coloured circle + title + subtitle */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                paddingRight: "4%",
                            }}

                            className="mt-2"
                        >
                            <div
                                style={{
                                    width: "38px",
                                    height: "38px",
                                    minWidth: "38px",
                                    borderRadius: "50%",
                                    background: row.iconBg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {row.icon}
                            </div>

                            <div>
                                <p
                                    style={{
                                        fontSize: "12.5px",
                                        fontWeight: 700,
                                        color: COLORS.maroon,
                                        margin: "0 0 4px",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.3px",
                                        lineHeight: 1.25,
                                        maxWidth: "260px", // adjust as needed
                                        whiteSpace: "normal",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {row.title}
                                </p>
                                <p
                                    style={{
                                        fontSize: "11px",
                                        color: "#555",
                                        margin: 0,
                                        lineHeight: 1.25,
                                        maxWidth: "260px",
                                        whiteSpace: "normal",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {row.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT — status icon + result text */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                paddingLeft: "2%",
                                marginRight: "10%"
                            }}
                        >
                            <div style={{ flexShrink: 0 }}>
                                <StatusIcon status={row.status} />
                            </div>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "#333",
                                    margin: 0,
                                    lineHeight: 1.45,
                                }}
                            >
                                {row.resultText}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PartnerVsBusinessAlignmentPage() {
    return (
        <BusinessNameReportPageShell pageNumber="05" padding="18px 30px">
            <BusinessReportHeader
                subtitle="BUSINESS NAME OPTIMIZATION REPORT"
                subtitle2="PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS"
            />

            <SectionTitle />

            <p
                className="text-center  text-[18px] font-nunito-sans px-18"
                style={{ color: "#333" }}
            >
                Compatibility analysis between your business vibration and your partners' personal vibrations.
            </p>

            <CompatibilityTable />

            <InsightsSection />

            <div
                className=" flex items-center justify-center gap-4 px-8 "
                style={{
                    backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
                    backgroundSize: "100% 70%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "80px",
                }}
            >
                <div className="flex-shrink-0">
                    <CoverLotus size={60} />
                </div>

                <p
                    className="italic font-semibold text-center leading-relaxed font-nunito-sans"
                    style={{
                        color: COLORS.maroon,
                        fontSize: "14px",
                        maxWidth: "650px",
                    }}
                >
                    A well-aligned name creates harmony, maximizes strengths, and unlocks the
                    true potential of your partnership.
                </p>
            </div>

            <BusinessReportFooter pageNumber="05" />
        </BusinessNameReportPageShell>
    );
}