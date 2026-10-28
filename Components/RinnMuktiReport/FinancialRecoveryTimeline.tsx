"use client";

import { Globe, Phone } from "lucide-react";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";
import HeaderCommun from "./HeaderCommun";
import type { ReactNode } from "react";

const ASTRO = {
  parchment: "#F8EEDC",
  maroon:    "#3a0a0a",
  gold:      "#B8860B",
  goldLight: "#c8960c",
  body:      "#2a1a00",
  border:    "#C89A2B",
  tableHeader: "#c8960c",
  rowAlt:    "rgba(253,246,232,0.85)",
  rowNorm:   "rgba(255,252,244,0.6)",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────────

export type OutlookType = "challenging" | "stable" | "growth";

export type MonthRow = {
  month: string;
  monthHi?: string;
  outlook: OutlookType;
  outlookLabel: string;
  outlookLabelHi?: string;
  highlight: string;
  highlightHi?: string;
};

export type SummaryCard = {
  icon: ReactNode;
  title: string;
  titleHi?: string;
  dates: string;
  datesHi?: string;
  description: string;
  descriptionHi?: string;
  iconBg: string;
  borderColor: string;
};

export type FinancialRecoveryTimelineProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  subtitle?: string;
  subtitleHi?: string;
  forecastBannerTitle?: string;
  forecastBannerTitleHi?: string;
  forecastText?: string;
  forecastTextHi?: string;
  months?: MonthRow[];
  summaryCards?: SummaryCard[];
  disclaimerText?: string;
  disclaimerTextHi?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

// ─── Page Ornaments ────────────────────────────────────────────────────────────

function PageOrnamentalFrame() {
  return (
    <>
      <CornerFlourish className="pointer-events-none absolute left-[10px] top-[10px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[10px] top-[10px] h-[52px] w-[52px] -scale-x-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] left-[10px] h-[52px] w-[52px] -scale-y-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] right-[10px] h-[52px] w-[52px] scale-[-1]" />
    </>
  );
}

// ─── Compass Star ─────────────────────────────────────────────────────────────

function CompassStar({ size = 34 }: { size?: number }) {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {[0,90,180,270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={deg}
          x1={c + c * 0.94 * Math.cos(rad)} y1={c + c * 0.94 * Math.sin(rad)}
          x2={c - c * 0.94 * Math.cos(rad)} y2={c - c * 0.94 * Math.sin(rad)}
          stroke={ASTRO.gold} strokeWidth="1.8"/>;
      })}
      {[45,135,225,315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={deg}
          x1={c + c * 0.65 * Math.cos(rad)} y1={c + c * 0.65 * Math.sin(rad)}
          x2={c - c * 0.65 * Math.cos(rad)} y2={c - c * 0.65 * Math.sin(rad)}
          stroke={ASTRO.gold} strokeWidth="1.1" opacity="0.7"/>;
      })}
      <circle cx={c} cy={c} r={c * 0.2} fill={ASTRO.gold}/>
      <circle cx={c} cy={c} r={c * 0.42} fill="none" stroke={ASTRO.gold} strokeWidth="0.8" opacity="0.5"/>
    </svg>
  );
}

// ─── Ribbon Badge ─────────────────────────────────────────────────────────────



// ─── Pen Circle ───────────────────────────────────────────────────────────────

function PenCircle({ size = 54 }: { size?: number }) {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={c} cy={c} r={c - 2} fill="none" stroke={ASTRO.gold} strokeWidth="1.6"/>
      <circle cx={c} cy={c} r={c - 7} fill="none" stroke={ASTRO.gold} strokeWidth="0.7" opacity="0.5"/>
      <path d={`M${c-3} ${c+10} L${c} ${c-12} L${c+3} ${c+10} Z`} fill={ASTRO.maroon} stroke={ASTRO.gold} strokeWidth="0.8"/>
      <path d={`M${c-3} ${c+10} L${c} ${c+16} L${c+3} ${c+10} Z`} fill={ASTRO.gold}/>
      <path d={`M${c} ${c-12} L${c+3} ${c+10}`} stroke={ASTRO.goldLight} strokeWidth="0.8" opacity="0.7"/>
    </svg>
  );
}

// ─── Dark Banner ─────────────────────────────────────────────────────────────

function DarkBanner({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
      {/* left diamond */}
      <svg width="18" height="14" viewBox="0 0 18 14">
        <polygon points="0,7 9,0 18,7 9,14" fill={ASTRO.gold} opacity="0.8"/>
      </svg>
      <div style={{
        backgroundColor: ASTRO.maroon,
        border: `1.5px solid ${ASTRO.gold}`,
        borderRadius: 4,
        padding: "5px 28px",
      }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "0.12em", margin: 0 }}>
          {children}
        </p>
      </div>
      {/* right diamond */}
      <svg width="18" height="14" viewBox="0 0 18 14">
        <polygon points="0,7 9,0 18,7 9,14" fill={ASTRO.gold} opacity="0.8"/>
      </svg>
    </div>
  );
}

// ─── Outlook Icons ────────────────────────────────────────────────────────────

function ChallengeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" fill="#c0392b"/>
      <polygon points="11,6 14,16 11,14 8,16" fill="#fff"/>
    </svg>
  );
}

// ─── Calendar Clock Icon (for forecast box) ───────────────────────────────────

function StableIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" fill="#c8960c"/>
      <line x1="6" y1="11" x2="16" y2="11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" fill="#2e7d32"/>
      <polygon points="11,16 8,6 11,8 14,6" fill="#fff"/>
    </svg>
  );
}

function OutlookIcon({ type }: { type: OutlookType }) {
  if (type === "challenging") return <ChallengeIcon />;
  if (type === "stable") return <StableIcon />;
  return <GrowthIcon />;
}

function CalendarClockBig() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* outer glow ring */}
      <circle cx="26" cy="26" r="25" fill="none" stroke={ASTRO.gold} strokeWidth="1" opacity="0.4"/>
      <circle cx="26" cy="26" r="22" fill={ASTRO.maroon}/>
      <circle cx="26" cy="26" r="22" fill="none" stroke={ASTRO.gold} strokeWidth="1.5"/>
      {/* calendar */}
      <rect x="12" y="14" width="18" height="16" rx="2" fill="none" stroke={ASTRO.gold} strokeWidth="1.5"/>
      <line x1="12" y1="20" x2="30" y2="20" stroke={ASTRO.gold} strokeWidth="1.2"/>
      <line x1="17" y1="10" x2="17" y2="17" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="25" y1="10" x2="25" y2="17" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="17" cy="25" r="1" fill={ASTRO.gold}/>
      <circle cx="21" cy="25" r="1" fill={ASTRO.gold}/>
      {/* clock overlay */}
      <circle cx="34" cy="34" r="10" fill={ASTRO.maroon} stroke={ASTRO.gold} strokeWidth="1.5"/>
      <line x1="34" y1="29" x2="34" y2="34" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="34" y1="34" x2="38" y2="37" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="34" cy="34" r="1.5" fill={ASTRO.gold}/>
    </svg>
  );
}

// ─── Lotus ────────────────────────────────────────────────────────────────────

function LotusIcon({ size = 52 }: { size?: number }) {
  const s = size / 70;
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 70 49" fill="none">
      <path d="M35 45 C35 33 20 25 5 22 C17 28 26 35 35 45" stroke={ASTRO.gold} strokeWidth="1.4" fill="none"/>
      <path d="M35 45 C35 33 50 25 65 22 C53 28 44 35 35 45" stroke={ASTRO.gold} strokeWidth="1.4" fill="none"/>
      <path d="M35 45 C35 30 24 20 16 12 C22 22 28 32 35 45" stroke={ASTRO.gold} strokeWidth="1.4" fill="none"/>
      <path d="M35 45 C35 30 46 20 54 12 C48 22 42 32 35 45" stroke={ASTRO.gold} strokeWidth="1.4" fill="none"/>
      <path d="M35 45 C35 30 31 20 31 8 C32 18 33 30 35 45" stroke={ASTRO.gold} strokeWidth="1.4" fill="none"/>
      <path d="M35 45 C35 30 39 20 39 8 C38 18 37 30 35 45" stroke={ASTRO.gold} strokeWidth="1.4" fill="none"/>
      <line x1="6" y1="45" x2="64" y2="45" stroke={ASTRO.gold} strokeWidth="1.2"/>
    </svg>
  );
}

// ─── Warning Icon ────────────────────────────────────────────────────────────

function WarningCircleIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" fill={ASTRO.gold} opacity="0.15"/>
      <circle cx="18" cy="18" r="14" fill={ASTRO.gold}/>
      <circle cx="18" cy="18" r="14" fill="none" stroke={ASTRO.maroon} strokeWidth="0.5"/>
      <line x1="18" y1="10" x2="18" y2="20" stroke={ASTRO.maroon} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="18" cy="25" r="2" fill={ASTRO.maroon}/>
    </svg>
  );
}

// ─── Rupee Icon for Debt card ──────────────────────────────────────────────────

function RupeeCircleIcon({ bg }: { bg: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill={bg}/>
      <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">₹</text>
    </svg>
  );
}

// ─── Wealth Icon ─────────────────────────────────────────────────────────────

function WealthCircleIcon({ bg }: { bg: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill={bg}/>
      <path d="M12 18 C12 14 9 10 9 7 C9 10 7 14 7 18" stroke="#fff" strokeWidth="1.3" fill="none"/>
      <path d="M12 18 C12 14 15 10 15 7 C15 10 17 14 17 18" stroke="#fff" strokeWidth="1.3" fill="none"/>
      <line x1="8" y1="18" x2="16" y2="18" stroke="#fff" strokeWidth="1.2"/>
    </svg>
  );
}

// ─── Instagram ────────────────────────────────────────────────────────────────

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={ASTRO.gold} strokeWidth="1.8" aria-hidden>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}

// ─── Default Data ─────────────────────────────────────────────────────────────

const defaultMonths: MonthRow[] = [
  { month: "May 2024",  monthHi: "मई 2024",      outlook: "challenging", outlookLabel: "Challenging Period", outlookLabelHi: "चुनौतीपूर्ण अवधि", highlight: "Higher expenses, pressure from debts, avoid new loans or big investments.", highlightHi: "खर्च अधिक रहेंगे, कर्ज का दबाव रहेगा, नए ऋण या बड़े निवेश से बचें।" },
  { month: "Jun 2024",  monthHi: "जून 2024",      outlook: "stable",      outlookLabel: "Stable Period",      outlookLabelHi: "स्थिर अवधि",         highlight: "Financial flow becomes normal, good time for planning and budgeting.", highlightHi: "वित्तीय प्रवाह सामान्य रहेगा, योजना बनाने और बजट बनाने के लिए अच्छा समय।" },
  { month: "Jul 2024",  monthHi: "जुलाई 2024",    outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Income improvement, new opportunities, focus on savings.", highlightHi: "आय में सुधार, नए अवसर प्राप्त होंगे, बचत पर ध्यान दें।" },
  { month: "Aug 2024",  monthHi: "अगस्त 2024",    outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Strong growth phase, wealth accumulation possible, financial stability.", highlightHi: "विकास का मजबूत समय, धन संचय के अवसर, वित्तीय स्थिरता बढ़ेगी।" },
  { month: "Sep 2024",  monthHi: "सितंबर 2024",   outlook: "challenging", outlookLabel: "Challenging Period", outlookLabelHi: "चुनौतीपूर्ण अवधि", highlight: "Unexpected expenses, family responsibilities, avoid financial risks.", highlightHi: "अप्रत्याशित खर्च, पारिवारिक जिम्मेदारियां बढ़ सकती हैं, वित्तीय जोखिमों से बचें।" },
  { month: "Oct 2024",  monthHi: "अक्टूबर 2024",  outlook: "stable",      outlookLabel: "Stable Period",      outlookLabelHi: "स्थिर अवधि",         highlight: "Period of balance, focus on clearing small pending dues.", highlightHi: "संतुलन का समय, छोटे बकाया भुगतान निपटाने पर ध्यान दें।" },
  { month: "Nov 2024",  monthHi: "नवंबर 2024",    outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Good time for loan repayment, investments and business growth.", highlightHi: "कर्ज चुकाने के लिए अच्छा समय, निवेश और व्यवसाय में वृद्धि के अवसर।" },
  { month: "Dec 2024",  monthHi: "दिसंबर 2024",   outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Favorable time for wealth creation and asset building.", highlightHi: "धन निर्माण और संपत्ति बढ़ाने के लिए अनुकूल समय।" },
  { month: "Jan 2025",  monthHi: "जनवरी 2025",    outlook: "stable",      outlookLabel: "Stable Period",      outlookLabelHi: "स्थिर अवधि",         highlight: "Steady period, maintain discipline and avoid unnecessary expenses.", highlightHi: "स्थिर अवधि, अनुशासन बनाए रखें और अनावश्यक खर्चों से बचें।" },
  { month: "Feb 2025",  monthHi: "फरवरी 2025",    outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Income rise, success in efforts, good for financial planning.", highlightHi: "आय में वृद्धि, प्रयास सफल होंगे, वित्तीय योजना के लिए उत्तम समय।" },
  { month: "Mar 2025",  monthHi: "मार्च 2025",    outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Excellent time for investments, property and long-term wealth.", highlightHi: "निवेश, संपत्ति और दीर्घकालिक धन निर्माण के लिए उत्कृष्ट समय।" },
  { month: "Apr 2025",  monthHi: "अप्रैल 2025",   outlook: "growth",      outlookLabel: "Growth Period",      outlookLabelHi: "विकास अवधि",         highlight: "Strong financial position, debt reduction, prosperity and peace.", highlightHi: "वित्तीय स्थिति मजबूत होगी, कर्ज कम होगा, समृद्धि और शांति के संकेत।" },
];

const defaultSummaryCards: SummaryCard[] = [
  {
    icon: <ChallengeIcon />,
    title: "CHALLENGING\nPERIODS",      titleHi: "चुनौतीपूर्ण\nअवधि",
    dates: "May, Sep 2024",             datesHi: "मई 2024, सितंबर 2024",
    description: "Be careful with expenses and avoid financial risks.", descriptionHi: "इस दौरान खर्च अधिक हो सकते हैं और वित्तीय जोखिम बढ़ सकते हैं, सावधानी रखें।",
    iconBg: "#c0392b", borderColor: "#c0392b",
  },
  {
    icon: <StableIcon />,
    title: "STABLE\nPERIODS",           titleHi: "स्थिर\nअवधि",
    dates: "Jun, Oct 2024\nJan 2025",   datesHi: "जून 2024, अक्टूबर 2024,\nजनवरी 2025",
    description: "Focus on planning, budgeting and maintaining balance.", descriptionHi: "योजना, बजट और संतुलन बनाए रखने के लिए अच्छा समय।",
    iconBg: "#c8960c", borderColor: "#c8960c",
  },
  {
    icon: <GrowthIcon />,
    title: "GROWTH\nPERIODS",           titleHi: "विकास\nअवधि",
    dates: "Jul, Aug, Nov, Dec 2024\nFeb, Mar, Apr 2025", datesHi: "जुलाई, अगस्त, नवंबर, दिसंबर\n2024, फरवरी, मार्च, अप्रैल 2025",
    description: "Best time for income growth, investments and wealth building.", descriptionHi: "आय वृद्धि, निवेश और धन निर्माण के लिए सर्वश्रेष्ठ अवधि।",
    iconBg: "#2e7d32", borderColor: "#2e7d32",
  },
  {
    icon: <RupeeCircleIcon bg="#c8960c" />,
    title: "DEBT REPAYMENT\nWINDOWS",   titleHi: "कर्ज चुकाने के\nउत्तम समय",
    dates: "Jul – Aug 2024\nNov – Dec 2024", datesHi: "जुलाई – अगस्त 2024\nनवंबर – दिसंबर 2024",
    description: "Favorable time to clear loans and reduce liabilities.", descriptionHi: "कर्ज निपटाने और देनदारियां कम करने के लिए अनुकूल समय।",
    iconBg: "#c8960c", borderColor: "#c8960c",
  },
  {
    icon: <WealthCircleIcon bg="#2e7d32" />,
    title: "WEALTH\nOPPORTUNITIES",     titleHi: "धन संचय के\nअवसर",
    dates: "Aug, Dec 2024\nMar – Apr 2025", datesHi: "अगस्त, दिसंबर 2024\nमार्च – अप्रैल 2025",
    description: "Excellent time for investments, assets and long-term wealth.", descriptionHi: "निवेश, संपत्ति और दीर्घकालिक धन निर्माण के लिए सर्वश्रेष्ठ अवसर।",
    iconBg: "#2e7d32", borderColor: "#2e7d32",
  },
];

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function FinancialRecoveryTimeline({
  pageNumber = "09",
  language = "en",
  subtitle = "This section provides a 12-month forecast of your financial journey to help you\nplan better, manage challenges and seize the right opportunities.",
  subtitleHi = "यह अनुभाग आने वाले 12 महीनों का वित्तीय पूर्वानुमान प्रस्तुत करता है ताकि आप बेहतर योजना बना सकें,\nचुनौतियों का प्रबंधन कर सकें और सही अवसरों का लाभ उठा सकें।",
  forecastBannerTitle = "NEXT 12 MONTHS FORECAST",
  forecastBannerTitleHi = "आने वाले 12 महीनों का पूर्वानुमान",
  forecastText = "The coming 12 months will be a period of gradual transformation and relief. There will be phases of financial pressure as well as phases of stability and growth. By understanding the timing and nature of these periods, you can take the right actions, clear debts, improve savings and build long-term wealth.",
  forecastTextHi = "आने वाले 12 महीने आपके लिए धीरे-धीरे परिवर्तन और राहत का समय रहेगा। इस अवधि में कभी वित्तीय दबाव और चुनौतियाँ रहेंगी, तो कभी स्थिरता और प्रगति के अवसर मिलेंगे। सही समय पर सही निर्णय लेकर, कर्ज कम करके, बचत बढ़ाकर और दीर्घकालिक धन निर्माण करके आप अपने वित्तीय लक्ष्यों को प्राप्त कर सकते हैं।",
  months = defaultMonths,
  summaryCards = defaultSummaryCards,
  disclaimerText = "Timings are based on your planetary dasha, antardasha and current transits.\nUse this timeline as a guide to take timely actions, reduce financial stress and move steadily towards financial freedom and abundance.",
  disclaimerTextHi = "यह समयसीमा आपकी दशा, अंतर्दशा और वर्तमान गोचर ग्रह स्थितियों पर आधारित हैं।\nसही समय पर सही निर्णय लें, अनावश्यक खर्चों में संयम रखें और निरंतर प्रयास करते रहें ताकि आप वित्तीय स्वतंत्रता और समृद्धि की दिशा में आगे बढ़ सकें।",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: FinancialRecoveryTimelineProps) {
  const isHi = language === "hi";

  const t = {
    month:   isHi ? "माह"          : "MONTH",
    outlook: isHi ? "कुल दृष्टिकोण" : "OVERALL OUTLOOK",
    highlights: isHi ? "मुख्य संकेत" : "KEY HIGHLIGHTS",
    monthByMonth: isHi ? "मासिक पूर्वानुमान (माह-दर-माह दृष्टिकोण)" : "MONTH-BY-MONTH OUTLOOK",
    pageLabel: isHi ? "पृष्ठ" : "PAGE",
    title: isHi ? "वित्तीय पुनरुद्धार टाइमलाइन" : "FINANCIAL RECOVERY TIMELINE",
  };

  return (
    <BusinessNameReportPageShell
      padding="14px 32px 10px"
      pageNumber={pageNumber}
      style={{ backgroundColor: ASTRO.parchment }}
    >
      <PageOrnamentalFrame />

      <div className="font-nunito-sans" style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", gap: 0 }}>

        <HeaderCommun
          reportName={isHi ? "ऋण मुक्ति रिपोर्ट" : "RINN MUKTI REPORT"}
          title={t.title}
          description={isHi ? subtitleHi : subtitle}
          breackWord={[3]}
        />

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <OrnamentDivider width={380} />
        </div>

   
        {/* ── NEXT 12 MONTHS FORECAST banner + box ── */}
        <div style={{ marginBottom: 6 }}>
          <DarkBanner>{isHi ? forecastBannerTitleHi : forecastBannerTitle}</DarkBanner>
          <div style={{
            border: `1.5px solid ${ASTRO.border}`, borderRadius: 7, marginTop: 6,
            padding: "10px 14px",
            backgroundColor: "rgba(253,246,232,0.7)",
            display: "flex", gap: 14, alignItems: "center",
          }}>
            {/* Calendar clock icon with star decorations */}
            <div style={{ position: "relative", flexShrink: 0, width: 68, height: 68, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* corner star sparkles */}
              {[[-8,-8],[68,-8],[-8,68],[68,68]].map(([x,y],i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 12 12" style={{ position: "absolute", left: x, top: y }}>
                  <line x1="6" y1="0" x2="6" y2="12" stroke={ASTRO.gold} strokeWidth="1.2"/>
                  <line x1="0" y1="6" x2="12" y2="6" stroke={ASTRO.gold} strokeWidth="1.2"/>
                </svg>
              ))}
              <CalendarClockBig />
            </div>
            {/* Dashed vertical divider */}
            <div style={{ width: 1, alignSelf: "stretch", borderLeft: `1.5px dashed rgba(184,134,11,0.5)` }} />
            <p style={{ fontSize: 12.5, color: ASTRO.body, lineHeight: 1.65, flex: 1, margin: 0 }}>
              {isHi ? forecastTextHi : forecastText}
            </p>
          </div>
        </div>

        {/* ── MONTH-BY-MONTH OUTLOOK banner ── */}
        <div style={{ marginBottom: 4 }}>
          <DarkBanner>{t.monthByMonth}</DarkBanner>
        </div>

        {/* ── TABLE ── */}
        <div style={{
          border: `1.5px solid ${ASTRO.border}`, borderRadius: 7, overflow: "hidden",
          marginBottom: 6, flexShrink: 0,
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            {/* Header */}
            <thead>
              <tr style={{ backgroundColor: ASTRO.tableHeader }}>
                <th style={{ fontWeight: 700, fontSize: 10.5, color: "#fff", letterSpacing: "0.08em", padding: "6px 10px", textAlign: "left", width: "16%", borderRight: "1px solid rgba(255,255,255,0.3)" }}>
                  {t.month}
                </th>
                <th style={{ fontWeight: 700, fontSize: 10.5, color: "#fff", letterSpacing: "0.08em", padding: "6px 10px", textAlign: "left", width: "22%", borderRight: "1px solid rgba(255,255,255,0.3)" }}>
                  {t.outlook}
                </th>
                <th style={{ fontWeight: 700, fontSize: 10.5, color: "#fff", letterSpacing: "0.08em", padding: "6px 10px", textAlign: "left" }}>
                  {t.highlights}
                </th>
              </tr>
            </thead>
            <tbody>
              {months.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? ASTRO.rowAlt : ASTRO.rowNorm }}>
                  <td style={{ fontSize: 12.5, color: ASTRO.body, padding: "4px 10px", borderTop: "1px dashed rgba(184,134,11,0.3)", borderRight: "1px dashed rgba(184,134,11,0.3)" }}>
                    {isHi ? (row.monthHi ?? row.month) : row.month}
                  </td>
                  <td style={{ padding: "4px 10px", borderTop: "1px dashed rgba(184,134,11,0.3)", borderRight: "1px dashed rgba(184,134,11,0.3)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <OutlookIcon type={row.outlook} />
                      <span style={{ fontSize: 12.5, color: ASTRO.body }}>
                        {isHi ? (row.outlookLabelHi ?? row.outlookLabel) : row.outlookLabel}
                      </span>
                    </div>
                  </td>
                  <td style={{ fontSize: 12.5, color: ASTRO.body, padding: "4px 10px", borderTop: "1px dashed rgba(184,134,11,0.3)" }}>
                    {isHi ? (row.highlightHi ?? row.highlight) : row.highlight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 5 SUMMARY CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: 6, marginBottom: 6 }}>
          {summaryCards.map((card, i) => (
            <div key={i} style={{
              border: `1.5px solid ${card.borderColor}`,
              borderRadius: 7, padding: "8px 8px",
              backgroundColor: "rgba(253,246,232,0.7)",
            }}>
              {/* Icon + Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
                <div style={{ flexShrink: 0, marginTop: 1 }}>{card.icon}</div>
                <p style={{ fontWeight: 700, fontSize: 11.5, color: ASTRO.maroon, letterSpacing: "0.04em", lineHeight: 1.3, margin: 0, whiteSpace: "pre-line" }}>
                  {isHi ? (card.titleHi ?? card.title) : card.title}
                </p>
              </div>
              {/* Dates */}
              <p style={{ fontSize: 11, color: ASTRO.body, fontWeight: 700, marginBottom: 3, whiteSpace: "pre-line" }}>
                {isHi ? (card.datesHi ?? card.dates) : card.dates}
              </p>
              {/* Description */}
              <p style={{ fontSize: 11.5, color: ASTRO.body, lineHeight: 1.5, margin: 0 }}>
                {isHi ? (card.descriptionHi ?? card.description) : card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── DISCLAIMER BOX ── */}
        <div style={{
          border: `1.5px solid ${ASTRO.border}`, borderRadius: 7,
          padding: "8px 12px",
          backgroundColor: "rgba(253,246,232,0.7)",
          display: "flex", alignItems: "center", gap: 12,
          marginBottom: 4,
        }}>
          <div style={{ flexShrink: 0 }}><WarningCircleIcon size={34} /></div>
          <p style={{ fontSize: 12.5, color: ASTRO.body, lineHeight: 1.6, flex: 1, margin: 0, whiteSpace: "pre-line" }}>
            {isHi ? disclaimerTextHi : disclaimerText}
          </p>
          <div style={{ flexShrink: 0 }}><LotusIcon size={52} /></div>
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 18,
          color: ASTRO.body, fontSize: 14, 
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Globe size={14} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
            <span>{website}</span>
          </div>
          <div style={{ width: 1, height: 12, backgroundColor: ASTRO.border }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Phone size={14} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
            <span>{phone}</span>
          </div>
          <div style={{ width: 1, height: 12, backgroundColor: ASTRO.border }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <InstagramIcon size={14} />
            <span>{instagram}</span>
          </div>
        </div>

      </div>
    </BusinessNameReportPageShell>
  );
}