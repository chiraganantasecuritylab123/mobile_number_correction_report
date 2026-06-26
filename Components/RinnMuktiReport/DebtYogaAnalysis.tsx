"use client";

import Image from "next/image";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import {
  BarChart3,
  Check,
  CloudMoon,
  Eclipse,
  Flower2,
  Globe,
  Link2,
  Link2Off,
  Phone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";

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
  maroon: "#6E1F1F",
  navy: "#0A1D37",
  gold: "#B8860B",
  borderGold: "#C89A2B",
  darkBrown: "#5C2D1A",
  body: "#6A5A4A",
  value: "#3D2A20",
  high: "#8B0000",
  moderate: "#D48E31",
  available: "#2D7A4F",
  unavailable: "#A84432",
  summaryBg: "#FFF8E7",
} as const;

const ASSETS = {
  backgroundImage: "/assets/signaturePages/coverPage2.png",
  penLogo: "/assets/signatureReport/logo-main.png",
  pattern2: "/assets/cover/pattern-2.png",
  pageBadge: "/assets/signatureReport/roundCircleImage.png",
  summaryIcon: "/assets/signatureReport/ruppesGullak.png",
} as const;

export type InfluenceLevel = "HIGH" | "MODERATE";

export type DebtYogaRow = {
  id: string;
  name: string;
  nameHi: string;
  icon: LucideIcon;
  iconBg: string;
  available: boolean;
  houses: string;
  housesHi: string;
  influenceLevel?: InfluenceLevel;
  influencePercent?: number;
};

export type DebtYogaAnalysisProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  sectionTitle?: string;
  sectionTitleHi?: string;
  sectionSubtitle?: string;
  sectionSubtitleHi?: string;
  introText?: string;
  introTextHi?: string;
  tableTitle?: string;
  tableTitleHi?: string;
  rows?: DebtYogaRow[];
  summaryTitle?: string;
  summaryTitleHi?: string;
  summaryText?: string;
  summaryTextHi?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultRows: DebtYogaRow[] = [
  {
    id: "rin",
    name: "RIN YOGA",
    nameHi: "ऋण योग",
    icon: Link2,
    iconBg: "#C0392B",
    available: true,
    houses: "6th House",
    housesHi: "6वीं भाव",
    influenceLevel: "HIGH",
    influencePercent: 80,
  },
  {
    id: "daridra",
    name: "DARIDRA YOGA",
    nameHi: "दरिद्र योग",
    icon: BarChart3,
    iconBg: "#7A5230",
    available: true,
    houses: "2nd, 11th Houses",
    housesHi: "2रा, 11वीं भाव",
    influenceLevel: "MODERATE",
    influencePercent: 60,
  },
  {
    id: "shrapit",
    name: "SHRAPIT YOGA",
    nameHi: "श्रापित योग",
    icon: Link2Off,
    iconBg: "#6B4C9A",
    available: false,
    houses: "—",
    housesHi: "—",
  },
  {
    id: "guru-chandal",
    name: "GURU CHANDAL YOGA",
    nameHi: "गुरु चांडाल योग",
    icon: Users,
    iconBg: "#2D7A4F",
    available: true,
    houses: "10th House",
    housesHi: "10वीं भाव",
    influenceLevel: "MODERATE",
    influencePercent: 55,
  },
  {
    id: "kemadruma",
    name: "KEMADRUMA YOGA",
    nameHi: "केमदुम योग",
    icon: CloudMoon,
    iconBg: "#2C4A6E",
    available: false,
    houses: "—",
    housesHi: "—",
  },
  {
    id: "grahan",
    name: "GRAHAN YOGA",
    nameHi: "ग्रहण योग",
    icon: Eclipse,
    iconBg: "#2A2A2A",
    available: true,
    houses: "8th House",
    housesHi: "8वीं भाव",
    influenceLevel: "HIGH",
    influencePercent: 75,
  },
  {
    id: "wealth-blocking",
    name: "OTHER WEALTH BLOCKING COMBINATIONS",
    nameHi: "अन्य धन अवरोधक संयोजन",
    icon: Flower2,
    iconBg: "#B8860B",
    available: true,
    houses: "12th House",
    housesHi: "12वीं भाव",
    influenceLevel: "MODERATE",
    influencePercent: 50,
  },
];

function PageBackground() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Image
        src={ASSETS.backgroundImage}
        alt="Report Background"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={ASTRO.gold}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}

function ReportTopBar({ pageNumber, language = "en" }: { pageNumber: string; language?: string }) {
  return (
    <div className="relative z-10 flex items-start justify-between ml-12 gap-3 mt-25">
      <header className="flex flex-1 flex-col items-center pt-1 text-center mt-5">
        <h1
          className="font-cinzel text-[18px] font-bold leading-none tracking-[0.06em]"
          style={{ color: ASTRO.maroon }}
        >
          ASTRO AARAMBH
        </h1>
        <div className="mt-1.5 flex w-full max-w-[360px] items-center justify-center gap-2">
          <OrnamentDivider width={72} />
          <p
            className={`${cormorant.className} text-[16px] font-bold tracking-[0.05em]`}
            style={{ color: ASTRO.gold }}
          >
            {language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"}
          </p>
          <OrnamentDivider width={72} />
        </div>
      </header>
    </div>
  );
}

function InfluenceBar({
  level,
  percent,
}: {
  level: InfluenceLevel;
  percent: number;
}) {
  const color = level === "HIGH" ? ASTRO.high : ASTRO.moderate;
  const label = level === "HIGH" ? "High" : "Moderate";

  return (
    <div className="flex min-w-0 flex-col items-center gap-1">
      <span
        className={`${libreBaskerville.className} text-[12px] font-bold`}
        style={{ color }}
      >
        {label}
      </span>
      <div
        className="h-[6px] w-full max-w-[88px] overflow-hidden rounded-full"
        style={{ backgroundColor: "rgba(106, 90, 74, 0.15)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function AvailabilityCell({ available, language = "en" }: { available: boolean; language?: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex h-[22px] w-[22px] items-center justify-center rounded-full"
        style={{
          backgroundColor: available ? "rgba(45, 122, 79, 0.12)" : "rgba(168, 68, 50, 0.12)",
        }}
      >
        {available ? (
          <Check size={14} strokeWidth={2.5} style={{ color: ASTRO.available }} aria-hidden />
        ) : (
          <X size={14} strokeWidth={2.5} style={{ color: ASTRO.unavailable }} aria-hidden />
        )}
      </div>
      <span
        className={`${libreBaskerville.className} text-[10px] font-bold tracking-[0.04em]`}
        style={{ color: available ? ASTRO.available : ASTRO.unavailable }}
      >
        {available 
          ? (language === "en" ? "AVAILABLE" : "उपलब्ध है")
          : (language === "en" ? "NOT AVAILABLE" : "उपलब्ध नहीं है")
        }
      </span>
    </div>
  );
}

function DebtYogaTableRow({ row, language = "en" }: { row: DebtYogaRow; language?: string }) {
  const Icon = row.icon;

  return (
    <tr style={{ borderTop: `1px solid rgba(200, 154, 43, 0.35)` }}>
      <td className="px-2 py-5 align-middle">
        <div className="flex items-center gap-2">
          <div
            className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: row.iconBg }}
          >
            <Icon size={22} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
          </div>
          <span
            className={`${libreBaskerville.className} text-[12px] font-bold leading-tight tracking-[0.03em]`}
            style={{ color: ASTRO.darkBrown }}
          >
            {language === "en" ? row.name : row.nameHi}
          </span>
        </div>
      </td>
      <td className="px-2 py-2 align-middle" style={{ borderLeft: `1px solid rgba(200, 154, 43, 0.35)` }}>
        <AvailabilityCell available={row.available} language={language} />
      </td>
      <td
        className={`${cormorant.className} px-2 py-2 text-center text-[14px] font-semibold align-middle`}
        style={{ color: ASTRO.value, borderLeft: `1px solid rgba(200, 154, 43, 0.35)` }}
      >
        {language === "en" ? row.houses : row.housesHi}
      </td>
      <td className="px-2 py-2 align-middle" style={{ borderLeft: `1px solid rgba(200, 154, 43, 0.35)` }}>
        {row.available && row.influenceLevel && row.influencePercent !== undefined ? (
          <InfluenceBar level={row.influenceLevel} percent={row.influencePercent} />
        ) : (
          <span
            className={`${cormorant.className} block text-center text-[14px] font-semibold`}
            style={{ color: ASTRO.body }}
          >
            —
          </span>
        )}
      </td>
    </tr>
  );
}

function SummarySection({ 
  title, 
  titleHi,
  text, 
  textHi,
  language = "en" 
}: { 
  title: string; 
  titleHi: string;
  text: string; 
  textHi: string;
  language?: string;
}) {
  return (
    <section
      className="relative z-10 shrink-0 rounded-md px-4 py-3"
      style={{
        backgroundColor: '#FEF0D9',
        border: `1.5px solid ${ASTRO.borderGold}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: ASTRO.navy }}
        >
          <Image
            src={ASSETS.summaryIcon}
            alt=""
            width={100}
            height={100}
            className="object-contain"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col">
            <p
              className="font-cinzel text-[12px] font-bold tracking-[0.08em]"
              style={{ color: ASTRO.navy }}
            >
              {language === "en" ? title : titleHi}
            </p>
          </div>
          <p
            className={`${libreBaskerville.className} mt-1 text-[12px] font-bold leading-relaxed`}
            style={{ color: ASTRO.body }}
          >
            {language === "en" ? text : textHi}
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactFooter({
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: {
  website?: string;
  phone?: string;
  instagram?: string;
}) {
  return (
    <footer className="relative z-10 shrink-0 pt-2.5">
      <div
        className={`${libreBaskerville.className} flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px]`}
        style={{ color: ASTRO.body }}
      >
        <div className="flex items-center gap-1.5">
          <Globe size={15} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[12px] font-bold">{website}</span>
        </div>
        <span style={{ color: ASTRO.borderGold }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <Phone size={15} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[12px] font-bold">{phone}</span>
        </div>
        <span style={{ color: ASTRO.borderGold }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <InstagramIcon size={15} />
          <span className="text-[12px] font-bold">{instagram}</span>
        </div>
      </div>
    </footer>
  );
}

export default function DebtYogaAnalysis({
  pageNumber = "03",
  language = "en",
  sectionTitle = "DEBT YOGA ANALYSIS",
  sectionTitleHi = "ऋण योग विश्लेषण",
  sectionSubtitle = "Analysing Financial Debt Yogas & Wealth Blockages in Your Horoscope",
  sectionSubtitleHi = "आपकी कुंडली में वित्तीय ऋण योग एवं धन अवरोधों का विश्लेषण",
  introText = "This section shows whether major debt-related yogas are present in your birth chart. If present, the house(s) involved and the estimated influence level are mentioned.",
  introTextHi = "यह खंड यह दर्शाता है कि आपके जन्म कुंडली में प्रमुख ऋण योग मौजूद हैं या नहीं। यदि मौजूद हैं, तो संबंधित भाव (घर) और उनका अनुमानित प्रभाव स्तर नीचे दिया गया है।",
  tableTitle = "FINANCIAL DEBT YOGAS CHECKLIST",
  tableTitleHi = "वित्तीय ऋण योग जाँच सूची",
  rows = defaultRows,
  summaryTitle = "SUMMARY",
  summaryTitleHi = "सारांश",
  summaryText = "Your chart shows a mix of financial debt yogas that influence your money flow, debt patterns, and wealth accumulation. Some yogas are actively impacting your financial stability, while others are not currently effective. Understanding these influences helps in applying the right remedies to reduce debt burden and strengthen financial growth.",
  summaryTextHi = "आपकी कुंडली में कुछ ऋण योग सक्रिय हैं जो आपके धन प्रवाह, ऋण चक्र एवं धन संचय पर प्रभाव डालते हैं। इन योगों के प्रभाव को समझकर और उचित उपायों को अपनाकर आप ऋण भार को कम कर सकते हैं तथा अपनी वित्तीय स्थिति को मजबूत बना सकते हैं।",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: DebtYogaAnalysisProps) {
  
  const tableHeaders = {
    en: ["DEBT YOGA", "AVAILABLE OR NOT?", "HOUSE(S) INVOLVED", "INFLUENCE LEVEL"],
    hi: ["ऋण योग", "उपलब्ध है या नहीं?", "संबंधित भाव (घर)", "प्रभाव स्तर"]
  };

  return (
    <BusinessNameReportPageShell
      padding="20px 28px 16px"
      pageNumber={pageNumber}
      style={{
        boxShadow: "0 2px 12px rgba(184,134,11,0.08)",
        position: "relative",
      }}
    >
      <PageBackground />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <ReportTopBar pageNumber={pageNumber} language={language} />

        <section className="relative z-10 mt-2 shrink-0 text-center">
          <h2
            className="font-cinzel text-[20px] font-bold leading-tight tracking-[0.05em]"
            style={{ color: ASTRO.maroon }}
          >
            {language === "en" ? sectionTitle : sectionTitleHi}
          </h2>
          <p
            className={`${libreBaskerville.className} mx-auto mt-1 max-w-[520px] text-[12px] italic leading-snug`}
            style={{ color: ASTRO.navy }}
          >
            {language === "en" ? sectionSubtitle : sectionSubtitleHi}
          </p>
        </section>

        <section
          className="relative z-10 overflow-hidden rounded-md"
          style={{ border: `1.5px solid ${ASTRO.borderGold}` }}
        >
          <div
            className="px-4 py-2 text-center"
            style={{ backgroundColor: ASTRO.navy }}
          >
            <p className="font-cinzel text-[10px] font-bold tracking-[0.1em] text-white">
              ✦ {language === "en" ? tableTitle : tableTitleHi} ✦
            </p>
          </div>

          <p
            className={`${libreBaskerville.className} px-4 py-2 text-center text-[11px] leading-relaxed`}
            style={{ color: ASTRO.body, backgroundColor: "rgba(255, 248, 231, 0.65)" }}
          >
            {language === "en" ? introText : introTextHi}
          </p>

          <div className="overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "rgba(248, 238, 220, 0.9)" }}>
                  {tableHeaders[language as keyof typeof tableHeaders].map(
                    (heading, index) => (
                      <th
                        key={heading}
                        className={`${libreBaskerville.className} px-2 py-2 text-[10px] font-bold tracking-[0.05em]`}
                        style={{
                          color: ASTRO.darkBrown,
                          borderTop: `1px solid rgba(200, 154, 43, 0.35)`,
                          borderLeft: index > 0 ? `1px solid rgba(200, 154, 43, 0.35)` : undefined,
                        }}
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <DebtYogaTableRow key={row.id} row={row} language={language} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SummarySection 
          title={summaryTitle}
          titleHi={summaryTitleHi}
          text={summaryText}
          textHi={summaryTextHi}
          language={language}
        />
        <ContactFooter website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}