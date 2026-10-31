"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Calendar, Eye } from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell, { REPORT_COLORS } from "../ReportPageShell";
import { CornerFlourish } from "../CoverPageDecorations";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DISPLAY_FONT = `${display.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#641c1c",
  gold: "#c4a035",
  goldDeep: "#a67c12",
  goldLight: "#e8c56a",
  brown: REPORT_COLORS.brown,
  body: "#3c2a21",
} as const;

const ASSETS = {
  pattern: "/assets/cover/pattern-2.png",
  moon: "/assets/cover/moon.png",
  lotus: "/assets/cover/lotus.png",
  crab: "/assets/yearly-forecast-report/OIG1-removebg-preview (3).png",
  sunWheel: "/assets/cover/sun-compass.png",
  mountain: "/assets/yearly-forecast-report/mountain-sunrise.png",
} as const;

export type PlanetaryPictureProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

const COPY = {
  en: {
    titleTop: "3. Planetary Picture",
    titleBottom: (year: string | number) => `for ${year}`,
    introLead: "The biggest event in your year is the",
    introAccent: "dasha change on 11 October 2027",
    introRest:
      "Saturn, Jupiter and Rahu then decide how each part of the year feels.",
    dashaTitle: (year: string | number) => `Dasha periods in ${year}`,
    period: "Period",
    dates: "Dates",
    brings: "What it brings",
    rows: [
      {
        key: "mars-sun",
        period: "Mars–Sun",
        dates: "Until 12 Mar 2027",
        brings:
          "Sun rules your 2nd house and sits there with Mercury (Budhaditya Yoga). Focus on income, reputation and how you speak.",
      },
      {
        key: "mars-moon",
        period: "Mars–Moon",
        dates: "12 Mar – 11 Oct 2027",
        brings:
          "Moon is your Lagna lord, placed in the 6th house. You win through effort, discipline and beating competition.",
      },
      {
        key: "rahu-rahu",
        period: "Rahu–Rahu",
        dates: "From 11 Oct 2027",
        brings:
          "Rahu sits with Jupiter in your 4th house. Big ambitions, technology, scale and new networks. Home and property themes become active.",
      },
    ],
    calloutLead: "For",
    calloutLagna: "Cancer Lagna",
    calloutMid: "Mars is a Yogakaraka",
    calloutRest:
      ", so the Mars Mahadasha since 2020 has built your career foundation. Rahu now asks you to scale what Mars built.",
  },
  hi: {
    titleTop: "",
    titleBottom: (year: string | number) => `3. ${year} का ग्रहीय चित्र`,
    introLead: "आपके वर्ष की सबसे बड़ी घटना है",
    introAccent: "11 अक्टूबर 2027 को दशा परिवर्तन",
    introRest:
      "इसके बाद शनि, गुरु और राहु तय करते हैं कि वर्ष का प्रत्येक भाग कैसा लगेगा।",
    dashaTitle: (year: string | number) => `${year} में दशा काल`,
    period: "अवधि",
    dates: "तिथियाँ",
    brings: "यह क्या लाता है",
    rows: [
      {
        key: "mars-sun",
        period: "मंगल–सूर्य",
        dates: "12 मार्च 2027 तक",
        brings:
          "सूर्य आपके द्वितीय भाव के स्वामी हैं और वहीं बुध के साथ बैठे हैं (बुधादित्य योग)। आय, प्रतिष्ठा और वाणी पर ध्यान दें।",
      },
      {
        key: "mars-moon",
        period: "मंगल–चंद्र",
        dates: "12 मार्च – 11 अक्टूबर 2027",
        brings:
          "चंद्र आपके लग्न स्वामी हैं, षष्ठ भाव में स्थित। आप परिश्रम, अनुशासन और प्रतिस्पर्धा जीतकर आगे बढ़ते हैं।",
      },
      {
        key: "rahu-rahu",
        period: "राहु–राहु",
        dates: "11 अक्टूबर 2027 से",
        brings:
          "राहु आपके चतुर्थ भाव में गुरु के साथ बैठे हैं। बड़ी महत्वाकांक्षा, तकनीक, विस्तार और नए नेटवर्क। घर और संपत्ति के विषय सक्रिय होते हैं।",
      },
    ],
    calloutLead: "",
    calloutLagna: "कर्क लग्न",
    calloutMid: "मंगल योगकारक हैं",
    calloutRest:
      ", इसलिए 2020 से चली मंगल महादशा ने आपके करियर की नींव रखी है। राहु अब आपसे वही विस्तार करने को कहते हैं जो मंगल ने बनाया।",
  },
} as const;

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon }}>
      {children}
    </span>
  );
}

function OrnamentDivider({ width = 160 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      style={{ width }}
      aria-hidden
    />
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] ${className}`}
      style={{
        border: "1.6px solid rgba(184, 134, 11, 0.82)",
        boxShadow: "inset 0 0 0 1px rgba(212, 175, 55, 0.28)",
        background: "rgba(253, 245, 230, 0.42)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[54px] w-[54px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[54px] w-[54px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[54px] w-[54px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[54px] w-[54px] rotate-180" />
      {children}
    </div>
  );
}

function SaturnGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-[15px] w-[15px] shrink-0" fill="none" aria-hidden>
      <path
        d="M8.2 1.4v9.4c0 2.7-4.7 2.7-4.7-.7"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path d="M4.1 5.15h8.1" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function CornerMoon() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="pointer-events-none absolute right-[-52px] top-[-34px] z-0 h-[188px] w-[188px]"
      aria-hidden
    >
      <path
        d="M156 26c-6 12-8 30-6 50 4 42 34 78 74 92-42 16-92 2-118-36-26-38-22-86 8-112 16-14 28-12 42 6z"
        fill="#e2c36a"
        opacity="0.55"
      />
      <path
        d="M156 26c-6 12-8 30-6 50 4 42 34 78 74 92-42 16-92 2-118-36-26-38-22-86 8-112 16-14 28-12 42 6z"
        fill="none"
        stroke="#b8892a"
        strokeWidth="1.4"
        opacity="0.8"
      />
      <path
        d="M148 48c-2 16 2 36 14 58"
        fill="none"
        stroke="#f4e2a8"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <ellipse cx="140" cy="88" rx="2.2" ry="3" fill="#6d4a16" opacity="0.75" />
      <ellipse cx="156" cy="86" rx="2.2" ry="3" fill="#6d4a16" opacity="0.75" />
      <path
        d="M144 104c5 3 12 3 17 0"
        fill="none"
        stroke="#6d4a16"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M46 48l1.6 4.6 4.6 1.6-4.6 1.6L46 60.4 44.4 55.8 39.8 54.2l4.6-1.6z" fill="#d4af37" opacity="0.75" />
      <path d="M78 28l1.2 3.4 3.4 1.2-3.4 1.2L78 37.2 76.8 33.8 73.4 32.6l3.4-1.2z" fill="#d4af37" opacity="0.6" />
    </svg>
  );
}

function SunMark() {
  return (
    <div className="relative h-[54px] w-[54px] shrink-0 overflow-hidden" aria-hidden>
      <Image
        src={ASSETS.sunWheel}
        alt=""
        width={480}
        height={480}
        className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{ width: 236, height: 236 }}
      />
    </div>
  );
}

function MoonMark() {
  return (
    <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden" aria-hidden>
      <Image
        src={ASSETS.moon}
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{ width: 62, height: 62 }}
      />
    </div>
  );
}

function RahuMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-[54px] w-[54px] shrink-0" aria-hidden>
      <path
        d="M12 34c-1-16 10-26 20-18 10-8 21 2 20 18"
        fill="none"
        stroke={COLORS.gold}
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M18 32c1-10 7-15 14-10 7-5 13 0 14 10"
        fill="none"
        stroke={COLORS.goldLight}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="32" cy="42" r="16" fill="#1a140f" stroke={COLORS.gold} strokeWidth="1.8" />
      <ellipse cx="25" cy="36.5" rx="5" ry="2.8" fill="#e8c56a" opacity="0.3" />
      <circle cx="25.5" cy="39.5" r="1.3" fill={COLORS.goldLight} />
    </svg>
  );
}

function LotusMark() {
  return (
    <Image
      src={ASSETS.lotus}
      alt=""
      width={120}
      height={120}
      className="h-[46px] w-[46px] object-contain"
    />
  );
}

function PeriodIcon({ name }: { name: string }) {
  if (name === "mars-sun") return <SunMark />;
  if (name === "mars-moon") return <MoonMark />;
  return <RahuMark />;
}

const COLS = "grid-cols-[minmax(0,1.22fr)_minmax(0,0.92fr)_minmax(0,1.72fr)]";

export default function PlanetaryPicture({
  language = "en",
  pageNumber = "04",
  forecastYear = 2027,
}: PlanetaryPictureProps) {
  const t = COPY[language];
  const isHi = language === "hi";

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-planetary"
      padding="18px 34px 118px"
      backgroundImage="/assets/yearly-forecast-report/page-border.jpg"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <CornerMoon />

        <header className="relative z-10 shrink-0">
          <div className="mb-1 flex justify-center">
            <OrnamentDivider width={108} />
          </div>
          <OrnateBox className="px-6 py-[13px]">
            <h2
              className={`text-center font-bold leading-[1.14] ${isHi ? "text-[24px]" : "text-[30px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {isHi ? (
                t.titleBottom(forecastYear)
              ) : (
                <>
                  <span className="block">{t.titleTop}</span>
                  <span className="block">{t.titleBottom(forecastYear)}</span>
                </>
              )}
            </h2>
          </OrnateBox>
        </header>

        <p
          className={`relative z-10 mx-auto mt-3.5 max-w-[640px] shrink-0 text-center font-nunito-sans ${isHi ? "text-[15.5px] leading-[1.55]" : "text-[16.5px] leading-[1.48]"}`}
          style={{ color: COLORS.body }}
        >
          {isHi ? (
            <>
              {t.introLead} <Accent>{t.introAccent}</Accent>। {t.introRest}
            </>
          ) : (
            <>
              {t.introLead} <Accent>dasha change on</Accent>
              <br />
              <Accent>11 October 2027</Accent>. Saturn, Jupiter and Rahu then decide
              <br />
              how each part of the year feels.
            </>
          )}
        </p>

        <div className="relative z-10 mt-3 flex shrink-0 items-center justify-center gap-2.5">
          <OrnamentDivider width={96} />
          <p
            className={`text-center font-bold ${isHi ? "text-[16px]" : "text-[18px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.dashaTitle(forecastYear)}
          </p>
          <OrnamentDivider width={96} />
        </div>

        <OrnateBox className="relative z-10 mt-2.5 flex min-h-0 flex-1 flex-col overflow-hidden">
          <div
            className={`grid ${COLS} items-center px-3 py-2.5 text-[14px] font-bold`}
            style={{
              color: COLORS.goldDeep,
              background: "rgba(196, 160, 53, 0.16)",
              borderBottom: "1.4px solid rgba(184, 134, 11, 0.5)",
              fontFamily: DISPLAY_FONT,
            }}
          >
            <span className="flex items-center gap-1.5 pl-1">
              <SaturnGlyph />
              <span className={isHi ? "text-[13.5px]" : "text-[13.5px] tracking-[0.04em]"}>{t.period}</span>
            </span>
            <span
              className="flex items-center gap-1.5 pl-3"
              style={{ borderLeft: "1px solid rgba(184,134,11,0.4)" }}
            >
              <Calendar size={15} strokeWidth={1.8} />
              <span className={isHi ? "text-[13.5px]" : "text-[13.5px] tracking-[0.04em]"}>{t.dates}</span>
            </span>
            <span
              className="flex items-center gap-1.5 pl-3"
              style={{ borderLeft: "1px solid rgba(184,134,11,0.4)" }}
            >
              <Eye size={15} strokeWidth={1.8} />
              <span className={isHi ? "text-[13.5px]" : "text-[13.5px] tracking-[0.04em]"}>{t.brings}</span>
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className={`grid min-h-0 flex-1 ${COLS} items-center px-3`}
                style={{
                  borderTop: index === 0 ? "none" : "1px solid rgba(184,134,11,0.28)",
                }}
              >
                <div className="flex min-w-0 items-center gap-2.5 py-2 pr-2">
                  <PeriodIcon name={row.key} />
                  <span
                    className={`font-bold leading-tight ${isHi ? "text-[16px]" : "text-[17px]"}`}
                    style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
                  >
                    {row.period}
                  </span>
                </div>
                <p
                  className={`py-2 pl-3 font-nunito-sans ${isHi ? "text-[13.5px] leading-snug" : "text-[14px] leading-snug"}`}
                  style={{
                    color: COLORS.body,
                    borderLeft: "1px solid rgba(184,134,11,0.28)",
                  }}
                >
                  {row.dates}
                </p>
                <p
                  className={`py-2 pl-3 pr-2 font-nunito-sans ${isHi ? "text-[13.5px] leading-[1.45]" : "text-[14px] leading-[1.45]"}`}
                  style={{
                    color: COLORS.body,
                    borderLeft: "1px solid rgba(184,134,11,0.28)",
                  }}
                >
                  {row.brings}
                </p>
              </div>
            ))}
          </div>
        </OrnateBox>

        <div className="relative z-10 mt-2 flex shrink-0 justify-center">
          <LotusMark />
        </div>

        <OrnateBox className="relative z-10 mt-1.5 flex shrink-0 items-center gap-4 px-5 py-3">
          <Image
            src={ASSETS.crab}
            alt=""
            width={140}
            height={140}
            className="h-[102px] w-[102px] shrink-0 object-contain"
          />
          <p
            className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[15px] leading-[1.5]" : "text-[16.5px] leading-[1.48]"}`}
            style={{ color: COLORS.body }}
          >
            {isHi ? (
              <>
                <Accent>{t.calloutLagna}</Accent> के लिए <Accent>{t.calloutMid}</Accent>
                {t.calloutRest}
              </>
            ) : (
              <>
                {t.calloutLead} <Accent>{t.calloutLagna}</Accent>, <Accent>{t.calloutMid}</Accent>
                {t.calloutRest}
              </>
            )}
          </p>
        </OrnateBox>
      </div>
    </ReportPageShell>
  );
}
