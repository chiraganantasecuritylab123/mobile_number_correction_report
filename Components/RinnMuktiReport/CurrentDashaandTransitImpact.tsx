"use client";

import Image from "next/image";
import { Globe, Phone } from "lucide-react";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";
import type { ReactNode } from "react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ASTRO = {
  parchment: "#F8EEDC",
  maroon:    "#3a0a0a",
  gold:      "#B8860B",
  goldLight: "#c8960c",
  brown:     "#5a3a00",
  body:      "#3a2800",
  cream:     "#fdf6e8",
  border:    "#C89A2B",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────────

export type DashaRow = { label: string; labelHi: string; value: string; valueHi: string };

export type DashaCard = {
  title: string;
  titleHi: string;
  iconSymbol: ReactNode;
  rows: DashaRow[];
  remainingLabel?: string;
  remainingLabelHi?: string;
  remainingValue?: string;
  remainingValueHi?: string;
};

export type AnalysisItem = {
  number: string;
  icon: ReactNode;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
};

export type CurrentDashaTransitProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  subtitle?: string;
  subtitleHi?: string;
  mahadasha?: DashaCard;
  antardasha?: DashaCard;
  transitInfluence?: DashaCard;
  analysisItems?: AnalysisItem[];
  website?: string;
  phone?: string;
  instagram?: string;
};

// ─── Corner Ornaments ──────────────────────────────────────────────────────────

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

// ─── Compass Star ─────────────────────────────────────────────────────────────────

function CompassStar({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
      {[0,45,90,135].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        const x1 = 17 + 16 * cos, y1 = 17 + 16 * sin;
        const x2 = 17 - 16 * cos, y2 = 17 - 16 * sin;
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ASTRO.gold} strokeWidth="1.5"/>;
      })}
      {[22.5,67.5,112.5,157.5].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 17 + 10 * Math.cos(rad), y1 = 17 + 10 * Math.sin(rad);
        const x2 = 17 - 10 * Math.cos(rad), y2 = 17 - 10 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ASTRO.gold} strokeWidth="1" opacity="0.6"/>;
      })}
      <circle cx="17" cy="17" r="3" fill={ASTRO.gold}/>
    </svg>
  );
}

// ─── Dark Icon Circle ──────────────────────────────────────────────────────────

function DarkIconCircle({ size = 68, children }: { size?: number; children: ReactNode }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      backgroundColor: ASTRO.maroon,
      border: `3px solid ${ASTRO.gold}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      boxShadow: `0 0 0 2px ${ASTRO.maroon}, 0 0 0 4px rgba(184,134,11,0.3)`,
    }}>
      {children}
    </div>
  );
}

// ─── Planet symbols ────────────────────────────────────────────────────────────

function JupiterSymbol({ size = 36 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: ASTRO.gold,
        backgroundImage: "url('/assets/rinn-mukti-report/jupiterSymbol.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "70%",
        borderRadius: "50%",
      }}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MercurySymbol({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <text x="18" y="26" textAnchor="middle" fill={ASTRO.gold} fontSize="26" fontWeight="700">☿</text>
    </svg>
  );
}

function TransitSyncIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 6 A12 12 0 1 1 6 18" stroke={ASTRO.gold} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <polygon points="6,18 2,12 10,12" fill={ASTRO.gold}/>
      <path d="M18 30 A12 12 0 0 1 30 18" stroke={ASTRO.gold} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <polygon points="30,18 34,24 26,24" fill={ASTRO.gold}/>
    </svg>
  );
}

function RupeeClockIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="13" cy="13" r="9" fill="none" stroke={ASTRO.gold} strokeWidth="1.8"/>
      <text x="13" y="17" textAnchor="middle" fill={ASTRO.gold} fontSize="10" fontWeight="700">₹</text>
      <circle cx="24" cy="24" r="9" fill={ASTRO.maroon} stroke={ASTRO.gold} strokeWidth="1.5"/>
      <line x1="24" y1="19" x2="24" y2="24" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="24" y1="24" x2="28" y2="26" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="1.2" fill={ASTRO.gold}/>
    </svg>
  );
}

function SaturnIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="10" fill={ASTRO.gold} opacity="0.9"/>
      <circle cx="18" cy="18" r="10" fill="none" stroke={ASTRO.goldLight} strokeWidth="0.8"/>
      <ellipse cx="18" cy="20" rx="17" ry="5" fill="none" stroke={ASTRO.gold} strokeWidth="2"/>
      <ellipse cx="18" cy="18" rx="10" ry="10" fill={ASTRO.maroon}/>
      <circle cx="18" cy="18" r="9" fill="none" stroke={ASTRO.gold} strokeWidth="1.5"/>
      <path d="M7 16 Q18 12 29 16" stroke={ASTRO.gold} strokeWidth="2" fill="none"/>
      <circle cx="14" cy="16" r="1.5" fill={ASTRO.gold} opacity="0.6"/>
      <circle cx="22" cy="20" r="1.5" fill={ASTRO.gold} opacity="0.6"/>
    </svg>
  );
}

function CalendarClockIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="8" width="22" height="20" rx="2" fill="none" stroke={ASTRO.gold} strokeWidth="1.8"/>
      <line x1="4" y1="14" x2="26" y2="14" stroke={ASTRO.gold} strokeWidth="1.5"/>
      <line x1="10" y1="4" x2="10" y2="12" stroke={ASTRO.gold} strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="4" x2="20" y2="12" stroke={ASTRO.gold} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="10" cy="20" r="1.2" fill={ASTRO.gold}/>
      <circle cx="15" cy="20" r="1.2" fill={ASTRO.gold}/>
      <circle cx="10" cy="25" r="1.2" fill={ASTRO.gold}/>
      <circle cx="26" cy="26" r="8" fill={ASTRO.maroon} stroke={ASTRO.gold} strokeWidth="1.5"/>
      <line x1="26" y1="22" x2="26" y2="26" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="26" y1="26" x2="29" y2="28" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="26" cy="26" r="1.2" fill={ASTRO.gold}/>
    </svg>
  );
}

// ─── Number Badge ──────────────────────────────────────────────────────────────

function NumberBadge({ num }: { num: string }) {
  return (
    <div style={{
      width: 40, height: 40,
      backgroundColor: ASTRO.maroon,
      border: `2px solid ${ASTRO.gold}`,
      borderRadius: 4,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>
        {num}
      </span>
    </div>
  );
}

// ─── Dasha Card ────────────────────────────────────────────────────────────────

function DashaCardUI({ card, language = "en" }: { card: DashaCard; language?: string }) {
  return (
    <div style={{
      flex: 1,
      border: `1.5px solid ${ASTRO.border}`,
      borderRadius: 8,
      backgroundColor: "rgba(253,246,232,0.7)",
      display: "flex", flexDirection: "column",
      alignItems: "center",
      padding: "0 0 12px",
      position: "relative",
    }}>
      <div style={{ marginTop: -34, marginBottom: 8, zIndex: 2 }}>
        <DarkIconCircle size={68}>{card.iconSymbol}</DarkIconCircle>
      </div>

      <p style={{
        fontWeight: 700, fontSize: 12,
        color: ASTRO.maroon, letterSpacing: "0.08em",
        textAlign: "center", marginBottom: 6, padding: "0 8px",
      }}>
        {language === "en" ? card.title : card.titleHi}
      </p>

      <div style={{ width: "100%", padding: "0 12px", marginTop: 4 }}>
        {card.rows.map((row, i) => (
          <div key={i}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              padding: "5px 0",
            }}>
              <span style={{ fontSize: 12, color: ASTRO.body }}>
                {language === "en" ? row.label : row.labelHi}
              </span>
              <span style={{ fontSize: 12, color: ASTRO.body, fontWeight: 700, textAlign: "right", maxWidth: "55%" }}>
                {language === "en" ? row.value : row.valueHi}
              </span>
            </div>
            <div style={{ borderTop: `1px dashed rgba(184,134,11,0.4)` }} />
          </div>
        ))}

        {card.remainingLabel && (
          <div style={{ marginTop: 6 }}>
            <p style={{ fontSize: 11, color: ASTRO.body, marginBottom: 1 }}>
              {language === "en" ? card.remainingLabel : card.remainingLabelHi}
            </p>
            <p style={{ fontSize: 11, color: ASTRO.body, fontWeight: 700, textAlign: "center" }}>
              {language === "en" ? card.remainingValue : card.remainingValueHi}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Analysis Item Row ─────────────────────────────────────────────────────────

function AnalysisItemRow({ item, language = "en" }: { item: AnalysisItem; language?: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 14,
      padding: "20px 10px",
      borderBottom: `1px dashed rgba(184,134,11,0.35)`,
    }}>
      <DarkIconCircle size={60}>{item.icon}</DarkIconCircle>
      <NumberBadge num={item.number} />
      <div style={{ flex: 1 }}>
        <p style={{
          fontWeight: 700, fontSize: 14,
          color: ASTRO.maroon, letterSpacing: "0.04em", marginBottom: 3,
        }}>
          {language === "en" ? item.title : item.titleHi}
        </p>
        <p style={{
          fontSize: 12,
          color: ASTRO.body, lineHeight: 1.6, margin: 0,
        }}>
          {language === "en" ? item.description : item.descriptionHi}
        </p>
      </div>
    </div>
  );
}

// ─── Instagram ─────────────────────────────────────────────────────────────────

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={ASTRO.gold} strokeWidth="1.8" aria-hidden>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}

// ─── Default Data ──────────────────────────────────────────────────────────────

const defaultMahadasha: DashaCard = {
  title: "CURRENT MAHADASHA",
  titleHi: "वर्तमान महादशा",
  iconSymbol: <JupiterSymbol />,
  rows: [
    { label: "Planet", labelHi: "ग्रह", value: "Saturn", valueHi: "शनि" },
    { label: "Start Date", labelHi: "प्रारंभित तिथि", value: "15 Mar 2020", valueHi: "15 मार्च 2020" },
    { label: "End Date", labelHi: "समाप्ति तिथि", value: "15 Mar 2039", valueHi: "15 मार्च 2039" },
  ],
  remainingLabel: "Remaining Period",
  remainingLabelHi: "शेष अवधि",
  remainingValue: "8 Years 7 Months 12 Days",
  remainingValueHi: "8 वर्ष 7 माह 12 दिन",
};

const defaultAntardasha: DashaCard = {
  title: "CURRENT ANTARDASHA",
  titleHi: "वर्तमान अंतरदशा",
  iconSymbol: <MercurySymbol size={36} />,
  rows: [
    { label: "Planet", labelHi: "ग्रह", value: "Mars", valueHi: "मंगल" },
    { label: "Start Date", labelHi: "प्रारंभित तिथि", value: "10 Aug 2023", valueHi: "10 अगस्त 2023" },
    { label: "End Date", labelHi: "समाप्ति तिथि", value: "05 Feb 2026", valueHi: "05 फरवरी 2026" },
  ],
  remainingLabel: "Remaining Period",
  remainingLabelHi: "शेष अवधि",
  remainingValue: "1 Year 5 Months 18 Days",
  remainingValueHi: "1 वर्ष 5 माह 18 दिन",
};

const defaultTransit: DashaCard = {
  title: "TRANSIT INFLUENCE",
  titleHi: "गोचर प्रभाव",
  iconSymbol: <TransitSyncIcon />,
  rows: [
    { label: "Major Transit", labelHi: "मुख्य गोचर", value: "Saturn in Pisces", valueHi: "शनि मीन राशि में" },
    { label: "Impacting House", labelHi: "प्रभावित भाव", value: "2nd House", valueHi: "द्वितीय भाव" },
    { label: "Key Planet Active", labelHi: "मुख्य सक्रिय ग्रह", value: "Saturn", valueHi: "शनि" },
    { label: "Transit Impact", labelHi: "गोचर प्रभाव", value: "High Pressure Phase", valueHi: "उच्च दबाव का दौर" },
  ],
};

const defaultAnalysisItems: AnalysisItem[] = [
  {
    number: "01",
    icon: <RupeeClockIcon />,
    title: "WHY FINANCIAL PRESSURE IS ACTIVE NOW",
    titleHi: "वर्तमान में आर्थिक दबाव क्यों सक्रिय है?",
    description: "The current Mahadasha of Saturn combined with Antardasha of Mars is creating intense financial pressure. This combination brings delays, heavy responsibilities, unexpected expenses and a sense of financial limitation.",
    descriptionHi: "शनि की महादशा और मंगल की अंतरदशा का संयोजन इस समय भारी आर्थिक दबाव बना रहा है। इससे विलंब, अधिक जिम्मेदारियों, अप्रत्याशित खर्च और वित्तीय सीमाएँ महसूस हो रही हैं।",
  },
  {
    number: "02",
    icon: <SaturnIcon />,
    title: "WHICH PLANET IS CREATING THE BURDEN",
    titleHi: "कौन सा ग्रह बोझ उत्पन्न कर रहा है?",
    description: "Saturn is the primary planet creating the burden. Its transit in Pisces and placement in the 2nd House is affecting your savings, cash flow and financial stability. Mars Antardasha is adding impulsive expenses, disputes and losses.",
    descriptionHi: "शनि वर्तमान में मीन राशि में गोचर कर रहा है और यह आपके द्वितीय भाव को प्रभावित कर रहा है, जो धन, बचत, परिवार और वाणी का भाव है। साथ ही, मंगल की अंतरदशा अनावश्यक खर्च, वाद-विवाद और नुकसान बढ़ा रही है।",
  },
  {
    number: "03",
    icon: <CalendarClockIcon />,
    title: "HOW LONG THE CURRENT PHASE MAY CONTINUE",
    titleHi: "वर्तमान चरण कितने समय तक जारी रहेगा?",
    description: "The current Antardasha of Mars will continue till 05 Feb 2026. Financial pressure will be felt during this period. Relief will gradually increase after this phase, especially when the next Antardasha begins.",
    descriptionHi: "मंगल की अंतरदशा 05 फरवरी 2026 तक जारी रहेगी। इस अवधि में वित्तीय दबाव बना रह सकता है, परंतु इसके बाद स्थिति में धीरे-धीरे सुधार होगा, खासकर अगली अंतरदशा के प्रारम्भ होने पर राहत के संकेत मिलेंगे।",
  },
];

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function CurrentDashaAndTransitImpact({
  pageNumber   = "07",
  language = "en",
  subtitle     = "Planetary periods and transits play a major role in financial fluctuations.\nThis section reveals the current planetary energy influencing your finances.",
  subtitleHi   = "ग्रहों की चल रही दशाएँ और गोचर आपके वित्तीय उतार-चढ़ाव में महत्वपूर्ण भूमिका निभाते हैं।\nयह अनुभाग दर्शाता है कि वर्तमान ग्रह ऊर्जा आपकी आर्थिक स्थिति को कैसे प्रभावित कर रही है।",
  mahadasha    = defaultMahadasha,
  antardasha   = defaultAntardasha,
  transitInfluence = defaultTransit,
  analysisItems    = defaultAnalysisItems,
  website   = "www.astroaarambh.com",
  phone     = "7405923555",
  instagram = "astroaarambhofficial",
}: CurrentDashaTransitProps) {
  return (
    <BusinessNameReportPageShell
      padding="16px 32px 14px"
      pageNumber={pageNumber}
      style={{ backgroundColor: ASTRO.parchment }}
    >
      <PageOrnamentalFrame />

      <div className="font-nunito-sans" style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", gap: 0 }}>

        {/* ── TOP BAR ── */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
            <p style={{ fontWeight: 700, fontSize: 32, color: ASTRO.maroon, letterSpacing: "0.06em", lineHeight: 1.1, margin: "2px 0 0" }}>
              ASTRO AARAMBH
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
              <p style={{ fontWeight: 600, fontSize: 22, color: ASTRO.gold, letterSpacing: "0.1em" }}>
                {language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"}
              </p>
            </div>
          </div>
        </div>

        {/* Divider under header */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <OrnamentDivider width={220} />
        </div>

        {/* ── PAGE TITLE ── */}
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <h1 style={{
            fontWeight: 700,
            fontSize: 36, color: ASTRO.maroon,
            letterSpacing: "0.02em", lineHeight: 1.15, margin: 0,
          }}>
            {language === "en" ? "CURRENT DASHA &" : "वर्तमान दशा एवं"}
            <br />
            {language === "en" ? "TRANSIT IMPACT" : "गोचर प्रभाव"}
          </h1>
          <div style={{ display: "flex", justifyContent: "center", margin: "4px 0" }}>
            <OrnamentDivider width={220} />
          </div>
          <p style={{
            fontStyle: "italic", fontSize: 12,
            color: ASTRO.body, lineHeight: 1.65, whiteSpace: "pre-line",
          }}>
            {language === "en" ? subtitle : subtitleHi}
          </p>
        </div>

        {/* ── 3 DASHA CARDS ── */}
        <div style={{ display: "flex", gap: 12, paddingTop: 36, marginBottom: 16 }}>
          <DashaCardUI card={mahadasha} language={language} />
          <DashaCardUI card={antardasha} language={language} />
          <DashaCardUI card={transitInfluence} language={language} />
        </div>

        {/* ── ANALYSIS BANNER ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 }}>
          <div style={{
            backgroundColor: ASTRO.maroon,
            borderRadius: 4,
            padding: "6px 36px",
            border: `1.5px solid ${ASTRO.gold}`,
          }}>
            <p style={{ fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: "0.14em", margin: 0 }}>
              {language === "en" ? "ANALYSIS" : "विश्लेषण"}
            </p>
          </div>
        </div>

        {/* ── ANALYSIS ITEMS ── */}
        <div style={{
          border: `1.5px solid ${ASTRO.border}`,
          borderRadius: 8,
          padding: "0 16px",
          backgroundColor: "rgba(253,246,232,0.5)",
        }}>
          {analysisItems.map((item, i) => (
            <AnalysisItemRow key={i} item={item} language={language} />
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 20,
          color: ASTRO.body, fontSize: 16, marginTop: 8,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Globe size={16} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
            <span>{website}</span>
          </div>
          <div style={{ width: 1, height: 14, backgroundColor: ASTRO.border }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Phone size={16} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
            <span>{phone}</span>
          </div>
          <div style={{ width: 1, height: 14, backgroundColor: ASTRO.border }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <InstagramIcon size={16} />
            <span>{instagram}</span>
          </div>
        </div>

      </div>
    </BusinessNameReportPageShell>
  );
}