"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import type { ReactNode } from "react";
import ReportPageShell from "../ReportPageShell";
import { CornerFlourish } from "../CoverPageDecorations";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const DISPLAY_FONT = `${libre.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#600C1D",
  gold: "#C4A258",
  goldDeep: "#A67C32",
  body: "#2A2420",
} as const;


export type NumerologyYearMeansProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

const COPY = {
  en: {
    title: (year: string | number) => `4. Numerology of Your ${year}`,
    yearLead: "Your",
    yearAccent: "Personal Year is 1",
    yearRest: ", the start of a fresh 9-year cycle.",
    yearClose: "What you begin in 2027 shapes your life until 2035.",
    calcLabel: "How it is calculated:",
    calcLine1: "birth day 18 (1+8 = 9) + birth month 8 + year 2027",
    calcLine2: "(2+0+2+7 = 11 → 2) = 19 → 1+9 = 10 → 1",
    meansTitleBefore: "What Personal Year ",
    meansTitleAfter: " means for you",
    items: [
      {
        key: "start",
        step: "1",
        icon: "rocket",
        title: "Start, don't wait.",
        body: "New projects, brands and roles started this year have staying power.",
        italic: "",
      },
      {
        key: "lead",
        step: "2",
        icon: "people",
        title: "Lead from the front.",
        body: "People will follow your direction more easily than in past years.",
        italic: "",
      },
      {
        key: "mulank",
        step: "3",
        icon: "9",
        title: "Your Mulank 9 + Personal Year 1:",
        body: "9 is the number of completion and 1 is the number of beginning. Old work you finished in 2026 now becomes the base for something new.",
        italic: "",
      },
      {
        key: "bhagyank",
        step: "4",
        icon: "gears",
        title: "Your Bhagyank 4:",
        body: "4 asks for systems and structure. Build processes, not just ideas.",
        italic: "",
      },
      {
        key: "name",
        step: "5",
        icon: "jupiter",
        title: "Your Name number 3:",
        body: "3 (Jupiter) is friendly to both 9 and 1, so your name supports this year's energy.",
        italic: "A full first-name and spelling check is part of the Name Correction report.",
      },
    ],
  },
  hi: {
    title: (year: string | number) => `4. आपके ${year} का अंकशास्त्र`,
    yearLead: "आपका",
    yearAccent: "व्यक्तिगत वर्ष 1 है",
    yearRest: ", एक नए 9-वर्षीय चक्र का आरंभ।",
    yearClose: "2027 में जो आप शुरू करते हैं, वह आपके जीवन को 2035 तक आकार देता है।",
    calcLabel: "गणना कैसे हुई:",
    calcLine1: "जन्म दिन 18 (1+8 = 9) + जन्म महीना 8 + वर्ष 2027",
    calcLine2: "(2+0+2+7 = 11 → 2) = 19 → 1+9 = 10 → 1",
    meansTitleBefore: "व्यक्तिगत वर्ष ",
    meansTitleAfter: " आपके लिए क्या मतलब रखता है",
    items: [
      {
        key: "start",
        step: "1",
        icon: "rocket",
        title: "प्रतीक्षा न करें, शुरू करें।",
        body: "इस वर्ष शुरू किए गए नए प्रोजेक्ट, ब्रांड और भूमिकाओं में टिकने की शक्ति होती है।",
        italic: "",
      },
      {
        key: "lead",
        step: "2",
        icon: "people",
        title: "आगे बढ़कर नेतृत्व करें।",
        body: "लोग पिछले वर्षों की तुलना में आपकी दिशा अधिक आसानी से अपनाएँगे।",
        italic: "",
      },
      {
        key: "mulank",
        step: "3",
        icon: "9",
        title: "आपका मूलांक 9 + व्यक्तिगत वर्ष 1:",
        body: "9 पूर्णता का अंक है और 1 आरंभ का अंक है। 2026 में जो पुराना काम आपने पूरा किया, वह अब नए कार्य की नींव बनता है।",
        italic: "",
      },
      {
        key: "bhagyank",
        step: "4",
        icon: "gears",
        title: "आपका भाग्यांक 4:",
        body: "4 व्यवस्था और संरचना माँगता है। केवल विचार नहीं, प्रक्रियाएँ बनाएँ।",
        italic: "",
      },
      {
        key: "name",
        step: "5",
        icon: "jupiter",
        title: "आपका नाम अंक 3:",
        body: "3 (गुरु) 9 और 1 दोनों के अनुकूल है, इसलिए आपका नाम इस वर्ष की ऊर्जा का समर्थन करता है।",
        italic: "पूरा प्रथम नाम और वर्तनी जाँच नाम सुधार रिपोर्ट का हिस्सा है।",
      },
    ],
  },
} as const;

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
      {children}
    </span>
  );
}

function DiamondRule({ className = "h-[15px] w-[188px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 228 20" className={className} fill="none" aria-hidden>
      <line x1="4" y1="10" x2="88" y2="10" stroke={COLORS.gold} strokeWidth="1.15" />
      <circle cx="94" cy="10" r="1.35" fill={COLORS.goldDeep} />
      <path d="M114 1.5L120.5 10L114 18.5L107.5 10Z" fill={COLORS.goldDeep} />
      <path d="M114 4.4L117.6 10L114 15.6L110.4 10Z" fill="#F8E7C2" />
      <circle cx="134" cy="10" r="1.35" fill={COLORS.goldDeep} />
      <line x1="140" y1="10" x2="224" y2="10" stroke={COLORS.gold} strokeWidth="1.15" />
    </svg>
  );
}

function SideSpark() {
  return (
    <svg viewBox="0 0 58 16" className="h-[12px] w-[44px] shrink-0" fill="none" aria-hidden>
      <line x1="1" y1="8" x2="16" y2="8" stroke={COLORS.goldDeep} strokeWidth="1.15" />
      <path d="M29 1L32.2 8L29 15L25.8 8Z" fill={COLORS.goldDeep} />
      <path d="M29 3.6L30.8 8L29 12.4L27.2 8Z" fill="#F6E6C0" />
      <line x1="42" y1="8" x2="57" y2="8" stroke={COLORS.goldDeep} strokeWidth="1.15" />
    </svg>
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] ${className}`}
      style={{
        border: `1.5px solid ${COLORS.gold}`,
        boxShadow: "inset 0 0 0 1px rgba(196,162,88,0.35)",
        background: "rgba(255, 248, 232, 0.42)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[48px] w-[48px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[48px] w-[48px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[48px] w-[48px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[48px] w-[48px] rotate-180" />
      {children}
    </div>
  );
}

function TitlePlaque({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto mt-1 h-[112px] w-[88%] max-w-[640px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 86" fill="none" preserveAspectRatio="none" aria-hidden>
        <path
          d="M40 5H580C598 5 608 14 603 43C608 72 598 81 580 81H40C22 81 12 72 17 43C12 14 22 5 40 5Z"
          stroke={COLORS.gold}
          strokeWidth="1.7"
        />
        <path
          d="M46 11H574C588 11 596 18 592 43C596 68 588 75 574 75H46C32 75 24 68 28 43C24 18 32 11 46 11Z"
          stroke={COLORS.gold}
          strokeWidth="1"
        />
      </svg>
      <div className="relative z-10 flex h-full items-center justify-center gap-3 px-10 py-4">
        <SideSpark />
        <h2
          className="text-center text-[32px] font-bold leading-[1.15]"
          style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
        >
          {children}
        </h2>
        <SideSpark />
      </div>
    </div>
  );
}

function StepBadge({ num }: { num: string }) {
  return (
    <div
      className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full"
      style={{
        border: `1.7px solid ${COLORS.gold}`,
        background: "rgba(255,248,230,0.85)",
        boxShadow: `inset 0 0 0 3px rgba(255,248,230,0.95), inset 0 0 0 4.4px ${COLORS.gold}`,
      }}
    >
      <span className="text-[24px] font-bold leading-none" style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {num}
      </span>
    </div>
  );
}

function CalculatorMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-[60px] w-[60px] shrink-0" fill="none" aria-hidden>
      <rect x="8" y="4" width="32" height="40" rx="5" stroke={COLORS.goldDeep} strokeWidth="2.2" />
      <rect x="13" y="9" width="22" height="8" rx="1.5" stroke={COLORS.goldDeep} strokeWidth="1.7" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={14 + col * 8}
            y={22 + row * 6.4}
            width="5.2"
            height="4.2"
            rx="0.8"
            fill={COLORS.goldDeep}
          />
        )),
      )}
    </svg>
  );
}

function RocketMark() {
  return (
    <svg viewBox="0 0 36 36" className="h-[44px] w-[44px]" fill={COLORS.goldDeep} aria-hidden>
      <path d="M18 3c4 4 6.5 9 7 15l-7 4-7-4C11.5 12 14 7 18 3Z" />
      <circle cx="18" cy="13" r="2.2" fill="#F8E7C2" />
      <path d="M11 18c-3 1.2-5 4-5.5 7L11 22v-4Z" />
      <path d="M25 18c3 1.2 5 4 5.5 7L25 22v-4Z" />
      <path d="M15.5 23.5c.8 3 1.6 5 2.5 7.5 1-2.5 1.8-4.5 2.5-7.5-1.4.6-3.6.6-5 0Z" fill="#E2B15A" />
    </svg>
  );
}

function PeopleMark() {
  return (
    <svg viewBox="0 0 40 36" className="h-[42px] w-[46px]" fill={COLORS.goldDeep} aria-hidden>
      <circle cx="20" cy="8" r="4.2" />
      <path d="M12 22c0-4.2 3.4-7 8-7s8 2.8 8 7v2H12v-2Z" />
      <circle cx="8.5" cy="12" r="3.1" />
      <path d="M2 24c0-3.4 2.6-5.6 6.2-5.6.7 0 1.4.1 2 .3C8.6 20.2 7.5 22.4 7.5 25v1.2H2V24Z" />
      <circle cx="31.5" cy="12" r="3.1" />
      <path d="M38 24c0-3.4-2.6-5.6-6.2-5.6-.7 0-1.4.1-2 .3 1.6 1.5 2.7 3.7 2.7 6.3V26.2H38V24Z" />
    </svg>
  );
}

function GearsMark() {
  return (
    <svg viewBox="0 0 40 36" className="h-[44px] w-[48px]" fill="none" aria-hidden>
      <g stroke={COLORS.goldDeep} strokeWidth="2" fill="none">
        <circle cx="16" cy="16" r="5.5" />
        <circle cx="16" cy="16" r="2" fill={COLORS.goldDeep} stroke="none" />
        <path d="M16 6.5v3.2M16 22.3v3.2M6.5 16h3.2M22.3 16h3.2M9.2 9.2l2.2 2.2M20.6 20.6l2.2 2.2M22.8 9.2l-2.2 2.2M11.4 20.6l-2.2 2.2" strokeLinecap="round" />
        <circle cx="27" cy="23" r="4.4" />
        <circle cx="27" cy="23" r="1.5" fill={COLORS.goldDeep} stroke="none" />
        <path d="M27 15.8v2.4M27 27.8v2.4M19.8 23h2.4M31.8 23h2.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function JupiterMark() {
  return (
    <svg viewBox="0 0 36 40" className="h-[46px] w-[40px]" fill="none" aria-hidden>
      <path
        d="M21 4.5C12 4.2 8 10.5 10.4 15.6C12 18.4 15.8 18.4 18.2 15.8"
        stroke={COLORS.goldDeep}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M18.6 7V36" stroke={COLORS.goldDeep} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M6 21H32" stroke={COLORS.goldDeep} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function RowIcon({ name }: { name: string }) {
  if (name === "rocket") return <RocketMark />;
  if (name === "people") return <PeopleMark />;
  if (name === "gears") return <GearsMark />;
  if (name === "jupiter") return <JupiterMark />;
  return (
    <span className="text-[42px] font-bold leading-none" style={{ color: COLORS.goldDeep, fontFamily: DISPLAY_FONT }}>
      {name}
    </span>
  );
}

export default function NumerologyYearMeans({
  language = "en",
  pageNumber = "08",
  forecastYear = 2027,
}: NumerologyYearMeansProps) {
  const t = COPY[language];
  const isHi = language === "hi";

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-numerology-means"
      padding="18px 32px 118px"
      backgroundImage="/assets/yearly-forecast-report/page-border.jpg"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <header className="relative flex shrink-0 flex-col items-center">
          <DiamondRule />
          <TitlePlaque>
            {isHi ? (
              <span className="text-[24px]">{t.title(forecastYear)}</span>
            ) : (
              <>
                4. Numerology
                <br />
                of Your {forecastYear}
              </>
            )}
          </TitlePlaque>
          <div className="mt-1.5">
            <DiamondRule />
          </div>
        </header>

        <p
          className={`mt-2.5 shrink-0 px-3 text-center ${isHi ? "text-[16px] leading-[1.5]" : "text-[18px] leading-[1.42]"}`}
          style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
        >
          {t.yearLead} <Accent>{t.yearAccent}</Accent>
          {t.yearRest}
          <br />
          {t.yearClose}
        </p>

        <OrnateBox className="mt-2.5 flex shrink-0 items-center gap-4 px-5 py-3">
          <CalculatorMark />
          <div className="h-[60px] w-px shrink-0" style={{ background: COLORS.gold }} />
          <div className="min-w-0 flex-1">
            <p
              className={`font-bold ${isHi ? "text-[16px]" : "text-[18px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {t.calcLabel}
            </p>
            <p
              className={`mt-0.5 ${isHi ? "text-[14.5px] leading-[1.45]" : "text-[16px] leading-[1.4]"}`}
              style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
            >
              {t.calcLine1}
              <br />
              {t.calcLine2}
            </p>
          </div>
        </OrnateBox>

        <OrnateBox className="mt-2.5 flex min-h-0 flex-1 flex-col px-4 pb-3 pt-4">
          <div className="flex shrink-0 items-center justify-center gap-2 px-1 py-1.5">
            <DiamondRule className="h-[14px] w-[72px]" />
            <h3
              className={`whitespace-nowrap text-center font-bold leading-none ${isHi ? "text-[20px]" : "text-[26px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {t.meansTitleBefore}1{t.meansTitleAfter}
            </h3>
            <DiamondRule className="h-[14px] w-[72px]" />
          </div>
          <div className="mt-1 flex min-h-0 flex-1 flex-col justify-between py-1">
            {t.items.map((item) => (
              <div key={item.key} className="flex items-center gap-3.5 px-1">
                <StepBadge num={item.step} />
                <div className="flex w-14 shrink-0 items-center justify-center">
                  <RowIcon name={item.icon} />
                </div>
                <p
                  className={`min-w-0 flex-1 ${isHi ? "text-[15px] leading-[1.42]" : "text-[17px] leading-[1.38]"}`}
                  style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
                >
                  <Accent>{item.title}</Accent> {item.body}
                  {item.italic ? (
                    <>
                      {" "}
                      <span className="italic">{item.italic}</span>
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </OrnateBox>
      </div>
    </ReportPageShell>
  );
}
