"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import {
  CalendarDays,
  Heart,
  Home,
  RefreshCw,
  Rocket,
  Star,
  TriangleAlert,
} from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell, { REPORT_COLORS } from "../ReportPageShell";
import { CornerFlourish } from "../CoverPageDecorations";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const DISPLAY_FONT = `${libre.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#b8860b",
  goldLight: "#d4af37",
  goldMuted: "#a96505",
  brown: REPORT_COLORS.brown,
  slate: "#4a4540",
  body: "#3c2a21",
  value: "#1c2430",
} as const;

const ASSETS = {
  pattern2: "/assets/cover/pattern-2.png",
  mountain: "/assets/yearly-forecast-report/OIG4.INdp4OjRG-removebg-preview.png",
} as const;

export type YearAtAGlanceProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

const COPY = {
  en: {
    title: (year: string | number) => `2. Your ${year} at a Glance`,
    themeLabel: "Theme of the year:",
    themeName: "The Reset and Rise",
    themeBody:
      "The first half closes an old chapter; the second half opens a much bigger one.",
    keywordsTitle: "Three keywords",
    launch: "Launch",
    lead: "Lead",
    reinvent: "Reinvent",
    lifeArea: "Life area",
    score: "Score (out of 10)",
    oneLine: "One-line view",
    areas: [
      {
        key: "career",
        label: "Career and business",
        score: "8",
        view: "Strongest area; growth peaks June to September",
      },
      {
        key: "money",
        label: "Money",
        score: "7",
        view: "Income improves from late June as Jupiter enters your 2nd house",
      },
      {
        key: "love",
        label: "Love and relationships",
        score: "6",
        view: "Partnerships need patience and clear talk",
      },
      {
        key: "health",
        label: "Health",
        score: "6",
        view: "Energy is fine, but rest and routine matter more this year",
      },
      {
        key: "family",
        label: "Family and home",
        score: "6",
        view: "Home matters ask for attention, especially in the first half",
      },
    ],
    bestLabel: "Best months:",
    bestValue: "July, September, November",
    cautionLabel: "Months to move carefully:",
    cautionValue: "February, early August, October",
    turningLabel: "Turning point of the year:",
    turningValue: "11 October 2027, when Rahu Mahadasha begins",
  },
  hi: {
    title: (year: string | number) => `2. आपका ${year} एक नज़र में`,
    themeLabel: "वर्ष का विषय:",
    themeName: "रीसेट और उदय",
    themeBody:
      "पहला अर्ध एक पुराना अध्याय समेटता है; दूसरा अर्ध एक कहीं बड़ा अध्याय खोलता है।",
    keywordsTitle: "तीन मुख्य शब्द",
    launch: "आरंभ",
    lead: "नेतृत्व",
    reinvent: "नवनिर्माण",
    lifeArea: "जीवन क्षेत्र",
    score: "अंक (10 में से)",
    oneLine: "एक पंक्ति में",
    areas: [
      {
        key: "career",
        label: "करियर और व्यवसाय",
        score: "8",
        view: "सबसे मजबूत क्षेत्र; जून से सितंबर तक वृद्धि चरम पर",
      },
      {
        key: "money",
        label: "धन",
        score: "7",
        view: "जून के अंत से आय सुधरती है जब गुरु आपके द्वितीय भाव में प्रवेश करते हैं",
      },
      {
        key: "love",
        label: "प्रेम और संबंध",
        score: "6",
        view: "साझेदारी में धैर्य और स्पष्ट बातचीत चाहिए",
      },
      {
        key: "health",
        label: "स्वास्थ्य",
        score: "6",
        view: "ऊर्जा ठीक है, पर इस वर्ष विश्राम और दिनचर्या अधिक मायने रखते हैं",
      },
      {
        key: "family",
        label: "परिवार और घर",
        score: "6",
        view: "घर के मामले ध्यान माँगते हैं, विशेषकर पहले अर्ध में",
      },
    ],
    bestLabel: "सर्वोत्तम महीने:",
    bestValue: "जुलाई, सितंबर, नवंबर",
    cautionLabel: "सावधानी के महीने:",
    cautionValue: "फरवरी, अगस्त का आरंभ, अक्टूबर",
    turningLabel: "वर्ष का मोड़:",
    turningValue: "11 अक्टूबर 2027, जब राहु महादशा प्रारंभ होती है",
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
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      style={{ width }}
      aria-hidden
    />
  );
}

function TitleBanner({ title, isHi }: { title: string; isHi: boolean }) {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[740px] items-center justify-center overflow-hidden rounded-[6px] px-4 py-2.5"
      style={{
        border: "1.5px solid rgba(184,134,11,0.75)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.28)",
        background: "rgba(253, 245, 230, 0.55)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[48px] w-[48px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[48px] w-[48px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[48px] w-[48px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[48px] w-[48px] rotate-180" />
      <OrnamentDivider width={72} />
      <h2
        className={`mx-2.5 text-center font-bold leading-none normal-case ${isHi ? "text-[24px]" : "text-[30px]"}`}
        style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT, letterSpacing: "0.01em" }}
      >
        {title}
      </h2>
      <OrnamentDivider width={72} />
    </div>
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[6px] ${className}`}
      style={{
        border: "1.6px solid rgba(184,134,11,0.72)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.28)",
        background: "rgba(253, 245, 230, 0.36)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[58px] w-[58px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[58px] w-[58px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[58px] w-[58px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[58px] w-[58px] rotate-180" />
      {children}
    </div>
  );
}

function LeadMark() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.gold,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" style={{ fill: "none" }} aria-hidden>
      <path d="M3 25L14 9L25 25Z" {...stroke} strokeWidth="1.7" />
      <path d="M14 9V4" {...stroke} strokeWidth="1.6" />
      <path d="M14 4H21L19 7L14 8V4Z" {...stroke} strokeWidth="1.5" />
      <circle cx="10.5" cy="16.5" r="1.35" fill={COLORS.gold} stroke="none" />
      <path d="M10.5 18V22.5" {...stroke} strokeWidth="1.4" />
    </svg>
  );
}

function ScoreRing({ score }: { score: string }) {
  return (
    <div
      className="mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-full"
      style={{
        background: `linear-gradient(180deg, #e8c56a 0%, ${COLORS.gold} 58%, #9a7209 100%)`,
        boxShadow: "inset 0 1px 0 rgba(255,248,220,0.55), 0 1px 2px rgba(92,24,24,0.12)",
      }}
    >
      <span
        className="text-[16px] font-bold leading-none"
        style={{ color: COLORS.maroonDeep, fontFamily: DISPLAY_FONT }}
      >
        {score}
      </span>
    </div>
  );
}

function ChartMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" aria-hidden>
      <path d="M3 20H21" stroke={COLORS.gold} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="4.5" y="12" width="4" height="8" rx="0.6" fill={COLORS.gold} />
      <rect x="10" y="8" width="4" height="12" rx="0.6" fill={COLORS.gold} />
      <rect x="15.5" y="4" width="4" height="16" rx="0.6" fill={COLORS.gold} />
    </svg>
  );
}

function CoinsMark() {
  const stroke = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" style={{ fill: "none", color: COLORS.gold }} aria-hidden>
      <ellipse cx="12" cy="8" rx="7" ry="3.2" {...stroke} strokeWidth="1.7" />
      <path d="M5 8V12C5 13.8 8.1 15.2 12 15.2C15.9 15.2 19 13.8 19 12V8" {...stroke} strokeWidth="1.7" />
      <path d="M5 12V16C5 17.8 8.1 19.2 12 19.2C15.9 19.2 19 17.8 19 16V12" {...stroke} strokeWidth="1.7" />
    </svg>
  );
}

function LotusMark() {
  const stroke = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" style={{ fill: "none", color: COLORS.gold }} aria-hidden>
      <path d="M12 21C12 21 9.5 14 12 6C14.5 14 12 21 12 21Z" {...stroke} strokeWidth="1.6" />
      <path d="M12 21C12 21 6 16 5 10C9 13 12 18 12 21Z" {...stroke} strokeWidth="1.55" />
      <path d="M12 21C12 21 18 16 19 10C15 13 12 18 12 21Z" {...stroke} strokeWidth="1.55" />
      <path d="M12 21C12 21 3.5 18 3 13C8 15.5 12 19 12 21Z" {...stroke} strokeWidth="1.45" />
      <path d="M12 21C12 21 20.5 18 21 13C16 15.5 12 19 12 21Z" {...stroke} strokeWidth="1.45" />
    </svg>
  );
}

function AreaIcon({ name }: { name: string }) {
  const props = { size: 34, strokeWidth: 1.7, color: COLORS.gold } as const;
  if (name === "career") return <ChartMark />;
  if (name === "money") return <CoinsMark />;
  if (name === "love") return <Heart {...props} />;
  if (name === "health") return <LotusMark />;
  return <Home {...props} />;
}

export default function YearAtAGlance({
  language = "en",
  pageNumber = "03",
  forecastYear = 2027,
}: YearAtAGlanceProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  const keywordIconProps = { size: 22, strokeWidth: 1.9, color: COLORS.gold } as const;

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-glance"
      padding="28px 40px 26px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <header className="shrink-0">
          <TitleBanner title={t.title(forecastYear)} isHi={isHi} />
        </header>

        {/* Theme of the year */}
        <OrnateBox className="mt-3 flex shrink-0 items-center gap-4 px-4 py-3">
          <Image
            src={ASSETS.mountain}
            alt=""
            width={120}
            height={90}
            className="h-[86px] w-[114px] shrink-0 object-contain"
            priority
          />
          <div
            className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[14.5px] leading-[1.5]" : "text-[15px] leading-[1.45]"}`}
          >
            <p>
              <Accent>{t.themeLabel}</Accent>{" "}
              <span
                className="font-bold"
                style={{
                  color: COLORS.goldMuted,
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: isHi ? "16px" : "17px",
                }}
              >
                {isHi ? `“${t.themeName}।”` : `“${t.themeName}.”`}
              </span>
            </p>
            <p className="mt-1.5" style={{ color: COLORS.body }}>
              {t.themeBody}
            </p>
          </div>
        </OrnateBox>

        {/* Three keywords */}
        <div className="relative mt-8 shrink-0">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-full px-4 py-1"
              style={{
                background: `linear-gradient(180deg, #fff4d8 0%, #edd9a0 100%)`,
                border: "1.2px solid rgba(184,134,11,0.65)",
                boxShadow: "0 1px 3px rgba(92,24,24,0.08)",
              }}
            >
              <p
                className="whitespace-nowrap text-center text-[12px] font-bold tracking-[0.06em]"
                style={{ color: COLORS.maroon }}
              >
                {t.keywordsTitle}
              </p>
            </div>
          </div>
          <OrnateBox className="px-3 pb-3.5 pt-4">
          <div className="mt-1 grid grid-cols-3 items-center pt-1">
            <div className="flex items-center justify-center gap-2.5">
              <Rocket {...keywordIconProps} />
              <span
                className={`font-bold ${isHi ? "text-[16px]" : "text-[17px] tracking-[0.04em]"}`}
                style={{ color: COLORS.maroon }}
              >
                {t.launch}
              </span>
            </div>
            <div
              className="flex items-center justify-center gap-2.5"
              style={{
                borderLeft: "1px solid rgba(184,134,11,0.4)",
                borderRight: "1px solid rgba(184,134,11,0.4)",
              }}
            >
              <LeadMark />
              <span
                className={`font-bold ${isHi ? "text-[16px]" : "text-[17px] tracking-[0.04em]"}`}
                style={{ color: COLORS.maroon }}
              >
                {t.lead}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <RefreshCw {...keywordIconProps} />
              <span
                className={`font-bold ${isHi ? "text-[16px]" : "text-[17px] tracking-[0.04em]"}`}
                style={{ color: COLORS.maroon }}
              >
                {t.reinvent}
              </span>
            </div>
          </div>
          </OrnateBox>
        </div>

        {/* Life area table */}
        <OrnateBox className="mt-3 flex min-h-0 flex-1 flex-col overflow-hidden">
          <div
            className="grid grid-cols-[minmax(0,1.22fr)_112px_minmax(0,1.4fr)] items-center px-5 py-2 text-center font-bold"
            style={{
              color: COLORS.maroon,
              background: "#F6DCA8",
              borderBottom: "1px solid rgba(184,134,11,0.55)",
              fontFamily: DISPLAY_FONT,
            }}
          >
            <span
              className={isHi ? "text-[13px]" : "text-[15px]"}
              style={{ borderRight: "1px solid rgba(184,134,11,0.4)" }}
            >
              {t.lifeArea}
            </span>
            <span
              className={`px-1 leading-tight ${isHi ? "text-[12px]" : "text-[14px]"}`}
              style={{ borderRight: "1px solid rgba(184,134,11,0.4)" }}
            >
              {t.score}
            </span>
            <span className={isHi ? "text-[13px]" : "text-[15px]"}>{t.oneLine}</span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-evenly px-4">
            {t.areas.map((area, index) => (
              <div
                key={area.key}
                className="grid grid-cols-[minmax(0,1.22fr)_112px_minmax(0,1.4fr)] items-center py-2"
                style={{
                  borderTop: index === 0 ? "none" : "1px solid rgba(184,134,11,0.32)",
                }}
              >
                <div
                  className="flex min-w-0 items-center gap-3 pr-3"
                  style={{ borderRight: "1px solid rgba(184,134,11,0.32)" }}
                >
                  <span className="flex w-9 shrink-0 justify-center">
                    <AreaIcon name={area.key} />
                  </span>
                  <span
                    className={`font-bold leading-tight ${isHi ? "text-[14px]" : "text-[15.5px]"}`}
                    style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
                  >
                    {area.label}
                  </span>
                </div>
                <div style={{ borderRight: "1px solid rgba(184,134,11,0.32)" }}>
                  <ScoreRing score={area.score} />
                </div>
                <p
                  className={`pl-3 leading-[1.35] ${isHi ? "text-[13px]" : "text-[14.5px]"}`}
                  style={{ color: "#343436", fontFamily: DISPLAY_FONT }}
                >
                  {area.view}
                </p>
              </div>
            ))}
          </div>
        </OrnateBox>

        {/* Key highlights */}
        <OrnateBox className="mt-3 shrink-0 px-3 py-1.5">
          {(
            [
              {
                icon: <CalendarDays size={22} strokeWidth={1.7} color={COLORS.gold} />,
                label: t.bestLabel,
                value: t.bestValue,
              },
              {
                icon: <TriangleAlert size={22} strokeWidth={1.7} color={COLORS.gold} />,
                label: t.cautionLabel,
                value: t.cautionValue,
              },
              {
                icon: <Star size={22} strokeWidth={1.7} color={COLORS.gold} />,
                label: t.turningLabel,
                value: t.turningValue,
              },
            ] as const
          ).map((note, index) => (
            <div key={note.label}>
              {index > 0 ? (
                <div className="mx-3" style={{ borderTop: "1px solid rgba(184,134,11,0.4)" }} />
              ) : null}
              <div className="flex items-center gap-3 px-3 py-2.5">
                <span className="flex w-7 shrink-0 justify-center">{note.icon}</span>
                <p
                  className={`min-w-0 leading-snug ${isHi ? "text-[14px]" : "text-[15.5px]"}`}
                  style={{ color: "#343436", fontFamily: DISPLAY_FONT }}
                >
                  <span className="font-bold" style={{ color: COLORS.maroon }}>
                    {note.label}
                  </span>{" "}
                  {note.value}
                </p>
              </div>
            </div>
          ))}
        </OrnateBox>

        <footer className="mt-auto flex justify-center pt-2.5">
          <OrnamentDivider width={200} />
        </footer>
      </div>
    </ReportPageShell>
  );
}
