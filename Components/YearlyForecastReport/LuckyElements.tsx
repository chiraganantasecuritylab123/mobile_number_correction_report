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
  maroon: "#5B0C14",
  gold: "#C4A04A",
  goldDeep: "#A67C32",
  headerBg: "#F6DCA8",
  body: "#343436",
  rule: "rgba(176, 132, 52, 0.45)",
} as const;

const MOUNTAIN = "/assets/yearly-forecast-report/mountain-sunrise.png";
const GLOBE = "/assets/yearly-forecast-report/OIG3.VuEKIqKZp3h4x4R-removebg-preview.png";

export type LuckyElementsProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

const COPY = {
  en: {
    title: (year: string | number) => `The world's number in ${year}`,
    worldLead: "2027 is a",
    worldAccent: "Universal Year 11/2",
    worldRest:
      ", a master number year. Globally it favours partnerships, intuition and collaboration. For you, it means your bold Personal Year 1 works best when paired with the right partner or team.",
    luckyTitle: (year: string | number) => `Your lucky elements for ${year}`,
    element: "Element",
    value: "Your value",
    lucky: [
      { key: "numbers", icon: "numbers", label: "Lucky numbers", value: "1, 9, 3" },
      { key: "dates", icon: "dates", label: "Lucky dates (any month)", value: "1, 9, 10, 18, 19, 27, 28" },
      { key: "avoid", icon: "avoid", label: "Dates to avoid for big starts", value: "8, 17, 26" },
      { key: "colours", icon: "colours", label: "Lucky colours", value: "Red, saffron, golden yellow" },
      { key: "days", icon: "days", label: "Lucky days", value: "Sunday, Tuesday" },
      { key: "direction", icon: "direction", label: "Lucky direction", value: "East" },
    ],
    monthsTitle: "Your Personal Months",
    month: "Month",
    personalMonth: "Personal Month",
    theme: "Theme",
    months: [
      { key: "jan", icon: "snow", month: "January", num: "2", theme: "Patience, partnerships" },
      { key: "feb", icon: "heart", month: "February", num: "3", theme: "Visibility, expression" },
      { key: "mar", icon: "leaf", month: "March", num: "4", theme: "Hard work, systems" },
      { key: "apr", icon: "flower", month: "April", num: "5", theme: "Change, travel, new contacts" },
      { key: "may", icon: "people", month: "May", num: "6", theme: "Family, responsibility" },
      { key: "jun", icon: "book", month: "June", num: "7", theme: "Reflection, learning" },
      { key: "jul", icon: "chart", month: "July", num: "8", theme: "Money, power, results" },
      { key: "aug", icon: "sun", month: "August", num: "9", theme: "Completion, letting go" },
      { key: "sep", icon: "sprout", month: "September", num: "1", theme: "Fresh start inside a fresh year" },
      { key: "oct", icon: "scale", month: "October", num: "2", theme: "Cooperation, sensitivity" },
      { key: "nov", icon: "chat", month: "November", num: "3", theme: "Growth, communication" },
      { key: "dec", icon: "mountain", month: "December", num: "4", theme: "Foundation for 2028" },
    ],
  },
  hi: {
    title: (year: string | number) => `${year} में विश्व का अंक`,
    worldLead: "2027 एक",
    worldAccent: "सार्वभौमिक वर्ष 11/2",
    worldRest:
      " है, एक मास्टर अंक वर्ष। विश्व स्तर पर यह साझेदारी, अंतर्ज्ञान और सहयोग का पक्षधर है। आपके लिए इसका अर्थ है कि आपका साहसिक व्यक्तिगत वर्ष 1 सही साथी या टीम के साथ सबसे अच्छा काम करता है।",
    luckyTitle: (year: string | number) => `${year} के आपके शुभ तत्व`,
    element: "तत्व",
    value: "आपका मान",
    lucky: [
      { key: "numbers", icon: "numbers", label: "शुभ अंक", value: "1, 9, 3" },
      { key: "dates", icon: "dates", label: "शुभ तिथियाँ (किसी भी माह)", value: "1, 9, 10, 18, 19, 27, 28" },
      { key: "avoid", icon: "avoid", label: "बड़े आरंभ से बचने की तिथियाँ", value: "8, 17, 26" },
      { key: "colours", icon: "colours", label: "शुभ रंग", value: "लाल, केसरिया, सुनहरा पीला" },
      { key: "days", icon: "days", label: "शुभ दिन", value: "रविवार, मंगलवार" },
      { key: "direction", icon: "direction", label: "शुभ दिशा", value: "पूर्व" },
    ],
    monthsTitle: "आपके व्यक्तिगत महीने",
    month: "महीना",
    personalMonth: "व्यक्तिगत महीना",
    theme: "विषय",
    months: [
      { key: "jan", icon: "snow", month: "जनवरी", num: "2", theme: "धैर्य, साझेदारी" },
      { key: "feb", icon: "heart", month: "फरवरी", num: "3", theme: "दृश्यता, अभिव्यक्ति" },
      { key: "mar", icon: "leaf", month: "मार्च", num: "4", theme: "कठिन परिश्रम, व्यवस्था" },
      { key: "apr", icon: "flower", month: "अप्रैल", num: "5", theme: "परिवर्तन, यात्रा, नए संपर्क" },
      { key: "may", icon: "people", month: "मई", num: "6", theme: "परिवार, जिम्मेदारी" },
      { key: "jun", icon: "book", month: "जून", num: "7", theme: "चिंतन, अध्ययन" },
      { key: "jul", icon: "chart", month: "जुलाई", num: "8", theme: "धन, शक्ति, परिणाम" },
      { key: "aug", icon: "sun", month: "अगस्त", num: "9", theme: "पूर्णता, त्याग" },
      { key: "sep", icon: "sprout", month: "सितंबर", num: "1", theme: "नए वर्ष के भीतर नई शुरुआत" },
      { key: "oct", icon: "scale", month: "अक्टूबर", num: "2", theme: "सहयोग, संवेदनशीलता" },
      { key: "nov", icon: "chat", month: "नवंबर", num: "3", theme: "वृद्धि, संचार" },
      { key: "dec", icon: "mountain", month: "दिसंबर", num: "4", theme: "2028 की नींव" },
    ],
  },
} as const;

const LUCKY_GRID = "grid-cols-[minmax(0,1.28fr)_minmax(0,1fr)]";
const MONTH_GRID = "grid-cols-[minmax(0,1fr)_126px_minmax(0,1.28fr)]";

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
      {children}
    </span>
  );
}

function DiamondRule({ className = "h-[15px] w-[168px]" }: { className?: string }) {
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
    <svg viewBox="0 0 58 16" className="h-[12px] w-[42px] shrink-0" fill="none" aria-hidden>
      <line x1="1" y1="8" x2="16" y2="8" stroke={COLORS.goldDeep} strokeWidth="1.15" />
      <path d="M29 1L32.2 8L29 15L25.8 8Z" fill={COLORS.goldDeep} />
      <path d="M29 3.6L30.8 8L29 12.4L27.2 8Z" fill="#F6E6C0" />
      <line x1="42" y1="8" x2="57" y2="8" stroke={COLORS.goldDeep} strokeWidth="1.15" />
    </svg>
  );
}

function PlaqueCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" aria-hidden>
      <path d="M4 16C4 8 9 4 18 4" stroke={COLORS.gold} strokeWidth="1.35" strokeLinecap="round" />
      <path d="M8 14C9 9 13 7 17 8" stroke={COLORS.goldDeep} strokeWidth="0.9" strokeLinecap="round" />
      <path
        d="M7 7c2.2 1.2 3.2 2.8 2.6 4.2c-.5 1.2-1.8 1.4-2.4.5"
        stroke={COLORS.goldDeep}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] ${className}`}
      style={{
        border: `1.5px solid ${COLORS.gold}`,
        boxShadow: "inset 0 0 0 1px rgba(196,160,74,0.28)",
        background: "rgba(255, 248, 232, 0.46)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[46px] w-[46px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[46px] w-[46px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[46px] w-[46px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[46px] w-[46px] rotate-180" />
      {children}
    </div>
  );
}

function SectionTitle({ children, isHi }: { children: ReactNode; isHi: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2 px-3 pt-2 pb-1.5">
      <DiamondRule className="h-[13px] w-[78px]" />
      <h3
        className={`text-center font-bold leading-none ${isHi ? "text-[16px]" : "text-[19px]"}`}
        style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
      >
        {children}
      </h3>
      <DiamondRule className="h-[13px] w-[78px]" />
    </div>
  );
}

function GlobeMark() {
  return (
    <Image
      src={GLOBE}
      alt=""
      width={612}
      height={408}
      className="h-[124px] w-auto shrink-0 object-contain"
    />
  );
}

function MiniNum({ n }: { n: string }) {
  return (
    <div
      className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
      style={{
        border: `1.45px solid ${COLORS.goldDeep}`,
        background: "rgba(246,220,168,0.72)",
      }}
    >
      <span className="text-[11px] font-bold leading-none" style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {n}
      </span>
    </div>
  );
}

function Glyph({ children, size = 22 }: { children: ReactNode; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="shrink-0" fill="none" aria-hidden>
      {children}
    </svg>
  );
}

function LuckyIcon({ name }: { name: string }) {
  const ink = COLORS.goldDeep;
  if (name === "numbers") {
    return (
      <div className="flex items-center gap-[3px]">
        <MiniNum n="1" />
        <MiniNum n="9" />
        <MiniNum n="3" />
      </div>
    );
  }
  if (name === "dates") {
    return (
      <Glyph>
        <rect x="4" y="5" width="16" height="14" rx="2" stroke={ink} strokeWidth="1.6" />
        <path d="M4 9.5h16M8 3.5v3.2M16 3.5v3.2" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 13h2.2M11 13h2.2M14 13h2M8 16h2.2" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
      </Glyph>
    );
  }
  if (name === "avoid") {
    return (
      <Glyph>
        <circle cx="12" cy="12" r="7.2" stroke={ink} strokeWidth="1.7" />
        <path d="M7.2 16.8L16.8 7.2" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      </Glyph>
    );
  }
  if (name === "colours") {
    return (
      <Glyph>
        <path
          d="M12 4.2c-4.2 0-7 2.8-7 6.4 0 2.2 1.2 3.6 3 3.6h1.2c.7 0 1.2.5 1.2 1.2 0 1.5 1.2 2.6 2.8 2.6 3.6 0 6.8-3 6.8-7.2C20 7.2 16.4 4.2 12 4.2Z"
          stroke={ink}
          strokeWidth="1.55"
        />
        <circle cx="8.2" cy="10" r="1.05" fill={ink} />
        <circle cx="12" cy="8.2" r="1.05" fill={ink} />
        <circle cx="15.6" cy="10.2" r="1.05" fill={ink} />
      </Glyph>
    );
  }
  if (name === "days") {
    return (
      <Glyph>
        <circle cx="12" cy="12" r="3.3" stroke={ink} strokeWidth="1.6" />
        <path
          d="M12 3.4v2.2M12 18.4v2.2M3.4 12h2.2M18.4 12h2.2M5.8 5.8l1.6 1.6M16.6 16.6l1.6 1.6M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6"
          stroke={ink}
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </Glyph>
    );
  }
  return (
    <Glyph>
      <circle cx="12" cy="12" r="7.2" stroke={ink} strokeWidth="1.6" />
      <path d="M12 12L16.2 8.4" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 7.2L13.1 12L12 16.8L10.9 12Z" fill={ink} />
      <circle cx="12" cy="12" r="1.15" fill={ink} />
    </Glyph>
  );
}

function MonthIcon({ name }: { name: string }) {
  const ink = COLORS.goldDeep;
  const size = 18;
  if (name === "snow") {
    return (
      <Glyph size={size}>
        <path
          d="M12 3.2v17.6M5.2 6.6l13.6 10.8M18.8 6.6L5.2 17.4M7.2 4.8L12 7.2 16.8 4.8M7.2 19.2L12 16.8l4.8 2.4M4.2 9.2l3.2 1.2-1.2 3.4M19.8 9.2l-3.2 1.2 1.2 3.4"
          stroke={ink}
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Glyph>
    );
  }
  if (name === "heart") {
    return (
      <Glyph size={size}>
        <path
          d="M12 19.2s-6.8-4.2-6.8-8.6C5.2 7.8 7.2 6 9.4 6c1.3 0 2.2.6 2.6 1.5C12.4 6.6 13.3 6 14.6 6c2.2 0 4.2 1.8 4.2 4.6 0 4.4-6.8 8.6-6.8 8.6Z"
          stroke={ink}
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
      </Glyph>
    );
  }
  if (name === "leaf") {
    return (
      <Glyph size={size}>
        <path d="M5 19C6 10 12 5 19.5 4.5 19 12 14 18.5 5 19Z" stroke={ink} strokeWidth="1.55" strokeLinejoin="round" />
        <path d="M9 15.5C11 13 14 10.5 17 8.5" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
      </Glyph>
    );
  }
  if (name === "flower") {
    return (
      <Glyph size={size}>
        <circle cx="12" cy="12" r="2.1" fill={ink} />
        <circle cx="12" cy="6.2" r="2.3" stroke={ink} strokeWidth="1.35" />
        <circle cx="12" cy="17.8" r="2.3" stroke={ink} strokeWidth="1.35" />
        <circle cx="6.2" cy="12" r="2.3" stroke={ink} strokeWidth="1.35" />
        <circle cx="17.8" cy="12" r="2.3" stroke={ink} strokeWidth="1.35" />
      </Glyph>
    );
  }
  if (name === "people") {
    return (
      <Glyph size={size}>
        <circle cx="12" cy="7.2" r="2.2" stroke={ink} strokeWidth="1.4" />
        <path d="M8.2 16.8c.4-2.4 1.8-3.6 3.8-3.6s3.4 1.2 3.8 3.6" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="6.4" cy="8.6" r="1.7" stroke={ink} strokeWidth="1.3" />
        <path d="M3.4 16.6c.3-1.8 1.3-2.8 2.8-2.8" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="17.6" cy="8.6" r="1.7" stroke={ink} strokeWidth="1.3" />
        <path d="M20.6 16.6c-.3-1.8-1.3-2.8-2.8-2.8" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
      </Glyph>
    );
  }
  if (name === "book") {
    return (
      <Glyph size={size}>
        <path d="M12 6.2v12.6" stroke={ink} strokeWidth="1.4" />
        <path d="M12 6.5C10.2 5 6.8 4.8 4.2 6.2V18c2.6-1.2 6-1 7.8.8" stroke={ink} strokeWidth="1.45" strokeLinejoin="round" />
        <path d="M12 6.5c1.8-1.5 5.2-1.7 7.8-.3V18c-2.6-1.2-6-1-7.8.8" stroke={ink} strokeWidth="1.45" strokeLinejoin="round" />
      </Glyph>
    );
  }
  if (name === "chart") {
    return (
      <Glyph size={size}>
        <path d="M4 19h16" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 19V13M11 19V8.5M15.5 19v-6.5M20 19V6" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      </Glyph>
    );
  }
  if (name === "sun") {
    return (
      <Glyph size={size}>
        <circle cx="12" cy="12" r="3.1" stroke={ink} strokeWidth="1.5" />
        <path
          d="M12 4v2.1M12 17.9V20M4 12h2.1M17.9 12H20M6.4 6.4l1.5 1.5M16.1 16.1l1.5 1.5M17.6 6.4l-1.5 1.5M7.9 16.1l-1.5 1.5"
          stroke={ink}
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </Glyph>
    );
  }
  if (name === "sprout") {
    return (
      <Glyph size={size}>
        <path d="M12 20V11" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 13c0-3.2 2.4-5.4 6.2-5.6C18 11 15.4 13.2 12 13Z" stroke={ink} strokeWidth="1.45" strokeLinejoin="round" />
        <path d="M12 15.2c0-2.4-2-4.2-5.2-4.4C7 13.6 9.4 15.4 12 15.2Z" stroke={ink} strokeWidth="1.45" strokeLinejoin="round" />
      </Glyph>
    );
  }
  if (name === "scale") {
    return (
      <Glyph size={size}>
        <path d="M12 4.2v13.2M7 19.2h10" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.2 8.2h11.6" stroke={ink} strokeWidth="1.45" strokeLinecap="round" />
        <path d="M6.2 8.2L4 13.2h4.4L6.2 8.2Z" stroke={ink} strokeWidth="1.35" strokeLinejoin="round" />
        <path d="M17.8 8.2L15.6 13.2h4.4L17.8 8.2Z" stroke={ink} strokeWidth="1.35" strokeLinejoin="round" />
      </Glyph>
    );
  }
  if (name === "chat") {
    return (
      <Glyph size={size}>
        <path d="M5 6.2h9.2c1.2 0 2 .8 2 2v4.2c0 1.1-.8 1.9-2 1.9H9.2L6.2 17v-2.7H5c-1.1 0-1.8-.8-1.8-1.9V8.2c0-1.2.7-2 1.8-2Z" stroke={ink} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12.2 10.2h6c1 0 1.8.7 1.8 1.7v3.2c0 1-.8 1.7-1.8 1.7h-.6V19l-2.2-2.2h-3.2" stroke={ink} strokeWidth="1.35" strokeLinejoin="round" />
      </Glyph>
    );
  }
  return (
    <Glyph size={size}>
      <path d="M3.5 18.5L8.5 10l3.2 4.2L15 8.5l5.5 10" stroke={ink} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M3 18.5h18" stroke={ink} strokeWidth="1.45" strokeLinecap="round" />
    </Glyph>
  );
}

export default function LuckyElements({
  language = "en",
  pageNumber = "09",
  forecastYear = 2027,
}: LuckyElementsProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  const labelSize = isHi ? "text-[13px]" : "text-[14.5px]";
  const valueSize = isHi ? "text-[13px]" : "text-[14.5px]";

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-lucky-elements"
      padding="14px 28px 6px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 flex-col items-center">
          <DiamondRule />
          <div className="relative mx-auto mt-1 h-[58px] w-[92%] max-w-[640px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 64" fill="none" preserveAspectRatio="none" aria-hidden>
              <path
                d="M34 4H606C622 4 630 11 626 32C630 53 622 60 606 60H34C18 60 10 53 14 32C10 11 18 4 34 4Z"
                stroke={COLORS.gold}
                strokeWidth="1.7"
              />
              <path
                d="M40 9H600C612 9 618 14 615 32C618 50 612 55 600 55H40C28 55 22 50 25 32C22 14 28 9 40 9Z"
                stroke={COLORS.gold}
                strokeWidth="1"
              />
            </svg>
            <PlaqueCorner className="absolute left-[1px] top-0 h-[20px] w-[20px]" />
            <PlaqueCorner className="absolute right-[1px] top-0 h-[20px] w-[20px] -scale-x-100" />
            <PlaqueCorner className="absolute bottom-0 left-[1px] h-[20px] w-[20px] -scale-y-100" />
            <PlaqueCorner className="absolute bottom-0 right-[1px] h-[20px] w-[20px] -scale-x-100 -scale-y-100" />
            <div className="relative z-10 flex h-full items-center justify-center gap-2.5 px-7">
              <SideSpark />
              <h2
                className={`text-center font-bold leading-none ${isHi ? "text-[22px]" : "text-[28px]"}`}
                style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
              >
                {t.title(forecastYear)}
              </h2>
              <SideSpark />
            </div>
          </div>
          <div className="mt-1.5">
            <DiamondRule />
          </div>
        </header>

        <div className="mt-2 flex shrink-0 items-center gap-2 px-1">
          <GlobeMark />
          <p
            className={`min-w-0 flex-1 ${isHi ? "text-[14px] leading-[1.5]" : "text-[15.5px] leading-[1.42]"}`}
            style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
          >
            {t.worldLead} <Accent>{t.worldAccent}</Accent>
            {t.worldRest}
          </p>
        </div>

        <OrnateBox className="mt-2 shrink-0">
          <SectionTitle isHi={isHi}>{t.luckyTitle(forecastYear)}</SectionTitle>
          <div
            className={`grid ${LUCKY_GRID} items-center px-4 py-1.5 text-center font-bold`}
            style={{
              color: COLORS.maroon,
              background: COLORS.headerBg,
              borderTop: `1px solid ${COLORS.gold}`,
              borderBottom: `1px solid ${COLORS.gold}`,
              fontFamily: DISPLAY_FONT,
            }}
          >
            <span className={isHi ? "text-[13px]" : "text-[14px]"}>{t.element}</span>
            <span className={`pl-3 ${isHi ? "text-[13px]" : "text-[14px]"}`} style={{ borderLeft: `1px solid ${COLORS.rule}` }}>
              {t.value}
            </span>
          </div>
          {t.lucky.map((row, index) => (
            <div
              key={row.key}
              className={`grid ${LUCKY_GRID} items-center px-3 py-[5px]`}
              style={{ borderTop: index === 0 ? "none" : `1px solid ${COLORS.rule}` }}
            >
              <div className="flex min-w-0 items-center gap-2 pr-2">
                <div className="flex w-[72px] shrink-0 items-center justify-center">
                  <LuckyIcon name={row.icon} />
                </div>
                <span className={`font-bold ${labelSize}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {row.label}
                </span>
              </div>
              <p
                className={`pl-3 ${valueSize}`}
                style={{ color: COLORS.body, fontFamily: DISPLAY_FONT, borderLeft: `1px solid ${COLORS.rule}` }}
              >
                {row.value}
              </p>
            </div>
          ))}
        </OrnateBox>

        <OrnateBox className="mt-2 shrink-0">
          <SectionTitle isHi={isHi}>{t.monthsTitle}</SectionTitle>
          <div
            className={`grid ${MONTH_GRID} items-center px-3 py-1.5 font-bold`}
            style={{
              color: COLORS.maroon,
              background: COLORS.headerBg,
              borderTop: `1px solid ${COLORS.gold}`,
              borderBottom: `1px solid ${COLORS.gold}`,
              fontFamily: DISPLAY_FONT,
            }}
          >
            <span className={`pl-8 ${isHi ? "text-[12.5px]" : "text-[13.5px]"}`}>{t.month}</span>
            <span
              className={`text-center ${isHi ? "text-[11.5px] leading-tight" : "whitespace-nowrap text-[13.5px]"}`}
              style={{ borderLeft: `1px solid ${COLORS.rule}` }}
            >
              {t.personalMonth}
            </span>
            <span
              className={`pl-3 ${isHi ? "text-[12.5px]" : "text-[13.5px]"}`}
              style={{ borderLeft: `1px solid ${COLORS.rule}` }}
            >
              {t.theme}
            </span>
          </div>
          {t.months.map((row, index) => (
            <div
              key={row.key}
              className={`grid ${MONTH_GRID} items-center px-3 py-[3.5px]`}
              style={{ borderTop: index === 0 ? "none" : `1px solid ${COLORS.rule}` }}
            >
              <div className="flex min-w-0 items-center gap-2 pr-1">
                <MonthIcon name={row.icon} />
                <span className={`font-bold ${isHi ? "text-[12.5px]" : "text-[13.5px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {row.month}
                </span>
              </div>
              <p
                className={`text-center font-bold ${isHi ? "text-[13px]" : "text-[14px]"}`}
                style={{ color: COLORS.body, fontFamily: DISPLAY_FONT, borderLeft: `1px solid ${COLORS.rule}` }}
              >
                {row.num}
              </p>
              <p
                className={`pl-3 ${isHi ? "text-[12.5px] leading-snug" : "text-[13.5px] leading-snug"}`}
                style={{ color: COLORS.body, fontFamily: DISPLAY_FONT, borderLeft: `1px solid ${COLORS.rule}` }}
              >
                {row.theme}
              </p>
            </div>
          ))}
        </OrnateBox>

        <div className="relative z-10 -mx-3 mt-auto shrink-0 pt-1">
          <Image
            src={MOUNTAIN}
            alt=""
            width={1024}
            height={245}
            className="h-[136px] w-full object-cover object-bottom mix-blend-multiply"
          />
        </div>
      </div>
    </ReportPageShell>
  );
}
